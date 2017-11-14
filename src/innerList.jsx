import React, { Component } from 'react';


/*
  The list component will take the list of items passed in as a property
  and create an HTML list with those item. In this example, we are passing in the 
  filtered produce list, but this component can be used for other types of items 
  as long as it has a name.
*/
class InnerList extends Component {
  

    renderImage() {
    return <li key = {this.props.listItem.image}><img src ={this.props.listItem.image}></img></li>
       
    }
    renderTitle() {
    return <li key = {this.props.listItem.name} className = 'notPicture'>{this.props.listItem.name}</li>
    }
   renderBoxOffice() {
   return <li key = {this.props.listItem.box_office} className ='notPicture'>{this.props.listItem.box_office}</li>

   }
   renderReleaseYear() {
   return <li key = {this.props.listItem.release_year} className = 'notPicture'>{this.props.listItem.release_year}</li>;
   }

    render() {
        return (
              <ul className = "movie">{this.renderImage()}{this.renderTitle()}{this.renderBoxOffice()}{this.renderReleaseYear()}</ul>
        );
    }
}

export default InnerList;