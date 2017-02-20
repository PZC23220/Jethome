;
$(function($) {
    // 获取标签
    var table_comment = $('.table_comment');
    var table_comment_tbody = table_comment.find('tbody');
    var shade = $('.shade');
    var close = $('.close');
    var news_li = $('.news_li li');
    var video_li = $('.video_li li');
    var list_container_left = $('.list_container_left');
    var list_container_right = $('.list_container_right');
    var add_floor = $('.add_floor');
    var sure = $('.sure');
    var comment_text = $('.comment_text');
    var add_more = $('.add_more');
    var publish = $('.publish');
    var search_comment = $('.search_comment');
    var search_video = $('.search_video');
    var news_id = $('.news_id');
    var news_title = $('.news_title');
    var comment_opa = $('.comment_opa');
    var newsid = $('.newsid');
    var del_flo = $('.del_flo');
    var ctr_del = $('.ctr_del');
    var share_success = $('.share_success');
    var comment_success = $('.comment_success');
    var likes_success = $('.likes_success');
    var source = $('.source');
    var news_opa = $('#news_opa');
    var video_opa = $('#video_opa');
    var publish_likes = $('.publish_likes');
    var sure_push = $('.sure_push');
    var push_sure = $('.push_sure');
    var close2 = $('.close2');
    var success_push = $('.success_push');
    var table_pushLog = $('.table_pushLog');
    var table_pushLog_tbody = table_pushLog.find('tbody');
    var pushLog_opa = $('.pushLog_opa');
    var nav_left_list = $('.nav_left_list li');
    var table_container = $('.table_container');
    var comment_container = $('.comment_container');
    var push_log = $('.push_log');
    var news_id_push = $('.news_id_push');
    var search_push = $('.search_push');
    var os = $('.os');
    var video_id = $('.video_id');
    var video_container = $('.video_container');
    var news_content = $('.news_content');
    var iframe = news_content.find('iframe');
    var close3 = $('.close3');
    var table_video = $('.table_video');
    var table_video_tbody = table_video.find('tbody');
    var video_title = $('.video_title');
    var comment_opa2 = $('.comment_opa2');
    var publish2 = $('.publish2');
    var publish2_likes = $('.publish2_likes');
    var activety_comment = $('.activety_comment');
    var table_activity = $('.table_activity');
    var table_activity_tbody = table_activity.find('tbody');
    var add_activity_comment = $('.add_activity_comment');
    var comment_user_id = $('.comment_user_id');
    var add_activity_comment = $('.add_activity_comment');
    var add_activity_comment2 = $('.add_activity_comment2');
    var activity_comment_content = $('.activity_comment_content input');
    var activity_comment_likes = $('.activity_comment_likes input');
    var reference_id = $('.reference_id');
    var reply_comment = $('.reply_comment');
    var close4 = $('.close4');
    var del_success = $('.del_success');
    var switch_activity_splash = $('.switch_activity_splash');
    var switch_activity_appbottombar = $('.switch_activity_appbottombar');
    var table_splash = $('.table_splash');
    var table_splash_tbody = table_splash.find('tbody');
    var table_appbtmbar = $('.table_appbtmbar');
    var table_appbtmbar_tbody = table_appbtmbar.find('tbody');
    var add_splash = $('.add_splash');
    var add_appbottom = $('.add_appbottom');
    var image2x = $('#image2x');
    var image3x = $('#image3x');
    var loading = $('.loading');
    var news_upload = $('.news_upload');
    var comment_automation = $('.comment_automation');
    var table_newsupload = $('.table_newsupload');
    var table_newsupload_tbody = table_newsupload.find('tbody');
    var add_imgs = $('.add_imgs');
    var upload_news = $('.upload_news');
    var upload_news_title = $('.upload_news_title');
    var upload_news_source = $('.upload_news_source');
    var upload_news_site = $('.upload_news_site');
    var upload_news_publishtime = $('.upload_news_publishtime');
    var news_category = $('.news_category');
    var content_upload = $('.content_upload');
    var news_source_url = $('.news_source_url');
    var add_imgs_click = $('.add_imgs_click');
    var add_img1_click = $('.add_img1_click');
    var add_img2_click = $('.add_img2_click');
    var add_img3_click = $('.add_img3_click');
    var add_img1 = $('.add_img1');
    var add_img2 = $('.add_img2');
    var add_img3 = $('.add_img3');
    var previewdiv3 = $('.previewdiv3');
    var previewdiv2 = $('.previewdiv2');
    var previewdiv1 = $('.previewdiv1');
    var table_automation = $('.table_automation');
    var table_automation_tbody = table_automation.find('tbody');
    var mould_content = $('.mould_content');
    var update_mould = $('.update_mould');
    var add_mould = $('.add_mould');
    var mould_add = $('.mould_add');
    var modify_success = $('.modify_success');
    var comment_li = $('.comment_li li');
    var comment_category = $('.comment_category');
    var add_splash_sure = $('.add_splash_sure');
    var splash_id = $('.splash_id');
    var splash_image2x = $('.splash_image2x');
    var splash_image3x = $('.splash_image3x');
    var acticity_url = $('.acticity_url');
    var splash_skip = $('.splash_skip');
    var start_time = $('.start_time');
    var end_time = $('.end_time');
    var splash_showtimes = $('.splash_showtimes');
    var splash_time = $('.splash_time');
    var splash_active = $('.splash_active');
    var tips_success = $('.tips_success');
    var add_appbtmbar_sure = $('.add_appbtmbar_sure');
    var appbtmbar_id = $('.appbtmbar_id');
    var appbtmbar_image2x = $('.appbtmbar_image2x');
    var appbtmbar_image3x = $('.appbtmbar_image3x');
    var appbtmbar_acticity_url = $('.appbtmbar_acticity_url');
    var appbtmbar_text = $('.appbtmbar_text');
    var appbtmbar_active = $('.appbtmbar_active');
    var appbtmbar_start_time = $('.appbtmbar_start_time');
    var appbtmbar_end_time = $('.appbtmbar_end_time');
    var add_appbtmbar = $('.add_appbtmbar');
    var appbtmbar_shareImage = $('.appbtmbar_shareImage');
    var splash_shareimg = $('.splash_shareimg');

    var server_host = "http://jethome.newsjet.io:9000";
    // var server_host = "http://localhost:9000";
    // 

    var arr10 = getUserimg();
    // 获取机器人账户
    function getUserimg() {
        var arr;
        $.ajax({
            url: server_host + '/get_username',
            async: false,
            success: function(res) {
                arr = JSON.parse(res);
            }
        });
        return arr;
    }


    // 判断用户有没有登录
    var obj = sessionStorage.getItem('username');
    if (!obj) {
        window.open('./login.html', '_self');
    }

    // 左侧列表点击
    nav_left_list.click(function() {
        nav_left_list.removeClass('active');
        $(this).addClass('active');
        table_container.hide();
        switch ($(this).index()) {
            case 0:
                comment_container.show();
                break;
            case 1:
                video_container.show();
                break;
            case 2:
                push_log.show();
                break;
            case 3:
                activety_comment.show();
                break;
            case 4:
                switch_activity_splash.show();
                break;
            case 5:
                switch_activity_appbottombar.show();
                break;
            case 6:
                news_upload.show();
                break;
            case 7:
                comment_automation.show();
                break;
            default:
                break;
        }
    });

    // 搜索
    function searchNews() {
        var commentCount = $('.commentCount');
        var nid = news_id.val();
        var tit = news_title.val();
        if (nid) {
            table_comment_tbody.empty();
            getSinglenews(nid);
        }
        if (comment_opa.val() == '0') {
            table_comment_tbody.find('tr').hide();
            commentCount.each(function(idx, ele) {
                var num = parseInt($(this).html());
                if (num > 0) {
                    $(this).parents('tr').show();
                }

            });
        } else {
            table_comment_tbody.find('tr').show();
        }
        if (tit) {
            table_comment_tbody.find('tr').hide().filter(":contains(" + tit + ")").show();
        }
    }

    function searchVideo() {
        var commentCount = $('.commentCount');
        var tit = video_title.val();
        var vid = video_id.val();
        if (vid) {
            table_video_tbody.empty();
            getSinglevideo(vid);
        }
        if (comment_opa2.val() == '0') {
            table_video_tbody.find('tr').hide();
            commentCount.each(function(idx, ele) {
                var num = parseInt($(this).html());
                if (num > 0) {
                    $(this).parents('tr').show();
                }

            });
        } else {
            table_video_tbody.find('tr').show();
        }
        if (tit) {
            table_video_tbody.find('tr').hide().filter(":contains(" + tit + ")").show();
        }
    }

    // 搜索视频
    function getSinglevideo(videoid) {
        $.ajax({
            url: 'video_list?id=' + videoid,
            success: function(res) {
                var list = res.data;
                var tr = $('<tr/>');
                var td1 = $('<td/>').html(1).appendTo(tr);
                var td2 = $('<td/>').html(list.id).addClass('videoid').attr('data-id', list.videoId).appendTo(tr);
                var td3 = $('<td/>').html(list.title).addClass('videotitle').appendTo(tr);
                var td4 = $('<td/>').html(list.commentCount).addClass('commentCount').appendTo(tr);
                var td5 = $('<td/>').html('0').addClass('pComments').attr('data-id', list.id).appendTo(tr);
                var td6 = $('<td/>').addClass('comment').attr('data-newsInfo', JSON.stringify(list));
                var a = $('<a/>').attr('href', '#').html('评论').appendTo(td6);
                td6.appendTo(tr);
                var td7 = $('<td class="system_push"><input type="checkbox" value="noon" class="noon_push2">午间<input type="checkbox" value="night" class="night_push2">晚间</td>').appendTo(tr);
                var td8 = $('<td class="people_push"><a href="#">立即推送</a></td>').appendTo(tr);
                tr.appendTo(table_video_tbody);
            }
        });
        selPush(videoid)
    }

    // 搜索新闻
    function getSinglenews(newsid) {
        $.ajax({
            url: 'news_list?id=' + newsid,
            success: function(res) {
                var list = res.data;
                var tr = $('<tr/>');
                var td1 = $('<td/>').html(1).appendTo(tr);
                var td2 = $('<td/>').html(list.id).addClass('newsid').appendTo(tr);
                var td3 = $('<td/>').html(list.title).addClass('newstitle').appendTo(tr);
                var td4 = $('<td/>').html(list.commentCount).addClass('commentCount').appendTo(tr);
                var td5 = $('<td/>').html('0').addClass('pComments').attr('data-id', list.id).appendTo(tr);
                var td6 = $('<td/>').addClass('comment').attr('data-newsInfo', JSON.stringify(list));
                var a = $('<a/>').attr('href', '#').html('评论').appendTo(td6);
                td6.appendTo(tr);
                var td7 = $('<td class="system_push"><input type="checkbox" value="noon" class="noon_push">午间<input type="checkbox" value="night" class="night_push">晚间</td>').appendTo(tr);
                var td8 = $('<td class="people_push"><a href="#">立即推送</a></td>').appendTo(tr);
                tr.appendTo(table_comment_tbody);
            }
        });
        selPush(newsid)
    }

    // 失去焦点事件
    news_id.blur(function() {
        if ($(this).val() == '') {
            var number = news_opa.val();
            var start;
            news_li.each(function(idx, ele) {
                if ($(this).hasClass('active')) {
                    start = idx - 1;
                }
            });
            getNews(number, start * number);
        }
    });

    video_id.blur(function() {
        if ($(this).val() == '') {
            var number = video_opa.val();
            var start;
            video_li.each(function(idx, ele) {
                if ($(this).hasClass('active')) {
                    start = idx - 1;
                }
            });
            getNews(number, start * number, 'video');
        }
    });

    comment_container.on('click', '.newsid', function() {
        var nid = $(this).html();
        news_content.show();
        getNewsContent(nid);
    });

    table_video_tbody.on('click', '.videoid', function() {
        var vid = $(this).attr('data-id');
        news_content.show();
        iframe.attr('src', 'https://www.youtube.com/embed/' + vid);
    });

    // 获取新闻主体内容
    function getNewsContent(newsid) {
        $.ajax({
            url: 'news_list?id=' + newsid,
            success: function(res) {

                iframe.attr('src', res.data.url);
            }
        });
    }

    // 关闭新闻主题内容
    close3.click(function() {
        news_content.hide();
    });

    //点击评论数
    comment_opa.click(function() {
        var commentCount = $('.commentCount');
        if (comment_opa.val() == '0') {
            table_comment_tbody.find('tr').hide();
            commentCount.each(function(idx, ele) {
                var num = parseInt($(this).html());
                if (num > 0) {
                    $(this).parents('tr').show();
                }

            });
        } else {
            table_comment_tbody.find('tr').show();
        }
    });

    comment_opa2.click(function() {
        var commentCount = $('.commentCount');
        if (comment_opa2.val() == '0') {
            table_video_tbody.find('tr').hide();
            commentCount.each(function(idx, ele) {
                var num = parseInt($(this).html());
                if (num > 0) {
                    $(this).parents('tr').show();
                }

            });
        } else {
            table_video_tbody.find('tr').show();
        }
    });

    // 每页显示的新闻数
    news_opa.click(function() {
        var number = news_opa.val();
        var start;
        news_li.each(function(idx, ele) {
            if ($(this).hasClass('active')) {
                start = idx - 1;
            }
        });
        getNews(number, start * number);
    });
    // 每页显示的视频数
    video_opa.click(function() {
        var number = video_opa.val();
        var start;
        video_li.each(function(idx, ele) {
            if ($(this).hasClass('active')) {
                start = idx - 1;
            }
        });
        getNews(number, start * number, 'video');
    });

    //搜索新闻
    search_comment.click(function() {
        searchNews();

    });

    search_video.click(function() {
        searchVideo();
    })

    $("body").keydown(function() {
        if (event.keyCode == "13") { //keyCode=13是回车键
            searchNews();
        }
    });

    // 点击新闻分页
    news_li.on('click', function() {
        $(this).siblings('li').removeClass('active');
        $(this).addClass('active');
        var number = news_opa.val();
        var idx = ($(this).index() - 1) * number;
        getNews(number, idx);
    });

    // 点击视频分页
    video_li.on('click', function() {
        $(this).siblings('li').removeClass('active');
        $(this).addClass('active');
        var number = video_opa.val();
        var idx = ($(this).index() - 1) * number;
        getNews(number, idx, 'video');
    });

    // 点击显示评论  新闻
    var videoinformation;
    table_comment_tbody.on('click', '.comment', function() {
        shade.show();
        var newsid = $(this).siblings('.newsid').html();
        var newsInfo = $(this).attr('data-newsInfo');
        getComments(newsid, newsInfo);
        getSourceLinks(newsid);
        getHavedComments(newsid, newsInfo);
        newsinformation = newsInfo;

    });

    // 点击显示评论  视频
    table_video_tbody.on('click', '.comment', function() {
        shade.show();
        var videoid = $(this).siblings('.videoid').html();
        var newsInfo = $(this).attr('data-newsInfo');
        getComments(videoid, newsInfo);
        // getSourceLinks(newsid);
        getHavedComments(videoid, newsInfo);
        videoinformation = newsInfo;

    });

    close.click(function() {
        shade.hide();
        $('.list_container_right').empty();
    });

    sure.click(function() {
        var text = comment_text.val();

        $.ajax({
            url: 'post_comments',
            type: 'POST',
            data: { reference: text },
            success: function(res) {
                console.log(res);
            }
        })
    });

    // 添加楼层
    list_container_left.on('click', '.ctr_add', function() {

        var floors = $(this).parents('.detail').find('.floors')
        if (floors.is(':visible')) {
            floors.hide();
            $(this).html('显示楼层');
        } else {
            floors.show();
            $(this).html('隐藏楼层');
        }
    });

    //提交回复
    list_container_left.on('click', '.submit_comments', function() {
        var newsInfo = $(this).parents('.detail').find('.imgs').attr('data-newsInfo');
        var reference = JSON.parse($(this).parents('.detail').find('.imgs').attr('data-userinfo')).id;
        var userInfo = $(this).parents('.floors').find('.user_img').attr('data-userInfo');
        var content = $(this).parents('.floors').find('textarea').val();
        if (content) {
            postComments(userInfo, newsInfo, content, 0, reference);
        }
        var newsid = JSON.parse(newsInfo).id;
        setTimeout(function() {
            getHavedComments(newsid, newsInfo);
        }, 1000)

    });

    list_container_left.on('click', '.submit_comments2', function() {
        var newsInfo = $(this).parents('.detail').find('.imgs').attr('data-newsInfo');
        var reference = JSON.parse($(this).parents('.detail').find('.imgs').attr('data-userinfo')).id;
        var userInfo = $(this).parents('.floors').find('.user_img').attr('data-userInfo');
        var content = $(this).parents('.floors').find('textarea').val();
        if (content) {
            postComments2(userInfo, newsInfo, content, 0, reference);
        }
        var newsid = JSON.parse(newsInfo).id;
        setTimeout(function() {
            getHavedComments(newsid, newsInfo);
        }, 1000)

    });

    // var k = 1;
    // list_container_left.on('click', '.ctr_add', function() {
    //     var floors = $('.floors');
    //     if (floors.length == 0) {
    //         k = 1;
    //     }
    //     var detail = $(this).parents('.detail');
    //     floorComments(k++, detail);
    // });

    // 删除楼层
    // list_container_left.on('click', '.del_flo', function() {
    //     $(this).parents('.floors').remove();

    // });
    //删除回复
    list_container_left.on('click', '.ctr_del', function() {
        $(this).parents('.detail').remove();
        var id = $(this).attr('data-id');
        delComments(id);

    });
    // 添加人工评论
    add_more.click(function() {
        var startidx = parseInt($(this).parents('.comment_list').find('.checkbox:last').find('span').html()) + 1;
        for (var i = startidx; i < startidx + 3; i++) {
            var random = parseInt(Math.random() * arr10.length - 1);
            var obj = arr10[random];
            laborComments(obj, i, newsinformation);
        }
    })

    // 点击发布
    publish.click(function() {
        var che = list_container_right.find('.che');
        che.each(function(idx, ele) {
            if (ele.checked) {
                var con = $(this).parents('.rows').find('textarea');
                var likes = $(this).parents('.rows').find('.floor input').val();
                if (con.val()) {
                    var info = $(this).parents('.rows').find('.user_img');
                    var userInfo = info.attr('data-userInfo');
                    var newsInfo = info.attr('data-newsInfo');
                    var newsid = JSON.parse(newsInfo).id;
                    postComments(userInfo, newsInfo, con.val(), likes);
                    setTimeout(function() {
                        getHavedComments(newsid, newsInfo);
                    }, 1000);

                }
            }
        });
    });

    publish2.click(function() {
        var che = list_container_right.find('.che');
        che.each(function(idx, ele) {
            if (ele.checked) {
                var con = $(this).parents('.rows').find('textarea');
                var likes = $(this).parents('.rows').find('.floor input').val();
                if (con.val()) {
                    var info = $(this).parents('.rows').find('.user_img');
                    var userInfo = info.attr('data-userInfo');
                    var newsInfo = info.attr('data-newsInfo');
                    var newsid = JSON.parse(newsInfo).id;
                    postComments2(userInfo, newsInfo, con.val(), likes);
                    setTimeout(function() {
                        getHavedComments(newsid, newsInfo);
                    }, 1000);

                }
            }
        });
    });

    publish_likes.click(function() {
        var che = list_container_left.find('.che');
        che.each(function(idx, ele) {
            if (ele.checked) {
                var con = $(this).parents('.rows').find('.commented');
                var likes = $(this).parents('.rows').find('.floor input').val();
                var reference = $(this).parents('.detail').find('.imgs').attr('data-userinfo');
                if (likes) {
                    var info = $(this).parents('.rows').find('.user_img');
                    var userInfo = info.attr('data-userInfo');
                    var newsInfo = info.attr('data-newsInfo');
                    var newsid = JSON.parse(newsInfo).id;
                    var cid = JSON.parse(userInfo).id;
                    commentLikes(cid, likes)
                        // postComments(userInfo, newsInfo, con.val(), likes, reference);
                        // getHavedComments(newsid, newsInfo);
                }
            }
        });
    });

    function commentLikes(id, count) {
        $.ajax({
            url: 'comment_likes?id=' + id + "&count=" + count,
            success: function(res) {
                console.log(res);
                share_success.show();
                comment_success.hide();
                likes_success.show();
                setTimeout(function() {
                    share_success.hide();
                }, 1500);
            }
        })

    }

    getNews(20, 0);
    getNews(20, 0, 'video');
    var noon_push, night_push, noon_push2, night_push2;
    // 获取新闻列表
    function getNews(idx, start, news) {
        $.ajax({
            url: 'news_hot?version=2&start=' + start + '&rows=' + idx,
            async: false,
            success: function(res) {
                if (news == 'video') {
                    createVideo(res.data.video, idx);
                    searchVideo();
                } else {
                    createNews(res.data.top, idx);
                    searchNews();
                }
            }
        });
        var nid = $('.pComments');
        var arr = [];
        nid.each(function(idx, ele) {
            arr.push($(this).attr('data-id'));
        });
        getPickComments(arr, nid);
        selPush(arr);

    }
    var index;
    // 创建新闻表格
    function createNews(list, number) {
        var j = 1;
        news_li.each(function(idx) {
            if ($(this).is('.active')) {
                index = $(this).index() - 1;
            }
        });
        table_comment_tbody.empty();
        for (var i = 0; i < list.length; i++) {
            var tr = $('<tr/>');
            var td1 = $('<td/>').html(j++).appendTo(tr);
            var td2 = $('<td/>').html(list[i].id).addClass('newsid').appendTo(tr);
            var td3 = $('<td/>').html(list[i].title).addClass('newstitle').appendTo(tr);
            var td4 = $('<td/>').html(list[i].commentCount).addClass('commentCount').appendTo(tr);
            var td5 = $('<td/>').html('0').addClass('pComments').attr('data-id', list[i].id).appendTo(tr);
            var td6 = $('<td/>').addClass('comment').attr('data-newsInfo', JSON.stringify(list[i]));
            var a = $('<a/>').attr('href', '#').html('评论').appendTo(td6);
            td6.appendTo(tr);
            var td7 = $('<td class="system_push"><input type="checkbox" value="noon" class="noon_push">午间<input type="checkbox" value="night" class="night_push">晚间</td>').appendTo(tr);
            var td8 = $('<td class="people_push"><a href="#">立即推送</a></td>').appendTo(tr);
            tr.appendTo(table_comment_tbody);
        }
        noon_push = $('.noon_push');
        night_push = $('.night_push');
    }

    var index2;
    // // 创建视频表格
    function createVideo(list, number) {
        var j = 1;
        news_li.each(function(idx) {
            if ($(this).is('.active')) {
                index2 = $(this).index() - 1;
            }
        });
        table_video_tbody.empty();
        for (var i = 0; i < list.length; i++) {
            var tr = $('<tr/>');
            var td1 = $('<td/>').html(j++).appendTo(tr);
            var td2 = $('<td/>').html(list[i].id).addClass('videoid').attr('data-id', list[i].videoId).appendTo(tr);
            var td3 = $('<td/>').html(list[i].title).addClass('videotitle').appendTo(tr);
            var td4 = $('<td/>').html(list[i].commentCount).addClass('commentCount').appendTo(tr);
            var td5 = $('<td/>').html('0').addClass('pComments').attr('data-id', list[i].id).appendTo(tr);
            var td6 = $('<td/>').addClass('comment').attr('data-newsInfo', JSON.stringify(list[i]));
            var a = $('<a/>').attr('href', '#').html('评论').appendTo(td6);
            td6.appendTo(tr);
            var td7 = $('<td class="system_push"><input type="checkbox" value="noon" class="noon_push2">午间<input type="checkbox" value="night" class="night_push2">晚间</td>').appendTo(tr);
            var td8 = $('<td class="people_push"><a href="#">立即推送</a></td>').appendTo(tr);
            tr.appendTo(table_video_tbody);
        }
        noon_push2 = $('.noon_push2');
        night_push2 = $('.night_push2');
    }

    // 请求评论数据
    function getComments(newsid, newsInfo) {
        $.ajax({
            url: server_host + '/get_comments?aid=' + newsid,
            success: function(res) {
                createComments(JSON.parse(res), newsInfo);
            }
        });

    }

    // 创建扒取评论/人工评论
    function createComments(list, newsInfo) {
        if (list.length > 0) {
            for (var i = 0; i < list.length; i++) {
                var random = parseInt(Math.random() * arr10.length - 1);
                var obj = arr10[random];
                laborComments(obj, (i + 1), newsInfo, 'pick', list[i].content);
            }
        } else {
            for (var i = 0; i < 3; i++) {
                var random = parseInt(Math.random() * arr10.length - 1);
                var obj = arr10[random];
                laborComments(obj, (i + 1), newsInfo);
            }
        }
    }

    // 创建评论列表
    function laborComments(obj, i, newsInfo, pick, content) {
        var detail = $('<div/>').addClass('detail');
        var rows = $('<div/>').addClass('rows');
        var checkbox = $('<div/>').addClass('checkbox');
        if (pick) {

            var label = $('<label/>').html('<input type="checkbox" class="che"> 评论<span>' + i + '</span>').appendTo(checkbox);
        } else {
            var label = $('<label/>').html('<input type="checkbox" class="che" checked style="display: none;"> 评论<span>' + i + '</span>').appendTo(checkbox);
        }
        checkbox.appendTo(rows);

        var user_img = $('<img/>').addClass('user_img').attr({ 'src': obj.portrait, 'data-userInfo': JSON.stringify(obj), 'data-newsInfo': newsInfo }).appendTo(rows);

        var textarea = $('<textarea/>').attr('rows', '3').addClass('form-control');
        if (content) {
            textarea.val(content);
        }

        textarea.appendTo(rows);

        var floor = $('<div/>').addClass('floor');
        var floor_comment = $('<input type="text" name="floor_comment" class="floor_comment">').appendTo(floor);
        // var btn = $('<button type="button" class="btn btn-default ctr_add">添加楼层</button>').appendTo(floor);
        floor.appendTo(rows);

        var like = $('<div/>').html('赞同数（0~30）').appendTo(rows);

        rows.appendTo(detail);
        detail.appendTo(list_container_right);

    }

    //创建楼层
    function floorComments(i, detail) {
        var random = parseInt(Math.random() * arr10.length - 1);
        var obj = arr10[random];
        var floors = $('<div/>').addClass('floors');
        var floor_num = $('<div/>').addClass('floor_num').html('楼层<span>' + i + '</span>').appendTo(floors);
        var p = $('<p/>');
        var user_img = $('<img/>').addClass('user_img').attr({ 'src': obj.portrait, 'data-userInfo': JSON.stringify(obj) }).appendTo(floors);
        var select = $('<select/>').addClass('floor_select');
        for (var k = 0; k < arr10.length; k++) {
            var option = $('<option/>').val(arr10[k].nickname).html(arr10[k].nickname).attr('data-userinfo', JSON.stringify(arr10[k])).appendTo(select);
            if (obj.nickname == option.html()) {
                option.attr("selected", true);
            }
        }
        select.appendTo(floors);
        var textarea = $('<textarea/>').attr('rows', '3').addClass('form-control').appendTo(floors);
        if (video_container.is(':visible')) {
            var btn = $('<button type="button" class="btn btn-info submit_comments2">提交回复</button>').appendTo(floors);
        } else {
            var btn = $('<button type="button" class="btn btn-info submit_comments">提交回复</button>').appendTo(floors);
        }


        floors.appendTo(detail);

    }

    list_container_left.on('click', '.floor_select', function() {
        var user_img = $(this).siblings('.user_img');
        var userinfo = $(this).find('option:selected').attr('data-userinfo');
        var obj = JSON.parse(userinfo);
        user_img.attr({ 'src': obj.portrait, 'data-userInfo': JSON.stringify(obj) })
    });

    add_activity_comment.click(function() {

    });

    // 发表评论
    function postComments(userInfo, newsInfo, content, likes, reference) {
        var userInfo = JSON.parse(userInfo);
        var newsInfo = JSON.parse(newsInfo);
        var userBean = {
            'id': userInfo.id,
            'userid': userInfo.userid,
            'nickname': userInfo.nickname,
            'portrait': userInfo.portrait,
            'platform': userInfo.platform

        };
        var postBean = {
            'aid': newsInfo.id,
            'atime': newsInfo.public_time,
            'cid': newsInfo.category_id,
            'uid': userInfo.id,
            'content': content,
            'likes': likes,
            // 'reference' : reference,
            'nickname': userInfo.nickname,
            'portrait': userInfo.portrait,
            'title': newsInfo.title,
            'url': newsInfo.url,
            'imgUrl': newsInfo.imgs
        };
        if (reference) {
            postBean.reference = reference;
        }
        var data = {
            'user': userBean,
            'post': postBean
        }
        $.ajax({
            url: 'post_comments',
            type: 'POST',
            data: JSON.stringify(data),
            success: function(res) {
                console.log(res);
                share_success.show();
                comment_success.show();
                likes_success.hide();
                setTimeout(function() {
                    share_success.hide();
                }, 1500)
            }
        });

    }

    function postComments2(userInfo, newsInfo, content, likes, reference) {
        var userInfo = JSON.parse(userInfo);
        var newsInfo = JSON.parse(newsInfo);
        var userBean = {
            'id': userInfo.id,
            'userid': userInfo.userid,
            'nickname': userInfo.nickname,
            'portrait': userInfo.portrait,
            'platform': userInfo.platform

        };
        var postBean = {
            'aid': newsInfo.id,
            'atime': newsInfo.publishTime,
            'cid': newsInfo.cid,
            'uid': userInfo.id,
            'content': content,
            'likes': likes,
            // 'reference' : reference,
            'nickname': userInfo.nickname,
            'portrait': userInfo.portrait,
            'title': newsInfo.title,
            'url': 'https://youtube.com/watch?v=' + newsInfo.videoId,
            'imgUrl': newsInfo.imgs
        };
        if (reference) {
            postBean.reference = reference;
        }
        var data = {
            'user': userBean,
            'post': postBean
        }
        console.log(newsInfo)
        console.log(data);
        $.ajax({
            url: 'post_comments',
            type: 'POST',
            data: JSON.stringify(data),
            success: function(res) {
                console.log(res);
                share_success.show();
                comment_success.show();
                likes_success.hide();
                setTimeout(function() {
                    share_success.hide();
                }, 1500)
            }
        });

    }

    // 获取原评论链接
    function getSourceLinks(newsid) {
        $.ajax({
            url: server_host + '/get_sourceLinks?aid=' + newsid,
            success: function(res) {
                var arr = JSON.parse(res);
                if (arr.length >= 1) {

                    source.html('源评论链接：' + arr[0].url).attr('href', arr[0].url);
                } else {
                    source.html('源评论链接：暂无').attr('href', "#");
                }
            }
        });
    }

    //获取扒取评论
    function getPickComments(newsid, list) {
        var arr = [];
        $.ajax({
            url: server_host + '/get_postGreped?aid=' + newsid,
            success: function(res) {
                arr = JSON.parse(res);
                list.each(function(idx, ele) {
                    for (var j = 0; j < arr.length; j++) {
                        if ($(this).attr('data-id') == arr[j].aid) {
                            $(this).html(arr[j]['count(1)']);
                        }
                    }
                });
            }
        });
        return arr;
    }

    //获取已有评论
    function getHavedComments(newsid, newsInfo) {
        $.ajax({
            url: 'comment_list?aid=' + newsid,
            success: function(res) {
                list_container_left.empty();
                // if ((res.data.hot).length > 0) {
                //     var list = res.data.hot;
                //     for (var i = 0; i < list.length; i++) {
                //         createHavedComments(list[i], (i + 1), newsInfo);
                //     }
                // }
                if ((res.data.posts).length > 0) {
                    var detail = list_container_left.find('.detail');
                    // var num = 0;
                    // if (detail.length > 0) {
                    //     num = parseInt(detail.last().find('span').html());
                    // }
                    var list2 = res.data.posts;
                    for (var j = 0; j < list2.length; j++) {
                        createHavedComments(list2[j], (1 + j), newsInfo);
                    }
                }
            }
        });
    }

    //创建已有评论
    function createHavedComments(list, i, newsInfo) {
        var detail = $('<div/>').addClass('detail');
        var rows = $('<div/>').addClass('rows');
        var checkbox = $('<div/>').addClass('checkbox');
        var label = $('<label/>').html('<input type="checkbox" class="che" checked style="display: none;"> 评论<span>' + i + '</span>').appendTo(checkbox);
        checkbox.appendTo(rows);
        var user_img = $('<img/>').addClass('user_img imgs').attr({ 'src': list.portrait, 'data-userInfo': JSON.stringify(list), 'data-newsInfo': newsInfo }).appendTo(rows);

        var div = $('<div/>').addClass('commented').html(list.content).appendTo(rows);

        var floor = $('<div/>').addClass('floor');
        var floor_comment = $('<input type="text" name="floor_comment" class="floor_comment" placeholder="赞同数">').appendTo(floor);
        var btn = $('<button type="button" class="btn btn-default ctr_add">添加楼层</button>').appendTo(floor);
        floor.appendTo(rows);

        var like = $('<button type="button" class="btn btn-default ctr_del">删除评论</button>').attr('data-id', list.id).appendTo(rows);

        if (list.uid <= 1100 && list.uid >= 1170) {
            detail.addClass('wild');
        }

        rows.appendTo(detail);

        floorComments(1, detail);
        detail.appendTo(list_container_left);
    }

    //删除评论
    function delComments(id) {
        $.ajax({
            url: server_host + '/del_comments?id=' + id,
            success: function(res) {
                console.log(res);
                del_success.show();
                setTimeout(function() {
                    del_success.hide();
                }, 1500);
            }
        });
    }
    // 推送新闻
    table_comment_tbody.on('click', '.people_push', function() {
        var aid = $(this).parents('tr').find('.newsid').html();
        console.log(aid);
        push_sure.show();
        push_sure.find('p span').html(aid);
        surePush(aid);
    });

    // 推送视频
    table_video_tbody.on('click', '.people_push', function() {
        var vid = $(this).parents('tr').find('.videoid').html();
        console.log(vid);
        push_sure.show();
        push_sure.find('p span').html(vid);
        surePush(vid);
    });

    var c = true;
    // 点击确认推送
    function surePush(aid) {

        sure_push.click(function() {
            if (c) {
                c = false;
                os.each(function(idx, ele) {
                    if (this.checked && $(this).val() == 'android') {
                        pushNews(aid, 'android');
                    } else if (this.checked && $(this).val() == 'ios') {
                        pushNews(aid, 'ios');
                    }
                });
            }
        });


    }

    // 取消推送
    close2.click(function() {
        push_sure.hide();
        os.removeAttr("checked");
    });

    // 人工推送
    function pushNews(aid, type) {
        $.ajax({
            url: server_host + '/people_push?aid=' + aid + '&type=' + type,
            async: 'false',
            beforeSend: function() {
                loading.show();
                success_push.hide();
            },
            success: function(res) {
                console.log(c);
                loading.hide();
                success_push.show();
                os.removeAttr("checked");
                setTimeout(function() {
                    push_sure.hide();
                    success_push.hide();
                }, 2000);
                c = true;
            }
        });
    }
    // 午间新闻
    noon_push.each(function(idx, ele) {
        $(this).click(function() {
            if (this.checked) {
                var aid = $(this).parents('tr').find('.newsid').html();
                addPush(aid, 2);
            } else {
                var aid = $(this).parents('tr').find('.newsid').html();
                delPush(aid);
            }
        });
    });
    // 午间视频
    noon_push2.each(function(idx, ele) {
        $(this).click(function() {
            if (this.checked) {
                var aid = $(this).parents('tr').find('.videoid').html();
                addPush(aid, 2);
            } else {
                var aid = $(this).parents('tr').find('.videoid').html();
                delPush(aid);
            }
        });
    });
    // 晚间新闻
    night_push.each(function(idx, ele) {
        $(this).click(function() {
            if (this.checked) {
                var aid = $(this).parents('tr').find('.newsid').html();
                addPush(aid, 3);
            } else {
                var aid = $(this).parents('tr').find('.newsid').html();
                delPush(aid);
            }
        });
    });
    // 晚间视频
    night_push2.each(function(idx, ele) {
        $(this).click(function() {
            if (this.checked) {
                var aid = $(this).parents('tr').find('.videoid').html();
                addPush(aid, 3);
            } else {
                var aid = $(this).parents('tr').find('.videoid').html();
                delPush(aid);
            }
        });
    });
    // 新闻推送
    function addPush(aid, type) {
        var data = { 'aid': aid, 'type': type, 'time': new Date() }
        $.ajax({
            url: server_host + '/add_push',
            type: 'POST',
            data: JSON.stringify(data),
            success: function(res) {
                console.log(res);
            }
        });
    }

    // 删除推送新闻
    function delPush(aid) {
        $.ajax({
            url: server_host + '/del_push?aid=' + aid,
            success: function(res) {
                console.log(res);
            }
        });
    }
    // 查看推送新闻
    function selPush(arr) {
        $.ajax({
            url: server_host + '/sel_push?aid=' + arr,
            success: function(res) {
                var arr1 = JSON.parse(res);
                noon_push.each(function(idx, ele) {
                    var nid = $(this).parents('tr').find('.newsid').html();
                    for (var j = 0; j < arr1.length; j++) {
                        if (nid == arr1[j].aid && arr1[j].type == 2 && arr1[j].isPush == 0) {
                            $(this).attr("checked", 'checked');
                        }
                    }
                });

                night_push.each(function(idx, ele) {
                    var nid = $(this).parents('tr').find('.newsid').html();
                    for (var k = 0; k < arr1.length; k++) {
                        if (nid == arr1[k].aid && arr1[k].type == 3 && arr1[k].isPush == 0) {
                            $(this).attr("checked", 'checked');
                        }
                    }
                });

                noon_push2.each(function(idx, ele) {
                    var nid = $(this).parents('tr').find('.videoid').html();
                    for (var j = 0; j < arr1.length; j++) {
                        if (nid == arr1[j].aid && arr1[j].type == 2 && arr1[j].isPush == 0) {
                            $(this).attr("checked", 'checked');
                        }
                    }
                });

                night_push2.each(function(idx, ele) {
                    var nid = $(this).parents('tr').find('.videoid').html();
                    for (var k = 0; k < arr1.length; k++) {
                        if (nid == arr1[k].aid && arr1[k].type == 3 && arr1[k].isPush == 0) {
                            $(this).attr("checked", 'checked');
                        }
                    }
                });

            }
        });
    }
    pushLog();
    // 查看已推送的新闻
    function pushLog() {
        $.ajax({
            url: server_host + '/push_log',
            success: function(res) {
                createPushLog(res);
            }
        });
    }

    // 创建已推送新闻表格
    function createPushLog(res) {
        var list = JSON.parse(res);
        var j = 1;
        table_pushLog_tbody.empty();
        for (var i = list.length - 1; i >= 0; i--) {
            var tr = $('<tr/>');
            var td1 = $('<td/>').html(j++).appendTo(tr);
            var td2 = $('<td/>').html(list[i].aid).appendTo(tr);
            var dr = Date.parse(list[i].pushTime);
            dr += 1 * 60 * 60 * 1000;
            var d = new Date(dr);
            var hours = d.getHours() >= 10 ? d.getHours() : '0' + d.getHours();
            var minutes = d.getMinutes() >= 10 ? d.getMinutes() : '0' + d.getMinutes();
            var str = d.getUTCFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate() + '  ' + hours + ':' + minutes;
            var td3 = $('<td/>').html(str).appendTo(tr);
            if (list[i].pushType == 0) {
                var td4 = $('<td/>').addClass('push_type').html('自动推送').appendTo(tr);
            } else if (list[i].pushType == 1) {
                var td4 = $('<td/>').addClass('push_type').html('人工推送').appendTo(tr);
            }

            tr.appendTo(table_pushLog_tbody);
        }
    }


    pushLog_opa.click(function() {
        var pushType = $('.push_type');
        console.log(pushLog_opa.val())
        if (pushLog_opa.val() == '人工推送') {
            table_pushLog_tbody.find('tr').hide();
            pushType.each(function(idx, ele) {
                if ($(this).html() == '人工推送') {
                    console.log(111)
                    $(this).parents('tr').show();
                }

            });
        } else {
            table_pushLog_tbody.find('tr').show();
        }
    });
    // 搜索已推送的新闻
    search_push.click(function() {
        var nid = news_id_push.val();
        if (nid) {
            table_pushLog_tbody.empty();
            getPushNews(nid)
        }

    });
    // 搜索新闻
    function getPushNews(newsid) {
        $.ajax({
            url: server_host + '/push_log_news?aid=' + newsid,
            success: function(res) {
                var list = JSON.parse(res);
                var tr = $('<tr/>');
                var td1 = $('<td/>').html(1).appendTo(tr);
                var td2 = $('<td/>').html(list[0].aid).appendTo(tr);
                var dr = Date.parse(list[0].pushTime) + 9 * 24 * 60 * 60 * 1000;
                var d = new Date(dr);
                var hours = d.getHours() >= 10 ? d.getHours() : '0' + d.getHours();
                var minutes = d.getMinutes() >= 10 ? d.getMinutes() : '0' + d.getMinutes();
                var str = d.getUTCFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate() + '  ' + hours + ':' + minutes;
                var td3 = $('<td/>').html(str).appendTo(tr);
                if (list[0].pushType == 0) {
                    var td4 = $('<td/>').addClass('push_type').html('自动推送').appendTo(tr);
                } else if (list[0].pushType == 1) {
                    var td4 = $('<td/>').addClass('push_type').html('人工推送').appendTo(tr);
                }

                tr.appendTo(table_pushLog_tbody);
            }
        });
    }

    getActivityComment();
    var reply_activity_comment, del_activity_comment;

    function getActivityComment() {
        $.ajax({
            url: 'comment_list?aid=-1',
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

    // 取消回复
    close4.click(function() {
        reply_comment.hide();
    });

    // 删除评论
    table_activity_tbody.on('click', '.del_activity_comment', function() {
        $(this).parents('tr').remove();
        delComments($(this).attr('data-id'));
    });

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
            url: 'post_comments',
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


    // 设置闪屏表格 
    getSplash();

    function getSplash() {
        $.ajax({
            url: 'switchconfig_splash',
            success: function(res) {
                console.log(res);
                var list = res.data;
                table_splash_tbody.empty();
                for (var i = list.length - 1; i >= 0; i--) {
                    createSplash(list[i]);
                }
            }
        });

    }

    // 创建闪屏表格
    function createSplash(list) {
        var tr = $('<tr/>');
        var td1 = $('<td/>').addClass('sp_id').html(list.id).appendTo(tr);
        var td2 = $('<td/>').html(list.image2x).appendTo(tr);
        var td3 = $('<td/>').html(list.image3x).appendTo(tr);
        var td4 = $('<td/>').html(list.actUrl).appendTo(tr);
        var td13 = $('<td/>').html(list.shareImage).appendTo(tr);
        if (list.skip == 1) {
            var td5 = $('<td/>').html('有').appendTo(tr);
        } else {
            var td5 = $('<td/>').html('无').appendTo(tr);
        }
        var td6 = $('<td/>').html(list.skipDuration).appendTo(tr);
        var td7 = $('<td/>').html(getTime(list.validityStart -(8*60*60*1000))).appendTo(tr);
        var td8 = $('<td/>').html(getTime(list.validityEnd -(8*60*60*1000))).appendTo(tr);

        switch (list.showtimes) {
            case 1:
                var td9 = $('<td/>').html('everytime').appendTo(tr);
                break;
            case 2:
                var td5 = $('<td/>').html('once a day').appendTo(tr);
                break;
            case 3:
                var td5 = $('<td/>').html('only once').appendTo(tr);
                break;
            case 4:
                var td5 = $('<td/>').html('shop after skip').appendTo(tr);
                break;
            default:
                break;
        }

        var td10 = $('<td/>').html(list.active).appendTo(tr);
        var td11 = $('<td/>').html('<a href="#">修改</a>').addClass('modify_splash').attr('data-info', JSON.stringify(list)).appendTo(tr);
        var td12 = $('<td/>').html('<a href="#">删除</a>').addClass('del_splash').attr('data-id', list.id).appendTo(tr);
        tr.appendTo(table_splash_tbody);

    }

    function getTime(time) {
        var d = new Date(time);
        var hours = d.getHours() >= 10 ? d.getHours() : '0' + d.getHours();
        var minutes = d.getMinutes() >= 10 ? d.getMinutes() : '0' + d.getMinutes();
        var seconds = d.getSeconds() >= 10 ? d.getSeconds() : '0' + d.getSeconds();
        var str = d.getUTCFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate() + '  ' + hours + ':' + minutes + ':' + seconds;
        return str;
    }

    add_splash.click(function() {
        var sp_id = $('.sp_id')[0].innerHTML;
        splash_id.val(++sp_id);
        reply_comment.show();
    });


    add_splash_sure.click(function() {
        setSplash();
    });

    function setSplash() {
        var s_id = splash_id.val();
        var image2x = splash_image2x.val();
        var image3x = splash_image3x.val();
        var a_url = acticity_url.val();
        var s_time = (new Date(start_time.val())).valueOf();
        var e_time =(new Date(end_time.val())).valueOf();
        var skipDuration = splash_time.val();
        var skip = splash_skip.find('option:selected').attr('data-id');
        var showtimes = splash_showtimes.find('option:selected').attr('data-id');
        var active = splash_active.find('option:selected').attr('data-id');
        var shareImage = splash_shareimg.val();
        if (image2x && image3x && a_url && s_time && e_time) {
            var data = {
                id: parseInt(s_id), // 若源ID存在则更新, 若不存在源ID则是新增数据
                actUrl: a_url,
                active: parseInt(active), // 0 Inactive; 1 Active
                shareImage: shareImage,
                image2x: image2x,
                image3x: image3x,
                showtimes: parseInt(showtimes), // 1 everytime; 2 once a day; 3 once; 4 stop after skip
                skip: parseInt(skip), // 0 no skip; 1 skip
                skipDuration: parseInt(skipDuration), // For second
                validityEnd: e_time, // TIMESTAMP
                validityStart: s_time // TIMESTAMP
            }
            console.log(JSON.stringify(data));
            $.ajax({
                url: 'switchconfig_updateSplash',
                type: 'POST',
                data: JSON.stringify(data),
                success: function(res) {
                    if (res.status == 200) {
                        share_success.show();
                        setTimeout(function() {
                            getSplash();
                            share_success.hide();
                            reply_comment.hide();
                        }, 2000);
                    } else {
                        tips_success.show();
                        setTimeout(function() {
                            tips_success.hide();
                        }, 2000);
                    }
                }
            });
        } else {
            tips_success.show();
            setTimeout(function() {
                tips_success.hide();
            }, 2000);
        }
        reply_comment.show();
    }
    // 时间戳转固定格式函数
    Date.prototype.Format = function(fmt) { //author: meizz  
        var o = {
            "M+": this.getMonth() + 1, //月份  
            "d+": this.getDate(), //日  
            "h+": this.getHours(), //小时  
            "m+": this.getMinutes(), //分  
            "s+": this.getSeconds(), //秒  
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度  
            "S": this.getMilliseconds() //毫秒  
        };
        if (/(y+)/.test(fmt))
            fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    };
    // 修改闪屏
    table_splash_tbody.on('click', '.modify_splash', function() {
        var info = JSON.parse($(this).attr('data-info'));
        splash_id.val(info.id);
        splash_image2x.val(info.image2x);
        splash_image3x.val(info.image3x);
        acticity_url.val(info.actUrl);
        splash_shareimg.val(info.shareImage);
        // console.log(getTime(info.validityStart));
        start_time.val(new Date(info.validityStart -(8*60*60*1000)).Format("yyyy-MM-ddThh:mm:ss"));
        end_time.val(new Date(info.validityEnd -(8*60*60*1000)).Format("yyyy-MM-ddThh:mm:ss"));
        // console.log(start_time.val());
        // end_time.val(getTime(info.validityEnd));
        var option1 = splash_skip.find('option');
        for (var k = 0; k < option1.length; k++) {
            if (info.skip == option1[k].getAttribute('data-id')) {
                option1[k].selected = 'selected';
            }
        }
        var option2 = splash_active.find('option');
        for (var l = 0; l < option2.length; l++) {
            if (info.active == option2[l].getAttribute('data-id')) {
                option2[l].selected = 'selected';
            }
        }
        var option3 = splash_showtimes.find('option');
        for (var n = 0; n < option3.length; n++) {
            if (info.showtimes == option3[n].getAttribute('data-id')) {
                option3[n].selected = 'selected';
            }
        }
        splash_time.val(info.skipDuration);
        reply_comment.show();
    });

    // 删除闪屏
    table_splash_tbody.on('click', '.del_splash', function() {
        $.ajax({
            url: 'switchconfig_deleteSplash?id=' + $(this).attr('data-id'),
            success: function(res) {
                console.log(res);
                del_success.show();
                setTimeout(function() {
                    getSplash();
                    del_success.hide();
                }, 2000);
            }
        });

    });


    image2x.change(function() {
        console.log($(this).val());
        console.log(this.value);
    });

    start_time.change(function(event) {
        /* Act on the event */
        console.log($(this).val());
    });



    // 设置底部按钮表格
    getAppbtmba();

    function getAppbtmba() {
        $.ajax({
            url: 'switchconfig_appbtmbar',
            success: function(res) {
                console.log(res);
                var list = res.data;
                table_appbtmbar_tbody.empty();
                for (var i = list.length - 1; i >= 0; i--) {
                    createAppbtmbar(list[i]);
                }
            }
        });

    }

    // 创建底部按钮表格
    function createAppbtmbar(list) {
        var tr = $('<tr/>');
        var td1 = $('<td/>').addClass('bar_id').html(list.id).appendTo(tr);
        var td2 = $('<td/>').html(list.image2x).appendTo(tr);
        var td3 = $('<td/>').html(list.image3x).appendTo(tr);
        var td4 = $('<td/>').html(list.actUrl).appendTo(tr);
        var td11 = $('<td/>').html(list.shareImage).appendTo(tr);
        var td5 = $('<td/>').html(list.btntext).appendTo(tr);
        var td6 = $('<td/>').html(getTime(list.validityStart -(8*60*60*1000))).appendTo(tr);
        var td7 = $('<td/>').html(getTime(list.validityEnd -(8*60*60*1000))).appendTo(tr);
        var td8 = $('<td/>').html(list.active).appendTo(tr);
        var td9 = $('<td/>').html('<a href="#">修改</a>').addClass('modify_appbtmbar').attr('data-info', JSON.stringify(list)).appendTo(tr);
        var td10 = $('<td/>').html('<a href="#">删除</a>').addClass('del_appbtmbar').attr('data-id', list.id).appendTo(tr);
        tr.appendTo(table_appbtmbar_tbody);

    }

    add_appbtmbar_sure.click(function() {
        setAppbtmba();
    });

    function setAppbtmba() {
        var s_id = appbtmbar_id.val();
        var image2x = appbtmbar_image2x.val();
        var image3x = appbtmbar_image3x.val();
        var a_url = appbtmbar_acticity_url.val();
        var s_time = (new Date(appbtmbar_start_time.val())).valueOf();
        var e_time = (new Date(appbtmbar_end_time.val())).valueOf();
        var bar_text = appbtmbar_text.val();
        var bar_active = appbtmbar_active.find('option:selected').attr('data-id');
        var shareImage = appbtmbar_shareImage.val();
        if (image2x && image3x && a_url && s_time && e_time) {
            var data = {
                id: parseInt(s_id), // 若源ID存在则更新, 若不存在源ID则是新增数据
                actUrl: a_url,
                shareImage: shareImage,
                active: parseInt(bar_active), // 0 Inactive; 1 Active
                image2x: image2x,
                image3x: image3x,
                btntext: bar_text,
                validityEnd: e_time, // TIMESTAMP
                validityStart: s_time // TIMESTAMP
            }
            console.log(data);
            $.ajax({
                url: 'switchconfig_updateAppbtmbar',
                type: 'POST',
                data: JSON.stringify(data),
                success: function(res) {
                    if (res.status == 200) {
                        share_success.show();
                        setTimeout(function() {
                            getAppbtmba();
                            share_success.hide();
                            reply_comment.hide();
                        }, 2000);
                    } else {
                        tips_success.show();
                        setTimeout(function() {
                            tips_success.hide();
                        }, 2000);
                    }
                }
            });
        } else {
            tips_success.show();
            setTimeout(function() {
                tips_success.hide();
            }, 2000);
        }
    }

    add_appbtmbar.click(function() {
        var sp_id = $('.bar_id')[0].innerHTML;
        appbtmbar_id.val(++sp_id);
        reply_comment.show();
    });

    table_appbtmbar_tbody.on('click', '.modify_appbtmbar', function() {
        var info = JSON.parse($(this).attr('data-info'));
        appbtmbar_id.val(info.id);
        appbtmbar_image2x.val(info.image2x);
        appbtmbar_image3x.val(info.image3x);
        appbtmbar_acticity_url.val(info.actUrl);
        appbtmbar_shareImage.val(info.shareImage);
        // console.log(getTime(info.validityStart));
        appbtmbar_start_time.val(new Date(info.validityStart -(8*60*60*1000)).Format("yyyy-MM-ddThh:mm:ss"));
        appbtmbar_end_time.val(new Date(info.validityEnd -(8*60*60*1000)).Format("yyyy-MM-ddThh:mm:ss"));
        // console.log(start_time.val());
        // end_time.val(getTime(info.validityEnd));
        var option1 = appbtmbar_active.find('option');
        for (var k = 0; k < option1.length; k++) {
            if (info.skip == option1[k].getAttribute('data-id')) {
                option1[k].selected = 'selected';
            }
        }
        appbtmbar_text.val(info.btntext);
        reply_comment.show();
    });

    table_appbtmbar_tbody.on('click', '.del_appbtmbar', function() {
        $.ajax({
            url: 'switchconfig_deleteAppbtmbar?id=' + $(this).attr('data-id'),
            success: function(res) {
                del_success.show();
                setTimeout(function() {
                    getAppbtmba();
                    del_success.hide();
                });
            }
        });

    });

    getNewsupload();
    // 新闻上传
    function getNewsupload() {
        $.ajax({
            url: server_host + '/get_newsupload',
            success: function(res) {
                var list = JSON.parse(res);
                console.log(list);
                for (var i = 0; i < list.length; i++) {
                    createNewsupload(list[i]);
                }
            }
        })

    }

    function createNewsupload(list) {
        var tr = $('<tr/>');
        var td1 = $('<td/>').html(list.id).appendTo(tr);
        var td2 = $('<td/>').html(list.title).appendTo(tr);
        var td3 = $('<td/>').html(list.source).appendTo(tr);
        var td4 = $('<td/>').html(getTime(list.publish_time)).appendTo(tr);
        var td5 = $('<td/>').html(list.content).appendTo(tr);
        var td6 = $('<td/>').html(getTime(list.create_time)).appendTo(tr);
        var td7 = $('<td/>').html(list.category_id).appendTo(tr);
        var td8 = $('<td/>').html(list.site).appendTo(tr);
        if (list.status == '1') {
            var td9 = $('<td/>').html('未上线').appendTo(tr);
        } else if (list.status == '2') {
            var td9 = $('<td/>').html('已上线').appendTo(tr);
        } else {
            var td9 = $('<td/>').html('下架').appendTo(tr);
        }

        var td10 = $('<td/>').html(list.url).appendTo(tr);
        var td11 = $('<td/>').html('<img src="' + list.image1 + '"/>').appendTo(tr);
        var td12 = $('<td/>').html('<img src="' + list.image2 + '"/>').appendTo(tr);
        var td13 = $('<td/>').html('<img src="' + list.image3 + '"/>').appendTo(tr);
        var td14 = $('<td/>').html('<a href="#">更改</a>').addClass('modify_status').attr('data-id', list.id).appendTo(tr);
        // var td10 = $('<td/>').html('<a href="#">删除</a>').addClass('del_splash').attr('data-info', list).appendTo(tr);
        tr.appendTo(table_newsupload_tbody);

    }

    // 确认上传新闻
    upload_news.on('click', function() {
        setNewsupload();
    });

    function setNewsupload() {
        var tit = upload_news_title.val();
        var n_id = hex_md5(tit);
        var source = upload_news_source.val();
        var site = upload_news_site.val();
        var pubTime = upload_news_publishtime.val();
        var cid = news_category.find('option:selected').attr('data-id');
        var content = content_upload.html();
        var image1 = previewdiv1.find('img').attr('src');
        var image2 = previewdiv2.find('img').attr('src');
        var image3 = previewdiv3.find('img').attr('src');
        var news_source_url = $('.news_source_url').val();
        var data = {
            id: n_id,
            title: tit,
            publish_time: new Date(pubTime),
            content: content,
            create_time: new Date(),
            category_id: cid,
            site: site,
            source: source
        }
        if (news_source_url) {
            data.nurl = news_source_url;
        }

        if (image1) {
            data.image1 = image1;
        }
        if (image2) {
            data.image2 = image2;
        }
        if (image3) {
            data.image3 = image3;
        }
        if (tit && pubTime && content && cid && site && source) {
            $.ajax({
                url: server_host + '/set_newsupload',
                type: 'POST',
                data: JSON.stringify(data),
                // beforeSend: function() {
                //     share_success.show();
                //     loading.show();
                //     likes_success.hide();
                // },
                success: function(res) {
                    share_success.show();
                    likes_success.show();
                    loading.hide();
                    setTimeout(function() {
                        getNewsupload();
                        share_success.hide();
                        reply_comment.hide();
                    }, 2000);
                }
            });
        } else {
            del_success.show();
            setTimeout(function() {
                del_success.hide();
            }, 2000);
        }

    }

    // 设置图片预览
    function preview(imgobj, previewdiv) {
        var accept = /^(.+)\.(jpg||jpeg||png||gif)$/g;
        var browserVersion = window.navigator.userAgent.toLowerCase();
        $('<br>').appendTo(previewdiv);
        var previewimg = $('<img/>');
        if (accept.test(imgobj.value)) {
            //上传为可接受图片格式  
            if (imgobj.files) {
                //上传了图片文件  
                if (window.FileReader) { //html5实现文件上传,兼容ie10及以上 chrome，ff7+  
                    var reader = new FileReader();
                    reader.onload = function() {
                        previewimg.attr("src", this.result);
                    }
                    reader.readAsDataURL(imgobj.files[0]);
                    //将文件以data：url形式读取，写入到result属性中，没有返回值  
                    // reader.onprogress = function(e) {   
                    //  document.getElementById("progress").textContent = (e.loaded/imgobj.files[0].size).toFixed(2)*100+"%";   
                    //  }  
                }
            } else if (browserVersion.indexOf("firefox") > -1) {
                //不支持html5；兼容低版本火狐浏览器  
                previewimg.attr("src", imgobj.files[0].getAsDataURL());

            } else if (browserVersion.indexOf("msie") > -1) {
                //ie浏览器  
                if (browserVersion.indexOf("msie 6") > -1) {
                    //兼容ie6  
                    previewimg.attr("src", imgobj.value);
                } else {
                    //ie[7-9]因为该版本浏览器处于安全性考虑，屏蔽了上传文件的真是本地地址，使用以下获取真实地址  
                    //在ie中使用滤镜进行预览图片，  
                    imgobj.select();
                    if (browserVersion.indexOf("msie 9") > -1) {
                        //ie9中必须将焦点从文本域移开，否则拒绝document.selection.createRange().text  
                        previewimg.focus();
                        //如果上传控件在框架中，imgobj.blur并不能达到目的，所以可以将任意元素聚焦来达到目的。  
                    }
                    // var a = document.selection.createRange().text;  
                    //在测试的时候有点小bug，这部分我在想一下！  
                }
            } else {
                document.getElementById(previewimg).setAttribute("src", imgobj.value);
            }
        } else {
            alert("图片格式不符合，请选择jpg/png/gif/jpeg格式的图片");
            imgobj.value = ""; //清空选中文件  
            if (browserVersion.indexOf("msie") > -1) { //兼容ie9及以下浏览器  
                imgobj.select();
                document.selection.clear();
            }
        }
        previewimg.appendTo(previewdiv);
        $('<br>').appendTo(previewdiv);
    }

    // 添加图片
    add_imgs_click.click(function() {
        add_imgs.click().select();
    });
    add_imgs.change(function() {
        preview(this, content_upload);
    });

    // 添加缩略图
    add_img1_click.click(function() {
        add_imgs1.click().select();
    });
    add_img1.change(function() {
        preview(this, previewdiv1);
    });
    add_img2_click.click(function() {
        add_imgs2.click().select();
    });
    add_img2.change(function() {
        preview(this, previewdiv2);
    });
    add_img3_click.click(function() {
        add_imgs3.click().select();
    });
    add_img3.change(function() {
        preview(this, previewdiv3);
    });

    // 评论自动化
    automation(0);

    function automation(from) {
        $.ajax({
            url: 'commentTemplate_read?size=30&from=' + from,
            success: function(res) {
                table_automation_tbody.empty();
                console.log(res);
                var list = res.data.data;
                for (var i = 0; i < list.length; i++) {
                    createAutomation(list[i]);
                }
            }
        });

    }

    function createAutomation(list) {
        var tr = $('<tr/>');
        var td1 = $('<td/>').html(list.id).appendTo(tr);
        switch (list.cid) {
            case 'all':
                var td2 = $('<td/>').html('all').appendTo(tr);
                break;
            case 'top':
                var td2 = $('<td/>').html('トップ').appendTo(tr);
                break;
            case 'ent':
                var td2 = $('<td/>').html('エンタメ').appendTo(tr);
                break;
            case 'spo':
                var td2 = $('<td/>').html('スポーツ').appendTo(tr);
                break;
            case 'cn':
                var td2 = $('<td/>').html('中国').appendTo(tr);
                break;
            case 'kr':
                var td2 = $('<td/>').html('韓国').appendTo(tr);
                break;
            case 'base':
                var td2 = $('<td/>').html('野球').appendTo(tr);
                break;
            case 'int':
                var td2 = $('<td/>').html('国際').appendTo(tr);
                break;
            case 'pol':
                var td2 = $('<td/>').html('政治').appendTo(tr);
                break;
            case 'bus':
                var td2 = $('<td/>').html('経済').appendTo(tr);
                break;
            case 'tech':
                var td2 = $('<td/>').html('テクノロジー').appendTo(tr);
                break;
            case 'socc':
                var td2 = $('<td/>').html('サッカー').appendTo(tr);
                break;
            case 'soci':
                var td2 = $('<td/>').html('社会').appendTo(tr);
                break;
            case 'girl':
                var td2 = $('<td/>').html('女性').appendTo(tr);
                break;
            case 'tra':
                var td2 = $('<td/>').html('旅行').appendTo(tr);
                break;
            case 'cnet':
                var td2 = $('<td/>').html('チャイナネット').appendTo(tr);
                break;
            case 'video':
                var td2 = $('<td/>').html('動画').appendTo(tr);
                break;
            case 'pic':
                var td2 = $('<td/>').html('写真').appendTo(tr);
                break;
            case 'anime':
                var td2 = $('<td/>').html('アニメ').appendTo(tr);
                break;
            case 'game':
                var td2 = $('<td/>').html('ゲーム').appendTo(tr);
                break;
            case 'food':
                var td2 = $('<td/>').html('グルメ').appendTo(tr);
                break;
            case 'cul':
                var td2 = $('<td/>').html('文化').appendTo(tr);
                break;
            case 'wea':
                var td2 = $('<td/>').html('災害').appendTo(tr);
                break;
            default:
                var td2 = $('<td/>').html(list.cid).appendTo(tr);
                break;

        }

        var td3 = $('<td/>').html(list.keywords).appendTo(tr);
        var td4 = $('<td/>').html(list.content).appendTo(tr);
        var td5 = $('<td/>').html('<a href="#">更改</a>').addClass('modify_automation').attr({ 'data-id': list.id, 'data-content': list.content }).appendTo(tr);
        var td6 = $('<td/>').html('<a href="#">删除</a>').addClass('del_automation').attr('data-id', list.id).appendTo(tr);
        tr.appendTo(table_automation_tbody);

    }

    // 删除评论模板
    table_automation_tbody.on('click', '.del_automation', function() {
        $.ajax({
            url: 'commentTemplate_delete?id=' + $(this).attr('data-id'),
            success: function(res) {
                del_success.show();
                setTimeout(function() {
                    comment_li.removeClass('active');
                    comment_li[1].className = 'active';
                    automation();
                    del_success.hide();
                }, 2000);
            }
        });

    });

    // 修改评论模板
    table_automation_tbody.on('click', '.modify_automation', function() {
        mould_content.val($(this).attr('data-content'));
        mould_content.attr('data-id', $(this).attr('data-id'));
        update_mould.show();
        add_mould.hide();
        reply_comment.show();

    });

    update_mould.click(function() {
        if (mould_content.val()) {
            var data = {
                cid: comment_category.find('option:selected').attr('data-id'),
                keywords: mould_keywords.val(),
                content: mould_content.val(),
                id: mould_content.attr('data-id')
            }
            $.ajax({
                url: 'commentTemplate_update',
                type: 'POST',
                data: JSON.stringify(data),
                success: function(res) {
                    modify_success.show();
                    setTimeout(function() {
                        comment_li.removeClass('active');
                        comment_li[1].className = 'active';
                        automation();
                        modify_success.hide();
                        reply_comment.hide();
                    }, 2000);
                }
            });
        }
    });
    // 添加评论模板
    add_mould.click(function() {
        if (mould_content.val()) {
            var data = {
                    cid: comment_category.find('option:selected').attr('data-id'),
                    keywords: mould_keywords.val(),
                    content: mould_content.val()
                }
                // if(mould_label.val()) {
                //     data.keywords = mould_label.val();
                // } else {
                //     data.keywords = 'newsjet';
                // }
            $.ajax({
                url: 'commentTemplate_create',
                type: 'POST',
                data: JSON.stringify(data),
                success: function(res) {
                    share_success.show();
                    setTimeout(function() {
                        comment_li.removeClass('active');
                        comment_li[1].className = 'active';
                        automation();
                        share_success.hide();
                        reply_comment.hide();
                    }, 2000);
                }
            });
        }
    });

    mould_add.click(function() {
        mould_content.val('');
        update_mould.hide();
        add_mould.show();
        reply_comment.show();
    });

    // 点击模板分页
    comment_li.on('click', function() {
        if ($(this).index() > 0 && $(this).index() < comment_li.length - 1) {
            $(this).siblings('li').removeClass('active');
            $(this).addClass('active');
            // var number = news_opa.val();
            // var idx = ($(this).index() - 1) * number;
            var idx = ($(this).index() - 1) * 30;
            console.log(idx);
            automation(idx);
        }
    });

    // var userinfo = $(this).find('option:selected').attr('data-userinfo');
});

//
