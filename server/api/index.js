import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import UserRouter from './routes/User.route.js'
import AuthRouter from './routes/Auth.route.js'
import ListingRouter from './routes/Listing.route.js'
import cookieParser from 'cookie-parser'
import path from 'path'
dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to MongoDB!')
}).catch((err) => {
    console.log(err)
})

const __dirname = path.resolve();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
    console.log('Server is running on port 3000!');
})

app.use('/api/user', UserRouter);
app.use('/api/auth', AuthRouter);
app.use('/api/listing', ListingRouter);

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});