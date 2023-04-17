import React, {useEffect} from "react"
import {useQuery} from "@apollo/client"
import { GET_ALL_BOOKS } from "../graphql/query"
const BookList = () => {
    const  {error, loading, data}   = useQuery(GET_ALL_BOOKS)


if(loading){
    return <h1> Lodind... </h1>
}
if(error){
    return <h2> Something went wrong</h2>
}
console.log(data)
    return (
        <>
            <ul id="book-list">
                {
                    data.books.map(book =>{
                        return <li key  ={book.id}>
                            <h5> {book.name} by {book.author.name}</h5>
                        </li>
                    })
                }
            </ul>

        </>
    )
}

export default BookList