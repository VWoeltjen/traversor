// Thanks https://gist.github.com/tschaub/79025aef325cd2837364400a105405b8

import 'ol/ol.css';
import Map from 'ol/map';
import View from 'ol/view';
import TileLayer from 'ol/layer/tile';
import XYZ from 'ol/source/xyz';
import Projection from 'ol/proj/projection';
import ImageLayer from 'ol/layer/image';
import VectorLayer from 'ol/layer/vector';
import ImageStatic from 'ol/source/imagestatic';
import Heatmap from 'ol/layer/heatmap';
import Collection from 'ol/collection';
import Vector from 'ol/source/vector';
import Feature from 'ol/feature';
import Point from 'ol/geom/point';
import LineString from 'ol/geom/linestring';

class Traverse {
    constructor(element) {
        this.map = new Map({
            target: element,
            layers: [
            ],
            view: new View({
                projection: new Projection({
                    code: "none",
                    units: "m",
                    extent: [-1000, -1000, 1000, 1000]
                }),
                center: [0, 0],
                zoom: 2
            })
        });
    }

    image(url, left, bottom, right, top) {
        this.map.addLayer(new ImageLayer({
            source: new ImageStatic({
                imageExtent: [left, bottom, right, top],
                url: url
            })
        }));
    }

    heatmap(coordinates, blur, radius) {
        this.map.addLayer(new Heatmap({
            source: new Vector({
                features: new Collection(coordinates.map((coordinate) => {
                    let feature = new Feature({
                        geometry: new Point(coordinate)
                    });
                    feature.set('weight', coordinate[2]);
                    return feature;
                }))
            }),
            blur: blur,
            radius: radius
        }));
    }

    line(coordinates) {
        this.map.addLayer(new VectorLayer({
            source: new Vector({
                features: new Collection([new Feature({
                    geometry: new LineString(coordinates.map((coordinate) => {
                        return new Point(coordinate);
                    }))
                })])
            })
        }));
    }
}

export default {
    run(element) {
        return new Traverse(element);
    }
};

