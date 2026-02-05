type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

export type { User };

export interface UserTableProps {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (user: User) => void;
}
