import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="relative z-20 flex flex-col justify-center items-center top-1/3 max-container px-4 md:px-6">
      
      <h1 className="text-4xl md:text-6xl lg:text-8xl text-white flex flex-col gap-2 md:gap-6 text-center md:text-left">
        Hi, I am
      
      </h1 >
      <h1 className="text-4xl md:text-6xl lg:text-8xl text-white flex flex-col gap-2 md:gap-6 text-center md:text-left">
      <span className="block">
    <ReactTyped
      strings={[
        "Taran Singh",
        "a Web Developer",
      ]}
      typeSpeed={60}
      backSpeed={100}
      loop
      className="text-amber-400 bg-transparent"
    />
  </span>
</h1>

      
      <p className="w-full md:w-10/12 text-center mt-4 md:mt-8 text-white text-base md:text-xl leading-relaxed">
        "As a passionate full-stack web developer, I specialize in creating dynamic and user-friendly applications. With a strong proficiency in ReactJS, I bring innovative solutions to life, delivering exceptional front-end experiences."
      </p>
    </div>
  );
};

export default Hero;