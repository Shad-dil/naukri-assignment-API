import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { formSchema } from "@/schema/formSchema";
import { addUser, updateUser } from "@/api/user.api";
import type { User } from "@/types/User";

const emptyForm = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};
const UserForm = ({
  onClose,
  onSucess,
  user,
}: {
  onClose: () => void;
  onSucess: () => void;
  user?: User | null;
}) => {
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [formData, setFormData] = useState<Record<string, string>>(
    user
      ? {
          id: user.id ? String(user.id) : "",
          firstName: user.firstName || "",
          lastName: user.lastName || "",
          email: user.email || "",
          phone: user.phone || "",
        }
      : emptyForm,
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setTouched((prev) => ({ ...prev, [name]: true }));
  };
  const getError = (name: string) =>
    touched[name]
      ? (formSchema
          .find((field) => field.name === name)
          ?.validate(formData[name]) ?? null)
      : null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const allTouched: Record<string, boolean> = {};
    formSchema.forEach((f) => {
      allTouched[f.name] = true;
    });
    setTouched(allTouched);

    const errors = formSchema
      .map((field) => field.validate(formData[field.name] || ""))
      .filter(Boolean);

    if (errors.length === 0) {
      const res = await addUser(formData as User);
      if (res.ok) {
        onSucess();
        onClose();
      }
    }
  };

  const handleEdit = async () => {
    console.log("Edit user", formData);
    const allTouched: Record<string, boolean> = {};
    formSchema.forEach((f) => {
      allTouched[f.name] = true;
    });
    setTouched(allTouched);

    const errors = formSchema
      .map((field) => field.validate(formData[field.name] || ""))
      .filter(Boolean);

    if (errors.length === 0) {
      const res = await updateUser(formData as User);
      if (res.ok) {
        onSucess();
        onClose();
      }
    }
  };
  return (
    <>
      {/* Overlay backdrop */}
      <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />

      {/* Modal card */}
      <Card className="w-full max-w-md fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="absolute top-2 right-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="cursor-pointer"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>Add New User</CardTitle>
            <CardDescription>Enter user details below</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-6">
              {formSchema.map((field) => (
                <div className="grid gap-2">
                  <label htmlFor={field.name}>{field.label}</label>
                  <Input
                    id={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    name={field.name}
                    value={formData[field.name] || ""}
                    onChange={handleChange}
                  />
                  {getError(field.name) && (
                    <p className="text-sm text-red-500">
                      {getError(field.name)}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            {user ? (
              <Button type="button" className="w-full" onClick={handleEdit}>
                Update User
              </Button>
            ) : (
              <Button type="submit" className="w-full">
                Add User
              </Button>
            )}
            <Button variant="outline" className="w-full" onClick={onClose}>
              Cancel
            </Button>
          </CardFooter>
        </form>
      </Card>
    </>
  );
};

export { UserForm };
