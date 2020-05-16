import express from 'express';
import graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';
const app = express();
const port = 4000;

const schema = buildSchema(`
    type Query {
        hello: String
    }
`);
const root = {
    hello: (): string => {
        return "Hey everyone!"
    }
}

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});
