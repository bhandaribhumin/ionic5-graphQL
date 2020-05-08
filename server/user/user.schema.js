var GraphQLObjectType = require("graphql").GraphQLObjectType;
var GraphQLSchema = require("graphql").GraphQLSchema;
var GraphQLFloat = require("graphql").GraphQLFloat;
var GraphQLString = require("graphql").GraphQLString;
var GraphQLList = require("graphql").GraphQLList;

var USERs = [
  {
    id: 1446412739542,
    name: "Bhumin",
  },
  {
    id: 1446412740883,
    name: "Lee",
  },
];
var UserType = new GraphQLObjectType({
  name: "user",
  fields: function () {
    return {
      id: {
        type: GraphQLFloat,
      },
      name: {
        type: GraphQLString,
      },
    };
  },
});
var queryType = new GraphQLObjectType({
  name: "Query",
  fields: function () {
    return {
      users: {
        type: new GraphQLList(UserType),
        resolve: function () {
          return USERs;
        },
      },
    };
  },
});
exports.userSchema = new GraphQLSchema({
  query: queryType,
});
