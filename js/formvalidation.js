	function validateForm()
	{
		var nameFlag = 0;
		var mailFlag = 0;
		var uname = document.forms["myForm"]["fname"].value;
		var letters = /^[A-Za-z]+$/;
		if(!uname.match(letters))
		{
			alert("Firstname must have alphabet characters only");
		}
		else
		{
			nameFlag = 1;
		}
	    var email =document.forms["myForm"]["email"].value;
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if(!email.match(mailformat))
		{
			alert("Invalid email");
		}
		else
		{
			mailFlag = 1;
		}
	   if (nameFlag && mailFlag)
	   {
		   alert("Thank you,We will contact you as soon as possible!");
		   return;
	   }
}