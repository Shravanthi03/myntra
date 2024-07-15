import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import MyntraRevibe from "./pages/MyntraRevibe";
import Home from "./pages/Home";
import ShopNOW from "./pages/ShopNOW";
import Info from "./pages/Info";
import DesignStudio from "./pages/DesignStudio";
import Flexing from "./pages/Flexing";
import Beforeafter from "./pages/Beforeafter";
import Profile from "./pages/Profile";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/home":
        title = "";
        metaDescription = "";
        break;
      case "/shop-now":
        title = "";
        metaDescription = "";
        break;
      case "/info":
        title = "";
        metaDescription = "";
        break;
      case "/design-studio":
        title = "";
        metaDescription = "";
        break;
      case "/flexing":
        title = "";
        metaDescription = "";
        break;
      case "/beforeafter":
        title = "";
        metaDescription = "";
        break;
      case "/profile":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<MyntraRevibe />} />
      <Route path="/home" element={<Home />} />
      <Route path="/shop-now" element={<ShopNOW />} />
      <Route path="/info" element={<Info />} />
      <Route path="/design-studio" element={<DesignStudio />} />
      <Route path="/flexing" element={<Flexing />} />
      <Route path="/beforeafter" element={<Beforeafter />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
export default App;
