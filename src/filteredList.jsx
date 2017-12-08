import React, { Component } from 'react';
import List from './List';
import { DropdownButton, MenuItem, Button} from 'react-bootstrap';

class FilteredList extends React.Component {
    
    constructor(props) {
        super(props);

        // The state is just a list of key/value pair (like a hashmap)
        this.state = {
            directorSearch: [],
            titleSearch: [],

            boxOfficeState: "None",
            domesticBoxOfficeState: "None",
            internationalBoxOfficeState: "None",
            directorState: "None",
            rtState: "None",
            rtAverageState: "None",
            metacriticState: "None",
            titleState: "None",
            dateState: "None",
            directorFilters: 0,
            titleFilters: 1 
        };
    }

    // Sets the state whenever the user types on the search bar
    onDirectorSearch = (event, eventKey) => {
          console.log(eventKey.j);
          let index = Number(eventKey.j);
          console.log(event.target.value);
          let directorArray = this.state.directorSearch;
          directorArray[index] = event.target.value.toLowerCase();
          this.directorArray = this.state.directorSearch;
          this.forceUpdate();
          
    }
    onTitleSearch = (event, eventKey) => {
          console.log(eventKey.i);
          let index = Number(eventKey.i);
          console.log(event.target.value);
          let titleArray = this.state.titleSearch;
          titleArray[index] = event.target.value.toLowerCase();
          this.state.titleSearch = titleArray;
          console.log(this.state.titleSearch);
          this.forceUpdate();
    }
    filterItem = (item) => {
        console.log(item.title);
        console.log("here");
        let title = item.title;
        let director = item.director;
        // Checks if the current search term is contained in this item based on all of the filtered results
        let titleArray = this.state.titleSearch;
        let isEmpty = true;
        let checkPoint1 = false;
        let directorArray = this.state.directorSearch;
        for (let i = 0; i<titleArray.length; i++) {
            console.log(title);
            console.log(titleArray[i]);
            if (title.toLowerCase().search(titleArray[i])!==-1 && titleArray[i]!=="") {
                console.log(title.toLowerCase().search(titleArray[i]));
                console.log("true");
                checkPoint1 = true;
                return true;
            }
            if ( titleArray[i] !== "") {
                console.log("ff");
                isEmpty = false;
            }
        }
       
         for (let i = 0; i<directorArray.length; i++) {

            if (director.toLowerCase().search(directorArray[i])!==-1 && directorArray[i] !== "") {
                return true;
            }
            if (directorArray[i] !== "") {
                console.log("false");
                isEmpty = false;
            }
        }
        
        console.log(isEmpty);
        return isEmpty;

    
    }
   
    // each has[superhero] function is triggered by clicking on the second filter. The state is set depending on what is clilcked
    

    // intermediary function that filters items first. Then sorts it based on the current state 
    processItem =() => {
      let filtered = this.props.items.filter(this.filterItem);
      console.log("herei");
      console.log("bro " + this.state.rtAverageState);
      if (this.state.boxOfficeState ==="None" && this.state.domesticBoxOfficeState==="None" && this.state.internationalBoxOfficeState ==="None" && this.state.rtState==="None" && this.state.rtAverageState === "None" && this.state.metacriticState ==="None" && this.state.titleState === "None" && this.state.directorState === "None" && this.state.dateState === "None") {
      return filtered.sort(this.normalComparator);
      }
      if (this.state.domesticBoxOfficeState !== "None") {
        return filtered.sort(this.domesticSortComparator);
      }
      if (this.state.boxOfficeState !=="None") {
        return filtered.sort(this.sortComparator);
      }
       console.log(this.state.internationalBoxOfficeState);
      if (this.state.internationalBoxOfficeState!== "None") {
          return filtered.sort(this.internationalSortComparator);
      }
       console.log("bro " + this.state.rtState);
      if (this.state.rtState!== "None") {
        console.log("Hereeee");
        return filtered.sort(this.rtSortComparator);
      }
      if (this.state.rtAverageState !=="None") {
        return filtered.sort(this.rtAverageSortComparator);
      }
      if (this.state.metacriticState !=="None") {
        return filtered.sort(this.metacriticSortComparator);
      }
      if (this.state.titleState !== "None") {
        console.log("woah");
        return filtered.sort(this.titleSortComparator);
      }
      if (this.state.directorState !=="None") {
        return filtered.sort(this.directorSortComparator);
      }
      if (this.state.dateState!=="None") {
        return filtered.sort(this.dateSortComparator);
      }
      console.log("end");
    }
    // resets the list to being ordered by its id
    normalComparator=(a, b)=>{
        return a.id-b.id;    
    }
    dateSortComparator=(a,b)=> {
      var dateA = new Date(a.releasedate);
      var dateB = new Date(b.releasedate);
      if (this.state.dateState === "Ascending") {
          return dateA -dateB;
      }
      return dateB-dateA;
    }
      directorSortComparator=(a, b)=> {
      console.log("title");
      if (this.state.directorState === "Ascending") {
      console.log("Here");
          if (a.director < b.director)
            return -1;
        if (a.director > b.director)
            return 1;
          return 0;
      }
      else if (this.state.directorState === "Descending") {
          console.log("there");
          if (a.director > b.director)
            return -1;
        if (a.director < b.director)
            return 1;
          return 0;
      }
     }
     titleSortComparator=(a, b)=> {
      console.log("title");
      if (this.state.titleState === "Ascending") {
      console.log("Here");
          if (a.title < b.title)
            return -1;
        if (a.title > b.title)
            return 1;
          return 0;
      }
      else if (this.state.titleState === "Descending") {
          console.log("there");
          if (a.title > b.title)
            return -1;
        if (a.title < b.title)
            return 1;
          return 0;
      }
     }
     metacriticSortComparator=(a, b)=> {
        console.log("Hi");
        if (this.state.metacriticState === "Descending") {
        if (b.metacritic ==="N/A" && a.metacritic === "N/A") {
            return 0;
        }
        else if (b.metacritic ==="N/A") {
            return -a.metacritic;
        }
        else if (a.metacritic === "N/A") {
              return b.metacritic;
        }
           return b.metacritic-a.metacritic;
        }
        //sort it by ascending
        else if (this.state.metacriticState === "Ascending")  {
        if (b.metacritic==="N/A" && a.metacritic === "N/A") {
            return 0;
        }
        else if (b.metacritic ==="N/A") {
            return a.metacritic;
        }
        else if (a.metacritic === "N/A") {
              return -b.metacritic;
        }
          return a.metacritic-b.metacritic;
          }
    }
     rtAverageSortComparator=(a, b)=> {
        console.log("Hi");
        if (this.state.rtAverageState === "Descending") {
           return b.rtaverage-a.rtaverage;
        }
        //sort it by ascending
        else if (this.state.rtAverageState === "Ascending")  {
          return a.rtaverage-b.rtaverage;
          }
    }
     rtSortComparator=(a, b)=> {
        console.log("Hi");
        if (this.state.rtState === "Descending") {
           return b.rt-a.rt;
        }
        //sort it by ascending
        else if (this.state.rtState === "Ascending")  {
          return a.rt-b.rt;
          }
    }
     internationalSortComparator=(a, b)=> {
        console.log("Hey");
        var newA = a.international_boxoffice.substring(1).split(",");
        var newB = b.international_boxoffice.substring(1).split(",");
        var finalA = "";
        var finalB = "";
        for (let i = 0; i<newA.length; i++) {
            finalA += newA[i];
        }
        for (let i = 0; i<newB.length; i++) {
            finalB += newB[i];
        }
        finalA = Number(finalA);
        finalB = Number(finalB);
        //sort it by descending
        if (this.state.internationalBoxOfficeState === "Descending") {
           return finalB-finalA;
        }
        //sort it by ascending
        else if (this.state.internationalBoxOfficeState === "Ascending")  {
          return finalA-finalB;
          }
    }
    domesticSortComparator=(a, b)=> {

        var newA = a.domestic_boxoffice.substring(1).split(",");
        var newB = b.domestic_boxoffice.substring(1).split(",");
        var finalA = "";
        var finalB = "";
        for (let i = 0; i<newA.length; i++) {
            finalA += newA[i];
        }
        for (let i = 0; i<newB.length; i++) {
            finalB += newB[i];
        }
        finalA = Number(finalA);
        finalB = Number(finalB);
        //sort it by descending
        if (this.state.domesticBoxOfficeState === "Descending") {
           return finalB-finalA;
        }
        //sort it by ascending
        else if (this.state.domesticBoxOfficeState === "Ascending")  {
          return finalA-finalB;
          }
    }
    //takes the box office string (take out the commas and $ signs) and converts it to a number
    sortComparator=(a, b)=> {

        var newA = a.boxoffice.substring(1).split(",");
        var newB = b.boxoffice.substring(1).split(",");
        var finalA = "";
        var finalB = "";
        for (let i = 0; i<newA.length; i++) {
            finalA += newA[i];
        }
        for (let i = 0; i<newB.length; i++) {
            finalB += newB[i];
        }
        finalA = Number(finalA);
        finalB = Number(finalB);
        //sort it by descending
        if (this.state.boxOfficeState === "Descending") {
           return finalB-finalA;
        }
        //sort it by ascending
        else if (this.state.boxOfficeState === "Ascending")  {
          return finalA-finalB;
          }
    }
      changeInternationalBoxOfficeState =() => {
        console.log(this.state.internationalBoxOfficeState);
        if (this.state.internationalBoxOfficeState ==="None") {
         this.setState({
            directorState: "None",
            rtState: "None",
            rtAverageState: "None",
            metacriticState: "None",
            titleState: "None",
            dateState: "None",
               boxOfficeState: "None",
               domesticBoxOfficeState: "None",
               internationalBoxOfficeState: "Ascending"
           });
        }
        else if (this.state.internationalBoxOfficeState ==="Ascending") {
         this.setState({
               internationalBoxOfficeState:  "Descending"
           });
        }
         else if (this.state.internationalBoxOfficeState ==="Descending") {
         this.setState({
               internationalBoxOfficeState:  "None"
           });
        }
    }
     changeDateState =() => {
        if (this.state.dateState ==="None") {
         this.setState({

            directorState: "None",
            rtState: "None",
            rtAverageState: "None",
            metacriticState: "None",
            titleState: "None",
            dateState: "Ascending",
               boxOfficeState: "None",
              internationalBoxOfficeState: "None",
               domesticBoxOfficeState: "None"
           });
        }
        else if (this.state.dateState ==="Ascending") {
         this.setState({

              dateState: "Descending"
           });
        }
         else if (this.state.dateState ==="Descending") {
         this.setState({
               dateState: "None"
           });
        }
        console.log("Nah" + this.state.rtAverageState);
    }
    changertAverageState =() => {
        if (this.state.rtAverageState ==="None") {
         this.setState({

            directorState: "None",
            rtState: "None",
            rtAverageState: "Ascending",
            metacriticState: "None",
            titleState: "None",
            dateState: "None",
               boxOfficeState: "None",
              internationalBoxOfficeState: "None",
               domesticBoxOfficeState: "None"
           });
        }
        else if (this.state.rtAverageState ==="Ascending") {
         this.setState({

              rtAverageState: "Descending"
           });
        }
         else if (this.state.rtAverageState ==="Descending") {
         this.setState({
               rtAverageState: "None"
           });
        }
        console.log("Nah" + this.state.rtAverageState);
    }
    changemetacriticState =() => {
      console.log("neeeeee");
        if (this.state.metacriticState ==="None") {
         this.setState({

            directorState: "None",
            rtState: "None",
            rtAverageState: "None",
            metacriticState: "Ascending",
            titleState: "None",
            dateState: "None",
               boxOfficeState: "None",
              internationalBoxOfficeState: "None",
               domesticBoxOfficeState: "None"
           });
        }
        else if (this.state.metacriticState ==="Ascending") {
         this.setState({

              metacriticState: "Descending"
           });
        }
         else if (this.state.metacriticState ==="Descending") {
         this.setState({
               metacriticState: "None"
           });
        }
    }
    changertState =() => {
        if (this.state.rtState ==="None") {
         this.setState({

            directorState: "None",
            rtState: "Ascending",
            rtAverageState: "None",
            metacriticState: "None",
            titleState: "None",
            dateState: "None",
               boxOfficeState: "None",
              internationalBoxOfficeState: "None",
               domesticBoxOfficeState: "None"
           });
        }
        else if (this.state.rtState ==="Ascending") {
         this.setState({

              rtState: "Descending"
           });
        }
         else if (this.state.rtState ==="Descending") {
         this.setState({
               rtState: "None"
           });
        }
    }
     changeDomesticBoxOfficeState =() => {
        console.log("here " + this.state.domesticBoxOfficeState);
        if (this.state.domesticBoxOfficeState ==="None") {
         this.setState({

            directorState: "None",
            rtState: "None",
            rtAverageState: "None",
            metacriticState: "None",
            titleState: "None",
            dateState: "None",
               boxOfficeState: "None",
              internationalBoxOfficeState: "None",
               domesticBoxOfficeState: "Ascending"
           });
        }
        else if (this.state.domesticBoxOfficeState ==="Ascending") {
         this.setState({

               domesticBoxOfficeState: "Descending"
           });
        }
         else if (this.state.domesticBoxOfficeState ==="Descending") {
         this.setState({
               domesticBoxOfficeState: "None"
           });
        }
    }
    changeDirectorState =() => {
    console.log(this.state.directorState);
        if (this.state.directorState ==="None") {
         this.setState({
          internationalBoxOfficeState: "None",
               domesticBoxOfficeState: "None",
            directorState: "Ascending",
            rtState: "None",
            rtAverageState: "None",
            metacriticState: "None",
            titleState: "None",
            dateState: "None",
               boxOfficeState: "None"
           });
        }
        else if (this.state.directorState ==="Ascending") {
         this.setState({
               directorState: "Descending"
           });
        }
         else if (this.state.directorState ==="Descending") {
         this.setState({
               directorState: "None"
           });
        }
    }
    changeTitleState =() => {
    console.log(this.state.titleState);
        if (this.state.titleState ==="None") {
         this.setState({
          internationalBoxOfficeState: "None",
               domesticBoxOfficeState: "None",
            directorState: "None",
            rtState: "None",
            rtAverageState: "None",
            metacriticState: "None",
            titleState: "Ascending",
            dateState: "None",
               boxOfficeState: "None"
           });
        }
        else if (this.state.titleState ==="Ascending") {
         this.setState({
               titleState: "Descending"
           });
        }
         else if (this.state.titleState ==="Descending") {
         this.setState({
               titleState: "None"
           });
        }
    }
    changeBoxOfficeState =() => {

        console.log(this.state.boxOfficeState);
        if (this.state.boxOfficeState ==="None") {
         this.setState({
          internationalBoxOfficeState: "None",
               domesticBoxOfficeState: "None",
            directorState: "None",
            rtState: "None",
            rtAverageState: "None",
            metacriticState: "None",
            titleState: "None",
            dateState: "None",
               boxOfficeState: "Ascending"
           });
        }
        else if (this.state.boxOfficeState ==="Ascending") {
         this.setState({
               boxOfficeState: "Descending"
           });
        }
         else if (this.state.boxOfficeState ==="Descending") {
         this.setState({
               boxOfficeState: "None"
           });
        }
    }
    titleFilter=( eventKey)=> {
      let value = this.state.titleFilters + 1;
      this.state.titleFilters = value;
       console.log(value);
       this.forceUpdate();
    }
    directorFilter=( eventKey)=> {
      console.log(this.state);
      let value = this.state.directorFilters + 1;
       console.log(this.state.directorFilters);
       this.state.directorFilters = value;
      this.forceUpdate();
      //this.setState=({
      //});
    }
    addFilterSearches =(event) => {
    console.log("here");
    let titleFilters = this.state.titleFilters;
    let directorFilters = this.state.directorFilters;
    console.log(titleFilters);
    var list = [];
      for (let i = 0; i<titleFilters; i++) {
    list.push(<div className = "filter"><input type="text"  placeholder="Movie Search" onChange={(event) => this.onTitleSearch(event,{i})} /><Button onclick = {() => {this.removeTitleFilter}}>Remove Filter</Button></div>)
      
    }

    for (let j = 0; j<directorFilters; j++) {
       list.push(<div className = "filter"><input type="text" placeholder="Director Search" onChange={(event) => this.onDirectorSearch(event,{j})} /><Button>Remove Filter</Button></div>)     
    }

      return list;
    }
    removeTitleFilter
    render() {
        return (
             <div className="filter-list">
                <h1>Movies Search Demo</h1>
               <div>
                <DropdownButton id="typeDropdown" title={"Add filter category"}>
                 <MenuItem eventKey = "director" onSelect={this.directorFilter}>Director</MenuItem>
                  <MenuItem  eventkey = "title" onSelect={this.titleFilter}>Title</MenuItem>
                </DropdownButton></div>
                {this.addFilterSearches()}

                {/*this.changeBoxOfficeState triggered by a click in List.*/} 
                <List onDate={this.changeDateState} dateState = {this.state.dateState} onDirector={this.changeDirectorState} directorState = {this.state.directorState} onTitle={this.changeTitleState} titleState = {this.state.titleState} onMetacritic = {this.changemetacriticState} metacriticState = {this.state.metacriticState} onRTAverage={this.changertAverageState} rtAverageState = {this.state.rtAverageState}  onRT={this.changertState} rtState = {this.state.rtState}  onDomesticBoxOffice={this.changeDomesticBoxOfficeState} domesticBoxOfficeState = {this.state.domesticBoxOfficeState} onInternationalBoxOffice={this.changeInternationalBoxOfficeState} internationalBoxOfficeState = {this.state.internationalBoxOfficeState}  onBoxOffice={this.changeBoxOfficeState} boxOfficeState = {this.state.boxOfficeState} items={this.processItem()} />
            </div>

        );
    }
}


export default FilteredList;