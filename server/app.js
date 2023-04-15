const express  = require("express")
const  {graphqlHTTP}   = require("express-graphql")
const app  = express()


// bind express with graphql
app.use("/graphql", graphqlHTTP({

}))


app.listen(5000, ()=>{
    console.log("App started, and listening requests on port 5000")
})