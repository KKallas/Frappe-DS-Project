# -*- coding: utf-8 -*-
# Copyright (c) 2018, digitalsputnik and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class DSTask(Document):
	def on_update(self):
		## check if the prj is set
		## if so then call update tasks on the owner project
		pass
