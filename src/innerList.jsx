import React, { Component } from 'react';


/*
  The innerList component will take an item of a list of items and render each element separately as an li element and then embed it in a ul tag.
*/
class InnerList extends Component {
  

  renderImage() {
    return <li key = {this.props.listItem.image} className = "fixed"><img src ={this.props.listItem.image}></img></li>
       
  }
  renderTitle() {
    return <li key = {this.props.listItem.title} className = 'notPicture'>{this.props.listItem.title}</li>
  }
  renderBoxOffice() {
    return <li key = {this.props.listItem.boxoffice} className ='notPicture'>{this.props.listItem.boxoffice}</li>

  }
  renderDomesticBoxOffice() {
    return <li key = {this.props.listItem.domestic_boxoffice} className ='notPicture'>{this.props.listItem.domestic_boxoffice}</li>

  }
  renderInternationalBoxOffice() {
   return <li key = {this.props.listItem.international_boxoffice} className ='notPicture'>{this.props.listItem.international_boxoffice}</li>

   }
  renderMetaCritic() {
   return <li key = {this.props.listItem.metacritic} className ='notPicture'>{this.props.listItem.metacritic}</li>

   }
   renderRT() {
   return <li key = {this.props.listItem.rt} className ='notPicture'>{this.props.listItem.rt}</li>

   }
   renderRTAvg() {
   return <li key = {this.props.listItem.rtaverage} className ='notPicture'>{this.props.listItem.rtaverage}</li>

   }
   renderReleaseDate() {
   return <li key = {this.props.listItem.releasedate} className = 'notPicture'>{this.props.listItem.releasedate}</li>;
   }
   renderDirector() {
   return <li key = {this.props.listItem.director} className = 'notPicture'>{this.props.listItem.director}</li>;
   }

    render() {
        return (
              <ul className = "movie">{this.renderImage()}{this.renderTitle()}{this.renderReleaseDate()}{this.renderDirector()}{this.renderBoxOffice()}{this.renderDomesticBoxOffice()}{this.renderInternationalBoxOffice()}{this.renderRT()}{this.renderRTAvg()}{this.renderMetaCritic()}</ul>
        );
    }
}

export default InnerList;