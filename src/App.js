import React from "react";
import SearchForm from "./SearchForm";
import Stories from "./Stories";

function App() {
  return (
    <>
      <div className="text-3xl font-serif font-semibold text-primary m-4 text-center tracking-wider underline decoration-double decoration-orange-400 ">
        <h1>Stack-News</h1>
      </div>

      <SearchForm />
      <Stories />
    </>
  );
}

export default App;
