var wms_layers = [];


        var lyr_ESRIBasemap_0 = new ol.layer.Tile({
            'title': 'ESRI Basemap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Boundaries_1 = new ol.format.GeoJSON();
var features_Boundaries_1 = format_Boundaries_1.readFeatures(json_Boundaries_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Boundaries_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Boundaries_1.addFeatures(features_Boundaries_1);
var lyr_Boundaries_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Boundaries_1, 
                style: style_Boundaries_1,
                interactive: false,
                title: '<img src="styles/legend/Boundaries_1.png" /> Boundaries'
            });
var format_DistributionSites_2 = new ol.format.GeoJSON();
var features_DistributionSites_2 = format_DistributionSites_2.readFeatures(json_DistributionSites_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistributionSites_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistributionSites_2.addFeatures(features_DistributionSites_2);
var lyr_DistributionSites_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DistributionSites_2, 
                style: style_DistributionSites_2,
                interactive: true,
                title: '<img src="styles/legend/DistributionSites_2.png" /> Distribution Sites'
            });

lyr_ESRIBasemap_0.setVisible(true);lyr_Boundaries_1.setVisible(true);lyr_DistributionSites_2.setVisible(true);
var layersList = [lyr_ESRIBasemap_0,lyr_Boundaries_1,lyr_DistributionSites_2];
lyr_Boundaries_1.set('fieldAliases', {'GISJOIN': 'GISJOIN', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'COUSUBFP': 'COUSUBFP', 'COUSUBNS': 'COUSUBNS', 'GEOID': 'GEOID', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'CLASSFP': 'CLASSFP', 'MTFCC': 'MTFCC', 'CNECTAFP': 'CNECTAFP', 'NECTAFP': 'NECTAFP', 'NCTADVFP': 'NCTADVFP', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_DistributionSites_2.set('fieldAliases', {'x': 'x', 'y': 'y', 'Site': 'Distribution Site', '#_Unhoused': 'Number of Unhoused Clients Per Week', 'Distributi': 'Distribution Type', 'Site Type': 'Site Relation', 'Prepared F': 'Prepared Food', 'Non Food S': 'Non Food Supplies', 'Unhoused S': 'Unhoused Services', });
lyr_Boundaries_1.set('fieldImages', {'GISJOIN': 'TextEdit', 'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'COUSUBFP': 'TextEdit', 'COUSUBNS': 'TextEdit', 'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'NAMELSAD': 'TextEdit', 'LSAD': 'TextEdit', 'CLASSFP': 'TextEdit', 'MTFCC': 'TextEdit', 'CNECTAFP': 'TextEdit', 'NECTAFP': 'TextEdit', 'NCTADVFP': 'TextEdit', 'FUNCSTAT': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_DistributionSites_2.set('fieldImages', {'x': 'Hidden', 'y': 'Hidden', 'Site': 'TextEdit', '#_Unhoused': 'TextEdit', 'Distributi': 'TextEdit', 'Site Type': 'TextEdit', 'Prepared F': 'TextEdit', 'Non Food S': 'TextEdit', 'Unhoused S': 'TextEdit', });
lyr_Boundaries_1.set('fieldLabels', {'GISJOIN': 'header label', 'STATEFP': 'no label', 'COUNTYFP': 'no label', 'COUSUBFP': 'no label', 'COUSUBNS': 'no label', 'GEOID': 'no label', 'NAME': 'no label', 'NAMELSAD': 'header label', 'LSAD': 'no label', 'CLASSFP': 'no label', 'MTFCC': 'no label', 'CNECTAFP': 'no label', 'NECTAFP': 'no label', 'NCTADVFP': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_DistributionSites_2.set('fieldLabels', {'Site': 'header label', '#_Unhoused': 'header label', 'Distributi': 'header label', 'Site Type': 'header label', 'Prepared F': 'header label', 'Non Food S': 'header label', 'Unhoused S': 'header label', });
lyr_DistributionSites_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});