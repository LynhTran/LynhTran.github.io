import React from "react"
import { Link } from "gatsby"
const FeaturedBlog = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 mt-10">
      <h1 className="text-white font-poppins font-bold text-6xl xxs:text-lg xs:text-xl sm:text-xl lg:text-6xl">
        Some of my projects...
      </h1>
      <p className="text-white text-lg mt-5 opacity-50 w-3/4 xxs:w-full lg:w-3/4">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <div className="grid grid-cols-3 mt-10 gap-4 xxs:grid-cols-1 lg:grid-cols-3">
        <Link href="https://devpost.com/software/update-later" target="_blank">
          <div className="rounded-xl overflow-hidden opacity-70 relative hover:opacity-100">
            <img
              className="relative"
              alt="blog"
              src="https://y.yarn.co/94ddc39c-70f5-44eb-a379-bfa6c23618fe_text.gif"
            ></img>
            <div class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 text-3xl text-white font-bold p-2">
              Dory Defense
            </div>
          </div>
        </Link>

        <div className="rounded-xl overflow-hidden opacity-70 relative hover:opacity-100">
          <img
            className="relative"
            alt="blog"
            src="https://y.yarn.co/94ddc39c-70f5-44eb-a379-bfa6c23618fe_text.gif"
          ></img>
          <div class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 text-3xl text-white font-bold p-2">
            The quick brown fox jumped over the lazy dog.
          </div>
        </div>
        <div className="rounded-xl overflow-hidden opacity-70 relative hover:opacity-100">
          <img
            className="relative"
            alt="blog"
            src="https://y.yarn.co/94ddc39c-70f5-44eb-a379-bfa6c23618fe_text.gif"
          ></img>
          <div class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 text-3xl text-white font-bold p-2">
            The quick brown fox jumped over the lazy dog.
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedBlog
