import { env } from "@/env";
import axios from "axios";

export const api = axios.create({
  baseURL: `${env.EXPO_PUBLIC_API_URL}:${env.EXPO_PUBLIC_API_PORT}`,
  timeout: 700,
})