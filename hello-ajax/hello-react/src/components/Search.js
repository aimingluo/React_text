/**
 * Created by Administrator on 2017/7/10 0010.
 */
import React from 'react';
export default class Search extends React.Component{
  constructor(props){
    super(props);
    this.SER = this.SER.bind(this);
  }

  SER(){
    const searchName = this.refs.name.value.trim()
    this.props.Search(searchName);
    this.refs.name.value='';
  }

  render(){
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input type="text" ref="name"  placeholder="enter the name you search"/>
          <button onClick={this.SER}>Search</button>
        </div>
      </section>
    )
  }
}