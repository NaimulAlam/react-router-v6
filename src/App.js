import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Main from "./Layout/Main";
import NotFound from "./components/NotFound";
import Friends from "./components/Friends";
import FriendDeatails from "./components/FriendDeatails";
import Posts from "./components/Posts";
import PostDetails from "./components/PostDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        { path: "/", element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "products", element: <Products /> },
        {
          path: "friends",
          loader: async () => {
            return await fetch("https://jsonplaceholder.typicode.com/users");
          },
          element: <Friends />,
        },
        {
          path: "/friend/:friendId",
          loader: async ({ params }) => {
            // return console.log(params.friendId);
            return await fetch(
              `https://jsonplaceholder.typicode.com/users/${params.friendId}`
            );
          },
          element: <FriendDeatails />,
        },
        {
          path: "/posts",
          loader: async () => {
            // return console.log(params.friendId);
            return await fetch(`https://jsonplaceholder.typicode.com/posts`);
          },
          element: <Posts />,
        },
        {
          path: "/posts/:postId",
          loader: async ({ params }) => {
            return await fetch(
              `https://jsonplaceholder.typicode.com/posts/${params.postId}`
            );
          },
          element: <PostDetails />,
        },
      ],
    },
    { path: "about", element: <About /> },
    { path: "*", element: <NotFound /> },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

