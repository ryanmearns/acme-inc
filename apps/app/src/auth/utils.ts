import { getServerSession } from "next-auth";
import { authConfig } from "./config";

export const auth = async () => {
  return await getServerSession(authConfig);
};
