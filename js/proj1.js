 $(document).ready(function() { 
  
	
   
   
	document.getElementById('generate').addEventListener('click', loadQuote); 
   
   var quote='';
   var author='';
   function loadQuote(){
     var xhr = new XMLHttpRequest();
     xhr.open('GET', 'https://talaikis.com/api/quotes/random/', true);
     xhr.onload=function(){
       if(this.status==200){
         document.getElementById('quote').innerText='"'+(JSON.parse(this.responseText).quote)+'"';
         quote='"' + JSON.parse(this.responseText).quote + '"';
         document.getElementById('author').innerText='- '+(JSON.parse(this.responseText).author);
         author='  -  '+ JSON.parse(this.responseText).author;
       }
     }
     xhr.send();
     var p= Math.floor(Math.random()*10+1);
     changeColors(p);
     console.log(p);
   }
   var colors=['#000', '#FAAD63', '#FFF9C2', '#A2F5BF', '#BCDEFA', '#D6BBFC', '#FFBBCA', '#EF5753', '#DE751F', '#F2D024', '#2779BD'];
function changeColors(r){
   $('.btn').css('background-color', colors[r]);
  $('.overlay').css('background-color', colors[r]);
}
   
 document.getElementById('tweet').addEventListener('click',tweet);
   function tweet(){
     $('.buttons a').attr('href', "https://twitter.com/intent/tweet?text="+ quote + author);
   }
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   

});