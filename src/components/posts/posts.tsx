import React, {FC} from 'react';
import './posts';
import { Posts } from './posts-list'
import { postsList } from './posts-list'

type Props = {
    id: string;
    title: string;
    image: string;
  };

  const Posts: FC<Props> = ({ id,  title, image }) => {

    return (
        <section className="posts-wrapper">
            <h1 className="posts-heading">{title}</h1>
            <div className="posts-image">
                <img src={image} alt="No image"/>
            </div>
            <button className="posts-button">Read more</button>
        </section>
    )
};

export default Posts