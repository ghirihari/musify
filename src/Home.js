import React, { Component } from 'react';
import firebase from './config/fire';
import firestore from 'firebase';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import SongTile from './SongTile';
import Artist from './artist';

import song0 from './audio/1.mp3';
import song1 from './audio/2.mp3';
import song2 from './audio/3.mp3';
import song3 from './audio/4.mp3';
import song4 from './audio/5.mp3';


class Home extends Component {
    constructor(props) {
        super(props);
       this.logout = this.logout.bind(this);
        this.select = this.select.bind(this);
        this.state = {
            click : 0,
            menu : 'Home',
            artist: ''

        }
        this.artist_songs = []
        this.songs = [
            {song_name: 'Adada Mazhaida',   song_artist : 'Yuvan Shankar Raja', song_data: song0},
            {song_name: 'En Kadhal Solla',  song_artist : 'Yuvan Shankar Raja', song_data: song1},
            {song_name: 'Poongatre',        song_artist : 'Yuvan Shankar Raja', song_data: song2},
            {song_name: 'Suthudhe Bhoomi',  song_artist : 'Anirudh',            song_data: song3},
            {song_name: 'Thuli Thuli',      song_artist : 'Anirudh',            song_data: song4},
        ]

    } 
    logout() {
        firebase.auth().signOut();
    }

    show(item) {
        if(!this.state.click)
        {
            this.setState({click:1});
        }else{
            this.setState({click:0});
        }
        this.artist_songs = []
       
        this.songs.map((value,index) => {
            if(value.song_artist == item)
                this.artist_songs.push(value);    
        })
        console.log(this.artist_songs)
    }

    select(item){
        this.setState({menu:item});
        // console.log(this.state.menu);
            
        
    }

    render() {
     
        var unique = [];
        var distinct = [];
            for( let i = 0; i < this.songs.length; i++ ){
                if( !unique[this.songs[i].song_artist]){
                  distinct.push(this.songs[i].song_artist);
                  unique[this.songs[i].song_artist] = 1;
                }
              }
            
            if(this.state.menu == "Home")
            {
            return (
            <div>
                <div>
                            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                            <Navbar.Brand >Musify</Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mr-auto">
                                <Nav.Link onClick={() => {this.select('Home')}}>Home</Nav.Link>
                                <Nav.Link onClick={() => {this.select('Artist')}}>Artists</Nav.Link>
                                </Nav>
                                <Nav>
                                <Nav.Link onClick={this.logout}>Logout</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                            </Navbar>
                    {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <button className="navbar-brand btn btn-link" href="#">Musify</button>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <button className="nav-link btn btn-link" onClick={() => {this.select('Home')}}>Home <span className="sr-only">(current)</span></button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link btn btn-link" onClick={() => {this.select('Artist')}}>Artists</button>
                            </li>
                        <li className="nav-item my-lg-0">
                            <button className="btn btn-dark btn-block" onClick={this.logout}>Logout</button>
                        </li>
                        </ul>
                        </div>
                        
                    </nav> */}
                </div>    
                <div className="artist-page">
                    <h2 className="text-center">Home</h2>   
                                {this.songs.map((value,index) => {
                                        return (
                                            <div className="row tile">   
                                                <div className="col-8">
                                                    <label className="songTitle">{value.song_name}</label><br></br>
                                                    <label className="songArtist">{value.song_artist}</label>
                                                </div>
                                                <div className="col-4">
                                                    <SongTile name={value.song_data} id={index} />
                                                </div>  
                                            </div>    
                                            )    
                                    })
                                }
                </div>
                </div>
        )
    }
    else if(this.state.click == 0)
         return(
            <div>
            <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                            <Navbar.Brand >Musify</Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mr-auto">
                                <Nav.Link onClick={() => {this.select('Home')}}>Home</Nav.Link>
                                <Nav.Link onClick={() => {this.select('Artist')}}>Artists</Nav.Link>
                                </Nav>
                                <Nav>
                                <Nav.Link onClick={this.logout}>Logout</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                            </Navbar>
            </div>

            <div className="artist-page">
                    <h2 className="">Artists</h2>   
                                {distinct.map((value,index) => {
                                    this.state.artist = value;
                                        return (
                                            <div className="row tile">   
                                                <div className="col-6">   
                                                    <button className="songArtist btn btn-link" 
                                                    onClick ={() => {this.show(value)}}>
                                                        {value}</button>
                                                    
                                                </div>

                                                <div className="col-6" id="new">   
                                                   
                                                </div>
                                            </div>    
                                            )
                                    }
                                )}
                    <div className="p-3">
                        
                    </div>
                </div>
            </div>
         )
         else
         {
            return(
                <div>
                <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                            <Navbar.Brand >Musify</Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mr-auto">
                                <Nav.Link onClick={() => {this.select('Home')}}>Home</Nav.Link>
                                <Nav.Link onClick={() => {this.select('Artist')}}>Artists</Nav.Link>
                                </Nav>
                                <Nav>
                                <Nav.Link onClick={this.logout}>Logout</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                            </Navbar>
                </div>
    
                <div className="artist-page">
                        <h2 className="">Artists</h2>   
                                    {distinct.map((value,index) => {
                                        this.state.artist = value;
                                            return (
                                                <div className="row tile">   
                                                    <div className="col-6">   
                                                        <button className="songArtist btn btn-link" 
                                                        onClick ={() => {this.show(value)}}>
                                                            {value}</button>
                                                        
                                                    </div>
    
                                                    <div className="col-6" id="new">   
                                                    {this.artist_songs.map((val,ind) => {
                                                        if(value == val.song_artist)
                                                            return (
                                                                <div className="row tile">   
                                                                    <div className="col-6">
                                                                        <label className="songTitle">{val.song_name}</label><br></br>
                                                                        <label className="songArtist">{val.song_artist}</label>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <SongTile name={val.song_data} id={ind} />
                                                                    </div>  
                                                                </div>    
                                                                )    
                                                        })
                                                    }
                                                    </div>
                                                </div>    
                                                )
                                        }
                                    )}
                        <div className="p-3">
                            
                        </div>
                    </div>
                </div>
             )
         }
    }

    }
export default Home;       