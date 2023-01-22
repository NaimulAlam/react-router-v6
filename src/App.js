import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <div>Default page</div> },
    { path: "home", element: <Home /> },
    { path: "about", element: <About /> },
    { path: "products", element: <Products /> },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

