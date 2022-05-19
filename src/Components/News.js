import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import image from "./image.jfif";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 5,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `Newzly - ${this.capitalizeFirstLetter(
      this.props.category
    )}`;
  }

  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=06c34d7a268b46f68faad2c6ed0f0b05&page=1&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.updateNews();
  }

  fetchMoreData = async () => {
    this.setState({
      page: this.state.page + 1
    });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=06c34d7a268b46f68faad2c6ed0f0b05&page=1&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    });
    
  };

  render() {
    return (
      <>
        <div className="text-7xl font-serif font-semibold my-4">
          <p className="text-center tracking-wider">{this.capitalizeFirstLetter(this.props.category)}</p>
        </div>
        <div className="">{this.state.loading && <Spinner />}</div>
        <div className="py-2 ">
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner/>}
          >
            <div className="header grid grid-cols-3 ">
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
                      author={element.author ? element.author : "Unknown"}
                      published={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </InfiniteScroll>
        </div>
      </>
    );
  }
}
