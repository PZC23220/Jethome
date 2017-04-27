define(function(require, exports, module) {
    var headlineOptimize = function() {
        var optimize_cid = $('.optimize_cid');
        var channel = $('.channel');
        var plus_weight = $('.plus_weight');
        var minus_weight = $('.minus_weight');
        var plus_init = $('.plus_init');
        var update_optimize = $('.update_optimize');
        var table_headlineOptimize_tbody = $('.table_headlineOptimize').find('tbody');
        var c_position = $('.c_position');
        var c_status = $('.c_status');
        var add_category_sure = $('.add_category_sure');
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
        var reply_comment = $('.reply_comment');
        var reply_comment2 = $('.reply_comment2');
        var reply_comment3 = $('.reply_comment3');
        getNewsCategory();

        function getNewsCategory() {
            $.ajax({
                url: server_host + '/get_news_category',
                success: function(res) {
                    table_headlineOptimize_tbody.empty();
                    var list = res;
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
                    $('.share_success').show();
                    setTimeout(function() {
                        getNewsCategory();
                        $('.share_success').hide();
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
                    $('.modify_success').show();
                    setTimeout(function() {
                        getNewsCategory();
                        $('.modify_success').hide();
                        reply_comment2.hide();
                    }, 2000);
                }
            });

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
                        $('.del_success').show();
                        setTimeout(function() {
                            getNewsCategory();
                            $('.del_success').hide();
                            reply_comment3.hide();
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
    }

    // module.exports = textSea;
    exports.headlineOptimize = headlineOptimize;
});

//
