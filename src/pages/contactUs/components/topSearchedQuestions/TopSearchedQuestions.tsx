import React, { useState } from "react";
import ExpandableArrow from "../../../../components/common/ExpandableArrow";
import { TopSearchedQuestionsProps } from "./TopSearchedQuestions.types";

const TopSearchedQuestions: React.FC<TopSearchedQuestionsProps> = ({
  faqData,
}) => {
  const [activeQuestionId, setActiveQuestionId] = useState<number | null>(null);

  const toggleAnswer = (id: number) => {
    setActiveQuestionId(activeQuestionId === id ? null : id);
  };

  return (
    <section className="lg:p-20 md:p-20 sm:p-3 bg-[#e0e0ff]">
      <div className="flex justify-center py-10" data-aos="fade-up">
        <h1 className="text-4xl font-medium px-20 pb-5 text-center md:px-10 sm:px-10">
          Popular Searched Questions
        </h1>
      </div>
      <section className="lg:p-10 px-5 pb-20" data-aos="fade-up">
        <div className="rounded-3xl mx-auto bg-[white] p-10">
          {faqData.map((faq, index) => (
            <FAQItem 
              key={faq.id} 
              faq={faq} 
              isActive={activeQuestionId === faq.id} 
              onToggle={toggleAnswer} 
              isLastItem={index === faqData.length - 1} 
            />
          ))}
        </div>
      </section>
    </section>
  );
};

const FAQItem: React.FC<{ 
  faq: { id: number; question: string; answer: string }; 
  isActive: boolean; 
  onToggle: (id: number) => void; 
  isLastItem: boolean; 
}> = ({ faq, isActive, onToggle, isLastItem }) => {
  return (
    <div className={`py-4 ${!isLastItem ? "border-b border-gray-300" : ""}`}>
      <button
        onClick={() => onToggle(faq.id)}
        className="w-full text-left flex justify-between items-center group"
        aria-expanded={isActive}
      >
        <span className="text-gray-600 font-medium text-lg">
          {faq.question}
        </span>
        <div className="flex items-center justify-center w-8 h-8 transition-colors duration-200 group-hover:bg-[#E0E0FF] rounded-3xl p-6">
          <ExpandableArrow arrowType={isActive ? "collapse" : "expand"} />
        </div>
      </button>
      {isActive && (
        <div className="text-[#424242] mt-2 max-w-[1200px] transition-all duration-300 ease-in-out">
          {faq.answer}
        </div>
      )}
    </div>
  );
};

export default TopSearchedQuestions;
