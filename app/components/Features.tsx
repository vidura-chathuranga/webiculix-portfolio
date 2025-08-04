import Feature from './Feature';
const features = [
  {
    title: 'Integration Ecosystem',
    description:
      'Enhance your productivity by connecting with your tools, keeping your essentials in one place.',
  },
  {
    title: 'Goal Setting and Tracking',
    description:
      'Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.',
  },
  {
    title: 'Secure Data Encryption',
    description:
      'With end-to-end encryption, your data is securely stored and protected from unauthorized access.',
  },
];

const Features = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h1 className="text-5xl sm:text-6xl text-center font-bold tracking-tighter">
          Everything you need
        </h1>
        <div className="max-w-xl mx-auto">
          <p className="text-xl mt-5 text-center  text-white/70 pt-5">
            Webiculix is a powerful platform that provides everything you need
            to build and manage your online presence.
          </p>
        </div>
        <div className="mt-16 flex flex-col sm:flex-row gap-4 sm:flex-1">
          {features.map((feature, index) => (
            <Feature
              title={feature.title}
              description={feature.description}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
