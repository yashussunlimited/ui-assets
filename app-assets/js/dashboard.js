	// donut chart js

	$(window).on("load", function () {

		// Callback that creates and populates a data table, instantiates the donut chart, passes in the data and draws it.
		var donutChart = c3.generate({
			bindto: '#dashboard-donut-chart',
			color: {
				pattern: ['#008000', '#ff0000','#ffa500']
			},

			// Create the data table.
			data: {
				columns: [
					['Compliant', 60],
					['Non-Compliant', 30],
					['Absent',10]
				],
				type: 'donut',
				onclick: function (d, i) {},
				onmouseover: function (d, i) {},
				onmouseout: function (d, i) {}
			},
			donut: {
				title: "# of Vendors: 100"
			},
			legend: {
				position: 'right'
			},
			tooltip: {
				format: {
					value: function (value, ratio, id) {
						var format = id === 'data1' ? d3.format(',') : d3.format('');
						return format(value);
					}
				}
			}
		});

		// Resize chart on sidebar width change
		$(".menu-toggle").on('click', function () {
			donutChart.resize();
		});

		setTimeout(function () {
			donutChart.resize({
				// height: 375,
				width: 375
			})
		}, 0);

		setTimeout(function () {
			d3.selectAll(".c3-chart-arc>text")
				.attr("transform", function (d, i) {
					var r = 53,
						a = (d.startAngle + d.endAngle) / 2 - (Math.PI / 2);
					console.log("translate(" + (Math.cos(a) * r) + "," + (Math.sin(a) * r) + ")")
					return "translate(" + (Math.cos(a) * r) + "," + (Math.sin(a) * r) + ")";
				});
		}, 100);



	});

	$(document).ready(function () {
		$('[data-toggle="tooltip"]').tooltip();
	});

	$(window).on("load", function () {

		// Callback that creates and populates a data table, instantiates the donut chart, passes in the data and draws it.
		var donutChart2 = c3.generate({
			bindto: '#dashboard-donut-chart2',
			color: {
				pattern: ['#0000ff', '#008000', ]
			},

			// Create the data table.
			data: {
				columns: [
					['Open', 2],
					['Closed', 10],
				],
				type: 'donut',
				onclick: function (d, i) {},
				onmouseover: function (d, i) {},
				// onmouseout: function (d, i) { console.log("onmouseout", d, i); }
			},
			donut: {
				title: "Tickets"
			},

		});



		// Resize chart on sidebar width change
		$(".menu-toggle").on('click', function () {
			donutChart2.resize();
		});

		setTimeout(function () {
			donutChart2.resize({
				height: 180,
				width: 180
			})
		}, 0);
	});

	$(window).on("load", function () {

		// Callback that creates and populates a data table, instantiates the donut chart, passes in the data and draws it.
		var donutChart3 = c3.generate({
			bindto: '#dashboard-donut-chart3',
			color: {
				pattern: ['#0000ff', '#008000', ]
			},

			// Create the data table.
			data: {
				columns: [
					['Open', 5, ],
					['Closed', 10],
				],
				type: 'donut',
				onclick: function (d, i) {
					console.log("onclick", d, i);
				},
				onmouseover: function (d, i) {
					console.log("onmouseover", d, i);
				},
				// onmouseout: function (d, i) { console.log("onmouseout", d, i); }
			},
			donut: {
				title: "Milestones"
			}
		});



		// Resize chart on sidebar width change
		$(".menu-toggle").on('click', function () {
			donutChart3.resize();
		});

		setTimeout(function () {
			donutChart3.resize({
				height: 180,
				width: 180
			})
		}, 0);
	});


	// donut-charts js ends here-----------------------------------------------------------------------------------------


	// pie-charts js --------------------------------------------------------------------------------

	$(window).on("load", function () {

		// Callback that creates and populates a data table, instantiates the pie chart, passes in the data and draws it.
		var pieChart1 = c3.generate({
			bindto: '#pie-chart1',
			color: {
				pattern: ['#008000', '#ffa500', '#ff0000', '#0000ff']
			},
			//       legend: {
			//   inset: {
			//     anchor: 'bottom-left',
			//     x: 20,
			//     y: 10,
			//     step: 2
			//   }
			// },


			// Create the data table.
			data: {
				// iris data from R
				columns: [
					['data1', 30],
					['data2', 120],
					['data3', 50],
					['data4', 6]
				],
				type: 'pie',
				onclick: function (d, i) {
					console.log("onclick", d, i);
				},
				onmouseover: function (d, i) {
					console.log("onmouseover", d, i);
				},
				onmouseout: function (d, i) {
					console.log("onmouseout", d, i);
				}
			},


		});


		$(".menu-toggle").on('click', function () {
			pieChart1.resize();
		});

		setTimeout(function () {
			pieChart1.resize({
				height: 180,
				width: 180
			})
		}, 0);
		setTimeout(function () {
			$(".c3-legend-item-data3").css('margin-left:-10px')
		})
	});

	$(window).on("load", function () {

		// Callback that creates and populates a data table, instantiates the pie chart, passes in the data and draws it.
		var pieChart2 = c3.generate({
			bindto: '#pie-chart2',
			color: {
				pattern: ['#008000', '#ffa500', '#ff0000', '#0000ff']
			},

			// Create the data table.
			data: {
				// iris data from R
				columns: [
					['data1', 10],
					['data2', 30],
					['data3', 40],
					['data4', 20]
				],
				type: 'pie',
				onclick: function (d, i) {
					console.log("onclick", d, i);
				},
				onmouseover: function (d, i) {
					console.log("onmouseover", d, i);
				},
				onmouseout: function (d, i) {
					console.log("onmouseout", d, i);
				}
			} 
		});


		$(".menu-toggle").on('click', function () {
			pieChart2.resize();
		});

		setTimeout(function () {
			pieChart2.resize({
				height: 180,
				width: 180
			})
		}, 0);
	});

	$(window).on("load", function () {

		// Callback that creates and populates a data table, instantiates the pie chart, passes in the data and draws it.
		var pieChart3 = c3.generate({
			bindto: '#pie-chart3',
			color: {
				pattern: ['#008000', '#ffa500', '#ff0000', '#0000ff']
			},

			// Create the data table.
			data: {
				// iris data from R
				columns: [
					['data1', 50],
					['data2', 10],
					['data3', 20],
					['data4', 20]
				],
				type: 'pie',
				onclick: function (d, i) {
					console.log("onclick", d, i);
				},
				onmouseover: function (d, i) {
					console.log("onmouseover", d, i);
				},
				onmouseout: function (d, i) {
					console.log("onmouseout", d, i);
				}
			}
		});


		$(".menu-toggle").on('click', function () {
			pieChart3.resize();
		});

		setTimeout(function () {
			pieChart3.resize({
				height: 180,
				width: 180
			})
		}, 0);
	});

	// $('.btn-close-msg').click(function(){
	// 	$('.msg-div').hide();
	// });

	$('.op-button').click(function () {
		$('.toggle-div').toggle();
		$('.msg-div').hide();


	});

	$('.msg-button').click(function () {
		$('.msg-div').toggle();
		$('.toggle-div').hide();
	})



	$('#switch-small-0').change(function () {
		// $('#overview-div').toggle();
		// $('#td-1').toggle();/
		$('.col1').toggle();


		// if($('#overview-div').is(':hidden')){
		// $('.overview-outer').detach().prependTo($('.overview-outer'));

		// }
		// else{
		// $('#overview-div').show();}
		// else if( $('#overview-div').is(':visible')){
		// 	$('.overview-outer').detach($('.task-list-div')).prependTo($('#overview-div'));
		// }
	});
	$('#switch-small-1').change(function () {
		// $('#td-2').toggle();
		$('.col2').toggle();

	});
	$('#switch-small-2').change(function () {
		// $('#td-3').toggle();
		$('.col3').toggle();

	});
	$('#switch-small-3').change(function () {
		// $('#td-4').toggle();
		$('.col4').toggle();

	});
	$('#switch-small-4').change(function () {
		// $('#td-5').toggle();
		$('.col5').toggle();

	});
	$('#switch-small-5').change(function () {
		// $('#td-6').toggle();
		$('.col6').toggle();

	});
	$('#switch-small-6').change(function () {
		// $('#td-7').toggle();
		$('.col7').toggle();
	});
	$('#switch-small-7').change(function () {
		// $('#td-7').toggle();
		$('.col8').toggle();

	});

	$('#switch-small-8').change(function () {
		// $('#td-7').toggle();
		$('.col9').toggle();

	});

	$('#switch-small-9').change(function () {
		// $('#td-7').toggle();
		$('.col10').toggle();

	});
	$('#switch-small-10').change(function () {
		// $('#td-7').toggle();
		$('.col11').toggle();

	});
	$('#switch-small-11').change(function () {
		// $('#td-7').toggle();
		$('.col12').toggle();

	});
	$('#switch-small-12').change(function () {
		// $('#td-7').toggle();
		$('.filter_pie').toggle();

	});

	$('#switch-small-filter-pie').change(function () {
		// $('#td-7').toggle();
		$('.col14').toggle();

	});


	$('.nav-menu-main').click(function () {
		if ($('.nav-menu-main').hasClass('is-active')) {
			// alert(1);
			$('.min-max').addClass('margin-left-10');
			$('.min-max').addClass('min-max-2');
			$('.pull-up-1').addClass('min-widget-2');
			$(".dashboard_main_div_1").addClass('dashboard_main_div_2');

		} else {
			// alert(11);
			$('.min-max').removeClass('margin-left-10');
			$('.min-max').removeClass('min-max-2');
			$('.pull-up-1').removeClass('min-widget-2');
			$(".dashboard_main_div_1").removeClass('dashboard_main_div_2');



		}
	});



	$(document).ready(function () {
		$('#table-view').DataTable({
			"dom": '"t"'
		});
	});