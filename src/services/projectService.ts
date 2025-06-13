import axios from "axios";

export type Project = {
  _id: string;
  projectName: string;
  images: string[];
  detail: string;
  role: string;
  developmentDetails: string;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchProjects(): Promise<Project[]> {
  try {
    const res = await axios.get<Project[]>(`${API_URL}/api/projects`);
    return res.data;
  } catch (err) {
    console.error("Error fetching projects:", err);
    return [];
  }
}
