const { GraphQLObjectType,
    GraphQLInt,
    GraphQLID,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull,
    GraphQLString } = require("graphql")
const Book = require("../models/Book")
const Author = require("../models/Author")


const BookType = new GraphQLObjectType({
    name: "Book",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        author: {
            type: AuthorType,
            resolve(parent, args) {
                // return book author
            }
        }
    })
})


const AuthorType = new GraphQLObjectType({
    name: "Author",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        books: {
            type: BookType,
            resolve(parent, args) {
                //return books writen by the author
            }
        }
    })
})

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Book.findById(args.id)
            }
        },
        author: {
            type: AuthorType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Author.findById(args.id)
            }
        },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                return Book.find({})
            }
        },
        auhtors: {
            type: new GraphQLList(AuthorType),
            resolve(parent, args) {
                return Author.find({})
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})