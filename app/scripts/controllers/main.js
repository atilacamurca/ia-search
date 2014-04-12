'use strict';

angular.module('iaSearchApp')
    .controller('MainCtrl', function ($scope) {
        $scope.cities = [
            {
                id: 'Oradea',
                label: 'Oradea',
                x: 47.072226,
                y: 21.921158,
                size: 10,
                color: '#666',
                adj: [
                    {city: 'Zerind', cost: 71},
                    {city: 'Sibiu', cost: 151}
                ],
                other: 'false'
            },
            {
                id: 'Zerind',
                label: 'Zerind',
                x: 46.6225105,
                y: 21.517419,
                size: 10,
                color: '#666',
                adj: [
                    {city: 'Arad', cost: 75},
                    {city: 'Oradea', cost: 71}
                ],
                other: 'false'
            },
            {
                id: 'Arad',
                label: 'Arad',
                x: 46.166666,
                y: 21.316666,
                size: 10,
                color: '#666',
                adj: [
                    {city: 'Zerind', cost: 75},
                    {city: 'Timisoara', cost: 118},
                    {city: 'Sibiu', cost: 140}
                ],
                other: 'false'
            },
            {
                id: 'Timisoara',
                label: 'Timisoara',
                x: 45.755539,
                y: 21.237499,
                size: 10,
                color: '#666',
                adj: [
                    {city: 'Arad', cost: 118},
                    {city: 'Lugoj', cost: 111}
                ],
                other: 'false'
            },
            {
                id: 'Lugoj',
                label: 'Lugoj',
                x: 45.686111,
                y: 21.900555,
                size: 10,
                color: '#666',
                adj: [
                    {city: 'Timisoara', cost: 111},
                    {city: 'Mehadia', cost: 70}
                ],
                other: 'false'
            },
            {
                id: 'Mehadia',
                label: 'Mehadia',
                x: 44.906574,
                y: 22.360437,
                size: 10,
                color: '#666',
                adj: [
                    {city: 'Lugoj', cost: 70},
                    {city: 'Drobeta', cost: 75}
                ],
                other: 'false'
            },
            {
                id: 'Drobeta',
                label: 'Drobeta',
                x: 44.635653,
                y: 22.660178,
                size: 10,
                color: '#666',
                adj: [
                    {city: 'Mehadia', cost: 75},
                    {city: 'Craiova', cost: 120}
                ],
                other: 'false'
            },
            {
                id: 'Craiova',
                label: 'Craiova',
                x: 44.324760,
                y: 23.813470,
                size: 10,
                color: '#666',
                adj: [
                    {city: 'Drobeta', cost: 120},
                    {city: 'Rimnieu Vilcea', cost: 146},
                    {city: 'Pitesti', cost: 138}
                ],
                other: 'false'
            },
            {
                id: 'Pitesti',
                label: 'Pitesti',
                x: 44.860555,
                y: 24.867777,
                size: 10,
                color: '#666',
                adj: [
                    {city: 'Craiova', cost: 138},
                    {city: 'Rimnieu Vilcea', cost: 97},
                    {city: 'Bucharest', cost: 101}
                ],
                other: 'false'
            },
            {
                id: 'Rimnieu Vilcea',
                label: 'Rimnieu Vilcea',
                x: 45.104722,
                y: 24.375555,
                size: 10,
                color: '#666',
                adj: [
                    {city: 'Craiova', cost: 146},
                    {city: 'Pitesti', cost: 97},
                    {city: 'Sibiu', cost: 80}
                ],
                other: 'false'
            },
            {
                id: 'Sibiu',
                label: 'Sibiu',
                x: 45.787441,
                y: 24.143258,
                size: 10,
                color: '#666',
                adj: [
                    {city: 'Oradea', cost: 151},
                    {city: 'Arad', cost: 140},
                    {city: 'Rimnieu Vilcea', cost: 80},
                    {city: 'Fagaras', cost: 99}
                ],
                other: 'false'
            },
            {
                id: 'Fagaras',
                label: 'Fagaras',
                x: 45.843342,
                y: 24.977871,
                size: 10,
                color: '#666',
                adj: [
                    {city: 'Sibiu', cost: 99},
                    {city: 'Bucharest', cost: 211}
                ],
                other: 'false'
            },
            {
                id: 'Bucharest',
                label: 'Bucharest',
                x: 44.437711,
                y: 26.097366,
                size: 10,
                color: '#666',
                adj: [
                    {city: 'Fagaras', cost: 211},
                    {city: 'Pitesti', cost: 101},
                    {city: 'Giurgiu', cost: 90},
                    {city: 'Urziceni', cost: 85}
                ],
                other: 'false'
            },
            {
                id: 'Giurgiu',
                label: 'Giurgiu',
                x: 43.900408,
                y: 25.971661,
                size: 10,
                color: '#666',
                adj: [{city: 'Bucharest', cost: 90}],
                other: 'false'
            },
            {
                id: 'Urziceni',
                label: 'Urziceni',
                x: 44.718055,
                y: 26.645277,
                size: 10,
                color: '#666',
                adj: [
                    {city: 'Bucharest', cost: 85},
                    {city: 'Hirsova', cost: 98},
                    {city: 'Vaslui', cost: 142}
                ],
                other: 'false'
            },
            {
                id: 'Hirsova',
                label: 'Hirsova',
                x: 44.725277,
                y: 22.396111,
                size: 10,
                color: '#666',
                adj: [
                    {city: 'Urziceni', cost: 98},
                    {city: 'Eforie', cost: 86}
                ],
                other: 'false'
            },
            {
                id: 'Eforie',
                label: 'Eforie',
                x: 44.066666,
                y: 28.633333,
                size: 10,
                color: '#666',
                adj: [{city: 'Hirsova', cost: 86}],
                other: 'false'
            },
            {
                id: 'Vaslui',
                label: 'Vaslui',
                x: 46.638333,
                y: 27.729166,
                size: 10,
                color: '#666',
                adj: [
                    {city: 'Urziceni', cost: 142},
                    {city: 'Iasi', cost: 92}
                ],
                other: 'false'
            },
            {
                id: 'Iasi',
                label: 'Iasi',
                x: 47.156944,
                y: 27.590277,
                size: 10,
                color: '#666',
                adj: [
                    {city: 'Vaslui', cost: 92},
                    {city: 'Neamt', cost: 87}
                ],
                other: 'false'
            },
            {
                id: 'Neamt',
                label: 'Neamt',
                x: 46.975868,
                y: 26.381876,
                size: 10,
                color: '#666',
                adj: [{city: 'Iasi', cost: 87}],
                other: 'false'
            }
        ];
        $scope.strategies = ['bfs', 'dfs', 'gbfs', 'astar'];

        $scope.problem = {};
        $scope.problem.start_city = $scope.cities[0];
        $scope.problem.end_city = $scope.cities[1];
        $scope.problem.strategy = 'bfs';

        $scope.onChangeCity = function () {
            // reset marked
            var nodes = $scope.cities;
            var len = nodes.length;
            for (var i = 0; i < len; i++) {
                nodes[i].other = 'false';
            }

            var i,
                s,
                g = {
                    nodes: [],
                    edges: []
                };

            // len $scope.cities.length
            for (i = 0; i < $scope.cities.length; i++) {
                g.nodes.push($scope.cities[i]);
            }
            
            for (i = 0; i < $scope.cities.length; i++) {
                var adj = $scope.cities[i].adj;
                var len = adj.length;
                for (var j = 0; j < len; j++) {
                    g.edges.push({
                        id: 'e:' + $scope.cities[i].id + ':' + adj[j].city,
                        source: $scope.cities[i].id,
                        target: adj[j].city,
                        size: Math.random(),
                        color: '#ccc',
                        cost: adj[j].cost
                    });
                }
            }
            
            // reset graph drawing
            $("#graph-container").html("");
            // Instanciate sigma:
            s = new sigma({
                graph: g,
                container: 'graph-container'
            });

            var path = new Path(s.graph, $scope.problem.start_city, $scope.problem.end_city);
            var result = null;
            if ("bfs" === $scope.problem.strategy) {
                result = search.breadthFirst(path);
            } else if ("dfs" === $scope.problem.strategy) {
                result = search.depthFirst(path);
            } else if ("gbfs" === $scope.problem.strategy) {
                result = search.greedyBestFirst(path);
            } else if ("astar" === $scope.problem.strategy) {
                result = search.aStar(path);
            }

            s.render();
            s.refresh();
        };
        // call change to trigger the first time
        $scope.onChangeCity();
    });

function Path(graph, source, target) {
    this.graph = graph;
    this.source = source;
    this.target = target;
}

/*
Referencias:
    http://algs4.cs.princeton.edu/41undirected/
    http://algs4.cs.princeton.edu/41undirected/DepthFirstPaths.java.html
    http://algs4.cs.princeton.edu/41undirected/BreadthFirstPaths.java.html
    
    https://github.com/jacomyal/sigma.js/wiki/Graph-API
    
    http://www.distancesfrom.com/oradea-romania-latitude-longitude-oradea-romania-latitude-oradea-romania-longitude/LatLongHistory/2096379.aspx?IsHistory=1&LocationID=2096379
*/
var search = {
    depthFirst: function (path) {
        return this.search(path, "dfs");
    },
    breadthFirst: function (path) {
        return this.search(path, "bfs");
    },
    search: function (path, strategy) {
        var visited = [];
        var stack = [];

        stack.push(path.source);
        visited.push({
            id: path.source.id,
            parent: null
        });
        path.graph.nodes(path.source.id).color = "#2ECC40";
        var limit = 0;
        while (stack.length > 0) {
            var node = null;
            if ("dfs" === strategy) {
                node = stack.pop();
            } else if ("bfs" === strategy) {
                node = stack.shift();
            } else {
                throw "Search method not found!";
            }
            if (node.id === path.target.id) {
                this.solution(path.graph, visited, path.target);
                path.graph.nodes(path.target.id).color = "#B10DC9";
                return path.target;
            }

            // expandir
            var cities = [];
            for (var i = 0; i < node.adj.length; i++) {
                cities.push(node.adj[i].city);
            }
            var adj = path.graph.nodes(cities);
            for (var i = 0; i < adj.length; i++) {
                // array of existing nodes
                var result = $.grep(visited, function (e) {
                    return e.id === adj[i].id;
                });
                // if node not exists
                if (result.length === 0) {
                    stack.push(adj[i]);
                    visited.push({
                        id: adj[i].id,
                        parent: node.id
                    });
                    path.graph.nodes(adj[i].id).color = "#7FDBFF";
                    console.log("visited: " + adj[i].id);
                }
            }
        }
        return null;
    },
    /**
     * https://github.com/fti/Search-Algorithms/blob/master/src/ai/GreedyBestFirstSearch.java
     */
    greedyBestFirst: function (path) {
        var visited = [];
        var stack = [];
        
        stack.push(path.source);
        visited.push({
            id: path.source.id,
            parent: null
        });
        path.graph.nodes(path.source.id).color = "#2ECC40";
        
        while (stack.length > 0) {
            var node = stack.shift();
            
            if (node.id === path.target.id) {
                this.solution(path.graph, visited, path.target);
                path.graph.nodes(path.target.id).color = "#B10DC9";
                return path.target;
            }
            
            // expandir
            var cities = [];
            for (var i = 0; i < node.adj.length; i++) {
                cities.push(node.adj[i].city);
            }
            
            var adj = path.graph.nodes(cities);
            var heuristic, city, i, j, aux;
            //city = adj[0];
            for (i = 0; i < adj.length; i++) {
                heuristic = this.distanceBetween(adj[i], path.target);
                aux = adj[i];
                //console.log(heuristic);
                // insertion sort
                for (var j = i - 1; j > -1 && this.distanceBetween(adj[j], path.target) < heuristic; j--) {
                    adj[j + 1] = adj[j];
                }
                adj[j + 1] = aux;
            }
            //console.log(adj);
            
            for (var i = 0; i < adj.length; i++) {
                // array of existing nodes
                var result = $.grep(visited, function (e) {
                    return e.id === adj[i].id;
                });
                // if node not exists
                if (result.length === 0) {
                    stack.push(adj[i]);
                    visited.push({
                        id: adj[i].id,
                        parent: node.id
                    });
                    path.graph.nodes(adj[i].id).color = "#7FDBFF";
                    console.log("visited: " + adj[i].id);
                }
            }
        }
        return null;
    },
    /**
     * http://en.wikipedia.org/wiki/A%2a_search_algorithm#Example
     */
    aStar: function(path) {
        var visited = []; // came_from
        var openset = [];
        var closedset = [];
        
        var score = []; // Mantém o custo do início até o melhor caminho conhecido.
        var f_score = [];
        
        openset.push(path.source);
        visited.push({
            id: path.source.id,
            parent: null
        });
        
        score.push({id: path.source.id, cost: 0});
        f_score.push({id: path.source.id, distance: this.distanceBetween(path.source, path.target)});
        
        path.graph.nodes(path.source.id).color = "#2ECC40";
        
        while (openset.length > 0) {
            // the node in openset having the lowest f_score[] value
            var min  = _.min(f_score, function (obj) { return obj.distance });
            var node = _.find(openset, function (obj) { return obj.id === min.id });
            console.log(node);
            // HACK: node as vezes retorna undefined
            if (! node) {
                return null;
            }
            
            if (node.id === path.target.id) {
                this.solution(path.graph, visited, path.target);
                path.graph.nodes(path.target.id).color = "#B10DC9";
                return path.target;
            }
            
            var current = openset.pop();
            closedset.push(current);
            
            // expandir
            var cities = [];
            for (var i = 0; i < node.adj.length; i++) {
                cities.push(node.adj[i].city);
            }
            
            var adj = path.graph.nodes(cities);
            for (i = 0; i < adj.length; i++) {
                var result = $.grep(closedset, function (e) {
                    return e.id === adj[i].id;
                });
                
                // if not in the closedset? continue
                if (result.length > 0) {
                    continue;
                }
                
                var tentative_score = _.where(score, {id: node.id}).cost + this.distanceBetween(node, adj[i]);
                if (! _.find(openset, function (obj) { return adj[i].id === obj.id})
                    || tentative_score < adj[i].cost) {
                    // if node not exists
                    openset.push(adj[i]);
                    visited.push({
                        id: adj[i].id,
                        parent: node.id
                    });
                    path.graph.nodes(adj[i].id).color = "#7FDBFF";
                    console.log("visited: " + adj[i].id);
                    
                    score.push({id: adj[i].id, cost: adj[i].cost});
                    f_score.push({id: adj[i].id, distance: this.distanceBetween(adj[i], path.target)});
                    
                    if (! _.find(openset, function (obj) { return adj[i].id === obj.id})) {
                        openset.push(adj[i]);
                    }
                }
            }
        }
        
        return null;
        
        // expandir
        //var cities = [], aux, city, i, j;
        //for (i = 0; i < node.adj.length; i++) {
        //    city = node.adj[i].city;
        //    aux = node.adj[i].cost;
        //    // insertion sort!
        //    for(j = i - 1; j > -1 && node.adj[j].cost > aux; j--) {
        //        cities[j + 1] = cities[j];
        //    }
        //    cities[j + 1] = city;
        //}
        //var adj = path.graph.nodes(cities);
    },
    solution: function (graph, tree, target) {
        var result = $.grep(tree, function (e) {
            return e.id === target.id
        });

        while (result[0].parent !== null) {
            var edge = graph.edges("e:" + result[0].parent + ":" + result[0].id);
            edge.color = '#FF851B';
            edge.size = 10;
            result = $.grep(tree, function (e) {
                return e.id === result[0].parent
            });
        }
    },
    distanceBetween: function(start, end) {
        return Math.abs( end.x - start.x ) + Math.abs( end.y - start.y  );
    }
};