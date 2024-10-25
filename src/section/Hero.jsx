const Hero = () => {
  return (
    <div className="relative z-20 flex flex-col justify-center items-center top-1/3 max-container px-4 md:px-6">
      <div className="text-4xl md:text-6xl lg:text-8xl text-white">
        <h1 className="flex flex-col md:flex-row gap-2 md:gap-6 text-center md:text-left">
          <span>Hi, I am</span>
          <span className="text-amber-400">Taran Singh</span>
        </h1>
      </div>
      <p className="w-full md:w-10/12 text-center mt-4 md:mt-8 text-white text-base md:text-xl leading-relaxed">
        "As a passionate full-stack web developer, I specialize in creating dynamic and user-friendly applications. With a strong proficiency in ReactJS, I bring innovative solutions to life, delivering exceptional front-end experiences."
      </p>
    </div>
  );
};

export default Hero;