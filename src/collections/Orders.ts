import { CollectionConfig } from "payload/types";

export const Orders: CollectionConfig = {
  slug: "orders",
  admin: {
    // useAsTitle: "Your Orders",
    // description: "A summary of all your orders on DigitalMarket",
    useAsTitle: "Twoje zamówienia",
    description: "Podsumowanie wszystkich Twoich zamówień w naszym Markecie",
  },
  fields: [
    {
      name: " _isPaid",
      type: "checkbox",
      access: {
        read: ({ req }) => req.user.role === "admin",
        create: () => false,
        update: () => false,
      },
      admin: {
        hidden: true,
      },
      required: true,
    },
    {
      name: "user",
      type: "relationship",
      admin: {
        hidden: true,
      },
      relationTo: "users",
      required: true,
    },
  ],
};
