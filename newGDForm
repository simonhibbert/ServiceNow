//Opens dialog window container - Table Form View
function newGDF(tableName, sysID, disVal){
	var dialog = new GlideDialogForm('View User', tableName);  
	dialog.setTitle(disVal); 
	dialog.setSysID(sysID);
	dialog.addParm('sysparm_view', 'sys_popup');
	dialog.addParm('sysparm_form_only', 'true');
	dialog.render(); 
}

newGDF('sys_user', '77433c8637ed0e40a457085a43990e39', 'Adam Faulkinberry user information');