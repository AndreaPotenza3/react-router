import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
export const base_api = 'http://localhost:3000/'

export default function Blog() {

    const [newPosts, setNewPosts] = useState([])

    function fetchPosts() {
        axios.get(`${base_api}posts`)
            .then(res => {
                console.log(res.data)
                setNewPosts(res.data)
            }).catch(err => {
                console.error(err)
            })
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <>
            <h1 className='sub-title'>Characters List</h1>
            <ul className='char-list'>
                {newPosts.map(post => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <img src={`${base_api}posts${post.image}`} alt="" />
                        <p>{post.content}</p>
                        <Link to={`/${post.id}`}>Dettagli</Link>
                    </li>
                ))}
            </ul>
        </>
    )

}

