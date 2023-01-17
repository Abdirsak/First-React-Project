import {useState,useEffect} from "react";
function getData(data){
    return<div className="Comment-Box">
    <h2>{data.Name}</h2>
    <p>{data.Message}</p>
    <a href="#" className="btn">Remove</a>
</div>
}
function CommentsList(){
    const [data,setData] = useState([]);
    const [load,setLoad] = useState(1)
    useEffect(()=>{
        fetch("http://localhost:4900/CommentsList")
        .then((response)=>response.json())
        .then((student)=>setData(student))
        .catch((error)=>{
            console.log(error);
        })
    },[load]);
    return <div className="Comments" id="Comments">
    <h1>Comments List</h1>
    <a href="Comments" className="btn" onClick={()=>{setLoad(load+1)}}>Refresh</a>
        <div className="Comments-container">
            {data.map(getData)}
        </div>
    </div>
}
export default CommentsList