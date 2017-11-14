import React, { Component } from 'react';
import InnerList from './innerList';

/*
  The list component will take the list of items passed in as a property
  and create an HTML list with those item. In this example, we are passing in the 
  filtered produce list, but this component can be used for other types of items 
  as long as it has a name.
*/
class List extends Component {
    renderHeader() {
              console.log(this.props.boxOfficeState);
              if (this.props.boxOfficeState === "None") {
                return <li><ul className = 'movie header'>
                <li key = "poster headline"></li>
                <li key = "Film Name" >Title</li>
                <li key = "box office" onClick={() => {this.props.onBoxOffice()}}><a className = "unsorted">Box Office -</a></li>
                <li key = "release year">Release Year</li>
                </ul></li>
              }
              else if (this.props.boxOfficeState ==="Ascending") {
                return <li><ul className = 'movie header'>
                <li key = "poster headline"></li>
                <li key = "Film Name" >Title</li>
                <li key = "box office" onClick={() => {this.props.onBoxOffice()}}><a className = "ascending">Box Office<p><i className="arrow up"></i></p></a></li>
                <li key = "release year">Release Year</li>
                </ul></li>
              }
              else if (this.props.boxOfficeState === "Descending") {
                return <li><ul className = 'movie header'>
                <li key = "poster headline"></li>
                <li key = "Film Name" >Title</li>
                <li key = "box office" onClick={() => {this.props.onBoxOffice()}}><a className = "ascending">Box Office<p><i className="arrow down"></i></p></a></li>
                <li key = "release year">Release Year</li>
                </ul></li>
              }
          
        
    }

    renderList() {
        const items = this.props.items.map(item => {
            return <li key = {item.id}><InnerList listItem ={item} key = {item.id}/></li>
        });

        return items;
    }
   

    render() {
        return (
                <ul id = "list">
               {this.renderHeader()}
                {this.renderList()}
            </ul>
        );
    }
}

export default List;