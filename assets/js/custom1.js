$(function(){
	$("#btnGrid").click(function (){
		$(".boxitem").css("width", "24%").css("height","150px");
		$("#box").attr("data-layout","Grid");
	});
	
	$("#btnList").click(function (){
		$(".boxitem").css("width", "99%").css("height","80px");
		$("#box").attr("data-layout","List");
	});
});

    

$(function(){
	$("#btnGrid2").click(function (){
		$(".boxitem2").css("width", "24%").css("height","150px");
		$("#box2").attr("data-layout","Grid");
	});
	
	$("#btnList2").click(function (){
		$(".boxitem2").css("width", "99%").css("height","80px");
		$("#box2").attr("data-layout","List");
	});
});        


    //Searching
	<script type="text/javascript">
     $(document).ready(function ()
     {
         $("#btnSearch").click(function ()
         {
            var url="https://www.googleapis.com/books/v1/volumes?q=" + $("#searchTerm").val() + "&startIndex=0";
			searchBooks(url);
         });
     });
        
    $(document).ready(function ()
     {
         $("#PG1").click(function ()
         {
            var url="https://www.googleapis.com/books/v1/volumes?q=" + $("#searchTerm").val() + "&startIndex=0";
			searchBooks(url);
         });
     });    
        
         $(document).ready(function ()
     {
         $("#PG2").click(function ()
         {
            var url="https://www.googleapis.com/books/v1/volumes?q=" + $("#searchTerm").val() + "&startIndex=10";
			searchBooks(url);
         });
     });
        
             $(document).ready(function ()
     {
         $("#PG3").click(function ()
         {
            var url="https://www.googleapis.com/books/v1/volumes?q=" + $("#searchTerm").val() + "&startIndex=20";
			searchBooks(url);
         });
     });
        
             $(document).ready(function ()
     {
         $("#PG4").click(function ()
         {
            var url="https://www.googleapis.com/books/v1/volumes?q=" + $("#searchTerm").val() + "&startIndex=30";
			searchBooks(url);
         });
     });
        
             $(document).ready(function ()
     {
         $("#PG5").click(function ()
         {
            var url="https://www.googleapis.com/books/v1/volumes?q=" + $("#searchTerm").val() + "&startIndex=40";
			searchBooks(url);
         });
     });
    
    
         function searchBooks(servicePoint)
     {
         $("#box").html("Searching ..."+"<img src='http://vignette1.wikia.nocookie.net/wikiality/images/7/70/ProgressBar.gif/revision/latest?cb=20070406024457'>");
         
         $.getJSON(servicePoint, function (jsonData)
         {
            $("#box").html("");
			/*$("#bookdetails").html("Select a book to display details here ... ");*/
			var template = $('#booklisttemplate').html();
			var html = Mustache.render(template, jsonData);
			$("#box").html(html);
             $(".boxitem").on('click', function () 
			 { 
				$(".boxitem").css("background-color","");
				$(this).css("background-color","none");
				getBookDetails($(this).attr("id")); 
			 });
         });
     }
     function getBookDetails(bookid)
     {
         $("#bookdetails").html("Working ..."+"<img style='content-align:center; margin:10px;' src='http://vignette1.wikia.nocookie.net/wikiality/images/7/70/ProgressBar.gif/revision/latest?cb=20070406024457'>");
         
         $.getJSON("https://www.googleapis.com/books/v1/volumes/" + bookid, function (jsonData)
         {
            $("#bookdetails").html("");
			var template = $('#BLT').html();
			var html = Mustache.render(template, jsonData);
			$("#bookdetails").html(html);
         });
     } 
        
    $(document).ready(function ()
	 {
		 $("#box2").ready(function ()
		 {
			var url="https://www.googleapis.com/books/v1/users/102270121096513839701/bookshelves/1001/volumes";
			googleLibraryLoad(url);
		 });
	 });
        
    function googleLibraryLoad(servicePoint)
    {
        
        $.getJSON(servicePoint, function (jsonData)
         {
            $("#box2").html("");
			var template = $('#BLT2').html();
			var html = Mustache.render(template, jsonData);
			$("#box2").html(html);
             $(".boxitem2").on('click', function () 
			 { 
				$(".boxitem2").css("background-color","");
				$(this).css("background-color","none");
				getBookDetails($(this).attr("id")); 
			 });
         });
    }
        
    