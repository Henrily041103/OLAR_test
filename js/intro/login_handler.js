const express = require("express"),
    passport = require("passport"),
    
    LocalStrategy = require("passport-local");

app.use(passport.initialize());
app.use(passport.session());
 
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

export function verify(username, password) {
    return JSON.stringify(username, password);
}
module.exports.verify = verify(username, password);