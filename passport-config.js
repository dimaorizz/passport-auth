const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs')

function init() {
    const authUser = async (email, password, done) => {
        const user = getUserByEmail(email)
        if(user === null){
            return done(null, false, { message: 'No user with this email' })
        }

        try{
            if(await bcrypt.compare(password, user.password)) {
                return done(null, user);
            } else {
                return done(null, false, { message: 'Wrong password' })
            }
        } catch(err) {
            return done(err)
        }
    }
    passport.use(new LocalStrategy({ usernameField: 'email' }), authUser)
    passport.serializeUser((user, done) => {

    })
    passport.deserializeUser((id, done) => {

    })
}

module.exports = init;