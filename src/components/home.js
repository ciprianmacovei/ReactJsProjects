import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Home extends Component {

  state = {
    body:''
  }


  submitPost = (e) => {
    e.preventDefault();
    console.log(this.props,'hai ca se poate')
    let title = 'asdasd'
    let body = this.handleChanges
    let id = this.props.posts.length + 1;

    let object = {
      id:id,
      title:title,
      body:this.state.body
    }
    this.props.addPost(object)
    this.setState({
      body:''
    })
  }

  handleChanges = (e) => {
      this.setState({
        body:e.target.value
      })
  }

  render(){
    console.log(this.props.posts,'@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')
    const params = this.props.match.params.id_match;
    const { posts } = this.props;
    console.log(posts.length,'ADASDASDASDASDASDASDASDDSDDASD')



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
          <form className="center" onSubmit={this.submitPost}>
            <div className="input-field col s6">
              <input className="validate" type="text" onChange={this.handleChanges} value={this.state.body}/>
            </div>
          </form>
        </div>
    )
  }
}



const mapStateToProps = (state) => {
  return {
    posts:state.posts
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (post) => { dispatch({type:'ADD_POST',post:post})}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
