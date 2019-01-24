import React from 'react';

const VideoPlayer = (props)=>{
    
    if(props.selectedItem!==null){
        return(
            <div className="ui embed">
                <iframe src={`https://www.youtube.com/embed/${props.selectedItem}`} title="video-player"></iframe>
            </div>
            
        )
    }
    
    return <div>Loading..</div>;
}

export default VideoPlayer;