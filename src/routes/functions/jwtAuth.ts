import passport = require("passport");
import passportJWT = require("passport-jwt");
require('dotenv').config();

const SECRET = process.env.JwtSecret

const jwtOptions = {
    jwtFromRequest: passportJWT.ExtractJwt.fromHeader("authorization"),
    secretOrKey: SECRET
}
export const jwtAuth = new passportJWT.Strategy(jwtOptions, (payload, done) => {
    if (payload.sub === process.env.USER) done(null, true);
    else done(null, false);
})

export const requireJWTAuth = passport.authenticate("jwt",{session:false});
