

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
module.exports = (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user);
  });
  passport.deserializeUser((user, done) => {
    done(null, user);
  });
  passport.use(new GoogleStrategy({
    clientID: "379378981745-9a448rplmqka273cflsef6hjme93umfk.apps.googleusercontent.com",
    clientSecret: "Eeackk2kFP4A2TtPPeo7Awqh",
    callbackURL: "http://localhost:3000/auth/google/callback"
  },
    (token, refreshToken, profile, done) => {
      return done(null, {
        profile: profile,
        token: token
      });
    }));
};
