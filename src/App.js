import React, { Component } from 'react';
import './App.css';
import FilteredList from './filteredList';



/*
    This list of produce that is passed into the FilteredList component.
    Notice that it is a list of javascript objects where {key: value}.
*/
const films = [
{title:"Dunkirk", releasedate:"2017-07-21", budget: "$100,000,000", boxoffice: "$525,045,546", international_boxoffice:"$337,000,000", domestic_boxoffice: "$188,045,546", metacritic:94, rt:92, rtaverage:8.6, director:"Christopher Nolan", image:"https://upload.wikimedia.org/wikipedia/en/1/15/Dunkirk_Film_poster.jpg"},
{title:"Memento", releasedate: "2001-03-16", budget:"$9,000,000", boxoffice:"$39,723,096", international_boxoffice:"$14,178,229", domestic_boxoffice: "$25,544,867", metacritic:85, rt:92, rtaverage:8.2, director:"Christopher Nolan", image: "http://l7.alamy.com/zooms/28d4e91dacd7422d87c0b1fb09ae787b/film-poster-memento-2000-bnpxrw.jpg"}, 
{title:"Inception", releasedate: "2010-07-16", budget:"$160,000,000", boxoffice:"$825,532,764", international_boxoffice:"$532,956,569", domestic_boxoffice: "$292,576,195", metacritic:74, rt:86, rtaverage:8.1, director:"Christopher Nolan", image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg"},
{title:"Jaws", releasedate: "1975-06-20", budget:"$160,000,000", boxoffice:"$470,653,009", international_boxoffice:"$210,653,009", domestic_boxoffice: "$260,000,000", metacritic:87, rt:97, rtaverage:9.2, director:"Steven Spielberg", image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMmVmODY1MzEtYTMwZC00MzNhLWFkNDMtZjAwM2EwODUxZTA5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY1200_CR76,0,630,1200_AL_.jpg"},
{title:"E.T.: The Extra Terrestrial", releasedate: "1982-06-22", budget:"$10,500,000", boxoffice:"$792,910,554", international_boxoffice:"$357,800,000", domestic_boxoffice: "$435,110,554", metacritic:91, rt:98, rtaverage:9.2, director:"Steven Spielberg", image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/E_t_the_extra_terrestrial_ver3.jpg/220px-E_t_the_extra_terrestrial_ver3.jpg"},
{title:"Jurassic Park", releasedate: "1993-06-11", budget:"$63,000,000", boxoffice:"$1,029,153,882", international_boxoffice:"$626,700,000", domestic_boxoffice: "$402,453,882", metacritic:68, rt:92, rtaverage:8.3, director:"Steven Spielberg", image: "https://images-na.ssl-images-amazon.com/images/I/61RLRZnbc%2BL._SY717_.jpg"},
{title:"Thor", releasedate: "2011-05-06", budget:"$150,000,000", boxoffice:"$449,326,618", international_boxoffice:"$268,295,994", domestic_boxoffice: "$181,030,624", metacritic:57, rt:77, rtaverage:6.7, director:"Kenneth Branagh", image: "https://i.pinimg.com/736x/a4/48/2b/a4482b264b82ffa25d836457553f1762--thor-dvd-superhero-movies.jpg"},
{title:"Hamlet(1996)", releasedate: "2011-05-06", budget:"$18,000,000", boxoffice:"$4,739,189", international_boxoffice:"$31,033", domestic_boxoffice: "$4,708,156", metacritic:"N/A", rt:95, rtaverage:8.1, director:"Kenneth Branagh", image: "https://www.movieposter.com/posters/archive/main/6/A70-3092"},
{title:"Cinderella", releasedate: "2015-03-13", budget:"$95,000,000", boxoffice:"$543,514,353", international_boxoffice:"$342,363,000", domestic_boxoffice: "$201,151,353", metacritic:67, rt:83, rtaverage:7.1, director:"Kenneth Branagh", image: "https://images-na.ssl-images-amazon.com/images/I/91q8P5pre-L._SY717_.jpg"},
{title:"Alien", releasedate: "1979-05-25", budget:"$11,000,000", boxoffice:"$104,931,801", international_boxoffice:"$24,000,000", domestic_boxoffice: "$80,931,801", metacritic:83, rt:97, rtaverage:9, director:"Ridley Scott", image: "https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2016/11/alien1979poster.jpg"},
{title:"Gladiator", releasedate: "2000-05-05", budget:"$103,000,000", boxoffice:"$457,640,427", international_boxoffice:"$269,935,000", domestic_boxoffice: "$187,705,427", metacritic:67, rt:76, rtaverage:7.2, director:"Ridley Scott", image: "https://www.movieposter.com/posters/archive/main/22/A70-11370"},
{title:"The Martian", releasedate: "2015-10-02", budget:"$108,000,000", boxoffice:"$630,161,890", international_boxoffice:"$401,728,227 ", domestic_boxoffice: "$228,433,663", metacritic:80, rt:91, rtaverage:7.8, director:"Ridley Scott", image: "https://images-na.ssl-images-amazon.com/images/I/A1%2BFw58qbDL._SY717_.jpg"},
];

class App extends Component {
    render() {
        return (
            <div className="App">
                {/* 
                  The list of produce will be passed into the FilteredList
                  component the items property.
                */}
                <FilteredList items={films} />
            </div>
        );
    }
}

export default App;