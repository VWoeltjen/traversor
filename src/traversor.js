// Thanks https://gist.github.com/tschaub/79025aef325cd2837364400a105405b8

import 'ol/ol.css';
import Map from 'ol/map';
import View from 'ol/view';
import TileLayer from 'ol/layer/tile';
import XYZ from 'ol/source/xyz';
import Projection from 'ol/proj/projection';
import ImageLayer from "ol/layer/image";
import ImageStatic from "ol/source/imagestatic";

class Traverse {
    constructor(element) {
        this.map = new Map({
            target: element,
            layers: [
            ],
            view: new View({
                projection: new Projection({
                    code: "none",
                    units: "m"
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
}

export default {
    run(element) {
        return new Traverse(element);
    }
};

