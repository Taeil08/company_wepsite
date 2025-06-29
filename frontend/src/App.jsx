import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./components/Footer/footer";
import MainPage from "./Page/MainPage/MainPage";
import About from "./Page/About/About";
import Leadership from "./Page/Leadership/Leadership";
import Board from "./Page/Board/Board";
import Services from "./Page/Service/Services";
import Contact from "./Page/Contact/Contact";
function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/Leadership",
        element: <Leadership />,
      },
      {
        path: "/Board",
        element: <Board />,
      },
      {
        path: "/our-services",
        element: <Services />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
