import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useUsers, getSearchedUsers } from "./userSlice";
import { Sidebar, TopContributors, CircularLoader } from "../../common";
import { UserCard } from "./components";

export const Search = () => {
  const dispatch = useDispatch();
  const { userlist, isLoading } = useUsers();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(getSearchedUsers.pending());

    let timerId = setTimeout(() => {
      dispatch(getSearchedUsers(searchQuery));
    }, 700);

    return () => timerId && clearTimeout(timerId);
  }, [dispatch, searchQuery]);

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleClearSearchQuery = () => {
    setSearchQuery("");
  };

  return (
    <div className="grid-container">
      <Sidebar />
      <TopContributors />

      <main className="main py-3 px-4 bg-white rounded-lg">
        <h4 className="font-semibold mt-4 mb-2">Search your friends.</h4>
        <label htmlFor="search" className="relative">
          <span className="material-icons-outlined absolute text-slate-500 left-[10px] top-[-2px]">
            search
          </span>
          <input
            autoFocus
            id="search"
            type="text"
            value={searchQuery}
            autoComplete="off"
            placeholder="Search..."
            onChange={handleSearchQuery}
            className="bg-slate-100 shadow-sm px-10 rounded-lg focus:bg-slate-50 w-full border focus:border focus:border-slate-300"
          />
          {searchQuery && (
            <button
              title="Clear"
              onClick={handleClearSearchQuery}
              className="flex items-center hover:bg-slate-200 rounded text-slate-500 text-xl absolute right-[10px] top-[-2px]"
            >
              <span className="material-icons-outlined">close</span>
            </button>
          )}
        </label>

        <div className="mt-8">
          {isLoading ? (
            <p className="text-center font-semibold mt-8">
              {searchQuery ? (
                <span className="flex items-center justify-center">
                  <CircularLoader size="1rem" customStyle="text-blue-500" />
                  <span className="ml-4">Searching for "{searchQuery}"</span>
                </span>
              ) : (
                <CircularLoader size="2rem" customStyle="text-blue-500" />
              )}
            </p>
          ) : userlist.length > 0 ? (
            userlist.map((user) => <UserCard key={user._id} {...user} />)
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
