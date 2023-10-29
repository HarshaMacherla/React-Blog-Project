import Layout from "./components/Layout";
import Home from "./components/Home";
import NewPost from "./components/NewPost";
import PostPage from "./components/PostPage";
import EditPost from "./components/EditPost";
import About from "./components/About";
import Missing from "./components/Missing";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout title="React JS Blog" />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="post" element={<NewPost />} />
        <Route path="newpost/:id" element={<PostPage />} />
        <Route path="/edit/:id" element={<EditPost />}></Route>
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
