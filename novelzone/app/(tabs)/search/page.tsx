"use client";

import Image from "next/image";

export default function Search() {
  return (
    <div className="w-100 ">
      <div className="relative mt-4">
        <label htmlFor="Search" className="sr-only">
          Search
        </label>

        <input
          type="text"
          id="Search"
          placeholder="Search for..."
          className="w-full px-3 py-2 ring-1 ring-gray-500 rounded-sm outline-0  focus:ring-primary"
        />

        <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
          <button type="button" className="text-gray-600 hover:text-gray-700">
            <span className="sr-only">Search</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </span>
      </div>
      <div className="mt-4 grid  gap-2 grid-cols-3 md:grid-cols-5 lg:grid-cols-7">
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
      </div>
    </div>
  );
}

const Book = () => {
  return (
    <>
      <div className="bg-primary">
        <Image
          width={200}
          height={300}
          src="/tada.jpg"
          alt="Book Cover"
          className="
           sm:h-40 w-full object-cover
           "
        />
        <h4 className="text-center text-xs truncate">
          Top Tier Providence, Secretly Cultivate for a Thousand Years
        </h4>
      </div>
    </>
  );
};
