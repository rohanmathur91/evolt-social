import { useState } from "react";

export const EditProfileForm = ({ handleModalType }) => {
  const [profileImage, setProfileImage] = useState(null);

  const handleProfileImageChange = (e) => {
    console.log(profileImage);
    setProfileImage(e.target.files[0]);
  };
  return (
    <form className="bg-white flex flex-col p-4 rounded relative">
      <div className="absolute right-0 top-0">
        <button
          type="button"
          data-tooltip="Close"
          onClick={() => handleModalType("")}
          className="tooltip p-2 m-2 flex rounded items-center justify-center hover:bg-blue-100 hover:text-blue-500"
        >
          <span className="material-icons-outlined">close</span>
        </button>
      </div>

      <div className="flex flex-row items-center mb-4">
        <span>Profile image: </span>
        <div className="ml-4 relative rounded-full border">
          <img
            alt="profile"
            loading="lazy"
            src="https://i.pravatar.cc/300"
            className="w-10 h-10 sm:w-14 sm:h-14 bg-gray-200 rounded-full"
          />

          <div className="flex items-center justify-center absolute right-[-4px] bottom-[-7px] text-blue-500 w-6 h-6 sm:w-8 sm:h-8 border border-blue-500 rounded-full bg-blue-100">
            <label
              htmlFor="image-upload"
              data-tooltip="Add profile image"
              className="tooltip hover:cursor-pointer flex items-center justify-center"
            >
              <span className="material-icons-outlined text-sm sm:text-base">
                add_a_photo
              </span>
              <input
                type="file"
                accept="image/*"
                id="image-upload"
                className="invisible w-0 p-0"
                onChange={handleProfileImageChange}
              />
            </label>
          </div>
        </div>
      </div>

      <div className="flex flex-row mb-4">
        <span>Name:</span>
        <span className="ml-4 font-semibold">Adarsh Balika</span>
      </div>

      <div className="flex flex-row mb-4">
        <span>Username:</span>
        <span className="ml-4 font-semibold">@adarshBalika</span>
      </div>

      <label>
        Website link:
        <input
          type="text"
          placeholder="Link..."
          className="border border-slate-300 rounded w-full focus:border focus:border-blue-500"
        />
      </label>

      <label className="mt-4">
        Bio:
        <textarea
          type="text"
          maxLength="80"
          placeholder="Bio..."
          className="border border-slate-300 rounded w-full py-2 px-4 outline-none focus:border focus:border-blue-500"
        />
      </label>

      <button className="btn btn-primary mt-2 self-end py-2 px-4 text-sm sm:text-base">
        Update
      </button>
    </form>
  );
};

EditProfileForm.defaultProps = {
  handleModalType: () => {},
};
