"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { fetchJobs } from "../../api/jobsApi";
import { handlePageChange } from "../../utils";

const JobsList = () => {
	const [jobs, setJobs] = useState([]);
	const [loading, setLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);

	useEffect(() => {
		const getJobs = async () => {
			try {
				const data = await fetchJobs(currentPage);
				setJobs(data.jobs);
				setTotalPages(data.pagination.totalPages);
			} catch (error) {
				console.error("Failed to fetch jobs", error);
			} finally {
				setLoading(false);
			}
		};

		getJobs();
	}, [currentPage]);


	if (loading) {
		return <p className='text-center'>Loading...</p>;
	}

	return (
		<div className='container mx-auto p-4'>
			<h1 className='text-2xl font-bold mb-4 text-center'>
				Job Listings
			</h1>
			<ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
				{jobs.map((job) => (
					<li
						key={job._id}
						className='bg-white rounded-lg shadow-md p-4 hover:bg-gray-100'
					>
						<Link href={`/pages/jobs/${job._id}`}>
							<h2 className='text-xl font-bold mb-2'>
								{job.title}
							</h2>
							<p className='text-gray-700 mb-2'>
								{job.description}
							</p>
							<p className='text-gray-700 mb-2'>
								Location: {job.location}
							</p>
							<p className='text-gray-700 mb-2'>
								Salary: ${job.salary}
							</p>
							<p className='text-gray-700 mb-2'>
								Category: {job.category}
							</p>
							{job.employer && (
								<div className='mt-4'>
									<h3 className='text-lg font-semibold mb-2'>
										Employer Details
									</h3>
									<p className='text-gray-700'>
										Username: {job.employer.username}
									</p>
									<p className='text-gray-700'>
										Email: {job.employer.email}
									</p>
									<p className='text-gray-700'>
										Location:{" "}
										{job.employer.employerInfo.location}
									</p>
									<p className='text-gray-700'>
										Phone:{" "}
										{job.employer.employerInfo.phoneNumber}
									</p>
								</div>
							)}
						</Link>
					</li>
				))}
			</ul>
			<div className='flex justify-center mt-6'>
				<button
					onClick={() =>
						handlePageChange(
							"prev",
							currentPage,
							setCurrentPage,
							totalPages
						)
					}
					className='bg-blue-500 text-white px-4 py-2 rounded mr-2 disabled:opacity-50'
					disabled={currentPage === 1}
				>
					Previous
				</button>
				<button
					onClick={() =>
						handlePageChange(
							"next",
							currentPage,
							setCurrentPage,
							totalPages
						)
					}
					className='bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50'
					disabled={currentPage === totalPages}
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default JobsList;