"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { fetchJobById } from "../../../api/jobsApi";

const JobDetail = () => {
	const { id } = useParams();
	const [job, setJob] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getJob = async () => {
			try {
				if (id) {
					const data = await fetchJobById(id);
					setJob(data);
				}
			} catch (error) {
				console.error("Failed to fetch job", error);
			} finally {
				setLoading(false);
			}
		};

		getJob();
	}, [id]);

	if (loading) {
		return <p className='text-center'>Loading...</p>;
	}

	if (!job) {
		return <p className='text-center'>Job not found</p>;
	}

	return (
		<div className='container mx-auto p-4'>
			<div className='bg-white shadow-md rounded-lg p-6'>
				<h1 className='text-3xl font-bold mb-4 text-center'>
					{job.title}
				</h1>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
					<div>
						<p className='text-gray-700 mb-2'>
							<strong>Description:</strong>{" "}
							{job.description}
						</p>
						<p className='text-gray-700 mb-2'>
							<strong>Location:</strong> {job.location}
						</p>
						<p className='text-gray-700 mb-2'>
							<strong>Salary:</strong> ${job.salary}
						</p>
						<p className='text-gray-700 mb-2'>
							<strong>Category:</strong> {job.category}
						</p>
					</div>
					{job.employer && (
						<div>
							<h3 className='text-xl font-semibold mb-2'>
								Employer Details
							</h3>
							<p className='text-gray-700 mb-2'>
								<strong>Username:</strong>{" "}
								{job.employer.username}
							</p>
							<p className='text-gray-700 mb-2'>
								<strong>Email:</strong> {job.employer.email}
							</p>
							<p className='text-gray-700 mb-2'>
								<strong>Location:</strong>{" "}
								{job.employer.employerInfo.location}
							</p>
							<p className='text-gray-700 mb-2'>
								<strong>Phone:</strong>
								{job.employer.employerInfo.phoneNumber}
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default JobDetail;