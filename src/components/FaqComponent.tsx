"use client";
import { useState } from "react";

const FAQSection = () => {
  const faqs = [
    { question: "What is Kroolo?", answer: "Kroolo is an advanced SaaS-based productivity platform. It offers a comprehensive suite of tools to manage multiple projects, tasks, and documents in one central space. From workspace and project management to task automation and AI-powered automation, Kroolo helps you streamline everything to save your time 10x." },
    { question: "How can I use Kroolo AI to automate my work?", answer: "Kroolo AI can be used to automate various tasks such as scheduling meetings, sending reminders, and generating reports. You can also use Kroolo AI to create custom workflows and automations to streamline your work processes." },
    { question: "How is Kroolo different from other productivity platforms?", answer: "Kroolo offers a comprehensive suite of tools and features that are designed to help you manage multiple projects, tasks, and documents in one central space. Kroolo also has a strong focus on AI-powered automation, which can help you save time and improve efficiency." },
    { question: "Can I start with a trial version before committing?", answer: "Yes, Kroolo offers a free trial version so you can test out the platform and see if it's a good fit for your needs before committing to a paid plan." },
    { question: "Is there a limit on the number of users on workspaces in each plan?", answer: "The free plan allows you to have 5 workspaces with 10 team members. The plus plan increases the workspaces to 10 and team members to 50. The enterprise plan allows unlimited workspaces and up to 500 team members." },
    { question: "How can I improve my team's productivity in Kroolo?", answer: "Kroolo can help boost your team's productivity by streamlining workflows, automating tasks, and improving collaboration. By using Kroolo, your team can focus on their core tasks and get more done in less time." },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-3 min-h-screen bg-black text-white p-6 sm:p-8 gap-6"
      style={{
        backgroundImage: "url('https://kroolo.com/_next/static/media/box-background.0f2314eb.svg')",
      }}
    >
      {/* Left Fixed FAQ Card */}
      <div className="bg-[#181a1d] p-6 py-8 rounded-lg shadow-lg sticky top-0 md:top-8 self-start">
        <h1 className="text-2xl font-bold">FAQs</h1>
        <p className="mt-2 text-sm text-gray-400">
          Find answers to common questions about Kroolo.
        </p>
      </div>

      {/* Right FAQ List */}
      <div className="md:col-span-2 space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="p-4 rounded-lg shadow-md bg-[#181a1d]">
            <button
              className="flex justify-between w-full text-left font-medium px-5 py-4 text-base md:py-6 lg:px-8 lg:py-[60px] lg:text-[18px]"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <span>{activeIndex === index ? "-" : "+"}</span>
            </button>
            {activeIndex === index && (
              <p className="mt-2 px-2 py-2 text-[15px] lg:px-4 lg:py-4 lg:text-base xl:leading-8 text-gray-300">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
