import useUser from "@/hooks/useUser";
import type { User } from "@/types/User";
import { useState } from "react";
import DummyTable from "./DummyTable";
import UserTable from "./UserTable";

import { Button } from "@/components/ui/button";
import { UserForm } from "./UserForm";

export default function UsersPage() {
  const { users, loading, error, refetch } = useUser();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleAdd = () => {
    setIsDialogOpen(true);
  };

  const handleClose = () => {
    setIsDialogOpen(false);
    setSelectedUser(null);
  };

  const handleEdit = (user: User) => {
    console.log("Edit user", user);
    setSelectedUser(user);
    setIsDialogOpen(true);
  };

  const handleDelete = (user: User) => {
    console.log("Delete user", user);
  };

  return (
    <div className="space-x-6 my-3">
      <div className="flex justify-between items-center px-6">
        <h1 className="text-3xl font-bold">User Management</h1>
        <Button onClick={handleAdd} className="cursor-pointer">
          Add User
        </Button>
      </div>

      {loading && <DummyTable />}
      {error && <p>Error: {error}</p>}

      {!loading && !error && (
        <UserTable users={users} onEdit={handleEdit} onDelete={handleDelete} />
      )}

      {isDialogOpen && (
        <UserForm
          onClose={handleClose}
          onSucess={refetch}
          user={selectedUser}
        />
      )}
    </div>
  );
}
