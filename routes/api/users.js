const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');

//Load User Model
const User = require('../../models/User');

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public

router.get('/test', (req, res) =>  res.json({msg: "User Works"}));

// @route   GET api/users/register
// @desc    Register user
// @access  Public

router.post('/register', (req,res) => {
    User.findOne({email: req.body.email})
    .then(user => {
        if(user) {
            return res.status(400).json({email: 'Email already exists'});
        } else {
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });

            bcrypt.genSalt(10, (err,salt) => {
                bcrypt.hash(newUser.password, salt, (err,hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                })
            })
        }
    })
});

// @route   GET api/users/login
// @desc    Login user / returning JWT token
// @access  Public
router.post('/login', (req,res) => {
    const email = req.body.email;
    const password = req.body.password;

    // find user by email
    User.findOne({email})
        .then(user => {
            // check for user
            if(!user) {
                return res.status(404).json({email: 'User not found'});
            }

            // check password
            bcrypt.compare(password, user.password)
             .then(isMatch => {
                 if (isMatch) {
                    //  user matched
                    const payload = { id: user.id, name: user.name} //Create JWT Payload
                     
                    // sign token
                    jwt.sign(
                        payload,
                        keys.secretOrKey,
                        {expiresIn: 1800},
                        (err,token) => {
                            res.json({
                                success: true,
                                token: "Bearer " + token
                            });
                        });

                 } else {
                     return res.status(400).json({password: 'Password incorrect'});
                 }
             })
        })
})


module.exports= router;
