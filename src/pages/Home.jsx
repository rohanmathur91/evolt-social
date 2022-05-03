import React from "react";
import { Sidebar, TopContributors } from "../components";

export const Home = () => {
  return (
    <div className="grid-container">
      <Sidebar />
      <TopContributors />

      <main className="main pb-20 px-2 md:px-0">
        {[...Array(5)].map((_, index) => (
          <article
            key={index}
            className="border rounded mb-4 max-w-xl mx-auto bg-white"
          >
            <section className="p-2 pt-3 my-2 flex items-center">
              <img
                alt="pravatar"
                loading="lazy"
                src="https://i.pravatar.cc/300"
                className="w-11 h-11 md:w-12 md:h-12 mr-4 object-cover rounded-full bg-gray-200"
              />

              <div className="leading-4">
                <p className="font-semibold line-clamp-1">
                  Adarsh Balika
                  <span className="ml-1 text-gray-500">@adarsh</span>
                </p>
                <p className="text-sm text-gray-500 line-clamp-1">
                  Lorem ipsum dolor sit amet consectetur
                </p>
              </div>
            </section>
            <img
              alt="post"
              loading="lazy"
              src="https://picsum.photos/seed/picsum/900/500"
              className="w-full h-[50vh] aspect-[2/1] bg-gray-200"
            />

            <p className="dark:text-gray-400 p-2 text-sm lg:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, illum
              iure. Labore numquam ea voluptate corrupti nihil facere minus
              quidem veritatis, ad temporibus ullam placeat reprehenderit
              quaerat omnis illo adipisci.
            </p>
            <section className="flex flex-row items-center justify-between p-2">
              <div className="flex text-gray-900">
                <button
                  data-tooltip="Like"
                  className="tooltip w-10 h-10 flex items-center justify-center rounded-full hover:cursor-pointer hover:text-blue-500 hover:bg-blue-100"
                >
                  <span className="material-icons-outlined text-xl">
                    thumb_up
                  </span>
                </button>

                <button
                  data-tooltip="Comment"
                  className="tooltip mx-2 w-10 h-10 flex items-center justify-center rounded-full hover:cursor-pointer hover:text-blue-500 hover:bg-blue-100"
                >
                  <span className="material-icons-outlined text-xl">
                    comment
                  </span>
                </button>
              </div>

              <button
                data-tooltip="Bookmark"
                className="tooltip w-10 h-10 flex items-center justify-center rounded-full hover:cursor-pointer hover:text-blue-500 hover:bg-blue-100"
              >
                <span className="material-icons-outlined text-xl">
                  bookmark_border
                </span>
              </button>
            </section>
          </article>
        ))}

        <article
          key={"without-image"}
          className="border rounded mb-4 max-w-xl mx-auto bg-white"
        >
          <section className="p-2 pt-3 my-2 flex items-center">
            <img
              alt="pravatar"
              loading="lazy"
              src="https://i.pravatar.cc/300"
              className="w-11 h-11 md:w-12 md:h-12 mr-4 object-cover rounded-full bg-gray-200"
            />

            <div className="leading-4">
              <p className="font-semibold line-clamp-1">
                Adarsh Balika
                <span className="ml-1 text-gray-500">@adarsh</span>
              </p>
              <p className="text-sm text-gray-500 line-clamp-1">
                Lorem ipsum dolor sit amet consectetur
              </p>
            </div>
          </section>

          <p className="dark:text-gray-400 p-2 text-sm lg:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, illum
            iure. Labore numquam ea voluptate corrupti nihil facere minus quidem
            veritatis, ad temporibus ullam placeat reprehenderit quaerat omnis
            illo adipisci.
          </p>
          <section className="flex flex-row items-center justify-between p-2">
            <div className="flex text-gray-900">
              <button
                data-tooltip="Like"
                className="tooltip w-10 h-10 flex items-center justify-center rounded-full hover:cursor-pointer hover:text-blue-500 hover:bg-blue-100"
              >
                <span className="material-icons-outlined text-xl">
                  thumb_up
                </span>
              </button>

              <button
                data-tooltip="Comment"
                className="tooltip mx-2 w-10 h-10 flex items-center justify-center rounded-full hover:cursor-pointer hover:text-blue-500 hover:bg-blue-100"
              >
                <span className="material-icons-outlined text-xl">comment</span>
              </button>
            </div>

            <button
              data-tooltip="Bookmark"
              className="tooltip w-10 h-10 flex items-center justify-center rounded-full hover:cursor-pointer hover:text-blue-500 hover:bg-blue-100"
            >
              <span className="material-icons-outlined text-xl">
                bookmark_border
              </span>
            </button>
          </section>
        </article>
      </main>
    </div>
  );
};
