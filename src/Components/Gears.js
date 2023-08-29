import React from "react";
import "../App.css";
import Gear1 from "../Images/gears-img-1.png";
import Gear2 from "../Images/gears-img-2.png";
import Gear3 from "../Images/gears-img-3.png";

const Gears = () => {
  return (
    <div className="pt-[150px]">
      <div className=" items-center  w-[100%] sm:w-[33rem] md:w-[100%] sm:mx-auto p-[15px]  text-white ">
        <h2 className=" text-center font-bold text-[34px] sm:text-[45px]  text-white mb-[80px]">CHECK OUR GEARS</h2>
        <ul className="  grid md:grid-cols-2 xl:grid-cols-3 gap-y-12 md:w-[42rem] md:mx-auto lg:w-[59rem] xl:w-[68rem] md:gap-10 lg:gap-12 ">
          <li className=" md:mx-auto ">
            <div className=" md:w-[20rem] lg:w-[28rem] xl:w-[20rem] space-y-7 ">
              <div className=" relative card-img w-[100%] ">
                <a className="w-[100%] " href="/">
                  <img
                    className=" pt-[15%] w-[45%] mx-auto "
                    src={Gear1}
                    alt=""
                  />
                </a>
                <button className=" absolute top-[28%] right-[10%] md:top-20 md:right-5 text-[20px] border-2 border-[#3f3f46] rounded-[50%] w-[9%] h-[11%] md:w-[45px] md:h-[45px]  ">
                  <div>
                    o
                  </div>
                </button>
                <div className=" absolute top-[5%] right-[10%] md:top-2 md:right-4 text-[14px] flex items-center flex-row gap-2 ">
                  <div>
                    o
                  </div>
                  <span>IN 4 DAYS</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                    <h3 className=" text-[22px] font-bold">HEADPHONE</h3>
                    <p>E-SPORTS</p>
                </div>
                <div className=" text-[22px] font-bold">$18</div>
              </div>
              <div className="flex justify-between">
                <button className="btn focus:bg-[#1f2029] focus:text-white text-[18px] font-bold py-[18px] px-[20px] bg-[#ff8605]">+ ADD TO CART</button>
                <button className="btn-like focus:bg-[#ff8605] bg-[#1f2029]  py-[18px] px-[20px] ">0</button>
              </div>
            </div>
          </li>
          <li className=" md:mx-auto">
          <div className="md:w-[20rem] lg:w-[28rem] xl:w-[20rem] space-y-7">
              <div className=" relative card-img w-[100%] ">
                <a className="w-[100%] " href="/">
                  <img
                    className=" pt-[25%] w-[45%] mx-auto "
                    src={Gear2}
                    alt=""
                  />
                </a>
                <button className=" absolute top-[28%] right-[10%] md:top-20 md:right-5 text-[20px] border-2 border-[#3f3f46] rounded-[50%] w-[9%] h-[11%] md:w-[45px] md:h-[45px]  ">
                  o
                </button>
                <div className=" absolute top-[5%] right-[10%] md:top-2 md:right-4 text-[14px] flex items-center flex-row gap-2 ">
                  <div>
                    o
                  </div>
                  <span>IN 4 DAYS</span>
                </div>
              </div>
              <div className="flex justify-between items-center" >
                <div>
                    <h3 className=" text-[22px] font-bold">CONTROLLER</h3>
                    <p>E-SPORTS</p>
                </div>
                <div className=" text-[22px] font-bold">$29</div>
              </div>
              <div className="flex justify-between">
                <button className="btn focus:bg-[#1f2029] focus:text-white text-[18px] font-bold py-[18px] px-[20px] bg-[#ff8605]">+ ADD TO CART</button>
                <button className="btn-like focus:bg-[#ff8605] bg-[#1f2029]  py-[18px] px-[20px] ">0</button>
              </div>
            </div>
          </li>
          <li className=" md:mx-auto">
          <div className="md:w-[20rem] lg:w-[28rem] xl:w-[20rem] space-y-7">
              <div className="relative card-img w-[100%] ">
                <a className="w-[100%] " href="/">
                  <img
                    className=" pt-[19%] w-[45%] mx-auto "
                    src={Gear3}
                    alt=""
                  />
                </a>
                <button className=" absolute top-[28%] right-[10%] md:top-20 md:right-5 text-[20px] border-2 border-[#3f3f46] rounded-[50%] w-[9%] h-[11%] md:w-[45px] md:h-[45px]  " >o</button>
                <div className=" absolute top-[5%] right-[10%] md:top-2 md:right-4 text-[14px] flex items-center flex-row gap-2 ">
                  <div>
                    o
                  </div>
                  <span>IN 4 DAYS</span>
                </div>
              </div>
              <div className="flex justify-between items-center ">
                <div>
                    <h3 className=" text-[22px] font-bold">GAMING MASK</h3>
                    <p>E-SPORTS</p>
                </div>
                <div className=" text-[22px] font-bold">$45</div>
              </div>
              <div className="flex justify-between">
                <button className="btn focus:bg-[#1f2029] focus:text-white text-[18px] font-bold py-[18px] px-[20px] bg-[#ff8605] ">+ ADD TO CART</button>
                <button className="btn-like focus:bg-[#ff8605] bg-[#1f2029]  py-[18px] px-[20px] ">0</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Gears;
