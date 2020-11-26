import React from "react";
import { useParams, useHistory } from "react-router-dom";
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
            <h1>{post?.id}</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Post;
