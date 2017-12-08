import React, { Component } from 'react';
import InnerList from './innerList';

/*
  The list component will take the list of items passed in as a property
  and create an HTML list with those item. 
*/
class List extends Component {
    //renders the header of the list based on the current sort state the list is in. 
    renderHeader() {
              console.log(this.props.directorState);
              if (this.props.boxOfficeState === "None" && this.props.domesticBoxOfficeState === "None" && this.props.internationalBoxOfficeState ==="None"&& this.props.rtState === "None"&& this.props.rtAverageState === "None" && this.props.metacriticState ==="None" && this.props.titleState === "None" && this.props.directorState === "None" && this.props.dateState === "None") {
                return <li><ul className = 'movie header'>
                <li key = "poster headline" className = "fixed"></li>
                <li key = "Film Name" onClick={() => {this.props.onTitle()}}><a className = "unsorted">Title-</a></li>
                <li key = "Release Date" onClick={() => {this.props.onDate()}}><a className = "unsorted">Release Date-</a></li>
                 <li key = "Director" onClick={() => {this.props.onDirector()}}><a className = "unsorted">Director-</a></li>
                <li key = "box office" onClick={() => {this.props.onBoxOffice()}}><a className = "unsorted">Worldwide Box Office -</a></li>
                 <li key = "domestic box office" onClick={() => {this.props.onDomesticBoxOffice()}}><a className = "unsorted">Domestic Box Office -</a></li>
                 <li key = "international box office" onClick={() => {this.props.onInternationalBoxOffice()}}><a className = "unsorted">International Box Office -</a></li>
                    <li key = "RT" onClick={() => {this.props.onRT()}}><a className = "unsorted">Rotten Tomatoes% -</a></li>
                   <li key = "RT average" onClick={() => {this.props.onRTAverage()}}><a>RT Avg. Score -</a></li>
                 <li key = "metacritic" onClick={() => {this.props.onMetacritic()}}><a className = "Unsorted">MetaCritic -</a></li>

                </ul></li>
              }
              // up arrow will be added
              else if (this.props.boxOfficeState ==="Ascending") {
                return <li><ul className = 'movie header'>
                <li key = "poster headline" className = "fixed"></li>
                 <li key = "Film Name"onClick={() => {this.props.onTitle()}}><a className = "unsorted">Title-</a></li>
              <li key = "Release Date" onClick={() => {this.props.onDate()}}><a className = "unsorted">Release Date-</a></li>
                     <li key = "Director" onClick={() => {this.props.onDirector()}}><a className = "unsorted">Director-</a></li>
                <li key = "Worldbox office" onClick={() => {this.props.onBoxOffice()}}><a className = "ascending">Worldwide Box Office<p><i className="arrow up"></i></p></a></li>
                 <li key = "domestic box office" onClick={() => {this.props.onDomesticBoxOffice()}}><a className = "unsorted">Domestic Box Office -</a></li>
                  <li key = "international box office" onClick={() => {this.props.onInternationalBoxOffice()}}><a className = "unsorted">International Box Office -</a></li>

                    <li key = "RT" onClick={() => {this.props.onRT()}}><a className = "unsorted">Rotten Tomatoes% -</a></li>
                   <li key = "RT average" onClick={() => {this.props.onRTAverage()}}><a>RT Avg. Score -</a></li>
                 <li key = "metacritic" onClick={() => {this.props.onMetacritic()}}><a className = "Unsorted">MetaCritic -</a></li>
                </ul></li>
              }
              //down arrow will be added
              else if (this.props.boxOfficeState === "Descending") {
                return <li><ul className = 'movie header'>
                <li key = "poster headline" className = "fixed"></li>
                 <li key = "Film Name" onClick={() => {this.props.onTitle()}}><a className = "unsorted">Title-</a></li>
                   <li key = "Release Date" onClick={() => {this.props.onDate()}}><a className = "unsorted">Release Date-</a></li>
                   <li key = "Director" onClick={() => {this.props.onDirector()}}><a className = "unsorted">Director-</a></li>
                <li key = "box office" onClick={() => {this.props.onBoxOffice()}}><a className = "ascending">Worldwide Box Office<p><i className="arrow down"></i></p></a></li>
                <li key = "domestic box office" onClick={() => {this.props.onDomesticBoxOffice()}}><a className = "unsorted">Domestic Box Office -</a></li>                 
                <li key = "international box office" onClick={() => {this.props.onInternationalBoxOffice()}}><a className = "unsorted">International Box Office -</a></li>

                    <li key = "RT" onClick={() => {this.props.onRT()}}><a className = "unsorted">Rotten Tomatoes% -</a></li>
                 <li key = "RT average" onClick={() => {this.props.onRTAverage()}}><a>RT Avg. Score -</a></li>
                 <li key = "metacritic" onClick={() => {this.props.onMetacritic()}}><a className = "Unsorted">MetaCritic -</a></li>
                </ul></li>
              }
              else if (this.props.domesticBoxOfficeState === "Ascending") {
                 return <li><ul className = 'movie header'>
                <li key = "poster headline" className = "fixed"></li>
                <li key = "Film Name" onClick={() => {this.props.onTitle()}}><a className = "unsorted">Title-</a></li>
                 <li key = "Release Date" onClick={() => {this.props.onDate()}}><a className = "unsorted">Release Date-</a></li>
                 <li key = "Director" onClick={() => {this.props.onDirector()}}><a className = "unsorted">Director-</a></li>
                <li key = "box office" onClick={() => {this.props.onBoxOffice()}}><a className = "unsorted">Worldwide Box Office -</a></li>
                <li key = "domestic box office" onClick={() => {this.props.onDomesticBoxOffice()}}><a className = "ascending">Domestic Box Office<p><i className="arrow up"></i></p></a></li>                 
                <li key = "international box office" onClick={() => {this.props.onInternationalBoxOffice()}}><a className = "unsorted">International Box Office -</a></li>

                    <li key = "RT" onClick={() => {this.props.onRT()}}><a className = "unsorted">Rotten Tomatoes% -</a></li>
                  <li key = "RT average" onClick={() => {this.props.onRTAverage()}}><a>RT Avg. Score -</a></li>
                 <li key = "metacritic" onClick={() => {this.props.onMetacritic()}}><a className = "Unsorted">MetaCritic -</a></li>
                </ul></li>
              }
              else if (this.props.domesticBoxOfficeState === "Descending") {
                 return <li><ul className = 'movie header'>
                <li key = "poster headline" className = "fixed"></li>
                 <li key = "Film Name" onClick={() => {this.props.onTitle()}}><a className = "unsorted">Title-</a></li>
                   <li key = "Release Date" onClick={() => {this.props.onDate()}}><a className = "unsorted">Release Date-</a></li>
                   <li key = "Director" onClick={() => {this.props.onDirector()}}><a className = "unsorted">Director-</a></li>
                <li key = "box office" onClick={() => {this.props.onBoxOffice()}}><a className = "unsorted">Worldwide Box Office -</a></li>
                <li key = "domestic box office" onClick={() => {this.props.onDomesticBoxOffice()}}><a className = "ascending">Domestic Box Office<p><i className="arrow down"></i></p></a></li>                 
              <li key = "international box office" onClick={() => {this.props.onInternationalBoxOffice()}}><a className = "unsorted">International Box Office -</a></li>
                      <li key = "RT" onClick={() => {this.props.onRT()}}><a className = "unsorted">Rotten Tomatoes% -</a></li>
                   <li key = "RT average" onClick={() => {this.props.onRTAverage()}}><a>RT Avg. Score -</a></li>
                <li key = "metacritic" onClick={() => {this.props.onMetacritic()}}><a className = "Unsorted">MetaCritic -</a></li>
                </ul></li>
              }
              else if (this.props.internationalBoxOfficeState ==="Descending") {
                return <li><ul className = 'movie header'>
                <li key = "poster headline" className = "fixed"></li>
                <li key = "Film Name" onClick={() => {this.props.onTitle()}}><a className = "unsorted">Title-</a></li>

                 <li key = "Release Date" onClick={() => {this.props.onDate()}}><a className = "unsorted">Release Date-</a></li>
                  <li key = "Director" onClick={() => {this.props.onDirector()}}><a className = "unsorted">Director-</a></li>
                <li key = "box office" onClick={() => {this.props.onBoxOffice()}}><a className = "unsorted">Worldwide Box Office -</a></li>
                 <li key = "domestic box office" onClick={() => {this.props.onDomesticBoxOffice()}}><a className = "unsorted">Domestic Box Office -</a></li>
                 <li key = "international box office" onClick={() => {this.props.onInternationalBoxOffice()}}><a className = "ascending">International Box Office</a><p><i className="arrow down"></i></p></li>
                      <li key = "RT" onClick={() => {this.props.onRT()}}><a className = "unsorted">Rotten Tomatoes% -</a></li>
                   <li key = "RT average" onClick={() => {this.props.onRTAverage()}}><a>RT Avg. Score -</a></li>
                 <li key = "metacritic" onClick={() => {this.props.onMetacritic()}}><a className = "Unsorted">MetaCritic -</a></li>

                </ul></li>
              }
              else if (this.props.internationalBoxOfficeState ==="Ascending") {

                return <li><ul className = 'movie header'>
                <li key = "poster headline" className = "fixed"></li>
                <li key = "Film Name" onClick={() => {this.props.onTitle()}}><a className = "unsorted">Title-</a></li>
                 <li key = "Release Date" onClick={() => {this.props.onDate()}}><a className = "unsorted">Release Date-</a></li>
                  <li key = "Director" onClick={() => {this.props.onDirector()}}><a className = "unsorted">Director-</a></li>
                <li key = "box office" onClick={() => {this.props.onBoxOffice()}}><a className = "unsorted">Worldwide Box Office -</a></li>
                 <li key = "domestic box office" onClick={() => {this.props.onDomesticBoxOffice()}}><a className = "unsorted">Domestic Box Office -</a></li>
                 <li key = "international box office" onClick={() => {this.props.onInternationalBoxOffice()}}><a className = "ascending">International Box Office</a><p><i className="arrow up"></i></p></li>
                    <li key = "RT" onClick={() => {this.props.onRT()}}><a className = "unsorted">Rotten Tomatoes% -</a></li>
                  <li key = "RT average" onClick={() => {this.props.onRTAverage()}}><a>RT Avg. Score -</a></li>
                 <li key = "metacritic" onClick={() => {this.props.onMetacritic()}}><a className = "Unsorted">MetaCritic -</a></li>

                </ul></li>
              }      
              
            else if (this.props.rtState === "Ascending") {
              return <li><ul className = 'movie header'>
                <li key = "poster headline" className = "fixed"></li>
                 <li key = "Film Name" onClick={() => {this.props.onTitle()}}><a className = "unsorted">Title-</a></li>
                 <li key = "Release Date" onClick={() => {this.props.onDate()}}><a className = "unsorted">Release Date-</a></li>
                 <li key = "Director" onClick={() => {this.props.onDirector()}}><a className = "unsorted">Director-</a></li>
                <li key = "box office" onClick={() => {this.props.onBoxOffice()}}><a className = "unsorted">Worldwide Box Office -</a></li>
                 <li key = "domestic box office" onClick={() => {this.props.onDomesticBoxOffice()}}><a className = "unsorted">Domestic Box Office -</a></li>
                 <li key = "international box office" onClick={() => {this.props.onInternationalBoxOffice()}}><a className = "unsorted">International Box Office -</a></li>
                    <li key = "RT" onClick={() => {this.props.onRT()}}><a className = "ascending">Rotten Tomatoes %</a><p><i className="arrow up"></i></p></li>
                  <li key = "RT average" onClick={() => {this.props.onRTAverage()}}><a>RT Avg. Score -</a></li>
                <li key = "metacritic" onClick={() => {this.props.onMetacritic()}}><a className = "Unsorted">MetaCritic -</a></li>
                </ul></li>
            }          
            else if (this.props.rtState === "Descending") {
               return <li><ul className = 'movie header'>
                <li key = "poster headline" className = "fixed"></li>
                <li key = "Film Name" onClick={() => {this.props.onTitle()}}><a className = "unsorted">Title-</a></li>

                 <li key = "Release Date" onClick={() => {this.props.onDate()}}><a className = "unsorted">Release Date-</a></li>
                 <li key = "Director" onClick={() => {this.props.onDirector()}}><a className = "unsorted">Director-</a></li>
                <li key = "box office" onClick={() => {this.props.onBoxOffice()}}><a className = "unsorted">Worldwide Box Office -</a></li>
                 <li key = "domestic box office" onClick={() => {this.props.onDomesticBoxOffice()}}><a className = "unsorted">Domestic Box Office -</a></li>
                 <li key = "international box office" onClick={() => {this.props.onInternationalBoxOffice()}}><a className = "unsorted">International Box Office -</a></li>
                    <li key = "RT" onClick={() => {this.props.onRT()}}><a className = "ascending">Rotten Tomatoes%</a><p><i className="arrow down"></i></p></li>
                   <li key = "RT average" onClick={() => {this.props.onRTAverage()}}><a>RT Avg. Score -</a></li>
                <li key = "metacritic" onClick={() => {this.props.onMetacritic()}}><a className = "Unsorted">MetaCritic -</a></li>

                </ul></li>
            }
            else if (this.props.rtAverageState === "Descending") {
                return <li><ul className = 'movie header'>
                <li key = "poster headline" className = "fixed"></li>
                 <li key = "Film Name" onClick={() => {this.props.onTitle()}}><a className = "unsorted">Title-</a></li>

                 <li key = "Release Date" onClick={() => {this.props.onDate()}}><a className = "unsorted">Release Date-</a></li>
                  <li key = "Director" onClick={() => {this.props.onDirector()}}><a className = "unsorted">Director-</a></li>
                <li key = "box office" onClick={() => {this.props.onBoxOffice()}}><a className = "unsorted">Worldwide Box Office -</a></li>
                 <li key = "domestic box office" onClick={() => {this.props.onDomesticBoxOffice()}}><a className = "unsorted">Domestic Box Office -</a></li>
                 <li key = "international box office" onClick={() => {this.props.onInternationalBoxOffice()}}><a className = "unsorted">International Box Office -</a></li>
                    <li key = "RT" onClick={() => {this.props.onRT()}}><a className = "ascending">Rotten Tomatoes% -</a></li>
                   <li key = "RT average" onClick={() => {this.props.onRTAverage()}}><a className = 'ascending'>RT Avg. Score</a><p><i className="arrow down"></i></p></li>
                <li key = "metacritic" onClick={() => {this.props.onMetacritic()}}><a className = "Unsorted">MetaCritic -</a></li>

                </ul></li>
            }
            else if (this.props.rtAverageState === "Ascending") {
              console.log("whatya");
                return <li><ul className = 'movie header'>
                <li key = "poster headline" className = "fixed"></li>
                 <li key = "Film Name" onClick={() => {this.props.onTitle()}}><a className = "unsorted">Title-</a></li>

                <li key = "Release Date" onClick={() => {this.props.onDate()}}><a className = "unsorted">Release Date-</a></li>
                 <li key = "Director" onClick={() => {this.props.onDirector()}}><a className = "unsorted">Director-</a></li>
                <li key = "box office" onClick={() => {this.props.onBoxOffice()}}><a className = "unsorted">Worldwide Box Office -</a></li>
                 <li key = "domestic box office" onClick={() => {this.props.onDomesticBoxOffice()}}><a className = "unsorted">Domestic Box Office -</a></li>
                 <li key = "international box office" onClick={() => {this.props.onInternationalBoxOffice()}}><a className = "unsorted">International Box Office -</a></li>
                    <li key = "RT" onClick={() => {this.props.onRT()}}><a className = "unsorted">Rotten Tomatoes% -</a></li>
                   <li key = "RT average" onClick={() => {this.props.onRTAverage()}}><a className = 'ascending'>RT Avg. Score</a><p><i className="arrow up"></i></p></li>
                 <li key = "metacritic" onClick={() => {this.props.onMetacritic()}}><a className = "Unsorted">MetaCritic -</a></li>

                </ul></li>
            }
            else if (this.props.metacriticState === "Ascending") {
              return <li><ul className = 'movie header'>
                <li key = "poster headline" className = "fixed"></li>
                 <li key = "Film Name" onClick={() => {this.props.onTitle()}}><a className = "unsorted">Title-</a></li>
                 <li key = "Release Date" onClick={() => {this.props.onDate()}}><a className = "unsorted">Release Date-</a></li>
                 <li key = "Director" onClick={() => {this.props.onDirector()}}><a className = "unsorted">Director-</a></li>
                <li key = "box office" onClick={() => {this.props.onBoxOffice()}}><a className = "unsorted">Worldwide Box Office -</a></li>
                 <li key = "domestic box office" onClick={() => {this.props.onDomesticBoxOffice()}}><a className = "unsorted">Domestic Box Office -</a></li>
                 <li key = "international box office" onClick={() => {this.props.onInternationalBoxOffice()}}><a className = "unsorted">International Box Office -</a></li>
                    <li key = "RT" onClick={() => {this.props.onRT()}}><a className = "unsorted">Rotten Tomatoes% -</a></li>
                   <li key = "RT average" onClick={() => {this.props.onRTAverage()}}><a className = 'ascending'>RT Avg. Score</a></li>
                 <li key = "metacritic" onClick={() => {this.props.onMetacritic()}}><a className = "ascending">MetaCritic</a><p><i className="arrow up"></i></p></li>

                </ul></li>
            }
            else if (this.props.metacriticState === "Descending") {
              return <li><ul className = 'movie header'>
                <li key = "poster headline" className = "fixed"></li>
                 <li key = "Film Name" onClick={() => {this.props.onTitle()}}><a className = "unsorted">Title-</a></li>
                 <li key = "Release Date" onClick={() => {this.props.onDate()}}><a className = "unsorted">Release Date-</a></li>
                  <li key = "Director" onClick={() => {this.props.onDirector()}}><a className = "unsorted">Director-</a></li>
                <li key = "box office" onClick={() => {this.props.onBoxOffice()}}><a className = "unsorted">Worldwide Box Office -</a></li>
                 <li key = "domestic box office" onClick={() => {this.props.onDomesticBoxOffice()}}><a className = "unsorted">Domestic Box Office -</a></li>
                 <li key = "international box office" onClick={() => {this.props.onInternationalBoxOffice()}}><a className = "unsorted">International Box Office -</a></li>
                    <li key = "RT" onClick={() => {this.props.onRT()}}><a className = "unsorted">Rotten Tomatoes% -</a></li>
                   <li key = "RT average" onClick={() => {this.props.onRTAverage()}}><a className = 'ascending'>RT Avg. Score</a></li>
                 <li key = "metacritic" onClick={() => {this.props.onMetacritic()}}><a className = "ascending">MetaCritic</a><p><i className="arrow down"></i></p></li>

                </ul></li>
            }
             else if (this.props.titleState === "Descending") {
              return <li><ul className = 'movie header'>
                <li key = "poster headline" className = "fixed"></li>
                 <li key = "Film Name" onClick={() => {this.props.onTitle()}}><a className = "ascending">Title</a><p><i className="arrow down"></i></p></li>
                 <li key = "Release Date" onClick={() => {this.props.onDate()}}><a className = "unsorted">Release Date-</a></li>
                  <li key = "Director" onClick={() => {this.props.onDirector()}}><a className = "unsorted">Director-</a></li>
                <li key = "box office" onClick={() => {this.props.onBoxOffice()}}><a className = "unsorted">Worldwide Box Office -</a></li>
                 <li key = "domestic box office" onClick={() => {this.props.onDomesticBoxOffice()}}><a className = "unsorted">Domestic Box Office -</a></li>
                 <li key = "international box office" onClick={() => {this.props.onInternationalBoxOffice()}}><a className = "unsorted">International Box Office -</a></li>
                    <li key = "RT" onClick={() => {this.props.onRT()}}><a className = "unsorted">Rotten Tomatoes% -</a></li>
                   <li key = "RT average" onClick={() => {this.props.onRTAverage()}}><a className = 'unsorted'>RT Avg. Score</a></li>
                 <li key = "metacritic" onClick={() => {this.props.onMetacritic()}}><a className = "unsorted">MetaCritic</a></li>

                </ul></li>
            }
              else if (this.props.titleState === "Ascending") {
              return <li><ul className = 'movie header'>
                <li key = "poster headline" className = "fixed"></li>
                 <li key = "Film Name" onClick={() => {this.props.onTitle()}}><a className = "ascending">Title</a><p><i className="arrow up"></i></p></li>
                 <li key = "Release Date" onClick={() => {this.props.onDate()}}><a className = "unsorted">Release Date-</a></li>
                  <li key = "Director" onClick={() => {this.props.onDirector()}}><a className = "unsorted">Director-</a></li>
                <li key = "box office" onClick={() => {this.props.onBoxOffice()}}><a className = "unsorted">Worldwide Box Office -</a></li>
                 <li key = "domestic box office" onClick={() => {this.props.onDomesticBoxOffice()}}><a className = "unsorted">Domestic Box Office -</a></li>
                 <li key = "international box office" onClick={() => {this.props.onInternationalBoxOffice()}}><a className = "unsorted">International Box Office -</a></li>
                    <li key = "RT" onClick={() => {this.props.onRT()}}><a className = "unsorted">Rotten Tomatoes% -</a></li>
                   <li key = "RT average" onClick={() => {this.props.onRTAverage()}}><a className = 'unsorted'>RT Avg. Score</a></li>
                 <li key = "metacritic" onClick={() => {this.props.onMetacritic()}}><a className = "unsorted">MetaCritic</a></li>

                </ul></li>
                }
                 else if (this.props.directorState === "Ascending") {
              return <li><ul className = 'movie header'>
                <li key = "poster headline" className = "fixed"></li>
                 <li key = "Film Name" onClick={() => {this.props.onTitle()}}><a className = "unsorted">Title</a></li>
                 <li key = "Release Date" onClick={() => {this.props.onDate()}}><a className = "unsorted">Release Date-</a></li>
                  <li key = "Director" onClick={() => {this.props.onDirector()}}><a className = "ascending">Director-</a><p><i className="arrow up"></i></p></li>
                <li key = "box office" onClick={() => {this.props.onBoxOffice()}}><a className = "unsorted">Worldwide Box Office -</a></li>
                 <li key = "domestic box office" onClick={() => {this.props.onDomesticBoxOffice()}}><a className = "unsorted">Domestic Box Office -</a></li>
                 <li key = "international box office" onClick={() => {this.props.onInternationalBoxOffice()}}><a className = "unsorted">International Box Office -</a></li>
                    <li key = "RT" onClick={() => {this.props.onRT()}}><a className = "unsorted">Rotten Tomatoes% -</a></li>
                   <li key = "RT average" onClick={() => {this.props.onRTAverage()}}><a className = 'unsorted'>RT Avg. Score</a></li>
                 <li key = "metacritic" onClick={() => {this.props.onMetacritic()}}><a className = "unsorted">MetaCritic</a></li>

                </ul></li>
                }
                 else if (this.props.directorState === "Descending") {
              return <li><ul className = 'movie header'>
                <li key = "poster headline" className = "fixed"></li>
                 <li key = "Film Name" onClick={() => {this.props.onTitle()}}><a className = "unsorted">Title</a></li>
                 <li key = "Release Date" onClick={() => {this.props.onDate()}}><a className = "unsorted">Release Date-</a></li>
                  <li key = "Director" onClick={() => {this.props.onDirector()}}><a className = "ascending">Director-</a><p><i className="arrow down"></i></p></li>
                <li key = "box office" onClick={() => {this.props.onBoxOffice()}}><a className = "unsorted">Worldwide Box Office -</a></li>
                 <li key = "domestic box office" onClick={() => {this.props.onDomesticBoxOffice()}}><a className = "unsorted">Domestic Box Office -</a></li>
                 <li key = "international box office" onClick={() => {this.props.onInternationalBoxOffice()}}><a className = "unsorted">International Box Office -</a></li>
                    <li key = "RT" onClick={() => {this.props.onRT()}}><a className = "unsorted">Rotten Tomatoes% -</a></li>
                   <li key = "RT average" onClick={() => {this.props.onRTAverage()}}><a className = 'unsorted'>RT Avg. Score</a></li>
                 <li key = "metacritic" onClick={() => {this.props.onMetacritic()}}><a className = "unsorted">MetaCritic</a></li>

                </ul></li>
                }
                else if (this.props.dateState === "Descending") {
              return <li><ul className = 'movie header'>
                <li key = "poster headline" className = "fixed"></li>
                 <li key = "Film Name" onClick={() => {this.props.onTitle()}}><a className = "unsorted">Title</a></li>
                 <li key = "Release Date" onClick={() => {this.props.onDate()}}><a className = "ascending">Release Date-</a><p><i className="arrow down"></i></p></li>
                  <li key = "Director" onClick={() => {this.props.onDirector()}}><a className = "unsorted">Director-</a></li>
                <li key = "box office" onClick={() => {this.props.onBoxOffice()}}><a className = "unsorted">Worldwide Box Office -</a></li>
                 <li key = "domestic box office" onClick={() => {this.props.onDomesticBoxOffice()}}><a className = "unsorted">Domestic Box Office -</a></li>
                 <li key = "international box office" onClick={() => {this.props.onInternationalBoxOffice()}}><a className = "unsorted">International Box Office -</a></li>
                    <li key = "RT" onClick={() => {this.props.onRT()}}><a className = "unsorted">Rotten Tomatoes% -</a></li>
                   <li key = "RT average" onClick={() => {this.props.onRTAverage()}}><a className = 'unsorted'>RT Avg. Score</a></li>
                 <li key = "metacritic" onClick={() => {this.props.onMetacritic()}}><a className = "unsorted">MetaCritic</a></li>

                </ul></li>
                }
                else if (this.props.dateState === "Ascending") {
              return <li><ul className = 'movie header'>
                <li key = "poster headline" className = "fixed"></li>
                 <li key = "Film Name" onClick={() => {this.props.onTitle()}}><a className = "unsorted">Title</a></li>
                 <li key = "Release Date" onClick={() => {this.props.onDate()}}><a className = "ascending">Release Date-</a><p><i className="arrow up"></i></p></li>
                  <li key = "Director" onClick={() => {this.props.onDirector()}}><a className = "unsorted">Director-</a></li>
                <li key = "box office" onClick={() => {this.props.onBoxOffice()}}><a className = "unsorted">Worldwide Box Office -</a></li>
                 <li key = "domestic box office" onClick={() => {this.props.onDomesticBoxOffice()}}><a className = "unsorted">Domestic Box Office -</a></li>
                 <li key = "international box office" onClick={() => {this.props.onInternationalBoxOffice()}}><a className = "unsorted">International Box Office -</a></li>
                    <li key = "RT" onClick={() => {this.props.onRT()}}><a className = "unsorted">Rotten Tomatoes% -</a></li>
                   <li key = "RT average" onClick={() => {this.props.onRTAverage()}}><a className = 'unsorted'>RT Avg. Score</a></li>
                 <li key = "metacritic" onClick={() => {this.props.onMetacritic()}}><a className = "unsorted">MetaCritic</a></li>

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