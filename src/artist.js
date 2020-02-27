import React, { Component } from 'react';
import firebase from './config/fire';


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