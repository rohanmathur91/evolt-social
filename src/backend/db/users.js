import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "adarsh-balika-test-userId",
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    profileBackgroundUrl: "https://picsum.photos/800/400",
    bio: "You only live once, but if you do it right, once is enough.",
    websiteUrl: "https://www.google.com/",
    profileImage: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1652362403/ct4fvtk6i5iu1mbnb6hj.jpg",
      original_filename: "Pngtree—businessman",
    },
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "rohan-mathur-test-userId",
    firstName: "Rohan",
    lastName: "Mathur",
    username: "rohanmathur",
    password: "rohanmathur@123",
    profileImage: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1652361355/g6uyad8oqzpx07uy1fuw.jpg",
      original_filename: "rohanmathur-profile",
    },
    profileBackgroundUrl: "https://picsum.photos/800/400",
    websiteUrl: "https://www.google.com/",
    bio: "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "john-doe-test-userId",
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    password: "johndoe@123",
    profileBackgroundUrl: "",
    websiteUrl: "https://www.google.com/",
    bio: "You only live once, but if you do close they were to success when they gave up.",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
