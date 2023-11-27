import { PRODUCT_CATEGORIES } from "../../config";
import { CollectionConfig } from "payload/types";
import { number } from "zod";

export const Products: CollectionConfig = {
  slug: "products",
  admin: {
    useAsTitle: "name",
  },
  access: {},
  fields: [
    {
      name: "user",
      type: "relationship",
      relationTo: "users",
      required: true,
      hasMany: false,
      admin: {
        condition: () => false,
      },
    },
    {
      name: "name",
      // label: "Name",
      label: "Nazwa",
      type: "text",
      required: true,
    },
    {
      // name: "description"
      name: "description",
      type: "textarea",
      // label: "Product details",
      label: "Detale produktu",
    },
    {
      name: "price",
      label: "Cena w PLN",
      min: 0,
      max: 1000,
      type: "number",
      required: true,
    },

    {
      name: "category",
      // label: "Category",
      label: "Kategorie",
      type: "select",
      options: PRODUCT_CATEGORIES.map(({ label, value }) => ({ label, value })),
      required: true,
    },
    {
      name: "product_files",
      // label: "Product file(s)",
      label: "Plik(i) produktu",
      type: "relationship",
      required: true,
      relationTo: "product_files",
      hasMany: false,
    },
    {
      name: "approvedForSale",
      // label: "Product Status",
      label: "Status Produktu",
      type: "select",
      // defaultValue: "Pending",
      defaultValue: "Oczekuje ",
      access: {
        create: ({ req }) => req.user.role === "admin",
        read: ({ req }) => req.user.role === "admin",
        update: ({ req }) => req.user.role === "admin",
      },
      options: [
        {
          label: "Oczekuje weryfikacji",
          value: "oczekuje",
        },
        {
          label: "Potwierdozne",
          value: "potwierdzone",
        },
        {
          label: "Odrzucono",
          value: "odrzucono",
        },
      ],
    },
    {
      name: "priceId",
      access: {
        create: () => false,
        read: () => false,
        update: () => false,
      },
      type: "text",
      admin: {
        hidden: true,
      },
    },
    {
      name: "stripeId",
      access: {
        create: () => false,
        read: () => false,
        update: () => false,
      },
      type: "text",
      admin: {
        hidden: true,
      },
    },
    {
      name: "images",
      type: "array",
      // label: 'Product images',
      label: "Zdjęcie produktu",
      minRows: 1,
      maxRows: 4,
      required: true,
      labels: {
        // singular: "Image",
        // plural: "Images"
        singular: "Obraz",
        plural: "Obrazu",
      },
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],
    },
  ],
};
