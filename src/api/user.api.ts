import type { User } from "@/types/User";
const BASE_URL = "http://localhost:3001";
async function getUsers(): Promise<User[]> {
  const res = await fetch(`${BASE_URL}/users`);
  return await res.json();
}

async function addUser(user: User) {
  try {
    const res = await fetch(`${BASE_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return res;
  } catch (error) {
    console.error("Error adding user:", error);
    throw error;
  }
}

async function updateUser(user: User) {
  const res = await fetch(`${BASE_URL}/users/${user.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  return res;
}

async function deleteUser(user: User) {
  try {
    const res = await fetch(`${BASE_URL}/users/${user.id}`, {
      method: "DELETE",
    });
    return res;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
}
export { getUsers, addUser, updateUser, deleteUser };
