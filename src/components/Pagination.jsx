import React from "react";

function Pagination(props){

if(props.currentPage == 1) {
    return <button onClick={props.next}>Next</button>
}

if(props.currentPage == props.totalPage) {
    return <button onClick={props.previous}>Previous</button>
}

 return(
    <div>
       <button></button>
       <button></button>
    </div>
 )
}

export default Pagination;