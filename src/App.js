import "./App.css";
import List from "./Screens/List";
import { Routes, Route } from "react-router";
import { useEffect } from "react";
import TweetForm from "./Screens/TweetForm";

function App() {
  useEffect(() => {
    let items = localStorage.getItem("TWEETS");
    items = JSON.parse(items);
    if (!items.length) {
      localStorage.setItem("TWEETS", JSON.stringify([]));
    }
  }, []);

  return (
    <div style={{ height: 200 }}>
      <header>
        <h1>Welcome to React Router!</h1>
      </header>
      <a href={`list`}>List</a> <a href={`tweetForm`}>Tweet Form</a>
      <Routes>
        <Route path={"/list"} element={<List />} />
        <Route path={"/tweetForm"} element={<TweetForm />} />
      </Routes>
    </div>
  );
}

export default App;
