const express = require('express');
const asyncHandler = require('express-async-handler');
// const { singlePublicFileUpload, singleMulterUpload } = require('../../awsS3')
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');



const router = express.Router();

//sign up middle-ware
const validateSignup = [
    check('email')
        .exists({ checkFalsy: true })
        .isEmail()
        .withMessage('Please provide a valid email.'),
    check('fullname')
        .exists({ checkFalsy: true })
        .isLength({ min: 1 })
        .withMessage('Please provide your Fullname with at least 1 character.'),
    check('username')
        .not()
        .isEmail()
        .withMessage('Username cannot be an email.')
        .exists({ checkFalsy: true })
        .isLength({ min: 4 })
        .withMessage('idk man'),
    check('password')
        .exists({ checkFalsy: true })
        .isLength({ min: 6 })
        .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors
];


// Post /api/users ---Sign up


router.post(
    '/',
    validateSignup,
    asyncHandler(async (req, res) => {
        const { email, fullname, password, username } = req.body;
        const user = await User.signup({ email, username, fullname, password });

        setTokenCookie(res, user);

        return res.json({
            user,
        });
    }),
);

module.exports = router;
