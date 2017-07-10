/**
 * Created by Administrator on 2017/7/10 0010.
 */
import React from 'react';
import CommentAdd from '../CommentAdd/CommentAdd'
import CommentList from '../CommentList/CommentList'

export  default  class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      comments:[
        {
          name:'tang',
          speak:'ReactJs是啥 '
        },
        {
          name:'zhen',
          speak:'傻了吧，不知道吧'
        }
      ]
    }
    this.addComment = this.addComment.bind(this);
    this.removeComment = this.removeComment.bind(this);
  }
  addComment(head){
    let comments = this.state.comments;
    comments.unshift(head);
    this.setState({comments});
  }
  removeComment (index){
    let comments = this.state.comments;
    comments.splice(index,1);
    this.setState({comments});
  }

  render() {
    return (
      <div>
        <div id="app">
          <div>
            <header className="site-header jumbotron">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12">
                    <h1>请发表对React的评论</h1>
                  </div>
                </div>
              </div>
            </header>
            <div className="container">

              <CommentAdd addComment = {this.addComment} />

              <CommentList comments={this.state.comments} removeComment={this.removeComment} />
            </div>
          </div>
        </div>
      </div>
  )
  }
  }