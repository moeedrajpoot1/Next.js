"use client"
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
const webTestimonial=[
          {
            quote: "Working with this web developer was an absolute pleasure. Their attention to detail and dedication to delivering a high-quality product exceeded my expectations. I highly recommend them for any web development project.",
            name: "John Smith",
            title: "CEO, ABC Company"
          },
          {
            quote: "I am thrilled with the website developed by this team. They were able to capture my vision perfectly and execute it with precision. Their professionalism and expertise are unmatched. I couldn't be happier with the results.",
            name: "Emily Johnson",
            title: "Marketing Manager, XYZ Corporation"
          },
          {
            quote: "As someone who is not tech-savvy, I was amazed at how easy the process was working with this web developer. They guided me through every step and created a website that exceeded my expectations. Thank you for your outstanding work!",
            name: "David Brown",
            title: "Small Business Owner"
          },
          {
            quote: "This web developer is truly exceptional. Their ability to understand our requirements and translate them into a stunning website was impressive. I would highly recommend their services to anyone looking for top-notch web development.",
            name: "Sarah Miller",
            title: "Creative Director, XYZ Design Studio"
          },
          {
            quote: "I've worked with several web developers in the past, but none have matched the level of expertise and professionalism demonstrated by this team. From start to finish, they were attentive to our needs and delivered a website that exceeded our expectations.",
            name: "Michael Johnson",
            title: "Founder, XYZ Tech Solutions"
          },
          {
            quote: "The web developer we hired for our project surpassed all our expectations. They were efficient, creative, and always responsive to our feedback. The end result was a website that perfectly represents our brand. We couldn't be happier.",
            name: "Jennifer Lee",
            title: "Director of Marketing, ABC Corporation"
          }
     
]



function TestimonialCardsdata  ()  {
  return (
    <div className="h-[40rem]  w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex
    flex-col items-center justify-center overflow-hidden"  >
        <h2 className="text-3xl font-bold text-center mb-8 z-10"  >Explore OUR Developers : Voice Of Technology</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8"  >
            <div className="w-full max-w-6xl"  >
            <InfiniteMovingCards
        items={webTestimonial}
        direction="right"
        speed="slow"
      />




            </div>



        </div>




    </div>
  )
}

export default TestimonialCardsdata