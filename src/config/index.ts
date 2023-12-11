export const PRODUCT_CATEGORIES = [
  // {
  //   label: "UI Kits",
  //   value: "ui_kits" as const,
  //   featured: [
  //     {
  //       name: "Editor picks",
  //       href: "#",
  //       imageSrc: "/nav/ui-kits/mixed.jpg",
  //     },
  //     {
  //       name: "New Arrivals",
  //       href: "#",
  //       imageSrc: "/nav/ui-kits/blue.jpg",
  //     },
  //     {
  //       name: "Bestsellers",
  //       href: "#",
  //       imageSrc: "/nav/ui-kits/purple.jpg",
  //     },
  //   ],
  // },
  // {
  //   label: "Icons",
  //   value: "icons" as const,
  //   featured: [
  //     {
  //       name: "Favorite Icon Picks",
  //       href: "#",
  //       imageSrc: "/nav/icons/picks.jpg",
  //     },
  //     {
  //       name: "New Arrivals",
  //       href: "#",
  //       imageSrc: "/nav/icons/new.jpg",
  //     },
  //     {
  //       name: "Bestselling Icons",
  //       href: "#",
  //       imageSrc: "/nav/icons/bestsellers.jpg",
  //     },
  //   ],
  // },
  {
    label: "Pakiety UI",
    value: "ui_kits" as const,
    featured: [
      {
        name: "Editor picks",
        href: `/produkty?category=ui_kits`,
        imageSrc: "/nav/ui-kits/mixed.jpg",
      },
      {
        name: "Nowości",
        href: "/produkty?category=ui_kits&sort=desc",
        imageSrc: "/nav/ui-kits/blue.jpg",
      },
      {
        name: "Bestsellery",
        href: "/produkty?category=ui_kits",
        imageSrc: "/nav/ui-kits/purple.jpg",
      },
    ],
  },

  {
    label: "Ikony",
    value: "icons" as const,
    featured: [
      {
        name: "Ulubione ikony",
        href: `/produkty?category=icons`,
        imageSrc: "/nav/icons/picks.jpg",
      },
      {
        name: "Nowości",
        href: "/produkty?category=icons&sort=desc",
        imageSrc: "/nav/icons/new.jpg",
      },
      {
        name: "Najlepiej sprzedające się ikony",
        href: "/produkty?category=icons",
        imageSrc: "/nav/icons/bestsellers.jpg",
      },
    ],
  },
];
