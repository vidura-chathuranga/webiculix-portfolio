import InstaIcon from '../assets/icons/insta.svg';
import LinkedInIcon from '../assets/icons/linkedin.svg';

const socials = [
  {
    name: 'Instagram',
    icon: InstaIcon,
    link: 'https://www.instagram.com/webiculix/',
  },
  {
    name: 'LinkedIn',
    icon: LinkedInIcon,
    link: 'https://www.linkedin.com/company/webiculix/',
  },
];
const Footer = () => {
  return (
    <footer className="bg-black text-white/60 py-5 border-t border-white/2 0">
      <div className="container">
        <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
          <div className="text-center">
            © 2025 Webiculix, Inc. All rights reserved
          </div>
          <ul className="flex justify-center items-center gap-2.5">
            {socials.map((social, index) => (
              <li key={index}>
                <a
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-[10px] text-white/70 hover:text-white transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
