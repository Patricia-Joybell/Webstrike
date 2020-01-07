function CreateAccountForm()
{ 
	var uname = document.forms["LoginForms"]["fname"].value;
	var letters = /^[A-Za-z]+$/;
	if(!uname.match(letters))
	{
		alert('Username must have alphabet characters only');
	}
   var uemail =document.forms["LoginForms"]["email"].value;
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(!uemail.match(mailformat))
	{
		alert("You have entered an invalid email address!");
	}
	var password=document.forms["LoginForms"]["pass"].value;
	var psw= /^[a-zA-Z]\w{7,14}$/;
	if(!password.match(psw))
	{
		alert('Wrong..!');
	
	}		
}


 



 

 



