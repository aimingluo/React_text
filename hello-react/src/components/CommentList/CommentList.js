/**
 * Created by Administrator on 2017/7/10 0010.
 */
import React from 'react';
import CommentItem from  '../CommentItem/CommentItem'
import './commentList.css'
export  default  class CommentList extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    var display = this.props.comments.length?'none':'block';
    return (
      <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        <h2 style={{display}}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className="list-group">
          {
            this.props.comments.map((item,index)=>{
            return  <CommentItem removeComment={this.props.removeComment} comment={item} key={index} index={index} />
            })
          }

        </ul>
      </div>
    )
  }
}