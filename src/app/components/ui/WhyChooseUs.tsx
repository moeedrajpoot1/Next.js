"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";


const webcontent = [
    {
      title: "Responsive Web Design",
      description:
        "Craft engaging websites that adapt seamlessly to various screen sizes and devices. Utilizing the latest in responsive web design techniques, we ensure that your website looks stunning and functions flawlessly, whether accessed on a desktop, tablet, or smartphone.",
    },
    {
      title: "Interactive User Experiences",
      description:
        "Immerse your audience in interactive user experiences that captivate and engage. From dynamic animations to intuitive interfaces, we employ cutting-edge technologies to create memorable interactions that keep users coming back for more.",
    },
    {
      title: "Efficient Codebase Management",
      description:
        "Streamline your development process with efficient codebase management solutions. Our platform empowers you to track changes in real-time, manage versions effortlessly, and collaborate seamlessly with your team, ensuring smooth project workflows and timely deliveries.",
    },
    {
      title: "Continuous Integration & Deployment",
      description:
        "Experience the benefits of continuous integration and deployment practices. Our platform automates the build, test, and deployment processes, allowing you to deliver updates to your web projects with confidence and efficiency, without compromising on quality.",
    },
  ];
  



function WhyChooseUs  () {
  return (
    <div> <StickyScroll content={webcontent} /></div>
  )
}

export default WhyChooseUs