import React, { Component } from 'react';
import firebase from './config/fire';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SongTile from './SongTile';
import Navi from './Navi';

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
            artist: '',
            searchText: ''
        }
        this.artist_songs = []
        this.songs = [
            {song_name: 'Adada Mazhaida',   song_artist : 'Yuvan Shankar Raja', song_data: song0},
            {song_name: 'En Kadhal Solla',  song_artist : 'Yuvan Shankar Raja', song_data: song1},
            {song_name: 'Poongatre',        song_artist : 'Yuvan Shankar Raja', song_data: song2},
            {song_name: 'Suthudhe Bhoomi',  song_artist : 'Yuvan Shankar Raja', song_data: song3},
            {song_name: 'Thuli Thuli',      song_artist : 'Yuvan Shankar Raja', song_data: song4},
            {song_name: 'Yedho Ondru',      song_artist : 'Yuvan Shankar Raja', song_data: song5},
            {song_name: 'Chumma Kizhi',      song_artist : 'Anirudh',           song_data: song6},
            {song_name: 'Nenjae Yezhu',      song_artist : 'A.R.Rahman',        song_data: song7},
            {song_name: 'Ey Sandakaara',      song_artist : 'Santhosh Narayanan', song_data: song8},
            {song_name: 'Blood Bath',      song_artist : 'G.V.Prakash',         song_data: song9},
        ]
        
        this.unique = [];
        this.distinct = [];
            for( let i = 0; i < this.songs.length; i++ ){
                if( !this.unique[this.songs[i].song_artist]){
                  this.distinct.push(this.songs[i].song_artist);
                  this.unique[this.songs[i].song_artist] = 1;
                }
              }
              

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
        // console.log(this.artist_songs)
    }

    select(item){
        this.setState({menu:item});
        // console.log(this.state.menu);
            
        
    }

    render() {
     
        const songs = this.songs;
        const searchText = this.state.searchText;

        const filteredSongs = songs.filter(song => song.song_name.toLowerCase().includes(searchText.toLowerCase()));
            if(this.state.menu == "Home")
            {
            return (
            <div>
                <Navi buttonClick={this.select.bind(this)}/>    
                <div className="artist-page">   
                        <Row className="p-1">
                        <Col lg='4'></Col>
                        <Col lg='4'>
                            <div className="text-center">
                                <input 
                                    className="form-control"
                                    type="search" 
                                    placeholder="Search Songs"
                                    onChange={e => this.setState({ searchText:e.target.value })}>    
                                </input>
                            </div>
                        </Col>
                        <Col lg='4'></Col>
                        </Row>
                                {filteredSongs.map((value,index) => {
                                        return (
                                            <div key={value.song_name}>
                                            <SongTile 
                                                        song_name={value.song_name} 
                                                        song_artist={value.song_artist}
                                                        song_data={value.song_data} 
                                                        id={index} />
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
                <Navi buttonClick={this.select.bind(this)}/>
            </div>

            <div className="artist-page">
                    <h2 className="">Artists</h2>   
                                {this.distinct.map((value,index) => {
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
                    <Navi buttonClick={this.select.bind(this)}/>
                </div>
    
                <div className="artist-page">
                        <h2 className="">Artists</h2>   
                                    {this.distinct.map((value,index) => {
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