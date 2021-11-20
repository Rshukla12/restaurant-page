import React, { useState } from "react";

const RestaurantForm = ({id}) => {
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
}