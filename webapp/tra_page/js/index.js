var comment = $('.comment');
var comment_post_list = comment.find('.comment_list');
var news_content = $('.news_content');
var input_comment = $('.input_comment');
var word_len = $('.input_content i');

var obje;
userInfo();

function userInfo() {
    var arr = location.search.substring(1).split("&");
    var obj = {}
    for (var i = 0; i < arr.length; i++) {
        var arr2 = arr[i].split("=");
        obj[arr2[0]] = arr2[1];
    }
    obje = obj;
    return obj;
}

if (obje.share && obje.share != 'undefined') {
    bottom_bar.hide();
    footer.show();
}

function count(action) {
    var headers = {
        'topic': 'product',
        'key': new Date().getTime()
    };
    var bodys = {
        'action': action,
        'platform': 'baseballweb',
        'time': new Date().getTime(),
        'did': obje.did,
        'version': '1.0.0'
    }
    var dataList = [{
        'headers': headers,
        'body': JSON.stringify(bodys)
    }];
    $.ajax({
        url: 'user_info',
        type: 'POST',
        data: JSON.stringify(dataList),
        success: function() {
            console.log(action);
        }
    });
};

// 计算字数
// input_comment.change(function(){
//     console.log(input_comment.val())
//     word_len.html(500 - input_comment.val().length);
// });

// 填写评论
input_comment.on('keyup',function(){
    var maxlen;
    if(input_comment.val().length <= 500) {
        console.log(input_comment.val().length);
        word_len.html(500 - input_comment.val().length);
        
    }else {
        input_comment.val(input_comment.val().substring(0,500));
    }
});

// 提交评论
$('.submit_comment').on('click tap',function(){

});

// 获取评论
getComment();

function getComment() {
    $.ajax({
        url: 'post_list?aid=' + obje.newsid,
        success: function(res) {
            console.log(res);
            if (res.data.posts.length > 0) {
                var arr = res.data.posts;
                isComment(arr, 'posts');
            } else {
                var img = $('<img/>').attr('src', 'img/no_comment.png').appendTo(comment_post_list);
                var p = $('<p/>').html('コメントはまだありません<br>早速コメントを書きましょう').appendTo(comment_post_list);
            }

        }
    });

}
//创建评论
function isComment(list, type) {
    comment_post_list.empty();
    for (var i = 0; i < list.length; i++) {
        // alert(JSON.stringify(list[i]));
        var list_com = $('<div/>').addClass('list');
        // 头像
        var user_img = $('<img/>').addClass('img_head').attr({ 'src': list[i].portrait, 'onerror': 'javascript:this.src="img/default.png"' }).appendTo(list_com);
        // 昵称
        var container = $('<div/>').addClass('container');
        var user_info = $('<p/>').addClass('user_info');
        // console.log(list[i]);
        // var nickname = list[i].nickname;
        // if (nickname.length >= 2) {
        //     nickname = nickname[0] + nickname[1] + '***';
        // } else {
        //     nickname = nickname + '***';
        // }
        var user_name = $('<span/>').addClass('user_name').html(list[i].nickname).appendTo(user_info);
        var num = $('<span/>').addClass('num');
        if (list[i].likes > 0) {
            var likes = $('<i/>').html(list[i].likes).appendTo(num);
        } else {
            var likes = $('<i/>').html('').appendTo(num);
        }

        var support = $('<em/>').addClass('support').attr('data-commmentId', list[i].id).appendTo(num);
        num.appendTo(user_info);
        user_info.appendTo(container)
            //评论内容
        var user_comment = $('<p/>').addClass('user_comment overlength').attr('data-userinfo', JSON.stringify(list[i])).html(list[i].content.replace(/\n/g, "<br>")).appendTo(container);
        if ((list[i].content).length > 120) {
            $('<p class="original">展開</p>').appendTo(container);
        }

        var references = list[i].references;
        if (references) {
            var comment_more = $('<div>').addClass('comment_more');
            for (var j = 0; j < references.length; j++) {
                if (j <= 1) {
                    var head_user = $('<div/>').addClass('head_user');
                    var head_img = $('<img/>').addClass('head_img').attr({ 'src': references[j].portrait, 'onerror': 'javascript:this.src="img/default.png"' }).appendTo(head_user);
                    // var nickname2 = references[j].nickname;
                    // if (nickname2.length >= 2) {
                    //     nickname2 = nickname2[0] + nickname2[1] + '***';
                    // } else {
                    //     nickname2 = nickname2 + '***';
                    // }
                    var head_name = $('<span/>').addClass('head_name').html(references[j].nickname).appendTo(head_user);
                    head_user.appendTo(comment_more);

                    var head_content = $('<div/>').addClass('head_content').attr('data-userinfo', JSON.stringify(references[j])).html(references[j].content.replace(/\\n/g, "<br>")).appendTo(comment_more);
                } else if (j == 2) {
                    var fold = $('<div/>').addClass('fold').html('以前のコメントを表示(<span>' + (references.length - 2) + '件</span>)<img src="../img/icon_more comments.png" class="fold_img">').appendTo(comment_more);
                    var more_list = $('<div/>').addClass('more_list');
                    var head_user = $('<div/>').addClass('head_user');
                    var head_img = $('<img/>').addClass('head_img').attr({ 'src': references[j].portrait, 'onerror': 'javascript:this.src="img/default.png"' }).appendTo(head_user);
                    // var nickname2 = references[j].nickname;
                    // if (nickname2.length >= 2) {
                    //     nickname2 = nickname2[0] + nickname2[1] + '***';
                    // } else {
                    //     nickname2 = nickname2 + '***';
                    // }
                    var head_name = $('<span/>').addClass('head_name').html(references[j].nickname).appendTo(head_user);
                    head_user.appendTo(more_list);

                    var head_content = $('<div/>').addClass('head_content').attr('data-userinfo', JSON.stringify(references[j])).html(references[j].content.replace(/\\n/g, "<br>")).appendTo(more_list);
                    more_list.appendTo(comment_more);
                } else {
                    var more_list = $('<div/>').addClass('more_list');
                    var head_user = $('<div/>').addClass('head_user');
                    var head_img = $('<img/>').addClass('head_img').attr({ 'src': references[j].portrait, 'onerror': 'javascript:this.src="img/default.png"' }).appendTo(head_user);
                    // var nickname2 = references[j].nickname;
                    // if (nickname2.length >= 2) {
                    //     nickname2 = nickname2[0] + nickname2[1] + '***';
                    // } else {
                    //     nickname2 = nickname2 + '***';
                    // }
                    var head_name = $('<span/>').addClass('head_name').html(references[j].nickname).appendTo(head_user);
                    head_user.appendTo(more_list);

                    var head_content = $('<div/>').addClass('head_content').attr('data-userinfo', JSON.stringify(references[j])).html(references[j].content.replace(/\\n/g, "<br>")).appendTo(more_list);
                    more_list.appendTo(comment_more);
                }
            }
            comment_more.appendTo(container);
        }

        //操作


        var operate = $('<p/>').addClass('operate');
        var d = new Date(list[i].createdtime);
        var str = (d.getMonth() + 1) + '/' + d.getDate();
        var number = $('<span/>').addClass('number').html(str).appendTo(operate);
        var share = $('<a/>').addClass('share').html("共有<img src='../img/icon_share comments.png'>").attr('href', "newsjetjsbridge://{'method':'nativeShare','url':'{{shareUrl}}','text':'{{encodedTitle}}','imgurl':''{{shareImg}}','logtype':'transNews'}").appendTo(operate);
        var ope_comment = $('<a/>').addClass('ope_comment links').attr('href', "newsjetjsbridge://{'method':'nativeCommentBack','comment':'"+ list[i].id +"'}").html("返信<img src='../img/icon_reply.png'>").appendTo(operate);
        operate.appendTo(container);

        container.appendTo(list_com);
        if (type == 'hot') {
            list_com.appendTo(comment_hot_list);
        } else {
            list_com.appendTo(comment_post_list);
        }

    }
}


//点击热门评论点赞动效
comment.on('click', '.num', function() {
    if ($(this).attr('data-active') == 'data-active') {
        return;
    } else {
        $(this).find('.support').css('animation', 'support 0.5s linear');
        $(this).find('.support').css('background-image', 'url(img/icon_supported.png)');
        $(this).attr('data-active', 'data-active');
        //点赞数加1
        var support_num = $(this).find('i');
        var sup_num = support_num.html();
        support_num.html(++sup_num);
        var userinfo = $(this).find('.support').attr('data-commmentId');
        addLikes(userinfo);
    }

});

// 赞同数入库
function addLikes(id) {
    $.ajax({
        url: 'post_like?id=' + id,
        success: function(res) {
            console.log(res);
        }
    });

}

// 展开评论
comment.on('click', '.original', function() {
    var content = $(this).siblings('.user_comment').removeClass('overlength');
    $(this).hide();
});

//点击显示盖楼
comment.on('click', '.fold', function() {
    if ($(this).css('display') != 'none') {
        $(this).hide();
        $(this).siblings('.more_list').show();
    }

});
