import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPhoneVolume } from "react-icons/fa";
import contactContent from "@/app/Data/content";

const ContactInfo: any = contactContent.contactContent;

const Banner = ({
  image,
  header,
  p1,
  h1,
}: {
  image?: string;
  header?: string;
  p1: string;
  h1: string;
}) => {
  return (
    <div className=" relative  h-[70vh] max-w-[2100px] duration-150 ease-in-out md:mt-0 md:h-[540px] ">
      <Image
        className="absolute h-[70vh] w-[100%] object-cover object-right  md:h-[540px] "
        src={image ? image : ContactInfo.bannerImage}
        alt="Banner_Image"
        width={900}
        height={900}
      />
      <div className="top-30  relative  flex h-full items-center gap-2 bg-gradient-to-r  from-[#000000f3] to-[#00000050] text-3xl text-white   md:px-12 md:text-[40px] ">
        <div className=" px-4 pt-4 font-bold leading-[50px] text-white md:mt-14 md:px-0 md:pt-40 lg:ml-40 lg:w-2/3 lg:pt-0">
          {" "}
          <div className="lg:w-[60%]">
            <h1 className={`inline text-white`}>{h1}</h1>
          </div>
          <div className="mt-6 text-xl font-normal lg:w-[60%]">{p1 && `${p1} `}</div>
          <div className="flex flex-col md:items-center gap-6 md:flex-row md:gap-10 ">
            <a id="cta-id" href={`tel:${ContactInfo.tel}`} className="group">
              <button
                id="cta-id"
                aria-label="Call"
                className="mt-4 flex transform items-center rounded-lg bg-gradient-to-r from-main to-minor p-4 px-6 text-xl font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:shadow-xl md:mt-10"
              >
                <FaPhoneVolume className="mr-3 text-3xl text-white group-hover:text-yellow-300" />
                <div className="flex flex-col items-start">
                  <span className="text-sm">{ContactInfo.NoKeyword}</span>
                  <span className="text-lg font-bold">{ContactInfo.No}</span>
                </div>
              </button>
            </a>
            <a id="cta-id" href={`tel:${ContactInfo.tel2}`} className="group">
              <button
                id="cta-id"
                aria-label="Call"
                className="mt-4 flex transform items-center rounded-lg bg-gradient-to-r from-main to-minor p-4 px-6 text-xl font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:shadow-xl md:mt-10"
              >
                <FaPhoneVolume className="mr-3 text-3xl text-white group-hover:text-yellow-300" />
                <div className="flex flex-col items-start">
                  <span className="text-sm">{ContactInfo.No2Keyword} </span>
                  <span className="text-lg font-bold">{ContactInfo.No2}</span>
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
