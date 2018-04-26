// Copyright (c) 2018, digitalsputnik and contributors
// For license information, please see license.txt

frappe.ui.form.on('DS Task', {
	refresh: function(frm) {

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
	}
});
