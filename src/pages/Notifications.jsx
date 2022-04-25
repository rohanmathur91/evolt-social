import React from "react";
import notification from "../assets/notification.svg";

export const Notifications = () => {
  return (
    <main className="main p-3">
      <h4 className="font-semibold mt-4 mb-2">Notifications</h4>
      <div className="flex flex-col items-center">
        <img src={notification} alt="notification" className="w-40 h-40" />
        <p className="text-gray-500 text-center">No notifications yet.</p>
      </div>
    </main>
  );
};
