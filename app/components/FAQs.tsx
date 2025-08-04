'use client';
import React from 'react';
import PlusIcon from '../assets/icons/plus.svg';
import MinusIcon from '../assets/icons/minus.svg';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
const items = [
  {
    question: 'What is Webiculix?',
    answer:
      'Webiculix is a powerful platform that provides everything you need to build and manage your online presence.',
  },
  {
    question: 'How do I get started?',
    answer:
      'You can get started by signing up on our website and exploring the features we offer.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Yes, we use end-to-end encryption to ensure that your data is securely stored and protected from unauthorized access.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Yes, we use end-to-end encryption to ensure that your data is securely stored and protected from unauthorized access.',
  },
];

type AccordionItemProps = {
  question: string;
  answer: string;
};

const AccordionItem = ({ question, answer }: AccordionItemProps) => {
  const [isOpened, setIsOpened] = React.useState(false);
  return (
    <div
      className="py-7 border-b border-white/30"
      onClick={() => setIsOpened(!isOpened)}
    >
      <div className="flex items-center">
        <span className="flex-1 text-lg font-bold">{question}</span>
        {!isOpened ? <PlusIcon /> : <MinusIcon />}
      </div>
      <AnimatePresence>
        {isOpened && ( 
          <motion.div
            className={'text-white/70'}
            initial={{
              opacity: 0,
              height: 0,
              marginTop: 0,
            }}
            animate={{ opacity: 1, height: 'auto', marginTop: '16px' }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
const FAQs = () => {
  return (
    <div className="bg-gradient-to-b from-[#5D2CA8] to-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl sm:text-6xl sm:max-w-[648px] mx-auto tracking-tighter font-bold">
          Frequently asked questions
        </h2>
        <div className="mt-12 max-w-[648px] mx-auto">
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
