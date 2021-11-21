import React, { useState } from "react";
import style from "./RestaurantForm.module.css";

const RestaurantForm = ({id, onCreateNewRestaurant}) => {
    const [details, setDetails] = useState({
        id:id,
        "title": "",
        "img_src": "",
        "categories": [],
        "cost_for_one": 0,
        "cost_for_two": 0,
        "payment_methods": {
            "card": false,
            "cash": false,
            "upi": false
        },
        "rating": 0,
        "min": 0,
        "delivery": 0,
        "votes": 0,
        "reviews": 0,
    });

    const handleChange = (e) => {
        let val = e.target.value;
        let name = e.target.name;
        if ( name === "categories" ) val = val.split(","); 
        if ( name === "cash" || name === "card" || name === "upi" ) {
            val = e.target.checked;
            name = `payment_methods.${name}`;
        }
        setDetails({
            ...details,
            [name]: val
        });
    }

    const updateForm = (e) => {
        e.preventDefault();
        onCreateNewRestaurant(details);
    }

    return (
        <form onSubmit={updateForm} className={style.form}>
            <h2>Add new Restaurant</h2>
            <div className={style.inp}>
                <label htmlFor="title">Restaurant Name</label>
                <input type="text" name="title" value={details.title} onChange={handleChange} />
            </div>
            
            <div className={style.inp}>
                <label htmlFor="image">Restaurant Image</label>
                <input type="url" name="img_src" value={details.img_src} onChange={handleChange} />
            </div>

            <div className={style.inp}>
                <label htmlFor="categories">Avilable Cuisines (Seperate with Comma) </label>
                <input type="text" name="categories" value={details.categories.join(",")} onChange={handleChange} />
            </div>
            
            <div className={style.inp}>
                <label htmlFor="cost_for_one">Cost For One in INR</label>
                <input type="number" name="cost_for_one" value={details.cost_for_one} onChange={handleChange} />
            </div>
            
            <div className={style.inp}>
                <label htmlFor="cost_for_two">Cost For Two in INR</label>
                <input type="number" name="cost_for_two" value={details.cost_for_two} onChange={handleChange} />
            </div>

            <div className={style.inp}>
                <label htmlFor="">Payment Methods Available</label>
                <div>
                    <label htmlFor="cash">Cash</label>
                    <input type="checkbox" name="cash" value={details.payment_methods.cash} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="card">Card</label>
                    <input type="checkbox" name="card" value={details.payment_methods.card} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="upi">Upi</label>
                    <input type="checkbox" name="upi" value={details.payment_methods.cash} onChange={handleChange} />
                </div>
            </div>

            
            <div className={style.inp}>
                <label htmlFor="rating">Rating (max 5) </label>
                <input type="number" name="rating" max={5} min={0} value={details.rating} onChange={handleChange} />
            </div>
            
            <div className={style.inp}>
                <label htmlFor="reviews">Number of Reviews</label>
                <input type="number" name="reviews" value={details.reviews} onChange={handleChange} />
            </div>


            <div className={style.inp}>
                <label htmlFor="votes">Number of Votes</label>
                <input type="number" name="votes" value={details.votes} onChange={handleChange} />
            </div>
            
            <div className={style.inp}>
                <label htmlFor="min">Minimum Order for Delivery ( in INR )</label>
                <input type="number" name="min" value={details.min} onChange={handleChange} />
            </div>

            
            <div className={style.inp}>
                <label htmlFor="delivery">Max Duration to reach delivery ( in Min )</label>
                <input type="number" name="delivery" value={details.delivery} onChange={handleChange} />
            </div>

            <input type="submit" value="Add New Restaurant"/>
        </form>
    )
}

export default RestaurantForm;