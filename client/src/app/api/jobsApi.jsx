import axios from "axios";

const API_URL = "http://localhost:3001/jobs";

export const fetchJobById = async (jobId) => {
	try {
		const response = await axios.get(
			`${API_URL}/${jobId}`
		);
		return response.data;
	} catch (error) {
		console.error("Error fetching job by ID:", error);
		throw error;
	}
};

export const fetchJobs = async (page = 1) => {
	try {
		const response = await axios.get(API_URL, {
			params: { page },
		});
		return response.data;
	} catch (error) {
		console.error("Error fetching jobs:", error);
		throw error;
	}
};



