'use client';
import React from 'react';
import PlusIcon from '../assets/icons/plus.svg';
import MinusIcon from '../assets/icons/minus.svg';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { faqs } from '../lib/data';

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
      <div className="flex items-center gap-x-3">
        <span className="flex-1 text-lg font-bold text-wrap">{question}</span>
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
          {faqs.map((item, index) => (
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
