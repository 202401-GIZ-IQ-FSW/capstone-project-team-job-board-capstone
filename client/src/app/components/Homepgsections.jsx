import React from "react";
// import * as MaterialDesign from "react-icons/md";
// import { CiBadgeDollar } from "react-icons/ci";
import { Data1 } from "../data";
import { Data2 } from "../data";
import { Data3 } from "../data";

const Homepgsections = () => {
	return (
		<div className='text-black'>
			<div>
				<div className='flex items-center justify-center '>
					<h1 className='text-5xl font-bold text-white '>
						{" "}
						Popular job categories{" "}
					</h1>
				</div>
				<div className='space-x-4 ... flex gap-10 justify-center flex-wrap items-center py-10'>
					{Data1.map(({ id, icon, title, desc }) => {
						return (
							<div
								key={id}
								className='group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover: shadow-lg shadow-greyIsh-400/70 hover:shadow-lg'
							>
								<span className='flex justify-between items-center gap-4'>
									<h1 className='text-[16px] font-semibold group-hover:text-black'>
										{title}
									</h1>
								</span>
								<div> {icon}</div>
								<p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-black'>
									{desc}
								</p>

								{id === 8 && (
									<button
										key={id}
										className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor
                            hover:bg-white group-hover/item:text-textColor group-hover:text-black'
									>
										Explore
									</button>
								)}
							</div>
						);
					})}
				</div>
			</div>

			<div>
				<div className='flex items-center justify-center '>
					<h1 className='text-5xl font-bold text-white'>
						{" "}
						Featured employers{" "}
					</h1>
				</div>
				<div className='space-x-4 ... flex gap-10 justify-center flex-wrap items-center py-10'>
					{Data2.map(({ id, title, desc }) => {
						return (
							<div
								key={id}
								className='group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover: shadow-lg shadow-greyIsh-400/70 hover:shadow-lg'
							>
								<span className='flex justify-between items-center gap-4'>
									<h1 className='text-[16px] font-semibold group-hover:text-black'>
										{title}
									</h1>
								</span>
								<p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-   [20px] group-hover:text-black'>
									{desc}
								</p>

								{id === 1 && (
									<button
										key={id}
										className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor
                            hover:bg-white group-hover/item:text-textColor group-hover:text-black'
									>
										Search
									</button>
								)}

								{id === 2 && (
									<button
										key={id}
										className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor
                            hover:bg-white group-hover/item:text-textColor group-hover:text-black'
									>
										Apply
									</button>
								)}
								{id === 3 && (
									<button
										key={id}
										className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor
                            hover:bg-white group-hover/item:text-textColor group-hover:text-black'
									>
										Discover
									</button>
								)}
								{id === 4 && (
									<button
										key={id}
										className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor
                            hover:bg-white group-hover/item:text-textColor group-hover:text-black'
									>
										Join
									</button>
								)}
							</div>
						);
					})}
				</div>
			</div>

			<div>
				<div className='flex items-center justify-center'>
					<h1 className='text-5xl font-bold text-white'>
						{" "}
						Advance Your Career{" "}
					</h1>
				</div>
				<div className='space-x-4 ...  flex gap-10 justify-center flex-wrap items-center py-10'>
					{Data3.map(({ id, title, desc }) => {
						return (
							<div
								key={id}
								className='group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover: shadow-lg shadow-greyIsh-400/70 hover:shadow-lg'
							>
								<span className='flex justify-between items-center gap-4'>
									<h1 className='text-[16px] font-semibold group-hover:text-black'>
										{title}
									</h1>
								</span>
								<p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-   [20px] group-hover:text-black'>
									{desc}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Homepgsections;
