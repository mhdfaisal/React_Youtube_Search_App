import React from 'react';
import './VideoItem.css';

const VideoItem = (props)=>{
    return(
        <div className="ui items video-item" onClick={()=>{ props.onClick(props.video.id.videoId)}}>
            <div className="item">
                <div className="image">
                    <img src={props.video.snippet.thumbnails.medium.url} alt="video-item"/>
                </div>
            <div className="content">
                <p className="header">{props.video.snippet.title}</p>
                <div className="meta">
                {/* <span>{props.video.snippet.description}</span> */}
                </div>
                <div className="description">
                <p></p>
                </div>
            </div>
            </div>
        </div>
    );
}
//src={props.video.snippet.thumbnails.medium.url}
// {props.video.snippet.title}
export default VideoItem;