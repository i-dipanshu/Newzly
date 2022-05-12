import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class extends Component {
  constructor() {
    super();
    this.state = {
      // empty array generation
      articles: [], 
      loading: false,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=06c34d7a268b46f68faad2c6ed0f0b05";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
  }

  render() {
    return (
      <div className=" bg-[#E6E6FA]">
        <div className="grid grid-cols-3 ">
          <div className="text-7xl font-bold mx-auto text-center flex items-center">
            Headlines
          </div>
          {this.state.articles.map((element) => {
            return (
              <div key={element.url}>
                <NewsItem
                  title={element.title ? element.title : "..."}
                  description={
                    element.description ? element.description : "..."
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
