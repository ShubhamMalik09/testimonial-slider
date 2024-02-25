import React from "react";
import Card from "./Card";

const Testimonials = (props)=>{
    let reviews = props.reviews;
    let count= props.count;
    let setCount = props.setCount;
    return(
        <div className="w-[55vw] h-[60vh] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-xl">
            <Card count={count} review ={reviews[count]} reviews={reviews} setCount={setCount}/>
        </div>
    )
};

export default Testimonials;