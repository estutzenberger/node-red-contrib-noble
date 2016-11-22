    /*
     * Copyright (c) 2016. Paweł Kazimierowicz
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *     http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * NodeRed node supporting connection to BLE devices.
     *
     * @author <a href="mailto:public-contrib@kazimierowicz.eu">Paweł Kazimierowicz</a>
     *
     */
    module.exports = function(RED) {
        "use strict";

        var noble = require('noble');
        var os = require('os');

        // The main node definition - most things happen in here
        function NobleConnect(n) {
            // Create a RED node
            RED.nodes.createNode(this,n);
        }
        function connect(_peripherialUUID){
            node.warn("OK " + _peripherialUUID);
        }
        node.on('input', function (msg) {
            if (msg.hasOwnProperty("payload") && typeof msg.payload == "object" && msg.payload.hasOwnProperty("peripherialUuid")) {
                connect(peripherialUUID);
            }
            node.warn("Incorrect input, ignoring. See the documentation in the info tab. ");
        });
        RED.nodes.registerType("BLE Connect",NobleConnect);

    }
