$(function(){
	var nav_left_list = $('.nav_left_list').find('li');
	var main_content = $('.main_content');
    main_content.load('./html/commentContainer.html',function(){
    	
    });
    // 左侧列表点击
    nav_left_list.click(function() {
        nav_left_list.removeClass('active');
        $(this).addClass('active');
        main_content.empty();
        main_content.load('./html/' + $(this).find('a').attr('href').substring(1) + '.html');
    });
});   