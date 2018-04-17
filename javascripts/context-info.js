$('#con-left-bottom li').eq(0).css({'background':'gray'});
$('#con-left-bottom li').mouseenter(function(){
    $(this).css({'background':'gray'});
    $('#con-left-bottom li').not($(this)).css({'background':'rgb(54, 54, 54)'});
    var idx=$(this).index('#con-left-bottom li');
    $('#con-left-bottom-info ul').eq(idx).show();
    $('#con-left-bottom-info ul').not($('#con-left-bottom-info ul').eq(idx)).hide();
})
