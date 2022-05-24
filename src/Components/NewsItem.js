import React from "react";

const NewsItem = (props) => {
  
    let { title, description, imageUrl, newsUrl, author, publishedAt,source } = props;
    return (
      <div className=" rounded-lg mx-auto mt-2 mb-10 w-5/6">
        <img src={imageUrl} alt="" className="w-full h-1/2 p-2 rounded-sm" />
        <div className="cardBody">
          <h1 className="font-bold">{title}</h1>
          <hr />
          <h1 className="mb-2 tracking-tighter">{description}</h1>
          <hr />
          <p className="font-sans font-semibold m-2 ml-0">{`Author - ${author}`}</p>
          <p className="font-sans font-semibold m-2 ml-0">{`Published - ${(new Date().toUTCString(publishedAt))}`}</p>
          <p className="font-sans font-semibold m-2 ml-0">{`Source - ${source}`}</p>
          <hr />
          <div className="my-3">
            <button className="bg-slate-800 py-2 px-6 rounded-lg text-slate-200 font-bold hover:text-white hover:bg-slate-900">
              <a href={newsUrl}>Read More...</a>
            </button>
          </div>
        </div>
      </div>
    );
    }
export default NewsItem;