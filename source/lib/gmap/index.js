import React from 'react';
import gmaps from 'gmaps-lib';
import Marker from '../marker';
// gmaps.apiLoader(config.key,config.libs)
//     .then(resp=>{
//
//         window.map = new gmaps.Map(node,{
//             center:{
//                 lat:40.714,
//                 lng:-74.005
//             },
//             zoom: 8
//         },config.infoBubble);
//
//         map.markerAdd([
//             {lat:41.714,lng:-73.005},
//             {lat:40.714,lng:-72.005},
//             {lat:40.714,lng:-74.005}
//         ],{
//             icon:config.icons.main
//         });
//
//         map.vpOnMarkers();
//
//         map.onChangeActiveMarker = (newIdx,oldIdx)=>{
//             let marker = map.markerList[newIdx];
//             map.ibOpenOne(marker,'b-map-info-window__shadow','content');
//         };
//     });


class Gmap extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            markers:[]
        };
    }
    componentDidMount(){
        this.map = new gmaps.Map(
            this.mapEl,
            this.props.mapConfig,
            this.props.ibConfig
        );

        const markers = this.props.children.map((c,i)=>{
            if(c.type===Marker){
                return React.cloneElement(
                    c,
                    {
                        ...c.props,
                        map:this.map,
                        key:i
                    }
                );
            }
            return c;
        });

        this.setState({
            markers
        });
    }
    componentDidUpdate(){
        if(this.props.autoVp==='fit'){
            this.map.vpOnMarkers();
        }
        if(this.props.autoVp==='center'){
            this.map.vpOnMarkers(false);
        }
        
    }
    render(){
        
        return (
            <div ref={(map) => { this.mapEl = map; }}
                 className={this.props.className}>
                {this.state.markers}
            </div>
        );
    }
}

export default Gmap;