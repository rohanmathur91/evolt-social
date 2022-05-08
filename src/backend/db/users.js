import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    bio: "You only live once, but if you do it right, once is enough.",
    profileUrl: "https://picsum.photos/200/200",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Rohan",
    lastName: "Mathur",
    username: "rohanmathur",
    password: "rohanmathur@123",
    bio: "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    password: "johndoe@123",
    bio: "You only live once, but if you do close they were to success when they gave up.",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
