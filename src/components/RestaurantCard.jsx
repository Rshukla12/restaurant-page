import React from "react";
import style from "./RestaurantCard.module.css";

const RestaurantCard = ({data}) => {
    // Logic to check avialble payment methods
    let accepted = [];
    if ( !(data.payment_methods.card && data.payment_methods.upi && data.payment_methods.card) ){
        if ( data.payment_methods.card ) accepted.push("card");
        if ( data.payment_methods.upi ) accepted.push("upi");
        if ( data.payment_methods.cash ) accepted.push("cash");
    }

    accepted = accepted.join(" and ");

    return (
        <div className={style.card}>
            <div className={style.upper}>
                <img className={style.img} src={data.img_src} alt={data.title} />
                {/* Main Part */}
                <div className={style.centerBox}>
                    <h2 className={style.title}>{data.title}</h2>
                    <p className={style.belowMain}>{data.categories.join(", ")}</p>
                    <p className={style.belowMain}>Costs &#8377;{data.cost_for_one} for one</p>
                    <div className={style.meta}>
                        <p>Min &#8377;{data.min}</p>
                        <div className={style.dot}></div>
                        <p>Delivery in {data.delivery} min</p>
                    </div>

                    {accepted.length ?  <p>Accepts {accepted} payments only</p> : <p>Accepts All payments options </p>} 
                </div>
                {/* Ratings */}
                <div className={style.ratingBox}>
                    <div className={style.rating}>{data.rating}</div>
                    <div className={style.belowMain}>{data.votes} votes</div>
                    <div className={style.belowMain}>{data.reviews} reviews</div>
                </div>
            </div>
            {/* Footer */}
            <div className={style.footer}>
                <div className={style.order}>
                    {"Order Online >"}
                </div>
            </div>
        </div>
    )
}

export default RestaurantCard;