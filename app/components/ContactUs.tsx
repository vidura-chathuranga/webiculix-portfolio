'use client';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Alert from './Alert';
import confetti from 'canvas-confetti';
import { MagicCard } from './MagicCard';
import helixImage from '../assets/images/helix2.png';
import emojiStart from '../assets/images/emojistar.png';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import DOMPurify from 'dompurify';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState('success');
  const [alertMessage, setAlertMessage] = useState('');

  // animations
  const contactRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: contactRef,
    offset: ['start end', 'end end'],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  const ConfettiSideCannons = () => {
    const end = Date.now() + 3 * 1000; // 3 seconds
    const colors = ['#a786ff', '#fd8bbc', '#eca184', '#f8deb1'];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const showAlertMessage = (type: string, message: string) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        'service_vyj932v',
        'template_u4y65jp',
        {
          from_name: DOMPurify.sanitize(formData.name),
          to_name: 'Vidura Thilakasiri',
          from_email: DOMPurify.sanitize(formData.email),
          to_email: 'webiculix@gmail.com',
          message: DOMPurify.sanitize(formData.message),
        },
        '0ss0ni-eyctDeNt9q',
      );
      setIsLoading(false);
      setFormData({ name: '', email: '', message: '' });
      showAlertMessage('success', 'Your message has been sent!');
      ConfettiSideCannons();
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      showAlertMessage('danger', 'Somthing went wrong!');
    }
  };
  return (
    <section
      className="relative flex items-center c-space section-spacing bg-black text-white py-[72px] sm:py-24 overflow-clip"
      id="contact"
      ref={contactRef}
    >
      <div className="relative container max-w-6xl">
        <div className="flex flex-col items-center w-full gap-5 mb-10">
          <h2 className="text-5xl sm:text-6xl text-center font-bold tracking-tighter">
            Let's Talk
          </h2>
          <div className="max-w-xl mx-auto">
            <p className="text-xl  text-center  text-white/70 pt-5 pb-12">
              Whether you're loking to build a new website, improve your
              existing platform, or bring a unique project to life, I'm here to
              help
            </p>
          </div>
        </div>
        <motion.div style={{ translateY }}>
          <Image
            src={emojiStart}
            alt=""
            className="hidden sm:block absolute z-10 lg:-top-[50px] -top-[80px] -left-20"
          />
        </motion.div>
        <motion.div style={{ translateY }}>
          <Image
            src={helixImage}
            alt=""
            className="hidden sm:block absolute z-10 lg:top-64 top-52 -right-20"
          />
        </motion.div>
        {showAlert && <Alert type={alertType} text={alertMessage} />}
        <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/25 rounded-2xl bg-black">
          <MagicCard className="w-full p-5">
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="mb-5">
                <label htmlFor="name" className="feild-label text-white">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="field-input field-input-focus text-white"
                  placeholder="John Doe"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-5">
                <label htmlFor="email" className="feild-label text-white">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="field-input field-input-focus text-white"
                  placeholder="JohnDoe@email.com"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-5">
                <label htmlFor="message" className="feild-label text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  type="text"
                  rows="4"
                  maxLength={255}
                  className="field-input field-input-focus text-white"
                  placeholder="Share your thoughts..."
                  autoComplete="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal bg-purple-500 hover-animation btn-contact"
              >
                {!isLoading ? 'Send' : 'Sending...'}
              </button>
            </form>
          </MagicCard>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
