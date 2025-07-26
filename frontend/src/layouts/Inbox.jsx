import React from "react";
import './Inbox.css';
function Inbox(){
return(
<>
<div className="content-header">
    <h1 className="content-title">Inbox</h1>
    <div className="inbox-search-container">
        <div className="inbox-search">
            <input type="text" className="inbox-search-input" placeholder="search">
                </input>
            <span className="inbox-search-icon">🔍</span>
        </div>
        <button className="add-btn"> + </button>
    </div>
</div>

<div className="message">
    <div className="message-content">
        <h2 className="message-author">John Doe</h2>
        <p className="message-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.
        </p>
    </div>
    <div className="message-actions">
        <button className="action-btn" title="Reply">↩</button>
        <button className="action-btn" title="Star">★</button>
        <button className="action-btn" title="Delete">🗑</button>
    </div>
</div>

<div className="message">
    <div className="message-content">
        <h2 className="message-author">John Doe</h2>
        <p className="message-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.
        </p>
    </div>
    <div className="message-actions">
        <button className="action-btn" title="Reply">↩</button>
        <button className="action-btn" title="Star">★</button>
        <button className="action-btn" title="Delete">🗑</button>
    </div>
</div>

<div className="message">
<div className="message-content">
    <h2 className="message-author">John Doe</h2>
    <p className="message-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.
    </p>
</div>
<div className="message-actions">
    <button className="action-btn" title="Reply">↩</button>
    <button className="action-btn" title="Star">★</button>
    <button className="action-btn" title="Delete">🗑</button>
</div>
</div>
</>
           );
        }
        export default Inbox;