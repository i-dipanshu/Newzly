import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import image from "./image.jfif";

export default class extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=06c34d7a268b46f68faad2c6ed0f0b05&page=1&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  handlePrev = async () => {
    let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=06c34d7a268b46f68faad2c6ed0f0b05&page=${
      this.state.page - 1
    }&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };

  handleNext = async () => {
    let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=06c34d7a268b46f68faad2c6ed0f0b05&page=${
      this.state.page + 1
    }&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false,
    });
  };

  render() {
    return (
      <div>
        <div className="ml-[42rem]">{this.state.loading && <Spinner />}</div>
        {!this.state.loading && (
          <div className=" bg-[#E6E6FA] py-2 ">
            <div className="grid grid-cols-3 ">
              <div className="text-7xl font-bold mx-auto text-center flex items-center">
                {!this.state.loading && <span>HeadLines</span>}
              </div>
              {this.state.articles.map((element) => {
                return (
                  <div key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : "..."}
                      description={
                        element.description ? element.description : "..."
                      }
                      imageUrl={element.urlToImage ? element.urlToImage : image}
                      newsUrl={element.url}
                    />
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center mt-10">
              <button
                className={`bg-slate-900 text-white flex h-10 items-center px-10 py-3 font-bold mb-2 rounded-md mr-4 ${
                  this.state.page <= 1 && "opacity-70 cursor-not-allowed"
                }`}
                onClick={this.handlePrev}
                disabled={this.state.page <= 1}
              >
                &larr; Prev
              </button>
              <button
                className={`bg-slate-900 text-white flex h-10 items-center px-10 py-3 font-bold mb-2 rounded-md ml-4 ${
                  this.state.page + 1 >
                    Math.ceil(this.state.totalResults / this.props.pageSize) &&
                  "opacity-70 cursor-not-allowed"
                }`}
                onClick={this.handleNext}
                disabled={
                  this.state.page + 1 >
                  Math.ceil(this.state.totalResults / this.props.pageSize)
                }
              >
                Next &rarr;
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
