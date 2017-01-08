$(function () {
    $('#fullpage').fullpage({
        navigation: true,
        verticalCentered: false
    });

    var windowHeight = $('html').height();

    (function () {
        document.getElementById('pic1').style.height = 500 + 'px';
        var myChart = echarts.init(document.getElementById('pic1'));
        var option = {
            title: {
                text: '密鹰智客时时客流统计',
                textStyle: {
                    color: '#00fff9',
                    fontSize: "40"
                },
                subtext: '今日客流数据统计',
                subtextStyle: {
                    color: '#00fff9',
                    fontSize: '20',
                    fontWeight: 'bold'
                },
                padding: 40,
                itemGap: 25,
                left: '6%'
            },
            grid: {
                show: false,
                left: '15%',
                top: '35%',
                height: '56%',
                width: '70%',
                borderColor: '#3a3c3d'
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                type: 'category',
                boundaryGap: true,
                offset: 10,
                axisLabel: {
                    textStyle: {
                        color: '#00fff9'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#00fff9'
                    }
                },
                axisTick: {
                    show: false
                },
                data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45']
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value}'
                },
                axisLabel: {
                    textStyle: {
                        color: '#00fff9'
                    }
                },
                axisLine: {
                    show: false
                },
                offset: 15,
                splitLine: {
                    lineStyle: {
                        color: '#3a3c3d',
                        width: 2
                    }
                }
            },
            series: [{
                name: '客流量',
                type: 'line',
                smooth: true,
                showSymbol: true,
                symbol: 'emptyCircle',
                symbolSize: 5,
                lineStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0.7,
                            color: '#00fff9' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#00fff9' // 100% 处的颜色
                        }], false),
                        width: 2,
                    },
                },
                markPoint: {
                    data: [{
                        name: '最大值',
                        type: 'max',
                        valueIndex: 1
                    }],
                },
                data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400],
            }]
        };

        myChart.setOption(option);
    })();

    (function () {
        document.getElementById('pic2').style.height = 420 + 'px';
        var myChart = echarts.init(document.getElementById('pic2'));
        var option = {
            title: {
                text: '今日到店年龄分布',
                left: '19%',
                top: "21%",
                textStyle: {
                    color: '#00fff9'
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },

            series: [{
                name: '访问来源',
                type: 'pie',
                roseType: "area",
                radius: '40%',
                center: ['34%', '58%'],
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            color: '#00fff9'
                        }
                    }
                },
                data: [{
                    value: 286,
                    name: '0-18岁'
                }, {
                    value: 295,
                    name: '31-35岁'
                }, {
                    value: 178,
                    name: '36-40岁'
                }, {
                    value: 135,
                    name: '40岁以上'
                }, {
                    value: 356,
                    name: '19-30岁'
                }],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }]
        };

        myChart.setOption(option);
    })();

    (function () {
        document.getElementById('pic3').style.height = 240 + 'px';
        var myChart = echarts.init(document.getElementById('pic3'));
        var option = {
            title: {
                text: '今日到店男女比例',
                left: '19%',
                textStyle: {
                    color: '#00fff9'
                }
            },
            "series": [{
                "center": [
                    "15%",
                    "50%"
                ],
                "radius": [
                    "49%",
                    "50%"
                ],
                "clockWise": false,
                "hoverAnimation": false,
                "type": "pie",
                "itemStyle": {
                    "normal": {
                        "label": {
                            "show": true,
                            "textStyle": {
                                "fontSize": 14,
                                "fontWeight": "bold"
                            },
                            "position": "center"
                        },
                        "labelLine": {
                            "show": false
                        },
                        "color": "#5886f0",
                        "borderColor": "#5886f0",
                        "borderWidth": 20
                    },
                    "emphasis": {
                        "label": {
                            "textStyle": {
                                "fontSize": 14,
                                "fontWeight": "bold"
                            }
                        },
                        "color": "#5886f0",
                        "borderColor": "#5886f0",
                        "borderWidth": 25
                    }
                },
                "data": [{
                    "value": 64,
                    "name": "男覆盖率64%"
                }, {
                    "name": " ",
                    "value": 47.3,
                    "itemStyle": {
                        "normal": {
                            "label": {
                                "show": false
                            },
                            "labelLine": {
                                "show": false
                            },
                            "color": "#5886f0",
                            "borderColor": "#5886f0",
                            "borderWidth": 0
                        },
                        "emphasis": {
                            "color": "#5886f0",
                            "borderColor": "#5886f0",
                            "borderWidth": 0
                        }
                    }
                }]
            }, {
                "center": [
                    "60%",
                    "50%"
                ],
                "radius": [
                    "49%",
                    "50%"
                ],
                "clockWise": false,
                "hoverAnimation": false,
                "type": "pie",
                "itemStyle": {
                    "normal": {
                        "label": {
                            "show": true,
                            "textStyle": {
                                "fontSize": 14,
                                "fontWeight": "bold"
                            },
                            "position": "center"
                        },
                        "labelLine": {
                            "show": false
                        },
                        "color": "#ee3a3a",
                        "borderColor": "#ee3a3a",
                        "borderWidth": 20
                    },
                    "emphasis": {
                        "label": {
                            "textStyle": {
                                "fontSize": 14,
                                "fontWeight": "bold"
                            }
                        },
                        "color": "#ee3a3a",
                        "borderColor": "#ee3a3a",
                        "borderWidth": 25
                    }
                },
                "data": [{
                    "value": 36,
                    "name": "女覆盖率36%"
                }, {
                    "name": " ",
                    "value": 52.7,
                    "itemStyle": {
                        "normal": {
                            "label": {
                                "show": false
                            },
                            "labelLine": {
                                "show": false
                            },
                            "color": "#ee3a3a",
                            "borderColor": "#ee3a3a",
                            "borderWidth": 0
                        },
                        "emphasis": {
                            "color": "#ee3a3a",
                            "borderColor": "#ee3a3a",
                            "borderWidth": 0
                        }
                    }
                }]
            }]
        };

        myChart.setOption(option);
    })();

    (function () {
        var myChart = echarts.init(document.getElementById('pic4'));
        var percent = 0.863;

        var option = {

            title: {
                text: (percent * 100) + '%\n\n今日出勤率',
                x: '28%',
                y: 'center',
                textAlign: 'center',
                textStyle: {
                    color: '#00fff9',
                    fontWeight: 'bolder',
                    fontSize: 20,
                }
            },
            series: [{
                    type: 'pie',
                    radius: ['38%', '40%'],
                    center: ['30%', '50%'],
                    silent: true,
                    label: {
                        normal: {
                            borderWidth: 1
                        }
                    },

                    data: [{
                        itemStyle: {
                            normal: {
                                color: '#313443',
                                shadowBlur: 10,
                                shadowColor: '#1b1e25',

                            }
                        }
                    }],

                    animation: false
                },

                {
                    type: 'pie',
                    radius: ['39%', '49%'],
                    center: ['30%', '50%'],
                    silent: true,
                    label: {
                        normal: {
                            show: false,
                        }
                    },

                    data: [{
                        itemStyle: {
                            normal: {
                                color: '#313443',
                                shadowBlur: 50,
                                shadowColor: '#1b1e25'
                            },
                        }
                    }],

                    animation: false
                },

                {
                    name: 'main',
                    type: 'pie',
                    center: ['30%', '50%'],
                    radius: ['50%', '51%'],
                    label: {
                        normal: {
                            show: false,
                        }
                    },
                    data: [{
                        value: percent,
                        itemStyle: {
                            normal: {
                                color: '#fb358a',
                                shadowBlur: 10,
                                shadowColor: '#fb358a'
                            }
                        }
                    }, {
                        value: 1 - percent,
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        }
                    }],

                    animationEasingUpdate: 'cubicInOut',
                    animationDurationUpdate: 500
                }
            ]
        };

        myChart.setOption(option);
    })();

    (function () {
        var myChart = echarts.init(document.getElementById('pic5'));

        var option = {
            color: ['#00fff9'],

            xAxis: [{
                type: 'category',
                axisTick: {
                    show: false
                },
                offset: 20,
                axisLabel: {
                    textStyle: {
                        color: '#00fff9'
                    }
                },

                axisLine: {
                    show: false
                },
                data: ["周一\n\n10/10", "周二\n\n10/11", "周三\n\n10/12", "周四\n\n10/13", "周五\n\n10/14", "周六\n\n10/15", "周日\n\n10/16"]
            }],
            yAxis: [{
                type: 'value',
                axisLabel: {
                    show: false,
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            }],
            grid: {
                left: '-6%',
                bottom: '10%',
                top: '20%',
                containLabel: true,
                width: '90%'
            },
            tooltip: {

                trigger: 'axis',
                padding: 0,
                extraCssText: 'box-shadow: 0 0 7px rgba(0, 0, 0, 0.6);',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'line' // 默认为直线，可选为：'line' | 'shadow'
                },
                backgroundColor: 'rgba(255,255,255,0)',
                show: true,
                //              textStyle: {
                //                  color: '#000'
                //              },无效代码
                formatter: function (params) {
                    var stl = '';
                    $(params).each(function (index, serie) {
                        if (serie.componentType === 'series' && serie.dataIndex >= 0) {
                            var colors = myChart.getOption().color;
                            var color = colors[index % colors.length];
                            if (serie.value && serie.value !== '-')
                                stl += '<br /> <div style="display:inline-block;width:10px;height:10px;border-radius:5px;background:' + color + ';"></div>&emsp;' + serie.seriesName + ':&emsp;' + serie.value;
                        }
                    });
                    return stl ? '<div style="background:#fff;padding:15px;color:#999;border-radius:5px;">' + (params[0] ? params[0].name : params.seriesName) + stl + '</div>' : '';
                }
            },
            series: [{
                name: "出勤人数",
                type: "bar",
                barWidth: '15%',
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        formatter: function (params) {
                            var total = 50;
                            return (params.data / total * 100).toFixed(2) + '%';
                        }
                    }
                },
                data: [47, 38, 42, 49, 50, 42, 44]
            }]
        };

        myChart.setOption(option);
    })();

    (function () {
        var myChart = echarts.init(document.getElementById('pic6'));

        var option = {
            title: {
                text: '水球图',
                textStyle: {
                    color: '#00fff9',
                },
                textAlign: 'left'
            },
            series: [{
                type: 'liquidFill',
                label: {
                    normal: {
                        textStyle: {
                            color: '#00fff9',
                            fontSize: 25
                        }
                    }
                },
                radius: '70%',
                data: [0.6, {
                    value: 0.5,
                    direction: 'left',
                    itemStyle: {
                        normal: {
                            color: 'red'
                        }
                    }
                }, 0.4, 0.3],
                outline: {
                    itemStyle: {
                        borderColor: '#00fff9'
                    }
                }
            }]
        };
        myChart.setOption(option);
    })();

    (function () {
        var myChart = echarts.init(document.getElementById('pic7'));

        var option = {
            title: {
                text: "比例图",
                x: "left",
                textStyle: {
                    color: '#00fff9'
                }
            },
            series: [{
                name: "比例图",
                type: "gauge",
                startAngle: 45,
                endAngle: -45,
                center: ["30%", "50%"],
                axisLine: {
                    lineStyle: {
                        width: 80
                    }
                },
                axisTick: {
                    splitNumber: 10
                },
                radius: '110%',
                axisLabel: {
                    formatter: function (e) {
                        switch (e + "") {
                        case "10":
                            return "低";
                        case "50":
                            return "中";
                        case "90":
                            return "高";
                        default:
                            return ""
                        }
                    },
                    textStyle: {
                        color: "#fff",
                        fontSize: 15,
                        fontWeight: "bolder"
                    }
                },
                pointer: {
                    width: "10%",
                    color: "black"
                },
                itemStyle: {
                    normal: {
                        color: "rgba(255, 255, 255, 0.8)",
                        shadowBlur: 10
                    }
                },
                title: {
                    show: false,
                    offsetCenter: [-20, "-40%"],
                    textStyle: {
                        color: "green"
                    }
                },
                detail: {
                    show: !0,
                    backgroundColor: "rgba(0,0,0,0)",
                    borderWidth: 0,
                    borderColor: "#ccc",
                    offsetCenter: [0, -5],
                    formatter: "{value}%",
                    textStyle: {
                        color: '#00fff9',
                        fontSize: '18',
                        fontWeight: 'bold'
                    }
                },
                data: [{
                    value: 67,
                    name: "比例图"
                }]
            }]
        };
        myChart.setOption(option);
    })();

    (function () {
        var myChart = echarts.init(document.getElementById('pic8'));

        var xData = function () {
            var data = [];
            for (var i = 1; i < 15; i++) {
                data.push(i + "月份");
            }
            return data;
        }();

        var option = {
            backgroundColor: "#344b58",
            "title": {
                "text": "顾客男女人数统计",

                textStyle: {
                    color: '#00fff9',
                    fontSize: '18'
                },
            },
            "tooltip": {
                "trigger": "axis",
                backgroundColor: 'rgba(50, 50, 50, 0)',
                position: ['60%', '0%'],
                "axisPointer": {
                    "type": "shadow",
                    textStyle: {
                        color: "#fff"
                    }

                },
            },
            "grid": {
                "borderWidth": 0,
                "top": 110,
                "bottom": 95,
                textStyle: {
                    color: "#fff"
                }
            },

            "legend": {
                x: '4%',
                top: '11%',
                textStyle: {
                    color: '#90979c',
                },
                "data": ['女', '男', '平均']
            },

            "calculable": true,
            "xAxis": [{
                "type": "category",
                "axisLine": {
                    lineStyle: {
                        color: '#90979c'
                    }
                },
                "splitLine": {
                    "show": false
                },
                "axisTick": {
                    "show": false
                },
                "splitArea": {
                    "show": false
                },
                "axisLabel": {
                    "interval": 1,
                    textStyle: {
                        color: '#00fff9'
                    }

                },
                "data": xData,
            }],
            "yAxis": [{
                "type": "value",
                "splitLine": {
                    "show": false
                },
                "axisLine": {
                    show: false,
                    lineStyle: {
                        color: '#90979c'
                    }
                },
                "axisTick": {
                    "show": false
                },
                "axisLabel": {
                    show: false,
                    "interval": 0,

                },
                "splitArea": {
                    "show": false
                },

            }],
            "dataZoom": [{
                "show": true,
                "height": 30,
                "xAxisIndex": [
                    0
                ],
                bottom: 30,
                "start": 10,
                "end": 80,
                handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
                handleSize: '110%',
                handleStyle: {
                    color: "#d3dee5",

                },
                textStyle: {
                    color: "#fff"
                },
                borderColor: "#90979c"


            }, {
                "type": "inside",
                "show": true,
                "height": 15,
                "start": 1,
                "end": 35
            }],
            "series": [{
                    "name": "女",
                    "type": "bar",
                    "stack": "总量",
                    "barMaxWidth": 35,
                    "barGap": "10%",
                    "itemStyle": {
                        "normal": {
                            "color": "rgba(255,144,128,1)",
                            "label": {
                                "show": true,
                                "textStyle": {
                                    "color": "#fff"
                                },
                                "position": "insideTop",
                                formatter: function (p) {
                                    return p.value > 0 ? (p.value) : '';
                                }
                            }
                        }
                    },
                    "data": [
                        2709,
                        3917,
                        3455,
                        3610,
                        2719,
                        2433,
                        3544,
                        3285,
                        5208,
                        4372,
                        3484,
                        4078
                    ],
                },

                {
                    "name": "男",
                    "type": "bar",
                    "stack": "总量",
                    "itemStyle": {
                        "normal": {
                            "color": "rgba(0,191,183,1)",
                            "barBorderRadius": 0,
                            "label": {
                                "show": true,
                                "position": "top",
                                formatter: function (p) {
                                    return p.value > 0 ? (p.value) : '';
                                }
                            }
                        }
                    },
                    "data": [
                        2327,
                        3776,
                        2507,
                        3200,
                        2800,
                        3482,
                        3204,
                        4390,
                        3001,
                        2251,
                        3381,
                        4220
                    ]
                }, {
                    "name": "总数",
                    "type": "line",
                    "stack": "总量",
                    symbolSize: 10,
                    symbol: 'circle',
                    "itemStyle": {
                        "normal": {
                            "color": "rgba(252,230,48,1)",
                            "barBorderRadius": 0,
                            "label": {
                                "show": true,
                                "position": "top",
                                formatter: function (p) {
                                    return p.value > 0 ? (p.value) : '';
                                }
                            }
                        }
                    },
                    "data": [
                        5036,
                        7693,
                        5962,
                        6810,
                        5519,
                        5915,
                        6748,
                        7675,
                        8209,
                        6623,
                        6865,
                        8298
                    ]
                },
            ]
        };

        myChart.setOption(option);
    })();

    (function () {
        var myChart = echarts.init(document.getElementById('pic10'));

        var option = {
            title: {
                text: "搜索词统计",
                textStyle: {
                    color: '#000',
                    fontSize: 20
                }
            },
            tooltip: {
                textStyle: {
                    color: '#000'
                },
                position: ['40%', '0%'],
                backgroundColor: 'rgba(50, 50, 50, 0)'
            },
            series: [{
                type: 'wordCloud',
                gridSize: 20,
                sizeRange: [12, 50],
                rotationRange: [0, 0],
                shape: 'circle',
                textStyle: {
                    normal: {
                        color: function () {
                            return 'rgb(' + [
                                Math.round(Math.random() * 160),
                                Math.round(Math.random() * 160),
                                Math.round(Math.random() * 160)
                            ].join(',') + ')';
                        }
                    },
                    emphasis: {
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                data: [{
                    name: 'Sam S Club',
                    value: 10000,
                    textStyle: {
                        normal: {
                            color: 'black'
                        },
                        emphasis: {
                            color: 'red'
                        }
                    }
                }, {
                    name: 'Macys',
                    value: 6181
                }, {
                    name: 'Amy Schumer',
                    value: 4386
                }, {
                    name: 'Jurassic World',
                    value: 4055
                }, {
                    name: 'Charter Communications',
                    value: 2467
                }, {
                    name: 'Chick Fil A',
                    value: 2244
                }, {
                    name: 'Planet Fitness',
                    value: 1898
                }, {
                    name: 'Pitch Perfect',
                    value: 1484
                }, {
                    name: 'Express',
                    value: 1112
                }, {
                    name: 'Home',
                    value: 965
                }, {
                    name: 'Johnny Depp',
                    value: 847
                }, {
                    name: 'Lena Dunham',
                    value: 582
                }, {
                    name: 'Lewis Hamilton',
                    value: 555
                }, {
                    name: 'KXAN',
                    value: 550
                }, {
                    name: 'Mary Ellen Mark',
                    value: 462
                }, {
                    name: 'Farrah Abraham',
                    value: 366
                }, {
                    name: 'Rita Ora',
                    value: 360
                }, {
                    name: 'Serena Williams',
                    value: 282
                }, {
                    name: 'NCAA baseball tournament',
                    value: 273
                }, {
                    name: 'Point Break',
                    value: 265
                }]
            }]
        };

        myChart.setOption(option);
    })();

    (function () {
        var myChart = echarts.init(document.getElementById('pic11'));

        var allData = {
            "citys": [{
                "name": "延寿",
                "value": [128.331644, 45.451897, 2],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "临江",
                "value": [126.918087, 41.811979, 2],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "嘉兴",
                "value": [120.755486, 30.746129, 4],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "四平",
                "value": [124.350398, 43.16642, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "营口",
                "value": [122.235418, 40.667012, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "密云",
                "value": [116.801346, 40.35874, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "威海",
                "value": [122.12042, 37.513068, 32],
                "symbolSize": 3,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "杭州",
                "value": [120.15507, 30.274085, 10],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "集安",
                "value": [126.194031, 41.125307, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "贵阳",
                "value": [106.630154, 26.647661, 2],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "抚顺",
                "value": [123.957208, 41.880872, 3],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "海门",
                "value": [121.181615, 31.871173, 2],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "珠海",
                "value": [113.576726, 22.270715, 9],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "河北",
                "value": [114.475704, 38.584854, -19],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#58B3CC"
                    }
                }
            }, {
                "name": "深圳",
                "value": [114.057868, 22.543099, 14],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "黄浦",
                "value": [121.484443, 31.231763, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "蓬莱",
                "value": [120.758848, 37.810661, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "吉林",
                "value": [126.549572, 43.837883, -364],
                "symbolSize": 14,
                "itemStyle": {
                    "normal": {
                        "color": "#58B3CC"
                    }
                }
            }, {
                "name": "甘肃",
                "value": [103.826308, 36.059421, -2],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#58B3CC"
                    }
                }
            }, {
                "name": "龙井",
                "value": [129.427066, 42.766311, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "茂名",
                "value": [110.925456, 21.662999, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "丹东",
                "value": [124.354707, 40.0005, 2],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "晋中",
                "value": [112.752695, 37.687024, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "浙江",
                "value": [120.152792, 30.267447, -2],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#58B3CC"
                    }
                }
            }, {
                "name": "海城",
                "value": [122.685217, 40.882377, 2],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "溆浦",
                "value": [110.594921, 27.908281, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "北京",
                "value": [116.407526, 39.90403, -14],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#58B3CC"
                    }
                }
            }, {
                "name": "铁岭",
                "value": [123.726166, 42.223769, 2],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "大同",
                "value": [113.61244, 40.040295, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "金坛",
                "value": [119.597897, 31.723247, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "齐齐哈尔",
                "value": [126.661669, 45.742347, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "咸阳",
                "value": [108.708991, 34.329605, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "四川",
                "value": [104.075931, 30.651652, -5],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#58B3CC"
                    }
                }
            }, {
                "name": "福田",
                "value": [114.055036, 22.52153, 2],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "盘锦",
                "value": [122.070714, 41.119997, 3],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "中山",
                "value": [113.392782, 22.517646, 4],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "福建",
                "value": [119.295144, 26.10078, -1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#58B3CC"
                    }
                }
            }, {
                "name": "泰顺",
                "value": [119.717649, 27.556884, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "宝山",
                "value": [131.401589, 46.577167, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "庆安",
                "value": [127.507825, 46.880102, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "海淀",
                "value": [116.298056, 39.959912, 32],
                "symbolSize": 3,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "大兴",
                "value": [116.341395, 39.726929, 3],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "桦川",
                "value": [130.719081, 47.023001, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "惠州",
                "value": [114.416196, 23.111847, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "青岛",
                "value": [120.38264, 36.067082, 52],
                "symbolSize": 3,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "朝阳",
                "value": [116.443108, 39.92147, 17],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "沈阳",
                "value": [123.431475, 41.805698, 41],
                "symbolSize": 3,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "菏泽",
                "value": [115.480656, 35.23375, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "南通",
                "value": [120.894291, 31.980172, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "南充",
                "value": [106.110698, 30.837793, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "双城",
                "value": [126.312745, 45.383263, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "南京",
                "value": [118.796877, 32.060255, 17],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "新疆",
                "value": [87.627704, 43.793026, -2],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#58B3CC"
                    }
                }
            }, {
                "name": "成都",
                "value": [104.066541, 30.572269, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "陕西",
                "value": [108.954239, 34.265472, -2],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#58B3CC"
                    }
                }
            }, {
                "name": "黄岛",
                "value": [120.04619, 35.872664, 2],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "温州",
                "value": [120.699367, 27.994267, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "石家庄",
                "value": [114.51486, 38.042307, 4],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "邢台",
                "value": [114.504844, 37.070589, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "赣州",
                "value": [114.93503, 25.831829, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "义乌",
                "value": [120.075058, 29.306841, 3],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "南昌",
                "value": [115.858198, 28.682892, 2],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "闵行",
                "value": [121.381709, 31.112813, 18],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "长宁",
                "value": [121.424624, 31.220367, 7],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "道里",
                "value": [126.616957, 45.755777, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "乳山",
                "value": [121.539765, 36.919816, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "双流",
                "value": [103.923648, 30.574473, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "广州",
                "value": [113.264435, 23.129163, 13],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "西城",
                "value": [116.365868, 39.912289, 4],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "佳木斯",
                "value": [130.318917, 46.799923, 2],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "皇姑",
                "value": [123.44197, 41.824796, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "榆树",
                "value": [126.533146, 44.840288, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "临汾",
                "value": [111.518976, 36.088005, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "上海",
                "value": [121.473701, 31.230416, 44],
                "symbolSize": 3,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "内蒙古",
                "value": [111.765618, 40.817498, -23],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#58B3CC"
                    }
                }
            }, {
                "name": "尚志",
                "value": [128.009895, 45.209586, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "湖里",
                "value": [118.146769, 24.512905, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "台州",
                "value": [121.420757, 28.656386, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "潍坊",
                "value": [119.161756, 36.706774, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "苏州",
                "value": [120.585316, 31.298886, 14],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "房山",
                "value": [116.143267, 39.749144, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "即墨",
                "value": [120.447128, 36.389639, 15],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "舒兰",
                "value": [126.965607, 44.406106, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "延吉",
                "value": [129.508946, 42.891255, 3],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "三河",
                "value": [117.078295, 39.982718, 4],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "大连",
                "value": [121.614682, 38.914003, 40],
                "symbolSize": 3,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "辉南",
                "value": [126.046912, 42.684993, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "无锡",
                "value": [120.31191, 31.49117, 14],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "常州",
                "value": [119.973987, 31.810689, 4],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "广西",
                "value": [108.327546, 22.815478, -1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#58B3CC"
                    }
                }
            }, {
                "name": "泉州",
                "value": [118.675676, 24.874132, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "昌平",
                "value": [116.231204, 40.22066, 4],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "海阳",
                "value": [121.158434, 36.776378, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "郑州",
                "value": [113.625368, 34.7466, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "东城",
                "value": [116.416357, 39.928353, 10],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "黄骅",
                "value": [117.330048, 38.371383, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "武侯",
                "value": [104.04339, 30.641982, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "鸡东",
                "value": [131.12408, 45.260412, 2],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "龙口",
                "value": [120.477813, 37.646108, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "汤原",
                "value": [129.905072, 46.730706, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "湖北",
                "value": [114.341862, 30.546498, -4],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#58B3CC"
                    }
                }
            }, {
                "name": "克拉玛依",
                "value": [84.889207, 45.579889, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "厦门",
                "value": [118.089425, 24.479834, 3],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "哈尔滨",
                "value": [126.534967, 45.803775, 8],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "秦皇岛",
                "value": [119.600493, 39.935385, 7],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "江苏",
                "value": [118.763232, 32.061707, -1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#58B3CC"
                    }
                }
            }, {
                "name": "常熟",
                "value": [120.752481, 31.654376, 4],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "烟台",
                "value": [121.447935, 37.463822, 24],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "和平",
                "value": [117.21451, 39.116949, 4],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "环翠",
                "value": [122.123444, 37.501991, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "宣武门外东大街",
                "value": [116.378888, 39.899332, 3],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "张家港",
                "value": [120.553284, 31.870367, 4],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "临安",
                "value": [119.724733, 30.233873, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "延安",
                "value": [109.489727, 36.585455, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "天津",
                "value": [117.200983, 39.084158, 28],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "城阳",
                "value": [120.39631, 36.307064, 15],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "石景山",
                "value": [116.222982, 39.906611, 3],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "长沙",
                "value": [112.938814, 28.228209, 5],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "安徽",
                "value": [117.284923, 31.861184, -1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#58B3CC"
                    }
                }
            }, {
                "name": "昆山",
                "value": [120.980737, 31.385598, 4],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "徐汇",
                "value": [121.436525, 31.188523, 2],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "东港",
                "value": [124.152705, 39.863008, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "廊坊",
                "value": [116.683752, 39.538047, 4],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "鞍山",
                "value": [122.994329, 41.108647, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "海陵",
                "value": [119.919425, 32.491016, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "黑龙江",
                "value": [126.661669, 45.742347, -198],
                "symbolSize": 8,
                "itemStyle": {
                    "normal": {
                        "color": "#58B3CC"
                    }
                }
            }, {
                "name": "西藏",
                "value": [91.117212, 29.646923, -1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#58B3CC"
                    }
                }
            }, {
                "name": "河南",
                "value": [113.274379, 34.445122, 0],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#58B3CC"
                    }
                }
            }, {
                "name": "湖南",
                "value": [112.98381, 28.112444, -1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#58B3CC"
                    }
                }
            }, {
                "name": "佛山",
                "value": [113.121416, 23.021548, 2],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "珲春",
                "value": [130.366036, 42.862821, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "扬州",
                "value": [119.412966, 32.39421, 5],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "日照",
                "value": [119.526888, 35.416377, 2],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "唐山",
                "value": [118.180194, 39.630867, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "同江",
                "value": [132.510919, 47.642707, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "荣成",
                "value": [122.486658, 37.16516, 4],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "虎林",
                "value": [132.93721, 45.762686, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "武汉",
                "value": [114.305393, 30.593099, 2],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "合肥",
                "value": [117.227239, 31.820587, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "荆州",
                "value": [112.239741, 30.335165, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "丰台",
                "value": [116.287149, 39.858427, 3],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "山东",
                "value": [117.020359, 36.66853, -6],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#58B3CC"
                    }
                }
            }, {
                "name": "舟山",
                "value": [122.207216, 29.985295, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "连云港",
                "value": [119.221611, 34.596653, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "西安",
                "value": [108.940175, 34.341568, 3],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "济南",
                "value": [117.12, 36.651216, 4],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "绵阳",
                "value": [104.679114, 31.46745, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "辽宁",
                "value": [123.42944, 41.835441, -58],
                "symbolSize": 3,
                "itemStyle": {
                    "normal": {
                        "color": "#58B3CC"
                    }
                }
            }, {
                "name": "山西",
                "value": [112.562398, 37.873532, -3],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#58B3CC"
                    }
                }
            }, {
                "name": "呼和浩特",
                "value": [111.749181, 40.842585, 2],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "河西",
                "value": [117.223372, 39.109563, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "兴和",
                "value": [113.834173, 40.872301, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "重庆",
                "value": [106.551557, 29.56301, 2],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "胶州",
                "value": [120.033382, 36.26468, 5],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "宁波",
                "value": [121.550357, 29.874557, 10],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "滨海",
                "value": [119.820831, 33.990334, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "太原",
                "value": [112.548879, 37.87059, 2],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "鸡西",
                "value": [130.969333, 45.295075, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "兰山",
                "value": [118.347707, 35.051729, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "阳泉",
                "value": [113.580519, 37.856972, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "勃利",
                "value": [130.592171, 45.755063, 1],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }, {
                "name": "长春",
                "value": [125.323544, 43.817072, 8],
                "symbolSize": 2,
                "itemStyle": {
                    "normal": {
                        "color": "#F58158"
                    }
                }
            }],
            "moveLines": [{
                "fromName": "黑龙江",
                "toName": "珠海",
                "coords": [
                    [126.661669, 45.742347],
                    [113.576726, 22.270715]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "舒兰",
                "coords": [
                    [126.661669, 45.742347],
                    [126.965607, 44.406106]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "大连",
                "coords": [
                    [126.661669, 45.742347],
                    [121.614682, 38.914003]
                ]
            }, {
                "fromName": "辽宁",
                "toName": "集安",
                "coords": [
                    [123.42944, 41.835441],
                    [126.194031, 41.125307]
                ]
            }, {
                "fromName": "吉林",
                "toName": "抚顺",
                "coords": [
                    [126.549572, 43.837883],
                    [123.957208, 41.880872]
                ]
            }, {
                "fromName": "山东",
                "toName": "南京",
                "coords": [
                    [117.020359, 36.66853],
                    [118.796877, 32.060255]
                ]
            }, {
                "fromName": "北京",
                "toName": "沈阳",
                "coords": [
                    [116.407526, 39.90403],
                    [123.431475, 41.805698]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "环翠",
                "coords": [
                    [126.661669, 45.742347],
                    [122.123444, 37.501991]
                ]
            }, {
                "fromName": "天津",
                "toName": "大连",
                "coords": [
                    [117.200983, 39.084158],
                    [121.614682, 38.914003]
                ]
            }, {
                "fromName": "吉林",
                "toName": "兴和",
                "coords": [
                    [126.549572, 43.837883],
                    [113.834173, 40.872301]
                ]
            }, {
                "fromName": "河北",
                "toName": "勃利",
                "coords": [
                    [114.475704, 38.584854],
                    [130.592171, 45.755063]
                ]
            }, {
                "fromName": "吉林",
                "toName": "大连",
                "coords": [
                    [126.549572, 43.837883],
                    [121.614682, 38.914003]
                ]
            }, {
                "fromName": "吉林",
                "toName": "沈阳",
                "coords": [
                    [126.549572, 43.837883],
                    [123.431475, 41.805698]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "闵行",
                "coords": [
                    [126.661669, 45.742347],
                    [121.381709, 31.112813]
                ]
            }, {
                "fromName": "天津",
                "toName": "朝阳",
                "coords": [
                    [117.200983, 39.084158],
                    [116.443108, 39.92147]
                ]
            }, {
                "fromName": "吉林",
                "toName": "黄岛",
                "coords": [
                    [126.549572, 43.837883],
                    [120.04619, 35.872664]
                ]
            }, {
                "fromName": "内蒙古",
                "toName": "上海",
                "coords": [
                    [111.765618, 40.817498],
                    [121.473701, 31.230416]
                ]
            }, {
                "fromName": "内蒙古",
                "toName": "南京",
                "coords": [
                    [111.765618, 40.817498],
                    [118.796877, 32.060255]
                ]
            }, {
                "fromName": "辽宁",
                "toName": "杭州",
                "coords": [
                    [123.42944, 41.835441],
                    [120.15507, 30.274085]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "海城",
                "coords": [
                    [126.661669, 45.742347],
                    [122.685217, 40.882377]
                ]
            }, {
                "fromName": "吉林",
                "toName": "西城",
                "coords": [
                    [126.549572, 43.837883],
                    [116.365868, 39.912289]
                ]
            }, {
                "fromName": "四川",
                "toName": "上海",
                "coords": [
                    [104.075931, 30.651652],
                    [121.473701, 31.230416]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "西城",
                "coords": [
                    [126.661669, 45.742347],
                    [116.365868, 39.912289]
                ]
            }, {
                "fromName": "吉林",
                "toName": "丹东",
                "coords": [
                    [126.549572, 43.837883],
                    [124.354707, 40.0005]
                ]
            }, {
                "fromName": "吉林",
                "toName": "宁波",
                "coords": [
                    [126.549572, 43.837883],
                    [121.550357, 29.874557]
                ]
            }, {
                "fromName": "辽宁",
                "toName": "海淀",
                "coords": [
                    [123.42944, 41.835441],
                    [116.298056, 39.959912]
                ]
            }, {
                "fromName": "辽宁",
                "toName": "青岛",
                "coords": [
                    [123.42944, 41.835441],
                    [120.38264, 36.067082]
                ]
            }, {
                "fromName": "吉林",
                "toName": "苏州",
                "coords": [
                    [126.549572, 43.837883],
                    [120.585316, 31.298886]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "抚顺",
                "coords": [
                    [126.661669, 45.742347],
                    [123.957208, 41.880872]
                ]
            }, {
                "fromName": "吉林",
                "toName": "临安",
                "coords": [
                    [126.549572, 43.837883],
                    [119.724733, 30.233873]
                ]
            }, {
                "fromName": "辽宁",
                "toName": "烟台",
                "coords": [
                    [123.42944, 41.835441],
                    [121.447935, 37.463822]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "海淀",
                "coords": [
                    [126.661669, 45.742347],
                    [116.298056, 39.959912]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "南昌",
                "coords": [
                    [126.661669, 45.742347],
                    [115.858198, 28.682892]
                ]
            }, {
                "fromName": "内蒙古",
                "toName": "沈阳",
                "coords": [
                    [111.765618, 40.817498],
                    [123.431475, 41.805698]
                ]
            }, {
                "fromName": "山西",
                "toName": "城阳",
                "coords": [
                    [112.562398, 37.873532],
                    [120.39631, 36.307064]
                ]
            }, {
                "fromName": "吉林",
                "toName": "广州",
                "coords": [
                    [126.549572, 43.837883],
                    [113.264435, 23.129163]
                ]
            }, {
                "fromName": "上海",
                "toName": "沈阳",
                "coords": [
                    [121.473701, 31.230416],
                    [123.431475, 41.805698]
                ]
            }, {
                "fromName": "四川",
                "toName": "阳泉",
                "coords": [
                    [104.075931, 30.651652],
                    [113.580519, 37.856972]
                ]
            }, {
                "fromName": "河北",
                "toName": "桦川",
                "coords": [
                    [114.475704, 38.584854],
                    [130.719081, 47.023001]
                ]
            }, {
                "fromName": "内蒙古",
                "toName": "海淀",
                "coords": [
                    [111.765618, 40.817498],
                    [116.298056, 39.959912]
                ]
            }, {
                "fromName": "安徽",
                "toName": "河北",
                "coords": [
                    [117.284923, 31.861184],
                    [114.475704, 38.584854]
                ]
            }, {
                "fromName": "辽宁",
                "toName": "呼和浩特",
                "coords": [
                    [123.42944, 41.835441],
                    [111.749181, 40.842585]
                ]
            }, {
                "fromName": "广西",
                "toName": "茂名",
                "coords": [
                    [108.327546, 22.815478],
                    [110.925456, 21.662999]
                ]
            }, {
                "fromName": "吉林",
                "toName": "东城",
                "coords": [
                    [126.549572, 43.837883],
                    [116.416357, 39.928353]
                ]
            }, {
                "fromName": "内蒙古",
                "toName": "盘锦",
                "coords": [
                    [111.765618, 40.817498],
                    [122.070714, 41.119997]
                ]
            }, {
                "fromName": "山东",
                "toName": "哈尔滨",
                "coords": [
                    [117.020359, 36.66853],
                    [126.534967, 45.803775]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "沈阳",
                "coords": [
                    [126.661669, 45.742347],
                    [123.431475, 41.805698]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "丰台",
                "coords": [
                    [126.661669, 45.742347],
                    [116.287149, 39.858427]
                ]
            }, {
                "fromName": "四川",
                "toName": "盘锦",
                "coords": [
                    [104.075931, 30.651652],
                    [122.070714, 41.119997]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "皇姑",
                "coords": [
                    [126.661669, 45.742347],
                    [123.44197, 41.824796]
                ]
            }, {
                "fromName": "河北",
                "toName": "虎林",
                "coords": [
                    [114.475704, 38.584854],
                    [132.93721, 45.762686]
                ]
            }, {
                "fromName": "辽宁",
                "toName": "宝山",
                "coords": [
                    [123.42944, 41.835441],
                    [131.401589, 46.577167]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "吉林",
                "coords": [
                    [126.661669, 45.742347],
                    [126.549572, 43.837883]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "青岛",
                "coords": [
                    [126.661669, 45.742347],
                    [120.38264, 36.067082]
                ]
            }, {
                "fromName": "吉林",
                "toName": "烟台",
                "coords": [
                    [126.549572, 43.837883],
                    [121.447935, 37.463822]
                ]
            }, {
                "fromName": "山东",
                "toName": "临江",
                "coords": [
                    [117.020359, 36.66853],
                    [126.918087, 41.811979]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "黄岛",
                "coords": [
                    [126.661669, 45.742347],
                    [120.04619, 35.872664]
                ]
            }, {
                "fromName": "吉林",
                "toName": "石家庄",
                "coords": [
                    [126.549572, 43.837883],
                    [114.51486, 38.042307]
                ]
            }, {
                "fromName": "吉林",
                "toName": "汤原",
                "coords": [
                    [126.549572, 43.837883],
                    [129.905072, 46.730706]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "临江",
                "coords": [
                    [126.661669, 45.742347],
                    [126.918087, 41.811979]
                ]
            }, {
                "fromName": "吉林",
                "toName": "济南",
                "coords": [
                    [126.549572, 43.837883],
                    [117.12, 36.651216]
                ]
            }, {
                "fromName": "吉林",
                "toName": "太原",
                "coords": [
                    [126.549572, 43.837883],
                    [112.548879, 37.87059]
                ]
            }, {
                "fromName": "吉林",
                "toName": "威海",
                "coords": [
                    [126.549572, 43.837883],
                    [122.12042, 37.513068]
                ]
            }, {
                "fromName": "湖北",
                "toName": "深圳",
                "coords": [
                    [114.341862, 30.546498],
                    [114.057868, 22.543099]
                ]
            }, {
                "fromName": "内蒙古",
                "toName": "荣成",
                "coords": [
                    [111.765618, 40.817498],
                    [122.486658, 37.16516]
                ]
            }, {
                "fromName": "辽宁",
                "toName": "郑州",
                "coords": [
                    [123.42944, 41.835441],
                    [113.625368, 34.7466]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "朝阳",
                "coords": [
                    [126.661669, 45.742347],
                    [116.443108, 39.92147]
                ]
            }, {
                "fromName": "吉林",
                "toName": "昆山",
                "coords": [
                    [126.549572, 43.837883],
                    [120.980737, 31.385598]
                ]
            }, {
                "fromName": "吉林",
                "toName": "双城",
                "coords": [
                    [126.549572, 43.837883],
                    [126.312745, 45.383263]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "克拉玛依",
                "coords": [
                    [126.661669, 45.742347],
                    [84.889207, 45.579889]
                ]
            }, {
                "fromName": "辽宁",
                "toName": "上海",
                "coords": [
                    [123.42944, 41.835441],
                    [121.473701, 31.230416]
                ]
            }, {
                "fromName": "吉林",
                "toName": "海阳",
                "coords": [
                    [126.549572, 43.837883],
                    [121.158434, 36.776378]
                ]
            }, {
                "fromName": "吉林",
                "toName": "宣武门外东大街",
                "coords": [
                    [126.549572, 43.837883],
                    [116.378888, 39.899332]
                ]
            }, {
                "fromName": "山东",
                "toName": "海淀",
                "coords": [
                    [117.020359, 36.66853],
                    [116.298056, 39.959912]
                ]
            }, {
                "fromName": "内蒙古",
                "toName": "威海",
                "coords": [
                    [111.765618, 40.817498],
                    [122.12042, 37.513068]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "晋中",
                "coords": [
                    [126.661669, 45.742347],
                    [112.752695, 37.687024]
                ]
            }, {
                "fromName": "西藏",
                "toName": "广州",
                "coords": [
                    [91.117212, 29.646923],
                    [113.264435, 23.129163]
                ]
            }, {
                "fromName": "辽宁",
                "toName": "无锡",
                "coords": [
                    [123.42944, 41.835441],
                    [120.31191, 31.49117]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "城阳",
                "coords": [
                    [126.661669, 45.742347],
                    [120.39631, 36.307064]
                ]
            }, {
                "fromName": "河北",
                "toName": "丰台",
                "coords": [
                    [114.475704, 38.584854],
                    [116.287149, 39.858427]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "扬州",
                "coords": [
                    [126.661669, 45.742347],
                    [119.412966, 32.39421]
                ]
            }, {
                "fromName": "辽宁",
                "toName": "天津",
                "coords": [
                    [123.42944, 41.835441],
                    [117.200983, 39.084158]
                ]
            }, {
                "fromName": "吉林",
                "toName": "扬州",
                "coords": [
                    [126.549572, 43.837883],
                    [119.412966, 32.39421]
                ]
            }, {
                "fromName": "吉林",
                "toName": "嘉兴",
                "coords": [
                    [126.549572, 43.837883],
                    [120.755486, 30.746129]
                ]
            }, {
                "fromName": "河北",
                "toName": "延寿",
                "coords": [
                    [114.475704, 38.584854],
                    [128.331644, 45.451897]
                ]
            }, {
                "fromName": "吉林",
                "toName": "义乌",
                "coords": [
                    [126.549572, 43.837883],
                    [120.075058, 29.306841]
                ]
            }, {
                "fromName": "吉林",
                "toName": "张家港",
                "coords": [
                    [126.549572, 43.837883],
                    [120.553284, 31.870367]
                ]
            }, {
                "fromName": "辽宁",
                "toName": "贵阳",
                "coords": [
                    [123.42944, 41.835441],
                    [106.630154, 26.647661]
                ]
            }, {
                "fromName": "吉林",
                "toName": "辽宁",
                "coords": [
                    [126.549572, 43.837883],
                    [123.42944, 41.835441]
                ]
            }, {
                "fromName": "河南",
                "toName": "营口",
                "coords": [
                    [113.274379, 34.445122],
                    [122.235418, 40.667012]
                ]
            }, {
                "fromName": "吉林",
                "toName": "合肥",
                "coords": [
                    [126.549572, 43.837883],
                    [117.227239, 31.820587]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "苏州",
                "coords": [
                    [126.661669, 45.742347],
                    [120.585316, 31.298886]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "榆树",
                "coords": [
                    [126.661669, 45.742347],
                    [126.533146, 44.840288]
                ]
            }, {
                "fromName": "吉林",
                "toName": "常熟",
                "coords": [
                    [126.549572, 43.837883],
                    [120.752481, 31.654376]
                ]
            }, {
                "fromName": "吉林",
                "toName": "乳山",
                "coords": [
                    [126.549572, 43.837883],
                    [121.539765, 36.919816]
                ]
            }, {
                "fromName": "四川",
                "toName": "青岛",
                "coords": [
                    [104.075931, 30.651652],
                    [120.38264, 36.067082]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "深圳",
                "coords": [
                    [126.661669, 45.742347],
                    [114.057868, 22.543099]
                ]
            }, {
                "fromName": "天津",
                "toName": "东城",
                "coords": [
                    [117.200983, 39.084158],
                    [116.416357, 39.928353]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "上海",
                "coords": [
                    [126.661669, 45.742347],
                    [121.473701, 31.230416]
                ]
            }, {
                "fromName": "天津",
                "toName": "宁波",
                "coords": [
                    [117.200983, 39.084158],
                    [121.550357, 29.874557]
                ]
            }, {
                "fromName": "吉林",
                "toName": "海门",
                "coords": [
                    [126.549572, 43.837883],
                    [121.181615, 31.871173]
                ]
            }, {
                "fromName": "山西",
                "toName": "沈阳",
                "coords": [
                    [112.562398, 37.873532],
                    [123.431475, 41.805698]
                ]
            }, {
                "fromName": "吉林",
                "toName": "成都",
                "coords": [
                    [126.549572, 43.837883],
                    [104.066541, 30.572269]
                ]
            }, {
                "fromName": "吉林",
                "toName": "南昌",
                "coords": [
                    [126.549572, 43.837883],
                    [115.858198, 28.682892]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "常州",
                "coords": [
                    [126.661669, 45.742347],
                    [119.973987, 31.810689]
                ]
            }, {
                "fromName": "内蒙古",
                "toName": "兰山",
                "coords": [
                    [111.765618, 40.817498],
                    [118.347707, 35.051729]
                ]
            }, {
                "fromName": "吉林",
                "toName": "河南",
                "coords": [
                    [126.549572, 43.837883],
                    [113.274379, 34.445122]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "福田",
                "coords": [
                    [126.661669, 45.742347],
                    [114.055036, 22.52153]
                ]
            }, {
                "fromName": "吉林",
                "toName": "常州",
                "coords": [
                    [126.549572, 43.837883],
                    [119.973987, 31.810689]
                ]
            }, {
                "fromName": "吉林",
                "toName": "双流",
                "coords": [
                    [126.549572, 43.837883],
                    [103.923648, 30.574473]
                ]
            }, {
                "fromName": "吉林",
                "toName": "潍坊",
                "coords": [
                    [126.549572, 43.837883],
                    [119.161756, 36.706774]
                ]
            }, {
                "fromName": "吉林",
                "toName": "延安",
                "coords": [
                    [126.549572, 43.837883],
                    [109.489727, 36.585455]
                ]
            }, {
                "fromName": "辽宁",
                "toName": "长春",
                "coords": [
                    [123.42944, 41.835441],
                    [125.323544, 43.817072]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "南京",
                "coords": [
                    [126.661669, 45.742347],
                    [118.796877, 32.060255]
                ]
            }, {
                "fromName": "辽宁",
                "toName": "和平",
                "coords": [
                    [123.42944, 41.835441],
                    [117.21451, 39.116949]
                ]
            }, {
                "fromName": "北京",
                "toName": "哈尔滨",
                "coords": [
                    [116.407526, 39.90403],
                    [126.534967, 45.803775]
                ]
            }, {
                "fromName": "吉林",
                "toName": "武汉",
                "coords": [
                    [126.549572, 43.837883],
                    [114.305393, 30.593099]
                ]
            }, {
                "fromName": "吉林",
                "toName": "海陵",
                "coords": [
                    [126.549572, 43.837883],
                    [119.919425, 32.491016]
                ]
            }, {
                "fromName": "吉林",
                "toName": "日照",
                "coords": [
                    [126.549572, 43.837883],
                    [119.526888, 35.416377]
                ]
            }, {
                "fromName": "吉林",
                "toName": "台州",
                "coords": [
                    [126.549572, 43.837883],
                    [121.420757, 28.656386]
                ]
            }, {
                "fromName": "辽宁",
                "toName": "厦门",
                "coords": [
                    [123.42944, 41.835441],
                    [118.089425, 24.479834]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "贵阳",
                "coords": [
                    [126.661669, 45.742347],
                    [106.630154, 26.647661]
                ]
            }, {
                "fromName": "吉林",
                "toName": "鞍山",
                "coords": [
                    [126.549572, 43.837883],
                    [122.994329, 41.108647]
                ]
            }, {
                "fromName": "辽宁",
                "toName": "荣成",
                "coords": [
                    [123.42944, 41.835441],
                    [122.486658, 37.16516]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "天津",
                "coords": [
                    [126.661669, 45.742347],
                    [117.200983, 39.084158]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "河西",
                "coords": [
                    [126.661669, 45.742347],
                    [117.223372, 39.109563]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "秦皇岛",
                "coords": [
                    [126.661669, 45.742347],
                    [119.600493, 39.935385]
                ]
            }, {
                "fromName": "吉林",
                "toName": "荆州",
                "coords": [
                    [126.549572, 43.837883],
                    [112.239741, 30.335165]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "东城",
                "coords": [
                    [126.661669, 45.742347],
                    [116.416357, 39.928353]
                ]
            }, {
                "fromName": "吉林",
                "toName": "即墨",
                "coords": [
                    [126.549572, 43.837883],
                    [120.447128, 36.389639]
                ]
            }, {
                "fromName": "辽宁",
                "toName": "西城",
                "coords": [
                    [123.42944, 41.835441],
                    [116.365868, 39.912289]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "大兴",
                "coords": [
                    [126.661669, 45.742347],
                    [116.341395, 39.726929]
                ]
            }, {
                "fromName": "河北",
                "toName": "哈尔滨",
                "coords": [
                    [114.475704, 38.584854],
                    [126.534967, 45.803775]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "江苏",
                "coords": [
                    [126.661669, 45.742347],
                    [118.763232, 32.061707]
                ]
            }, {
                "fromName": "吉林",
                "toName": "和平",
                "coords": [
                    [126.549572, 43.837883],
                    [117.21451, 39.116949]
                ]
            }, {
                "fromName": "江苏",
                "toName": "鸡东",
                "coords": [
                    [118.763232, 32.061707],
                    [131.12408, 45.260412]
                ]
            }, {
                "fromName": "辽宁",
                "toName": "辉南",
                "coords": [
                    [123.42944, 41.835441],
                    [126.046912, 42.684993]
                ]
            }, {
                "fromName": "吉林",
                "toName": "深圳",
                "coords": [
                    [126.549572, 43.837883],
                    [114.057868, 22.543099]
                ]
            }, {
                "fromName": "福建",
                "toName": "泰顺",
                "coords": [
                    [119.295144, 26.10078],
                    [119.717649, 27.556884]
                ]
            }, {
                "fromName": "上海",
                "toName": "深圳",
                "coords": [
                    [121.473701, 31.230416],
                    [114.057868, 22.543099]
                ]
            }, {
                "fromName": "吉林",
                "toName": "秦皇岛",
                "coords": [
                    [126.549572, 43.837883],
                    [119.600493, 39.935385]
                ]
            }, {
                "fromName": "吉林",
                "toName": "徐汇",
                "coords": [
                    [126.549572, 43.837883],
                    [121.436525, 31.188523]
                ]
            }, {
                "fromName": "吉林",
                "toName": "石景山",
                "coords": [
                    [126.549572, 43.837883],
                    [116.222982, 39.906611]
                ]
            }, {
                "fromName": "辽宁",
                "toName": "城阳",
                "coords": [
                    [123.42944, 41.835441],
                    [120.39631, 36.307064]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "威海",
                "coords": [
                    [126.661669, 45.742347],
                    [122.12042, 37.513068]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "惠州",
                "coords": [
                    [126.661669, 45.742347],
                    [114.416196, 23.111847]
                ]
            }, {
                "fromName": "吉林",
                "toName": "龙口",
                "coords": [
                    [126.549572, 43.837883],
                    [120.477813, 37.646108]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "四平",
                "coords": [
                    [126.661669, 45.742347],
                    [124.350398, 43.16642]
                ]
            }, {
                "fromName": "吉林",
                "toName": "南充",
                "coords": [
                    [126.549572, 43.837883],
                    [106.110698, 30.837793]
                ]
            }, {
                "fromName": "河北",
                "toName": "东港",
                "coords": [
                    [114.475704, 38.584854],
                    [124.152705, 39.863008]
                ]
            }, {
                "fromName": "辽宁",
                "toName": "西安",
                "coords": [
                    [123.42944, 41.835441],
                    [108.940175, 34.341568]
                ]
            }, {
                "fromName": "内蒙古",
                "toName": "滨海",
                "coords": [
                    [111.765618, 40.817498],
                    [119.820831, 33.990334]
                ]
            }, {
                "fromName": "河南",
                "toName": "青岛",
                "coords": [
                    [113.274379, 34.445122],
                    [120.38264, 36.067082]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "昆山",
                "coords": [
                    [126.661669, 45.742347],
                    [120.980737, 31.385598]
                ]
            }, {
                "fromName": "辽宁",
                "toName": "长沙",
                "coords": [
                    [123.42944, 41.835441],
                    [112.938814, 28.228209]
                ]
            }, {
                "fromName": "吉林",
                "toName": "哈尔滨",
                "coords": [
                    [126.549572, 43.837883],
                    [126.534967, 45.803775]
                ]
            }, {
                "fromName": "河北",
                "toName": "尚志",
                "coords": [
                    [114.475704, 38.584854],
                    [128.009895, 45.209586]
                ]
            }, {
                "fromName": "辽宁",
                "toName": "东城",
                "coords": [
                    [123.42944, 41.835441],
                    [116.416357, 39.928353]
                ]
            }, {
                "fromName": "辽宁",
                "toName": "珠海",
                "coords": [
                    [123.42944, 41.835441],
                    [113.576726, 22.270715]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "铁岭",
                "coords": [
                    [126.661669, 45.742347],
                    [123.726166, 42.223769]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "蓬莱",
                "coords": [
                    [126.661669, 45.742347],
                    [120.758848, 37.810661]
                ]
            }, {
                "fromName": "北京",
                "toName": "天津",
                "coords": [
                    [116.407526, 39.90403],
                    [117.200983, 39.084158]
                ]
            }, {
                "fromName": "内蒙古",
                "toName": "天津",
                "coords": [
                    [111.765618, 40.817498],
                    [117.200983, 39.084158]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "宁波",
                "coords": [
                    [126.661669, 45.742347],
                    [121.550357, 29.874557]
                ]
            }, {
                "fromName": "吉林",
                "toName": "上海",
                "coords": [
                    [126.549572, 43.837883],
                    [121.473701, 31.230416]
                ]
            }, {
                "fromName": "辽宁",
                "toName": "佛山",
                "coords": [
                    [123.42944, 41.835441],
                    [113.121416, 23.021548]
                ]
            }, {
                "fromName": "吉林",
                "toName": "长宁",
                "coords": [
                    [126.549572, 43.837883],
                    [121.424624, 31.220367]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "珲春",
                "coords": [
                    [126.661669, 45.742347],
                    [130.366036, 42.862821]
                ]
            }, {
                "fromName": "山东",
                "toName": "黄浦",
                "coords": [
                    [117.020359, 36.66853],
                    [121.484443, 31.231763]
                ]
            }, {
                "fromName": "辽宁",
                "toName": "威海",
                "coords": [
                    [123.42944, 41.835441],
                    [122.12042, 37.513068]
                ]
            }, {
                "fromName": "天津",
                "toName": "长春",
                "coords": [
                    [117.200983, 39.084158],
                    [125.323544, 43.817072]
                ]
            }, {
                "fromName": "新疆",
                "toName": "上海",
                "coords": [
                    [87.627704, 43.793026],
                    [121.473701, 31.230416]
                ]
            }, {
                "fromName": "河北",
                "toName": "鸡西",
                "coords": [
                    [114.475704, 38.584854],
                    [130.969333, 45.295075]
                ]
            }, {
                "fromName": "陕西",
                "toName": "呼和浩特",
                "coords": [
                    [108.954239, 34.265472],
                    [111.749181, 40.842585]
                ]
            }, {
                "fromName": "吉林",
                "toName": "连云港",
                "coords": [
                    [126.549572, 43.837883],
                    [119.221611, 34.596653]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "杭州",
                "coords": [
                    [126.661669, 45.742347],
                    [120.15507, 30.274085]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "嘉兴",
                "coords": [
                    [126.661669, 45.742347],
                    [120.755486, 30.746129]
                ]
            }, {
                "fromName": "陕西",
                "toName": "盘锦",
                "coords": [
                    [108.954239, 34.265472],
                    [122.070714, 41.119997]
                ]
            }, {
                "fromName": "河北",
                "toName": "同江",
                "coords": [
                    [114.475704, 38.584854],
                    [132.510919, 47.642707]
                ]
            }, {
                "fromName": "吉林",
                "toName": "杭州",
                "coords": [
                    [126.549572, 43.837883],
                    [120.15507, 30.274085]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "舟山",
                "coords": [
                    [126.661669, 45.742347],
                    [122.207216, 29.985295]
                ]
            }, {
                "fromName": "河南",
                "toName": "大连",
                "coords": [
                    [113.274379, 34.445122],
                    [121.614682, 38.914003]
                ]
            }, {
                "fromName": "辽宁",
                "toName": "绵阳",
                "coords": [
                    [123.42944, 41.835441],
                    [104.679114, 31.46745]
                ]
            }, {
                "fromName": "吉林",
                "toName": "溆浦",
                "coords": [
                    [126.549572, 43.837883],
                    [110.594921, 27.908281]
                ]
            }, {
                "fromName": "吉林",
                "toName": "朝阳",
                "coords": [
                    [126.549572, 43.837883],
                    [116.443108, 39.92147]
                ]
            }, {
                "fromName": "吉林",
                "toName": "无锡",
                "coords": [
                    [126.549572, 43.837883],
                    [120.31191, 31.49117]
                ]
            }, {
                "fromName": "浙江",
                "toName": "沈阳",
                "coords": [
                    [120.152792, 30.267447],
                    [123.431475, 41.805698]
                ]
            }, {
                "fromName": "吉林",
                "toName": "湖里",
                "coords": [
                    [126.549572, 43.837883],
                    [118.146769, 24.512905]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "无锡",
                "coords": [
                    [126.661669, 45.742347],
                    [120.31191, 31.49117]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "长宁",
                "coords": [
                    [126.661669, 45.742347],
                    [121.424624, 31.220367]
                ]
            }, {
                "fromName": "辽宁",
                "toName": "胶州",
                "coords": [
                    [123.42944, 41.835441],
                    [120.033382, 36.26468]
                ]
            }, {
                "fromName": "吉林",
                "toName": "青岛",
                "coords": [
                    [126.549572, 43.837883],
                    [120.38264, 36.067082]
                ]
            }, {
                "fromName": "河北",
                "toName": "海淀",
                "coords": [
                    [114.475704, 38.584854],
                    [116.298056, 39.959912]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "厦门",
                "coords": [
                    [126.661669, 45.742347],
                    [118.089425, 24.479834]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "中山",
                "coords": [
                    [126.661669, 45.742347],
                    [113.392782, 22.517646]
                ]
            }, {
                "fromName": "河北",
                "toName": "太原",
                "coords": [
                    [114.475704, 38.584854],
                    [112.548879, 37.87059]
                ]
            }, {
                "fromName": "新疆",
                "toName": "吉林",
                "coords": [
                    [87.627704, 43.793026],
                    [126.549572, 43.837883]
                ]
            }, {
                "fromName": "吉林",
                "toName": "武侯",
                "coords": [
                    [126.549572, 43.837883],
                    [104.04339, 30.641982]
                ]
            }, {
                "fromName": "北京",
                "toName": "廊坊",
                "coords": [
                    [116.407526, 39.90403],
                    [116.683752, 39.538047]
                ]
            }, {
                "fromName": "浙江",
                "toName": "临汾",
                "coords": [
                    [120.152792, 30.267447],
                    [111.518976, 36.088005]
                ]
            }, {
                "fromName": "湖北",
                "toName": "天津",
                "coords": [
                    [114.341862, 30.546498],
                    [117.200983, 39.084158]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "泉州",
                "coords": [
                    [126.661669, 45.742347],
                    [118.675676, 24.874132]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "温州",
                "coords": [
                    [126.661669, 45.742347],
                    [120.699367, 27.994267]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "唐山",
                "coords": [
                    [126.661669, 45.742347],
                    [118.180194, 39.630867]
                ]
            }, {
                "fromName": "北京",
                "toName": "铁岭",
                "coords": [
                    [116.407526, 39.90403],
                    [123.726166, 42.223769]
                ]
            }, {
                "fromName": "辽宁",
                "toName": "即墨",
                "coords": [
                    [123.42944, 41.835441],
                    [120.447128, 36.389639]
                ]
            }, {
                "fromName": "北京",
                "toName": "上海",
                "coords": [
                    [116.407526, 39.90403],
                    [121.473701, 31.230416]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "广州",
                "coords": [
                    [126.661669, 45.742347],
                    [113.264435, 23.129163]
                ]
            }, {
                "fromName": "吉林",
                "toName": "廊坊",
                "coords": [
                    [126.549572, 43.837883],
                    [116.683752, 39.538047]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "荣成",
                "coords": [
                    [126.661669, 45.742347],
                    [122.486658, 37.16516]
                ]
            }, {
                "fromName": "吉林",
                "toName": "海城",
                "coords": [
                    [126.549572, 43.837883],
                    [122.685217, 40.882377]
                ]
            }, {
                "fromName": "湖南",
                "toName": "沈阳",
                "coords": [
                    [112.98381, 28.112444],
                    [123.431475, 41.805698]
                ]
            }, {
                "fromName": "北京",
                "toName": "青岛",
                "coords": [
                    [116.407526, 39.90403],
                    [120.38264, 36.067082]
                ]
            }, {
                "fromName": "河北",
                "toName": "大连",
                "coords": [
                    [114.475704, 38.584854],
                    [121.614682, 38.914003]
                ]
            }, {
                "fromName": "内蒙古",
                "toName": "珠海",
                "coords": [
                    [111.765618, 40.817498],
                    [113.576726, 22.270715]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "房山",
                "coords": [
                    [126.661669, 45.742347],
                    [116.143267, 39.749144]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "金坛",
                "coords": [
                    [126.661669, 45.742347],
                    [119.597897, 31.723247]
                ]
            }, {
                "fromName": "河北",
                "toName": "齐齐哈尔",
                "coords": [
                    [114.475704, 38.584854],
                    [126.661669, 45.742347]
                ]
            }, {
                "fromName": "吉林",
                "toName": "大兴",
                "coords": [
                    [126.549572, 43.837883],
                    [116.341395, 39.726929]
                ]
            }, {
                "fromName": "吉林",
                "toName": "密云",
                "coords": [
                    [126.549572, 43.837883],
                    [116.801346, 40.35874]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "和平",
                "coords": [
                    [126.661669, 45.742347],
                    [117.21451, 39.116949]
                ]
            }, {
                "fromName": "内蒙古",
                "toName": "龙井",
                "coords": [
                    [111.765618, 40.817498],
                    [129.427066, 42.766311]
                ]
            }, {
                "fromName": "吉林",
                "toName": "道里",
                "coords": [
                    [126.549572, 43.837883],
                    [126.616957, 45.755777]
                ]
            }, {
                "fromName": "山东",
                "toName": "武汉",
                "coords": [
                    [117.020359, 36.66853],
                    [114.305393, 30.593099]
                ]
            }, {
                "fromName": "甘肃",
                "toName": "常熟",
                "coords": [
                    [103.826308, 36.059421],
                    [120.752481, 31.654376]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "烟台",
                "coords": [
                    [126.661669, 45.742347],
                    [121.447935, 37.463822]
                ]
            }, {
                "fromName": "吉林",
                "toName": "海淀",
                "coords": [
                    [126.549572, 43.837883],
                    [116.298056, 39.959912]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "长沙",
                "coords": [
                    [126.661669, 45.742347],
                    [112.938814, 28.228209]
                ]
            }, {
                "fromName": "天津",
                "toName": "石家庄",
                "coords": [
                    [117.200983, 39.084158],
                    [114.51486, 38.042307]
                ]
            }, {
                "fromName": "吉林",
                "toName": "佛山",
                "coords": [
                    [126.549572, 43.837883],
                    [113.121416, 23.021548]
                ]
            }, {
                "fromName": "辽宁",
                "toName": "黄骅",
                "coords": [
                    [123.42944, 41.835441],
                    [117.330048, 38.371383]
                ]
            }, {
                "fromName": "内蒙古",
                "toName": "中山",
                "coords": [
                    [111.765618, 40.817498],
                    [113.392782, 22.517646]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "北京",
                "coords": [
                    [126.661669, 45.742347],
                    [116.407526, 39.90403]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "三河",
                "coords": [
                    [126.661669, 45.742347],
                    [117.078295, 39.982718]
                ]
            }, {
                "fromName": "河北",
                "toName": "庆安",
                "coords": [
                    [114.475704, 38.584854],
                    [127.507825, 46.880102]
                ]
            }, {
                "fromName": "吉林",
                "toName": "长沙",
                "coords": [
                    [126.549572, 43.837883],
                    [112.938814, 28.228209]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "西安",
                "coords": [
                    [126.661669, 45.742347],
                    [108.940175, 34.341568]
                ]
            }, {
                "fromName": "内蒙古",
                "toName": "朝阳",
                "coords": [
                    [111.765618, 40.817498],
                    [116.443108, 39.92147]
                ]
            }, {
                "fromName": "辽宁",
                "toName": "丰台",
                "coords": [
                    [123.42944, 41.835441],
                    [116.287149, 39.858427]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "延吉",
                "coords": [
                    [126.661669, 45.742347],
                    [129.508946, 42.891255]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "长春",
                "coords": [
                    [126.661669, 45.742347],
                    [125.323544, 43.817072]
                ]
            }, {
                "fromName": "吉林",
                "toName": "天津",
                "coords": [
                    [126.549572, 43.837883],
                    [117.200983, 39.084158]
                ]
            }, {
                "fromName": "吉林",
                "toName": "昌平",
                "coords": [
                    [126.549572, 43.837883],
                    [116.231204, 40.22066]
                ]
            }, {
                "fromName": "吉林",
                "toName": "赣州",
                "coords": [
                    [126.549572, 43.837883],
                    [114.93503, 25.831829]
                ]
            }, {
                "fromName": "吉林",
                "toName": "厦门",
                "coords": [
                    [126.549572, 43.837883],
                    [118.089425, 24.479834]
                ]
            }, {
                "fromName": "内蒙古",
                "toName": "秦皇岛",
                "coords": [
                    [111.765618, 40.817498],
                    [119.600493, 39.935385]
                ]
            }, {
                "fromName": "内蒙古",
                "toName": "菏泽",
                "coords": [
                    [111.765618, 40.817498],
                    [115.480656, 35.23375]
                ]
            }, {
                "fromName": "吉林",
                "toName": "闵行",
                "coords": [
                    [126.549572, 43.837883],
                    [121.381709, 31.112813]
                ]
            }, {
                "fromName": "辽宁",
                "toName": "石景山",
                "coords": [
                    [123.42944, 41.835441],
                    [116.222982, 39.906611]
                ]
            }, {
                "fromName": "吉林",
                "toName": "珠海",
                "coords": [
                    [126.549572, 43.837883],
                    [113.576726, 22.270715]
                ]
            }, {
                "fromName": "内蒙古",
                "toName": "青岛",
                "coords": [
                    [111.765618, 40.817498],
                    [120.38264, 36.067082]
                ]
            }, {
                "fromName": "北京",
                "toName": "海门",
                "coords": [
                    [116.407526, 39.90403],
                    [121.181615, 31.871173]
                ]
            }, {
                "fromName": "内蒙古",
                "toName": "长春",
                "coords": [
                    [111.765618, 40.817498],
                    [125.323544, 43.817072]
                ]
            }, {
                "fromName": "吉林",
                "toName": "城阳",
                "coords": [
                    [126.549572, 43.837883],
                    [120.39631, 36.307064]
                ]
            }, {
                "fromName": "吉林",
                "toName": "大同",
                "coords": [
                    [126.549572, 43.837883],
                    [113.61244, 40.040295]
                ]
            }, {
                "fromName": "湖北",
                "toName": "邢台",
                "coords": [
                    [114.341862, 30.546498],
                    [114.504844, 37.070589]
                ]
            }, {
                "fromName": "吉林",
                "toName": "胶州",
                "coords": [
                    [126.549572, 43.837883],
                    [120.033382, 36.26468]
                ]
            }, {
                "fromName": "吉林",
                "toName": "重庆",
                "coords": [
                    [126.549572, 43.837883],
                    [106.551557, 29.56301]
                ]
            }, {
                "fromName": "河北",
                "toName": "佳木斯",
                "coords": [
                    [114.475704, 38.584854],
                    [130.318917, 46.799923]
                ]
            }, {
                "fromName": "甘肃",
                "toName": "大连",
                "coords": [
                    [103.826308, 36.059421],
                    [121.614682, 38.914003]
                ]
            }, {
                "fromName": "吉林",
                "toName": "南京",
                "coords": [
                    [126.549572, 43.837883],
                    [118.796877, 32.060255]
                ]
            }, {
                "fromName": "内蒙古",
                "toName": "日照",
                "coords": [
                    [111.765618, 40.817498],
                    [119.526888, 35.416377]
                ]
            }, {
                "fromName": "吉林",
                "toName": "鸡东",
                "coords": [
                    [126.549572, 43.837883],
                    [131.12408, 45.260412]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "即墨",
                "coords": [
                    [126.661669, 45.742347],
                    [120.447128, 36.389639]
                ]
            }, {
                "fromName": "江苏",
                "toName": "朝阳",
                "coords": [
                    [118.763232, 32.061707],
                    [116.443108, 39.92147]
                ]
            }, {
                "fromName": "吉林",
                "toName": "南通",
                "coords": [
                    [126.549572, 43.837883],
                    [120.894291, 31.980172]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "张家港",
                "coords": [
                    [126.661669, 45.742347],
                    [120.553284, 31.870367]
                ]
            }, {
                "fromName": "吉林",
                "toName": "三河",
                "coords": [
                    [126.549572, 43.837883],
                    [117.078295, 39.982718]
                ]
            }, {
                "fromName": "吉林",
                "toName": "咸阳",
                "coords": [
                    [126.549572, 43.837883],
                    [108.708991, 34.329605]
                ]
            }, {
                "fromName": "吉林",
                "toName": "中山",
                "coords": [
                    [126.549572, 43.837883],
                    [113.392782, 22.517646]
                ]
            }, {
                "fromName": "黑龙江",
                "toName": "胶州",
                "coords": [
                    [126.661669, 45.742347],
                    [120.033382, 36.26468]
                ]
            }]
        };

        option = {
            backgroundColor: '#262829',
            title: {
                text: '店铺分布交互图',
                left: 'center',
                textStyle: {
                    color: '#00fff9',
                    fontSize: 25
                }
            },
            legend: {
                show: false,
                orient: 'vertical',
                top: 'bottom',
                left: 'right',
                data: ['地点', '线路'],
                textStyle: {
                    color: '#fff'
                }
            },
            /*grid: {
                show: true,
                borderColor: '#223737',
                backgroundColor: ''
            },*/
            geo: {
                map: 'china',
                label: {
                    emphasis: {
                        show: false
                    }
                },
                zoom: 1.2,
                roam: true,
                itemStyle: {
                    normal: {
                        areaColor: '#323c48',
                        borderColor: '#404a59'
                    },
                    emphasis: {
                        areaColor: '#00fff9'
                    }
                }
            },
            series: [{
                name: '地点',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: {
                    brushType: 'stroke'
                },
                effectType: 'ripple',
                label: {
                    emphasis: {
                        show: true,
                        position: 'right',
                        formatter: '{b}'
                    }
                },
                symbolSize: 2,
                showEffectOn: 'render',
                itemStyle: {
                    normal: {
                        color: '#46bee9'
                    }
                },
                data: allData.citys
            }, {
                name: '线路',
                type: 'lines',
                coordinateSystem: 'geo',
                zlevel: 2,
                large: true,
                effect: {
                    show: true,
                    constantSpeed: 30,
                    symbol: 'pin',
                    symbolSize: 3,
                    trailLength: 0,
                },
                /*  markLine: {
                      lineStyle: {
                          normal: {
                              color: '#000'
                          }
                      }
                  },*/
                lineStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#58B3CC'
                        }, {
                            offset: 1,
                            color: '#F58158'
                        }], false),
                        width: 1,
                        opacity: 0.2,
                        curveness: 0.1
                    }
                },
                data: allData.moveLines
            }]
        };

        myChart.setOption(option);
    })();

    (function () {
        var myChart = echarts.init(document.getElementById('pic12'));



        var option = {

            tooltip: {
                trigger: 'item',
                textStyle: {
                    color: '#00fff9'
                },
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },

            series: [
                {
                    name: '报修',
                    type: 'pie',
                    selectedMode: 'single',
                    radius: [0, '40%'],

                    label: {
                        normal: {
                            position: 'center',
                            textStyle: {
                                color: '#00fff9',
                                fontWeight: 'bold',
                                fontSize: 18
                            }
                        },
                        emphasis: {
                            textStyle: {
                                color: '#000',
                                fontSize: 18,
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#262829'
                        },
                        emphasis: {
                            color: '#fff'
                        }
                    },
                    center: ['50%', '60%'],
                    data: [
                        {
                            value: 100,
                            name: '100\n\n报修总数'
                            },

            ]
        },
                {
                    name: '报修统计',
                    type: 'pie',
                    radius: ['50%', '65%'],
                    labelLine: {
                        normal: {
                            show: true,
                            lineStyle: {
                                color: '#fff'
                            },
                            length: 30
                        }
                    },
                    label: {
                        normal: {
                            textStyle: {
                                color: '#00fff9',
                                fontSize: 16
                            },
                            formatter: '{b}: {c}'
                        },
                        emphasis: {
                            textStyle: {
                                color: '#fff',
                                fontSize: 14
                            },
                            formatter: '{b}: {c}'
                        }
                    },
                    center: ['50%', '60%'],
                    data: [

                        {
                            value: 50,
                            name: '已完成维修'
                            },
                        {
                            value: 25,
                            name: '正在维修中'
                            },
                        {
                            value: 20,
                            name: '未处理维修'
                            },
                        {
                            value: 5,
                            name: '已处理还未维修'
                            },
            ]
        }
    ]
        };

        myChart.setOption(option);
    })();

    (function () {
        var myChart = echarts.init(document.getElementById('pic13'));

        var option = {
            "toolbox": {
                "show": false,
                "feature": {
                    "mark": {
                        "show": true
                    },
                    "restore": {
                        "show": true
                    },
                    "saveAsImage": {
                        "show": true
                    }
                }
            },
            "series": [{
                "name": "指标",
                "type": "gauge",
                "startAngle": 180, //总的360，设置180就是半圆
                "endAngle": 0,
                "center": ["50%", "60%"], //整体的位置设置
                "radius": 180,
                "axisLine": {
                    "lineStyle": {
                        "width": 30, //柱子的宽度
                        "color": [[0.956, "#2d99e2"], [1, "#dce3ec"]] //0.898是百分比的比例值（小数），还有对应两个颜色值
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#00fff9'
                    }
                },
                "axisTick": {
                    "show": false
                },
                "axisLabel": {
                    "show": true,
                    textStyle: {
                        color: '#00fff9'
                    }
                },
                "splitLine": {
                    "show": true
                },
                "pointer": {
                    "width": 20, //指针的宽度
                    "length": "80%", //指针长度，按照半圆半径的百分比
                    "color": "#2d99e2"
                },
                "title": {
                    "show": true,
                    "offsetCenter": [0, "25%"], //标题位置设置
                    "textStyle": { //标题样式设置
                        "color": "#00fff9",
                        "fontSize": 20,
                        "fontFamily": "微软雅黑",
                        "fontWeight": "bold"
                    }
                },
                "detail": {
                    "show": false
                },
                "data": [{ //显示数据
                    "value": 95.6,
                    "name": "维修成功率 95.6%"
        }]
    }]
        };

        myChart.setOption(option);
    })();


    (function () {
        var myChart = echarts.init(document.getElementById('pic14'));

        var option = {
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            tooltip: {
                trigger: 'axis',
                showDelay: 0,
                textStyle: {
                    color: '#00fff9',
                    fontWeight: 'bold'
                },
                formatter: function (params) {
                    if (params.value.length > 1) {
                        return params.seriesName + ' : ' + params.value[0] + '个 ';
                    } else {
                        return params.seriesName + ' :<br/>' + params.name + ' : ' + params.value + '个 ';
                    }
                },
                axisPointer: {
                    show: true,
                    type: 'cross',
                    lineStyle: {
                        type: 'dashed',
                        width: 1
                    },
                    crossStyle: {
                        color: '#00fff9'
                    }
                }
            },
            legend: {
                data: ['不在线', '在线'],
                left: 'center',
                textStyle: {
                    color: '#00fff9'
                }
            },
            xAxis: [
                {
                    type: 'value',
                    scale: true,
                    axisLabel: {
                        formatter: '{value} 个'
                    },
                    splitLine: {
                        lineStyle: {
                            type: 'dashed'
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#00fff9'
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#00fff9'
                        }
                    }
        }
    ],
            yAxis: [
                {
                    type: 'value',
                    scale: true,
                    axisLine: false,
                    splitLine: {
                        lineStyle: {
                            type: 'dashed'
                        }
                    }
        }
    ],
            series: [
                {
                    name: '不在线',
                    type: 'scatter',
                    itemStyle: {
                        normal: {
                            color: '#00fff9'
                        }
                    },
                    data: [[161, 51], [167, 59], [159, 49], [157, 63], [155, 53],
                [170, 59], [159, 47], [166, 69], [176, 66], [160, 75],
                [172, 55], [170, 54], [172, 62], [153, 42], [160, 50],
                [147, 49], [168, 49], [175, 73], [157, 47], [167, 68],
                [159, 50], [175, 82], [166, 57], [176, 87], [170, 72],
                [174, 54], [173, 59], [179, 67], [170, 67], [160, 47],
                [154, 46], [162, 55], [176, 83], [160, 54], [152, 45],
                [162, 53], [170, 73], [160, 52], [161, 67], [166, 56],
                [168, 62], [163, 58], [167, 54], [160, 50], [161, 60],
                [167, 58], [165, 56], [160, 50], [170, 72], [157, 59],
                [167, 61], [160, 69], [163, 55], [152, 46], [157, 54],
                [168, 54], [180, 60], [165, 60], [165, 62], [164, 60],
                [156, 52], [160, 74], [163, 62], [165, 73], [161, 80],
                [162, 54], [166, 53], [174, 75], [172, 61], [167, 55],
                [151, 48], [164, 52], [163, 50], [152, 59], [169, 62],
                [164, 55], [161, 54], [155, 45], [170, 70], [176, 67],
                [170, 69], [162, 58], [170, 64], [164, 71], [169, 52],
                [163, 59], [154, 49], [159, 50], [173, 69], [170, 55],
                [161, 63], [169, 58], [166, 58], [159, 45], [162, 52],
                [159, 48], [162, 57], [159, 55], [179, 66], [162, 59],
                [161, 53], [151, 73], [168, 53], [168, 69], [173, 58],
                [171, 56], [178, 70], [164, 59], [163, 72], [168, 65],
                [166, 56], [172, 105], [163, 51], [169, 63], [168, 50],
                [159, 47], [167, 63], [161, 55], [160, 45], [163, 54],
                [162, 50], [161, 60], [149, 44], [157, 58], [163, 56],
                [172, 62], [155, 49], [156, 67], [164, 53], [160, 54],
                [162, 58], [167, 59], [160, 54], [160, 43], [168, 60],
                [158, 46], [156, 64], [160, 48], [167, 62], [158, 55],
                [167, 57], [156, 54], [162, 59], [173, 52], [159, 53],
                [170, 64], [159, 51], [157, 56], [161, 63], [162, 63],
                [160, 59], [168, 56], [165, 64], [162, 50], [165, 72],
                [166, 55], [160, 55], [152, 60], [170, 69], [162, 84]
            ]
        },
                {
                    name: '在线',
                    type: 'scatter',
                    data: [[174, 65], [175, 71], [193, 80], [186, 72], [187, 78],
                [181, 74], [184, 86], [184, 78], [175, 62], [184, 81],
                [180, 76], [177, 83], [192, 90], [176, 74], [174, 71],
                [184, 79], [192, 93], [171, 70], [173, 72], [176, 85],
                [176, 78], [180, 77], [172, 66], [176, 86], [173, 81],
                [178, 89], [180, 82], [180, 76], [164, 63], [173, 60],
                [183, 74], [175, 70], [188, 72], [189, 84], [172, 69],
                [170, 59], [182, 67], [170, 61], [177, 68], [184, 80],
                [186, 87], [171, 84], [172, 73], [175, 72], [180, 82],
                [182, 88], [188, 84], [177, 94], [172, 74], [167, 59],
                [169, 75], [174, 86], [172, 75], [182, 87], [164, 55],
                [163, 57], [171, 61], [184, 76], [174, 86], [174, 72],
                [177, 71], [186, 84], [167, 68], [171, 66], [182, 72],
                [167, 64], [177, 74], [164, 70], [192, 80], [175, 63],
                [171, 79], [181, 78], [167, 67], [181, 66], [177, 68],
                [174, 63], [177, 72], [170, 56], [182, 74], [197, 90],
                [180, 93], [175, 80], [180, 72], [184, 68], [175, 70],
                [180, 72], [177, 72], [177, 83], [181, 75], [176, 73],
                [175, 70], [174, 73], [165, 70], [177, 68], [192, 103],
                [176, 68], [169, 65], [182, 75], [179, 84], [175, 87],
                [184, 86], [177, 73], [167, 53], [178, 72], [168, 55],
                [157, 58], [180, 83], [170, 72], [177, 64], [172, 72],
                [165, 65], [186, 86], [165, 65], [174, 88], [175, 84],
                [185, 66], [177, 75], [180, 93], [180, 82], [177, 58],
                [178, 79], [177, 78], [177, 71], [177, 114], [168, 72],
                [188, 83], [198, 85], [175, 90], [166, 85], [190, 89],
                [166, 75], [177, 77], [179, 86], [172, 90], [190, 73],

            ]
        }
    ]
        };


        myChart.setOption(option);
    })();

    (function () {
        var myChart = echarts.init(document.getElementById('pic15'));

        var hours = ['1', '2', '3', '4', '5', '6', '7',
        '8', '9', '10', '11', '12',
        '13', '14', '15', '16', '17', '18',
        '19', '20', '21', '22', '23', '24'];
        var days = ['Monday','Tuesday','Wednesday','Thursday', 'Friday','Saturday',  'Sunday'];

        var data = [[0, 0, 5], [0, 1, 1], [0, 2, 0], [0, 3, 0], [0, 4, 0], [0, 5, 0], [0, 6, 0], [0, 7, 0], [0, 8, 0], [0, 9, 0], [0, 10, 0], [0, 11, 2], [0, 12, 4], [0, 13, 1], [0, 14, 1], [0, 15, 3], [0, 16, 4], [0, 17, 6], [0, 18, 4], [0, 19, 4], [0, 20, 3], [0, 21, 3], [0, 22, 2], [0, 23, 5], [1, 0, 7], [1, 1, 0], [1, 2, 0], [1, 3, 0], [1, 4, 0], [1, 5, 0], [1, 6, 0], [1, 7, 0], [1, 8, 0], [1, 9, 0], [1, 10, 5], [1, 11, 2], [1, 12, 2], [1, 13, 6], [1, 14, 9], [1, 15, 11], [1, 16, 6], [1, 17, 7], [1, 18, 8], [1, 19, 12], [1, 20, 5], [1, 21, 5], [1, 22, 7], [1, 23, 2], [2, 0, 1], [2, 1, 1], [2, 2, 0], [2, 3, 0], [2, 4, 0], [2, 5, 0], [2, 6, 0], [2, 7, 0], [2, 8, 0], [2, 9, 0], [2, 10, 3], [2, 11, 2], [2, 12, 1], [2, 13, 9], [2, 14, 8], [2, 15, 10], [2, 16, 6], [2, 17, 5], [2, 18, 5], [2, 19, 5], [2, 20, 7], [2, 21, 4], [2, 22, 2], [2, 23, 4], [3, 0, 7], [3, 1, 3], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 1], [3, 9, 0], [3, 10, 5], [3, 11, 4], [3, 12, 7], [3, 13, 14], [3, 14, 13], [3, 15, 12], [3, 16, 9], [3, 17, 5], [3, 18, 5], [3, 19, 10], [3, 20, 6], [3, 21, 4], [3, 22, 4], [3, 23, 1], [4, 0, 1], [4, 1, 3], [4, 2, 0], [4, 3, 0], [4, 4, 0], [4, 5, 1], [4, 6, 0], [4, 7, 0], [4, 8, 0], [4, 9, 2], [4, 10, 4], [4, 11, 4], [4, 12, 2], [4, 13, 4], [4, 14, 4], [4, 15, 14], [4, 16, 12], [4, 17, 1], [4, 18, 8], [4, 19, 5], [4, 20, 3], [4, 21, 7], [4, 22, 3], [4, 23, 0], [5, 0, 2], [5, 1, 1], [5, 2, 0], [5, 3, 3], [5, 4, 0], [5, 5, 0], [5, 6, 0], [5, 7, 0], [5, 8, 2], [5, 9, 0], [5, 10, 4], [5, 11, 1], [5, 12, 5], [5, 13, 10], [5, 14, 5], [5, 15, 7], [5, 16, 11], [5, 17, 6], [5, 18, 0], [5, 19, 5], [5, 20, 3], [5, 21, 4], [5, 22, 2], [5, 23, 0], [6, 0, 1], [6, 1, 0], [6, 2, 0], [6, 3, 0], [6, 4, 0], [6, 5, 0], [6, 6, 0], [6, 7, 0], [6, 8, 0], [6, 9, 0], [6, 10, 1], [6, 11, 0], [6, 12, 2], [6, 13, 1], [6, 14, 3], [6, 15, 4], [6, 16, 0], [6, 17, 0], [6, 18, 0], [6, 19, 0], [6, 20, 1], [6, 21, 2], [6, 22, 2], [6, 23, 6]];

        data = data.map(function (item) {
            return [item[1], item[0], item[2] || '-'];
        });

        var option = {
            tooltip: {
                position: 'right'
            },
            animation: false,
            grid: {
                height: '50%',
                y: '10%'
            },
            xAxis: {
                type: 'category',
                data: hours,
                
                axisLabel: {
                    textStyle: {
                        color: '#00fff9'
                    },
                    margin: 15
                },
                axisLine: {
                    lineStyle: {
                        color: '#00fff9'
                    }
                },
                axisTick: {
                    show: false
                }
            },
            yAxis: {
                type: 'category',
                data: days,
                axisLabel: {
                    textStyle: {
                        color: '#00fff9'
                    },
                    margin: 15
                },
                axisLine: {
                    lineStyle: {
                        color: '#00fff9'
                    }
                },
                axisTick: {
                    show: false
                }
            },
            visualMap: {
                min: 1,
                max: 10,
                calculable: true,
                orient: 'horizontal',
                left: 'center',
                bottom: '10%'
            },
            series: [{
                name: '座位热度',
                type: 'heatmap',
                data: data,
                label: {
                    normal: {
                        show: true
                    }
                },
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
    }]
        };


        myChart.setOption(option);
    })();
});