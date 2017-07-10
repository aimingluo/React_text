/**
 * Created by Administrator on 2017/7/10 0010.
 */
import React from 'react';
export  default  class CommentAdd extends React.Component{
  constructor(props){
    super(props)
    this.state={
      head:''
    }
    this.add = this.add.bind(this);
  }

  add(){
    let head = {
      name:this.refs.username.value,
      speak:this.refs.content.value
    }
    this.props.addComment(head);
    this.refs.username.value='';
    this.refs.content.value='';
  }

  render(){
    return (
      <div className="col-md-4">
        <form className="form-horizontal">
          <div className="form-group">
            <label>用户名</label>
            <input type="text" className="form-control" placeholder="用户名" ref='username' />
          </div>
          <div className="form-group">
            <label>评论内容</label>
            <textarea className="form-control" rows="6" placeholder="评论内容" ref="content"></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="button" onClick={this.add} className="btn btn-default pull-right">提交</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}