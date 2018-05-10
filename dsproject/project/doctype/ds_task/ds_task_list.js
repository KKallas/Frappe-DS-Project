/*window.onload = function(win) {
  console.log(window);
}
*/
//frappe.views.KanbanView = 0;
//TODO override the KanbanView init with necessary code

/* function waitForKanban(){
    if(typeof frappe.views.KanbanBoard !== "undefined"){
        var slice_pos = frappe.views.KanbanBoard.toString().indexOf("function prepare()")-6;
        var part_one = frappe.views.KanbanBoard.toString().substr(0,slice_pos);
        var part_two = frappe.views.KanbanBoard.toString().substr(slice_pos,frappe.views.KanbanBoard.toString().len);
        var new_object = (part_one+"console.log('Huraah!');"+part_two);
        //console.log(new_object);
        //frappe.views.KanbanBoard = eval(frappe.views.KanbanBoard.toString());
    }
    else{
        setTimeout(waitForKanban, 250);
    }
}
waitForKanban();

*/

frappe.listview_settings['DS Task'] = {
  onload: function(me) {
    //console.log("test");
  },

  referesh: function(me) {
    //console.log(me.view_name);
    /*if(me.view_name == 'Kanban') {
      console.log("jipkajeee mf kanban");
    } else {
      console.log("jipkajeee mf list");
    }*/
  }
}
