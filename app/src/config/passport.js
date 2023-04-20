import passport from 'passport';
import googleStrategy from 'passport-google-oauth20';

passport.use(
    new googleStrategy({
        //options for google strat
        clientID: "259863739990-of54uicbvqqdhcl4ahsuk96avimloobb.apps.googleusercontent.com",
        clientSecret: "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"
    }), () => {
        //passport callback
    }
)