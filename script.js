$('#right-click-area').click(function(){
    var current = $('#peekCarousel > img:visible').index();
    var last_index = $('#peekCarousel > img:last').index();
    console.log(current);
    console.log(last_index);
    if(current == last_index){
        var next = 0;    
    }
    else{
        var next = current+1;
    }
    $('#peekCarousel > img').eq(next).show().siblings('img').hide();
    console.log($('#peekCarousel > img:visible'));
});