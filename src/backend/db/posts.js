import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: "fa2a5e1e870c121",
    content:
      "Before you are a leader, success is all about growing yourself. When you become a leader, success is all about growing others. —Jack Welch",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },

    comments: [],
    postMedia: null,
    profileImage: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1653736054/angelist-profile_rmiupp.jpg",
      original_filename: "rohanmathur",
    },
    userId: "rohan-mathur-test-userId",
    firstName: "Rohan",
    lastName: "Mathur",
    username: "rohanmathur",
    createdAt: "2022-05-15T16:43:34+05:30",
    updatedAt: "2022-05-15T16:43:34+05:30",
  },

  {
    _id: "fa2a5e1e870c111-a2d",
    content:
      "Learn from the mistakes of others. You can't live long enough to make them all yourself 🚀",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    postMedia: null,
    profileImage: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1653736054/angelist-profile_rmiupp.jpg",
      original_filename: "rohanmathur",
    },
    userId: "rohan-mathur-test-userId",
    firstName: "Rohan",
    lastName: "Mathur",
    username: "rohanmathur",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: "fa2a5e1e870c112-a22d",
    content:
      "The most important thing to remember is this: to be ready at any moment to give up what you are for what you might become.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    postMedia: null,
    profileImage: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1653736054/angelist-profile_rmiupp.jpg",
      original_filename: "rohanmathur",
    },
    userId: "rohan-mathur-test-userId",
    firstName: "Rohan",
    lastName: "Mathur",
    username: "rohanmathur",
    createdAt: "2022-05-14T16:43:34+05:30",
    updatedAt: "2022-05-14T16:43:34+05:30",
  },

  {
    _id: "4670-acf8-6b4892ec621e21",
    content:
      "Hey all checkout my projects, you will get github link in my profile.",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "dan-abramov-userId",
          username: "dan_abramov",
          firstName: "Dan",
          lastName: "Abramov",
          likeUpdateDate: "2022-05-15T16:30:17+05:30",
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        comment: "Good work",
        commentDate: "2022-05-12T19:05:28+05:30",
        firstName: "Lucy",
        lastName: "Van",
        username: "lucyvan",
        _id: "2ae6268b-dd1b-447a-121-23sq2",
        profileImage: {
          url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1652872677/28102735662_5773509d11_b_zpjwv0.webp",
          original_filename: "lucyvan-profile",
        },
      },
    ],
    profileImage: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1653736054/angelist-profile_rmiupp.jpg",
      original_filename: "rohanmathur-profile",
    },
    postMedia: null,
    userId: "rohan-mathur-test-userId",
    firstName: "Rohan",
    lastName: "Mathur",
    username: "rohanmathur",
    createdAt: "2022-05-15T16:43:34+05:30",
    updatedAt: "2022-05-15T16:43:34+05:30",
  },

  {
    _id: "4d62-aa68-24c201367a3541",
    content:
      "The difference between having Strict Mode on and off is between “eager bugs” and “on-demand bugs”. Strict Mode immediately forces you to handle the edge cases. This includes bugs you won’t hit in prod today but definitely will as your logic changes. I’ve seen this many times.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    profileImage: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1653736290/dan_o6nk9h.jpg",
      original_filename: "dan-abramov",
    },
    postMedia: null,
    comments: [],
    userId: "dan-abramov-userId",
    firstName: "Dan",
    lastName: "Abramov",
    username: "dan_abramov",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: "4d62-aa68-24c201367a354-11xzzyj1o",
    content:
      "what are the best resources you have found for people trying to leave Ukraine? i’ve seen a few docs floating around but not sure which are most up-to-date. share links pls!",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    profileImage: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1653736290/dan_o6nk9h.jpg",
      original_filename: "dan-abramov",
    },
    postMedia: null,
    comments: [],
    userId: "dan-abramov-userId",
    firstName: "Dan",
    lastName: "Abramov",
    username: "dan_abramov",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "4d62-aa68-24c201367a354-12-jowq1y",
    content: "I’m going to the stars and then past them.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    postMedia: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1653738815/UFC_229_Preview__Khabib_Nurmagomedov_vs__Conor_McGregor_mj5j5c.jpg",
      original_filename: "conor-post-image",
    },
    comments: [],
    profileImage: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1653735959/images_fufwdx.jpg",
      original_filename: "conor-mcgregor",
    },
    userId: "conor-mcgregor-test-userId",
    firstName: "Conor",
    lastName: "McGregor",
    username: "thenotoriousmma",
    createdAt: "2022-05-15T16:43:34+05:30",
    updatedAt: "2022-05-15T16:43:34+05:30",
  },

  {
    _id: "4302618b-3cdd15",
    content: "Checkout my social media app.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        comment: "Cool colors, great work.",
        commentDate: formatDate(),
        firstName: "Conor",
        lastName: "McGregor",
        username: "thenotoriousmma",
        _id: "2ae6268b-dd1b-447a-121-23vc2",
        profileImage: {
          url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1653735959/images_fufwdx.jpg",
          original_filename: "conor-mcgregor",
        },
      },
      {
        comment: "Good job",
        commentDate: formatDate(),
        firstName: "Lucy",
        lastName: "Van",
        username: "lucyvan",
        _id: "2ae6268b-dd1b-447a1-23sq2",
        profileImage: {
          url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1652872677/28102735662_5773509d11_b_zpjwv0.webp",
          original_filename: "lucyvan-profile",
        },
      },
    ],
    profileImage: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1653736054/angelist-profile_rmiupp.jpg",
      original_filename: "rohanmathur-profile",
    },
    userId: "rohan-mathur-test-userId",
    firstName: "Rohan",
    lastName: "Mathur",
    username: "rohanmathur",
    postMedia: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1653742074/ss_vudit9.jpg",
      original_filename: "project-showcase",
    },
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "414d-9208-cb8d79b928bf16",
    content:
      "If you're thinking about putting a TypeScript package up to NPM, you should be considering preconstruct. It makes setup EXTREMELY easy and takes many decisions out of your hands.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    profileImage: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1653736290/dan_o6nk9h.jpg",
      original_filename: "dan-abramov",
    },
    postMedia: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1653740919/350-600x300_reikyg.jpg",
      original_filename: "test-image",
    },
    userId: "dan-abramov-userId",
    firstName: "Dan",
    lastName: "Abramov",
    username: "dan_abramov",
    createdAt: "2022-05-15T16:43:34+05:30",
    updatedAt: "2022-05-15T16:43:34+05:30",
  },
  {
    _id: "b1c2091e-265b17",
    content:
      "Experience is not the amount of time you have held a position but the amount of time you have put into your craft ✨",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },

    comments: [
      {
        comment: "Well said.",
        commentDate: "2022-05-10T19:05:28+05:30",
        firstName: "Conor",
        lastName: "McGregor",
        username: "thenotoriousmma",
        _id: "2ae6268b-dd1b-447a-121-23vc342",
        profileImage: {
          url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1653735959/images_fufwdx.jpg",
          original_filename: "conor-mcgregor",
        },
      },
    ],
    profileImage: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1653736054/angelist-profile_rmiupp.jpg",
      original_filename: "rohanmathur",
    },
    userId: "rohan-mathur-test-userId",
    firstName: "Rohan",
    lastName: "Mathur",
    username: "rohanmathur",
    postMedia: null,
    createdAt: "2022-05-15T16:43:34+05:30",
    updatedAt: "2022-05-15T16:43:34+05:30",
  },
  {
    _id: "48bc-9b0a-3c66d5634ad418",
    content: "This beauty ✨",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },

    comments: [
      {
        comment: "Well said.",
        commentDate: "2022-05-15T19:05:28+05:30",
        firstName: "Conor",
        lastName: "McGregor",
        username: "thenotoriousmma",
        _id: "2ae6268b-dd1b-447a-121-23vc342",
        profileImage: {
          url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1653735959/images_fufwdx.jpg",
          original_filename: "conor-mcgregor",
        },
      },
    ],
    profileImage: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1653736054/angelist-profile_rmiupp.jpg",
      original_filename: "rohanmathur",
    },
    userId: "rohan-mathur-test-userId",
    firstName: "Rohan",
    lastName: "Mathur",
    username: "rohanmathur",
    postMedia: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1652874627/788-536x354_btpwul.jpg",
      original_filename: "scenery",
    },
    createdAt: "2022-05-15T16:43:34+05:30",
    updatedAt: "2022-05-15T16:43:34+05:30",
  },

  {
    _id: "a572a19c-68de11",
    content:
      "Leadership is lifting a person's vision to high sights, the raising of a person's performance to a higher standard, the building of a personality beyond its normal limitations. —Peter Drucker",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        comment: "Nice quote.",
        commentDate: "2022-05-28T19:05:28+05:30",
        firstName: "Dan",
        lastName: "Abramov",
        username: "dan_abramov",
        _id: "2ae6268b-dd1b-447a-1sqa21",
        profileImage: {
          url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1653736290/dan_o6nk9h.jpg",
          original_filename: "dan-abramov",
        },
      },
      {
        comment: "Good one.",
        commentDate: "2022-05-28T19:05:28+05:30",
        firstName: "Conor",
        lastName: "McGregor",
        username: "thenotoriousmma",
        _id: "2ae6268b-dd1b-447a-121-232",
        profileImage: {
          url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1653735959/images_fufwdx.jpg",
          original_filename: "conor-mcgregor",
        },
      },
    ],
    profileImage: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1653736054/angelist-profile_rmiupp.jpg",
      original_filename: "rohanmathur-profile",
    },
    postMedia: null,
    userId: "rohan-mathur-test-userId",
    firstName: "Rohan",
    lastName: "Mathur",
    username: "rohanmathur",
    createdAt: "2022-05-15T16:43:34+05:30",
    updatedAt: "2022-05-15T16:43:34+05:30",
  },

  {
    _id: "f8add63b-9e2819",
    content: `This man has been inspiring me for a couple of decades now.
      Selflessness, dealing with failure, handling success, staying calm in adversity, getting the best out of resources! 🚀`,
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "conor-mcgregor-test-userId",
          firstName: "Conor",
          lastName: "McGregor",
          username: "thenotoriousmma",
          likeUpdateDate: "2022-05-15T16:30:17+05:30",
        },
        {
          _id: "dan-abramov-userId",
          firstName: "Dan",
          lastName: "Abramov",
          username: "dan_abramov",
          likeUpdateDate: "2022-05-15T16:30:17+05:30",
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        comment: "This is awesome.",
        commentDate: "2022-05-28T19:05:28+05:30",
        firstName: "Dan",
        lastName: "Abramov",
        username: "dan_abramov",
        _id: "2ae6268b-dd1b-447a-121",
        profileImage: {
          url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1653736290/dan_o6nk9h.jpg",
          original_filename: "dan-abramov",
        },
      },
    ],
    profileImage: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1653736054/angelist-profile_rmiupp.jpg",
      original_filename: "rohanmathur",
    },
    userId: "rohan-mathur-test-userId",
    firstName: "Rohan",
    lastName: "Mathur",
    username: "rohanmathur",
    postMedia: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1652616473/ss_jjlh2c.jpg",
      original_filename: "dhoni-book",
    },
    createdAt: "2022-05-15T16:43:34+05:30",
    updatedAt: "2022-05-15T16:43:34+05:30",
  },
  {
    _id: "404a-9029110",
    content:
      "A leader is best when people barely know he exists, when his work is done, his aim fulfilled, they will say: we did it ourselves. —Lao Tzu",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    profileImage: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1652872677/28102735662_5773509d11_b_zpjwv0.webp",
      original_filename: "lucyvan-profile",
    },
    postMedia: null,
    userId: "lucy-van-userId",
    firstName: "Lucy",
    lastName: "Van",
    username: "lucyvan",
    createdAt: "2022-05-15T16:43:34+05:30",
    updatedAt: "2022-05-15T16:43:34+05:30",
  },
  {
    _id: "4d62-aa68-24c201367a354-12-c2ono1",
    content: "The champ.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    profileImage: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1653735959/images_fufwdx.jpg",
      original_filename: "conor-mcgregor",
    },
    postMedia: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1653741427/HD_wallpaper__Sports_Mixed_Martial_Arts_Conor_Mcgregor_Mixed_Martial_Artist_btgery.jpg",
      original_filename: "conor-post-image",
    },
    comments: [],
    userId: "conor-mcgregor-test-userId",
    firstName: "Conor",
    lastName: "McGregor",
    username: "thenotoriousmma",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: "fa2a5e1e870c110-ad2",
    content:
      "Life is fragile and temporary. The faces of today quickly become the faces of the past. Sorrow, pain, and anger... it all fades.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    postMedia: null,
    profileImage: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1653735959/images_fufwdx.jpg",
      original_filename: "conor-mcgregor",
    },
    userId: "conor-mcgregor-test-userId",
    firstName: "Conor",
    lastName: "McGregor",
    username: "thenotoriousmma",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: "fa2a5e1e870c113-a4d",
    content:
      "A pessimist is one who makes difficulties of his opportunities and an optimist is one who makes opportunities of his difficulties.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    postMedia: null,
    profileImage: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1653736054/angelist-profile_rmiupp.jpg",
      original_filename: "rohanmathur",
    },
    userId: "rohan-mathur-test-userId",
    firstName: "Rohan",
    lastName: "Mathur",
    username: "rohanmathur",
    createdAt: "2022-05-15T16:43:34+05:30",
    updatedAt: "2022-05-15T16:43:34+05:30",
  },
  {
    _id: "b09f0083-85c543",
    content:
      "A genuine leader is not a searcher for consensus, but a molder of consensus.",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "dan-abramov-userId",
          firstName: "Dan",
          lastName: "Abramov",
          username: "dan_abramov",
          likeUpdateDate: "2022-05-15T16:30:17+05:30",
        },
      ],
      dislikedBy: [],
    },
    comments: [],
    postMedia: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1653743304/648-600x400_bg9yl4.jpg",
      original_filename: "rohan-post-test-image",
    },
    profileImage: {
      url: "https://res.cloudinary.com/dexubgbx0/image/upload/v1653736054/angelist-profile_rmiupp.jpg",
      original_filename: "rohanmathur-profile",
    },
    userId: "rohan-mathur-test-userId",
    firstName: "Rohan",
    lastName: "Mathur",
    username: "rohanmathur",
    createdAt: "2022-05-15T16:43:34+05:30",
    updatedAt: "2022-05-15T16:43:34+05:30",
  },
];
