from frappe import _

def get_data():
    return {
        'transactions': [
            {
                'label': _('Tasks'),
                'items': ['DS Task']
            }
        ]
    }
