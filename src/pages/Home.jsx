import React, { useState } from "react";

const services = [
  {
    title: "Web & Mobile App Development",
    description:
      "Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.",
    imgSrc: "./images/image 2.png",
  },
  {
    title: "Digital Strategy Consulting",
    description:
      "Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.",
    imgSrc: "./images/image 1.png",
    reverse: true,
  },
];

const faqItems = [
  {
    id: 1,
    question: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
  },
  {
    id: 2,
    question:
      "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
      answer:
      "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
  },
  {
    id: 3,
    question:
      "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?",
      answer:
      "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
  },
];

export default function Home() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (id) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <div className="">
      <section className="relative h-screen w-full px-0 md:px-15">

        <div className="md:absolute inset-0  mt-20 md:mt-10 md:-z-10 md:h-auto ">
          <img
            src="./images/hero_image.jpg"
            alt="hero background image"
            className="w-full h-[300px] md:h-full object-cover"
          />
        </div>

       
        <div
          className="bg-gradient-to-r from-analogous2 to-dark_color text-white p-8 font-interw-full md:max-w-[650px] relative md:absolute md:bottom-10 z-10"
        >
          <h1 className="font-bold text-5xl leading-snug mb-4">
            We Crush Your Competitors, Goals, And Sales Records - Without The
            B.S.
          </h1>
          <button className="bg-secondary text-md uppercase px-4 py-2 rounded font-semibold hover:bg-[#d2731e] transition cursor-pointer">
            Get Free Consultation
          </button>
        </div>
      </section>

   
      <section className=" flex flex-col items-center mx-auto my-10 space-y-10 px-8">
        {services.map(({ title, description, imgSrc, reverse }) => (
          <div
           
            className={`flex flex-col sm:flex-row items-center gap-20 lg:gap-50  ${
              reverse ? "sm:flex-row-reverse" : ""
            }`}
          >
            <img
              src={imgSrc}
              alt={title}
              className="w-150 object-contain"
            />
            <div className="max-w-xl text-center sm:text-left ">
              <h2 className="text-primary font-semibold font-poppins text-3xl mb-3">
                {title}
              </h2>
              <p className="font-inter mb-4  text-xl">{description}</p>
              <button className="bg-secondary text-white px-6 py-2 rounded hover:bg-[#d2731e] transition text-lg font-semibold cursor-pointer">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </section>

  
      <section className="max-w-4xl mx-auto px-8 mb-20 mt-20">
        <h3 className="text-center font-semibold font-poppins text-3xl mb-8 text-[#4B4BEC]">
          Frequently asked questions
        </h3>

        <div className="space-y-4">
          {faqItems.map((item) => {
            const isOpen = openIndex === item.id;
            return (
              <div
                key={item.id}
                className= "rounded-md p-4 bg-faqbg  cursor-pointer "
                onClick={() => toggleFAQ(item.id)}
              >
                <div className={`flex justify-between  font-semibold text-2xl gap-3 ${
                  isOpen ? "text-primary" : ""
                }`}>
                  <span>{item.question}</span>
                  <span className="text-xl select-none  ">
                    {isOpen ? "−" : "+"}
                  </span>
                </div>
                {isOpen && (
                  <p className="mt-2 text-[#6F6C90] text-lg">{item.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
