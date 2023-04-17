import { useQuery } from "@apollo/client"
import { GET_BOOK_INFO } from "../graphql/query"


const Book = ({ bookId }) => {

    const { data, error, loading } = useQuery(GET_BOOK_INFO, {
        variables: {
            id: bookId
        }
    })

    if (loading) {
        return <h3> Loading ... </h3>
    }
    if (error) {
        return < h3> Something went wrong</h3>
    }

    const { book } = data
    return (
        <div>
            <h2>{book.name}</h2>
            <p>{book.genre}</p>
            <p>{book.author.name}</p>
            <p>All books by this author:</p>
            <ul className="other-books">
                {book.author.books.map(item => {
                    return <li key={item.id}>{item.name}</li>
                })}
            </ul>
        </div>
    )

}



export default Book