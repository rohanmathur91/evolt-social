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
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1653736054/angelist-profile_rmiupp.jpg",
      original_filename: "rohanmathur-profile",
    },
    profileBackgroundUrl: "",
    websiteUrl: "https://github.com/rohanmathur91",
    bio: "👋🏻Hey, I am a passionate frontend developer.",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "dan-abramov-userId",
    firstName: "Dan",
    lastName: "Abramov",
    username: "dan_abramov",
    password: "danabramov@123",
    profileImage: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1653736290/dan_o6nk9h.jpg",
      original_filename: "dan-abramov",
    },
    profileBackgroundUrl: "",
    websiteUrl: "https://overreacted.io/",
    bio: "there’ll be something missing.",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "conor-mcgregor-test-userId",
    firstName: "Conor",
    lastName: "McGregor",
    username: "thenotoriousmma",
    password: "conormcgregor@123",
    profileBackgroundUrl: "",
    websiteUrl: "https://conormcgregor.com/",
    bio: "We’re not just here to take part. We’re here to take over.",
    profileImage: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1653735959/images_fufwdx.jpg",
      original_filename: "conor-mcgregor",
    },
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
