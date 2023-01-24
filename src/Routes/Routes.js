import { createBrowserRouter } from "react-router-dom";
import Countries from "../Components/Countries";
import Country from "../Components/Country";

const router = createBrowserRouter([
  {
    path: "/",
    loader: async () => {
      return await fetch("https://restcountries.com/v3.1/all");
    },
    element: <Countries />,
  },
  {
    path: "/counrty/:name",
    loader: async ({ params }) => {
      return await fetch(`https://restcountries.com/v3.1/name/${params.name}`);
    },
    element: <Country />,
  },
]);

export default router;
