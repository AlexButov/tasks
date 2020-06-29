const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const keys = require('../config/keys')

const User = require('../models/User')

module.exports.register = async function (req,res) {
    const candidate = await User.findOne({name: req.body.name})  // Проверка на существующего пользователя

    if (candidate) {
        // Пользователь существует
        res.status(409).json({
            message: 'Такое имя занято'
        })
    } else {
        // Уникальный хэш для данного пароля для шифрования
        const salt = bcrypt.genSaltSync(10)
        const password = req.body.password
        // Нужно создать
        const user = new User({
            name: req.body.name,
            password: bcrypt.hashSync(password, salt) 
        })

        try {
            await user.save()
            res.status(201).json({
                user: user
            })
        } catch (err) {
            // Обработка ошибки
            console.log(err)
        }
        
    }
}

module.exports.login = async function (req,res) {
    const candidate = await User.findOne({name: req.body.name})

    if (candidate) {
        const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)
        if (passwordResult) {
            // Генерация токена, пароли совпали
            const token = jwt.sign({                          // Метод jwt входа
                name: candidate.name,
                userId: candidate._id
            }, keys.jwt, {expiresIn: 60 * 60})                // Секретный ключ, время жизни токена(выражается в секундах)

            res.status(200).json({
                token: `Bearer ${token}`                      // Для передачи токена в заголовке
            })
        } else {
            res.status(401).json({
                message: 'Неверный пароль'
            })
        }
    } else {
        res.status(404).json({
            message: 'Такого пользователя не существует'
        })
    }
}

module.exports.getAllUsers = async function (req, res) {
     User.find({}, (err, user) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        console.log('DB users uploaded')
        res.json({
            users: {
                user                          // Как вывести хешированный пароль?
            }
        });
    })
}

module.exports.clearAllUser = async (req, res) => {
    await User.remove({}, (err, doc) => {
            if(err) {
                console.log(err)
                return res.sendStatus(500);
            }
            res.status(204).json({
                doc: 'deleted'
            });
    })
}