/*=========================================================================================
    File Name: to-bar.js
    Description: c3 to bar transform chart
    ----------------------------------------------------------------------------------------
    Item Name: Modern Admin - Clean Bootstrap 4 Dashboard HTML Template
   Version: 3.0
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

// To Bar Transform Chart
// ------------------------------
$(window).on("load", function(){

    // Callback that creates and populates a data table, instantiates the to bar transform chart, passes in the data and draws it.
    var toBarTransform = c3.generate({
        bindto: '#to-bar',
        size: { height: 300},

        color: {
            pattern: ['#673AB7', '#E91E63']
        },

        // Create the data table.
        data: {
            columns: [
                ['Billable', 7, 8, 10, 11, 8, 9,10],
                ['Non-Billable', 1, 3, 4, 2, 1, 0,8]
            ],
             type: 'bar'
        },
        bar:{width:{ratio:0.5}},
        axis: {
            x: {
                type: 'category',
                categories: ['Mon','Tue','Wed','Thu','Fri','sat','sun']
            }
        },
        

       
        // grid: {
        //     y: {
        //         show: true
        //     }
        // }
    });

    // Instantiate and draw our chart, passing in some options.
    // setTimeout(function () {
    //     toBarTransform.transform('bar', 'data1');
    // }, 1000);

    // setTimeout(function () {
    //     toBarTransform.transform('bar', 'data2');
    // }, 2000);

    // setTimeout(function () {
    //     toBarTransform.transform('line');
    // }, 3000);

    setTimeout(function () {
        toBarTransform.transform('bar');
    }, 0);

    // Resize chart on sidebar width change
    $(".menu-toggle").on('click', function() {
        toBarTransform.resize();
    });
       setTimeout(function () {
    toBarTransform.resize({height:180, width:180})
}, 0);
});