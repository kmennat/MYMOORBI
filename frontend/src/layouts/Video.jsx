import React from "react";
import './Video.css';
function Video(){
return(
<>
<div class="content-header">
                <h1 class="content-title">My videos</h1>
                <div class="videos-search-container">
                    <div class="videos-search">
                        <input type="text" class="videos-search-input" placeholder="search"/>
                        <span class="videos-search-icon">🔍</span>
                    </div>
                    <button class="add-btn">+</button>
                </div>
            </div>

            <div class="videos-grid">
                <div class="video-card">
                    <div class="video-thumbnail">
                        <div class="play-button">▶</div>
                    </div>
                    <div class="video-info">
                        <h3 class="video-title">Lorem ipsum dolorem</h3>
                    </div>
                </div>

                <div class="video-card">
                    <div class="video-thumbnail">
                        <div class="play-button">▶</div>
                    </div>
                    <div class="video-info">
                        <h3 class="video-title">Lorem ipsum dolorem</h3>
                    </div>
                </div>

                <div class="video-card">
                    <div class="video-thumbnail">
                        <div class="play-button">▶</div>
                    </div>
                    <div class="video-info">
                        <h3 class="video-title">Lorem ipsum dolorem</h3>
                    </div>
                </div>

                <div class="video-card">
                    <div class="video-thumbnail">
                        <div class="play-button">▶</div>
                    </div>
                    <div class="video-info">
                        <h3 class="video-title">Lorem ipsum dolorem</h3>
                    </div>
                </div>

                <div class="video-card">
                    <div class="video-thumbnail">
                        <div class="play-button">▶</div>
                    </div>
                    <div class="video-info">
                        <h3 class="video-title">Lorem ipsum dolorem</h3>
                    </div>
                </div>

                <div class="video-card">
                    <div class="video-thumbnail">
                        <div class="play-button">▶</div>
                    </div>
                    <div class="video-info">
                        <h3 class="video-title">Lorem ipsum dolorem</h3>
                    </div>
                </div>
            </div>
            
            </>    
    );
    
}
export default Video;