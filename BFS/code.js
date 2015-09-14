$(renderGraph); // on dom ready

function renderGraph() { // on dom ready
    var layoutPadding = 50;
    var layoutDuration = 500;
    var initialEle;
    var cy = cytoscape({
        container: document.getElementById('cy'),

        style: cytoscape.stylesheet()
            .selector('node')
            .css({
            'content': 'data(id)'
        })
            .selector('edge')
            .css({
            'target-arrow-shape': 'triangle',
                'width': 4,
                'line-color': '#ddd',
                'target-arrow-color': '#ddd'
        })
            .selector('.highlighted')
            .css({
            'background-color': '#61bffc',
                'line-color': '#61bffc',
                'target-arrow-color': '#61bffc',
                'transition-property': 'background-color, line-color, target-arrow-color',
                'transition-duration': '0.5s'
        }),

        elements: {
            nodes: [{
                data: {
                    id: 'Neutron',
                    level: 42
                }
            }, {
                data: {
                    id: 'neutron-server',
                    level: 4
                }
            }, {
                data: {
                    id: 'l3_agent_inst_1',
                    level: 4
                }
            }, {
                data: {
                    id: 'DHCP_agent_inst1',
                    level: 4
                }
            }, {
                data: {
                    id: 'METADATA_agent_inst1',
                    level: 4
                }
            }, {
                data: {
                    id: 'METADATA_PROXY_INST1',
                    level: 4
                }
            }, {
                data: {
                    id: 'NetronAPIServer',
                    level: 4
                }
            }, {
                data: {
                    id: 'VSWITCHAgent_inst1',
                    level: 4
                }
            }, {
                data: {
                    id: 'VSWITCHAgent_inst2',
                    level: 4
                }
            }, {
                data: {
                    id: 'VSWITCHAgent_inst3',
                    level: 4
                }
            }, {
                data: {
                    id: 'dsnmasq_inst1',
                    level: 4
                }
            }, {
                data: {
                    id: 'amq_server_inst_1',
                    level: 3
                }
            }, {
                data: {
                    id: 'mysql_server_inst_1',
                    level: 3
                }
            }, {
                data: {
                    id: 'n42-poweredge-5-n42-poweredge-5',
                    level: 3
                }
            }, {
                data: {
                    id: 'edge_1',
                    level: 3
                }
            }, {
                data: {
                    id: 'NUMBER_REQ_NEUTRON',
                    level: 3
                }
            }, {
                data: {
                    id: 'AVG_RESP_TIME_NEUTRON',
                    level: 3
                }
            }, {
                data: {
                    id: 'n42-poweredge-5-n42-poweredge-5',
                    level: 3
                }
            }, {
                data: {
                    id: 'QLEN',
                    level: 2
                }
            }, {
                data: {
                    id: 'L3_AGENT_QLENGTH',
                    level: 2
                }
            }, {
                data: {
                    id: 'DHCP_AGENT_QLENGTH',
                    level: 2
                }
            }, {
                data: {
                    id: 'DHCP_AGENT_QLENGTH',
                    level: 2
                }
            }, {
                data: {
                    id: 'METADATA_AGENTN_QLENGTH',
                    level: 2
                }
            }, {
                data: {
                    id: 'DSNMASQ_AGENT_QLENGTH',
                    level: 2
                }
            }, {
                data: {
                    id: 'NEUTRON_SERVER_QLEN',
                    level: 2
                }
            }, {
                data: {
                    id: 'pc_cpu_wait_io',
                    level: 2
                }
            }, {
                data: {
                    id: 'num_unint_processes',
                    level: 2
                }
            }, {
                data: {
                    id: 'disk_block_in_out',
                    level: 2
                }
            }, {
                data: {
                    id: 'pc_cpu_compute',
                    level: 2
                }
            }, {
                data: {
                    id: 'load_avg_compute',
                    level: 2
                }
            }, {
                data: {
                    id: 'buffer_cach_free_mem',
                    level: 2
                }
            }, {
                data: {
                    id: 'swap_in_swap_out',
                    level: 2
                }
            }],

            edges: [{
                data: {
                    id: 'ae',
                    weight: 500,
                    source: 'Neutron',
                    target: 'neutron-server'
                }
            }, {
                data: {
                    id: 'ab',
                    weight: 400,
                    source: 'Neutron',
                    target: 'l3_agent_inst_1'
                }
            }, {
                data: {
                    id: 'be',
                    weight: 400,
                    source: 'Neutron',
                    target: 'DHCP_agent_inst1'
                }
            }, {
                data: {
                    id: 'bc',
                    weight: 500,
                    source: 'Neutron',
                    target: 'METADATA_agent_inst1'
                }
            }, {
                data: {
                    id: 'ce',
                    weight: 600,
                    source: 'Neutron',
                    target: 'METADATA_PROXY_INST1'
                }
            }, {
                data: {
                    id: 'cd',
                    weight: 200,
                    source: 'Neutron',
                    target: 'NetronAPIServer'
                }
            }, {
                data: {
                    id: 'de',
                    weight: 700,
                    source: 'Neutron',
                    target: 'VSWITCHAgent_inst1'
                }
            }, {
                data: {
                    id: 'dk',
                    weight: 700,
                    source: 'Neutron',
                    target: 'VSWITCHAgent_inst2'
                }
            }, {
                data: {
                    id: 'dl',
                    weight: 700,
                    source: 'Neutron',
                    target: 'VSWITCHAgent_inst3'
                }
            }, {
                data: {
                    id: 'du',
                    weight: 700,
                    source: 'Neutron',
                    target: 'dsnmasq_inst1'
                }
            }, {
                data: {
                    id: 'gh',
                    source: 'neutron-server',
                    target: 'amq_server_inst_1'
                }
            }, {
                data: {
                    id: 'gha',
                    source: 'neutron-server',
                    target: 'mysql_server_inst_1'
                }
            }, {
                data: {
                    id: 'ghb',
                    source: 'neutron-server',
                    target: 'n42-poweredge-5-n42-poweredge-5'
                }
            }, {
                data: {
                    id: 'ghc',
                    source: 'neutron-server',
                    target: 'edge_1'
                }
            }, {
                data: {
                    id: 'ghd',
                    source: 'neutron-server',
                    target: 'NUMBER_REQ_NEUTRON'
                }
            }, {
                data: {
                    id: 'ghe',
                    source: 'neutron-server',
                    target: 'AVG_RESP_TIME_NEUTRON'
                }
            }, {
                data: {
                    id: 'ghf',
                    source: 'neutron-server',
                    target: 'n42-poweredge-5-n42-poweredge-5'
                }
            }, {
                data: {
                    id: 'ghg',
                    source: 'amq_server_inst_1',
                    target: 'QLEN'
                }
            }, {
                data: {
                    id: 'ghi',
                    source: 'amq_server_inst_1',
                    target: 'L3_AGENT_QLENGTH'
                }
            }, {
                data: {
                    id: 'ghj',
                    source: 'amq_server_inst_1',
                    target: 'DHCP_AGENT_QLENGTH'
                }
            }, {
                data: {
                    id: 'ghk',
                    source: 'amq_server_inst_1',
                    target: 'METADATA_AGENTN_QLENGTH'
                }
            }, {
                data: {
                    id: 'ghn',
                    source: 'amq_server_inst_1',
                    target: 'DSNMASQ_AGENT_QLENGTH'
                }
            }, {
                data: {
                    id: 'gho',
                    source: 'amq_server_inst_1',
                    target: 'NEUTRON_SERVER_QLEN'
                }
            }, {
                data: {
                    id: 'ghn',
                    source: 'amq_server_inst_1',
                    target: 'METADATA_AGENTN_QLENGTH'
                }
            }, {
                data: {
                    id: 'abc',
                    source: 'edge_1',
                    target: 'pc_cpu_wait_io'
                }
            }, {
                data: {
                    id: 'abcd',
                    source: 'edge_1',
                    target: 'num_unint_processes'
                }
            }, {
                data: {
                    id: 'abe',
                    source: 'edge_1',
                    target: 'disk_block_in_out'
                }
            }, {
                data: {
                    id: 'abf',
                    source: 'edge_1',
                    target: 'pc_cpu_compute'
                }
            }, {
                data: {
                    id: 'abg',
                    source: 'edge_1',
                    target: 'load_avg_compute'
                }
            }, {
                data: {
                    id: 'abj',
                    source: 'edge_1',
                    target: 'buffer_cach_free_mem'
                }
            }, {
                data: {
                    id: 'abk',
                    source: 'edge_1',
                    target: 'swap_in_swap_out'
                }
            }]
        },


        //the higher the value of concentric function returns the node is placed more close to the center

        layout: {
            name: 'breadthfirst',
            //concentric: function(n){ console.log("wht is this ",n);return this.data('weight'); },
            concentric: function (n) {
                /*if( 'openstack' === n.id() ){
        return 4;
      } else if('Nova' === n.id()){
        return 2;
      } else {
        return 1;
      }*/
                console.log(n.data());
                return n.data().level;
            },
            //levelWidth: function( nodes ){ return 1; },
            levelWidth: function (nodes) { // the variation of concentric values in each level
                console.log("what is this value",nodes.maxDegree());
                return nodes.maxDegree() / 4;
            },
            padding: 10,
            minNodeSpacing: 100,
            startAngle: 3 / 2 * Math.PI
        }
    });

    var bfs = cy.elements().bfs('#Neutron', function () {}, true);

    var i = 0;
    var highlightNextEle = function () {

        bfs.path[i].addClass('highlighted');

        if (i < bfs.path.length) {
            i++;
            setTimeout(highlightNextEle, 1000);
        }

    };

    cy.on('select', 'node', function (e) {
        var node = this;

        highlight(node);
        setTimeout(function () {
            cy.reset();
        }, 10000);
        //showNodeInfo( node );
    });

    $('#reset').on('click', function () {
        renderGraph();
    });

    function highlight(node) {
        var nhood = node.closedNeighborhood();
        var parenttoNode = node.incomers();
        console.log("these are parents",nhood);
        var length = cy.elements().not(nhood).length;
        console.log("not of nhood 1",cy.elements().not(nhood).length);
        if(parenttoNode[1] && parenttoNode[1].isNode()){
            var rootParent = parenttoNode[1].incomers();
            var newColl = cy.collection(rootParent);
            rootParent.each(function(i,ele){
                console.log("this is ele",ele.id());
                //newColl.union(cy.$('#'+ele.id()));
                //nhood.add(ele);
            });
        }
        console.log("not of nhood 2",nhood.union(newColl));
        nhood = nhood.union(newColl);
        cy.batch(function () {
            cy.elements().not(nhood).removeClass('highlighted').style('display', 'none');
            nhood.removeClass('faded').addClass('highlighted');

            var npos = node.position();
            var w = window.innerWidth;
            var h = window.innerHeight;

            cy.stop().animate({
                fit: {
                    eles: cy.elements(),
                    padding: 50
                }
            }, {
                duration: 500
            }).delay(500, function () {
                nhood.layout({
                    name: 'concentric',
                    padding: 50,
                    animate: true,
                    animationDuration: 500,
                    minNodeSpacing: 100,
                    fit: true,
                    concentric: function (n) {
                        if (node.id() === n.id()) {
                            return 2;
                        } else {
                            return 1;
                        }
                    },
                    levelWidth: function () {
                        return 1;
                    }
                });
            });

        });
    }


    // kick off first highlight
    highlightNextEle();

}