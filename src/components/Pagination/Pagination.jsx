import React from "react";
import './Pagination.css'

function Pagination(props){

if(props.currentPage == 1) {
    return(
        <div className="pagination">
            <p className="currentPage">Page: {props.currentPage}</p>
            <button className="pageButton" onClick={props.next}>Next</button>
        </div>
    )
}

if(props.currentPage == props.totalPage) {
    return (
        <div className="pagination">
            <p className="currentPage">Page: {props.currentPage}</p>
            <button className="pageButton" onClick={props.previous}>Previous</button>
        </div>
    )
}

}

export default Pagination;