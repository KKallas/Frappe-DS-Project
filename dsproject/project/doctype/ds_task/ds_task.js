// Copyright (c) 2018, digitalsputnik and contributors
// For license information, please see license.txt

frappe.ui.form.on('DS Task', {
	refresh: function(frm) {
		//how to set a value - default functionality
		//frm.set_value("deadline","01-05-2018");
		//where to look for "current" project
		//frappe.views.list_view["List/DS Task/Kanban/Task List"].filter_area.filter_list.filters

		//kui on uus dokk

	},
	//updateing prj will take the department value from prj
	prj: function(frm) {
		frappe.call({
    	method:"dsproject.project.doctype.project.project.getDept",
    	args:{"name":frm.doc.prj},
			callback: function(r) {
				frm.set_value("dept", r.message);
    	}
		});
	},
});
