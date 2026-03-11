import { apiClient } from "./client";

export const getUserProfile = async (userId) => {
  return apiClient(`/users/${userId}`);
};
