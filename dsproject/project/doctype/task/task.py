# -*- coding: utf-8 -*-
# Copyright (c) 2018, digitalsputnik and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class Task(Document):
	#pass

	@frappe.whitelist()
	def getcount(self,name):

		#make sure the user ha sufficient rights
		#frappe.has_permission(doc=frappe.get_doc(doctype, name), throw=True)

		#count all Tasks


		#count open Tasks

		return 99
