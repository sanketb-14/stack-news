import React from 'react'
import {useGlobalContext} from './context'

function SearchForm() {
  const {query,handleSearch} = useGlobalContext()
  return (
    
    <form className="flex item-end my-8 mx-auto " onSubmit={(e)=> e.preventDefault()}>
      <div className="form-control flex ml-52 ">
        <div className="input-group w-screen">
          <input
            type="text"
            placeholder="Search news..."
            className="input input-bordered w-6/12  "
            value={query}
            onChange={(e)=> handleSearch(e.target.value)}
          />
          <button className="btn btn-square bg-primary border-transparent text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </form>
  );
}

export default SearchForm