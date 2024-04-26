import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
     <Header name={blogData.name} />
     <About image={blogData.image} about={blogData.about} />
     <ArticleList key={blogData.posts.id} title={blogData.posts.title} date={blogData.posts.date} preview={blogData.posts.preview} minutes={blogData.posts.minutes} />
    </div>
  );
}

export default App;
