import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blogs overflow-x-hidden ">
      <div className="blog-1">
        <h1>Difference between authorization and authentication?</h1>
        <p>
          Authentication means the identity of the user for providing the access
          to the website. Authorization means after validation the user access
          some extra features. First Authentication done and after the
          authorization done.
        </p>
      </div>

      <div className="blog-2">
        <h1>
          Why are you using firebase? What other options do you have to
          implement authentication?
        </h1>
        <p>
          At this stage me using firebase to authenticate the user and deoploy
          my site to the firebase. The options of the firebase authentication:
          1.create a new user using email and pass 2.
          signInwithGoogle,3.signInWithGithub,4.signInWithFacebook etc 3.Email
          Verification, 4.Password and profile change etc provides firebase.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
