import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



class Posts extends Component{

  state = {
    posts:[]
  }

  componentDidMount(){
    const id = this.props.match.params.id_match;
    axios.get('https://jsonplaceholder.typicode.com/posts/' + id).then( (res) => {
      console.log(res)
      this.setState({
        posts:res.data
      })
    })


  }

  render(){
    const { posts } = this.state
    const postList = posts ? (

        <div className="card blue-grey darken-1" key={posts.id}>
          <Link to={'/posts/'+posts.id}>
          <span className="card-title">{posts.title}</span>
          </Link>
          <p>{posts.body}</p>
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


export default Posts
