import React from "react"
import Navbar from "./Navbar"
const Hero = () => {
    return (
        <div id="hero" className="min-h-screen bg-no-repeat bg-[url(/portimg.png)] bg-left lg:bg-[15%] bg-cover" style={{backgroundSize: "30%" , backgroundPosition: "left 100px top 100px"}} >
            <Navbar/>
            <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)]">
                <div className="hidden lg:block"> </div>
                    <div className="text-[80px] sm:text-[80px] font-bold leading-tight flex justify-center items-center">
                        <div>
                            <p  data-aos="zoom-in" >I am</p>
                            <p className="text-pink-500" data-aos="zoom-in" >Sagar</p>
                            <p data-aos="zoom-in" >Sheikh</p>
                        </div>

                    

                </div>

            </div>
        </div>
    )
}
export default Hero