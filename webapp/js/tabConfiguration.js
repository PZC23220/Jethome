define(function(require, exports, module) {
    var tabConfiguration = function() {
        var table_tab_configuration = $('.table_tab_configuration tbody');
        var reply_comment = $('.reply_comment');
        var reply_comment2 = $('.reply_comment2');
        var close4 = $('.close4');
        // var server_host = "http://jethome.newsjet.io:9000";
        var server_host = "http://localhost:9000";
        switch_appbottom_tab();
        // Tab配置页
        function switch_appbottom_tab() {
            $.ajax({
                url: server_host + '/switch_appbottom_tab',
                success: function(res) {
                    table_tab_configuration.empty();
                    var jsonobj = res;
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
                    $('.share_success').show();
                    setTimeout(function() {
                        switch_appbottom_tab();
                        $('.share_success').hide();
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
                        $('.share_success').show();
                        setTimeout(function() {
                            switch_appbottom_tab();
                            reply_comment.hide();
                            $('.share_success').hide();
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

    }

    // module.exports = textSea;
    exports.tabConfiguration = tabConfiguration;
});

//
