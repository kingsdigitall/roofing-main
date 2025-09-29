import React from "react";
import { FaPhoneVolume } from "react-icons/fa";
import { MdOutlineRoofing } from "react-icons/md";
import contactContent from "@/app/Data/content";

const ContactInfo: any = contactContent.contactContent;

const CallButtonMobile = () => {
  return (
    <div className="fixed bottom-0 z-[200] w-full bg-main md:block">
      <div className="mx-auto flex max-w-[1910px] flex-col items-center justify-center px-4 py-4 md:flex-row md:gap-4">
        {/* Icon Section */}
        <div className="-mt-8 rounded-full bg-main p-3 md:mt-0 lg:hidden">
          <MdOutlineRoofing className="text-5xl text-white md:text-6xl" />
        </div>

        {/* Roofing CTA */}
        <a id="cta-roofing" href={`tel:${ContactInfo.tel}`} className="">
          <button
            id="cta-roofing-btn"
            className="flex items-center justify-center rounded bg-white px-4 py-2 text-sm font-bold text-black duration-200 ease-in-out hover:border-2 hover:border-main hover:bg-main hover:text-white md:text-2xl"
          >
            {ContactInfo.service1key}: {ContactInfo.No}
          </button>
        </a>

        {/* Gutter CTA */}
        <a id="cta-gutter" href={`tel:${ContactInfo.tel2}`}>
          <button
            id="cta-gutter-btn"
            className="flex items-center justify-center rounded bg-main px-4 py-2 text-sm font-bold text-white duration-200 ease-in-out hover:border-2 hover:border-main hover:bg-white hover:text-black md:text-2xl"
          >
            {ContactInfo.service2key}: {ContactInfo.No2}
          </button>
        </a>
      </div>
    </div>
  );
};

export default CallButtonMobile;
