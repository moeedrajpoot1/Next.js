"use client"
import Services from "../../data/data_services.json"
import Link from "next/link"
import { BackgroundGradient } from "./background-gradient"


interface servicess{
     id:number,
    title:string,
    description:string,
    price: number,
    isFeatured:boolean,
   featuredDeveloper:string,
}


function FeaturedCourses  ()  {
 const featuredCourses= Services.services.filter((service:servicess) => service.isFeatured)
  return (
    <div className="py-12 bg-gray-900 "   >
      <div>
        <div className="text-center">
            <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase"      >Available Offers</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold  -tracking-tight text-white sm:text-4xl "   >Explore With The Experts</p>
        </div>
      </div>
      <div  className="mt-10 "  >
        <div className=" mx-4 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"   >
          {featuredCourses.map((x:servicess)=>(
<div key={x.id} className="flex justify-center">

<BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden
 h-full max-w-sm  "   ><div className= "   p-4 sm:p-6 flex flex-col items-center text-center flex-grow"  >
  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200"   >{x.title}</p>
  <p className="text-sm text-neutral-600 dark:text-neutral-400  flex-grow"  >{x.description}</p>
  <Link href={`/services/${x.featuredDeveloper}`} >Explore More</Link>
  
  
  </div></BackgroundGradient>


</div>
          ))}</div>
        
        
       </div>
      <div className="mt-20 text-center ">
      <Link className="px-4 py-2 rounded border  border-neutral-600  text-neutral-700 bg-white
 hover:bg-gray-100 transition duration-200  " href={'/services'} >View All Expertse</Link>



      </div>



    </div>
  )
}

export default FeaturedCourses
