var wms_layers = [];


        var lyr_ESRIWorldTopo_0 = new ol.layer.Tile({
            'title': 'ESRI World Topo',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Trails_1 = new ol.format.GeoJSON();
var features_Trails_1 = format_Trails_1.readFeatures(json_Trails_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trails_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trails_1.addFeatures(features_Trails_1);
var lyr_Trails_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trails_1, 
                style: style_Trails_1,
                popuplayertitle: 'Trails',
                interactive: true,
    title: 'Trails<br />\
    <img src="styles/legend/Trails_1_0.png" /> Allamuchy Pond Trail<br />\
    <img src="styles/legend/Trails_1_1.png" /> Barberry Trail<br />\
    <img src="styles/legend/Trails_1_2.png" /> Birch Trail<br />\
    <img src="styles/legend/Trails_1_3.png" /> Blue Rock Loop Trail<br />\
    <img src="styles/legend/Trails_1_4.png" /> BSA<br />\
    <img src="styles/legend/Trails_1_5.png" /> BSA Connector<br />\
    <img src="styles/legend/Trails_1_6.png" /> Byram Trail (Gray)<br />\
    <img src="styles/legend/Trails_1_7.png" /> Canal Connector<br />\
    <img src="styles/legend/Trails_1_8.png" /> Candy Ass<br />\
    <img src="styles/legend/Trails_1_9.png" /> Connector<br />\
    <img src="styles/legend/Trails_1_10.png" /> Connector Trail<br />\
    <img src="styles/legend/Trails_1_11.png" /> Continental Drive Trail<br />\
    <img src="styles/legend/Trails_1_12.png" /> Deer Path Trail<br />\
    <img src="styles/legend/Trails_1_13.png" /> Ditch/Cardiac Bypass<br />\
    <img src="styles/legend/Trails_1_14.png" /> Ditch/Cardiac Trail<br />\
    <img src="styles/legend/Trails_1_15.png" /> Earthworm<br />\
    <img src="styles/legend/Trails_1_16.png" /> Eberling Memorial<br />\
    <img src="styles/legend/Trails_1_17.png" /> Friggin Middle<br />\
    <img src="styles/legend/Trails_1_18.png" /> Highlands Trail<br />\
    <img src="styles/legend/Trails_1_19.png" /> Highlands Trail (Teal)<br />\
    <img src="styles/legend/Trails_1_20.png" /> Ice Cream<br />\
    <img src="styles/legend/Trails_1_21.png" /> Incline Plane Parallel<br />\
    <img src="styles/legend/Trails_1_22.png" /> Iron Mine Trail<br />\
    <img src="styles/legend/Trails_1_23.png" /> Jefferson Lake Bike Path (Green)<br />\
    <img src="styles/legend/Trails_1_24.png" /> Lake View Trail<br />\
    <img src="styles/legend/Trails_1_25.png" /> Lake View/Deer Path Trail<br />\
    <img src="styles/legend/Trails_1_26.png" /> Lumpy Bumpy<br />\
    <img src="styles/legend/Trails_1_27.png" /> Morris Canal<br />\
    <img src="styles/legend/Trails_1_28.png" /> Morris Canal Connector<br />\
    <img src="styles/legend/Trails_1_29.png" /> Morris Canal Greenway<br />\
    <img src="styles/legend/Trails_1_30.png" /> Morris Canal Greenway/Highlands Trail<br />\
    <img src="styles/legend/Trails_1_31.png" /> Pebble Trail<br />\
    <img src="styles/legend/Trails_1_32.png" /> Pebble/Waterloo-517 Trail<br />\
    <img src="styles/legend/Trails_1_33.png" /> Ranger Trail<br />\
    <img src="styles/legend/Trails_1_34.png" /> Ranger/Highlands Trail<br />\
    <img src="styles/legend/Trails_1_35.png" /> Rogue<br />\
    <img src="styles/legend/Trails_1_36.png" /> Rollie Pollie<br />\
    <img src="styles/legend/Trails_1_37.png" /> Rt 80 Tunnel<br />\
    <img src="styles/legend/Trails_1_38.png" /> Sheila Trail<br />\
    <img src="styles/legend/Trails_1_39.png" /> Sussex Branch Trail<br />\
    <img src="styles/legend/Trails_1_40.png" /> Switchback Trail<br />\
    <img src="styles/legend/Trails_1_41.png" /> Tilcon Lake Trail<br />\
    <img src="styles/legend/Trails_1_42.png" /> Unblazed<br />\
    <img src="styles/legend/Trails_1_43.png" /> Waterloo North Trail<br />\
    <img src="styles/legend/Trails_1_44.png" /> Waterloo South Trail<br />\
    <img src="styles/legend/Trails_1_45.png" /> Waterloo-517 Trail<br />\
    <img src="styles/legend/Trails_1_46.png" /> Waving Willie Cutoff<br />\
    <img src="styles/legend/Trails_1_47.png" /> Waving Willie Trail<br />\
    <img src="styles/legend/Trails_1_48.png" /> Waving Willie/Waterloo-517 Trail<br />\
    <img src="styles/legend/Trails_1_49.png" /> White ("Waterloo Trail")<br />\
    <img src="styles/legend/Trails_1_50.png" /> White Trail<br />\
    <img src="styles/legend/Trails_1_51.png" /> <br />' });
var format_Places_2 = new ol.format.GeoJSON();
var features_Places_2 = format_Places_2.readFeatures(json_Places_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Places_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Places_2.addFeatures(features_Places_2);
var lyr_Places_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Places_2, 
                style: style_Places_2,
                popuplayertitle: 'Places',
                interactive: false,
    title: 'Places<br />\
    <img src="styles/legend/Places_2_0.png" /> Parking<br />' });

lyr_ESRIWorldTopo_0.setVisible(true);lyr_Trails_1.setVisible(true);lyr_Places_2.setVisible(true);
var layersList = [lyr_ESRIWorldTopo_0,lyr_Trails_1,lyr_Places_2];
lyr_Trails_1.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'Name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', 'length': 'length', 'length_2': 'length_2', 'length_mi': 'Length (mi)', });
lyr_Places_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Trails_1.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', 'length': 'TextEdit', 'length_2': 'TextEdit', 'length_mi': 'TextEdit', });
lyr_Places_2.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_Trails_1.set('fieldLabels', {'osm_id': 'hidden field', 'code': 'hidden field', 'fclass': 'hidden field', 'name': 'inline label - always visible', 'ref': 'hidden field', 'oneway': 'hidden field', 'maxspeed': 'hidden field', 'layer': 'hidden field', 'bridge': 'hidden field', 'tunnel': 'hidden field', 'length': 'hidden field', 'length_2': 'hidden field', 'length_mi': 'inline label - always visible', });
lyr_Places_2.set('fieldLabels', {'id': 'hidden field', 'Name': 'no label', });
lyr_Places_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});