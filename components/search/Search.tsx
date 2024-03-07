import React, { useState } from "react";
const Search: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const contents = [
    { title: "API Logic", description: "How to connect to the API Logic" },
    { title: "Versioning", description: "Common errors and how to fix them" },
    { title: "Payment Link", description: "Make payment easily in few steps" }
  ];

  const filteredContents = contents.filter(content =>
    searchTerm
      .toLowerCase()
      .split(" ") 
      .some(word =>
        content.title.toLowerCase().includes(word) ||
        content.description.toLowerCase().includes(word)
      )
  );

  return (
    <>
    {/* search input  */}
      <div className="flex justify-center my-4">
        <button className=' bg-white dark:bg-slate-900 w-2/5 lg:flex items-center justify-between text-sm leading-6 rounded-md py-1.5 pl-2 pr-3 shadow-sm text-gray-400 dark:text-white/50 border dark:border-slate-700 hover:ring-gray-600/25 dark:ring-gray-600/30 dark:hover:ring-gray-500/30 focus:outline-primary' onClick={() => setShowModal(true)}>
          <div className='flex items-center'>
            {/* <Icons.search /> */}
            <span className='ml-4'>Search the docs</span>
          </div>
          <div className='flex w-[18px] h-[18px] border rounded-sm items-center justify-center bg-[#F7FAFC] dark:bg-slate-800'>
            /
          </div>
        </button>
      </div>

      {showModal ? (
        <>
          <div className="max-w-3xl mx-auto">
            <div
              className="p-4 w-full bg-white rounded-md border shadow-md sm:p-8 dark:border-gray-700">
              {/* modal header */}
              <label htmlFor="search-input" className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
              <div className="relative mb-3">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>

                </div>
                <input type="text" id="input-group-1" className="bg-transparent border border-white text-sm rounded-lg focus-none block w-full pl-10 p-2.5 text-black outline-none" placeholder="Search documentation" value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)} />
              </div>
              <div className="p-2 border-t border-solid border-blueGray-200 rounded-b"></div>
              {/* Modal component body */}
              <p className="mb-2 text-gray-500 sm:text-md dark:text-gray-400">Recently viewed</p>
              <ul className="divide-y divide-gray-200">

                {filteredContents.map((contents, index) => (
                  <li className="flex items-center py-4" key={index}>
                    <div className="flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="h-6 w-6 p-1 fill-primary-dark "><path d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z"></path></svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{contents.title}</p>
                      <p className="text-sm text-gray-500">{contents.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              {/* modal footer*/}
              <div className="p-6 border-t border-solid border-blueGray-200 rounded-b">
                <div className="flex justify-between">
                  <button
                    className="flex items-center text-purple-700 background-transparent font-bold py-2 px-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 mr-2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                      />
                    </svg>
                    <span>Search using AI</span>
                  </button>

                  <button
                    className="text-red-500 background-transparent font-bold uppercase py-2 px-4 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>


              </div>

            </div>
          </div>

        </>
      ) : null}
    </>
  );
};

export default Search;