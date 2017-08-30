import React from 'react';
import Photo from '../photo/Photo';
import Comments from '../commnets/Comments';

const Single = React.createClass({
  render() {
    // Getting the params of the URL
    const { postId } = this.props.params;

    const index = this.props.posts.findIndex((post) => post.code === postId);
    const post = this.props.posts[index];

    const postComments = this.props.comments[postId] || [];

    return (
      <div className="single-photo">
        <Photo index={index} post={post} {...this.props} />
        <Comments postComments={postComments} {...this.props} />
      </div>
    )
  }
});

export default Single;
