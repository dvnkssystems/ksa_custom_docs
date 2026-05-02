// Copyright (c) 2016, firsterp and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Consolidated Stock Summary"] = {
	"filters": [
		{
				"fieldname":"date",
				"label": __("Date"),
				"fieldtype": "Date",
				"default": frappe.datetime.get_today(),
				"reqd": 1,
				"width": "60px"
			},
	
			{
				"fieldname":"warehouse",
				"label": __("Warehouse"),
				"fieldtype": "Select",
				"options": ["","Dead","WIP","Main"],
				  "default":'',
				"width": "60px"
			}
	
		]
};
