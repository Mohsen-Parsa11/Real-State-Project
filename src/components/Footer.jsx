import Container from "./Container"
import FooterLogo from "../assets/logo2.png"
import ArrowTop from "../assets/arrowTop.webp"

function Footer() {
  return (
    <Container>
        <div className="flex flex-col lg:flex-row space-y-6 mt-10 justify-center lg:justify-between py-10">
            <div className="space-y-4">
                <img src={FooterLogo} className="w-24 mx-auto lg:mx-0" alt="" />
               <div className="leading-5 text-center lg:text-left">
               <p className="text-gray-400">Our version is to make all people</p>
               <p className="text-gray-400">the best place to live for them.</p>
               </div>
            </div>

            <div className="text-center lg:text-normal">
                <h2 className="text-slate-700 text-3xl font-bold">Information</h2>
                <p className="text-gray-400 text-sm">145 New York, Fl 5467, USA</p>
                <div className="flex mt-3 justify-center space-x-4">
                   <div className="flex flex-col lg:flex-row space-x-4">
                   <p className="text-lg font-semibold text-gray-600">Property</p>
                   <p className="text-lg font-semibold text-gray-600 text-left">Services</p>
                   </div>
                    <div className="flex flex-col lg:flex-row space-x-4">
                    <p className="text-lg font-semibold text-gray-600">Product</p>
                    <p className="text-lg font-semibold text-gray-600 text-left">About Us</p>
                   <a href="#header" className="flex justify-end lg:justify-normal mr-4 lg:mr-0"> <img src={ArrowTop} className="w-4 lg:w-6 h-6 lg:h-8 mt-2 lg:mt-0" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Footer