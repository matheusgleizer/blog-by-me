import { Express, NextFunction, Request, Response } from 'express';
import express from 'express';
import dotenv from 'dotenv';
import { Schema, model, connect } from 'mongoose';
import cors from 'cors';
import passport from 'passport';
import path from 'path';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import { connectDB } from './config/db';
import authRouter from './routes/auth.route';

dotenv.config();

// Connect DB
connectDB();

// Initialize app and port
const app = express();
const PORT = process.env.PORT || 5050;
const MONGO_URI = process.env.MONGO_URI;

app.use(cors());

// Sessions
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: MONGO_URI }),
  })
);

// Middleware
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Set global var
app.use((req: Request, res: Response, next: NextFunction) => {
  res.locals.user = req.user || null;
  next();
});

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', authRouter);
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

// Use Routes
// app.use('/todo', toDoRoutes);

// Server static assets if in production
// if (process.env.NODE_ENV === 'production') {
//   //Set static folder
//   app.use(express.static('client/build'));

//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   });
// }
