import { reviews } from '../lib/data';
import { Marquee } from './Marquee';
import ReviewCard from './ReviewCard';

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const Testimonials = () => {
  return (
    <div className="bg-gradient-to-b from-black to-[#5D2CA8] text-white py-[72px] sm:py-24">
      <div className="">
        <h2 className="text-5xl sm:text-6xl text-center font-bold tracking-tighter">
          What Our Clients Say
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-xl mt-5 text-center  text-white/70 pt-5 pb-12">
            Hear directly from our clients about their experiences and the
            impact we’ve made together.
          </p>
        </div>
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mt-9">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
