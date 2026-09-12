
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log("Route changed:", pathname);

    window.scrollTo(0, 0);

    document.body.style.overflow = "auto";
    document.documentElement.style.overflow = "auto";
  }, [pathname]);

  return null;
}


