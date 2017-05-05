var c = true;
define(function(require, exports, module) {
    // var newsAndVideo = {
    //     _bindEvent: function(){
    //         var self = this;
    //
    //     },
    //     init: function(){
    //         var self = this;
    //
    //     }
    // }
    var newsAndVideo = function() {
        var video_li = $('.video_li li');
        var news_li = $('.news_li li');
        var shade = $('.shade');
        var table_comment_tbody = $('.table_comment').find('tbody');
        var list_container_left = $('.list_container_left');
        var list_container_right = $('.list_container_right');
        var add_floor = $('.add_floor');
        var add_more = $('.add_more');
        var publish = $('.publish');
        var add_activity_comment = $('.add_activity_comment');
        var newsid = $('.newsid');
        var del_flo = $('.del_flo');
        var ctr_del = $('.ctr_del');
        var source = $('.source');
        var news_opa = $('#news_opa');
        var video_opa = $('#video_opa');
        var publish_likes = $('.publish_likes');
        var sure_push = $('.sure_push');
        var push_sure = $('.push_sure');
        var success_push = $('.success_push');
        var nav_left_list = $('.nav_left_list li');
        var os = $('.os');
        var video_id = $('.video_id');
        var news_content = $('.news_content');
        var iframe = news_content.find('iframe');
        var table_video_tbody = $('.table_video').find('tbody');
        var video_title = $('.video_title');
        var video_container = $('.video_container');
        var close3 = $('.close3');
        var main_content = $('.main_content');
        var c_news_id = $('.c_news_id');
        var c_news_title = $('.c_news_title');
        var c_news_category = $('.c_news_category');
        var c_news_sure = $('.c_news_sure');
        var publish2 = $('.publish2');
        var publish2_likes = $('.publish2_likes');
        var news_id = $('.news_id');
        var news_title = $('.news_title');
        var comment_container = $('.comment_container');
        var comment_opa = $('.comment_opa');
        var search_comment = $('.search_comment');
        var reply_comment = $('.reply_comment');
        var category = $('.category');
        var comment_opa2 = $('.comment_opa2');
        var search_video = $('.search_video');
        var loading = $('.loading');
        getCategorys();

        function getCategorys() {
            category.empty();
            for (var i = 0; i < arrCategory.length; i++) {
                $('<option/>').html(arrCategory[i].channel).attr('data-id', arrCategory[i].cid).appendTo(category);
            }
        }
        $("body").keydown(function() {
            if (event.keyCode == "13") { //keyCode=13是回车键
                searchNews();
            }
        });
        // 搜索视频
        function getSinglevideo(videoid) {
            $.ajax({
                url: '/japi/video/get?id=' + videoid,
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
        // 失去焦点事件
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
        video_title.blur(function() {
            if ($(this).val() == '') {
                window.location.reload();
            }
        });
        table_video_tbody.on('click', '.videoid', function() {
            var vid = $(this).attr('data-id');
            news_content.show();
            iframe.attr('src', 'https://www.youtube.com/embed/' + vid);
        });
        // 获取视频主体内容
        function getNewsContent(newsid) {
            $.ajax({
                url: '/japi/news/get?id=' + newsid,
                success: function(res) {

                    iframe.attr('src', res.data.url);
                }
            });
        }
        //点击评论数
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
        // 搜索视频
        search_video.click(function() {
            searchVideo();
        });
        // 点击视频分页
        video_li.on('click', function() {
            $(this).siblings('li').removeClass('active');
            $(this).addClass('active');
            var number = video_opa.val();
            var idx = ($(this).index() - 1) * number;
            getNews(number, idx, 'video');
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
                // table_comment_tbody.find('tr').hide().filter(":contains(" + tit + ")").show();
                $.ajax({
                    url: 'news_select?wt=json&fl=title,aid,site,score,source,commentCount,ctime,category_id:cid,desc&sort=score%20desc&q=title:' + tit + '&fq=ctime:%5B' + parseInt((new Date() - 2 * 24 * 60 * 60 * 1000) / 1000) + '%20TO%20*%5D&rows=100',
                    success: function(res) {
                        console.log(res);
                        table_comment_tbody.empty();
                        var lists = res.response.docs;
                        for (var i = 0; i < lists.length; i++) {
                            var list = lists[i];
                            var tr = $('<tr/>');
                            var td1 = $('<td/>').html(1).appendTo(tr);
                            var td2 = $('<td/>').html(list.aid).addClass('newsid').appendTo(tr);
                            var td3 = $('<td/>').html(list.title).addClass('newstitle').appendTo(tr);
                            var td4 = $('<td/>').html(list.commentCount).addClass('commentCount').appendTo(tr);
                            var td5 = $('<td/>').html('0').addClass('pComments').attr('data-id', list.id).appendTo(tr);
                            var td6 = $('<td/>').addClass('comment').attr('data-newsInfo', JSON.stringify(list));
                            var a = $('<a/>').attr('href', '#').html('评论').appendTo(td6);
                            td6.appendTo(tr);
                            var td7 = $('<td class="system_push"><input type="checkbox" value="noon" class="noon_push">午间<input type="checkbox" value="night" class="night_push">晚间</td>').appendTo(tr);
                            var td8 = $('<td class="people_push"><a href="#">立即推送</a></td>').appendTo(tr);
                            transCategory(list.category_id, list.id, tr);
                            tr.appendTo(table_comment_tbody);
                        }
                    }
                });

            }
        }

        // 搜索新闻
        function getSinglenews(newsid) {
            $.ajax({
                url: '/japi/news/get?id=' + newsid,
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
                    transCategory(list.category_id, list.id, tr);
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
        news_title.blur(function() {
            if ($(this).val() == '') {
                window.location.reload();
            }
        });
        comment_container.on('click', '.newsid', function() {
            var nid = $(this).html();
            news_content.show();
            getNewsContent(nid);
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
        //搜索新闻
        search_comment.click(function() {
            searchNews();

        });
        // 点击新闻分页
        news_li.on('click', function() {
            $(this).siblings('li').removeClass('active');
            $(this).addClass('active');
            var number = news_opa.val();
            var idx = ($(this).index() - 1) * number;
            getNews(number, idx);
        });
        // 点击显示新闻分类
        table_comment_tbody.on('click', '.c_id', function() {
            reply_comment.show();
            c_news_id.val($(this).siblings('.newsid').html());
            c_news_title.val($(this).siblings('.newstitle').html());
            var option = c_news_category.find('option');
            var cid = $(this).attr('data-cid');
            option.each(function(idx, ele) {
                if ($(this).attr('data-id') == cid) {
                    $(this).attr('selected', true);
                }
            });
        });
        // 搜索
        function searchNews() {
            var commentCount = $('.commentCount');
            var nid = $('.news_id').val();
            var tit = $('.news_title').val();
            var news_category = $('#news_category').val();
            if (nid) {
                table_comment_tbody.empty();
                getSinglenews(nid);
            }
            if ($('.comment_opa').val() == '0') {
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
                // table_comment_tbody.find('tr').hide().filter(":contains(" + tit + ")").show();
                $.ajax({
                    // url: 'news_select?wt=json&fl=title,aid,site,score,source,commentCount,ctime,category_id:cid,desc&sort=score%20desc&q=title:' + tit + '&fq=ctime:%5B' + parseInt((new Date() - 2 * 24 * 60 * 60 * 1000) / 1000) + '%20TO%20*%5D&rows=10',
                    url: '/japi/news/search',
                    data: {
                        keyword: tit || '',
                        beforeDays: 7,
                        rows: 100
                    },
                    success: function(res) {
                        console.log('搜索结果');
                        console.log(res);
                        table_comment_tbody.empty();
                        var lists = res.data;
                        for (var i = 0; i < lists.length; i++) {
                            var list = lists[i];
                            var tr = $('<tr/>');
                            var td1 = $('<td/>').html(i + 1).appendTo(tr);
                            var td2 = $('<td/>').html(list.id).addClass('newsid').appendTo(tr);
                            var td3 = $('<td/>').html(list.title).addClass('newstitle').appendTo(tr);
                            var td4 = $('<td/>').html(list.commentCount).addClass('commentCount').appendTo(tr);
                            var td5 = $('<td/>').html('0').addClass('pComments').attr('data-id', list.id).appendTo(tr);
                            var td6 = $('<td/>').addClass('comment').attr('data-newsInfo', JSON.stringify(list));
                            var a = $('<a/>').attr('href', '#').html('评论').appendTo(td6);
                            td6.appendTo(tr);
                            var td7 = $('<td class="system_push"><input type="checkbox" value="noon" class="noon_push">午间<input type="checkbox" value="night" class="night_push">晚间</td>').appendTo(tr);
                            var td8 = $('<td class="people_push"><a href="#">立即推送</a></td>').appendTo(tr);
                            transCategory(list.category_id, list.id, tr);
                            tr.appendTo(table_comment_tbody);
                        }
                    }
                });

            }
            if(news_category && news_category.length > 0){
                // 按照新闻分类进行搜索
                $.ajax({
                    url: '/api/v1/news/category/search',
                    data: {cid: news_category},
                    success: function(res){
                        console.log(res);
                        table_comment_tbody.empty();
                        var lists = res.data;
                        for (var i = 0; i < lists.length; i++) {
                            var list = lists[i];
                            var tr = $('<tr/>');
                            var td1 = $('<td/>').html(i + 1).appendTo(tr);
                            var td2 = $('<td/>').html(list.aid).addClass('newsid').appendTo(tr);
                            var td3 = $('<td/>').html(list.title).addClass('newstitle').appendTo(tr);
                            var td4 = $('<td/>').html(list.commentCount).addClass('commentCount').appendTo(tr);
                            var td5 = $('<td/>').html('0').addClass('pComments').attr('data-id', list.id).appendTo(tr);
                            var td6 = $('<td/>').addClass('comment').attr('data-newsInfo', JSON.stringify(list));
                            var a = $('<a/>').attr('href', '#').html('评论').appendTo(td6);
                            td6.appendTo(tr);
                            var td7 = $('<td class="system_push"><input type="checkbox" value="noon" class="noon_push">午间<input type="checkbox" value="night" class="night_push">晚间</td>').appendTo(tr);
                            var td8 = $('<td class="people_push"><a href="#">立即推送</a></td>').appendTo(tr);
                            // var td4 = $('<td/>').html(list.cid).appendTo(tr);
                            transCategory(list.cid, list.aid, tr);
                            tr.appendTo(table_comment_tbody);
                        }
                    }
                })
            }

        }
        // 搜索
        function searchVideo() {
            var commentCount = $('.commentCount');
            var tit = video_title.val();
            var vid = video_id.val();
            if (vid) {
                table_video_tbody.empty();
                getSinglevideo(vid);
            }
            if ($('.comment_opa2').val() == '0') {
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
                // table_video_tbody.find('tr').hide().filter(":contains(" + tit + ")").show();
                $.ajax({
                    url: '/solr/videos/select?wt=json&fl=title,vid,commentCount,category_id:cid,desc&sort=score%20desc&q=title:' + tit + '&rows=100',
                    success: function(res) {
                        console.log(res);
                        table_video_tbody.empty();
                        var lists = res.response.docs;
                        for (var i = 0; i < lists.length; i++) {
                            var list = lists[i];
                            var tr = $('<tr/>');
                            var td1 = $('<td/>').html(i + 1).appendTo(tr);
                            var td2 = $('<td/>').html(list.vid).addClass('videoid').attr('data-id', list.videoId).appendTo(tr);
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
                    }
                });
            }
        }
        // 关闭新闻主题内容
        main_content.on('click', '.close', function() {
            shade.hide();
            $('.list_container_right').empty();
        });
        close3.click(function() {
            news_content.hide();
        });
        // close.click(function() {
        //     shade.hide();
        //     $('.list_container_right').empty();
        // });

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
            // 已有评论提交点赞数
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
                url: '/japi/post/like?id=' + id + "&count=" + count,
                success: function(res) {
                    console.log(res);
                    $('.share_success').show();
                    $('.comment_success').hide();
                    $('.likes_success').show();
                    setTimeout(function() {
                        $('.share_success').hide();
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
                url: '/japi/news/hot?version=2&start=' + start + '&rows=' + idx,
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
        // 查看推送新闻
        function selPush(arr) {
            $.ajax({
                url: server_host + '/sel_push?aid=' + arr,
                success: function(res) {
                    var arr1 = res;
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
                transCategory(list[i].category_id, list[i].id, tr);
                var td10 = $('<td class="distinct"><a href="javascript:;">去重</a></td>').attr('data-id', list[i].id).appendTo(tr);
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
        // 点击发布
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

        // 请求评论数据
        function getComments(newsid, newsInfo) {
            $.ajax({
                url: server_host + '/get_comments?aid=' + newsid,
                success: function(res) {
                    createComments(res, newsInfo);
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
        // 选择特定用户进行评论
        list_container_left.on('click', '.floor_select', function() {
            var user_img = $(this).siblings('.user_img');
            var userinfo = $(this).find('option:selected').attr('data-userinfo');
            var obj = JSON.parse(userinfo);
            user_img.attr({ 'src': obj.portrait, 'data-userInfo': JSON.stringify(obj) })
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
                url: '/japi/post/save',
                type: 'POST',
                data: JSON.stringify(data),
                success: function(res) {
                    console.log(res);
                    $('.share_success').show();
                    $('.comment_success').show();
                    $('.likes_success').hide();
                    setTimeout(function() {
                        $('.share_success').hide();
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
                url: '/japi/post/save',
                type: 'POST',
                data: JSON.stringify(data),
                success: function(res) {
                    console.log(res);
                    $('.share_success').show();
                    $('.comment_success').show();
                    $('.likes_success').hide();
                    setTimeout(function() {
                        $('.share_success').hide();
                    }, 1500)
                }
            });

        }

        // 获取原评论链接
        function getSourceLinks(newsid) {
            $.ajax({
                url: server_host + '/get_sourceLinks?aid=' + newsid,
                success: function(res) {
                    var arr = res;
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
                    arr = res;
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
                url: '/japi/post/list?aid=' + newsid,
                success: function(res) {
                    list_container_left.empty();
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
                    $('.del_success').show();
                    setTimeout(function() {
                        $('.del_success').hide();
                    }, 1500);
                }
            });
        }
        // 推送新闻
        table_comment_tbody.on('click', '.people_push', function() {
            var aid = $(this).parents('tr').find('.newsid').html();
            // console.log(aid);
            push_sure.show();
            push_sure.find('p span').html(aid);
            surePush(aid, 'news');
        });

        // 推送视频
        table_video_tbody.on('click', '.people_push', function() {
            var vid = $(this).parents('tr').find('.videoid').html();
            // console.log(vid);
            push_sure.show();
            push_sure.find('p span').html(vid);
            // if ($('.push_video_title').val() && !$('.push_video_desc').val()) {
            //     surePush(vid, 'video', $('.push_video_title').val());
            // } else if ($('.push_video_title').val() && $('.push_video_desc').val()) {
            //     surePush(vid, 'video', $('.push_video_title').val(), $('.push_video_desc').val());
            // } else {
            //     surePush(vid, 'video');
            // }
            surePush(vid, 'video');
        });

        // 点击确认推送
        function surePush(aid, pushtype) {
            console.log(aid, pushtype);
            sure_push.click(function() {
                if (c) {
                    c = false;
                    if (pushtype == 'news') {
                        os.each(function(idx, ele) {
                            if (this.checked && $(this).val() == 'android') {
                                if ($('.push_news_title').val() && !$('.push_news_desc').val()) {
                                    pushNews(aid, 'news', 'android', $('.push_news_title').val());
                                } else if ($('.push_news_title').val() && $('.push_news_desc').val()) {
                                    pushNews(aid, 'news', 'android', $('.push_news_title').val(), $('.push_news_desc').val());
                                } else {
                                    pushNews(aid, 'news', 'android');
                                }
                                // pushNews(aid, pushtype, 'android', title, desc);
                            } else if (this.checked && $(this).val() == 'ios') {
                                // console.log(aid,pushtype);
                                // pushNews(aid, pushtype, 'ios', title, desc);
                                if ($('.push_news_title').val() && !$('.push_news_desc').val()) {
                                    pushNews(aid, 'news', 'ios', $('.push_news_title').val());
                                } else if ($('.push_news_title').val() && $('.push_news_desc').val()) {
                                    pushNews(aid, 'news', 'ios', $('.push_news_title').val(), $('.push_news_desc').val());
                                } else {
                                    pushNews(aid, 'news', 'ios');
                                }
                            }
                        });
                    } else {
                        os.each(function(idx, ele) {
                            if (this.checked && $(this).val() == 'android') {
                                if ($('.push_video_title').val() && !$('.push_video_desc').val()) {
                                    pushNews(aid, 'video', 'android', $('.push_video_title').val());
                                } else if ($('.push_video_title').val() && $('.push_video_desc').val()) {
                                    pushNews(aid, 'video', 'android', $('.push_video_title').val(), $('.push_video_desc').val());
                                } else {
                                    pushNews(aid, 'video', 'android');
                                }
                                // pushNews(aid, pushtype, 'android', title, desc);
                            } else if (this.checked && $(this).val() == 'ios') {
                                // console.log(aid,pushtype);
                                // pushNews(aid, pushtype, 'ios', title, desc);
                                if ($('.push_video_title').val() && !$('.push_video_desc').val()) {
                                    pushNews(aid, 'video', 'ios', $('.push_video_title').val());
                                } else if ($('.push_video_title').val() && $('.push_video_desc').val()) {
                                    pushNews(aid, 'video', 'ios', $('.push_video_title').val(), $('.push_video_desc').val());
                                } else {
                                    pushNews(aid, 'video', 'ios');
                                }
                            }
                        });
                    }
                }
            });


        }

        // 人工推送
        function pushNews(aid, pushtype, type, title, desc) {
            console.log(aid, pushtype, type, title, desc);
            var url_ = server_host + '/people_push?aid=' + aid + '&type=' + type + '&pushtype=' + pushtype;
            if (title) {
                url_ += '&title=' + title;
            }
            if (desc) {
                url_ += '&body=' + desc;
            }
            console.log(url_);
            $.ajax({
                url: url_,
                async: 'false',
                cache: false,
                beforeSend: function() {
                    $('.loading').show();
                    $('.success_push').hide();
                },
                success: function(res) {
                    console.log(c);
                    $('.loading').hide();
                    $('.success_push').show();
                    $('.os').removeAttr("checked");
                    setTimeout(function() {
                        $('.push_sure').hide();
                        $('.success_push').hide();
                        window.location.reload();
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
        // 点击修改新闻分类
        c_news_sure.click(function() {
            console.log(c_news_category.find('option:selected').attr('data-id'));
            $.ajax({
                url: '/news/fixCID?aid=' + c_news_id.val() + '&cid=' + c_news_category.find('option:selected').attr('data-id'),
                success: function(res) {
                    console.log(res);
                    $('.share_success').show();
                    setTimeout(function() {
                        getNews(20, 0);
                        news_li.removeClass('active');
                        news_li[1].className = 'active';
                        $('.share_success').hide();
                        reply_comment.hide();
                    }, 2000);
                }
            });

        });

        ;!function(){
            // 初始化新闻分类
            var $news_category = $('#news_category');
            $.ajax({
                url: '/api/v1/news/category',
                success: function(res){
                    if(res.success){
                        for(var i=0; i<res.data.length; i++){
                            var option = $('<option/>').attr('value', res.data[i].cid).html(res.data[i].channel);
                            $news_category.append(option);
                        }
                    }
                }
            });

            $('.distinct').on("click", function(){
                var id = $(this).attr('data-id');
                console.log(id);
                var con = window.confirm('去重后，这条新闻不会再出现');
                console.log(con);
                if(con){
                    $.ajax({
                        url: '/api/v1/news/edit_status',
                        data: {aid: id},
                        success: function(res){
                            if(res.success){
                                alert('去重成功');
                                location.reload();
                            }
                        }
                    });
                }
            })
        }();
    }
    exports.newsAndVideo = newsAndVideo;
});
