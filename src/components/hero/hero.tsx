import React from "react";
import HeroImage from "../../assets/Spaniel01_gradient.png";

const Hero = () => {
  return (
    <div>
      <div className="container max-w-none hero">
        <div className="flex flex-col lg:flex-row items-center bg-black">

        <div className="lg:w-1/2">
            <div>
              <img src={HeroImage} alt="" className="w-full" />
            </div>
            
          </div>
          <div className="lg:w-1/2">
            <div className="flex justify-center text-white">
              <div className="row-span-3">
                <p className="text-pink font-semibold pb-5 uppercase">Skills Quadrant Coaching</p>
                <h1 className="text-4xl font-bold mb-4">Unlock the Full <br/>Potential of Your Game</h1>
                <div className="row-span-1 pb-5">
                  <p>At Skills Quadrant Coaching, we understand that excellence<br/> in professional sports is a culmination of mastery<br/> 
                  in four key pillars: Tactical, Technical, Physical, and Mental. <br/>
                  Our coaching philosophy is built on the belief that a holistic<br/> 
                  approach to skill development is the key to unlocking <br/>
                  your full potential on the field.
                  </p>
                </div>

                <div className="pb-10">
                  <a href="/" className="cta-pink">Let's Go</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;