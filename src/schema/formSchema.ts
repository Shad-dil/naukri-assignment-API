export const formSchema = [
  {
    type: "text",
    name: "firstName",
    label: "First Name",
    placeholder: "John",
    required: true,
    validate: (v: string) => {
      if (!v) return "First name is required";
      return v.length < 2 ? "First name must be at least 2 characters" : null;
    },
  },
  {
    type: "text",
    name: "lastName",
    label: "Last Name",
    placeholder: "Doe",
    required: true,
    validate: (v: string) => {
      if (!v) return "Last name is required";
      return v.length < 2 ? "Last name must be at least 2 characters" : null;
    },
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
    validate: (v: string) => {
      if (!v) return "Phone number is required";
      return v.length < 10 ? "Phone number must be at least 10 digits" : null;
    },
  },
];
