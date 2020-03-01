import React, { Component } from 'react';
import firebase from './config/fire';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import SongTile from './SongTile';

import song0 from './audio/1.mp3';
import song1 from './audio/2.mp3';
import song2 from './audio/3.mp3';
import song3 from './audio/4.mp3';
import song4 from './audio/5.mp3';
import song5 from './audio/6.mp3';
import song6 from './audio/7.m4a';
import song7 from './audio/8.mp3';
import song8 from './audio/9.mp3';
import song9 from './audio/10.mp3';

class Home extends Component {
    constructor(props) {
        super(props);
       this.logout = this.logout.bind(this);
        this.select = this.select.bind(this);
        this.state = {
            song : null,
            click : 0,
            menu : 'Home',
            artist: ''

        }
        this.artist_songs = []
        this.songs = [
            {song_name: 'Adada Mazhaida',   song_artist : 'Yuvan Shankar Raja', song_data: song0},
            {song_name: 'En Kadhal Solla',  song_artist : 'Yuvan Shankar Raja', song_data: song1},
            {song_name: 'Poongatre',        song_artist : 'Yuvan Shankar Raja', song_data: song2},
            {song_name: 'Suthudhe Bhoomi',  song_artist : 'Yuvan Shankar Raja',            song_data: song3},
            {song_name: 'Thuli Thuli',      song_artist : 'Yuvan Shankar Raja',            song_data: song4},
            {song_name: 'Yedho Ondru',      song_artist : 'Yuvan Shankar Raja',            song_data: song5},
            {song_name: 'Chumma Kizhi',      song_artist : 'Anirudh',            song_data: song6},
            {song_name: 'Nenjae Yezhu',      song_artist : 'A.R.Rahman',            song_data: song7},
            {song_name: 'Ey Sandakaara',      song_artist : 'Santhosh Narayanan',            song_data: song8},
            {song_name: 'Blood Bath',      song_artist : 'G.V.Prakash',            song_data: song9},
        ]

    } 

    componentDidMount(){
        document.title = "Musify";
        fetch('https://jsonplaceholder.typicode.com/users')
        .then( data => data.json())
        .then( users => console.log(users));
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
                            <Navbar.Brand onClick={() => {this.select('Home')}}>Musify</Navbar.Brand>
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
                    <h2 className="text-left">Home</h2>   
                                {this.songs.map((value,index) => {
                                        return (
                                            <SongTile 
                                                        song_name={value.song_name} 
                                                        song_artist={value.song_artist}
                                                        song_data={value.song_data} 
                                                        id={index} />    
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
                            <Navbar.Brand onClick={() => {this.select('Home')}}>Musify</Navbar.Brand>
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
                                        return (
                                            <div className="row tile">   
                                                 <Col xs="12" lg="6">   
                                                    <button className="artist btn btn-link" 
                                                    onClick ={() => {this.show(value)}}>
                                                        {value}</button>
                                                    
                                                </Col>
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
                            <Navbar.Brand onClick={() => {this.select('Home')}}>Musify</Navbar.Brand>
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
                                            return (
                                                <div className="row tile">   
                                                    <Col xs="12" lg="2">   
                                                        <button className="artist btn btn-link" 
                                                        onClick ={() => {this.show(value)}}>
                                                            {value}</button>
                                                        
                                                    </Col>
    
                                                    <Col xs="12" lg="10">   
                                                    {this.artist_songs.map((val,ind) => {
                                                        if(value == val.song_artist)
                                                            return (
                                                                <SongTile 
                                                                    song_name={val.song_name} 
                                                                    song_artist={val.song_artist}
                                                                    song_data={val.song_data} 
                                                                    id={ind} />    
                                                        
                                                                )    
                                                        })
                                                    }
                                                    </Col>
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