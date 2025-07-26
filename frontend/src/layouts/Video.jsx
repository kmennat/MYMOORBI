import React from "react";
import './Video.css';
function Video(){
return(
<>
<div className="content-header">
                <h1 className="content-title">My videos</h1>
                <div className="videos-search-container">
                    <div className="videos-search">
                        <input type="text" className="videos-search-input" placeholder="search"/>
                        <span className="videos-search-icon">🔍</span>
                    </div>
                    <button className="add-btn">+</button>
                </div>
            </div>

            <div className="videos-grid">
                <div className="video-card">
                    <div className="video-thumbnail">
                        <div className="play-button">▶</div>
                    </div>
                    <div className="video-info">
                        <h3 className="video-title">Lorem ipsum dolorem</h3>
                    </div>
                </div>

                <div className="video-card">
                    <div className="video-thumbnail">
                        <div className="play-button">▶</div>
                    </div>
                    <div className="video-info">
                        <h3 className="video-title">Lorem ipsum dolorem</h3>
                    </div>
                </div>

                <div className="video-card">
                    <div className="video-thumbnail">
                        <div className="play-button">▶</div>
                    </div>
                    <div className="video-info">
                        <h3 className="video-title">Lorem ipsum dolorem</h3>
                    </div>
                </div>

                <div className="video-card">
                    <div className="video-thumbnail">
                        <div className="play-button">▶</div>
                    </div>
                    <div className="video-info">
                        <h3 className="video-title">Lorem ipsum dolorem</h3>
                    </div>
                </div>

                <div className="video-card">
                    <div className="video-thumbnail">
                        <div className="play-button">▶</div>
                    </div>
                    <div className="video-info">
                        <h3 className="video-title">Lorem ipsum dolorem</h3>
                    </div>
                </div>

                <div className="video-card">
                    <div className="video-thumbnail">
                        <div className="play-button">▶</div>
                    </div>
                    <div className="video-info">
                        <h3 className="video-title">Lorem ipsum dolorem</h3>
                    </div>
                </div>
            </div>
            
            </>    
    );
    
}
export default Video;