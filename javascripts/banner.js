$('#banner ul')[0].innerHTML=$('#banner ul')[0].innerHTML+$('#banner ul')[0].innerHTML;
//$('#banner ul').width($('#banner ul').width()+$('#banner ul').width());
$('#banner ul').width($('#banner ul li').width()*$('#banner ul li').length);
var half=$('#banner ul').width();
var timer=null;
var idx=0;
//实现图片轮播
function setm(){
	if($('#banner ul').position().left===-half/2)
	{
		$('#banner ul')[0].style.left="-880px";
		idx=1;
	}
	else{
		$('#banner ul').animate({left:'-=880px'},300);
		idx++;
	}
	$('#banner div').eq(idx%5).css('background-color','red')
	$('#banner div').not($('#banner div').eq(idx%5)).css('background-color','white')
//	alert(idx);
}
//$('#banner ul').click(setm);
//定时器
timer=setInterval(setm,3000);
$('#banner').mousemove(function(){
	clearInterval(timer);
})
$('#banner').mouseout(function(){
	timer=setInterval(setm,3000);
})
$('#banner div').eq(0).css('background-color','red')//设置第一个颜色
//$('#banner div').on('click',function(){
//点击原点定位到图片
$('#banner div').click(
	function bannerDiv(){
		$(this).css('background-color','red');
		$('#banner div').not($(this)).css('background-color','white');
		var i=$(this).index()-1;
		idx=i;
		var j=-880*i+'px';
		$('#banner ul').animate({left:j},300);
	}
)
//鼠标放上去定位到原点
$('#banner div').mouseenter(
	function bannerDiv(){
		$(this).css('background-color','red');
		$('#banner div').not($(this)).css('background-color','white');
		var i=$(this).index()-1;
		idx=i;
		var j=-880*i+'px';
		$('#banner ul').animate({left:j},300);
	}
)
//})