import { CollectionConfig } from "payload/types";

export const Users: CollectionConfig = {
  slug: "users",
  // auth: false,
  auth: {
    verify: {
      generateEmailHTML: ({ token }) => {
        return `<a href='${process.env.NEXT_PUBLIC_SERVER_URL}/autoryzacja?token=${token}'>Zweryfikuj swój email.`;
        // return `<a href='${process.env.NEXT_PUBLIC_SERVER_URL}/verify-email?token=${token}'>Verify account`;
      },
    },
  },
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    // {
    //   name: "role",
    //   defaultValue: "user",
    //   required: true,
    //   //   admin:{},
    //   type: "select",
    //   options: [
    //     { label: "Admin", value: "admin" },
    //     { label: "User", value: "user" },
    //   ],
    // },
    {
      name: "role",
      defaultValue: "user",
      required: true,
      //   admin: {
      //     condition: () => false,
      //   },
      type: "select",
      options: [
        { label: "Admin", value: "admin" },
        { label: "Użytkownik", value: "user" },
      ],
    },
  ],
};
