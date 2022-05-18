<div align="center">

<img alt="myspace-logo" src="public/favicon.svg" width="180px" height="180px" />

# myspace🚀

[![Netlify Status](https://api.netlify.com/api/v1/badges/2c93609e-b9bb-43cf-8333-646d70b91310/deploy-status)](https://app.netlify.com/sites/evolt-myspace/deploys)

</div>

![chrome-capture-2022-4-18](https://user-images.githubusercontent.com/61556757/168996081-669617f1-1f8a-4357-b866-aa61913add91.gif)

## Table of Contents

- [Getting Started](#getting-started)
- [Live link](#live-link)
- [About](#about)
- [Technologies used](#-technologies-used)
- [Features](#features)
- [Screenshots](#screenshots)
- [Connect with me](#-connect-with-me)

## Getting Started

- Clone the repository on your local machine with the command below in your terminal, and cd into the **evolt-social** folder

```sh
https://github.com/rohanmathur91/evolt-social.git

cd evolt-social
```

- Install dependencies (if you are using **yarn** then do with that)

```sh
npm install
```

- Create a `.env` file at the root level of the directory (at the level of `package.json`) and create a environment variables

```
REACT_APP_JWT_SECRET = <JWT_SECRET_KEY_OF_YOUR_CHOICE>
REACT_APP_CLOUD_NAME = <YOUR_CLOUD_NAME_FROM_CLOUDINARY>
REACT_APP_UPLOAD_PRESET_NAME = <YOUR_UPLOAD_PRESET>
```

- Start the server🚀

```
npm start
```

## Live link

https://evolt-myspace.netlify.app

## About

- myspace is a social media web app for people to connect with each other.
- Users can share pictures with others, upload, like, comment, and bookmark the posts. Follow each other and be connected.

## 🛠 Technologies used

- ReactJS
- Redux Toolkit
- React Router
- Tailwind
- [Mockbee](https://mockbee.netlify.app/) for backend

## Features

**User/Home Feed**:

- User will able to see all his posts and post of the people he/she follow.
- Feed can be sort based on `recent` and `trending` posts.
- User/Home and Explore feed has `infinite scroll`.

**Explore Feed**

- All the new users posts will be shown over here.

**Search**

- User can search other users and follow them if not followed.
- Implemented `debounce` for search.

**Post**

- User can `add`, `like/unlike` `edit`, `delete`, and `bookmark` a post.
- Each post can be viewed on single page where user can comment and can edit or delete the comment.
- Post can consist of text, image or gifs.

**Profile**

- User can view there profile or any other users profile.
- Each user can edit there profile.
- From someones profile logged in user can follow there following or follower users.

**Authentication**

- myspace has login, signup and logout feature.
- A new user can also login using test credentials.
- For Signup, form validation is done for all the fields.

## Screenshots

![mobile (5)](https://user-images.githubusercontent.com/61556757/168998787-5b5d988c-3d17-4ad2-b321-876db9b74c38.png)
![mobile (6)](https://user-images.githubusercontent.com/61556757/168999027-797a8116-9488-4e87-b02d-665723c3a212.png)
![mobile (8)](https://user-images.githubusercontent.com/61556757/168999297-ff45b571-afdd-4360-ad73-05ac18a541db.png)
![image](https://user-images.githubusercontent.com/61556757/168998000-63f28ed4-6ac8-47cd-a0e4-338f433378b6.png)

## 👨‍💻 Connect with me

<a href="https://twitter.com/rohanmathur91"><img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white"/></a>
<a href="https://www.linkedin.com/in/rohanmathur04/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/></a>
