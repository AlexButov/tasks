const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const cookie = require('cookie-parser')
const mongoose = require('mongoose')
const User = mongoose.model('users')
const keys = require('../config/keys')

const cookieVerify = function(req) {
    let token = null;
    if (req && req.cookies) {
        token = req.cookies['token'];
    }
    return token;
};

const options = {
    jwtFromRequest: cookieVerify,  // ExtractJwt.fromAuthHeaderAsBearerToken() // Для передачи токена в заголовке
    secretOrKey: keys.jwt
}

module.exports = passport => {
    passport.use(
        new JwtStrategy(options, async (payload, done) => {
            try{
                const user = await User.findById(payload.userId).select('name id')

                if (user) {
                    done(null, user)
                } else {
                    done(null, false)
                }
            } catch (err) {
                console.log(err)
            }
        })
    )
}
