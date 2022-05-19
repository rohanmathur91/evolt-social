import { useEffect } from "react";
import { useAuth } from "../../features";

export const useInitializeTheme = () => {
  const { theme } = useAuth();

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    }
  }, [theme]);
};
