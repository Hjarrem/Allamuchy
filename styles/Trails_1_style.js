var size = 0;
var placement = 'point';
function categories_Trails_1(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Allamuchy Pond Trail':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(38,184,39,1.0)', lineDash: [4.028,8.056], lineCap: 'round', lineJoin: 'round', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Barberry Trail':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(95,116,222,1.0)', lineDash: [4.028,8.056], lineCap: 'round', lineJoin: 'round', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Birch Trail':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(126,153,222,1.0)', lineDash: [4.028,8.056], lineCap: 'round', lineJoin: 'round', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Blue Rock Loop Trail':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(40,227,211,1.0)', lineDash: [4.028,8.056], lineCap: 'round', lineJoin: 'round', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'BSA':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(200,112,31,1.0)', lineDash: [4.028,8.056], lineCap: 'round', lineJoin: 'round', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'BSA Connector':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(218,66,43,1.0)', lineDash: [4.028,8.056], lineCap: 'round', lineJoin: 'round', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Byram Trail (Gray)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(222,130,191,1.0)', lineDash: [4.028,8.056], lineCap: 'round', lineJoin: 'round', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Canal Connector':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(215,92,51,1.0)', lineDash: [4.028,8.056], lineCap: 'round', lineJoin: 'round', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Candy Ass':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(220,125,71,1.0)', lineDash: [4.028,8.056], lineCap: 'round', lineJoin: 'round', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Connector':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(193,220,125,1.0)', lineDash: [4.028,8.056], lineCap: 'round', lineJoin: 'round', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Connector Trail':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(125,216,39,1.0)', lineDash: [4.028,8.056], lineCap: 'round', lineJoin: 'round', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Continental Drive Trail':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(80,224,111,1.0)', lineDash: [4.028,8.056], lineCap: 'round', lineJoin: 'round', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Deer Path Trail':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(145,42,236,1.0)', lineDash: [4.028,8.056], lineCap: 'round', lineJoin: 'round', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Ditch/Cardiac Bypass':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(227,46,40,1.0)', lineDash: [4.028,8.056], lineCap: 'round', lineJoin: 'round', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Ditch/Cardiac Trail':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(206,36,110,1.0)', lineDash: [4.028,8.056], lineCap: 'round', lineJoin: 'round', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Earthworm':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(217,193,76,1.0)', lineDash: [4.028,8.056], lineCap: 'round', lineJoin: 'round', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Eberling Memorial':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(66,135,204,1.0)', lineDash: [4.028,8.056], lineCap: 'round', lineJoin: 'round', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Friggin Middle':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(127,103,231,1.0)', lineDash: [4.028,8.056], lineCap: 'round', lineJoin: 'round', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Highlands Trail':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(71,206,50,1.0)', lineDash: [4.028,8.056], lineCap: 'round', lineJoin: 'round', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Highlands Trail (Teal)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(155,208,125,1.0)', lineDash: [4.028,8.056], lineCap: 'round', lineJoin: 'round', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Ice Cream':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(172,205,25,1.0)', lineDash: [4.028,8.056], lineCap: 'round', lineJoin: 'round', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Incline Plane Parallel':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(58,204,230,1.0)', lineDash: [4.028,8.056], lineCap: 'round', lineJoin: 'round', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Iron Mine Trail':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(99,216,177,1.0)', lineDash: [4.028,8.056], lineCap: 'round', lineJoin: 'round', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Jefferson Lake Bike Path (Green)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(119,227,168,1.0)', lineDash: [4.028,8.056], lineCap: 'round', lineJoin: 'round', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Lake View Trail':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(228,106,131,1.0)', lineDash: [4.028,8.056], lineCap: 'round', lineJoin: 'round', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Lake View/Deer Path Trail':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(233,114,207,1.0)', lineDash: [4.028,8.056], lineCap: 'round', lineJoin: 'round', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Lumpy Bumpy':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(203,216,17,1.0)', lineDash: [4.028,8.056], lineCap: 'round', lineJoin: 'round', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Morris Canal':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(82,142,238,1.0)', lineDash: [4.028,8.056], lineCap: 'round', lineJoin: 'round', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Morris Canal Connector':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(107,235,207,1.0)', lineDash: [4.028,8.056], lineCap: 'round', lineJoin: 'round', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Morris Canal Greenway':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(116,182,206,1.0)', lineDash: [4.028,8.056], lineCap: 'round', lineJoin: 'round', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Morris Canal Greenway/Highlands Trail':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(31,156,234,1.0)', lineDash: [4.028,8.056], lineCap: 'round', lineJoin: 'round', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Pebble Trail':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(46,234,240,1.0)', lineDash: [4.028,8.056], lineCap: 'round', lineJoin: 'round', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Pebble/Waterloo-517 Trail':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(211,97,133,1.0)', lineDash: [4.028,8.056], lineCap: 'round', lineJoin: 'round', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Ranger Trail':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(218,27,43,1.0)', lineDash: [4.028,8.056], lineCap: 'round', lineJoin: 'round', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Ranger/Highlands Trail':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(124,117,218,1.0)', lineDash: [4.028,8.056], lineCap: 'round', lineJoin: 'round', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Rogue':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(221,136,232,1.0)', lineDash: [4.028,8.056], lineCap: 'round', lineJoin: 'round', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Rollie Pollie':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(73,231,21,1.0)', lineDash: [4.028,8.056], lineCap: 'round', lineJoin: 'round', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Rt 80 Tunnel':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(152,109,213,1.0)', lineDash: [4.028,8.056], lineCap: 'round', lineJoin: 'round', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Sheila Trail':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(224,214,33,1.0)', lineDash: [4.028,8.056], lineCap: 'round', lineJoin: 'round', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Sussex Branch Trail':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(214,126,205,1.0)', lineDash: [4.028,8.056], lineCap: 'round', lineJoin: 'round', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Switchback Trail':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(177,235,90,1.0)', lineDash: [4.028,8.056], lineCap: 'round', lineJoin: 'round', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Tilcon Lake Trail':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(171,47,237,1.0)', lineDash: [4.028,8.056], lineCap: 'round', lineJoin: 'round', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Unblazed':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(202,127,15,1.0)', lineDash: [4.028,8.056], lineCap: 'round', lineJoin: 'round', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Waterloo North Trail':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(100,214,98,1.0)', lineDash: [4.028,8.056], lineCap: 'round', lineJoin: 'round', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Waterloo South Trail':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(138,96,237,1.0)', lineDash: [4.028,8.056], lineCap: 'round', lineJoin: 'round', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Waterloo-517 Trail':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(48,204,134,1.0)', lineDash: [4.028,8.056], lineCap: 'round', lineJoin: 'round', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Waving Willie Cutoff':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(239,211,142,1.0)', lineDash: [4.028,8.056], lineCap: 'round', lineJoin: 'round', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Waving Willie Trail':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(202,61,139,1.0)', lineDash: [4.028,8.056], lineCap: 'round', lineJoin: 'round', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Waving Willie/Waterloo-517 Trail':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(182,26,229,1.0)', lineDash: [4.028,8.056], lineCap: 'round', lineJoin: 'round', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'White ("Waterloo Trail")':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(33,227,52,1.0)', lineDash: [4.028,8.056], lineCap: 'round', lineJoin: 'round', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'White Trail':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(209,38,212,1.0)', lineDash: [4.028,8.056], lineCap: 'round', lineJoin: 'round', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(59,67,225,1.0)', lineDash: [4.028,8.056], lineCap: 'round', lineJoin: 'round', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Trails_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("name");
    var labelFont = "6.5px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 3.0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if (feature.get("name") !== null) {
        labelText = String(feature.get("name"));
    }
    
    var style = categories_Trails_1(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
