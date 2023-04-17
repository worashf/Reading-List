import { gql } from "@apollo/client"


export const CREATE_AUTHOR_MUTATION = gql`
 mutation addAuthor(
$name : String!,
$age: Int!
 ) {
    addAuthor(name: $name, age: $age){
        name,
        age,
        id
    }
 }`


 export const CREATE_BOOK_MUTATION = gql`
   mutation AddBook($name: String!, $genre: String!, $authorId: ID!){
    addBook(name: $name, genre: $genre, authorId: $authorId){
        name,
        genre,
    
        id
    }
   }
 `