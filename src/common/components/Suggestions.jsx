import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  useUsers,
  useProfile,
  getSearchedUsers,
  getFollowingStatus,
} from "../../features";
import { SuggestionCard, CircularLoader } from "../components";
import suggestionsFallback from "../../assets/images/suggestions.svg";

export const Suggestions = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { suggestions } = useUsers();
  const { loggedInUserfollowings } = useProfile();
  const [isLoading, setIsLoading] = useState(false);
  const userSuggestionList = suggestions.filter(
    (user) => !getFollowingStatus(loggedInUserfollowings, user._id)
  );

  useEffect(() => {
    setIsLoading(true);
    dispatch(getSearchedUsers("")).finally(() => setIsLoading(false));
  }, [dispatch]);

  return (
    !pathname.includes("profile") && (
      <aside className="hidden py-2 px-4 lg:block lg:right-aside border rounded-lg sticky h-max md:mt-[6.2rem] md:top-[6.2rem] w-[20rem] dark:bg-gray-900 dark:border-gray-700">
        <h4 className="font-semibold my-4 text-center">Suggestions</h4>
        {isLoading ? (
          <CircularLoader size="2rem" customStyle="my-8 text-blue-500" />
        ) : userSuggestionList.length > 0 ? (
          userSuggestionList
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
