import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import 'font-awesome/css/font-awesome.min.css';

class SongTile extends Component {
    constructor(props) {
        super(props);
        this.playAudio = this.playAudio.bind(this);
        
        this.state
        = { 
             min: 0 ,
             sec: 0 ,
             current: 0,
             playing: false,
             icon: 'fa fa-play',
             btnColor : 'btn-lg btn-block btn-primary',
         }; 
         this.audioEl = null;
    }

    componentDidMount() {
        this.audioEl = document.getElementsByClassName("audio-element")[this.props.id];
        console.log(this.audioEl.duration);
        
    }

    playAudio() {
        if(!this.state.playing)
        {
            this.audioEl.play();
            this.setState({playing:true})
            this.setState({icon:'fa fa-pause'}) 
            this.setState({btnColor:'btn-lg btn-block btn-warning'}) 
        }
        else{
            this.audioEl.pause();
            this.setState({playing:false})
            this.setState({icon:'fa fa-play'})
            this.setState({btnColor:'btn-lg btn-block btn-primary'})
        }
 
        this.setState({min: parseInt(this.audioEl.duration/60), sec: parseInt(this.audioEl.duration%60),  }) ;
        console.log();
        setInterval(() => this.setState({current: parseInt(this.audioEl.currentTime)}),1000);
    }

    render()
    {
        return(
            <div className="row tile">   
                <Col xs="5" lg="6">   
                    <label className="songTitle">{this.props.song_name}</label><br></br>
                    <label className="songArtist">{this.props.song_artist}</label>
                </Col>
                <Col xs="4" lg="4">     
                    <audio className="audio-element">
                            <source src={this.props.song_data}></source>
                    </audio>
                        <div className="timer">
                                <label className="duration" id="duration"> 00:{this.state.current} - {this.state.min}:{this.state.sec}</label>
                        </div>
                </Col>
                <Col xs="3" lg="2">
                            <div className=" p-1">
                                <button id="play" className={this.state.btnColor} onClick={this.playAudio}>
                                    <i  id="playIcon" className={this.state.icon}></i>
                                </button>
                        </div>
                </Col>
            </div>
        
        )
    }
}

export default SongTile;