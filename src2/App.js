import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import About from "./About";
import Home from "./Home";
import Item from "./item/Item";
function App() {
  const dataArray = [
    {
      id: 1,
      title: "文章 1",
      content: "這是文章 1 的內容。",
    },
    {
      id: 2,
      title: "文章 2",
      content: "這是文章 2 的內容。",
    },
    {
      id: 3,
      title: "文章 3",
      content: "這是文章 3 的內容。",
    },
    {
      id: 4,
      title: "文章 4",
      content: "這是文章 4 的內容。",
    },
    {
      id: 5,
      title: "文章 5",
      content: "這是文章 5 的內容。",
    },
    {
      id: 6,
      title: "文章 6",
      content: "這是文章 6 的內容。",
    },
    {
      id: 7,
      title: "文章 7",
      content: "這是文章 7 的內容。",
    },
    {
      id: 8,
      title: "文章 8",
      content: "這是文章 8 的內容。",
    },
    {
      id: 9,
      title: "文章 9",
      content: "這是文章 9 的內容。",
    },
    {
      id: 10,
      title: "文章 10",
      content: "這是文章 10 的內容。",
    },
  ];
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route index path="/" element={<Home dataArray={dataArray}/>}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="/post/:postId" element={<Item dataArray={dataArray} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
