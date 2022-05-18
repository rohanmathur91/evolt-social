import React from "react";
import { useLocation } from "react-router-dom";
import { useUsers, getFollowingStatus, useProfile } from "../../features";
import suggestionsFallback from "../../assets/images/suggestions.svg";
import { SuggestionCard } from "../components";

export const Suggestions = () => {
  const { pathname } = useLocation();
  const { suggestions } = useUsers();
  const { loggedInUserfollowings } = useProfile();
  const newUsers = suggestions.filter(
    (user) => !getFollowingStatus(loggedInUserfollowings, user._id)
  );

  return (
    !pathname.includes("profile") && (
      <aside className="hidden py-2 px-4 lg:block lg:right-aside border rounded-lg sticky h-max md:mt-[15vh] md:top-[15vh] w-[20rem]">
        <h4 className="font-semibold my-4 text-center">Suggestions</h4>
        {newUsers.length > 0 ? (
          newUsers
            .slice(0, 2)
            .map((user) => <SuggestionCard key={user._id} {...user} />)
        ) : (
          <div className="text-center">
            <img
              alt="suggestions"
              src={suggestionsFallback}
              className="w-28 h-28 mx-auto"
            />

            <p className="text-sm font-semibold flex items-center justify-center">
              <span className="material-icons-outlined text-lg mr-1 text-green-500">
                task_alt
              </span>
              <span>You're All Caught Up.</span>
            </p>
            <p className="text-xs text-gray-500">
              No more new users to follow.
            </p>
          </div>
        )}
      </aside>
    )
  );
};
