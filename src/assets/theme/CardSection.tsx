import React from "react";
import HeroTitle from "@/assets/HeadingText/HeroTitle";
import HeroDescription from "../HeadingText/HeroDescription";
import {ArrowRightIcon } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

interface CardSectionProps {
  title: string;
  data: {
    icon?: React.ReactNode;
    name: string;
    info: string;
    list?:string[];
    listIcon?:React.ReactNode;
    link?:string;
}[];
center?: boolean;

}

const CardSection= ({title, data,center=false}:CardSectionProps) => {
    const navigate=useNavigate();
  return (
    <div className="px-4 lg:px-15 mb-10">
    <div className="w-full bg-[#AFCDDD] pt-6 pb-12 rounded-2xl px-6 lg:px-12.5 ">
      <HeroTitle
      heading={title}
        className={`mb-9 text-center`}
        color="#fff"
        />

<div
  className={`grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-14 px-4 ${
    center ? 'place-items-center text-center justify-center items-center' : ''
  }`}
>
  {data.map((item, index) => (
    <div
      key={index}
      className="bg-white rounded-xl p-6 shadow-md border border-gray-200 w-full max-w-sm lg:max-w-[320px]"
    >
      <div className={`mb-4 ${center ? 'text-center flex justify-center items-center' : ''} `}>
        {item.icon}
      </div>

      <h3 className="text-lg font-medium mb-2">
        {item.name}
      </h3>

      <p className="text-sm">
        <span className="font-semibold">Company Info</span>{" "}
        {item.info.replace("Company Info", "")}
      </p>


        {item.list && item.listIcon && (
          <ul className="mt-6 max-w-2xl mx-auto text-white list-disc list-inside">
            {item.list.map((point, idx) => (
              <li key={idx} className="mb-2 flex">
                {item.listIcon} <HeroDescription text={point} />
              </li>
            ))}
          </ul>
        )}
        {item.link && (<div
        className="flex justify-start"
        onClick={()=>navigate(item.link!)}
        >
            <HeroDescription text={"Read more"} color="#000" />
            <ArrowRightIcon size={16} weight="bold" className="text-black" />
            </div>)}
                </div>
  ))}
</div>

    </div>
    </div>
  );
};

export default CardSection;
