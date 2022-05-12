import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores lor repellendus.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    userId: "rohan-mathur-test-userId",
    comments: [],
    imageUrl: "https://picsum.photos/500/400",
    profileImage: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1652361355/g6uyad8oqzpx07uy1fuw.jpg",
      original_filename: "rohanmathur",
    },
    firstName: "Rohan",
    lastName: "Mathur",
    username: "rohanmathur",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores lor repellendus.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    userId: "adarsh-balika-test-userId",
    comments: [],
    profileImage: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1652361875/t8a53o7fsjhitdb1gzrn.jpg",
      original_filename: "Pngtree—businessman",
    },
    imageUrl: "",
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores lor repellendus.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    userId: "john-doe-test-userId",
    comments: [],
    imageUrl: "",
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
