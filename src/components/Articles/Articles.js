import React, { useEffect,useState } from 'react';
import axios from 'axios';
import s from './Articles.module.css';

const Articles =()=>{
    const [posts, setPosts] = useState([])
    const[loading, setLoading]=useState(true)
    useEffect(()=> {
        const fetchData= async()=>{
            try{
                const {data} = await axios.get(
                    'https://jsonplaceholder.typicode.com/posts'
                )
                
                setPosts(data)
            }
            catch(error){
                console.log(error)
            }
            setLoading(false)
        }
        fetchData()
    },[])
        return(

        <div >
            <h1>Articles</h1>
            {loading && 'загрузка....'}
            <div className={s.wrapper}>
            {posts.map(post =>(
                <div key={post.id}className={s.card}>
                     <h4>{post.title}</h4>
                     <p>{post.body}</p>
               
                <a href = "/">Read Now</a>
                </div>
   
            ))}
            
            </div>  

        </div>
    )
}

export default Articles;