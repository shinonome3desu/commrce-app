"use client";

import Book from "./components/Book";

// 疑似データ
const books = [
  {
    id: 1,
    title: "GroupSession",
    thumbnail: "/thumbnails/thum1.png",
    price: "2024/01/24",
    description: "GroupSessionに飛べます。",
    author: {
      id: 1,
      name: "Author 1",
      description: "Author 1 description",
      profile_icon: "https://source.unsplash.com/random/2",
    },
    content: "Content 1",
    created_at: new Date().toString(),
    updated_at: new Date().toString(),
  },
  {
    id: 2,
    title: "勤怠管理",
    thumbnail: "/thumbnails/thum2.png",
    price: "2024/05/24",
    description: "勤怠管理のためのツールです。",
    author: {
      id: 2,
      name: "Author 2",
      description: "Author 2 description",
      profile_icon: "https://source.unsplash.com/random/3",
    },
    content: "Content 2",
    created_at: new Date().toString(),
    updated_at: new Date().toString(),
  },
  {
    id: 3,
    title: "週報",
    price: "2024/01/24",
    description: "週報を記述するツールです。",
    thumbnail: "/thumbnails/thum3.png",
    author: {
      id: 3,
      name: "Author 3",
      description: "Author 3 description",
      profile_icon: "https://source.unsplash.com/random/4",
    },
    content: "Content 3",
    created_at: new Date().toString(),
    updated_at: new Date().toString(),
  },
  // 他のツールのデータ...
];

// eslint-disable-next-line @next/next/no-async-client-component
export default function Home() {
  return (
    <>
      <main className="flex flex-wrap justify-center items-center md:mt-32 mt-20">
        <h2 className="text-center w-full font-bold text-3xl mb-2">
          システム一覧
        </h2>
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </main>
    </>
  );
}