 $(document).ready(function() { 
   
   var h;  
    $('#searchButton').on('click', function(){ 
     
       var searchvalue=document.getElementById('inputval').value;
       
         
       if(searchvalue){ 
         widthQ(x);
         var xhr= new XMLHttpRequest(); 
         xhr.open('GET', 'https://en.wikipedia.org/w/api.php?action=opensearch&search='+ searchvalue +'&origin=*', true);
         xhr.onload = function () {
             if(xhr.status==200){
                 $("#output").html('');
                 
                 var data=JSON.parse(this.response);
                 h=data[1].length;
                 for(let i=0;i<data[1].length;i++){
                     $("#output").prepend('<a href="'+data[3][i]+'" target="_blank"><div class="entry"> <h3>'+data[1][i]+'</h3> <p>'+data[2][i]+'</p></div></a>');
                 }
                 $('#inputval').val('');
             }
         }
         xhr.send();
         
       }
     
  
     });
     
     
   function widthQ(x) {
    if (x.matches) { 
       $('.cautare').css('width','100%'); 
       $('.cautare').css('height','20%'); 
       $('.rezultat').css('width','100%');
       $('.rezultat').css('height','auto');
       $('.rezultat').css('overflow','none');
       $(".rezultatInner").removeClass("scrollbar");
    } else {
        
       $('.cautare').css('width','40%'); 
       $('.rezultat').css('width','60%');
       $(".rezultatInner").addClass("scrollbar");
       $('.rezultat').css('height','100%');
    }
    } 
     
     
   var x = window.matchMedia("(max-width: 600px)");     
     
    
     
     
     
     
     
 $("#inputval").keypress(function(e){
   if(e.which==13){
       $("#searchButton").click();
                    }  
 });
  
 });



