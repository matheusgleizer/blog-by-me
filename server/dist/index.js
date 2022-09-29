"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const passport_1 = __importDefault(require("passport"));
const path_1 = __importDefault(require("path"));
const express_session_1 = __importDefault(require("express-session"));
const connect_mongo_1 = __importDefault(require("connect-mongo"));
const db_1 = require("./config/db");
const auth_route_1 = __importDefault(require("./routes/auth.route"));
dotenv_1.default.config();
// Connect DB
(0, db_1.connectDB)();
// Initialize app and port
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5050;
const MONGO_URI = process.env.MONGO_URI;
app.use((0, cors_1.default)());
// Sessions
app.use((0, express_session_1.default)({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: connect_mongo_1.default.create({ mongoUrl: MONGO_URI }),
}));
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({
    extended: true,
}));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
// Set global var
app.use((req, res, next) => {
    res.locals.user = req.user || null;
    next();
});
// Static folder
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
// Routes
app.use('/', auth_route_1.default);
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
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
