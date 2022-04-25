import React from "react";

export const Explore = () => {
  return (
    <main className="main mb-20 p-3">
      {[...Array(10)].map((_, index) => (
        <article key={index}>
          <section className="p-2 pt-3 my-2 flex items-center">
            <img
              className="w-12 h-12 mr-4 object-cover rounded-full"
              src="https://i.pravatar.cc/300"
              alt="pravatar"
            />

            <div className="leading-4">
              <p className="font-semibold">
                Adarsh Balika
                <span className="ml-1 text-gray-500">@adarsh</span>
              </p>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur
              </p>
            </div>
          </section>
          <img
            alt="avatar"
            className="w-full h-[50vh] aspect-[2/1]"
            src="https://picsum.photos/seed/picsum/900/500"
          />

          <p className="dark:text-gray-400 p-2 text-sm lg:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, illum
            iure. Labore numquam ea voluptate corrupti nihil facere minus quidem
            veritatis, ad temporibus ullam placeat reprehenderit quaerat omnis
            illo adipisci.
          </p>
          <section className="flex flex-row items-center justify-between p-2">
            <div className="flex text-gray-900">
              <span className="material-icons-outlined w-10 h-10 flex items-center justify-center rounded-full hover:cursor-pointer text-xl hover:text-blue-500 hover:bg-blue-100">
                thumb_up
              </span>
              <span class="material-icons-outlined mx-2 w-10 h-10 flex items-center justify-center rounded-full hover:cursor-pointer text-xl hover:text-blue-500 hover:bg-blue-100">
                comment
              </span>
            </div>

            <span className="material-icons-outlined w-10 h-10 flex items-center justify-center rounded-full hover:cursor-pointer text-xl hover:text-pink-500 hover:bg-pink-100">
              bookmark_border
            </span>
          </section>
        </article>
      ))}
    </main>
  );
};
