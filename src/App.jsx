import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Porfolio from "./Components/Porfolio";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout";

function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "", element: <Home /> },
        { path: "home", element: <Navigate to={""} /> },
        { path: "about", element: <About /> },
        { path: "portfolio", element: <Porfolio /> },
        { path: "contact", element: <Contact /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
library.add(fab, fas, far);
