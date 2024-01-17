import React from 'react'
import HeroImage from "../../assets/Spaniel01_gradient.png";

const Pillars = () => {
  return (
    <div>
      <div className="bg-grey">
        <h2 className="text-4xl font-bold p-10 text-center">The Four Pillars of Learning</h2>
        <div className="flex flex-col max-w-screen-xl mx-auto">
          <div className="flex flex-row">
            <div className="lg:w-1/2">
              <div className="flex justify-center p-10 h-100">
                <div className="row-span-3">
                  <h3 className="text-2xl font-bold mb-4">Tactical Mastery</h3>
                  <div className="row-span-1 pb-5">
                    <p>Elevate your game strategy with our tactical coaching. Learn to read the play, make strategic decisions, and outsmart your opponents.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div>
                <img src={HeroImage} alt="" className="w-full" />
              </div>

            </div>
          </div>

          <div className="flex flex-row">
            <div className="lg:w-1/2">
              <div>
                <img src={HeroImage} alt="" className="w-full" />
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="flex justify-center p-10 ">
                <div className="row-span-3">
                  <h3 className="text-2xl font-bold mb-4">Technical Precision</h3>
                  <div className="row-span-1 pb-5">
                    <p>Hone your technical skills to perfection. From ball control to precision shots, our coaching ensures that your technical prowess is second to none.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="flex flex-row">
            <div className="lg:w-1/2">
              <div className="flex justify-center p-10 h-100">
                <div className="row-span-3">
                  <h3 className="text-2xl font-bold mb-4">Physical Excellence</h3>
                  <div className="row-span-1 pb-5">
                    <p>Achieve peak physical condition with our specialized training programs. Build strength, agility, and endurance to dominate the physical aspects of the game.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div>
                <img src={HeroImage} alt="" className="w-full" />
              </div>
            </div>
          </div>

          
          <div className="lg:w-1/2">
            <div className="flex justify-center p-10 h-100">
              <div className="row-span-3">
                <h3 className="text-2xl font-bold mb-4">Mental Resilience</h3>
                <div className="row-span-1 pb-5">
                  <p>Strengthen your mental fortitude for peak performance. Develop focus, resilience, and a winning mindset that sets you apart in high-pressure situations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pillars
