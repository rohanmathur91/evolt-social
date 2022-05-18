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
    profileBackgroundUrl: "",
    bio: "Adarsh balika the web developer ❤️",
    websiteUrl: "https://adarshbalika.netlify.app/",
    profileImage: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1652362403/ct4fvtk6i5iu1mbnb6hj.jpg",
      original_filename: "adarshbalika-profile",
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
    profileBackgroundUrl: "",
    websiteUrl: "https://github.com/rohanmathur91",
    bio: "Hey, this is my bio, follow me.",
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
  {
    _id: "lucy-van-userId",
    firstName: "Lucy",
    lastName: "Van",
    username: "lucyvan",
    password: "lucyvan@123",
    profileImage: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1652872677/28102735662_5773509d11_b_zpjwv0.webp",
      original_filename: "lucyvan-profile",
    },
    profileBackgroundUrl: "",
    websiteUrl: "https://en.wikipedia.org/wiki/Lucy_Van_Pelt",
    bio: "👋🏻 Hey I am a fictional character.",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "virat-kohli-userId",
    firstName: "Virat",
    lastName: "Kohli",
    username: "imVkohli",
    password: "imVkohli@123",
    profileImage: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1652872392/download_h9vf4r.jpg",
      original_filename: "imVkohli-profile",
    },
    profileBackgroundUrl: "",
    websiteUrl: "https://en.wikipedia.org/wiki/Virat_Kohli",
    bio: "Indian international cricketer and former captain of the India national cricket team.",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
