import { mySocials } from "../constants";
const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        {mySocials.map((social, index) => (
          <a href={social.href} key={index}>
            <img src={social.icon} className="w-5 h-5" alt={social.name} />
          </a>
        ))}
        <p className="text-neutral-400 flex items-center gap-2">
        Email:{""}
        <a 
          href="mailto:hitendhiman15@gmail.com"
          className="text-neutral-200 hover:underline"
          >
            hitendhiman15@gmail.com
          </a>
        </p>
      </div>
      <p>© {new Date().getFullYear()} Hiten Dhiman. All rights reserved.</p>
    </section>
  );
};

export default Footer;
