import type { User } from "@/types/User";
const BASE_URL = "http://localhost:3001";
async function getUsers(): Promise<User[]> {
  const res = await fetch(`${BASE_URL}/users`);
  return await res.json();
}
export { getUsers };
