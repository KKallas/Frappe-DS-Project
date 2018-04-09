// Copyright (c) 2018, digitalsputnik and contributors
// For license information, please see license.txt

frappe.ui.form.on('Project', {
	refresh: function(frm) {

		frappe.call({
    	method:"dsproject.project.doctype.project.project.getTaskCount",
    	args:{"name":frm.doc.name},
			callback: function(r) {
				frm.dashboard.set_badge_count("DS Task",r.message[0],r.message[1])
    	}
		});

		//set the links with proper filtration
		$.find(".badge-link")[0].onclick=function() {
    		//frappe.route_options = {"project": frm.doc.name};
    		frappe.set_route("List", "DS Task",{"prj": frm.doc.name});
    	};
	}
});
