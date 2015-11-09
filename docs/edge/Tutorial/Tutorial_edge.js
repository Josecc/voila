/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "width",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Text',
                            display: 'block',
                            type: 'text',
                            rect: ['560px', '169px', '443px', '61px', 'auto', 'auto'],
                            opacity: '1',
                            text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(255, 255, 255);\">​To get the best results, pay attention to the </span><span style=\"color: rgb(246, 87, 188);\">angle</span><span style=\"color: rgb(255, 255, 255);\">, </span><span style=\"color: rgb(246, 87, 188);\">size</span><span style=\"color: rgb(255, 255, 255);\">, and </span><span style=\"color: rgb(246, 87, 188);\">lighting</span><span style=\"color: rgb(255, 255, 255);\"> of the picture</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'Text2',
                            display: 'block',
                            type: 'text',
                            rect: ['37px', '46px', '443px', '35px', 'auto', 'auto'],
                            overflow: 'visible',
                            opacity: '0',
                            text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(255, 255, 255);\">​The best angle is the side view</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text3',
                            display: 'block',
                            type: 'text',
                            rect: ['91px', '314px', '368px', '61px', 'auto', 'auto'],
                            overflow: 'visible',
                            opacity: '0',
                            text: "<p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 24px; color: rgb(255, 255, 255); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\">This makes the heels and features visible</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: '_5',
                            display: 'block',
                            type: 'image',
                            rect: ['-188px', '111px', '165px', '177px', 'auto', 'auto'],
                            overflow: 'visible',
                            fill: ["rgba(0,0,0,0)",im+"5.jpg",'0px','0px']
                        },
                        {
                            id: '_6',
                            display: 'block',
                            type: 'image',
                            rect: ['568px', '110px', '165px', '177px', 'auto', 'auto'],
                            overflow: 'visible',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"6.jpg",'0px','0px']
                        },
                        {
                            id: 'Ellipse',
                            type: 'ellipse',
                            rect: ['266px', '198px', '5px', '5px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '1',
                            fill: ["rgba(255,255,255,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            boxShadow: ["", 0, 0, 46, 165, "rgba(255,255,255,1.00)"]
                        },
                        {
                            id: 'Text4',
                            type: 'text',
                            rect: ['142px', '156px', '248px', '86px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px; text-align: center;\">​The best light</p><p style=\"margin: 0px; text-align: center;\">​is an abundance of natural light</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(120,62,152,1.00)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"],
                            textShadow: ["rgba(0,0,0,0.65098)", 0, 2, 3]
                        },
                        {
                            id: 'Text6',
                            type: 'text',
                            rect: ['158px', '164px', '215px', '61px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(120, 62, 152);\">​Better quality pictures yield better reults</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"],
                            textShadow: ["rgba(0,0,0,0.65098)", 0, 2, 3]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '550px', '400px', 'auto', 'auto'],
                            sizeRange: ['175px','550px','',''],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 14500,
                    autoPlay: true,
                    data: [
                        [
                            "eid25",
                            "background-color",
                            7750,
                            50,
                            "easeInOutSine",
                            "${Ellipse}",
                            'rgba(255,255,255,0.00)',
                            'rgba(255,255,255,0.80)'
                        ],
                        [
                            "eid26",
                            "background-color",
                            7800,
                            200,
                            "easeInOutSine",
                            "${Ellipse}",
                            'rgba(255,255,255,0.80)',
                            'rgba(255,255,255,1)'
                        ],
                        [
                            "eid11",
                            "opacity",
                            4500,
                            500,
                            "easeOutExpo",
                            "${Text3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid28",
                            "display",
                            7901,
                            0,
                            "easeInOutSine",
                            "${_5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2",
                            "left",
                            0,
                            500,
                            "easeOutExpo",
                            "${Text}",
                            '560px',
                            '53px'
                        ],
                        [
                            "eid5",
                            "opacity",
                            2500,
                            500,
                            "easeOutExpo",
                            "${Text}",
                            '1',
                            '0'
                        ],
                        [
                            "eid7",
                            "opacity",
                            2750,
                            500,
                            "easeOutExpo",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid58",
                            "boxShadow.blur",
                            8000,
                            250,
                            "linear",
                            "${Ellipse}",
                            '46px',
                            '93px'
                        ],
                        [
                            "eid23",
                            "boxShadow.spread",
                            7750,
                            250,
                            "easeInOutSine",
                            "${Ellipse}",
                            '0px',
                            '139px'
                        ],
                        [
                            "eid54",
                            "boxShadow.spread",
                            13500,
                            750,
                            "easeOutSine",
                            "${Ellipse}",
                            '139px',
                            '-37px'
                        ],
                        [
                            "eid9",
                            "left",
                            3250,
                            500,
                            "easeOutExpo",
                            "${_5}",
                            '-188px',
                            '53px'
                        ],
                        [
                            "eid50",
                            "opacity",
                            11000,
                            750,
                            "easeInOutSine",
                            "${Text6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid52",
                            "opacity",
                            13250,
                            500,
                            "easeOutSine",
                            "${Text6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid27",
                            "display",
                            7901,
                            0,
                            "easeInOutSine",
                            "${Text3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid42",
                            "display",
                            3000,
                            0,
                            "easeOutExpo",
                            "${Text}",
                            'block',
                            'none'
                        ],
                        [
                            "eid56",
                            "opacity",
                            14000,
                            250,
                            "easeInOutSine",
                            "${Ellipse}",
                            '1',
                            '0'
                        ],
                        [
                            "eid32",
                            "opacity",
                            7901,
                            349,
                            "easeInOutSine",
                            "${Text4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid46",
                            "opacity",
                            10500,
                            750,
                            "easeOutSine",
                            "${Text4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid29",
                            "display",
                            7901,
                            0,
                            "easeInOutSine",
                            "${_6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid30",
                            "display",
                            7901,
                            0,
                            "easeInOutSine",
                            "${Text2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid39",
                            "left",
                            2263,
                            1487,
                            "linear",
                            "${_6}",
                            '568px',
                            '573px'
                        ],
                        [
                            "eid21",
                            "left",
                            3750,
                            500,
                            "easeOutExpo",
                            "${_6}",
                            '573px',
                            '315px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Tutorial_edgeActions.js");
})("EDGE-200288");
