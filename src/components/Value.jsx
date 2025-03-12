import heroImage from "../assets/value.png";
import Container from "./Container";
import arrowBottom from "../assets/bottomArrow.webp";
import check from "../assets/check.png";
import Analytics from "../assets/Analytics.png";
import close2 from "../assets/close2.png";
import { useState } from "react";

function Value() {

  // first item
  const [openList, setOpenList] = useState("hidden")
  const [isOpen, setIsOpen] = useState(false)

  const handleClickOpenList= ()=>{
    setIsOpen(!isOpen)
    if(!isOpen){
      setOpenList("block")
    }else{
      setOpenList("hidden")
    }
  }
  
  // second item
  const [openList2, setOpenList2] = useState("hidden")
  const [isOpen2, setIsOpen2] = useState(false)
  
  const handleClickOpenList2= ()=>{
    setIsOpen2(!isOpen2)
    if(!isOpen2){
      setOpenList2("block")
    }else{
      setOpenList2("hidden")
    }
  }

  // third item
  const [openList3, setOpenList3] = useState("hidden")
  const [isOpen3, setIsOpen3] = useState(false)
  
  const handleClickOpenList3= ()=>{
    setIsOpen3(!isOpen3)
    if(!isOpen3){
      setOpenList3("block")
    }else{
      setOpenList3("hidden")
    }
  }


  return (
    <Container>
      <section id="ourValue">
        <div className="lg:grid px-6 lg:px-0 space-y-14 lg:space-y-0 grid-cols-2 mt-12 gap-24">
          <div className="col-span-1">
            <img
              src={heroImage}
              className="border-[0.4rem] object-contain border-gray-300 rounded-t-full lg:w-96 "
              alt=""
            />
          </div>

          <div className="col-span-1">
            <div className="space-y-1">
              <h3 className="text-xl lg:text-2xl text-center lg:text-left text-amber-400 font-semibold">
                Our Value
              </h3>
              <h3 className="text-2xl lg:text-3xl text-center lg:text-left text-slate-700 font-semibold">
                Value We Give to You
              </h3>
              <p className="text-gray-400 text-center lg:text-left">
                we always ready to help by providing the best services for you.
              </p>
              <p className="text-gray-400 text-center lg:text-left">
                we blive to good blace to lice can make your life better.
              </p>
            </div>

            <div className="accordion mt-14 w-full space-y-5">
              {/* first item */}
              <div className="accordionItem border border-gray-200 shadow-lg shadow-fuchsia-100 rounded px-4">
                <div className="accordionHeader flex justify-between py-4">
                  <span className="rounded p-2 h-8 mr-4 lg:mr-0 bg-blue-50">
                    <img src={check} className="w-4 h-4" alt="" />
                  </span>
                  <span className="lg:text-xl font-semibold text-slate-500">
                     Best interest rates on the market
                  </span>
                  <span onClick={handleClickOpenList} className="rounded p-2 cursor-pointer">
                    <img className="w-4 h-4" src={arrowBottom} alt="" />
                  </span>
                </div>
                <div className={`text-sm ${openList} text-gray-400 pb-4`}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto commodi sint cumque sed ex! Veniam sint deleniti perferendis culpa quae eius ex doloribus soluta. 
                  </p>
                </div>
                <div className="accordionPanel"></div>
              </div>

            {/* second item */}
            <div className="accordionItem border border-gray-200 shadow-lg shadow-fuchsia-100 rounded px-4">
                <div className="accordionHeader flex justify-between py-4">
                  <span className="rounded p-2 h-8 mr-4 lg:mr-0 bg-blue-50">
                    <img src={close2} className="w-4 h-4" alt="" />
                  </span>
                  <span className="lg:text-xl font-semibold text-slate-500">
                     Prevent Unstable Prices
                  </span>
                  <span onClick={handleClickOpenList2} className="rounded p-2 cursor-pointer">
                    <img className="w-4 h-4" src={arrowBottom} alt="" />
                  </span>
                </div>
                <div className={`text-sm ${openList2} text-gray-400 pb-4`}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto commodi sint cumque sed ex! Veniam sint deleniti perferendis culpa quae eius ex doloribus soluta. 
                  </p>
                </div>
                <div className="accordionPanel"></div>
              </div>

              {/* third item */}
            <div className="accordionItem border border-gray-200 shadow-lg shadow-fuchsia-100 rounded px-4">
                <div className="accordionHeader flex justify-between py-4">
                  <span className="rounded p-2 h-8 mr-4 lg:mr-0 bg-blue-50">
                    <img src={Analytics} className="w-4 h-4" alt="" />
                  </span>
                  <span className="lg:text-xl font-semibold text-slate-500">
                     Best Price on the Market
                  </span>
                  <span onClick={handleClickOpenList3} className="rounded p-2 cursor-pointer">
                    <img className="w-4 h-4" src={arrowBottom} alt="" />
                  </span>
                </div>
                <div className={`text-sm ${openList3} text-gray-400 pb-4`}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto commodi sint cumque sed ex! Veniam sint deleniti perferendis culpa quae eius ex doloribus soluta. 
                  </p>
                </div>
                <div className="accordionPanel"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
    
  );
}

export default Value;
