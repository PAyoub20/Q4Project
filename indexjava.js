//Links my forms submit button to a google forms and sends it to a google sheet.
$('#input-form').one('submit',function(){
              var inputq1 = encodeURIComponent($('#input-q1').val());
              var q1ID = "entry_2071262986";  //googel forms Question 1 spot ID.    
  	    			var baseURL = 'https://docs.google.com/a/greenwichschools.org/forms/d/1hIR2DmS3Ms9IowP1uSPa1tlp9zpRKZBOYEvKdOgryOU/formResponse?';  //link to my google forms.
   						var submitRef = '&submit=Submit';  //Summit links to the summit button.                            
    					var submitURL = (baseURL + q1ID + "=" + inputq1 + submitRef);
     					console.log(submitURL); //console.logs submitURL
    					$(this)[0].action=submitURL;
              $('#input-feedback').text('Thank You!'); //says thank you after user summits a response
   				    setInterval(function(){location.reload();}, 1000); //Resets the page after 1000 milliseconds.        
});
