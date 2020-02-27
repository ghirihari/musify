import React, { Component } from 'react';
import firebase from './config/fire';
import firestore from 'firebase';

import SongTile from './SongTile';

import song0 from './audio/1.mp3';
import song1 from './audio/2.mp3';
import song2 from './audio/3.mp3';
import song3 from './audio/4.mp3';
import song4 from './audio/5.mp3';


class Artist extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
        this.songs = props.data;
        this.state = {
            menu : 'Home'
        }
    } 
         
   
    logout() {
        firebase.auth().signOut();
    }

    select(item){
        this.setState({menu:item});
        // console.log(this.state.menu);
            
        
    }


    render() {
        console.log(this.songs)

            return (
            <div>hi,{this.songs}</div>
                )
    }
}
export default Artist;       