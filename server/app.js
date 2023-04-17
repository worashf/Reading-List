const express = require("express")
const { graphqlHTTP } = require("express-graphql")
const mongoose = require("mongoose")
const cors = require("cors")
const schema = require("./schema/Schema")
const app = express()

// allow cross origin requests
app.use(cors())

//connect to mongodb database
mongoose.connect('mongodb://127.0.0.1:27017/readingDB');
mongoose.connection.once('open', () => {
    console.log('conneted to database');
});

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(5000, () => {
    console.log("App started, and listening requests on port 5000")
})