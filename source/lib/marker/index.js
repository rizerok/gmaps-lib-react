import React from 'react';
import gmaps from 'gmaps-lib';

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


class Marker extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        this.props.map.markerAdd([{
            lat:this.props.lat,
            lng:this.props.lng
        }],{
            icon:this.props.iconConfig
        });
    }
    render(){
        return null;
    }
}

export default Marker;