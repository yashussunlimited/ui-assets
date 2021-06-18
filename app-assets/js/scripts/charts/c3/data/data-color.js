/*=========================================================================================
    File Name: data-color.js
    Description: c3 data color chart
    ----------------------------------------------------------------------------------------
    Item Name: Modern Admin - Clean Bootstrap 4 Dashboard HTML Template
   Version: 3.0
    Author: GeeksLabs
    Author URL: http://www.themeforest.net/user/geekslabs
==========================================================================================*/

// Data Color chart
// ------------------------------

// load data first 

$(window).on("load", function () {

    // Callback that creates and populates a data table, instantiates the data color chart, passes in the data and draws it.
    var dataColor = c3.generate({
        bindto: '#data-color',
        // size: {height:300},
        size: {
            height: 300,
            width: 550
        },

        // Create the data table.

        data: {
            x: 'x',
            columns: [
                ['x', 'J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
                ['Full Score', 30, 20, 50, 40, 60, 50, 30, 20, 50, 40, 60, 50],
                ['Critical Score', 20, 60, 90, 40, 30, 70, 80, 90, 90, 40, 30, 20],
                ['Weighted Score', 30, 20, 60, 40, 25, 25, 30, 20, 95, 40, 25, 25]

            ],

            type: 'bar',
            colors: {
                'Full Score': '#0000ff',
                'Critical Score': '#ff0000',
                'Weighted Score': '#008000',
            },
            color: function (color, d) {
                // d will be 'id' when called for legends
                return d.id && d.id === 'data3' ? d3.rgb(color).darker(d.value / 150) : color;
            }
        },
        axis: {
            x: {
                label: {
                    text: "Months",
                    position: "outer"
                },
                type: 'category',
                tick: {
                    multiline: false
                }
            },
            y: {
                label: {
                    text: "Score out of 100",
                    position: "outer"
                },
                type: 'category',
                tick: {
                    multiline: false
                }
            }
        },
        grid: {
            y: {
                show: true
            }
        },
    });

    // Resize chart on sidebar width change
    $(".menu-toggle").on('click', function () {
        dataColor.resize();
    });
    setTimeout(function () {
        dataColor.resize();

    })


});

// chnage data after checkbox change
var value = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
if (value == "dashboard_view") {
    function filter(filter_by_id) {
        if ($('input[name=filter_by_radio]:checked', '#dashboard_filter_radio').val() == "quarterly") {
            // Callback that creates and populates a data table, instantiates the data color chart, passes in the data and draws it.
            var dataColor = c3.generate({
                bindto: '#data-color',
                // size: {height:300},
                size: {
                    height: 300,
                    width: 550
                },

                // Create the data table.

                data: {
                    x: 'x',
                    columns: [
                        ['x', 'JFM', 'AMJ', 'JAS', 'OND'],
                        ['Full Score', 30, 20, 50, 60],
                        ['Critical Score', 40, 80, 90, 99],
                        ['Weighted Score', 60, 80, 60, 70]

                    ],

                    type: 'bar',
                    colors: {
                        'Full Score': '#0000ff',
                        'Critical Score': '#ff0000',
                        'Weighted Score': '#008000',
                    },
                    color: function (color, d) {
                        // d will be 'id' when called for legends
                        return d.id && d.id === 'data3' ? d3.rgb(color).darker(d.value / 150) : color;
                    }
                },
                axis: {
                    x: {
                        label: {
                            text: "Months",
                            position: "outer"
                        },
                        type: 'category',
                        tick: {
                            multiline: false
                        }
                    },
                    y: {
                        label: {
                            text: "Score out of 100",
                            position: "outer"
                        },
                        type: 'category',
                        tick: {
                            multiline: false
                        }
                    }
                },
                grid: {
                    y: {
                        show: true
                    }
                },
                
            });

            // Resize chart on sidebar width change
            $(".menu-toggle").on('click', function () {
                dataColor.resize();
            });
            setTimeout(function () {
                dataColor.resize();

            })

            $(".dashboard_filter_element_month_div").hide();
            $(".widget_1_span").html("(Oct 2019 to Dec 2019)");
            $(".full_score").html("90");
            $(".critical_score").html("50");
            $(".wt_score").html("20");
            // $(".month_filter_1").show();
            // $(".month_filter_2").show();
            // $(".month_filter_3").show();
            // $(".month_filter_4").show();
            // $(".month_filter_5").hide();
            // $(".month_filter_6").hide();
            // $(".month_filter_7").hide();
            // $(".month_filter_8").hide();
            // $(".month_filter_9").hide();
            // $(".month_filter_10").hide();
            // $(".month_filter_11").hide();
            // $(".month_filter_12").hide();




        } else if ($('input[name=filter_by_radio]:checked', '#dashboard_filter_radio').val() == "biannual") {


            // Callback that creates and populates a data table, instantiates the data color chart, passes in the data and draws it.
            var dataColor = c3.generate({
                bindto: '#data-color',
                // size: {height:300},
                size: {
                    height: 300,
                    width: 550
                },

                // Create the data table.

                data: {
                    x: 'x',
                    columns: [
                        ['x', 'JAN-JUN', 'JUL-DEC'],
                        ['Full Score', 95, 80],
                        ['Critical Score', 90, 50],
                        ['Weighted Score', 70, 40]

                    ],

                    type: 'bar',
                    colors: {
                        'Full Score': '#0000ff',
                        'Critical Score': '#ff0000',
                        'Weighted Score': '#008000',
                    },
                    color: function (color, d) {
                        // d will be 'id' when called for legends
                        return d.id && d.id === 'data3' ? d3.rgb(color).darker(d.value / 150) : color;
                    }
                },
                axis: {
                    x: {
                        label: {
                            text: "Months",
                            position: "outer"
                        },
                        type: 'category',
                        tick: {
                            multiline: false
                        }
                    },
                    y: {
                        label: {
                            text: "Score out of 100",
                            position: "outer"
                        },
                        type: 'category',
                        tick: {
                            multiline: false
                        }
                    }
                },
                grid: {
                    y: {
                        show: true
                    }
                },
            });

            // Resize chart on sidebar width change
            $(".menu-toggle").on('click', function () {
                dataColor.resize();
            });
            setTimeout(function () {
                dataColor.resize();

            });

            $(".dashboard_filter_element_month_div").hide();
            $(".widget_1_span").html("(Jul 2019-Dec 2019)");
            $(".full_score").html("100");
            $(".critical_score").html("50");
            $(".wt_score").html("50");
            // $(".month_filter_1").show();
            // $(".month_filter_2").show();
            // $(".month_filter_3").show();
            // $(".month_filter_4").show();
            // $(".month_filter_5").show();
            // $(".month_filter_6").show();
            // $(".month_filter_7").hide();
            // $(".month_filter_8").hide();
            // $(".month_filter_9").hide();
            // $(".month_filter_10").hide();
            // $(".month_filter_11").hide();
            // $(".month_filter_12").hide();





        } else if ($('input[name=filter_by_radio]:checked', '#dashboard_filter_radio').val() == "monthly") {
            // Callback that creates and populates a data table, instantiates the data color chart, passes in the data and draws it.
            var dataColor = c3.generate({
                bindto: '#data-color',
                // size: {height:300},
                size: {
                    height: 300,
                    width: 550
                },

                // Create the data table.

                data: {
                    x: 'x',
                    columns: [
                        ['x', 'J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
                        ['Full Score', 30, 20, 50, 40, 60, 50, 30, 20, 50, 40, 60, 50],
                        ['Critical Score', 20, 60, 90, 40, 30, 70, 80, 90, 90, 40, 30, 20],
                        ['Weighted Score', 30, 20, 60, 40, 25, 25, 30, 20, 95, 40, 25, 25]

                    ],

                    type: 'bar',
                    colors: {
                        'Full Score': '#0000ff',
                        'Critical Score': '#ff0000',
                        'Weighted Score': '#008000',
                    },
                    color: function (color, d) {
                        // d will be 'id' when called for legends
                        return d.id && d.id === 'data3' ? d3.rgb(color).darker(d.value / 150) : color;
                    }
                },
                axis: {
                    x: {
                        label: {
                            text: "Months",
                            position: "outer"
                        },
                        type: 'category',
                        tick: {
                            multiline: false
                        }
                    },
                    y: {
                        label: {
                            text: "Score out of 100",
                            position: "outer"
                        },
                        type: 'category',
                        tick: {
                            multiline: false
                        }
                    }
                },
                grid: {
                    y: {
                        show: true
                    }
                },
            });

            // Resize chart on sidebar width change
            $(".menu-toggle").on('click', function () {
                dataColor.resize();
            });
            setTimeout(function () {
                dataColor.resize();

            });
            $(".dashboard_filter_element_month_div").show();
            $(".widget_1_span").html("(Jan 2020)");
            $(".full_score").html("80");
            $(".critical_score").html("60");
            $(".wt_score").html("10");
            // $(".month_filter_1").show();
            // $(".month_filter_2").show();
            // $(".month_filter_3").hide();
            // $(".month_filter_4").hide();
            // $(".month_filter_5").hide();
            // $(".month_filter_6").hide();
            // $(".month_filter_7").hide();
            // $(".month_filter_8").hide();
            // $(".month_filter_9").hide();
            // $(".month_filter_10").hide();
            // $(".month_filter_11").hide();
            // $(".month_filter_12").hide();















        } else if ($('input[name=filter_by_radio]:checked', '#dashboard_filter_radio').val() == "annual") {
            // Callback that creates and populates a data table, instantiates the data color chart, passes in the data and draws it.
            var dataColor = c3.generate({
                bindto: '#data-color',
                // size: {height:300},
                size: {
                    height: 300,
                    width: 550
                },

                // Create the data table.

                data: {
                    x: 'x',
                    columns: [
                        ['x', '2019'],
                        ['Full Score', 80],
                        ['Critical Score', 95],
                        ['Weighted Score', 58]

                    ],

                    type: 'bar',
                    colors: {
                        'Full Score': '#0000ff',
                        'Critical Score': '#ff0000',
                        'Weighted Score': '#008000',
                    },
                    color: function (color, d) {
                        // d will be 'id' when called for legends
                        return d.id && d.id === 'data3' ? d3.rgb(color).darker(d.value / 150) : color;
                    }
                },
                axis: {
                    x: {
                        label: {
                            text: "Months",
                            position: "outer"
                        },
                        type: 'category',
                        tick: {
                            multiline: false
                        }
                    },
                    y: {
                        label: {
                            text: "Score out of 100",
                            position: "outer"
                        },
                        type: 'category',
                        tick: {
                            multiline: false
                        }
                    }
                },
                grid: {
                    y: {
                        show: true
                    }
                },
            });

            // Resize chart on sidebar width change
            $(".menu-toggle").on('click', function () {
                dataColor.resize();
            });
            setTimeout(function () {
                dataColor.resize();

            });

            $(".dashboard_filter_element_month_div").hide();
            $(".widget_1_span").html("(Jan 2020 - Feb 2019)");
            $(".full_score").html("100");
            $(".critical_score").html("80");
            $(".wt_score").html("20");
            // $(".month_filter_1").show();
            // $(".month_filter_2").show();
            // $(".month_filter_3").show();
            // $(".month_filter_4").show();
            // $(".month_filter_5").show();
            // $(".month_filter_6").show();
            // $(".month_filter_7").show();
            // $(".month_filter_8").show();
            // $(".month_filter_9").show();
            // $(".month_filter_10").show();
            // $(".month_filter_11").show();
            // $(".month_filter_12").show();



        }
    }
}