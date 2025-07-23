import React from "react";
import './Inbox.css';
function Inbox(){
return(
<>
<div class="content-header">
    <h1 class="content-title">Inbox</h1>
    <div class="inbox-search-container">
        <div class="inbox-search">
            <input type="text" class="inbox-search-input" placeholder="search">
                </input>
            <span class="inbox-search-icon">🔍</span>
        </div>
        <button class="add-btn"> + </button>
    </div>
</div>

<div class="message">
    <div class="message-content">
        <h2 class="message-author">John Doe</h2>
        <p class="message-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.
        </p>
    </div>
    <div class="message-actions">
        <button class="action-btn" title="Reply">↩</button>
        <button class="action-btn" title="Star">★</button>
        <button class="action-btn" title="Delete">🗑</button>
    </div>
</div>

<div class="message">
    <div class="message-content">
        <h2 class="message-author">John Doe</h2>
        <p class="message-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.
        </p>
    </div>
    <div class="message-actions">
        <button class="action-btn" title="Reply">↩</button>
        <button class="action-btn" title="Star">★</button>
        <button class="action-btn" title="Delete">🗑</button>
    </div>
</div>

<div class="message">
<div class="message-content">
    <h2 class="message-author">John Doe</h2>
    <p class="message-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.
    </p>
</div>
<div class="message-actions">
    <button class="action-btn" title="Reply">↩</button>
    <button class="action-btn" title="Star">★</button>
    <button class="action-btn" title="Delete">🗑</button>
</div>
</div>
</>
           );
        }
        export default Inbox;