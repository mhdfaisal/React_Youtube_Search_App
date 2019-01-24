import React from 'react';
import Youtube from '../api/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoPlayer from './VideoPlayer';
class App extends React.Component{

    state={items:[], selectedItem:null};

    onSearchSubmit = async (term)=>{
        const response = await Youtube.get("/search",{
            params:{
                q:term
            }
        });
        this.setState({items:response.data.items, selectedItem:response.data.items[0].id.videoId});
        //console.log(this.state.items);
    }

    onVideoItemClicked = (videoId)=>{
        this.setState({selectedItem:videoId});
    }

    componentDidMount(){
        this.onSearchSubmit("buildings");
    }

    render(){

        return(
            <div className="ui container">
                <SearchBar onSearchSubmit={this.onSearchSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                    <div className="eleven wide column">
                    <VideoPlayer selectedItem={this.state.selectedItem} />
                    </div>
                    <div className="five wide column">
                    <VideoList videos={this.state.items} onClick={this.onVideoItemClicked}/>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;