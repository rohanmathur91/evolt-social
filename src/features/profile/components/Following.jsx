import React from "react";
import { Link } from "react-router-dom";
import { useProfile } from "../profileSlice";
import { UserCard } from "../../users";

export const Following = () => {
  const { currentUser } = useProfile();
  const { following } = currentUser;

  return (
    <div className="p-4">
      {following?.length > 0 ? (
        following.map((user) => <UserCard key={user._id} {...user} />)
      ) : (
        <p className="text-center font-semibold mt-8">
          No following to show, please follow some users.
          <Link to="/explore" className="text-blue-500 hover:underline ml-1">
            Explore
          </Link>
        </p>
      )}
    </div>
  );
};
