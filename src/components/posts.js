import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deletePost } from '../actions/postActions.js';

class Posts extends Component{


  handleClick = () => {
    console.log('asdas',this.props.post.id)
    this.props.delete(this.props.post.id);
    this.props.history.push('/');
  }

  render(){
    const post = this.props.post
    console.log('ciprian',this.props)
    const postList = post ? (

        <div className="card blue-grey darken-1" key={post.id}>

            <Link to={'/posts/'+post.id}>
            <span className="card-title">{post.title}</span>
            </Link>
            <p>{post.body}</p>

            <div className="center">
              <button onClick={this.handleClick} className="btn grey">Delete</button>
            </div>

        </div>
      )
    : (
      <div className="card blue-grey darken-1" >
          there are no posts
      </div>
      )
    return (
      <div className="center">
      {postList}
      </div>
    )
  }



}

const mapStateToProps = (state,ownProps) => {
  let id = ownProps.match.params.id_match
  id = Number(id);
  return {
    post:state.posts.find( post => post.id === id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    delete: (id) => { dispatch(deletePost(id)) }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Posts)
