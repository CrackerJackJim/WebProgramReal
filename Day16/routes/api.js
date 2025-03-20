const express = require('express');
const authoMiddleware = require('middlewares\authMiddleware.js')

const router = express.Router();

router.get('/public', (req, res) => {
    res.send({message : 'welcome to the Public API!'});
});

//Protected route

router.get('/protected', authoMiddleware, (req,res)=> {
    res.send({message: 'Welcome to the Protected API!'});
});

router.get('/error', (req,res,next) => {
    const error = new Error('Something went wrond!');
    next(error);
});

module.exports= router;