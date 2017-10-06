import React from 'react';
import ReactDOM from 'react-dom';

import { Gmap, apiLoader, Marker } from 'dist/lib';
import config from './config';
import './index.styl';


class Test extends React.Component{
    constructor(props){
        super(props);
        console.log(1);

        this.state = {
            counter:0,
        };

        this.increase = this.increase.bind(this);
        window.test = this;
    }
    increase(){
        this.setState({
            counter:this.state.counter+1
        });
        console.log(123);
    }
    componentDidMount(){
        console.log(3);
    }
    render(){
        return <div style={{height:'50px',background:'red'}}
                    onClick={this.increase}
                    ref={(div)=>{this.el = div;}}>
            {this.state.counter}</div>;
    }
}


class App extends React.Component{
    constructor(props){
        super(props);

        this.mapConfig = {
            center:{
                lat:40.714,
                lng:-74.005
            },
            zoom: 8
        };

        this.state = {
            mapReady:false
        };

        apiLoader(config.key)
            .then(()=>{
                this.setState({
                    mapReady:true
                });
                console.log('ready');
            });

    }
    render(){
        return (
            this.state.mapReady?(
                <div>
                    <Gmap className="map"
                          autoVp="fit"
                          mapConfig={this.mapConfig}
                          ibConfig={config.infoBubble}>
                        <Marker lat={41.714} lng={-73.005} iconConfig={null} openOne>
                            <h2>Hello React!!!</h2>
                            <Test></Test>
                        </Marker>
                        <Marker lat={40.714} lng={-72.005} iconConfig={null} openOne/>
                        <Marker lat={40.714} lng={-74.005} iconConfig={null} openOne/>
                    </Gmap>

                </div>

            ):null
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);

let div = document.createElement('div');
ReactDOM.render(
    <Test></Test>,
    div
);
document.body.appendChild(div);

