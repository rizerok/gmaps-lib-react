import gmaps from 'lib/lib';
import React from 'react';
import ReactDOM from 'react-dom';

import { Gmap, apiLoader, Marker } from 'lib/lib';
import config from './config';
import './style.styl';

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
                <Gmap className="map"
                    autoVp="fit"
                    mapConfig={this.mapConfig}
                    ibConfig={config.infoBuble}>
                    <Marker lat={41.714} lng={-73.005} iconConfig={null}/>
                    <Marker lat={40.714} lng={-72.005} iconConfig={null}/>
                    <Marker lat={40.714} lng={-74.005} iconConfig={null}/>
                </Gmap>
            ):null
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);