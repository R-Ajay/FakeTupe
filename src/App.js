import React from "react";
import ReactDOM from 'react-dom/client';
import SearchBar from "./SearchBar";
import VideoDetail from './VideoDetail';
import VideoList from "./VideoList";
import YouTube from "./apis/YouTube";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
      search:'keep positive'
    }
  }
  
   componentDidMount(){
    this.onTermSubmit(this.state.search);
   }
  onTermSubmit = async term => {
    const response = await YouTube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({ videos: response.data.items,selectedVideo:response.data.items[0]});
  }
  onVideoSelected = video => {
    this.setState({ selectedVideo: video });
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList onVideoSelected={this.onVideoSelected} videos={this.state.videos} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
