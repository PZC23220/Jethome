define(function(require, exports, module) {
    var specialConfiguration = function() {
        var table_special_configuration = $('.table_special_configuration tbody');
        var table_special_relatedNews = $('.table_special_relatedNews tbody');
        var reply_comment = $('.reply_comment');
        var reply_comment2 = $('.reply_comment2');
        var special_create = $('.special_create');
        var category = $('.category');
        getCategorys();
        function getCategorys() {
            category.empty();
            for(var i=1;i<arrCategory.length;i++) {
                $('<option/>').html(arrCategory[i].channel).attr('data-id',arrCategory[i].cid).appendTo(category);
            }
        }
        
        // 创建专题
        special_create.click(function() {
            $('.special_title').val('');
            $('.special_description').val('');
            $('.special_bg_img').val('');
            $('.special_keyword').val('');
            $('.exclude_words').val('');
            $('.special_start_time').val('');
            $('.topic_cid').val('');
            reply_comment.show();
            $('.special_publish').removeAttr('data-id');
        });
        // 配置专题
        table_special_configuration.on('click', '.special_config', function() {
            reply_comment.show();
            var info = JSON.parse($(this).attr('data-info'));
            $('.special_title').val(info.title);
            // $('.special_subtitle').val(info.subtitle);
            $('.topic_cid').val(info.topic_cid);
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
                    $('.special_channel').val($(this).html())
                } else {
                     $(this).removeAttr('selected');
                }
            });
            var option2 = $('.special_position').find('option');
            option2.each(function(idx, ele) {
                if ($(this).html() == info.pos) {
                    $(this).attr('selected', true);
                } else {
                     $(this).removeAttr('selected');
                }
            });
            var option3 = $('.special_toplist').find('option');
            option3.each(function(idx, ele) {
                if ($(this).val() == info.is_toplist) {
                    $(this).attr('selected', true);
                } else {
                     $(this).removeAttr('selected');
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
                    topic_cid: $('.topic_cid').val(),
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
                        $('.modify_success').show();
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
                            $('.modify_success').hide();
                            reply_comment.hide();
                        }, 2000);
                    }
                });


            } else {
                $('.tips_success').show();
                setTimeout(function() {
                    $('.tips_success').hide();
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
                    var jsonobj = res;
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
            transCategory(list.cid,list.id,tr);
            if (list.active == 1) {
                var td6 = $('<td/>').html('正在运行').appendTo(tr);
            } else {
                var td6 = $('<td/>').html('已下线').appendTo(tr);
            }
            var td2 = $('<td/>').html('<a href="#">编辑</a>').addClass('special_config').attr('data-info', JSON.stringify(list)).appendTo(tr);
            var td3 = $('<td/>').html('<a href="#">查看</a>').addClass('special_newslist').attr('data-info', JSON.stringify(list)).appendTo(tr);
            if (list.active == 1) {
                var td7 = $('<td/>').html('<a href="#">下线</a>').addClass('special_active').attr({ 'data-id': list.id, 'data-val': 0 }).appendTo(tr);
            } else {
                var td7 = $('<td/>').html('<a href="#">上线</a>').addClass('special_active').attr({ 'data-id': list.id, 'data-val': 1 }).appendTo(tr);
            }
            tr.appendTo(table_special_configuration);

        }

        //下线/上线专题
        table_special_configuration.on('click', '.special_active', function() {
            $.ajax({
                url: server_host + '/news_special_topic_active?id=' + $(this).attr('data-id') + '&value=' + $(this).attr('data-val'),
                success: function(res) {
                    $('.share_success').show();
                    setTimeout(function() {
                        news_special_topic();
                        $('.share_success').hide();
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
                    var jsonobj = res;
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
            var td4 = $('<td/>').html(getTime(list.news_time * 1000)).appendTo(tr);
            var td5 = $('<td/>').html(list.news_title).appendTo(tr);
            if (list.active == 1) {
                var td7 = $('<td/>').html('<a href="#">下线</a>').attr({ 'data-id': list.id, 'data-topid': t_id, 'data-val': 0 }).addClass('news_special_topic_info_active').appendTo(tr);
            } else {
                var td7 = $('<td/>').html('<a href="#">上线</a>').attr({ 'data-id': list.id, 'data-topid': t_id, 'data-val': 1 }).addClass('news_special_topic_info_active').appendTo(tr);
            }

            if (list.stick_at_top == 1) {
                var td6 = $('<td/>').html('<a href="#">取消置顶</a>').addClass('special_news_top').attr({ 'data-id': list.id, 'data-topid': t_id, 'data-val': 0 }).appendTo(tr);
            } else {
                var td6 = $('<td/>').html('<a href="#">置顶</a>').addClass('special_news_top').attr({ 'data-id': list.id, 'data-topid': t_id, 'data-val': 1 }).appendTo(tr);
            }
            tr.appendTo(table_special_relatedNews);

        }

        // 置顶新闻
        table_special_relatedNews.on('click', '.special_news_top', function() {
            var tid = $(this).attr('data-topid');
            $.ajax({
                url: server_host + '/news_special_topic_info_top?id=' + $(this).attr('data-id') + '&value=' + $(this).attr('data-val'),
                success: function(res) {
                    console.log(res);
                    $('.modify_success').show();
                    setTimeout(function() {
                        news_special_topic_info(tid);
                        $('.modify_success').hide();
                    }, 2000);
                }
            });
        });
        // 下线新闻
        table_special_relatedNews.on('click', '.news_special_topic_info_active', function() {
            var tid = $(this).attr('data-topid');
            $.ajax({
                url: server_host + '/news_special_topic_info_active?id=' + $(this).attr('data-id') + '&value=' + $(this).attr('data-val'),
                success: function(res) {
                    console.log(res);
                    $('.del_success').show();
                    setTimeout(function() {
                        news_special_topic_info(tid);
                        $('.del_success').hide();
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

    }

    // module.exports = textSea;
    exports.specialConfiguration = specialConfiguration;
});

//
