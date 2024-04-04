"use client"
import React from "react";
import { Meteors } from "../components/ui/meteors";


function page() {
  return (
   
     
    
  <div  className=" h-screen md:h-[40rem] w-full   flex flex-col items-center justify-center overflow-hidden relative mx-auto  md:py-0     bg-slate-900">
    <h1 className="text-4xl font-semibold mt-20  ">Contact Us</h1>
    <p  className="mt-4 font-sm text-base md:text-lg text-slate-300 max-w-lg mx-auto">Engage effortlessly with our team through our user-friendly Contact Us page, feedback, Your connection matters to us </p>
<div><Meteors number={90} />
<input className="  w-[650px] mx-auto h-[42px] px-10 py-5 mt-3 bg-black  rounded-2xl" type="text" placeholder="Your Email Address"/>
</div>


<div>
  <textarea className=" bg-black text-white w-[650px]  rounded-xl mt-3 pt-2 pl-4" name=""  rows={10}  placeholder="Your Message"></textarea>
</div>



<button className=" mr-[40%] bg-green-700    rounded px-3 py-1"><h1 className="text-center font-medium">Send message</h1></button>
<Meteors number={90} />

    </div>







  )
}

export default page
