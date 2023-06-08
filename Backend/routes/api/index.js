const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');


router.use('/session', sessionRouter);
router.use('/users', usersRouter);



router.get('/api/csrf/resotre', (req, res) => {
    if (process.env.NODE_ENV !== 'production') {
        router.get('/api/csrf/restore', (req, res) => {
            res.cookie('XSRF-TOKEN', req.csrfToken());
            return res.json({});
        });
    }
})


if (process.env.NODE_ENV === 'production') {
    const path = require('path');
    // Serve the frontend's index.html file at the root route
    router.get('/', (req, res) => {
        res.cookie('XSRF-TOKEN', req.csrfToken());
        res.sendFile(
            path.resolve(__dirname, '../../frontend', 'build', 'index.html')
        );
    });

    // router.use(express.static(path.resolve("../frontend/build")));

    // Serve the frontend's index.html file at all other routes NOT starting with /api
    router.get(/^(?!\/?api).*/, (req, res) => {
        res.cookie('XSRF-TOKEN', req.csrfToken());
        res.sendFile(
            path.resolve(__dirname, '../../frontend', 'build', 'index.html')
        );
    });
}

// Add a XSRF-TOKEN cookie in development
if (process.env.NODE_ENV !== 'production') {
    router.get('/api/csrf/restore', (req, res) => {
        res.cookie('XSRF-TOKEN', req.csrfToken());
        res.status(201).json({});
    });
}




module.exports = router;
