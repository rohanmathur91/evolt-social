import React from "react";

export const Explore = () => {
  return (
    <main className="main">
      {[...Array(10)].map(() => (
        <div>
          <div>{/* profile data */}</div>
          <img src="" alt="" />
          <p>{/*post data */}</p>
          <div>{/* buttons */}</div>
        </div>
      ))}
    </main>
  );
};
