"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const database_1 = require("./database");
const schema_1 = __importDefault(require("./graphql/schema"));
const resolvers_1 = __importDefault(require("./graphql/resolvers"));
const middleware_1 = require("./config/middleware");
const apollo_server_core_1 = require("apollo-server-core");
const { PORT, NODE_ENV, DEV_ORIGIN, PROD_ORIGIN } = process.env;
const app = (0, express_1.default)();
const port = PORT || 3000;
const isDevelopment = NODE_ENV === 'development';
// const staticDir: string = isDevelopment ? './dist' : '.';
const origin = isDevelopment ? DEV_ORIGIN : PROD_ORIGIN;
const cors = {
    origin,
    credentials: true,
};
(0, middleware_1.middleware)(app);
app.get('*', (_req, res) => {
    res.sendFile('index.html', {
        root: __dirname,
    });
});
const server = new apollo_server_express_1.ApolloServer({
    typeDefs: schema_1.default,
    resolvers: resolvers_1.default,
    context: async ({ req, res }) => ({
        req,
        res,
    }),
    plugins: [(0, apollo_server_core_1.ApolloServerPluginLandingPageGraphQLPlayground)()],
});
const startServer = async () => {
    try {
        await server.start();
        server.applyMiddleware({
            app,
            cors,
            path: '/graphql',
        });
        app.listen(port, () => {
            console.log(`Express server listening on port ${port}`);
        });
    }
    catch (error) {
        console.log(error);
    }
};
database_1.db.connect().then(() => startServer());
