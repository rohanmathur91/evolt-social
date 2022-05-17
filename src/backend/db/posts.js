import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: "a572a19c-68de1",
    content:
      "Leadership is lifting a person's vision to high sights, the raising of a person's performance to a higher standard, the building of a personality beyond its normal limitations. —Peter Drucker",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    userId: "adarsh-balika-test-userId",
    comments: [],
    profileImage: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1652362403/ct4fvtk6i5iu1mbnb6hj.jpg",
      original_filename: "Pngtree—businessman",
    },
    postMedia: null,
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    createdAt: "2022-05-15T16:43:34+05:30",
    updatedAt: "2022-05-15T16:43:34+05:30",
  },
  {
    _id: "4670-acf8-6b4892ec621e2",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores lor repellendus.",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "rohan-mathur-test-userId",
          username: "rohanmathur",
          firstName: "Rohan",
          lastName: "Mathur",
          likeUpdateDate: "2022-05-15T16:30:17+05:30",
        },
      ],
      dislikedBy: [],
    },
    userId: "adarsh-balika-test-userId",
    comments: [],
    profileImage: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1652362403/ct4fvtk6i5iu1mbnb6hj.jpg",
      original_filename: "Pngtree—businessman",
    },
    postMedia: null,
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    createdAt: "2022-05-15T16:43:34+05:30",
    updatedAt: "2022-05-15T16:43:34+05:30",
  },
  {
    _id: "b09f0083-85c53",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores lor repellendus.",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "adarsh-balika-test-userId",
          username: "adarshbalika",
          firstName: "Adarsh",
          lastName: "Balika",
          likeUpdateDate: "2022-05-15T16:30:17+05:30",
        },
        {
          _id: "rohan-mathur-test-userId",
          username: "rohanmathur",
          firstName: "Rohan",
          lastName: "Mathur",
          likeUpdateDate: "2022-05-15T16:30:17+05:30",
        },
      ],
      dislikedBy: [],
    },
    userId: "rohan-mathur-test-userId",
    comments: [],
    postMedia: { url: "https://picsum.photos/500/400", original_filename: "" },
    profileImage: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1652361355/g6uyad8oqzpx07uy1fuw.jpg",
      original_filename: "rohanmathur-profile",
    },
    firstName: "Rohan",
    lastName: "Mathur",
    username: "rohanmathur",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "4d62-aa68-24c201367a354",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores lor repellendus.",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "rohan-mathur-test-userId",
          username: "rohanmathur",
          firstName: "Rohan",
          lastName: "Mathur",
          likeUpdateDate: "2022-05-15T16:30:17+05:30",
        },
      ],
      dislikedBy: [],
    },
    userId: "john-doe-test-userId",
    postMedia: null,
    comments: [],
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "4302618b-3cdd5",
    content: "Flowers 🌻",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "john-doe-test-userId",
          username: "johndoe",
          firstName: "John",
          lastName: "Doe",
          likeUpdateDate: "2022-05-15T16:30:17+05:30",
        },
        {
          _id: "adarsh-balika-test-userId",
          username: "adarshbalika",
          firstName: "Adarsh",
          lastName: "Balika",
          likeUpdateDate: "2022-05-15T16:30:17+05:30",
        },
      ],
      dislikedBy: [],
    },
    userId: "adarsh-balika-test-userId",
    comments: [],
    profileImage: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1652362403/ct4fvtk6i5iu1mbnb6hj.jpg",
      original_filename: "Pngtree—businessman",
    },
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    postMedia: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1649665177/sample.jpg",
      original_filename: "flowers",
    },
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "414d-9208-cb8d79b928bf6",
    content:
      "If you're thinking about putting a TypeScript package up to NPM, you should be considering preconstruct. It makes setup EXTREMELY easy and takes many decisions out of your hands.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    postMedia: { url: "https://picsum.photos/500/400", original_filename: "" },
    userId: "john-doe-test-userId",
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    createdAt: "2022-05-15T16:43:34+05:30",
    updatedAt: "2022-05-15T16:43:34+05:30",
  },
  {
    _id: "b1c2091e-265b7",
    content:
      "Experience is not the amount of time you have held a position but the amount of time you have put into your craft ✨",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    userId: "adarsh-balika-test-userId",
    comments: [],
    profileImage: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1652362403/ct4fvtk6i5iu1mbnb6hj.jpg",
      original_filename: "test-image-1",
    },
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    postMedia: null,
    createdAt: "2022-05-15T16:43:34+05:30",
    updatedAt: "2022-05-15T16:43:34+05:30",
  },
  {
    _id: "48bc-9b0a-3c66d5634ad48",
    content: "This is a panda. 👀",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "john-doe-test-userId",
          username: "johndoe",
          firstName: "John",
          lastName: "Doe",
          likeUpdateDate: "2022-05-15T16:30:17+05:30",
        },
        {
          _id: "adarsh-balika-test-userId",
          username: "adarshbalika",
          firstName: "Adarsh",
          lastName: "Balika",
          likeUpdateDate: "2022-05-15T16:30:17+05:30",
        },
      ],
      dislikedBy: [],
    },
    userId: "adarsh-balika-test-userId",
    comments: [],
    profileImage: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1652362403/ct4fvtk6i5iu1mbnb6hj.jpg",
      original_filename: "Pngtree—businessman",
    },
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    postMedia: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1649834647/wildlife_txpxpo.webp",
      original_filename: "panda",
    },
    createdAt: "2022-05-15T16:43:34+05:30",
    updatedAt: "2022-05-15T16:43:34+05:30",
  },
  {
    _id: "f8add63b-9e289",
    content: `This man has been inspiring me for a couple of decades now.
      Selflessness, dealing with failure, handling success, staying calm in adversity, getting the best out of resources! 🚀`,
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "john-doe-test-userId",
          username: "johndoe",
          firstName: "John",
          lastName: "Doe",
          likeUpdateDate: "2022-05-15T16:30:17+05:30",
        },
      ],
      dislikedBy: [],
    },
    userId: "adarsh-balika-test-userId",
    comments: [],
    profileImage: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1652362403/ct4fvtk6i5iu1mbnb6hj.jpg",
      original_filename: "Pngtree—businessman",
    },
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    postMedia: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1652616473/ss_jjlh2c.jpg",
      original_filename: "dhoni-book",
    },
    createdAt: "2022-05-15T16:43:34+05:30",
    updatedAt: "2022-05-15T16:43:34+05:30",
  },
  {
    _id: "404a-902910",
    content:
      "A leader is best when people barely know he exists, when his work is done, his aim fulfilled, they will say: we did it ourselves. —Lao Tzu",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    userId: "adarsh-balika-test-userId",
    comments: [],
    profileImage: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1652362403/ct4fvtk6i5iu1mbnb6hj.jpg",
      original_filename: "Pngtree—businessman",
    },
    postMedia: null,
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    createdAt: "2022-05-15T16:43:34+05:30",
    updatedAt: "2022-05-15T16:43:34+05:30",
  },

  {
    _id: "fa2a5e1e870c11",
    content:
      "Before you are a leader, success is all about growing yourself. When you become a leader, success is all about growing others. —Jack Welch",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    userId: "adarsh-balika-test-userId",
    comments: [],
    profileImage: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1652362403/ct4fvtk6i5iu1mbnb6hj.jpg",
      original_filename: "Pngtree—businessman",
    },
    postMedia: null,
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    createdAt: "2022-05-15T16:43:34+05:30",
    updatedAt: "2022-05-15T16:43:34+05:30",
  },
];
