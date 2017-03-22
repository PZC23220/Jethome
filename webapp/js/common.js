;
var c = true;
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
    var c_news_id = $('.c_news_id');
    var c_news_title = $('.c_news_title');
    var c_news_category = $('.c_news_category');
    var c_news_sure = $('.c_news_sure');
    var headline_optimize = $('.headline_optimize');
    var table_headlineOptimize = $('.table_headlineOptimize');
    var optimize_cid = $('.optimize_cid');
    var channel = $('.channel');
    var plus_weight = $('.plus_weight');
    var minus_weight = $('.minus_weight');
    var plus_init = $('.plus_init');
    var update_optimize = $('.update_optimize');
    var table_headlineOptimize_tbody = table_headlineOptimize.find('tbody');
    var category = $('.category');
    var reply_comment2 = $('.reply_comment2');
    var reply_comment3 = $('.reply_comment3');
    var c_position = $('.c_position');
    var c_status = $('.c_status');
    var close5 = $('.close5');
    var add_category_sure = $('.add_category_sure');
    var close6 = $('.close6');
    var add_category = $('.add_category');
    var category_cid = $('.category_cid');
    var category_channel = $('.category_channel');
    var category_position = $('.category_position');
    var category_status = $('.category_status');
    var category_plus_weight = $('.category_plus_weight');
    var category_minus_weight = $('.category_minus_weight');
    var category_plus_init = $('.category_plus_init');
    var update_status = $('.update_status');
    var category_icon = $('.category_icon');
    var related_news = $('.related_news');
    var table_relatedNews = $('.table_relatedNews');
    var table_matchList = $('.table_matchList');
    var match_list = $('.match_list');
    var table_matchList_tbody = table_matchList.find('tbody');
    var close_news = $('.close_news');
    var race_date = $('.race_date');
    var match_id = $('.match_id');
    var reply_comment4 = $('.reply_comment4');
    var reply_comment5 = $('.reply_comment5');
    var close7 = $('.close7');
    var close8 = $('.close8');
    var table_relatedNews_tbody = table_relatedNews.find('tbody');
    var current_selection_match = $('.current_selection_match');
    var table_user_answer = $('.table_user_answer').find('tbody');
    var add_related_news = $('.add_related_news');
    var reply_comment6 = $('.reply_comment6');
    var close9 = $('.close9');
    var submit_wbc_comment = $('.submit_wbc_comment');
    var wbc_user_id = $('.wbc_user_id');
    var wbc_comment_content = $('.wbc_comment_content');
    var wbc_comment_likes = $('.wbc_comment_likes');
    var submit_wbc_comment = $('.submit_wbc_comment');
    var wbc_player = $('.wbc_player');
    var wbc_comment_id = $('.wbc_comment_id');
    var special_configuration = $('.special_configuration');
    var table_special_configuration = $('.table_special_configuration tbody');
    var table_special_relatedNews = $('.table_special_relatedNews tbody');
    var special_create = $('.special_create');
    var table_tab_configuration = $('.table_tab_configuration tbody');
    var tab_configuration = $('.tab_configuration');

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
            case 8:
                headline_optimize.show();
                break;
            case 9:
                match_list.show();
                break;
            case 10:
                special_configuration.show();
                break;
            case 11:
                tab_configuration.show();
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
                        switch (list.category_id) {
                            case 'all':
                                var td9 = $('<td class="c_id"><a href="#">' + list.category_id + '</a></td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                                break;
                            case 'top':
                                var td9 = $('<td class="c_id"><a href="#">トップ</a></td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                                break;
                            case 'ent':
                                var td9 = $('<td class="c_id"><a href="#">エンタメ</a></td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                                break;
                            case 'spo':
                                var td9 = $('<td class="c_id"><a href="#">スポーツ</a></td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                                break;
                            case 'cn':
                                var td9 = $('<td class="c_id"><a href="#">中国</a></td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                                break;
                            case 'kr':
                                var td9 = $('<td class="c_id"><a href="#">韓国</a></td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                                break;
                            case 'base':
                                var td9 = $('<td class="c_id"><a href="#">野球</a></td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                                break;
                            case 'int':
                                var td9 = $('<td class="c_id"><a href="#">国際</a></td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                                break;
                            case 'pol':
                                var td9 = $('<td class="c_id"><a href="#">政治</a></td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                                break;
                            case 'bus':
                                var td9 = $('<td class="c_id"><a href="#">経済</a></td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                                break;
                            case 'tech':
                                var td9 = $('<td class="c_id"><a href="#">テクノロジー</a></td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                                break;
                            case 'socc':
                                var td9 = $('<td class="c_id"><a href="#">サッカー</a></td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                                break;
                            case 'soci':
                                var td9 = $('<td class="c_id"><a href="#">社会</a></td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                                break;
                            case 'girl':
                                var td9 = $('<td class="c_id"><a href="#">女性</a></td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                                break;
                            case 'tra':
                                var td9 = $('<td class="c_id"><a href="#">旅行</a></td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                                break;
                            case 'cnet':
                                var td9 = $('<td class="c_id"><a href="#">チャイナネット</a></td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                                break;
                            case 'video':
                                var td9 = $('<td class="c_id"><a href="#">動画</a></td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                                break;
                            case 'pic':
                                var td9 = $('<td class="c_id"><a href="#">写真</a></td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                                break;
                            case 'anime':
                                var td9 = $('<td class="c_id"><a href="#">アニメ</a></td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                                break;
                            case 'game':
                                var td9 = $('<td class="c_id"><a href="#">ゲーム</a></td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                                break;
                            case 'food':
                                var td9 = $('<td class="c_id"><a href="#">グルメ</a></td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                                break;
                            case 'cul':
                                var td9 = $('<td class="c_id"><a href="#">文化</a></td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                                break;
                            case 'wea':
                                var td9 = $('<td class="c_id"><a href="#">災害</a></td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                                break;
                            default:
                                var td9 = $('<td class="c_id"><a href="#">' + list.category_id + '</a></td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                                break;

                        }
                        tr.appendTo(table_comment_tbody);
                    }
                }
            });

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
            // table_video_tbody.find('tr').hide().filter(":contains(" + tit + ")").show();
            $.ajax({
                url: 'video_select?wt=json&fl=title,vid,commentCount,category_id:cid,desc&sort=score%20desc&q=title:' + tit + '&rows=100',
                success: function(res) {
                    console.log(res);
                    table_video_tbody.empty();
                    var lists = res.response.docs;
                    for (var i = 0; i < lists.length; i++) {
                        var list = lists[i];
                        var tr = $('<tr/>');
                        var td1 = $('<td/>').html(1).appendTo(tr);
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
                switch (list.category_id) {
                    case 'all':
                        var td9 = $('<td class="c_id"><a href="#">' + list.category_id + '</a></td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                        break;
                    case 'top':
                        var td9 = $('<td class="c_id"><a href="#">トップ</a></td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                        break;
                    case 'ent':
                        var td9 = $('<td class="c_id"><a href="#">エンタメ</a></td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                        break;
                    case 'spo':
                        var td9 = $('<td class="c_id"><a href="#">スポーツ</a></td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                        break;
                    case 'cn':
                        var td9 = $('<td class="c_id"><a href="#">中国</a></td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                        break;
                    case 'kr':
                        var td9 = $('<td class="c_id"><a href="#">韓国</a></td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                        break;
                    case 'base':
                        var td9 = $('<td class="c_id"><a href="#">野球</a></td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                        break;
                    case 'int':
                        var td9 = $('<td class="c_id"><a href="#">国際</a></td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                        break;
                    case 'pol':
                        var td9 = $('<td class="c_id"><a href="#">政治</a></td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                        break;
                    case 'bus':
                        var td9 = $('<td class="c_id"><a href="#">経済</a></td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                        break;
                    case 'tech':
                        var td9 = $('<td class="c_id"><a href="#">テクノロジー</a></td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                        break;
                    case 'socc':
                        var td9 = $('<td class="c_id"><a href="#">サッカー</a></td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                        break;
                    case 'soci':
                        var td9 = $('<td class="c_id"><a href="#">社会</a></td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                        break;
                    case 'girl':
                        var td9 = $('<td class="c_id"><a href="#">女性</a></td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                        break;
                    case 'tra':
                        var td9 = $('<td class="c_id"><a href="#">旅行</a></td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                        break;
                    case 'cnet':
                        var td9 = $('<td class="c_id"><a href="#">チャイナネット</a></td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                        break;
                    case 'video':
                        var td9 = $('<td class="c_id"><a href="#">動画</a></td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                        break;
                    case 'pic':
                        var td9 = $('<td class="c_id"><a href="#">写真</a></td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                        break;
                    case 'anime':
                        var td9 = $('<td class="c_id"><a href="#">アニメ</a></td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                        break;
                    case 'game':
                        var td9 = $('<td class="c_id"><a href="#">ゲーム</a></td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                        break;
                    case 'food':
                        var td9 = $('<td class="c_id"><a href="#">グルメ</a></td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                        break;
                    case 'cul':
                        var td9 = $('<td class="c_id"><a href="#">文化</a></td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                        break;
                    case 'wea':
                        var td9 = $('<td class="c_id"><a href="#">災害</a></td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                        break;
                    default:
                        var td9 = $('<td class="c_id"><a href="#">' + list.category_id + '</a></td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                        break;

                }
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

    news_title.blur(function() {
        if ($(this).val() == '') {
            window.location.reload();
        }
    });

    video_title.blur(function() {
        if ($(this).val() == '') {
            window.location.reload();
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

    // 点击修改新闻分类
    c_news_sure.click(function() {
        console.log(c_news_category.find('option:selected').attr('data-id'));
        $.ajax({
            url: 'news_fixCID?aid=' + c_news_id.val() + '&cid=' + c_news_category.find('option:selected').attr('data-id'),
            success: function(res) {
                console.log(res);
                share_success.show();
                setTimeout(function() {
                    getNews(20, 0);
                    news_li.removeClass('active');
                    news_li[1].className = 'active';
                    share_success.hide();
                    reply_comment.hide();
                }, 2000);
            }
        });

    });

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
            switch (list[i].category_id) {
                case 'all':
                    var td9 = $('<td class="c_id"><a href="#">' + list[i].category_id + '</a></td>').attr({ 'data-id': list[i].id, 'data-cid': list[i].category_id }).appendTo(tr);
                    break;
                case 'top':
                    var td9 = $('<td class="c_id"><a href="#">トップ</a></td>').attr({ 'data-id': list[i].id, 'data-cid': list[i].category_id }).appendTo(tr);
                    break;
                case 'ent':
                    var td9 = $('<td class="c_id"><a href="#">エンタメ</a></td>').attr({ 'data-id': list[i].id, 'data-cid': list[i].category_id }).appendTo(tr);
                    break;
                case 'spo':
                    var td9 = $('<td class="c_id"><a href="#">スポーツ</a></td>').attr({ 'data-id': list[i].id, 'data-cid': list[i].category_id }).appendTo(tr);
                    break;
                case 'cn':
                    var td9 = $('<td class="c_id"><a href="#">中国</a></td>').attr({ 'data-id': list[i].id, 'data-cid': list[i].category_id }).appendTo(tr);
                    break;
                case 'kr':
                    var td9 = $('<td class="c_id"><a href="#">韓国</a></td>').attr({ 'data-id': list[i].id, 'data-cid': list[i].category_id }).appendTo(tr);
                    break;
                case 'base':
                    var td9 = $('<td class="c_id"><a href="#">野球</a></td>').attr({ 'data-id': list[i].id, 'data-cid': list[i].category_id }).appendTo(tr);
                    break;
                case 'int':
                    var td9 = $('<td class="c_id"><a href="#">国際</a></td>').attr({ 'data-id': list[i].id, 'data-cid': list[i].category_id }).appendTo(tr);
                    break;
                case 'pol':
                    var td9 = $('<td class="c_id"><a href="#">政治</a></td>').attr({ 'data-id': list[i].id, 'data-cid': list[i].category_id }).appendTo(tr);
                    break;
                case 'bus':
                    var td9 = $('<td class="c_id"><a href="#">経済</a></td>').attr({ 'data-id': list[i].id, 'data-cid': list[i].category_id }).appendTo(tr);
                    break;
                case 'tech':
                    var td9 = $('<td class="c_id"><a href="#">テクノロジー</a></td>').attr({ 'data-id': list[i].id, 'data-cid': list[i].category_id }).appendTo(tr);
                    break;
                case 'socc':
                    var td9 = $('<td class="c_id"><a href="#">サッカー</a></td>').attr({ 'data-id': list[i].id, 'data-cid': list[i].category_id }).appendTo(tr);
                    break;
                case 'soci':
                    var td9 = $('<td class="c_id"><a href="#">社会</a></td>').attr({ 'data-id': list[i].id, 'data-cid': list[i].category_id }).appendTo(tr);
                    break;
                case 'girl':
                    var td9 = $('<td class="c_id"><a href="#">女性</a></td>').attr({ 'data-id': list[i].id, 'data-cid': list[i].category_id }).appendTo(tr);
                    break;
                case 'tra':
                    var td9 = $('<td class="c_id"><a href="#">旅行</a></td>').attr({ 'data-id': list[i].id, 'data-cid': list[i].category_id }).appendTo(tr);
                    break;
                case 'cnet':
                    var td9 = $('<td class="c_id"><a href="#">チャイナネット</a></td>').attr({ 'data-id': list[i].id, 'data-cid': list[i].category_id }).appendTo(tr);
                    break;
                case 'video':
                    var td9 = $('<td class="c_id"><a href="#">動画</a></td>').attr({ 'data-id': list[i].id, 'data-cid': list[i].category_id }).appendTo(tr);
                    break;
                case 'pic':
                    var td9 = $('<td class="c_id"><a href="#">写真</a></td>').attr({ 'data-id': list[i].id, 'data-cid': list[i].category_id }).appendTo(tr);
                    break;
                case 'anime':
                    var td9 = $('<td class="c_id"><a href="#">アニメ</a></td>').attr({ 'data-id': list[i].id, 'data-cid': list[i].category_id }).appendTo(tr);
                    break;
                case 'game':
                    var td9 = $('<td class="c_id"><a href="#">ゲーム</a></td>').attr({ 'data-id': list[i].id, 'data-cid': list[i].category_id }).appendTo(tr);
                    break;
                case 'food':
                    var td9 = $('<td class="c_id"><a href="#">グルメ</a></td>').attr({ 'data-id': list[i].id, 'data-cid': list[i].category_id }).appendTo(tr);
                    break;
                case 'cul':
                    var td9 = $('<td class="c_id"><a href="#">文化</a></td>').attr({ 'data-id': list[i].id, 'data-cid': list[i].category_id }).appendTo(tr);
                    break;
                case 'wea':
                    var td9 = $('<td class="c_id"><a href="#">災害</a></td>').attr({ 'data-id': list[i].id, 'data-cid': list[i].category_id }).appendTo(tr);
                    break;
                default:
                    var td9 = $('<td class="c_id"><a href="#">' + list[i].category_id + '</a></td>').attr({ 'data-id': list[i].id, 'data-cid': list[i].category_id }).appendTo(tr);
                    break;

            }
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
                                pushNews(aid, 'news','android', $('.push_news_title').val());
                            } else if ($('.push_news_title').val() && $('.push_news_desc').val()) {
                                pushNews(aid, 'news','android', $('.push_news_title').val(), $('.push_news_desc').val());
                            } else {
                                pushNews(aid, 'news','android');
                            }
                            // pushNews(aid, pushtype, 'android', title, desc);
                        } else if (this.checked && $(this).val() == 'ios') {
                            // console.log(aid,pushtype);
                            // pushNews(aid, pushtype, 'ios', title, desc);
                            if ($('.push_news_title').val() && !$('.push_news_desc').val()) {
                                pushNews(aid, 'news','ios', $('.push_news_title').val());
                            } else if ($('.push_news_title').val() && $('.push_news_desc').val()) {
                                pushNews(aid, 'news','ios', $('.push_news_title').val(), $('.push_news_desc').val());
                            } else {
                                pushNews(aid, 'news','ios');
                            }
                        }
                    });
                } else {
                    os.each(function(idx, ele) {
                        if (this.checked && $(this).val() == 'android') {
                            if ($('.push_video_title').val() && !$('.push_video_desc').val()) {
                                pushNews(aid, 'video','android', $('.push_video_title').val());
                            } else if ($('.push_video_title').val() && $('.push_video_desc').val()) {
                                pushNews(aid, 'video','android', $('.push_video_title').val(), $('.push_video_desc').val());
                            } else {
                                pushNews(aid,'android', 'video');
                            }
                            // pushNews(aid, pushtype, 'android', title, desc);
                        } else if (this.checked && $(this).val() == 'ios') {
                            // console.log(aid,pushtype);
                            // pushNews(aid, pushtype, 'ios', title, desc);
                            if ($('.push_video_title').val() && !$('.push_video_desc').val()) {
                                pushNews(aid, 'video','ios', $('.push_video_title').val());
                            } else if ($('.push_video_title').val() && $('.push_video_desc').val()) {
                                pushNews(aid, 'video','ios', $('.push_video_title').val(), $('.push_video_desc').val());
                            } else {
                                pushNews(aid, 'video','ios');
                            }
                        }
                    });
                }
            }
        });


    }

    // 取消推送
    close2.click(function() {
        push_sure.hide();
        os.removeAttr("checked");
    });

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
        var td7 = $('<td/>').html(getTime(list.validityStart - (8 * 60 * 60 * 1000))).appendTo(tr);
        var td8 = $('<td/>').html(getTime(list.validityEnd - (8 * 60 * 60 * 1000))).appendTo(tr);

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
        var e_time = (new Date(end_time.val())).valueOf();
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
        start_time.val(new Date(info.validityStart - (8 * 60 * 60 * 1000)).Format("yyyy-MM-ddThh:mm:ss"));
        end_time.val(new Date(info.validityEnd - (8 * 60 * 60 * 1000)).Format("yyyy-MM-ddThh:mm:ss"));
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
        var td6 = $('<td/>').html(getTime(list.validityStart - (8 * 60 * 60 * 1000))).appendTo(tr);
        var td7 = $('<td/>').html(getTime(list.validityEnd - (8 * 60 * 60 * 1000))).appendTo(tr);
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
        appbtmbar_start_time.val(new Date(info.validityStart - (8 * 60 * 60 * 1000)).Format("yyyy-MM-ddThh:mm:ss"));
        appbtmbar_end_time.val(new Date(info.validityEnd - (8 * 60 * 60 * 1000)).Format("yyyy-MM-ddThh:mm:ss"));
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

    getNewsCategory();

    function getNewsCategory() {
        $.ajax({
            url: server_host + '/get_news_category',
            success: function(res) {
                table_headlineOptimize_tbody.empty();
                var list = JSON.parse(res);
                for (var i = 0; i < list.length; i++) {
                    createOptimize(list[i]);
                }
            }
        });

    }

    function createOptimize(list) {
        var tr = $('<tr/>');
        var td1 = $('<td/>').html(list.id).appendTo(tr);
        var td2 = $('<td/>').html(list.cid).appendTo(tr);
        var td3 = $('<td/>').html(list.channel).appendTo(tr);
        if (list.id == 1) {
            var td4 = $('<td/>').html(list.pos).appendTo(tr);
            var td5 = $('<td/>').html(list.status).appendTo(tr);
        } else {
            var td4 = $('<td/>').html('<a href="#">' + list.pos + '</a>').addClass('p_pos').attr('data-info', JSON.stringify(list)).appendTo(tr);
            var td5 = $('<td/>').html('<a href="#">' + list.status + '</a>').addClass('p_status').attr('data-info', JSON.stringify(list)).appendTo(tr);
        }
        var td6 = $('<td/>').html('<a href="#">' + list.plus_weight + '</a>').addClass('p_weight').attr('data-info', JSON.stringify(list)).appendTo(tr);
        var td7 = $('<td/>').html('<a href="#">' + list.minus_weight + '</a>').addClass('m_weight').attr('data-info', JSON.stringify(list)).appendTo(tr);
        var td8 = $('<td/>').html('<a href="#">' + list.plus_init + '</a>').addClass('p_init').attr('data-info', JSON.stringify(list)).appendTo(tr);
        tr.appendTo(table_headlineOptimize_tbody);

    }

    table_headlineOptimize_tbody.on('click', '.p_weight,.m_weight,.p_init', function() {
        var info = JSON.parse($(this).attr('data-info'));
        optimize_cid.val(info.cid);
        channel.val(info.channel);
        plus_weight.val(info.plus_weight);
        minus_weight.val(info.minus_weight);
        plus_init.val(info.plus_init);
        reply_comment.show();
    });

    table_headlineOptimize_tbody.on('click', '.p_pos,.p_status', function() {
        var info = JSON.parse($(this).attr('data-info'));
        optimize_cid.val(info.cid);
        channel.val(info.channel);
        c_position.val(info.pos);
        c_status.val(info.status);
        reply_comment2.show();
    });

    update_optimize.click(function() {
        var data = {
            cid: optimize_cid.val(),
            plus_weight: plus_weight.val(),
            minus_weight: minus_weight.val(),
            plus_init: plus_init.val()
        }
        $.ajax({
            url: server_host + '/set_news_category_weight',
            type: 'POST',
            data: JSON.stringify(data),
            success: function(res) {
                console.log(res);
                share_success.show();
                setTimeout(function() {
                    getNewsCategory();
                    share_success.hide();
                    reply_comment.hide();
                }, 2000);
            }
        });

    });

    update_status.click(function() {
        var data = {
            cid: optimize_cid.val(),
            pos: c_position.val(),
            status: c_status.val()
        }
        $.ajax({
            url: server_host + '/set_news_category_status',
            type: 'POST',
            data: JSON.stringify(data),
            success: function(res) {
                console.log(res);
                modify_success.show();
                setTimeout(function() {
                    getNewsCategory();
                    modify_success.hide();
                    reply_comment2.hide();
                }, 2000);
            }
        });

    });

    // 关闭页面
    close5.click(function() {
        reply_comment2.hide();
    });
    close6.click(function() {
        reply_comment3.hide();
        $('.content').empty();
        $('.choice1').empty();
        $('.choice2').empty();
        $('.choice3').empty();
    });

    // 添加栏目页面显示
    add_category.click(function() {
        reply_comment3.show();
    });

    //提交栏目添加
    add_category_sure.click(function() {
        var cid = category_cid.val();
        var channel = category_channel.val();
        var pos = category_position.val();
        var status = category_status.val();
        var icon = category_icon.val();
        var plus_weight = category_plus_weight.val();
        var minus_weight = category_minus_weight.val();
        var plus_init = category_plus_init.val();

        if (cid && channel && pos && status && icon && plus_weight && minus_weight && plus_init) {
            var data = {
                cid: cid,
                channel: channel,
                pos: pos,
                status: status,
                icon: icon,
                plus_weight: plus_weight,
                minus_weight: minus_weight,
                plus_init: plus_init
            }
            $.ajax({
                url: server_host + '/insert_news_category',
                type: 'POST',
                data: JSON.stringify(data),
                success: function(res) {
                    console.log(res);
                    del_success.show();
                    setTimeout(function() {
                        getNewsCategory();
                        del_success.hide();
                        reply_comment3.hide();
                    }, 2000);
                }
            });

        } else {
            tips_success.show();
            setTimeout(function() {
                tips_success.hide();
            }, 2000);
        }
    });

    baseball_matchlist();
    // 获取比赛列表
    function baseball_matchlist() {
        // var option1 = appbtmbar_active.find('option');
        for (var k = 6; k < 24; k++) {
            var option = $('<option/>').attr('data-time', '2017/3/' + k).html('3月' + k + "日");
            option.appendTo(race_date)
        }
        $.ajax({
            url: 'baseball_matchlist',
            success: function(res) {
                console.log(res);
                var list = res.data;
                for (var i = 0; i < list.length; i++) {
                    createMatchlist(list[i]);
                }
            }
        });

    }

    // 筛选比赛日期
    race_date.change(function() {
        if (race_date.val()) {
            var date = race_date.find('option:selected').attr('data-time');
            table_matchList_tbody.find('tr').hide().filter(":contains(" + date + ")").show();
        } else {
            table_matchList_tbody.find('tr').show();
        }
    });
    // 搜索比赛ID
    match_id.blur(function() {
        if (match_id.val()) {
            table_matchList_tbody.find('tr').hide();
            table_matchList_tbody.find('.m_id').filter(":contains(" + match_id.val() + ")").parents('tr').show();
        } else {
            table_matchList_tbody.find('tr').show();
        }
    });

    // 筛选答对数
    $('.correct_num').change(function() {
        if ($('.correct_num').val()) {
            table_user_answer.find('tr').hide();
            var date = $('.correct_num').find('option:selected').html();
            table_user_answer.find('.c_num').filter(":contains(" + $('.correct_num').val() + ")").parents('tr').show();
        } else {
            table_user_answer.find('tr').show();
        }
    });
    // 搜索用户ID
    $('.b_user_id').blur(function() {
        if ($('.b_user_id').val()) {
            table_user_answer.find('tr').hide();
            table_user_answer.find('.user_id').filter(":contains(" + $('.b_user_id').val() + ")").parents('tr').show();
        } else {
            table_user_answer.find('tr').show();
        }
    });

    function createMatchlist(list) {
        var tr = $('<tr/>');
        var td1 = $('<td/>').html('<a href="#">' + list.id + '</a>').addClass('m_id').attr('data-id', list.id).appendTo(tr);
        var td2 = $('<td/>').html(getTime(list.starttime + 60 * 60 * 1000)).appendTo(tr);
        var td3 = $('<td/>').html(list.detaildesc).appendTo(tr);
        var td4 = $('<td/>').html('<a href="#">' + list.teamonedesc + '</a>').addClass('team_one').attr({ 'data-info': JSON.stringify(list.teamOnePlayers), 'data-id': list.teamoneid }).appendTo(tr);
        var td5 = $('<td/>').html('<a href="#">' + list.teamtwodesc + '</a>').addClass('team_two').attr({ 'data-info': JSON.stringify(list.teamTwoPlayers), 'data-id': list.teamoneid }).appendTo(tr);
        if (list.status == 0) {
            var td11 = $('<td/>').html('未开始').appendTo(tr);
        } else if (list.status == 1) {
            var td11 = $('<td/>').html('进行中').appendTo(tr);
        } else {
            var td11 = $('<td/>').html('已结束').appendTo(tr);
        }

        var td7 = $('<td/>').html('<a href="#">查看</a>').addClass('a_question').attr('data-info', JSON.stringify(list)).appendTo(tr);
        var td8 = $('<td/>').html('<a href="#">筛选</a>').addClass('r_news').attr('data-info', JSON.stringify(list)).appendTo(tr);
        var td9 = $('<td/>').html('<a href="#">编辑</a>').addClass('t_answer').attr('data-info', JSON.stringify(list)).appendTo(tr);
        var td10 = $('<td/>').html('<a href="#">查看</a>').addClass('u_answer').attr('data-info', JSON.stringify(list)).appendTo(tr);
        var td11 = $('<td/>').html('<a href="#">推送</a>').addClass('baseball_push').attr('data-id', list.id).appendTo(tr);
        tr.appendTo(table_matchList_tbody);
    }
    close7.click(function() {
        reply_comment4.hide();
        $('.content').empty();
        $('.choice1').empty();
        $('.choice2').empty();
        $('.choice3').empty();
    });
    close8.click(function() {
        reply_comment5.hide();
    });
    close_news.click(function() {
        reply_comment.hide();
    });

    // 推送棒球比赛
    table_matchList_tbody.on('click', '.baseball_push', function() {
        $('.match_push_id').html($(this).attr('data-id'));
        push_sure.show();
    });

    // 确认推送
    $('.sure_push_baseball').click(function() {
        if (c) {
            c = false;
            if ($('.push_match_title').val() && !$('.push_match_desc').val()) {
                pushBaseball(5, $('.match_push_id').html(), $('.push_match_title').val());
            } else if ($('.push_match_title').val() && $('.push_match_desc').val()) {
                pushBaseball(6, $('.match_push_id').html(), $('.push_match_title').val(), $('.push_match_desc').val());
            }
        }


    });

    function pushBaseball(pushContentType, pushTargetId, title, desc) {
        var url_ = server_host + '/notification_baseball?pushContentType=' + pushContentType + '&pushTargetId=' + pushTargetId + '&title=' + title;
        if (desc) {
            url_ += '&body=' + desc;
        }
        console.log(url_)
        $.ajax({
            url: url_,
            beforeSend: function() {
                loading.show();
            },
            success: function(res) {
                console.log(res);
                loading.hide();
                success_push.show();
                os.removeAttr("checked");
                setTimeout(function() {
                    success_push.hide();
                    push_sure.hide();
                    window.location.reload();
                }, 2000);
                c = true;
            }
        });
    }

    // 查看比赛相关新闻
    table_matchList_tbody.on('click', '.r_news', function() {
        reply_comment.show();
        var info = JSON.parse($(this).attr('data-info'));
        add_related_news.attr('data-info', $(this).attr('data-info'));
        console.log(info);
        current_selection_match.val(getTime(info.starttime + 60 * 60 * 1000) + '  ' + info.teamonedesc + '-' + info.teamtwodesc);
        if (info.newsids) {
            table_relatedNews_tbody.empty();
            var newsid = JSON.parse(info.newsids);
            console.log(newsid);
            if (newsid.newsid) {
                get_news(newsid.newsid, $(this).attr('data-info'), newsid.top, newsid.hidden);
            }
            if (newsid.videoid) {
                get_videos(newsid.videoid, $(this).attr('data-info'), newsid.top, newsid.hidden);
            }
        }

    });
    table_matchList_tbody.on('click', '.a_prize', function() {
        reply_comment2.show();
    });
    // 获取已有问题
    table_matchList_tbody.on('click', '.a_question', function() {
        var matchJson = JSON.parse($(this).attr('data-info'));
        $(reply_comment3).attr("matchID", matchJson.id);
        $(reply_comment3).find('.addQuestionsButton').attr('data-info', JSON.stringify(matchJson));
        console.log("match id = " + matchJson.id);
        reply_comment3.show();
        $.ajax({
            url: 'baseball_lottery?targettype=1&targetid=' + matchJson.id,
            // async: false,
            success: function(res) {
                console.log(res);
                if (res.status == 200 && res.data) {
                    $(".offline").attr("data-info", JSON.stringify(res.data));
                    console.log("question = " + res.data.question);
                    $(reply_comment3).attr('data-info', JSON.parse(res.data.id));
                    $(reply_comment3).attr('lottery-id', JSON.parse(res.data.id));
                    var questions = JSON.parse(res.data.question);
                    for (var i = 0; i < 5; i++) {
                        if (!questions[i]) {
                            break;
                        }
                        console.log(questions[i].question);
                        console.log((questions[i].option[0].split(":"))[1]);
                        $(reply_comment3).find('.question').eq(i).find('.content').val(questions[i].question);
                        if (questions[i].option[0]) {
                            $(reply_comment3).find('.question').eq(i).find('.choice1').val((questions[i].option[0].split(":"))[1]);
                        }
                        if (questions[i].option[1]) {
                            $(reply_comment3).find('.question').eq(i).find('.choice2').val((questions[i].option[1].split(":"))[1]);
                        }
                        if (questions[i].option[2]) {
                            $(reply_comment3).find('.question').eq(i).find('.choice3').val((questions[i].option[2].split(":"))[1]);
                        }
                    }
                    var jsonarr = eval('(' + res.data.award + ')');
                    console.log(jsonarr);
                    $(reply_comment3).find('div#awardContainer .award1').val(jsonarr[0].award);
                    $(reply_comment3).find('div#awardContainer .award2').val(jsonarr[1].award);
                    $(reply_comment3).find('div#awardContainer .award3').val(jsonarr[2].award);
                } else {
                    $(reply_comment3).removeAttr('lottery-id');
                    $(reply_comment3).find('.question').find('.content').val("");
                    $(reply_comment3).find('.question').find('.choice1').val("");
                    $(reply_comment3).find('.question').find('.choice2').val("");
                    $(reply_comment3).find('.question').find('.choice3').val("");
                }
            }
        });
    });
    // 设置正确选项
    table_matchList_tbody.on('click', '.t_answer', function() {
        $.ajax({
            url: 'baseball_lottery?targettype=1&targetid=' + JSON.parse($(this).attr("data-info")).id,
            async: false,
            success: function(res) {
                console.log("res = " + JSON.stringify(res));
                if (res.status == 200) {
                    $(".submitAnswer").attr("data-info", JSON.stringify(res.data));
                    console.log("question = " + res.data.question);
                    $(reply_comment3).attr('data-info', JSON.parse(res.data.id));
                    $(reply_comment3).attr('lottery-id', JSON.parse(res.data.id));
                    var questions = JSON.parse(res.data.question);
                    for (var i = 0; i < 5; i++) {
                        if (!questions[i]) {
                            break;
                        }
                        console.log(questions[i].question);
                        $(reply_comment4).find('.q_content').eq(i).find('.content').val(questions[i].question);
                        $(reply_comment4).find('.q_content').eq(i).find('.choice1').val(questions[i].option[0]);
                        $(reply_comment4).find('.q_content').eq(i).find('.choice2').val(questions[i].option[1]);
                        $(reply_comment4).find('.q_content').eq(i).find('.choice3').val(questions[i].option[2]);
                    }
                    var jsonarr = eval('(' + res.data.award + ')');
                    console.log(jsonarr);
                    $(reply_comment4).find('div#awardContainer .award1').val(jsonarr[0].award);
                    $(reply_comment4).find('div#awardContainer .award2').val(jsonarr[1].award);
                    $(reply_comment4).find('div#awardContainer .award3').val(jsonarr[2].award);
                    console.log(res.data.answer);
                    var answerArr = res.data.answer.split(",");
                    for (var i = 0; i < answerArr.length; i++) {
                        $("input[name='q" + (answerArr[i].split(':')[0]) + "']").eq(answerArr[i].split(':')[1] - 1).attr("checked", true);
                    }
                } else {
                    $(reply_comment4).removeAttr('lottery-id');
                    $(reply_comment4).find('.q_content').find('.content').val("");
                    $(reply_comment4).find('.q_content').find('.choice1').val("");
                    $(reply_comment4).find('.q_content').find('.choice2').val("");
                    $(reply_comment4).find('.q_content').find('.choice3').val("");
                }
            }
        });
        reply_comment4.show();
    });


    function createUserAnswers(item) {
        var tr = $('<tr/>');
        var td1 = $('<td/>').html(item.id).addClass('n_id').appendTo(tr);
        var td2 = $('<td/>').html(getTime(item.updatetime)).appendTo(tr);
        var td3 = $('<td/>').html(item.uid).addClass('user_id').appendTo(tr);
        var td4 = $('<td/>').html(item.answer).appendTo(tr);
        var td5 = $('<td/>').html(item.correctnum).addClass('c_num').appendTo(tr);
        var td6 = $('<td/>').html(item.wrongnum).appendTo(tr);
        var td7 = $('<td/>').addClass('set_arward').attr('data-info', JSON.stringify(item))
        if (item.award) {
            if (item.award == 1) {
                td7.html('<span>一等奖</span>    <a href="#" class="two_prize">二等奖</a>    <a href="#" class="three_prize">三等奖</a>');
            } else if (item.award == 2) {
                td7.html('<a href="#" class="first_prize">一等奖</a>    <span>二等奖</span>    <a href="#" class="three_prize">三等奖</a>');
            } else {
                td7.html('<a href="#" class="first_prize">一等奖</a>    <a href="#" class="two_prize">二等奖</a>    <span>三等奖</span>');
            }
        } else {
            td7.html('<a href="#" class="first_prize">一等奖</a>    <a href="#" class="two_prize">二等奖</a>    <a href="#" class="three_prize">三等奖</a>');
        }
        td7.appendTo(tr);
        tr.appendTo(table_user_answer);
    }

    // 设置奖项
    table_user_answer.on('click', '.first_prize', function() {
        lotterycommitaward($(this).parents('td').attr('data-info'), 1);
    });
    table_user_answer.on('click', '.two_prize', function() {
        lotterycommitaward($(this).parents('td').attr('data-info'), 2);
    });
    table_user_answer.on('click', '.three_prize', function() {
        lotterycommitaward($(this).parents('td').attr('data-info'), 3);
    });
    // 添加获奖用户
    $('.set_award_user').click(function() {
        var info = JSON.parse($(this).attr('data-info'));
        console.log(info);
        var data = {
            "uid": $('.set_award_user_id').find('option:selected').attr('data-userinfo'), //必填项
            "did": "abc-abc", //必填项
            "lotteryid": info.lotteryid, //必填项
            "targetid": info.targetid, //必填项
            "targettype": 1, //必填项
            "answer": "1:1", //必填项
        }
        console.log(data);
        $.ajax({
            url: 'baseball_lotterycommit',
            type: 'POST',
            data: JSON.stringify(data),
            success: function(res) {
                console.log(res);
                modify_success.show();
                getuseranswerlist(info.targetid)
                setTimeout(function() {
                    modify_success.hide();
                }, 2000);
            }
        });

    });

    function lotterycommitaward(info, num) {
        var data = JSON.parse(info);
        $.ajax({
            url: 'baseball_lotterycommitaward?uid=' + data.uid + '&targettype=1&targetid=' + data.targetid + '&lotteryid=' + data.lotteryid + '&award=' + num,
            success: function(res) {
                console.log(res);
                share_success.show();
                getuseranswerlist(data.targetid)
                setTimeout(function() {
                    share_success.hide();
                }, 2000);
            }
        });
    }

    // 获取用户答案列表
    table_matchList_tbody.on('click', '.u_answer', function() {
        var info = JSON.parse($(this).attr('data-info'));
        console.log(info);
        current_selection_match.val(getTime(info.starttime + 60 * 60 * 1000) + '  ' + info.teamonedesc + '-' + info.teamtwodesc);
        reply_comment5.show();
        getuseranswerlist(JSON.parse($(this).attr("data-info")).id);
    });

    function getuseranswerlist(id) {
        table_user_answer.empty();
        $.ajax({
            url: "baseball_lotteryanswer?targettype=1&targetid=" + id,
            success: function(res) {
                console.log(res);
                $('.set_award_user').attr('data-info', JSON.stringify((res.data)[0]));
                for (var j = 0; j < arr10.length; j++) {
                    $('<option/>').val(arr10[j].nickname).html(arr10[j].nickname).attr('data-userinfo', arr10[j].id).appendTo($('.set_award_user_id'));
                }
                if (res.status == 200) {
                    for (var i = 0; i < res.data.length; i++) {
                        // console.log((res.data)[i]);
                        createUserAnswers((res.data)[i]);
                    }
                }
            }
        });
    }
    // 获取新闻及视频
    function get_news(ids, info, top, hidden) {
        $.ajax({
            url: 'news_get?ids=' + ids,
            success: function(res) {
                var list = res.data;

                for (var i in list) {
                    createnewslist(list[i], 'news', info, top, hidden);
                }
            }
        });

    }

    function get_videos(ids, info, top, hidden) {
        $.ajax({
            url: 'video_get?ids=' + ids,
            success: function(res) {
                var list = res.data;
                console.log(list);
                add_related_news.attr('data-info', info);
                for (var i in list) {
                    createnewslist(list[i], 'video', info, top, hidden);
                }
            }
        });

    }

    function createnewslist(list, type, info, top, hidden) {
        var tr = $('<tr/>');
        var td1 = $('<td/>').html(list.id).addClass('n_id').appendTo(tr);
        if (type == "news") {
            var td2 = $('<td/>').html('新闻').appendTo(tr);
        } else {
            var td2 = $('<td/>').html('视频').appendTo(tr);
        }
        var td3 = $('<td/>').html(list.title).appendTo(tr);
        // var td6 = $('<td/>').html('<a href="#" data-id="' + list.id + '">置顶</a>').addClass('news_top').attr('data-info', info).appendTo(tr);
        if (list.id == top) {
            var td6 = $('<td/>').html('<span>置顶</span>').appendTo(tr);
        } else {
            var td6 = $('<td/>').html('<a href="#" data-id="' + list.id + '">置顶</a>').addClass('news_top').attr('data-info', info).appendTo(tr);
        }
        if (list.id == hidden) {
            var td7 = $('<td/>').html('<span>隐藏</span>').appendTo(tr);
        } else {
            var td7 = $('<td/>').html('<a href="#" data-id="' + list.id + '">隐藏</a>').addClass('news_hidden').attr('data-info', info).appendTo(tr);
        }
        tr.appendTo(table_relatedNews_tbody);

    }

    // 添加新闻
    add_related_news.click(function() {
        var related_news_id = $('.related_news_id').val();
        var related_video_id = $('.related_video_id').val();
        var data = JSON.parse($(this).attr('data-info'));
        var newsids = JSON.parse(data.newsids);
        if (related_news_id) {
            newsids.newsid.push(related_news_id);
        }
        if (related_video_id) {
            newsids.videoid.push(related_video_id);
        }
        if ($('.set_top').is(':checked')) {
            var arr = [];
            if (related_news_id) {
                arr.push(related_news_id);
            } else if (related_video_id) {
                arr.push(related_video_id);
            }
            newsids.top = arr;
        }
        data.newsids = JSON.stringify(newsids);
        console.log(data);
        $.ajax({
            url: 'baseball_matchUpdateDetail',
            type: 'POST',
            data: JSON.stringify(data),
            success: function(res) {
                console.log(res);
                add_related_news.attr('data-info', JSON.stringify(data));
                $('.related_news_id').val('');
                $('.related_video_id').val('');
                $('.set_top').attr('checked', false);
                share_success.show();
                table_relatedNews_tbody.empty();
                if (newsids.newsid) {
                    get_news(newsids.newsid, JSON.stringify(data), arr);
                }
                if (newsids.videoid) {
                    get_videos(newsid.videoid, JSON.stringify(data), arr);
                }
                setTimeout(function() {
                    share_success.hide();
                }, 2000);

            }
        });
    });
    // 置顶新闻
    table_relatedNews_tbody.on('click', '.news_top', function() {
        var data = JSON.parse($(this).attr('data-info'));
        var newsids = JSON.parse(data.newsids);
        var arr = [];
        arr.push($(this).find('a').attr('data-id'));
        newsids.top = arr;
        data.newsids = JSON.stringify(newsids);
        console.log(data);
        $.ajax({
            url: 'baseball_matchUpdateDetail',
            type: 'POST',
            data: JSON.stringify(data),
            success: function(res) {
                console.log(res);
                modify_success.show();
                table_relatedNews_tbody.empty();
                if (newsids.newsid) {
                    get_news(newsids.newsid, JSON.stringify(data), arr, newsids.hidden);
                }
                if (newsids.videoid) {
                    get_videos(newsid.videoid, JSON.stringify(data), arr, newsids.hidden);
                }
                setTimeout(function() {
                    modify_success.hide();
                }, 2000);
            }
        });

    });

    // 隐藏新闻
    table_relatedNews_tbody.on('click', '.news_hidden', function() {
        var data = JSON.parse($(this).attr('data-info'));
        var newsids = JSON.parse(data.newsids);
        var arr = [];
        arr.push($(this).find('a').attr('data-id'));
        newsids.hidden = arr;
        data.newsids = JSON.stringify(newsids);
        console.log(data);
        $.ajax({
            url: 'baseball_matchUpdateDetail',
            type: 'POST',
            data: JSON.stringify(data),
            success: function(res) {
                console.log(res);
                del_success.show();
                table_relatedNews_tbody.empty();
                if (newsids.newsid) {
                    get_news(newsids.newsid, JSON.stringify(data), newsids.top, hidden);
                }
                if (newsids.videoid) {
                    get_videos(newsid.videoid, JSON.stringify(data), newsids.top, hidden);
                }
                setTimeout(function() {
                    del_success.hide();
                }, 2000);
            }
        });

    });
    // 提交正确答案
    $('.submitAnswer').click(function() {
        var postData = JSON.parse($(this).attr("data-info"));
        var answers = [];
        for (var i = 1; i <= 5; i++) {
            $("input[name='q" + i + "']").each(function(index) {
                console.log(index);
                console.log(this.checked);
                if (this.checked == true) {
                    answers.push(i + ":" + (index + 1));
                    console.log(answers);
                }
            });
        }
        postData.answer = answers.toString();
        console.log("post data = " + JSON.stringify(postData));
        $.ajax({
            url: '/baseball_lotteryupdate?targettype=1&targetid=' + postData.targetid,
            type: 'POST',
            data: JSON.stringify(postData),
            success: function(res) {
                console.log(res);
                $.ajax({
                    url: "baseball_lotteryanswercheck?targettype=1&targetid=" + postData.targetid,
                    success: function(res) {
                        console.log(res);
                        del_success.show();
                        setTimeout(function() {
                            del_success.hide();
                        }, 2000);
                    }
                });
            }
        });
    });
    // 添加竞猜题目
    $('.addQuestionsButton').click(function() {
        var questionsJson = [];
        var questions = $("#lotteryContainer .question");
        console.log("questions#length = " + questions.length);
        var matchID = JSON.parse($(this).attr("data-info")).id;
        console.log("match id = " + matchID);
        questions.each(function(index) {
            var content = $(this).find(".content").val();
            if (content) {

                var choice1 = $(this).find(".choice1").val();
                var choice2 = $(this).find(".choice2").val();
                var choice3 = $(this).find(".choice3").val();
                var options = ["1:" + choice1];
                if (choice2 != "") {
                    options.push("2:" + choice2);
                }
                if (choice3 != "") {
                    options.push("3:" + choice3);
                }
                questionsJson.push({
                    "id": index + 1,
                    "question": content,
                    "option": options
                });
            }
        });
        console.log("question json = " + JSON.stringify(questionsJson));

        var award = [];
        var str = '<br>・';
        award.push({
            "id": 1,
            "award": $("#lotteryContainer .award1").val()
        });
        award.push({
            "id": 2,
            "award": $("#lotteryContainer .award2").val()
        });
        award.push({
            "id": 3,
            "award": $("#lotteryContainer .award3").val()
        });
        str += $("#lotteryContainer .award1").val() + '(1人様)<br>・' + $("#lotteryContainer .award2").val() + '(2人様)<br>・' + $("#lotteryContainer .award3").val() + '(3人様)';
        console.log("award = " + JSON.stringify(award));

        var postData = {};
        postData.targettype = 1;
        postData.targetid = matchID;
        postData.question = questionsJson;
        postData.active = 1;
        postData.award = award;
        postData.answer = "";
        postData.detaildesc = str;

        if (reply_comment3.attr("lottery-id")) {
            postData.id = reply_comment3.attr("lottery-id");
        }
        console.log("post data = " + JSON.stringify(postData));

        $.ajax({
            url: '/baseball_lotteryupdate',
            type: 'POST',
            data: JSON.stringify(postData),
            success: function(res) {
                console.log(res);
                share_success.show();
                setTimeout(function() {
                    share_success.hide();
                }, 2000);
            }
        });
    });

    // 竞猜下线
    $(".offline").click(function() {
        var postData = JSON.parse($(".offline").attr("data-info"));
        postData.active = 0;
        console.log(postData);
        $.ajax({
            url: '/baseball_lotteryupdate',
            type: 'POST',
            data: JSON.stringify(postData),
            success: function(res) {
                console.log(res);
                modify_success.show();
                setTimeout(function() {
                    // alert(1111);
                    modify_success.hide();
                }, 2000);
            }
        });
    });

    // 比赛评论
    table_matchList_tbody.on('click', '.m_id', function() {
        wbc_comment_id.html('  ' + $(this).siblings('.team_one').html() + '--' + $(this).siblings('.team_two').html());
        reply_comment6.show();
        wbc_player.attr('disabled', 'disabled');
        submit_wbc_comment.attr({ 'data-id': $(this).attr('data-id'), 'data-type': 1 });
    });

    // 球队球员评论
    table_matchList_tbody.on('click', '.team_one,.team_two', function() {
        wbc_comment_id.html('   ' + $(this).html());
        reply_comment6.show();
        wbc_player.removeAttr('disabled');
        wbc_player.empty();
        $('<option/>').html('').appendTo(wbc_player);
        var players = JSON.parse($(this).attr('data-info'));
        for (var i in players) {
            $('<option/>').html(players[i].name).attr('data-id', players[i].id).appendTo(wbc_player);
        }
        // baseball_team($(this).attr('data-id'));
        submit_wbc_comment.attr({ 'data-id': $(this).attr('data-id'), 'data-type': 2 });
    });

    // function baseball_team(id) {
    //     $.ajax({
    //         url: 'baseball_team?id=' + id,
    //         success: function(res) {
    //             console.log(res);
    //             for(var i=0;i<)
    //         }
    //     });

    // }

    // 提交评论
    submit_wbc_comment.click(function() {
        if (wbc_comment_content.val()) {
            if (wbc_player.find('option:selected').html() != '') {
                baseball_postsave(wbc_user_id.find('option:selected').attr('data-userinfo'), 3, wbc_player.find('option:selected').attr('data-id'), wbc_comment_content.val());
            } else {

                baseball_postsave(wbc_user_id.find('option:selected').attr('data-userinfo'), $(this).attr('data-type'), $(this).attr('data-id'), wbc_comment_content.val());
            }
            // console.log(wbc_comment_likes.val());
        } else {
            tips_success.show();
            setTimeout(function() {
                tips_success.hide();
            }, 2000);
        }

    });

    close9.click(function() {
        reply_comment6.hide();
    });


    function baseball_postsave(userInfo, targettype, targetid, content) {
        var data = {
            "uid": JSON.parse(userInfo).id, // 必填项.
            "did": "abcd", // 必填项.
            "nickname": JSON.parse(userInfo).nickname, // 必填项.
            "portrait": JSON.parse(userInfo).portrait, // 必填项. user portrait
            "targettype": targettype, // 必填项. 1:match;2:team;3:player
            "targetid": targetid, // 必填项. match id/team id/player id
            "content": content, // 必填项. post content
            "floor": 0, // 必填项. 当前版本填写0
            "reference": 0, // 必填项. 当前版本填写0
            // "likes": likes,
            "updatetime": new Date(), // 必填项. 当前创建的时间戳
            "active": 1 // 必填项. 1:active;
        }
        console.log(data);
        $.ajax({
            url: 'baseball_postsave',
            type: 'POST',
            data: JSON.stringify(data),
            success: function(res) {
                console.log(res);
                del_success.show();
                setTimeout(function() {
                    wbc_user_id.val('');
                    wbc_comment_content.val('');
                    del_success.hide();
                    reply_comment6.hide();
                }, 2000);
            }
        });

    }
    // 创建专题
    special_create.click(function() {
        $('.special_title').val('');
        $('.special_description').val('');
        $('.special_bg_img').val('');
        $('.special_keyword').val('');
        $('.exclude_words').val('');
        $('.special_start_time').val('');
        reply_comment.show();
        $('.special_publish').removeAttr('data-id');
    });
    // 配置专题
    table_special_configuration.on('click', '.special_config', function() {
        reply_comment.show();
        var info = JSON.parse($(this).attr('data-info'));
        $('.special_title').val(info.title);
        $('.special_subtitle').val(info.subtitle);
        $('.special_description').val(info.detail_desc);
        $('.special_bg_img').val(info.bg_img);
        $('.special_keyword').val(info.keyword_inclusion);
        $('.exclude_words').val(info.keyword_exclusion);
        $('.special_start_time').val(new Date(Date.parse(info.topic_time) - 8 * 60 * 60 * 1000).Format("yyyy-MM-ddThh:mm:ss"));
        $('.special_publish').attr('data-id', info.id);
        var option1 = $('.special_channel').find('option');
        option1.each(function(idx, ele) {
            if ($(this).attr('data-id') == info.cid) {
                $(this).attr('selected', true);
            }
        });
        var option2 = $('.special_position').find('option');
        option2.each(function(idx, ele) {
            if ($(this).html() == info.pos) {
                $(this).attr('selected', true);
            }
        });
        var option3 = $('.special_toplist').find('option');
        option3.each(function(idx, ele) {
            if ($(this).val() == info.is_toplist) {
                $(this).attr('selected', true);
            }
        });

    });

    // 点击修改/创建专题
    $('.special_publish').on('click', function() {
        if ($('.special_title').val() && $('.special_bg_img').val() && $('.special_start_time').val() && $('.special_keyword').val()) {

            var data = {
                title: $('.special_title').val(),
                // subtitle: $('.special_subtitle').val(),
                detail_desc: $('.special_description').val(),
                cid: $('.special_channel').find('option:selected').attr('data-id'),
                bg_img: $('.special_bg_img').val(),
                pos: $('.special_position').find('option:selected').html(),
                keyword_inclusion: $('.special_keyword').val(),
                keyword_exclusion: $('.exclude_words').val(),
                topic_time: new Date($('.special_start_time').val()).Format("yyyy/MM/dd hh:mm:ss"),
                is_toplist: $('.special_toplist').find('option:selected').val()
            }
            console.log(data.topic_time);
            if ($(this).attr('data-id')) {
                data.id = $(this).attr('data-id');
            }
            console.log(data);
            $.ajax({
                url: server_host + '/set_news_special_topic',
                type: 'POST',
                data: JSON.stringify(data),
                success: function(res) {
                    console.log(res);
                    modify_success.show();
                    $.ajax({
                        url: 'news_topic?title=' + data.title + '&topic_time=' + Date.parse(data.topic_time) / 1000,
                        success: function(res) {
                            console.log(res);
                        }
                    });

                    setTimeout(function() {
                        reply_comment.find('input').val('');
                        reply_comment.find('textarea').html('');
                        news_special_topic();
                        modify_success.hide();
                        reply_comment.hide();
                    }, 2000);
                }
            });


        } else {
            tips_success.show();
            setTimeout(function() {
                tips_success.hide();
            }, 2000);
        }
    });
    news_special_topic();
    // 获取专题列表
    function news_special_topic() {
        $.ajax({
            url: server_host + '/news_special_topic',
            success: function(res) {
                table_special_configuration.empty();
                var jsonobj = JSON.parse(res);
                console.log(jsonobj);
                for (var i = 0; i < jsonobj.length; i++) {
                    createSpecial(jsonobj[i]);
                }
            }
        });

    }

    function createSpecial(list) {
        var tr = $('<tr/>');
        var td1 = $('<td/>').html(list.id).addClass('s_id').appendTo(tr);
        console.log(list.topic_time)
        var td4 = $('<td/>').html(getTime(Date.parse(list.topic_time) - 8 * 60 * 60 * 1000)).appendTo(tr);
        var td5 = $('<td/>').html(list.title).addClass('s_title').appendTo(tr);
        switch (list.cid) {
            case 'top':
                var td9 = $('<td class="c_id">トップ</td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                break;
            case 'topic':
                var td9 = $('<td class="c_id">話題</td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                break;
            case 'ent':
                var td9 = $('<td class="c_id">エンタメ</td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                break;
            case 'spo':
                var td9 = $('<td class="c_id">スポーツ</td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                break;
            case 'cn':
                var td9 = $('<td class="c_id">中国</td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                break;
            case 'kr':
                var td9 = $('<td class="c_id">韓国</td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                break;
            case 'base':
                var td9 = $('<td class="c_id">野球</td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                break;
            case 'int':
                var td9 = $('<td class="c_id">国際</td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                break;
            case 'pol':
                var td9 = $('<td class="c_id">政治</td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                break;
            case 'bus':
                var td9 = $('<td class="c_id">経済</td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                break;
            case 'tech':
                var td9 = $('<td class="c_id">テクノロジー</td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                break;
            case 'socc':
                var td9 = $('<td class="c_id">サッカー</td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                break;
            case 'soci':
                var td9 = $('<td class="c_id">社会</td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                break;
            case 'girl':
                var td9 = $('<td class="c_id">女性</td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                break;
            case 'tra':
                var td9 = $('<td class="c_id">旅行</td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                break;
            case 'cnet':
                var td9 = $('<td class="c_id">チャイナネット</td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                break;
            case 'video':
                var td9 = $('<td class="c_id">動画</td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                break;
            case 'pic':
                var td9 = $('<td class="c_id">写真</td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                break;
            case 'anime':
                var td9 = $('<td class="c_id">アニメ</td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                break;
            case 'game':
                var td9 = $('<td class="c_id">ゲーム</td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                break;
            case 'food':
                var td9 = $('<td class="c_id">グルメ</td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                break;
            case 'cul':
                var td9 = $('<td class="c_id">文化</td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                break;
            case 'wea':
                var td9 = $('<td class="c_id">災害</td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                break;
            default:
                var td9 = $('<td class="c_id">' + list.category_id + '</a></td>').attr({ 'data-id': list.id, 'data-cid': list.category_id }).appendTo(tr);
                break;

        }
        if (list.active == 1) {
            var td6 = $('<td/>').html('正在运行').appendTo(tr);
        } else {
            var td6 = $('<td/>').html('已下线').appendTo(tr);
        }
        var td2 = $('<td/>').html('<a href="#">编辑</a>').addClass('special_config').attr('data-info', JSON.stringify(list)).appendTo(tr);
        var td3 = $('<td/>').html('<a href="#">查看</a>').addClass('special_newslist').attr('data-info', JSON.stringify(list)).appendTo(tr);
        if (list.active == 1) {
            var td7 = $('<td/>').html('<a href="#">下线</a>').addClass('special_active').attr('data-id', list.id).appendTo(tr);
        } else {
            var td7 = $('<td/>').html('<span>---</span>').appendTo(tr);
        }
        tr.appendTo(table_special_configuration);

    }

    //下线专题
    table_special_configuration.on('click', '.special_active', function() {
        $.ajax({
            url: server_host + '/news_special_topic_active?id=' + $(this).attr('data-id'),
            success: function(res) {
                share_success.show();
                setTimeout(function() {
                    news_special_topic();
                    share_success.hide();
                }, 2000);
            }
        });
    });

    //获取指定新闻专题的新闻列表
    table_special_configuration.on('click', '.special_newslist', function() {
        $('.special_current_news').html(JSON.parse($(this).attr('data-info')).title);
        news_special_topic_info(JSON.parse($(this).attr('data-info')).id);
        reply_comment2.show();
    });
    // 获取专题列表
    function news_special_topic_info(id) {
        $.ajax({
            url: server_host + '/news_special_topic_info?id=' + id,
            success: function(res) {
                table_special_relatedNews.empty();
                var jsonobj = JSON.parse(res);
                console.log(jsonobj);
                for (var i = 0; i < jsonobj.length; i++) {
                    createSpecialNews(jsonobj[i], id);
                }
            }
        });

    }

    function createSpecialNews(list, t_id) {
        var tr = $('<tr/>');
        var td1 = $('<td/>').html(list.news_id).appendTo(tr);
        switch (list.news_type) {
            case 1:
                var td9 = $('<td/>').html('新闻').appendTo(tr);
                break;
            case 2:
                var td9 = $('<td/>').html('视频').appendTo(tr);
                break;
            default:
                var td9 = $('<td/>').html(list.news_type).appendTo(tr);
                break;
        }
        var td4 = $('<td/>').html(getTime(list.news_time)).appendTo(tr);
        var td5 = $('<td/>').html(list.news_title).appendTo(tr);
        if (list.active == 1) {
            var td7 = $('<td/>').html('<a href="#">下线</a>').attr({ 'data-id': list.id, 'data-topid': t_id }).addClass('news_special_topic_info_active').appendTo(tr);
        } else {
            var td7 = $('<td/>').html('<span>---</span>').appendTo(tr);
        }

        if (list.stick_at_top == 1) {
            var td6 = $('<td/>').html('<span>已置顶</span>').appendTo(tr);
        } else {
            var td6 = $('<td/>').html('<a href="#">置顶</a>').addClass('special_news_top').attr({ 'data-id': list.id, 'data-topid': t_id }).appendTo(tr);
        }
        tr.appendTo(table_special_relatedNews);

    }

    // 置顶新闻
    table_special_relatedNews.on('click', '.special_news_top', function() {
        var tid = $(this).attr('data-topid');
        $.ajax({
            url: server_host + '/news_special_topic_info_top?id=' + $(this).attr('data-id'),
            success: function(res) {
                console.log(res);
                modify_success.show();
                setTimeout(function() {
                    news_special_topic_info(tid);
                    modify_success.hide();
                }, 2000);
            }
        });
    });
    // 下线新闻
    table_special_relatedNews.on('click', '.news_special_topic_info_active', function() {
        var tid = $(this).attr('data-topid');
        $.ajax({
            url: server_host + '/news_special_topic_info_active?id=' + $(this).attr('data-id'),
            success: function(res) {
                console.log(res);
                del_success.show();
                setTimeout(function() {
                    news_special_topic_info(tid);
                    del_success.hide();
                }, 2000);
            }
        });
    });

    // 专题搜索
    $('.special_search').click(function() {
        table_special_configuration.find('tr').hide();
        if ($('.special_id').val() != '') {
            console.log(table_special_configuration.find('.s_id').filter(":contains(" + $('.special_id').val() + ")"))
            table_special_configuration.find('.s_id').filter(":contains(" + $('.special_id').val() + ")").parent().show();
        } else if ($('.special_keyword_search').val() != '') {

            table_special_configuration.find('.s_title').filter(":contains(" + $('.special_keyword_search').val() + ")").parent().show();
        } else {
            table_special_configuration.find('tr').show()
        }
    });

    switch_appbottom_tab();
    // Tab配置页
    function switch_appbottom_tab() {
        $.ajax({
            url: server_host + '/switch_appbottom_tab',
            success: function(res) {
                table_tab_configuration.empty();
                var jsonobj = JSON.parse(res);
                console.log(jsonobj);
                for (var i = 0; i < jsonobj.length; i++) {
                    createTabConfig(jsonobj[i]);
                }
            }
        });

    }

    function createTabConfig(list, t_id) {
        var tr = $('<tr/>');
        var td1 = $('<td/>').html(list.id).appendTo(tr);
        var td2 = $('<td/>').html(list.position).addClass('tab_pos').appendTo(tr);
        var td8 = $('<td/>').html(getTime(list.updatetime)).appendTo(tr);
        var td3 = $('<td/>').html(list.btn_text).appendTo(tr);
        var td4 = $('<td/>').html(list.btn_uri).appendTo(tr);
        if (list.badge_showtype == 0) {
            var td5 = $('<td/>').html('否').addClass('tab_hot').appendTo(tr);
        } else {
            var td5 = $('<td/>').html('是').addClass('tab_hot').appendTo(tr);
        }
        if (list.active == 1) {
            var td6 = $('<td/>').html('使用中').addClass('tab_status').appendTo(tr);
        } else {
            var td6 = $('<td/>').html('已停用').addClass('tab_status').appendTo(tr);
        }
        var td7 = $('<td/>').html('<a href="#">编辑</a>').addClass('tab_config_updata').attr('data-info', JSON.stringify(list)).appendTo(tr);
        if (list.active == 1) {
            var td9 = $('<td/>').html('<a href="#">停用</a>').addClass('tab_config_active').attr({ 'data-id': list.id, 'data-value': 0 }).appendTo(tr);
        } else {
            var td9 = $('<td/>').html('<a href="#">启用</a>').addClass('tab_config_active').attr({ 'data-id': list.id, 'data-value': 1 }).appendTo(tr);
        }


        tr.appendTo(table_tab_configuration);

    }

    // 创建Tab
    $('.tab_create').click(function() {
        $('.tab_name').val('');
        $('.btn_text_argb').val('');
        $('.btn_text_argb_hl').val('');
        $('.btn_image2x').val('');
        $('.btn_image2x_hl').val('');
        $('.btn_image3x').val('');
        $('.btn_image3x_hl').val('');
        $('.tab_uri').val('');
        $('.badge_argb').val('');
        $('.tab_updata').removeAttr('data-id');
        reply_comment.show();
    });

    // 启用停用
    table_tab_configuration.on('click', '.tab_config_active', function() {
        $.ajax({
            url: server_host + '/switch_appbottom_tab_active?id=' + $(this).attr('data-id') + '&value=' + $(this).attr('data-value'),
            success: function(res) {
                console.log(res);
                share_success.show();
                setTimeout(function() {
                    switch_appbottom_tab();
                    share_success.hide();
                }, 2000);
            }
        });

    });

    // 编辑tab配置
    table_tab_configuration.on('click', '.tab_config_updata', function() {
        var info = JSON.parse($(this).attr('data-info'));
        var option = $('.tab_position').find('option');
        option.each(function() {
            if ($(this).html() == info.position) {
                $(this).attr('selected', true);
            }
        });
        var option1 = $('.tab_badge').find('option');
        if (info.badge_showtype == 0) {
            option1.eq(0).attr('selected', true);
        } else {
            option1.eq(1).attr('selected', true);
            option1.eq(1).val(info.badge_showtype);
        }

        $('.tab_name').val(info.btn_text);
        $('.btn_text_argb').val(info.btn_text_argb);
        $('.btn_text_argb_hl').val(info.btn_text_argb_hl);
        $('.btn_image2x').val(info.btn_image2x);
        $('.btn_image2x_hl').val(info.btn_image2x_hl);
        $('.btn_image3x').val(info.btn_image3x);
        $('.btn_image3x_hl').val(info.btn_image3x_hl);
        $('.tab_uri').val(info.btn_uri);
        $('.badge_argb').val(info.badge_argb);
        $('.tab_updata').attr('data-id', info.id);

        reply_comment.show();
    });

    // 提交配置
    $('.tab_updata').click(function() {
        if ($('.tab_name').val() && $('.btn_image2x').val() && $('.btn_image2x_hl').val() && $('.btn_image3x').val() && $('.btn_image3x_hl').val() && $('.tab_uri').val()) {

            var data = {
                btn_text: $('.tab_name').val(),
                position: $('.tab_position').find('option:selected').html(),
                btn_text_argb: $('.btn_text_argb').val(),
                btn_text_argb_hl: $('.btn_text_argb_hl').val(),
                btn_image2x: $('.btn_image2x').val(),
                btn_image2x_hl: $('.btn_image2x_hl').val(),
                btn_image3x: $('.btn_image3x').val(),
                btn_image3x_hl: $('.btn_image3x_hl').val(),
                btn_uri: $('.tab_uri').val(),
                badge_argb: $('.badge_argb').val()
                    // badge_showtype: $('.tab_badge').find('option:selected').val()
            }
            if ($('.tab_badge').find('option:selected').index() == 0) {
                data.badge_showtype = 0;
            } else {
                var num = $('.tab_badge').find('option:selected').val()
                data.badge_showtype = ++num;
            }
            if ($(this).attr('data-id')) {
                data.id = $(this).attr('data-id');
            }
            console.log(data);
            $.ajax({
                url: server_host + '/set_switch_appbottom_tab',
                type: 'POST',
                data: JSON.stringify(data),
                success: function(res) {
                    console.log(res);
                    share_success.show();
                    setTimeout(function() {
                        switch_appbottom_tab();
                        reply_comment.hide();
                        share_success.hide();
                    }, 2000);
                }
            });
        } else {
            tips_success.show();
            setTimeout(function() {
                tips_success.hide();
            }, 2000);
        }
    });
    // 帮助
    $('.help').click(function() {
        reply_comment2.show();
    });

    $('.t_position').click(function() {
        console.log($('.special_position').find('option:selected').html());
        table_tab_configuration.find('tr').hide();
        table_tab_configuration.find('.tab_pos').filter(":contains(" + $('.t_position').find('option:selected').html() + ")").parent().show();
    });

    $('.t_status').click(function() {
        table_tab_configuration.find('tr').hide();
        table_tab_configuration.find('.tab_status').filter(":contains(" + $('.t_status').find('option:selected').html() + ")").parent().show();
    });

    $('.t_hot').click(function() {
        table_tab_configuration.find('tr').hide();
        table_tab_configuration.find('.tab_hot').filter(":contains(" + $('.t_hot').find('option:selected').html() + ")").parent().show();
    });


    // var userinfo = $(this).find('option:selected').attr('data-userinfo');
});

//
