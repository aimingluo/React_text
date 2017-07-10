/**
 * Created by Administrator on 2017/7/10 0010.
 */
import React from 'react';
export  default  class CommentItem extends React.Component{
  constructor(props){
    super(props);
    this.remove = this.remove.bind(this);
  }
  remove(){
    this.props.removeComment(this.props.index)
  }

  render(){
    return (
      <li className="list-group-item">
        <div className="handle">
          <a href="javascript:;" onClick={this.remove}>删除</a>
        </div>
        <p className="user"><span >{this.props.comment.name}</span><span>说:</span></p>
        <p className="centence">{this.props.comment.speak}</p>
      </li>
    )
  }
}