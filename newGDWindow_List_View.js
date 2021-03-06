//Opens dialog window container - Table List View
function() {
	var tableName = "incident_list";
  
	//Initialize the GlideDialogWindow
	var dialog = new GlideDialogWindow('display_' + tableName);
	dialog.setTitle('Incidents Assigned to Me');
	dialog.setPreference('table', tableName);
	dialog.setPreference('sysparm_view', 'default');
	
	//Set the table to display
	var query = 'active=true^assigned_to=javascript:gs.getUserID()';
	dialog.setPreference('sysparm_query', query);
	
	//Open the dialog window
	dialog.render();
}