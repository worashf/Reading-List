import React, {useState} from "react"
import {useQuery,useMutation}  from  "@apollo/client"
import { GET_ALL_AUTHORS } from "../graphql/query"
import { CREATE_BOOK_MUTATION } from "../graphql/mutation"


 const genres = [
    "Fiction",
    "Science",
    "Romance",
    "Biography"
 ]
const AddBook =() =>{
   const {error, loading, data} = useQuery(GET_ALL_AUTHORS)
   const  [addBook,{error: mutationError, data:bookData, loading: mutationLoading}] = useMutation(CREATE_BOOK_MUTATION)
    const [name, setName] = useState("")
    const [genre, setGenre]   = useState("")
    const [authorId, setAuthorId] = useState("")

  if(loading){
    return <h3>Loading ... </h3>
  }
  if(error){
    return <h3>Something went wrong </h3>
  }
  const handleSubmit =(e)=>{
    e.preventDefault()
    addBook({
        variables:{
            name:name,
            genre: genre,
            authorId:authorId
        }
    })
    setName("")
    if(mutationError){
        return <h3> Some thing went wrong tring to create book</h3>
    }
    if(mutationLoading){
        return <h3>Loading ... to create book </h3>
    }

  }
    return(
        <div className="Add-book">
            <h3 className="form-title">Add Book</h3>
            <form className="from" onSubmit={handleSubmit}>
                <div className="group">
                    <label> Name</label>
                    <input type="text"  value={name}  onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="group">
                    <label> Genre</label>
                   <select value={genre} onChange={(e) =>setGenre(e.target.value)}>
                    {genres.map(gen =>(
                        <option key ={gen} value={gen}>{gen}</option>
                    ))}
                   </select>
                </div>
                <div className="group">
                    <label> Genre</label>
                   <select value={authorId} onChange={(e) =>setAuthorId(e.target.value)}>
                    {data.authors.map(author =>(
                        <option key ={author.id} value={author.id}>{author.name}</option>
                    ))}
                   </select>
                </div>
                <button type="submit">Save</button>
                
            </form>
        </div>

    )
}

export default AddBook