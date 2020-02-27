import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';

class SongTile extends Component {
    constructor(props) {
        super(props);
        this.playAudio = this.playAudio.bind(this);
        this.pauseAudio = this.pauseAudio.bind(this);
        
        this.state
        = { 
             min: 0 ,
             sec: 0 ,
             current: 0,
         }; 
    }

    playAudio() {

        var audioEl = document.getElementsByClassName("audio-element")[this.props.id];
        console.log(audioEl);
        audioEl.play();
        this.setState({min: parseInt(audioEl.duration/60), sec: parseInt(audioEl.duration%60),  }) ;
        console.log();
        setInterval(() => this.setState({current: parseInt(audioEl.currentTime)}),1000);
    }

    pauseAudio() {
        var audioEl = document.getElementsByClassName("audio-element")[this.props.id];
        audioEl.pause()
    }


    render()
    {
        return(
            <div className="btnGroup"> 
            <audio className="audio-element">
                    <source src={this.props.name}></source>
            </audio>

            <div className="row timer">
                <div className="col-12 p-1">
                    <label className="duration" id="duration"> 00:{this.state.current} - {this.state.min}:{this.state.sec}</label>
                </div>
            </div>

            <div className="row ">
                <div className="col-6 p-1">
                    <button id="play" className="btn-lg btn-block btn-primary" onClick={this.playAudio}>
                        <i  id="playIcon" className="fa fa-play"></i>
                    </button>
                </div>
                <div className="col-6 p-1">
                    <button id="pause" className="btn-lg btn-warning btn-block" onClick={this.pauseAudio}>
                            <i className="fa fa-pause"></i>
                    </button>
                </div>
            </div>
        </div>
        
        )
    }
}

export default SongTile;