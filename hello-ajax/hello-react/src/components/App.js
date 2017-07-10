/**
 * Created by Administrator on 2017/7/10 0010.
 */
import React from 'react';
import Main from  './Main';
import Search from './Search';
export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      name:''
    }
    this.Search=this.Search.bind(this);
  }

  Search(name){
    this.setState({name})
  }

  render(){
    return (
      <div>
        <Search Search={this.Search}/>
        <Main name={this.state.name} />
      </div>
    )
  }
}