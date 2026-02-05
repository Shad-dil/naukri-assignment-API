import { required } from "zod/v4-mini";

export const formSchema = [
  {
    type: "text",
    name: "firstName",
    label: "First Name",
    placeholder: "John",
    required: true,
    validate: (v: string) => (!v ? "First name is required" : null),
  },
  {
    type: "text",
    name: "lastName",
    label: "Last Name",
    placeholder: "Doe",
    required: true,
    validate: (v: string) => (!v ? "Last name is required" : null),
  },
  {
    type: "email",
    name: "email",
    label: "Email",
    placeholder: "john.doe@example.com",
    required: true,
    validate: (v: string) =>
      /^\S+@\S+\.\S+$/.test(v) ? null : "Invalid email address",
  },
  {
    type: "text",
    name: "phone",
    label: "Phone",
    placeholder: "+91 00000-00000",
    required: true,
    validate: (v: string) => (!v ? "Phone number is required" : null),
  },
];
