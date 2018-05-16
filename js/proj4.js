 $(document).ready(function() { 
   $('.dot1').on('click',function(){
                 $('.dot1').addClass('active');   
                 $('.dot2').removeClass('active');
                 $('.dot3').removeClass('active');
                    
                 });
  $('.dot2').on('click',function(){
                 $('.dot2').addClass('active'); 
                 $('.dot1').removeClass('active');
                 $('.dot3').removeClass('active');
                    
                 });
  $('.dot3').on('click',function(){
                 $('.dot3').addClass('active'); 
                 $('.dot2').removeClass('active');
                 $('.dot1').removeClass('active');
                 });
     
    
     
     
     var channels=[
         'freecodecamp',
         'adumplaze',
         'chrisraygun',
         'mrllamasc',
         'csruhub',
         'timthetatman',
         'ogaminglol',
         'ekolimits',
         'summit1g',
         'sodapoppin',
         'drdisrespectlive',
         'gotaga'
         ];
    var getTAll = function(){ 
     $('.output').html('');
     for(let i=0;i<channels.length;i++){
     
    //--------xml request for channel-----------------     
     var xhr=new XMLHttpRequest();
     xhr.open('GET','https://wind-bow.glitch.me/twitch-api/users/'+channels[i],true);
     xhr.onload=function(){
         if(this.status==200){
             var data=JSON.parse(this.responseText);
             let name=data.name;
             let logo_url=data.logo;
             let display_name=data.display_name;
            
             
              //--------xml request for stream-----------------
             var xhrstr=new XMLHttpRequest();
             xhrstr.open('GET','https://wind-bow.glitch.me/twitch-api/streams/'+channels[i],true);
             xhrstr.onload=function(){
                    if(this.status==200){
                        var data1=JSON.parse(this.responseText);
                            var viewers, gamename, gametype, status;
                            viewers='';
                            gamename='';
                            gametype='';
                            status='Offline'
                            
                        if(data1.stream != null){
                              viewers='Viewers: '+data1.stream.viewers;
                              gamename=data1.stream.game;
                              gametype='Stream type: '+data1.stream.stream_type;
                              status='Online';
                             
                              }
                            
                        
                        $(".output").prepend('<div class="entry"><div class="logo"><img src="'+logo_url+'"></div><div class="name"><a target="_blank" href="https://www.twitch.tv/'+name+'">'+display_name+'</a></div><div class="info"><p class="gamename">'+gamename+'</p><p class="viewers">'+viewers+'</p><p class="gametype">'+gametype+'</p></div><div class="status '+status+'">'+status+'</div></div>');
                        
                        
                        
                        
                    }
                  }
             xhrstr.send();
         }
     }
     xhr.send();
     }
   
 }
    
    var getTOnline = function(){ 
     $('.output').html('');
     for(let i=0;i<channels.length;i++){
     
    //--------xml request for channel-----------------     
     var xhr=new XMLHttpRequest();
     xhr.open('GET','https://wind-bow.glitch.me/twitch-api/users/'+channels[i],true);
     xhr.onload=function(){
         if(this.status==200){
             var data=JSON.parse(this.responseText);
             let name=data.name;
             let logo_url=data.logo;
             let display_name=data.display_name;
            
             
              //--------xml request for stream-----------------
             var xhrstr=new XMLHttpRequest();
             xhrstr.open('GET','https://wind-bow.glitch.me/twitch-api/streams/'+channels[i],true);
             xhrstr.onload=function(){
                    if(this.status==200){
                        var data1=JSON.parse(this.responseText);
                            var viewers, gamename, gametype, status;
                            viewers='';
                            gamename='';
                            gametype='';
                            status='Offline'
                            
                        if(data1.stream != null){
                              viewers='Viewers: '+data1.stream.viewers;
                              gamename=data1.stream.game;
                              gametype='Stream type: '+data1.stream.stream_type;
                              status='Online';
                              $(".output").prepend('<div class="entry"><div class="logo"><img src="'+logo_url+'"></div><div class="name"><a target="_blank" href="https://www.twitch.tv/'+name+'">'+display_name+'</a></div><div class="info"><p class="gamename">'+gamename+'</p><p class="viewers">'+viewers+'</p><p class="gametype">'+gametype+'</p></div><div class="status '+status+'">'+status+'</div></div>');
                              }
                       
                    }
                  }
             xhrstr.send();
         }
     }
     xhr.send();
     }
   
 }
    
    var getTOffline = function(){ 
     $('.output').html('');
     for(let i=0;i<channels.length;i++){
     
    //--------xml request for channel-----------------     
     var xhr=new XMLHttpRequest();
     xhr.open('GET','https://wind-bow.glitch.me/twitch-api/users/'+channels[i],true);
     xhr.onload=function(){
         if(this.status==200){
             var data=JSON.parse(this.responseText);
             let name=data.name;
             let logo_url=data.logo;
             let display_name=data.display_name;
            
             
              //--------xml request for stream-----------------
             var xhrstr=new XMLHttpRequest();
             xhrstr.open('GET','https://wind-bow.glitch.me/twitch-api/streams/'+channels[i],true);
             xhrstr.onload=function(){
                    if(this.status==200){
                        var data1=JSON.parse(this.responseText);
                            var viewers, gamename, gametype, status;
                            viewers='';
                            gamename='';
                            gametype='';
                            status='Offline'
                            
                        if(data1.stream == null){
                              
                              
                              $(".output").prepend('<div class="entry"><div class="logo"><img src="'+logo_url+'"></div><div class="name"><a target="_blank" href="https://www.twitch.tv/'+name+'">'+display_name+'</a></div><div class="status '+status+'">'+status+'</div></div>');
                              }
                       
                    }
                  }
             xhrstr.send();
         }
     }
     xhr.send();
     }
   
 }
    
    
    
    
    $('.dot2').on('click',getTOnline);
    $('.dot3').on('click',getTOffline);
    $('.dot1').on('click',getTAll);  
    
  getTAll();
 
 });