$(document).ready(function() {
   
    $('#fullpage').fullpage();
    
   
   

    
    $('.btn-fb').mouseenter(function(){
        $("#facebook").css("opacity", 1).css("right", "65px");
        $(".btn-fb").css("background","none").css("border-color", "aliceblue");
        });
    $('.btn-fb').mouseleave(function(){
        $("#facebook").css("opacity", 0).css("right", "0px");
        $(".btn-fb").css("background","aliceblue").css("border-color", "#000");
        });
    
    $('.btn-gab').mouseenter(function(){
        $("#gab").css("opacity", 1).css("right", "65px");
        $(".btn-gab").css("background","none").css("border-color", "aliceblue");
        });
    $('.btn-gab').mouseleave(function(){
        $("#gab").css("opacity", 0).css("right", "0px");
        $(".btn-gab").css("background","aliceblue").css("border-color", "#000");
        });
    
    $('.btn-minds').mouseenter(function(){
        $("#minds").css("opacity", 1).css("right", "65px");
        $(".btn-minds").css("background","none").css("border-color", "aliceblue");
        });
    $('.btn-minds').mouseleave(function(){
        $("#minds").css("opacity", 0).css("right", "0px");
        $(".btn-minds").css("background","aliceblue").css("border-color", "#000");
        });
   
  
    
    
 
	function charge1(i)
	{	 		
			$('.highschool .unit' + i).css("opacity", "1");		 		
	}function charge2(i)
	{	 		
			$('.college .unit' + i).css("opacity", "1");		 		
	}function charge3(i)
	{	 		
			$('.webdev .unit' + i).css("opacity", "1");		 		
	}
	 
	function clearAll1()
	{
		$('.highschool .unit1').css("opacity", "0")
		$('.highschool .unit2').css("opacity", "0")
		 
	}
    
    function clearAll2()
	{
		$('.college .unit1').css("opacity", "0")
		$('.college .unit2').css("opacity", "0")
		$('.college .unit3').css("opacity", "0")
		$('.college .unit4').css("opacity", "0") 
        $('.college .unit5').css("opacity", "0")
		$('.college .unit6').css("opacity", "0") 
	}
    
    function clearAll3()
	{
		$('.webdev .unit1').css("opacity", "0")
		$('.webdev .unit2').css("opacity", "0")
		$('.webdev .unit3').css("opacity", "0")
		$('.webdev .unit4').css("opacity", "0") 
        $('.webdev .unit5').css("opacity", "0")
    }
	 
	function resetAll()
	{
		$('.unit1').css("opacity", "0.3")
		$('.unit2').css("opacity", "0.3")
		$('.unit3').css("opacity", "0.3")
		$('.unit4').css("opacity", "0.3") 
		$('.unit5').css("opacity", "0.3") 
		$('.unit6').css("opacity", "0.3") 
	}

	var chargeId;

	var element1 = document.querySelector(".highschool");
	var element2 = document.querySelector(".college");
	var element3 = document.querySelector(".webdev");
	element1.addEventListener("mouseover", function () {
		var i=0;  
		charge1(i);
		clearAll1();
		chargeId = setInterval(function()
		{
			if (i==3)
			{
				clearAll1();
				i=1;
			}
			else
			{
				charge1(i);
				i++;
			}	
		}, 400);
	});

	element1.addEventListener("mouseout", function () {
		clearInterval(chargeId);
		resetAll();
	});
    
    	element2.addEventListener("mouseover", function () {
		var i=0;  
		charge2(i);
		clearAll2();
		chargeId = setInterval(function()
		{
			if (i==7)
			{
				clearAll2();
				i=1;
			}
			else
			{
				charge2(i);
				i++;
			}	
		}, 400);
	});

	element2.addEventListener("mouseout", function () {
		clearInterval(chargeId);
		resetAll();
	});
   
    
    	element3.addEventListener("mouseover", function () {
		var i=0;  
		charge3(i);
		clearAll3();
		chargeId = setInterval(function()
		{
			if (i==6)
			{
				clearAll3();
				i=1;
			}
			else
			{
				charge3(i);
				i++;
			}	
		}, 400);
	});

	element3.addEventListener("mouseout", function () {
		clearInterval(chargeId);
		resetAll();
	});
 
    
    $('.webdev').mouseenter(function(){
    $('.webdev .link').css("width", "100%");
    $('.webdev .plug').css("opacity", "1");
                                          }); 
    $('.webdev').mouseleave(function(){ 
    $('.webdev .link').css("width", "0%");
    $('.webdev .plug').css("opacity", "0");
    });   
   
    
    $('.college').mouseenter(function(){
    $('.college .link').css("width", "100%");
    $('.college .plug').css("opacity", "1");  
    });    
    $('.college').mouseleave(function(){
    $('.college .link').css("width", "0%");
    $('.college .plug').css("opacity", "0");
    });
    
    $('.highschool').mouseenter(function(){
    $('.highschool .link').css("width", "100%");
    $('.highschool .plug').css("opacity", "1");  
    });    
    $('.highschool').mouseleave(function(){
    $('.highschool .link').css("width", "0%");
    $('.highschool .plug').css("opacity", "0");
    });
    
    
    
    
});
