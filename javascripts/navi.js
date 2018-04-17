$('.dropdown').mouseenter(function(){
	$(this).css({'background-color':'#337ab7','color':'white'});
	$('.dropdown').not($(this)).css({'background-color':'white','color':'black'});
})
//$('#navi ul li').mouseenter(function(){
//	$(this).css({'background-color':'#337ab7','color':'white'});
//	$('#navi ul li').not($(this)).css({'background-color':'white','color':'black'});
//})
