// Copyright (c) 2016, firsterp and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["CSR"] = {
	"filters": [
		{
			"fieldname":"date",
			"label": __("Date"),
			"fieldtype": "Date",
			"options": "date",
			"default": frappe.datetime.get_today(),
			"reqd": 1
		},
		{
			"fieldname":"warehouse",
			"label": __("Warehouse"),
			"fieldtype": "Select",
			"options":["","Dead","WIP","Main"],
			"default":"Dead"
		}
	]
};
