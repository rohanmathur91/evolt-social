import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";

export const Profile = () => {
  return (
    <main className="main">
      <div className="flex flex-row items-center justify-center my-4 p-2">
        <img
          alt="profile"
          loading="lazy"
          src="https://i.pravatar.cc/300"
          className="w-28 h-28 md:w-36 md:h-36 bg-gray-200 rounded-full border"
        />
        <div className="ml-4">
          <div className="flex flex-row items-center flex-wrap">
            <span className="text-xl md:text-2xl font-semibold mr-4">
              adarshBalika
            </span>

            <div className="mt-2 md:mt-0 flex flex-row items-center">
              <button className="mr-4 rounded text-sm border border-blue-500 text-blue-500 py-1 px-3 hover:transition-all hover:text-white hover:bg-blue-500">
                Edit Profile
              </button>
              <button
                data-tooltip="Logout"
                className="flex tooltip flex-row items-center justify-center"
              >
                <span className="material-icons-outlined md:text-3xl">
                  logout
                </span>
              </button>
            </div>
          </div>

          <div className="flex flex-row mt-3">
            <Link
              end
              to="/profile/1"
              className="mr-4 text-sm flex flex-col items-center justify-center"
            >
              <span className="font-semibold mr-1">10</span> <span>Posts</span>
            </Link>
            <Link
              to="/profile/1/followers"
              className="mr-4 text-sm flex flex-col items-center justify-center"
            >
              <span className="font-semibold mr-1">20</span>
              <span>Followers</span>
            </Link>
            <Link
              end
              to="/profile/1/following"
              className="mr-4 text-sm flex flex-col items-center justify-center"
            >
              <span className="font-semibold mr-1">12</span>
              <span>Following</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t flex items-center justify-between">
        <NavLink
          end
          to="/profile/1"
          className={({ isActive }) =>
            `${
              isActive ? "text-blue-500 border-t border-blue-500" : ""
            } font-semibold text-sm md:text-base  py-2 px-4`
          }
        >
          Posts
        </NavLink>
        <NavLink
          end
          to="/profile/1/followers"
          className={({ isActive }) =>
            `${
              isActive ? "text-blue-500 border-t border-blue-500" : ""
            } font-semibold text-sm md:text-base  py-2 px-4`
          }
        >
          Followers
        </NavLink>
        <NavLink
          end
          to="/profile/1/following"
          className={({ isActive }) =>
            `${
              isActive ? "text-blue-500 border-t border-blue-500" : ""
            } font-semibold text-sm md:text-base  py-2 px-4`
          }
        >
          Following
        </NavLink>
      </div>

      <Outlet />
    </main>
  );
};
