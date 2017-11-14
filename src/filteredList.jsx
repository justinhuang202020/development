import React, { Component } from 'react';
import List from './List';
import { DropdownButton, MenuItem } from 'react-bootstrap';

class FilteredList extends Component {
    
    constructor(props) {
        super(props);

        // The state is just a list of key/value pair (like a hashmap)
        this.state = {
            search: "",
            phase: "all",
            hasIronMan: "all",
            hasHulk: "all",
            hasThor: "all",
            hasCaptainAmerica: "all",
            boxOfficeState: "None"
        };
    }

    // Sets the state whenever the user types on the search bar
    onSearch = (event) => {

          this.setState({search: event.target.value.toLowerCase()});
    }

    filterItem = (item) => {
        // Checks if the current search term is contained in this item
        return (item.name.toLowerCase().search(this.state.search) !== -1 && (this.state.phase === 'all'||item.phase.toString() ===this.state.phase) && (this.state.hasIronMan === 'all'||item.hasIronMan ===this.state.hasIronMan)&& (this.state.hasHulk === 'all'||item.hasHulk ===this.state.hasHulk)&& (this.state.hasThor === 'all'||item.hasThor ===this.state.hasThor) && (this.state.hasCaptainAmerica === 'all'||item.hasCaptainAmerica ===this.state.hasCaptainAmerica))|| item.id ===0;
    
    }
     setPhase = (eventKey, event) => {
        
           this.setState({
               phase: eventKey
           });
        
    }
     hasIronMan = (event) => {
        
           this.setState({
               hasIronMan: true
           });
        
    }
   hasHulk = (event) => {
        
           this.setState({
               hasHulk: true
           });
        
    }
    hasCaptainAmerica = (event) => {
        
           this.setState({
               hasCaptainAmerica: true
           });
        
    } 
    hasThor = (event) => {
        
           this.setState({
               hasThor: true
           });
        
    }
    reset = (event) =>{
        this.setState({
       hasIronMan: "all",
            hasHulk: "all",
            hasThor: "all",
            hasCaptainAmerica: "all"
            })
    }


    processItem =() => {
        console.log(this.state.boxOfficeState);
      var filtered = this.props.items.filter(this.filterItem);
      if (this.state.boxOfficeState ==="None") {
      return filtered.sort(this.normalComparator);
      }
      return filtered.sort(this.sortComparator);


    }
    normalComparator=(a, b)=>{
        return a.id-b.id;    
    }
    sortComparator=(a, b)=> {
        var newA = a.box_office.substring(1).split(",");
        var newB = b.box_office.substring(1).split(",");
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
        if (this.state.boxOfficeState === "Descending") {
          console.log("reached");
           return finalB-finalA;
        }
        else if (this.state.boxOfficeState === "Ascending")  {
          console.log("reached2")
          return finalA-finalB;
          }
    }

    changeBoxOfficeState =() => {
        if (this.state.boxOfficeState ==="None") {
         this.setState({
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

    render() {
        return (
             <div className="filter-list">
                <h1>MCU Movies search</h1>
                  <DropdownButton id="typeDropdown" title={"Phase"}>
                  <MenuItem eventKey="all" onSelect={this.setPhase}>All</MenuItem>
                   <MenuItem eventKey="1" onSelect={this.setPhase}>1</MenuItem>
                    <MenuItem eventKey="2" onSelect={this.setPhase}>2</MenuItem>
                    <MenuItem eventKey="3" onSelect={this.setPhase}>3</MenuItem>
                </DropdownButton>
                <DropdownButton id="typeDropdown" title={"Contains Hero"}>
                 <MenuItem onSelect={this.reset}>Not Sorted</MenuItem>
                  <MenuItem  onSelect={this.hasIronMan}>Iron Man</MenuItem>
                   <MenuItem onSelect={this.hasHulk}>Hulk</MenuItem>
                    <MenuItem onSelect={this.hasThor}>Thor</MenuItem>
                    <MenuItem onSelect={this.hasCaptainAmerica}>Captain America</MenuItem>
                   
                </DropdownButton>
                <input type="text" placeholder="Search" onChange={this.onSearch} />
                <List onBoxOffice={this.changeBoxOfficeState} boxOfficeState = {this.state.boxOfficeState} items={this.processItem()} />
            </div>

        );
    }
}


export default FilteredList;