// data.ts
export type Item = {
  name: string;
  id: number;
  rusian: string;
  serbian: string;
  english: string;
};

export type Category = {
  category: string; // Ime kategorije
  items: Item[];    // Niz itema u kategoriji
};

export const allItems: Category[] = [
  {
    category: "kategorija_1",
    items: [
      {
        name: "item 1",
        id: 1,
        rusian: "https:rusian1.com",
        serbian: "https:serbian1.com",
        english: "https:english1.com",
      },
      {
        name: "item 2",
        id: 2,
        rusian: "https:rusian2.com",
        serbian: "https:serbian2.com",
        english: "https:english2.com",
      },
      {
        name: "item 3",
        id: 3,
        rusian: "https:rusian3.com",
        serbian: "https:serbian3.com",
        english: "https:english3.com",
      },
      {
        name: "item 4",
        id: 4,
        rusian: "https:rusian4.com",
        serbian: "https:serbian4.com",
        english: "https:english4.com",
      },
    ],
  },
  {
    category: "kategorija_2",
    items: [
      {
        name: "item 5",
        id: 5,
        rusian: "https:rusian5.com",
        serbian: "https:serbian5.com",
        english: "https:english5.com",
      },
      {
        name: "item 6",
        id: 6,
        rusian: "https:rusian6.com",
        serbian: "https:serbian6.com",
        english: "https:english6.com",
      },
      {
        name: "item 7",
        id: 7,
        rusian: "https:rusian7.com",
        serbian: "https:serbian7.com",
        english: "https:english7.com",
      },
      {
        name: "item 8",
        id: 8,
        rusian: "https:rusian8.com",
        serbian: "https:serbian8.com",
        english: "https:english8.com",
      },
    ],
  },
  {
    category: "kategorija_3",
    items: [
      {
        name: "item 9",
        id: 9,
        rusian: "https:rusian9.com",
        serbian: "https:serbian9.com",
        english: "https:english9.com",
      },
      {
        name: "item 10",
        id: 10,
        rusian: "https:rusian10.com",
        serbian: "https:serbian10.com",
        english: "https:english10.com",
      },
      {
        name: "item 11",
        id: 11,
        rusian: "https:rusian11.com",
        serbian: "https:serbian11.com",
        english: "https:english11.com",
      },
      {
        name: "item 12",
        id: 12,
        rusian: "https:rusian12.com",
        serbian: "https:serbian12.com",
        english: "https:english12.com",
      },
    ],
  },
  {
    category: "kategorija_4",
    items: [
      {
        name: "item 13",
        id: 13,
        rusian: "https:rusian13.com",
        serbian: "https:serbian13.com",
        english: "https:english13.com",
      },
      {
        name: "item 14",
        id: 14,
        rusian: "https:rusian14.com",
        serbian: "https:serbian14.com",
        english: "https:english14.com",
      },
      {
        name: "item 15",
        id: 15,
        rusian: "https:rusian15.com",
        serbian: "https:serbian15.com",
        english: "https:english15.com",
      },
      {
        name: "item 16",
        id: 16,
        rusian: "https:rusian16.com",
        serbian: "https:serbian16.com",
        english: "https:english16.com",
      },
       {
        name: "item 55",
        id: 55,
        rusian: "https:rusian55.com",
        serbian: "https:serbian55.com",
        english: "https:english55.com",
      },
    ],
  },
  {
    category: "kategorija_5",
    items: [
      {
        name: "item 17",
        id: 17,
        rusian: "https:rusian17.com",
        serbian: "https:serbian17.com",
        english: "https:english17.com",
      },
      {
        name: "item 18",
        id: 18,
        rusian: "https:rusian18.com",
        serbian: "https:serbian18.com",
        english: "https:english18.com",
      },
      {
        name: "item 19",
        id: 19,
        rusian: "https:rusian19.com",
        serbian: "https:serbian19.com",
        english: "https:english19.com",
      },
      {
        name: "item 20",
        id: 20,
        rusian: "https:rusian20.com",
        serbian: "https:serbian20.com",
        english: "https:english20.com",
      },
    ],
  },
];
