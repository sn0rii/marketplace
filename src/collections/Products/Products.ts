import { BeforeChangeHook } from "payload/dist/collections/config/types";
import { PRODUCT_CATEGORIES } from "../../config";
import { CollectionConfig } from "payload/types";
import { Product } from "../../payload-types";
import { stripe } from "../../lib/stripe";

const addUser: BeforeChangeHook<Product> = async ({ req, data }) => {
  const user = req.user;

  return { ...data, user: user.id };
};

export const Products: CollectionConfig = {
  slug: "products",
  admin: {
    useAsTitle: "name",
  },
  access: {},
  hooks: {
    beforeChange: [
      addUser,
      async (args) => {
        if (args.operation === "create") {
          const data = args.data as Product;

          const createdProduct = await stripe.products.create({
            name: data.name,
            default_price_data: {
              currency: "PLN",
              unit_amount: Math.round(data.price * 100),
            },
          });

          const updated: Product = {
            ...data,
            stripeId: createdProduct.id,
            priceId: createdProduct.default_price as string,
          };

          return updated;
        } else if (args.operation === "update") {
        }
      },
    ],
  },
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
