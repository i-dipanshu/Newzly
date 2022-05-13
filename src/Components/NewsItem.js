import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className=" rounded-lg mx-auto mt-2 mb-10 h-96 w-5/6">
        <img src={imageUrl} alt="" className="w-full h-1/2 p-2 rounded-sm" />
        <div className="cardBody">
          <h1 className="text-center font-bold">{title}</h1>
          <h1 className="text-center mb-2 tracking-tighter">{description}</h1>
          <div className="flex items-center justify-center self-end my-3">
            <button className="bg-slate-800 py-2 px-6 rounded-lg text-slate-200 font-bold hover:text-white hover:bg-slate-900">
              <a href={newsUrl}>Read More...</a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
