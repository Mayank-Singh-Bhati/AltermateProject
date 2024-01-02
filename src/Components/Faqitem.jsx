import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const FAQItem = ({ question, answer }) => {
  // State to manage the visibility of the answer
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the visibility of the answer
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b-[1px] my-[10px]">
      {/* Question section */}
      <div className="flex justify-between items-center">
        <div className="flex items-center w-full px-[5px] justify-between">
          {/* Question text */}
          <h1 className="px-1 text-base sm:text-lg md:text-xl font-medium text-white my-[10px]">{question}</h1>
          {/* Arrow icon for toggling */}
          <div
            className="cursor-pointer transform transition-transform duration-300"
            onClick={toggleAccordion}
          >
            {/* Conditional rendering of arrow icons based on isOpen state */}
            {isOpen ? (
              <FaAngleUp className="text-white text-lg sm:text-xl md:text-2xl" />
            ) : (
              <FaAngleDown className="text-white text-lg sm:text-xl md:text-2xl" />
            )}
          </div>
        </div>
      </div>

      {/* Answer section (displayed when isOpen is true) */}
      {isOpen && (
        <div className="mb-[20px]">
          <p className="pl-3 md:pl-5 text-sm sm:text-base md:text-lg text-left text-white font-light">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;
