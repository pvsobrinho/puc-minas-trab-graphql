require("dotenv").config();

const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server");

const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers/AeronaveResolver");

// Conexão com o MongoDB - Usar DB_URI diretamente do .env
const dbUri = process.env.DB_URI;
const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose
    .connect(dbUri, dbOptions)
    .then(() => console.log("Database connected"))
    .catch((error) => console.log("Database connection failed:", error));

// Configuração do servidor Apollo
const server = new ApolloServer({ typeDefs, resolvers });

server
    .listen()
    .then(({ url }) => console.log(`Server ready at ${url}`))
    .catch((error) => console.log("Server startup failed:", error));
