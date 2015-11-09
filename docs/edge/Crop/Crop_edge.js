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
                            id: '_0',
                            display: 'block',
                            type: 'image',
                            rect: ['-54px', '51px', '167px', '251px', 'auto', 'auto'],
                            overflow: 'visible',
                            borderRadius: ["25px", "25px 25px", "25px", "25px 25px"],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"0.jpg",'0px','0px'],
                            boxShadow: ["", 0, 2, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'Text',
                            display: 'block',
                            type: 'text',
                            rect: ['251px', '146px', '278px', '62px', 'auto', 'auto'],
                            overflow: 'visible',
                            opacity: '1',
                            text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(255, 255, 255);\">​Now its time to crop your image!</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'Text2',
                            display: 'block',
                            type: 'text',
                            rect: ['565px', '18px', '212px', '33px', 'auto', 'auto'],
                            opacity: '1',
                            text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(255, 255, 255);\">​Only crop one shoe</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'Text3',
                            display: 'block',
                            type: 'text',
                            rect: ['316px', '79px', '185px', '88px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(255, 255, 255);\">​Crop closely along the edge of the shoe</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text6',
                            display: 'none',
                            type: 'text',
                            rect: ['50px', '264px', '201px', '91px', 'auto', 'auto'],
                            opacity: '1',
                            text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(255, 255, 255);\">​If its sideways, rotate it right-side up</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text4',
                            display: 'block',
                            type: 'text',
                            rect: ['316px', '-172px', '185px', '172px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(255, 255, 255);\">​Leave anything non-related (pants, socks, carpet, etc.) out of the cropping frame</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text5',
                            type: 'text',
                            rect: ['316px', '263px', '185px', '90px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(255, 255, 255);\">​The shoe should be horizontally displayed</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'check',
                            type: 'image',
                            rect: ['367px', '158px', '85px', '85px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"check.png",'0px','0px']
                        },
                        {
                            id: '_4',
                            type: 'image',
                            rect: ['29px', '23px', '236px', '353px', 'auto', 'auto'],
                            borderRadius: ["25px", "25px", "25px", "25px 25px"],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"4.png",'0px','0px'],
                            boxShadow: ["", 0, 2, 3, 0, "rgba(0,0,0,0.65098)"],
                            transform: [[],['90']]
                        },
                        {
                            id: 'x',
                            type: 'image',
                            rect: ['104px', '23px', '85px', '85px', 'auto', 'auto'],
                            borderRadius: ["0px", "0px", "0px", "0px"],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"x.png",'0px','0px'],
                            boxShadow: ["", 0, 0, 0, 0, "rgba(0,0,0,0)"]
                        },
                        {
                            id: '_3',
                            type: 'image',
                            rect: ['65px', '129px', '165px', '247px', 'auto', 'auto'],
                            borderRadius: ["25px", "25px", "25px", "25px 25px"],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"3.png",'0px','0px'],
                            boxShadow: ["", 0, 2, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: '_2',
                            type: 'image',
                            rect: ['64px', '129px', '165px', '247px', 'auto', 'auto'],
                            borderRadius: ["25px", "25px", "25px", "25px 25px"],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"2.png",'0px','0px'],
                            boxShadow: ["", 0, 2, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: '_1',
                            type: 'image',
                            rect: ['65px', '130px', '165px', '244px', 'auto', 'auto'],
                            borderRadius: ["25px", "25px", "25px", "25px 25px"],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"1.png",'0px','0px'],
                            boxShadow: ["", 0, 2, 3, 0, "rgba(0,0,0,0.65098)"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '550px', '400px', 'auto', 'auto'],
                            sizeRange: ['0px','550px','',''],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 25250,
                    autoPlay: true,
                    data: [
                        [
                            "eid42",
                            "rotateZ",
                            12250,
                            1000,
                            "easeInCubic",
                            "${_4}",
                            '0deg',
                            '90deg'
                        ],
                        [
                            "eid56",
                            "rotateZ",
                            15500,
                            500,
                            "easeInCubic",
                            "${_4}",
                            '90deg',
                            '0deg'
                        ],
                        [
                            "eid87",
                            "opacity",
                            23000,
                            500,
                            "linear",
                            "${_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid84",
                            "opacity",
                            21000,
                            500,
                            "linear",
                            "${_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid88",
                            "opacity",
                            23000,
                            500,
                            "linear",
                            "${_2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid30",
                            "opacity",
                            7750,
                            500,
                            "linear",
                            "${Text3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid33",
                            "opacity",
                            11750,
                            500,
                            "linear",
                            "${Text3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid62",
                            "opacity",
                            16500,
                            500,
                            "easeOutQuint",
                            "${check}",
                            '0',
                            '1'
                        ],
                        [
                            "eid28",
                            "display",
                            7500,
                            0,
                            "linear",
                            "${Text2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid17",
                            "opacity",
                            4250,
                            750,
                            "easeInCubic",
                            "${_4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid52",
                            "top",
                            15500,
                            500,
                            "linear",
                            "${Text5}",
                            '263px',
                            '39px'
                        ],
                        [
                            "eid51",
                            "display",
                            13250,
                            0,
                            "linear",
                            "${Text4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid32",
                            "opacity",
                            8750,
                            500,
                            "linear",
                            "${Text4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid49",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid50",
                            "display",
                            11867,
                            0,
                            "linear",
                            "${Text6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid18",
                            "height",
                            7000,
                            500,
                            "easeInCubic",
                            "${_4}",
                            '264px',
                            '372px'
                        ],
                        [
                            "eid43",
                            "height",
                            12250,
                            1000,
                            "easeInCubic",
                            "${_4}",
                            '372px',
                            '248px'
                        ],
                        [
                            "eid57",
                            "height",
                            15500,
                            500,
                            "easeInCubic",
                            "${_4}",
                            '248px',
                            '353px'
                        ],
                        [
                            "eid67",
                            "height",
                            18000,
                            1000,
                            "easeInCubic",
                            "${_4}",
                            '353px',
                            '247px'
                        ],
                        [
                            "eid10",
                            "display",
                            3750,
                            0,
                            "linear",
                            "${_0}",
                            'block',
                            'none'
                        ],
                        [
                            "eid80",
                            "opacity",
                            19000,
                            500,
                            "easeInCubic",
                            "${_3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid85",
                            "opacity",
                            21000,
                            500,
                            "linear",
                            "${_3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid7",
                            "opacity",
                            3000,
                            750,
                            "linear",
                            "${Text}",
                            '1',
                            '0'
                        ],
                        [
                            "eid20",
                            "width",
                            7000,
                            500,
                            "easeInCubic",
                            "${_4}",
                            '177px',
                            '249px'
                        ],
                        [
                            "eid46",
                            "width",
                            12250,
                            1000,
                            "easeInCubic",
                            "${_4}",
                            '249px',
                            '166px'
                        ],
                        [
                            "eid59",
                            "width",
                            15500,
                            500,
                            "easeInCubic",
                            "${_4}",
                            '166px',
                            '236px'
                        ],
                        [
                            "eid69",
                            "width",
                            18000,
                            1000,
                            "easeInCubic",
                            "${_4}",
                            '236px',
                            '165px'
                        ],
                        [
                            "eid19",
                            "top",
                            7000,
                            500,
                            "easeInCubic",
                            "${_4}",
                            '90px',
                            '14px'
                        ],
                        [
                            "eid44",
                            "top",
                            12250,
                            1000,
                            "easeInCubic",
                            "${_4}",
                            '14px',
                            '36px'
                        ],
                        [
                            "eid60",
                            "top",
                            15500,
                            500,
                            "easeInCubic",
                            "${_4}",
                            '36px',
                            '23px'
                        ],
                        [
                            "eid68",
                            "top",
                            18000,
                            1000,
                            "easeInCubic",
                            "${_4}",
                            '23px',
                            '129px'
                        ],
                        [
                            "eid26",
                            "left",
                            7000,
                            500,
                            "easeInCubic",
                            "${_4}",
                            '186px',
                            '150px'
                        ],
                        [
                            "eid27",
                            "left",
                            7500,
                            500,
                            "easeInCubic",
                            "${_4}",
                            '150px',
                            '16px'
                        ],
                        [
                            "eid45",
                            "left",
                            12250,
                            1000,
                            "easeInCubic",
                            "${_4}",
                            '16px',
                            '68px'
                        ],
                        [
                            "eid58",
                            "left",
                            15500,
                            500,
                            "easeInCubic",
                            "${_4}",
                            '68px',
                            '29px'
                        ],
                        [
                            "eid70",
                            "left",
                            18000,
                            1000,
                            "easeInCubic",
                            "${_4}",
                            '29px',
                            '326px'
                        ],
                        [
                            "eid54",
                            "left",
                            15500,
                            500,
                            "linear",
                            "${Text6}",
                            '50px',
                            '308px'
                        ],
                        [
                            "eid34",
                            "display",
                            12250,
                            0,
                            "linear",
                            "${Text3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid13",
                            "left",
                            3620,
                            880,
                            "linear",
                            "${Text2}",
                            '565px',
                            '169px'
                        ],
                        [
                            "eid48",
                            "opacity",
                            12250,
                            500,
                            "linear",
                            "${Text5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid63",
                            "opacity",
                            18000,
                            1000,
                            "linear",
                            "${Text5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid5",
                            "opacity",
                            0,
                            750,
                            "easeOutExpo",
                            "${_0}",
                            '0',
                            '1'
                        ],
                        [
                            "eid6",
                            "opacity",
                            3000,
                            750,
                            "linear",
                            "${_0}",
                            '1',
                            '0'
                        ],
                        [
                            "eid64",
                            "opacity",
                            18000,
                            1000,
                            "linear",
                            "${Text6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid66",
                            "top",
                            18000,
                            1000,
                            "easeOutQuint",
                            "${check}",
                            '158px',
                            '23px'
                        ],
                        [
                            "eid11",
                            "display",
                            3750,
                            0,
                            "linear",
                            "${Text}",
                            'block',
                            'none'
                        ],
                        [
                            "eid65",
                            "left",
                            18000,
                            1000,
                            "easeOutQuint",
                            "${check}",
                            '367px',
                            '366px'
                        ],
                        [
                            "eid82",
                            "opacity",
                            19000,
                            500,
                            "easeInCubic",
                            "${x}",
                            '0',
                            '1'
                        ],
                        [
                            "eid22",
                            "opacity",
                            7000,
                            500,
                            "linear",
                            "${Text2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3",
                            "left",
                            0,
                            750,
                            "easeOutExpo",
                            "${_0}",
                            '-54px',
                            '36px'
                        ],
                        [
                            "eid39",
                            "top",
                            12000,
                            1000,
                            "linear",
                            "${Text4}",
                            '200px',
                            '-172px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Crop_edgeActions.js");
})("EDGE-15997645");
