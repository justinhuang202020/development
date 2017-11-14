import React, { Component } from 'react';
import './App.css';
import FilteredList from './filteredList';



/*
    This list of produce that is passed into the FilteredList component.
    Notice that it is a list of javascript objects where {key: value}.
*/
const films = [
{id: 1, name: "Iron Man", release_year: 2008, phase: 1, hasIronMan: true, hasHulk: false, hasCaptainAmerica: false, hasThor:false, box_office: "$585,171,547", image: "http://i.ebayimg.com/00/s/NTAwWDMzOQ==/z/k1IAAOxycD9TVkwT/$_35.JPG?set_id=2"},
{id: 2, name: "The Incredible Hulk", release_year: 2008, phase: 1, hasIronMan: true, hasHulk: true, hasCaptainAmerica: false, hasThor: false, box_office:"$265,573,859", image: "https://i.pinimg.com/originals/ce/b4/dc/ceb4dc14d7a829d3bb8e4d1e71b73881.jpg"},
{id: 3, name: "Iron Man 2", release_year: 2010, phase: 1, hasIronMan: true, hasHulk: false, hasCaptainAmerica: false, hasThor: false, box_office: "$621,156,389", image: "http://ccmoviereviews.com/wp-content/uploads/2013/07/iron-man-2-final-movie-poster-high-resolution.jpg"},
{id: 4, name: "Thor", release_year: 2011, phase: 1, hasIronMan: false, hasHulk: false, hasCaptainAmerica: false, hasThor: true, box_office: "$449,326,618", image: "http://cdn.collider.com/wp-content/uploads/Thor-dom_1sht_fin.jpg"},
{id: 5, name: "Captain America: The First Avenger", release_year: 2011, phase: 1, hasIronMan: false, hasHulk: false, hasCaptainAmerica: false, hasThor: false, box_office: "$370,569,776", image: "https://vignette.wikia.nocookie.net/theavengersmovie/images/f/f8/Captain-america-the-first-avenger-movie-poster.jpg/revision/latest?cb=20131027045724"},
{id: 6, name: "The Avengers", release_year: 2012, phase: 1, hasIronMan: true, hasHulk: true, hasCaptainAmerica: true, hasThor: true, box_office: "$1,519,479,547", image: "https://vignette.wikia.nocookie.net/marvelheroes/images/9/98/Avengers-movie-poster-1.jpg/revision/latest?cb=20170713041606"},
{id: 7, name: "Iron Man 3", release_year: 2013, phase: 2, hasIronMan: true, hasHulk: false, hasCaptainAmerica: false, hasThor: false, box_office:"$1,215,392,272", image: "http://i.ebayimg.com/00/s/NTAwWDMzNA==/z/GWgAAOxySoJTVkwP/$_3.JPG?set_id=2"},
{id: 8, name: "Thor: The Dark World", release_year: 2013, phase: 2, hasIronMan: false, hasHulk: false, hasCaptainAmerica: false, hasThor: true, box_office: "$644,602,516", image: "http://cdn2-www.comingsoon.net/assets/uploads/1970/01/file_577914_thor-2-dark-world-poster.jpg"},
{id: 9, name: "Captain America: The Winter Soldier", release_year: 2014, phase: 2, hasIronMan: false, hasHulk: false, hasCaptainAmerica: true, hasThor: false, box_office: "$714,401,889", image: "http://cdn.collider.com/wp-content/uploads/captain-america-the-winter-soldier-poster-chris-evans.jpg"},
{id: 10, name: "Guaridans of the Galaxy", release_year: 2014, phase: 2, hasIronMan: false, hasHulk: false, hasCaptainAmerica: false, hasThor: false, box_office: "$771,051,335", image:"http://1.media.dorkly.cvcdn.com/26/95/18b149286ca6f2920e017bd5d2ffcbf5.jpg"},
{id: 11, name: "Avengers: Age of Ultron", release_year: 2015, phase: 2, hasIronMan: true, hasHulk: true, hasCaptainAmerica: true, hasThor: true, box_office: "$1,408,218,722", image: "https://images-na.ssl-images-amazon.com/images/I/719S7I-%2ByBL._SL1023_.jpg"},
{id: 12, name: "Ant-Man", release_year: 2015, phase: 2, hasIronMan: false, hasHulk: false, hasCaptainAmerica: false, hasThor: false, box_office: "$519,338,048", image: "http://static5.businessinsider.com/image/5579c5f4ecad04613449d053-1200-2000/cool-ant-man-poster.jpg"},
{id: 13, name: "Captain America: Civil War", release_year: 2016, phase: 3, hasIronMan: true, hasHulk: false, hasCaptainAmerica: true, hasThor: false, box_office: "$1,153,304,495", image:"https://vignette.wikia.nocookie.net/marvelmovies/images/3/37/Captain_America_Civil_War_teaser_1_promotional_poster.jpg/revision/latest?cb=20151125065709"},
{id: 14, name: "Doctor Strange", release_year: 2016, phase: 3, hasIronMan: false, hasHulk: false, hasCaptainAmerica: false, hasThor: false, box_office: "$677,541,920", image: "http://cdn2-www.superherohype.com/assets/uploads/gallery/doctor-strange-movie/doctorstrange4.jpg"},
{id: 15, name: "Guardians of the Galaxy: Vol 2", release_year: 2017, phase: 3, hasIronMan: false, hasHulk: false, hasCaptainAmerica: false, hasThor: false, box_office: "$860,477,263", image: "http://cdn.collider.com/wp-content/uploads/2017/03/guardians-of-the-galaxy-2-imax-poster.jpg"},
{id: 16, name: "Spiderman: Homecoming", release_year: 2017, phase: 3, hasIronMan: true, hasHulk: false, hasCaptainAmerica: false, hasThor: false, box_office: "$879,493,675", image: "https://www.halon.com/wp-content/uploads/2017/06/spider_man_poster.jpg"},
{id: 17, name: "Thor Ragnarok", release_year: 2017, phase: 3, hasIronMan: false, hasHulk: true, hasCaptainAmerica: false, hasThor: true, box_office: "$651,617,966", image: "http://assets1.ignimgs.com/2017/09/07/cr-krackle-thor-v2-lg-1504781223727_1280w.jpg"}

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