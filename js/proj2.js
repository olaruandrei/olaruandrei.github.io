 $(document).ready(function() { 
   
  //function to determine the coordinates of current position
   function getLocation(){
     
     if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(showPosition);
     }
     else {
       alert ('Geolocation is not supported by this browser.');
     }
   }
      showPosition =function(position){
      var images = [
       'https://images.pexels.com/photos/96622/pexels-photo-96622.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
       'https://images.pexels.com/photos/601798/pexels-photo-601798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
       'https://images.pexels.com/photos/286198/pexels-photo-286198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
       'https://images.pexels.com/photos/751005/pexels-photo-751005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
   ];  
      var long=position.coords.longitude;
      var lat=position.coords.latitude;
        //getWeather
        function getWeather(){
     var location='';
     var coord='';
     var temp='';
     var icon='';
     var skydesc='';
     var xhr=new XMLHttpRequest();
     xhr.open('GET', " https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" +long, true);
     xhr.onload=function(){
       if(this.status==200){
         location=JSON.parse(this.responseText).name;
         coord='Latitude: '+lat.toFixed(2)+'&#176 Longitude: '+long.toFixed(2)+"&#176";
           
           console.log(JSON.parse(this.responseText));
           
         temp=JSON.parse(this.responseText).main.temp;
         icon=JSON.parse(this.responseText).weather[0].icon;
         var far=temp*9/5+32;
         skydesc=JSON.parse(this.responseText).weather[0].description;
         document.getElementById('google_map').setAttribute('src', "https://maps.google.co.uk?q="+lat+","+long+"&z=15&output=embed");
         document.getElementById('icon').setAttribute('src', icon);
         document.getElementById('locat').innerHTML="<p> Location: "+location+"</p>";
         document.getElementById('coord').innerHTML="<p> Coordinates: "+coord+"</p>";
         document.getElementById('temp').innerHTML="<p> Temperature: "+temp+"&#176C </p>";
         document.getElementById('desc').innerHTML="<p> How does the sky looks like: "+skydesc+"</p>";
         $('#temp').hover(function(){$(this).html("<p> Temperature: "+ far +"&#176F </p>");}, function(){$(this).html("<p> Temperature: "+temp+"&#176C </p>");});
         if(temp>0){
             if(skydesc=="few clouds"){ $('.container').css('background','url('+images[0]+')');        }    
             else if (skydesc=="broken clouds"){ $('.container').css('background','url('+images[1]+')');        }
             else if (JSON.parse(this.responseText).weather[0].main=='Rain'){ $('.container').css('background','url('+images[4]+')');        }
         }
           else
            {
               $('.container').css('background','url('+images[2]+')'); 
            }
       }
     }
     xhr.send();
   }
        getWeather();
      }
         getLocation();
  
   
  
 
 
 
 
 
 });