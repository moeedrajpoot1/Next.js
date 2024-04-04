"use client"
import Link from "next/link"
import { HoverEffect } from "../components/ui/card-hover-effect";
function UpcomingEvents  () {

const upcomingEvents=[
  {
    title: "Web Development Bootcamp",
    description: "Join us for an intensive 3-day bootcamp covering the latest trends and technologies in web development. Learn from industry experts and gain practical skills to advance your career.",
    slug: "web-development-bootcamp",
    isFeatured: true
  },
  {
    title: "Responsive Web Design Workshop",
    description: "Discover the principles of responsive web design and how to create websites that look great on all devices. This workshop will cover CSS frameworks, media queries, and best practices.",
    slug: "responsive-web-design-workshop",
    isFeatured: false
  },
  {
    title: "Web Development Bootcamp",
    description: "Join us for an intensive 3-day bootcamp covering the latest trends and technologies in web development. Learn from industry experts and gain practical skills to advance your career.",
    slug: "web-development-bootcamp",
    isFeatured: true
  },
  {
    title: "Responsive Web Design Workshop",
    description: "Discover the principles of responsive web design and how to create websites that look great on all devices. This workshop will cover CSS frameworks, media queries, and best practices.",
    slug: "responsive-web-design-workshop",
    isFeatured: false
  },
  {
    title: "Web Development Bootcamp",
    description: "Join us for an intensive 3-day bootcamp covering the latest trends and technologies in web development. Learn from industry experts and gain practical skills to advance your career.",
    slug: "web-development-bootcamp",
    isFeatured: true
  },
  {
    title: "Responsive Web Design Workshop",
    description: "Discover the principles of responsive web design and how to create websites that look great on all devices. This workshop will cover CSS frameworks, media queries, and best practices.",
    slug: "responsive-web-design-workshop",
    isFeatured: false
  }


    
   
   












]










  return (
    <div className="p-12 bg-gray-900 "   >
<div className=" max-w-7xl mx-auto  px-4 sm:px-6 " >
<div className="text-center">
    <h2  className="text-base text-teal-600 font-semibold tracking-wide uppercase"   >Featured Events</h2>
    <p className="mt-2 text-3xl leading-8 font-extrabold  -tracking-tight text-white sm:text-4xl "  >Enhance Your Digital Presence</p>
</div>
<div className="mt-10">

<HoverEffect items={upcomingEvents.map(x=>({
  title:x.title,
  description:x.description,
  link:"/"
}))}    />

</div>
<div className="mt-10 text-center">

<Link className="px-4 py-2 rounded border  border-neutral-600  text-neutral-700 bg-white
 hover:bg-gray-100 transition duration-200  " href={'/services'} >View All Events</Link>




</div>



</div>


    </div>
  )
}

export default UpcomingEvents