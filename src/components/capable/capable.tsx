import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="bg-grey">

      <h2 className="text-4xl font-bold p-10 text-center">What Sets Us Apart?</h2>
        <div className="flex flex-col lg:flex-row max-w-screen-xl mx-auto">
          <div className="lg:w-1/3">
            <div className="flex justify-center p-10">
              <div className="row-span-3">
                <h3 className="text-2xl font-bold mb-4">Comprehensive Approach</h3>
                <div className="row-span-1 pb-5">
                  <p>We go beyond the basics. Our coaching methodology is designed to enhance your performance in every aspect of the game, ensuring a well-rounded and versatile skill set.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3">
            <div className="flex justify-center p-10 ">
              <div className="row-span-3">
              <h3 className="text-2xl font-bold mb-4">Expert Coaches</h3>
                <div className="row-span-1 pb-5">
                  <p>Our team of experienced coaches brings a wealth of knowledge and expertise in each quadrant. Whether you're looking to refine your tactical strategies, polish technical skills, optimize physical conditioning, or strengthen your mental game, we have the right coach for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3">
            <div className="flex justify-center p-10 ">
              <div className="row-span-3">
              <h3 className="text-2xl font-bold mb-4">Personalised Training</h3>
                <div className="row-span-1 pb-5">
                  <p>Recognising that every athlete is unique, we tailor our coaching to suit your individual needs. Through personalized training programs, we aim to amplify your strengths and address areas for improvement, fostering continuous growth.
                  </p>
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