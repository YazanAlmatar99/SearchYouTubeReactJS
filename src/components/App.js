//It was designed and implemented by Yazan Almatar => http://www.yazanalmatar.com;
//This is under MIT License and all rights are reserved 2019
//It was designed using ReactJS with the use of Axios to GET API requests from 
//YouTube API; the API is included unencrypted in the youtube.js file
//and it won't work on any link except for localhost server.
//If you have any question please don't hesitate to contact my through 
//my website listed above.
import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };
  componentDidMount() {
    //we used this function to show a video on the screen when the user first
    //runs the app
    this.onTermSubmit("Buildings");
  }
  //it gets called when the user submits a search term
  onTermSubmit = async term => {
    //I used axios to get the API request from YouTube
    const response = await youtube.get("/search", { params: { q: term } });
    //I set the object SelectedVideo in the state to the first item that will be recieved from
    //the GET request; so when the user searches for another term the VideoDetail component
    //will get manipulated to show the first video on the list instead of keep playing
    //the previous video that was searched for.
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };
  //it gets called when the used clicks on one of the videos
  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className=" ui container">
        {/* The Search bar Component  */}
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              {/* The component that shows the video and it's details */}
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              {/* This component will show the first 10 videos that were searched for in a list */}
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
