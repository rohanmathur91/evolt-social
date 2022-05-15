import { useState } from "react";
import { useDispatch } from "react-redux";
import { editUser, useAuth } from "../../auth";
import { CircularLoader } from "../../../common";

export const EditProfileForm = ({ handleModalType }) => {
  const dispatch = useDispatch();
  const { user, isLoading } = useAuth();
  const { bio, username, firstName, lastName, websiteUrl, profileImage } =
    user ?? {};
  const [editedBio, setEditedBio] = useState(bio || "");
  const [imageUploading, setImageUploading] = useState(false);
  const [updatedProfileImage, setUpdatedProfileImage] = useState(
    profileImage || null
  );
  const [updatedWebsitelUrl, setUpdatedWebsitelUrl] = useState(
    websiteUrl || ""
  );

  const handleProfileImageChange = async (e) => {
    e.preventDefault();
    try {
      setImageUploading(true);
      const imageFormData = new FormData();
      imageFormData.append("file", e.target.files[0]);
      imageFormData.append(
        "upload_preset",
        process.env.REACT_APP_UPLOAD_PRESET_NAME
      );

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: imageFormData,
        }
      );

      const { url, original_filename } = await response.json();

      setUpdatedProfileImage({ url, original_filename });
    } catch (error) {
      console.log(error);
    } finally {
      setImageUploading(false);
    }
    //
  };

  const handleWebsiteUrlChange = (e) => {
    setUpdatedWebsitelUrl(e.target.value);
  };

  const handleBioChange = (e) => {
    setEditedBio(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userData = {
      bio: editedBio,
      websiteUrl: updatedWebsitelUrl,
      profileImage: updatedProfileImage,
    };
    dispatch(editUser({ userData, handleModalType }));
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="bg-white flex flex-col p-4 rounded relative"
    >
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
          {imageUploading ? (
            <div className="w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center rounded-full text-blue-500">
              <CircularLoader size="1.6rem" />
            </div>
          ) : updatedProfileImage ? (
            <img
              loading="lazy"
              src={updatedProfileImage.url}
              alt={updatedProfileImage.original_filename}
              className="w-10 h-10 sm:w-14 sm:h-14 object-contain bg-gray-200 rounded-full"
            />
          ) : (
            <div className="w-10 h-10 sm:w-14 sm:h-14 text-2xl flex items-center justify-center font-semibold rounded-full bg-blue-500 text-white">
              {firstName[0].toUpperCase()}
            </div>
          )}

          <div className="flex items-center justify-center absolute right-[-4px] bottom-[-7px] text-blue-500 w-6 h-6 sm:w-8 sm:h-8 border border-blue-500 rounded-full bg-blue-100">
            <label
              htmlFor="image-upload"
              data-tooltip={`${
                updatedProfileImage ? "Update" : "Add"
              } profile image`}
              className="tooltip hover:cursor-pointer flex items-center justify-center"
            >
              <span className="material-icons-outlined text-sm sm:text-base select-none">
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
        <span className="ml-4 font-semibold">{`${firstName} ${lastName}`}</span>
      </div>

      <div className="flex flex-row mb-4">
        <span>Username:</span>
        <span className="ml-4 font-semibold">{username}</span>
      </div>

      <label>
        Website link:
        <input
          type="text"
          value={updatedWebsitelUrl}
          onChange={handleWebsiteUrlChange}
          placeholder="website or portfolio..."
          className="border border-slate-300 mt-1 rounded w-full focus:border focus:border-blue-500"
        />
      </label>

      <label className="mt-4">
        Bio:
        <textarea
          type="text"
          placeholder="Bio..."
          value={editedBio}
          onChange={handleBioChange}
          className="border border-slate-300 h-28 mt-1 rounded w-full py-2 px-4 outline-none focus:border focus:border-blue-500"
        />
      </label>
      {editedBio.length > 80 && (
        <span className="text-sm text-red-500 flex items-center">
          <span className="material-icons-outlined mr-2 text-xl">
            error_outline
          </span>
          Bio should be of atmost 80 characters.
        </span>
      )}

      <button
        disabled={isLoading || editedBio.length > 80}
        className={`${
          isLoading ? "relative" : ""
        } btn btn-primary mt-2 self-end py-1 px-3 text-sm sm:text-base`}
      >
        {isLoading && <CircularLoader size="1rem" position="center" />}
        <span className={isLoading ? "invisible" : ""}>Update</span>
      </button>
    </form>
  );
};

EditProfileForm.defaultProps = {
  handleModalType: () => {},
};
