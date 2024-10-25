import { Service } from "../constants";

const Services = () => {
  return (
    <div className="min-h-screen py-16 md:py-24 flex justify-center items-center px-4 md:px-6">
      <div className="max-container relative flex flex-col gap-8 md:gap-10">
        <div className="flex justify-center flex-col gap-10 md:gap-20">
          {/* Title Section */}
          <div className="flex justify-center relative">
            <a href="#Services">
              <h2 className="text-slate-800 text-5xl md:text-6xl lg:text-8xl z-10 hover:text-amber-400 hover:blur-sm transition-all duration-500 ease-in-out hover:translate-y-5">
                Services
              </h2>
            </a>
            <h3 className="text-center text-amber-400 z-20 text-2xl md:text-3xl lg:text-4xl absolute top-0">
              Services
            </h3>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white gap-8 md:gap-10 lg:gap-20">
            {Service.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-6 md:gap-10 bg-slate-900 justify-between items-center hover:shadow-2xl hover:shadow-gray-500 transition-all duration-300 ease-in-out hover:scale-105 rounded-3xl p-6 md:p-10 border-2 border-slate-800"
              >
                <img 
                  src={item.image} 
                  className="w-32 md:w-48 lg:w-52 h-auto" 
                  alt={item.heading}
                />
                <div className="flex flex-col gap-3 md:gap-4">
                  <h2 className="text-amber-400 text-xl md:text-2xl text-center">
                    {item.heading}
                  </h2>
                  <p className="text-sm md:text-base text-justify">
                    {item.paragh}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;