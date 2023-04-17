import React, {useState} from "react"
import {useQuery} from "@apollo/client"
import { GET_ALL_BOOKS } from "../graphql/query"
import Book from "./Book"
const BookList = () => {

    const [selected, setSelected] = useState("")
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
                        return   <li key={ book.id } onClick={ (e) => setSelected( book.id ) }>{ book.name }</li>
                    })
                }
            </ul>
            <Book bookId={selected} />

        </>
    )
}

export default BookList