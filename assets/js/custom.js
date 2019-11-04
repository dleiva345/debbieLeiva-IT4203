$(document).ready(function ()
{
    $("#btnSearch").click(function ()
    {
       var url="https://www.googleapis.com/books/v1/volumes?q=" + $("#searchTerm").val();
       searchBooks(url);
    });
});


$(document).ready(function ()
{
    $("#pg1").click(function ()
    {
       var url="https://www.googleapis.com/books/v1/volumes?q=" + $("#searchTerm").val() + "&startIndex=0";
       searchBooks(url);
       $("#currentPage").replaceWith("Current Page: 1")
    });
});    


$(document).ready(function ()
{
    $("#pg2").click(function ()
    {
       var url="https://www.googleapis.com/books/v1/volumes?q=" + $("#searchTerm").val() + "&startIndex=10";
       searchBooks(url);
       $("#currentPage").replaceWith("Current Page: 2")
    });
});   


$(document).ready(function ()
{
    $("#pg3").click(function ()
    {
       var url="https://www.googleapis.com/books/v1/volumes?q=" + $("#searchTerm").val() + "&startIndex=20";
       searchBooks(url);
       $("#currentPage").replaceWith("Current Page: 3")
    });
}); 
   

$(document).ready(function ()
{
    $("#pg4").click(function ()
    {
       var url="https://www.googleapis.com/books/v1/volumes?q=" + $("#searchTerm").val() + "&startIndex=30";
       searchBooks(url);
       $("#currentPage").replaceWith("Current Page: 4")
    });
});  
   

$(document).ready(function ()
{
    $("#pg5").click(function ()
    {
       var url="https://www.googleapis.com/books/v1/volumes?q=" + $("#searchTerm").val() + "&startIndex=40";
       searchBooks(url);
       $("#currentPage").HTML("Current Page: 5")
    });
});  


$(document).ready(function ()
{
    $("#mybooklist").ready(function ()
    {
       var url="https://www.googleapis.com/books/v1/users/117133542904398879136/bookshelves/1001/volumes";
       googleLibraryLoad(url);
    });
});  
   
function searchBooks(servicePoint)
{
   $("#booklist").html("Searching .....");  
   
   $.getJSON(servicePoint, function (json)
   {
       var booksHTML="";
      
       for (i in json.items)
       {
           booksHTML+="<img class='booklistitem' data-bookid='"+json.items[i].id+ "'";
           if (json.items[i].volumeInfo.imageLinks !== undefined) {
            booksHTML+="src='"+json.items[i].volumeInfo.imageLinks.smallThumbnail+ "' height='100'>";    
           } else {
            booksHTML+="src='" + "' height='100'>";    
           }
       }
       $("#booklist").html(booksHTML);
       
       
       $(".booklistitem").on('click', function () 
       { 	
           getBookDetails( $(this).attr("data-bookid") );
       });
   })
   .fail(function (jqxhr, status, errorMessage)
   {
       $("#booklist").html("Status Code: " + status+"<br>Error Message: "+errorMessage);
   }); 
}
   

function googleLibraryLoad(servicePoint)
{
   
   $.getJSON(servicePoint, function (json)
   {
       var myBooksHTML="";
      
       for (i in json.items)
       {
           myBooksHTML+="<img class='booklistitem' data-bookid='"+json.items[i].id+ "'";
           if (json.items[i].volumeInfo.imageLinks !== undefined) {
            myBooksHTML+="src='"+json.items[i].volumeInfo.imageLinks.smallThumbnail+ "' height='100'>";    
           } else {
            myBooksHTML+="src='" + "' height='100'>";    
           }
       }
       $("#mybooklist").html(myBooksHTML);
       
       
       $(".booklistitem").on('click', function () 
       { 	
           getBookDetails( $(this).attr("data-bookid") ); // use "this" to refer to the current clicked element or use event target, see the next a few lines for the alternative way
       });
   })
        }
function getBookDetails(bookid)
{
    $("#bookdetails").html("Working ...");
    
    $.getJSON("https://www.googleapis.com/books/v1/volumes/" + bookid, function (json)
    {
       $("#bookdetails").html("");
       var bookHTML = "<h3>"+json.volumeInfo.title+ "</h3>";
       bookHTML+="<p>Authors: "+json.volumeInfo.authors+ "</p>"; 
       bookHTML+="<img src='"+json.volumeInfo.imageLinks.thumbnail+ "'>";
       bookHTML+="<p>Language: "+json.volumeInfo.language+ "</p>"; 
       bookHTML+="<p>Pages: "+json.volumeInfo.pageCount+ "</p>";   
        
       if(typeof(json.saleInfo.listPrice) != "undefined")
           {
                bookHTML+="<p>Price: "+json.saleInfo.listPrice.amount+ "</p>";          
           } else {
                bookHTML+="<p>Price: Not Available</p>"; 
           }
      
       bookHTML+="<p>"+json.volumeInfo.description+ "</p>";
       bookHTML+="<a href='https://www.googleapis.com/books/v1/volumes/"+bookid+"' target='_blank'>See this book's JSON</a>";
       $("#bookdetails").html(bookHTML);
       document.getElementById('bookdetails').scrollIntoView({behavior: "smooth"});
    });
}

