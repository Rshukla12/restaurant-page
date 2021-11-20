import { useState } from 'react';
import data from './data.json';
import Pagination from './Pagination';
import RestaurantCard from './RestaurantCard';

const RestaurantDetails = () => {
    const [page, setPage] = useState(1);
    const [rating, setRating] = useState(0);
    const [accept, setAccept] = useState("default");
    const [sort, setSort] = useState("none");

    const pages = [1, 2, 3];
    const ratings = [0, 1, 2, 3, 4];
    const sorting = ["none", "Highest to Lowest", "Lowest to Highest"];
    const paymentsElem = [ "none", "Cash", "Card", "Upi" ];

    const handleSort = (e) => {
        if ( e.target.textContent === "Default" ) setSort("none");
        if ( e.target.textContent === "Highest to Lowest" ) setSort("asc");
        if ( e.target.textContent === "Lowest to Highest" ) setSort("des");
    }

    const handlePayment = (e) => {
        if ( e.target.textContent === "Cash" ) setAccept("cash");
        else if ( e.target.textContent === "Card" ) setAccept("card");
        else if ( e.target.textContent === "Upi" ) setAccept("upi");
        else {
            setAccept("default");
        }
    }

    const checkAccept = (method, payment) => {
        if ( method === "upi" ) return payment.upi;
        else if ( method === "cash" ) return payment.cash;
        else if ( method === "card" ) return payment.card;
        return true;
    }

    return (
        <>
            <h1>Restaurants</h1>
            <h2>Filter By Rating</h2>
            <div style={{display:"flex", width:"70%", margin:"1rem auto 0.5rem", justifyContent:"space-evenly"}}>
                {ratings.map((el, i) => <button key={i+100} style={{padding:"0.1rem 2rem", fontSize:"1.3rem", cursor:"pointer"}} onClick={()=>setRating(el)}>{el === 0 ? "All" : el + "Star" }</button>)}
            </div>
            <h2>Filter By Payment Methods</h2>
            <div style={{display:"flex", width:"40%", margin:"1rem auto 0.5rem", justifyContent:"space-evenly"}}>
                {paymentsElem.map((el, i) => <button key={i+200} style={{padding:"0.1rem 2rem", fontSize:"1.3rem", cursor:"pointer"}} onClick={handlePayment}>{el === "none" ? "Default" : el }</button>)}
            </div>
            <h2>Sort By Cost for Two</h2>
            <div style={{display:"flex", width:"50%", margin:"1rem auto 0.5rem", justifyContent:"space-evenly"}}>
                {sorting.map((el, i) => <button key={i+1011} style={{padding:"0.1rem 2rem", fontSize:"1.3rem", cursor:"pointer"}} onClick={handleSort}>{el === "none" ? "Default" : el }</button>)}
            </div>
            
            <div style={{display: 'flex', flexWrap:'wrap', width:'98%', margin:'auto', marginTop:'1rem', marginBottom:'1rem'}}>
                {data
                .filter( item => {
                    return ( 
                        item.id >= ( (page-1)*9 + 1 ) 
                        && item.id <= ( ( page )*9 )
                        && item.rating >= rating
                        && checkAccept(accept, item.payment_methods)
                    )
                })
                .sort( (x, y) => {
                    if ( sort === "none" ) return null;
                    if ( sort === "asc" ) return y.cost_for_two - x.cost_for_two;
                    return x.cost_for_two-y.cost_for_two;
                })
                .map(item => <RestaurantCard key={item.id} data={item} />)}
            </div>
            <Pagination current={page} pages={pages} updatePage={setPage} />
        </>
    )
}

export default RestaurantDetails;