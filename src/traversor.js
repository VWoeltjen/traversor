// Thanks https://gist.github.com/tschaub/79025aef325cd2837364400a105405b8

import 'ol/ol.css';
import Map from 'ol/map';
import View from 'ol/view';
import TileLayer from 'ol/layer/tile';
import XYZ from 'ol/source/xyz';
import Projection from 'ol/proj/projection';

export default {
    run(element) {


        new Map({
            target: element,
            layers: [
                new TileLayer({
                    source: new XYZ({
                        url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    })
                })
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
};

