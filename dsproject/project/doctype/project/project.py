# -*- coding: utf-8 -*-
# Copyright (c) 2018, digitalsputnik and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class Project(Document):
	def update_tasks(self):
		## get all tasks with this project
		## make a list from tasks with opening dates and closing dates if any
		pass

#to set badge count in Department
@frappe.whitelist()
def getTaskCount(name):
	tasks_total = frappe.db.sql("""select name from `tabDS Task` where prj=%s""",name)
	#TODO change the filter to DS Task state based
	tasks_open = frappe.db.sql("""select name from `tabDS Task` where prj=%s and prjstate="Done" """,name)
	return [len(tasks_total),len(tasks_open)]

#to automatically set the same department as project for the DS Task
@frappe.whitelist()
def getDept(name):
	return frappe.get_doc("Project",name).dept
