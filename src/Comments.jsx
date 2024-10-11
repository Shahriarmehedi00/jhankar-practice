import { useEffect, useState } from "react"
import './Style.css'
import Info from "./Info";

export default function Comments(){
    const [comments,setComments] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => setComments(data))

    },[])



    return(
        <div className="design">
            <h1>total Commentator:{comments.length}</h1>
            {
            comments.map(comment=><Info comment={comment}></Info>)
            }




        </div>
    )
}