import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Sidebar, TopContributors } from "../../common";
import { useAuth } from "../auth";
import { useUsers, getSearchedUsers } from "./userSlice";

export const Search = () => {
  const { user } = useAuth();
  const { userlist, isLoading } = useUsers();
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(getSearchedUsers.pending());

    let timerId = setTimeout(() => {
      dispatch(getSearchedUsers(searchQuery));
    }, 600);

    return () => timerId && clearTimeout(timerId);
  }, [dispatch, searchQuery]);

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleInputFocus = useCallback((node) => {
    if (node) {
      node.focus();
    }
  }, []);

  return (
    <div className="grid-container">
      <Sidebar />
      <TopContributors />

      <main className="main py-3 px-4 bg-white rounded-lg">
        <h4 className="font-semibold mt-4 mb-2">Search your friends.</h4>
        <label htmlFor="search" className="relative">
          <span className="material-icons-outlined absolute text-slate-500 left-[10px] bottom-[9px] translate-y-1/2">
            search
          </span>
          <input
            id="search"
            type="text"
            value={searchQuery}
            autoComplete="off"
            placeholder="Search..."
            ref={handleInputFocus}
            onChange={handleSearchQuery}
            className="bg-slate-100 shadow-sm pl-10 rounded-lg focus:bg-slate-50 w-full border focus:border focus:border-slate-300"
          />
        </label>

        <div className="mt-8">
          {isLoading ? (
            <p className="text-center font-semibold mt-8">
              {searchQuery ? `Searching for "${searchQuery}"` : "Loading..."}
            </p>
          ) : userlist.length > 0 ? (
            userlist.map(
              ({ _id, bio, firstName, lastName, username, profileUrl }) => (
                <article
                  key={_id}
                  className="p-2 pt-3 my-2 lg:mr-1 rounded-lg flex items-center border"
                >
                  <Link to={`/profile/${_id}`} className="flex items-center">
                    {profileUrl ? (
                      <img
                        alt={username}
                        loading="lazy"
                        src={profileUrl}
                        className="w-10 h-10 mr-4 object-cover flex-shrink-0 rounded-full bg-gray-200"
                      />
                    ) : (
                      <div className="w-10 h-10 mr-4 flex flex-shrink-0 items-center justify-center font-semibold object-cover rounded-full bg-blue-500 text-white">
                        {firstName[0] + lastName[0]}
                      </div>
                    )}

                    <div>
                      <p className="mr-1 text-sm sm:text-base font-semibold flex items-center line-clamp-1">
                        {firstName} {lastName}
                        <span className="hidden sm:inline text-gray-500 text-sm font-normal ml-2">
                          @{username}
                        </span>
                      </p>
                      <p className="text-sm text-gray-500 line-clamp-1">
                        {bio}
                      </p>
                    </div>
                  </Link>
                  {username !== user.username && (
                    <button className="ml-auto self-start text-xs md:text-sm bg-blue-500 text-white py-1 px-3 rounded hover:opacity-70">
                      Follow
                    </button>
                  )}
                </article>
              )
            )
          ) : (
            <p className="text-center font-semibold mt-8">
              No results matched with "{searchQuery}"
            </p>
          )}
        </div>
      </main>
    </div>
  );
};
