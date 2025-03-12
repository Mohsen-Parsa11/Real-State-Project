import Container from "./Container";
import heroImage from "../assets/hero-image.png";
import location from "../assets/location.png";
import CountUp from "react-countup";
import Header from "./Header";
import {animate, motion} from "framer-motion"

function Hero() {

    

  return (
    <div className="bg-black">
      <Container>
      {/* header component */}
        <Header />

        {/* hero section */}
        <section id="hero">
          <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 justify-between pb-10 px-6 lg:px-20 pt-10">
            {/* left section */}
            <div>
                {/* title */}
              <div className="relative">
                <div className="w-7 lg:w-10 h-7 lg:h-10 bg-gradient-to-b from-orange-300 to-orange-600 rounded-full absolute left-36 lg:left-48 top-1 lg:-top-1"></div>
                <motion.h1 initial={{y:"2rem",opacity:0}} animate={{y:0,opacity:1}} transition={{duration: 5, type:"spring"}}  className="mt-8 text-4xl lg:text-5xl text-white font-bold tracking-wide z-20 relative">
                  Doscover <br /> Most Suitable <br /> Property
                </motion.h1>
              </div>

              {/* text */}
              <p className="mt-9 text-gray-500 lg:w-sm">
                Find a variety of properties that suit you very easily Forget
                all difficulties in finding a residencies for you
              </p>

                {/* input part */}
              <div className="bg-white flex rounded mt-8 space-x-2 py-2 px-2 border-2 border-gray-200">
                <img src={location} className="h-8 w-8" alt="" />
                <input
                  type="text"
                  placeholder="search here?"
                  className="w-full outline-0 placeholder:text-gray-300"
                />
                <a
                  className="bg-blue-600 rounded text-white capitalize text-lg px-4 py-1 hover:opacity-90 active:scale-95 shadow"
                  href="#"
                >
                  Search
                </a>
              </div>

              {/* count up part */}
              <div className="flex flex-col space-y-6 lg:flex-row lg:space-y-0 justify-center space-x-4 mt-8">
                <div>
                  <span className="text-3xl tracking-wide text-white text-center block">
                    <CountUp start={8800} end={9000} duration={4} /> <span className="text-orange-400 text-4xl">+</span>
                  </span>
                  <p className="text-gray-500 text-sm text-center">
                    Permuim Product
                  </p>
                </div>
                <div>
                  <span className="text-3xl tracking-wide text-white text-center block">
                  <CountUp start={1950} end={2000} duration={4} /> <span className="text-orange-400 text-4xl">+</span>
                  </span>
                  <p className="text-gray-500 text-sm text-center">
                    Happy Customer
                  </p>
                </div>
                <div>
                  <span className="text-3xl tracking-wide text-white text-center block">
                  <CountUp  end={28} /> <span className="text-orange-400 text-4xl">+</span>
                  </span>
                  <p className="text-gray-500 text-sm text-center">
                    Awards Winning
                  </p>
                </div>
              </div>
            </div>

            {/* right section image */}
            <motion.div initial={{x:"7rem",opacity:0}} animate={{x:0,opacity:1}} transition={{duration: 5, type:"spring"}} className="relative">  
              <img
                className="lg:w-96 lg:h-[440px] rounded-t-full border-[0.4rem] border-gray-800"
                src={heroImage}
                alt=""
              />
            </motion.div>
          </div>
        </section>
      </Container>
    </div>
  );
}

export default Hero;
