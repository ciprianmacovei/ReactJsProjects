import React , { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Home extends Component {

  state = {
    posts: []
  }

  componentDidMount(){

    axios.get('https://jsonplaceholder.typicode.com/posts').then( (res) =>
    this.setState({
      posts:res.data.slice(0,10)
    })
    )
  }
  render(){
    const params = this.props.match.params.id_match;
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map( (post) => {
        return (
          <div className="card blue-grey darken-1" key={post.id}>
            <Link to={'/'+post.id}>
            <span className="card-title">{post.title}</span>
            </Link>
            <p>{post.body}</p>
          </div>
        )
      })
    ) :
    (

      <div className="center">
        There are no posts
      </div>
    )
    return (
        <div className="container">
        and the router params are {params}
          {postList}
        </div>
    )
  }
}

export default Home;
