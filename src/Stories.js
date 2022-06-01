import React from 'react'
import {useGlobalContext} from './context'

function Stories() {
  const {loading,hits,removeStory} = useGlobalContext()
  if(loading) {
    return (
      <div className="flex items-center justify-center space-x-2 animate-pulse">
        <div className="w-10 h-10 bg-primary-focus rounded-full"></div>
        <div className="w-10 h-10 bg-secondary-focus rounded-full"></div>
        <div className="w-10 h-10 bg-accent-focus rounded-full"></div>
      </div>
    );
  
  }
  return (
    <section className="grid grid-cols-1 gap-6 lg:gap-24  justify-centre lg:grid-cols-2 m-4">
      {hits.map((story)=> {
        const {author,objectID,title,url,points,num_comments} = story
        return (
          <div className="card w-100 bg-base-100 shadow-xl" key={objectID}>
            <div>
              <div className="card-body">
                <h1 className="card-title">{title}</h1>
                <p className="mx-auto text-base leading-relaxed text-gray-500">
                  <p>
                    {points} point by {author} | {num_comments} {""} comments
                  </p>
                </p>
                <div className="card-actions justify-end">
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-primary">Read More</button>
                  </a>
                  <button className="btn bg-orange-600 text-white border-transparent" onClick={()=> removeStory(objectID)} >Remove</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Stories