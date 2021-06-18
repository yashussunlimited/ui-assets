	$('.selectivity_dropdown').selectivity({
		allowClear: true,
		placeholder: 'Select'
	});
	$(".selectivity_dropdown").selectivity('clear');


	$('.modal').click(function (evt) {
		// $('.selectivity_dropdown').selectivity("close");
		$(".selectivity_dropdown").each(function () {
			var id = $(this).attr("id");
			if ($(this).next(".selectivity-dropdown").length) {
				$('#' + id).selectivity("close");
			}
		});
		// $(".multiple-input").each(function () {
		// 	var id = $(this).attr("id");
		// 	if ($(this).next(".selectivity-dropdown").length) {
		// 		$('#' + id).selectivity("close");
		// 	}
		// });
	});



	function month_dropdown_regular() {

		$('#yr_dropdown_regular').selectivity({
			allowClear: true,
			placeholder: 'Select'
		});

		$('#qtr_dropdown_regular').selectivity({
			allowClear: true,
			placeholder: 'Select'
		});

		$('#half_yr_dropdown_regular').selectivity({
			allowClear: true,
			placeholder: 'Select'
		});

		$('#year_dropdown_regular').selectivity({
			allowClear: true,
			placeholder: 'Select'
		});

		$('#bi_month_dropdown_regular').selectivity({
			allowClear: true,
			placeholder: 'Select'
		});



		// dropdown for cluster
		$('#yr_dropdown_regular_cluster').selectivity({
			allowClear: true,
			placeholder: 'Select'
		});

		$('#qtr_dropdown_regular_cluster').selectivity({
			allowClear: true,
			placeholder: 'Select'
		});

		$('#half_yr_dropdown_regular_cluster').selectivity({
			allowClear: true,
			placeholder: 'Select'
		});

		$('#year_dropdown_regular_cluster').selectivity({
			allowClear: true,
			placeholder: 'Select'
		});

		$('#bi_month_dropdown_regular_cluster').selectivity({
			allowClear: true,
			placeholder: 'Select'
		});
	}



	$('#select_event_dropdown').selectivity({
		allowClear: true,
		showSearchInputInDropdown: false,

	});

	$("#select_event_dropdown").selectivity('value', 'annual_audit_selected');

	$("#auditor_edit_modal_cluster").selectivity('value', 'auditor_3');

	$("#auditor_edit_modal_regular").selectivity('value', 'auditor_2');





	// $('.modal').click(function (evt) {
	// 	$('#select_event_dropdown').selectivity("close");
	// });


	// Use this for Refrence
	// to clear selected option from sekect dropdown
	// $("#select_event_dropdown").selectivity('clear');


	(function (window, document, $) {
		'use strict';

		/* global $ */

		function escape(string) {
			return string ? String(string).replace(/[&<>"']/g, function (match) {
				return {
					'&': '&amp;',
					'<': '&lt;',
					'>': '&gt;',
					'"': '&quot;',
					'\'': '&#39;'
				} [match];
			}) : '';
		}



		// Select more than one options
		// $('.multiple-input').selectivity({
		// 	multiple: true,
		// 	allowClear: true,
		// 	placeholder: 'Type to search Sites',
		// 	// query: queryFunction
		// });
		// $(".multiple-input").selectivity('clear');


		// Multiple Select Box
		$('.multiple-select-box').selectivity();

	})(window, document, jQuery);