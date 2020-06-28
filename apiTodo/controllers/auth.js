const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../models/User')

module.exports.login = async function (req,res) {
    const candidate = await User.findOne({name: req.body.name})

    if (candidate) {
        const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)
        if (passwordResult) {
            // Генерация токена, пароли совпали
            const token = jwt.sign({                          // Метод jwt входа
                name: candidate.name,
                userId: candidate._id
            }, 'jwtKey', {expiresIn: 60 * 60})                // Секретный ключ, время жизни токена

            res.status(200).send(token)                      // Узнаить про Bearer
        } else {
            res.status(401).send('Неверный пароль')
        }
    } else {
        res.status(404).send('Такого пользователя не существует')
    }
}

module.exports.register = async function (req,res) {
    //name password
    const candidate = await User.findOne({name: req.body.name})

    if (candidate) {
        // Пользователь существует
        res.status(409).send('Такое имя занято')
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
            res.status(201).send(user)
        } catch (err) {
            // Обработка ошибки

        }
        
    }
}