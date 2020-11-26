import React from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { postsList } from "../components/posts/posts-list";


const Post = () => {
  let { id } = useParams<{ id: string }>();
  const post = postsList.find((item) => {
    return item.id
  });

  const history = useHistory();

  if (!post) {
    history.push("/404");
  }

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
          <Link to="/post/1">Post</Link>
            <h1>{post?.title}</h1>
          </div>
          <div>
              <img src="" alt=""/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Post;
