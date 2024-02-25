import React from "react";
import { FaQuoteLeft, FaQuoteRight, FaAngleLeft, FaAngleRight } from "react-icons/fa";
const Card = (props)=>{
    let review = props.review; 
    let count = props.count;
    let reviews = props.reviews;
    let setCount = props.setCount;

    async function leftHandler(){
        if(count===0){
            await setCount(reviews.length-1);
        }
        else{
            await setCount(count-1);
        }
    }

    async function rightHandler(){
        if(count === reviews.length-1){
            await setCount(0);
        }
        else{
            await setCount(count+1);
        }
    }

    async function randomHandler(){
        let ran = Math.floor(Math.random() * reviews.length);
        if(ran == count){
            randomHandler();
        }
        else{
            await setCount(ran);
        }
    }
    return (
        <div className=" flex flex-col relative">
            <div className=" absolute top-[-7rem] z-[10] mx-auto">
                <img className=" aspect-square rounded-full w-[140px] h-[140px] z-25"  src={review.image}/>
                <div className=" w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-10] left-[10px]"></div>
            </div>
            <div className="text-center mt-7">
                <p className=" font-bold text-2xl capitalize">{review.name}</p>
            </div>
            <div className="text-center mt-1">
                <p className=" text-violet-300 uppercase text-sm">{review.job}</p>
            </div>

            <div>
                <FaQuoteLeft className=" text-violet-400 mx-auto mt-5"/>
                <p className=" text-center mt-4 text-slate-500">{review.text}</p>
                <FaQuoteRight className=" text-violet-400 mx-auto mt-5"/>
            </div>

            <div className=" flex text-3xl justify-center mt-5 gap-3 text-violet-400 font-bold">
                <FaAngleLeft className=" cursor-pointer hover:text-violet-500 " onClick={leftHandler}/>
                <FaAngleRight className=" cursor-pointer hover:text-violet-500 " onClick={rightHandler}/>
            </div>
            <div >
                <button className=" bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 font-bold text-white text-lg rounded-md mt-5" onClick={randomHandler}>Surprise Me</button>
            </div>
        </div>
    )
}

export default Card;