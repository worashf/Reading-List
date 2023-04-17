import {gql} from "@apollo/client"

export const GET_ALL_BOOKS = gql`
query{
    books{
        name,
        genre,
        id
            author{
                name,
                age
            }
        

    }
}`


export const GET_ALL_AUTHORS=  gql`
query{
    authors{
        name, 
        id
    }
}`