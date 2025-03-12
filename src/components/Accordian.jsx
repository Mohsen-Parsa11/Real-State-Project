import React from "react";
import Container from "./Container";

function Accordian() {
  return (
    <Container>
      <section id="getStarted">
      <div className="px-6 lg:px-0 mt-12">
        <div className="bg-blue-600 py-4 border-4 rounded-lg border-violet-600 mt-8 ">
          <div className="flex flex-col justify-center">
            <h3 className="text-xl lg:text-2xl text-center  text-gray-100 font-bold mb-4 mt-3">
              Get started with Homyz
            </h3>
            <p className="text-gray-200 text-center">
              Subscribe and find super attractive price quotes from us.
            </p>
            <p className="text-gray-200 text-center">
              Find your residencies soon
            </p>
            <button className="px-3 text-white py-1 mt-4 bg-violet-600 border-2 border-white rounded-lg hover:opacity-90 active:scale-98 transition duration-75 cursor-pointer w-40 mx-auto">
              Get Started
            </button>
          </div>
        </div>
      </div>
      </section>
     
    </Container>
  );
}

export default Accordian;
