import React from "react";

const Pagination = ({current, pages, updatePage}) => {
    const handleUpdatePage = (e) => {
        updatePage(e.target.value);
    }
    return ( 
        <div style={{display:"flex", width:"40%", margin:"auto", justifyContent:"space-evenly"}}>
            {pages.map((n, i) => <button key={i} onClick={handleUpdatePage} 
                            value={n} disabled={n === Number(current)}
                            style={{padding:"0.1rem 2rem", fontSize:"2rem", cursor:"pointer"}}>
                                {n}
                            </button> 
            )}
        </div>
    )
}

export default Pagination;