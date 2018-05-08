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
				// TODO: make the route to user last Kanban view for the DS Task, if user has not been there send to listview
				/*const user_settings = frappe.get_user_settings('DS Task')['Kanban'] || {};
				if(!user_settings.last_kanban_board) {
					frappe.set_route('List', 'DS Task', 'List');
					return true;
				}*/
				//remove previous filters
				/*
				try {
					frappe.views.list_view["List/DS Task/List"].filter_area.remove("prj");
				} catch(e) {
					console.log("no filter avaiable");
				}
				//set new prj

    		//frappe.set_route("List", "DS Task","Kanban",user_settings.last_kanban_board,{"prj": frm.doc.name});
				frappe.set_route("List","DS Task");*/
				frappe.route_options = {"prj": frm.doc.name};
				frappe.set_route("List","DS Task","Kanban");
				return true;
    	};
		$.find(".open-notification")[0].onclick=function() {
				frappe.route_options = {
						"prjstate":["!=","Done"],
						"prj": frm.doc.name
					};
				frappe.set_route("List","DS Task","Kanban");
				return true;
			};
	}
});
