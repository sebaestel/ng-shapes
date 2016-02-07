'use strict';
angular.module('ng-shapes',[])
    .directive('shape', function () {
        return {
            strict: 'E',
            transclude: true,
            link: function (scope, element, attributes){
                var target  = '#' + element.attr('id'),
                    width   = $(target).css('width'),
                    height  = $(target).css('height'),
                    options = jQuery.parseJSON(attributes.shapeOptions),
                    color;
                switch(options[0].type){
                    case 'circle':
                        var circleSvg = d3.select(target)
                            .append('svg')
                            .attr('width', width)
                            .attr('height', width),
                            circles = circleSvg
                                .selectAll('circle')
                                .data(options)
                                .enter()
                                .append('circle'),
                            circleAttributes = circles
                               .attr('cx', parseInt($(target).css('width').replace('px','')) / 2)
                               .attr('cy', parseInt($(target).css('width').replace('px','')) / 2)
                               .attr('r', parseInt($(target).css('width').replace('px','')) / 2)
                               .attr('fill', getBackground(circleSvg));
                        return false
                    case 'square':
                        var squareSvg = d3.select(target)
                                .append('svg')
                                .attr('width', width)
                                .attr('height', width),
                            square = squareSvg
                                .append('rect'),
                            squareAttributes = square
                                .attr('x', 10)
                                .attr('y', 10)
                                .attr('width', width)
                                .attr('height', height)
                               .attr('fill', getBackground(squareSvg));
                        return false
                    case 'triangle':
                        var cleanWidth = width.replace('px',''),
                            halfWidth = parseInt(cleanWidth) / 2,
                            poly,
                            triangleSvg = d3.select(target)
                                .append('svg')
                                 .attr('width', width)
                                 .attr('height', height),
                            scaleX = d3.scale.linear()
                                    .domain([-30,30])
                                    .range([0,600]),
                            scaleY = d3.scale.linear()
                                    .domain([0,50])
                                    .range([500,0]),
                            triangleAttribute = triangleSvg
                                .selectAll('polygon')
                                .data([poly])
                                .enter()
                                .append('polygon')
                                .attr('points', halfWidth+',0 0,'+cleanWidth +' '+cleanWidth+','+cleanWidth)
                                .attr('fill', getBackground(triangleSvg));
                        return false
                }
                function getColor(){
                    if(options[0].color){
                        return options[0].color;
                    } else {
                        return chroma.random();
                    }
                }
                function getBackground(t){
                    if(options[0].image){
                        var image = t
                                .append('defs')
                                .append('pattern')
                                .attr('id', element.attr('id')+'-image-background')
                                .attr('patternUnits','userSpaceOnUse')
                                .attr('x', '0%')
                                .attr('y', '0%')
                                .attr('width', width)
                                .attr('height', height)
                                    .append('image')
                                    .attr('x', '0%')
                                    .attr('y', '0%')
                                    .attr('width', width)
                                    .attr('height', height)
                                    .attr('xlink:href', options[0].image)
                        return 'url(#'+element.attr('id')+'-image-background)';
                    } else {
                        return getColor();
                    }
                }
            }
        };
    });
