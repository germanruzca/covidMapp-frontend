import React, { memo, useMemo, useState } from 'react';
import {
  AzureMap,
  AzureMapDataSourceProvider,
  AzureMapFeature,
  AzureMapHtmlMarker,
  AzureMapLayerProvider,
  AzureMapsProvider,
  IAzureDataSourceChildren,
  IAzureMapFeature,
  IAzureMapHtmlMarkerEvent,
  IAzureMapLayerType,
  IAzureMapOptions,
} from 'react-azure-maps';
import { AuthenticationType, data, HtmlMarkerOptions, SymbolLayerOptions } from 'azure-maps-control';

const ubicacionUsuario = new data.Position(-100.01, 45.01);


// const renderPoint = (coordinates: data.Position): IAzureMapFeature => {
//   const rendId = Math.random();

//   return (
//     <AzureMapFeature
//       key={rendId}
//       id={rendId.toString()}
//       type="Point"
//       coordinate={coordinates}
//       properties={{
//         title: 'Pin',
//         icon: 'pin-round-blue',
//       }}
//     />
//   );
// };


// const MarkersExample= = () => {
//   const [markers, setMarkers] = useState([point1, point2, point3]);
//   const [htmlMarkers, setHtmlMarkers] = useState([point4]);
//   const [markersLayer] = useState<IAzureMapLayerType>('SymbolLayer');
//   const [layerOptions, setLayerOptions] = useState<SymbolLayerOptions>(memoizedOptions);

//   const option: IAzureMapOptions = useMemo(() => {
//     return {
//       authOptions: {
//         authType: AuthenticationType.subscriptionKey,
//         subscriptionKey: key,
//       },
//       center: [-100.01, 45.01],
//       zoom: 2,
//       view: 'Auto',
//     };
//   }, []);

//   return (
//     <AzureMapsProvider>
//         <div style={styles.map}>
//           <AzureMap options={option}>
//             <AzureMapDataSourceProvider>
//             </AzureMapDataSourceProvider>
//           </AzureMap>
//         </div>
//       </AzureMapsProvider>
//   );

// }