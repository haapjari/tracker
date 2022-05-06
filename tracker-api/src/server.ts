import http from 'http';
import express, { Express } from 'express';
// import config = require('../src/utils/config');
import habitsRouter from './routes/habits_router';
import morgan from 'morgan';

const router: Express = express();

// const PORT: number = config.PORT;
const PORT: number = 8080;
// const BASE_URL: string = Constants.BASE_URL;

router.use(morgan('dev'));
router.use(express.urlencoded({ extended: false }));
router.use(express.json());

// TODO CORS and Logging

// router.use((req, res, next) => {
//     // set the CORS policy
//     res.header('Access-Control-Allow-Origin', '*');
//     // set the CORS headers
//     res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
//     // set the CORS method headers
//     if (req.method === 'OPTIONS') {
//         res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
//         return res.status(200).json({});
//     }
//     next();
// });

router.use('/api/habits', habitsRouter);
// router.use('/api/users', usersRouter);

const httpServer = http.createServer(router);
httpServer.listen(PORT, () => console.log(`Tracker API Listening Port: ${PORT}`));

module.exports = router;
