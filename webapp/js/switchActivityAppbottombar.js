define(function(require, exports, module) {
    var switchActivityAppbottombar = function() {
        var table_appbtmbar_tbody = $('.table_appbtmbar').find('tbody');
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
        var add_appbottom = $('.add_appbottom');
        var reply_comment = $('.reply_comment');
        // 设置底部按钮表格
        getAppbtmba();

        function getAppbtmba() {
            $.ajax({
                url: '/japi/switchconfig/appbtmbar',
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
            var td6 = $('<td/>').html(getTime(list.validityStart)).appendTo(tr);
            var td7 = $('<td/>').html(getTime(list.validityEnd)).appendTo(tr);
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
                    url: '/japi/switchconfig/updateAppbtmbar',
                    type: 'POST',
                    data: JSON.stringify(data),
                    success: function(res) {
                        if (res.status == 200) {
                            $('.share_success').show();
                            setTimeout(function() {
                                getAppbtmba();
                                $('.share_success').hide();
                                reply_comment.hide();
                            }, 2000);
                        } else {
                            $('.tips_success').show();
                            setTimeout(function() {
                                $('.tips_success').hide();
                            }, 2000);
                        }
                    }
                });
            } else {
                $('.tips_success').show();
                setTimeout(function() {
                    $('.tips_success').hide();
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
            appbtmbar_start_time.val(new Date(info.validityStart).Format("yyyy-MM-ddThh:mm:ss"));
            appbtmbar_end_time.val(new Date(info.validityEnd).Format("yyyy-MM-ddThh:mm:ss"));
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
            console.log($(this).attr('data-id'));
            var id = $(this).attr('data-id');
            $.ajax({
                url: '/japi/switchconfig/deleteSplash?id=' + id,
                success: function(res) {
                    $('.del_success').show();
                    setTimeout(function() {
                        getAppbtmba();
                        $('.del_success').hide();
                    },2000);
                }
            });

        });
    }

    // module.exports = textSea;
    exports.switchActivityAppbottombar = switchActivityAppbottombar;
});

//
