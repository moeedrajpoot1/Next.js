"use client"

function Footer () {
  return (
    <footer className=" bg-blue-950  text-gray-400   py-12  ">
       <div className="  max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8 "   >

<div  ><h2 className="text-white text-lg font-semibold mb-4 " >About Us</h2>
<p>"Welcome to our corner of the web! At [Company Name], we're more than just a team of developers – </p>





</div>
<div>
<h2 className="text-white text-lg font-semibold mb-4 " >Quick Links</h2>
<ul>
    <li>Home</li>
    <li>About</li>
    <li>Services</li>
    <li>Contact</li>
</ul>



</div>
<div >
<h2 className="text-white text-lg font-semibold mb-4 mx-auto" >Follow Us</h2>
<div className=" flex  flex-col ">
<a href="#" className="hover:text-white transition-colors duration-300 "     >Facebook   </a>
<a href="#" className="hover:text-white transition-colors duration-300 "     >Instagram   </a>
<a href="#" className="hover:text-white transition-colors duration-300 "     >Twitter   </a>
<a href="#" className="hover:text-white transition-colors duration-300 "     >SnapChat</a>
</div>


</div>
<div className="ok"  ><h2 className="text-white text-lg font-semibold mb-4" >Contact  Us</h2>
<p>Punjab Pakistan</p>
<p>Lahore</p>
<p>Email: info@gmail.com</p>
<p>Phone: 090078601</p>
</div>
       </div>




<p className=" text-center text-xs pt-8"  >"© 2024 Web Technology, All Rights Reserved</p>
    </footer>
  )
}

export default Footer