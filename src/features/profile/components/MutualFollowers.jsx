import { useProfile } from "..";
import { useAuth } from "../../auth";

export const MutualFollowers = () => {
  const { user } = useAuth();
  const { currentUser } = useProfile();

  const getMutualFollowersList = (
    loggedInUserFollowers = [],
    currentUserFollowers = []
  ) => {
    const loggedInUserFollowersSet = new Set();
    loggedInUserFollowers.forEach((user) =>
      loggedInUserFollowersSet.add(user._id)
    );

    return currentUserFollowers.filter((user) =>
      loggedInUserFollowersSet.has(user._id)
    );
  };

  const mutualFollowersList = getMutualFollowersList(
    user.followers,
    currentUser.followers
  );

  return (
    <ul>
      {mutualFollowersList.length > 0 ? (
        mutualFollowersList.map((user) => <li key={user._id}>{user._id}</li>)
      ) : (
        <p>No mutual followers.</p>
      )}
    </ul>
  );
};
