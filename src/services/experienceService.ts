import { ROUTE } from "@/constants/routes";
import axios from "axios";

export type Experience = {
  _id: string;
  title: string;
  image: string;
  position: string;
  organization: string;
  year: string;
  description: string[];
};

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchExperiences(): Promise<Experience[]> {
  try {
    const res = await axios.get<Experience[]>(API_URL + ROUTE.EXPERIENCES);
    return res.data;
  } catch (err) {
    console.error("Error fetching experiences:", err);
    return [];
  }
}
