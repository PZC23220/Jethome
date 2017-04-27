define(function(require, exports, module) {
    var activetyComment = function() {
        var table_activity_tbody = $('.activety_comment').find('tbody');
        var comment_user_id = $('.comment_user_id');
        var add_activity_comment = $('.add_activity_comment');
        var add_activity_comment2 = $('.add_activity_comment2');
        var activity_comment_content = $('.activity_comment_content input');
        var activity_comment_likes = $('.activity_comment_likes input');
        var reply_comment = $('.reply_comment');
        var reference_id = $('.reference_id');
        var arr10 = getUserimg();
        // 获取机器人账户
        function getUserimg() {
            var arr;
            $.ajax({
                url: server_host + '/get_username',
                async: false,
                success: function(res) {
                    arr = res;
                }
            });
            return arr;
        }

        getActivityComment();
        var reply_activity_comment, del_activity_comment;

        function getActivityComment() {
            $.ajax({
                url: '/japi/post/list?aid=-1',
                success: function(res) {
                    var list = res.data.posts;
                    table_activity_tbody.empty();
                    for (var i = 0; i < list.length; i++) {
                        createActivityComment(list[i], (i + 1));
                    }
                    reply_activity_comment = $('.reply_activity_comment');
                    del_activity_comment = $('.del_activity_comment');
                }
            });
            var random = parseInt(Math.random() * arr10.length - 1);
            var obj = arr10[random];
            for (var j = 0; j < arr10.length; j++) {
                $('<option/>').val(arr10[j].nickname).html(arr10[j].nickname).attr('data-userinfo', JSON.stringify(arr10[j])).appendTo(comment_user_id);
            }
        }

        // 创建活动评论表格
        function createActivityComment(list, i) {
            var tr = $('<tr/>');
            var td1 = $('<td/>').html(i).appendTo(tr);
            var td2 = $('<td/>').html(list.id).appendTo(tr);
            var td3 = $('<td/>').html(list.nickname).appendTo(tr);
            var td4 = $('<td/>').html(list.content).appendTo(tr);
            var td5 = $('<td/>').html(list.likes).attr('data-id', list.id).appendTo(tr);
            var d = new Date(list.createdtime);
            var hours = d.getHours() > 10 ? d.getHours() : '0' + d.getHours();
            var minutes = d.getMinutes() >= 10 ? d.getMinutes() : '0' + d.getMinutes();
            var str = d.getUTCFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate() + '  ' + hours + ':' + minutes;
            var td6 = $('<td/>').html(str).addClass('pComments').attr('data-id', list.id).appendTo(tr);
            var td7 = $('<td/>').html('<a href="#">回复</a>').addClass('reply_activity_comment').attr('data-id', list.id).appendTo(tr);
            var td7 = $('<td/>').html('<a href="#">删除</a>').addClass('del_activity_comment').attr('data-id', list.id).appendTo(tr);
            tr.appendTo(table_activity_tbody);

        }
        //提交新评论
        add_activity_comment.click(function() {
            var cVal = activity_comment_content[0].value;
            var userinfo = $(this).siblings('.input-group').find('.comment_user_id option:selected').attr('data-userinfo');
            var likes = $(this).siblings('.activity_comment_likes').find('input').val();
            if (cVal) {
                activityPost(userinfo, cVal, likes);
                getActivityComment();
            }
        });

        // 回复评论
        table_activity_tbody.on('click', '.reply_activity_comment', function() {
            reply_comment.show();
            reference_id.html($(this).attr('data-id'));
        });
        // 删除评论
        table_activity_tbody.on('click', '.del_activity_comment', function() {
            $(this).parents('tr').remove();
            delComments($(this).attr('data-id'));
        });
        //删除评论
        function delComments(id) {
            $.ajax({
                url: server_host + '/del_comments?id=' + id,
                success: function(res) {
                    console.log(res);
                    $('.del_success').show();
                    setTimeout(function() {
                        $('.del_success').hide();
                    }, 1500);
                }
            });
        }

        // 点击回复
        add_activity_comment2.click(function() {
            var cVal = activity_comment_content[1].value;
            var userinfo = $(this).siblings('.input-group').find('.comment_user_id option:selected').attr('data-userinfo');
            var likes = $(this).siblings('.activity_comment_likes').find('input').val();
            var reference = reference_id.html();
            if (cVal) {
                activityPost(userinfo, cVal, likes, reference);
                getActivityComment();
            }
        });

        function activityPost(userinfo, cVal, likes, reference) {
            var userInfo = JSON.parse(userinfo);
            var userBean = {
                'id': userInfo.id,
                'userid': userInfo.userid,
                'nickname': userInfo.nickname,
                'portrait': userInfo.portrait,
                'platform': userInfo.platform

            };
            var postBean = {
                'aid': '-1',
                'atime': new Date(),
                'cid': 'act',
                'uid': userInfo.id,
                'content': cVal,
                'likes': likes,
                'nickname': userInfo.nickname,
                'portrait': userInfo.portrait,
                'title': 'イベントページ',
                'url': 'http://promotion.newsjet.co',
                'imgUrl': 'http://images.newsjet.io/activity2.jpg'
            };
            if (reference) {
                postBean.reference = reference;
            }
            var data = {
                'user': userBean,
                'post': postBean
            }
            $.ajax({
                url: '/japi/post/save',
                type: 'POST',
                data: JSON.stringify(data),
                success: function(res) {
                    console.log(res);
                    share_success.show();
                    likes_success.show();
                    setTimeout(function() {
                        share_success.hide();
                    }, 1500);
                    setTimeout(function() {
                        reply_comment.hide();
                    }, 1500);
                }
            });
        }
    }

    // module.exports = textSea;
    exports.activetyComment = activetyComment;
});

//
