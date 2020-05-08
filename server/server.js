var userSchema = require("./user/user.schema").userSchema;

const express = require("express");
const graphqlHTTP = require("express-graphql");
var cors = require("cors");

const app = express();
app.use("*", cors());

app.use(
  "/graphql",
  cors(),
  graphqlHTTP({
    schema: userSchema,
    graphiql: true,
  })
);

app.listen(4100);
console.log("Running a GraphQL API server at http://localhost:4100/graphql");
