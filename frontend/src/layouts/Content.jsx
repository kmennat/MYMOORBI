import React from "react";
import './Content.css';
function Content(){
return(
<>
            <div className="content-header">
                <h1 className="content-title">News & announcements</h1>
            </div>

            <article className="post">
                <h2 className="post-author">John Doe</h2>
                <p className="post-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam.
                </p>
            </article>

            <article className="post">
                <h2 className="post-author">John Doe</h2>
                <p className="post-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam.
                </p>
            </article>
            </>
        
    );
}
export default Content;