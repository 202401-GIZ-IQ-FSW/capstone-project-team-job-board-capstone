import React from "react";
// import * as MaterialDesign from "react-icons/md";
// import { CiBadgeDollar } from "react-icons/ci";




const Data1 = [
    {
      id: 1,
      //image:,
    //   icon: '<CiBadgeDollar />', 
      title: "Finance",
      desc: "1,720 job listings",
    },
    {
      id: 2,
      //image:,
      title: "Marketing",
      desc: "1,720 job listings",
    },
    {
      id: 3,
      //image:,
      title: "IT services",
      desc: "1,720 job listings",
    },
    {
      id: 4,
      //image:,
      title: "Science",
      desc: "1,720 job listings",
    },
    {
      id: 5,
      //image:,
      title: "Tech",
      desc: "1,720 job listings",
    },
    {
      id: 6,
      //image:,
      title: "Hospitality",
      desc: "1,720 job listings",
    },
    {
      id: 7,
      //image:,
      title: "Sales",
      desc: "1,720 job listings",
    },
    {
      id: 8,
      //image:,
      title: "+10K Job",
      desc: "Apply Now!",
    },
    
];

const Data2= [
    {
      id: 1,
      //image:,
      title: "Top Jobs",
      desc: "Exciting opportunites",
    },
    {
      id: 2,
      //image:,
      title: "Tech Careers",
      desc: "In-demand positions",
    },
    {
      id: 3,
      //image:,
      title: "Digital Innovations",
      desc: "Cutting-edge roles",
    },
    {
      id: 4,
      //image:,
      title: "Global",
      desc: "International jb openings",
    },
    
];
const Data3 = [
    {
      id: 1,
      //image:,
      title: "Explore New Horizons in Employment",
      desc: "Insights for growth",
    },
    {
      id: 2,
      //image:,
      title: "Enhancing Team Productivity",
      desc: "Strategies for success",
    },
    {
      id: 3,
      //image:,
      title: "Navigating the Tech Job Market",
      desc: "Expert advice for success",
    },
    {
      id: 4,
      //image:,
      title: "Crafting a winning Resume",
    },
    {
      id: 5,
      //image:,
      title: "Salary Comparison",
    },
    {
      id: 6,
      //image:,
      title: "Income Tax Estimator",
    },
    
];


const Homepgsections = () => {
    return (
        <div>
        
            <div>
                <div className="flex items-center justify-center ">
                    <h1 className="text-5xl font-bold"> Popular job categories </h1>
                </div>
                <div className="space-x-4 ... flex gap-10 justify-center flex-wrap items-center py-10">
                  { Data1.map(({ id , icon, title , desc }) => {
                    return (
                    <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover: shadow-lg shadow-greyIsh-400/70 hover:shadow-lg">
                        
                        <span className="flex justify-between items-center gap-4">
                            <h1 className="text-[16px] font-semibold group-hover:text-black">{title}    
                            </h1>
                        </span>
                        <div> {icon}</div>
                        <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-black">
                        {desc}
                        </p>
        
                        { id === 8 && (
                        <button  key={id}
                            className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor
                            hover:bg-white group-hover/item:text-textColor group-hover:text-black" >Explare
                        </button>
                        )}
                    
                    </div>)})}
                </div>

            </div>


            <div>
                <div className="flex items-center justify-center ">
                    <h1 className="text-5xl font-bold"> Featured employers </h1>
                </div>
                <div className="space-x-4 ... flex gap-10 justify-center flex-wrap items-center py-10">
                    { Data2.map(({ id, title , desc}) => {
                    return (
                    <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover: shadow-lg shadow-greyIsh-400/70 hover:shadow-lg">
                    
                        <span className="flex justify-between items-center gap-4">
                        <h1 className="text-[16px] font-semibold group-hover:text-black">{title}</h1>
                        </span>
                        <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-   [20px] group-hover:text-black">
                        {desc}
                        </p>
        
                        { id === 1 && (
                        <button  key={id}
                            className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor
                            hover:bg-white group-hover/item:text-textColor group-hover:text-black" >Search
                        </button>)}
                            
                        { id === 2 && (
                        <button  key={id}
                            className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor
                            hover:bg-white group-hover/item:text-textColor group-hover:text-black" >Apply
                        </button>)}
                        { id === 3 && (
                        <button  key={id}
                            className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor
                            hover:bg-white group-hover/item:text-textColor group-hover:text-black" >Discover
                        </button>)}
                        { id === 4 && (
                        <button  key={id}
                            className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor
                            hover:bg-white group-hover/item:text-textColor group-hover:text-black" >Join
                        </button>)}
                    </div>)})}
                </div>
            </div>
            
            <div>
                <div className="flex items-center justify-center">
                    <h1 className="text-5xl font-bold"> Advance Your Career </h1>
                </div>
                <div className="space-x-4 ...  flex gap-10 justify-center flex-wrap items-center py-10">
                    {Data3.map(({ id, title, desc}) => {
                    return (
                    <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover: shadow-lg shadow-greyIsh-400/70 hover:shadow-lg">
                    
                    <span className="flex justify-between items-center gap-4">
                    <h1 className="text-[16px] font-semibold group-hover:text-black">{title}</h1>
                    </span>
                    <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-   [20px] group-hover:text-black">
                    {desc}
                    </p>
                </div>);})}
            </div></div>
        </div>
    );
};
  
export default Homepgsections;