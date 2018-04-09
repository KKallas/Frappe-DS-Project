# -*- coding: utf-8 -*-
# Copyright (c) 2018, digitalsputnik and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class Project(Document):
	pass

@frappe.whitelist()
def getTaskCount(name):
	tasks_total = frappe.db.sql("""select name from `tabDS Task` where prj=%s""",name)
	tasks_open = frappe.db.sql("""select name from `tabDS Task` where prj=%s and state="Closed" """,name)
	return [len(tasks_total),len(tasks_open)]
