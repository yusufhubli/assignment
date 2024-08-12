import React, { useState, useEffect } from 'react';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";


const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      url: '/assets/slide1.png',
      title: 'Slide 1',
      desc: "The logo has a clean design, but simplifying some elements could make it even more effective. Consider reducing the number of details to enhance readability at smaller sizes.",
      avatar: "men1.jpg",
      name: "John doe",
      role: "Founder,ABD project"
    },
    {
      url: '/assets/slide2.png',
      title: 'Slide 2',
      desc: "The logo looks great in its current form, but consider testing it in various formats (e.g., black and white, different sizes). Ensuring the logo remains recognizable and impactful across different media will enhance its versatility.",
      avatar: "men2.jpg",
      name: "chris evan",
      role: "Founder,shine pvt ltd"
    },
    {
      url: '/assets/file.png',
      title: 'Slide 3',
      desc: "he color palette is visually appealing, but the contrast between the logo and background can be improved. A stronger contrast would help the logo stand out more, especially in different contexts.",
      avatar: "men3.jpg",
      name: "chris evan",
      role: "CEO,MarkOne pvt ltd"
    },
  ];

  // const goToPrevious = () => {
  //   setIsAnimating(true);
  //   setTimeout(() => {
  //     const isFirstSlide = currentIndex === 0;
  //     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
  //     setCurrentIndex(newIndex);
  //     setIsAnimating(false);
  //   }, 300); 
  // };

  const goToNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
      setIsAnimating(false);
    }, 300); 
  };

  const goToSlide = (index) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 300); 
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000); 

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="md:-mt-20 w-full mx-auto py-10">
      <div className="relative pl-20 md:bg-gradient-to-r from-white via-yellow-200 to-home flex flex-col-reverse md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
        {/* Left Side - Text */}
        <div
          className={`w-full sm:w-[24rem] mt-5 -ml-12 md:w-1/2 space-y-4 transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'
            }`}
        >
          <h2 className="text-lg md:text-xl md:ml-14 text-center md:text-left"><FaQuoteLeft/>{slides[currentIndex].desc}<FaQuoteRight className=' float-end'/></h2>
          <div className=' flex items-center gap-3 md:ml-14 md:pt-5'>
            <img src={`/assets/${slides[currentIndex].avatar}`} className=' w-14 h-14 md:w-20 md:h-20 rounded-full' alt="" />
            <div>
                 <h5 className=' font-bold md:text-xl capitalize'>{slides[currentIndex].name}</h5>
                 <p className=' md:text-lg'>{slides[currentIndex].role}</p>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div
          className={`w-full md:1/2 h-64 md:h-[25rem] bg-center bg-no-repeat bg-contain  md:bg-transparent duration-500 transform transition-transform ${isAnimating ? 'translate-x-8 opacity-0' : 'translate-x-0 opacity-100'
            }`}
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        ></div>
      </div>

      {/* Bottom Buttons */}
      <div className="flex justify-center mt-8 space-x-4">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
