/**
 * Created by Administrator on 2017/7/10 0010.
 */
import React from 'react';
import axios from 'axios';
export default class Main extends React.Component{
  constructor(props){
    super(props);
    this.state={
      firstView: true, //是否显示初始页
      loading: false, // 是否正在请求中
      users: null, // 请求获取的列表数据
      errorMsg: null // 请求错误的信息
    }
  }
  componentWillReceiveProps(newProps){
    this.setState({
      firstView: false, //是否显示初始页
      loading: true
    })
    let searchName = newProps.name;
    console.log(searchName)
    const url = `https://api.github.com/search/users?q=${searchName}`
  axios.get(url)
    .then((response)=>{
      console.log(response);
      const result = response.data.items;
        const users = result.map((item,index)=>{
          return {
            head:item.avatar_url,
            html_url: item.html_url,
            login : item.login
          }
        })
         this.setState({
           loading: false, // 是否正在请求中
           users  // 请求获取的列表数据
         })

      /*this.setState({
        loading: false,
        users: null
      })*/
    })
    .catch((error)=>{
      console.log(error)
      this.setState({
        loading: false,
        errorMsg: '请求失败啦!!!'
      })
    })
  }

  render(){
    const {firstView, loading, users, errorMsg} = this.state
    if(firstView){
      return <h2>Enter name to search</h2>
    }else if(loading){
      return <h2>Loading result...</h2>
    }else if(users){
      return (
        <div className="row">
          {
            users.map((item,index)=>{
              return (
                <div className="card">
                  <a href={item.html_url} target="_blank">
                    <img src={item.head} style={{width:'100px'}}/>
                  </a>
                  <p className="card-text">{item.login}</p>
                </div>
              )
            })
          }

        </div>
      )
    }else if(errorMsg){
      return <h2>网络出错了...</h2>
    }

  }
}