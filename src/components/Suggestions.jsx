import React from "react";
import { useLocation } from "react-router-dom";

export const Suggestions = () => {
  const { pathname } = useLocation();
  const isProfilePage = pathname.includes("/profile/");

  return (
    <aside
      className={`${
        isProfilePage ? "lg:hidden" : "lg:block"
      } hidden lg:right-aside border-l`}
    >
      <div>
        <img src="" alt="" />
        <div>
          <p></p>
          <p></p>
        </div>
      </div>

      {/* map SuggestionCard */}
    </aside>
  );
};
