define(function(require, exports, module) {
    var switchActivitySplash = function() {
        var add_splash = $('.add_splash');
        var table_splash_tbody = $('.table_splash').find('tbody');
        var add_splash_sure = $('.add_splash_sure');
        var image2x = $('#image2x');
        var image3x = $('#image3x');
        var splash_id = $('.splash_id');
        var start_time = $('.start_time');
        var end_time = $('.end_time');
        var splash_image2x = $('.splash_image2x');
        var splash_image3x = $('.splash_image3x');
        var acticity_url = $('.acticity_url');
        var splash_skip = $('.splash_skip');
        var splash_shareimg = $('.splash_shareimg');
        var splash_showtimes = $('.splash_showtimes');
        var splash_time = $('.splash_time');
        var splash_active = $('.splash_active');
        var reply_comment = $('.reply_comment');
        // 设置闪屏表格
        getSplash();

        function getSplash() {
            $.ajax({
                url: '/api/v1/splash/get',
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
            var td4 = $('<td/>').html(list.act_url).appendTo(tr);
            var td13 = $('<td/>').html(list.shareImage).appendTo(tr);
            if (list.skip == 1) {
                var td5 = $('<td/>').html('有').appendTo(tr);
            } else {
                var td5 = $('<td/>').html('无').appendTo(tr);
            }
            var td6 = $('<td/>').html(list.skip_duration).appendTo(tr);
            console.log(getTime(Date.parse(list.validity_start) - 8 * 60 * 60 * 1000))
            var td7 = $('<td/>').html(getTime(Date.parse(list.validity_start) - 8 * 60 * 60 * 1000)).appendTo(tr);
            var td8 = $('<td/>').html(getTime(Date.parse(list.validity_end) - 8 * 60 * 60 * 1000)).appendTo(tr);

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
            var td13 = $('<td/>').html(list.platform).appendTo(tr);
            var td14 = $('<td/>').html(list.app_platform).appendTo(tr);
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
            // var sp_id = $('.sp_id')[0].innerHTML;
            splash_id.val(' ');
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
            var s_time = getTime(new Date(start_time.val()));
            var e_time = getTime(new Date(end_time.val()));
            var skipDuration = splash_time.val();
            var skip = splash_skip.find('option:selected').attr('data-id');
            var showtimes = splash_showtimes.find('option:selected').attr('data-id');
            var active = splash_active.find('option:selected').attr('data-id');
            var platform = $('.platform').find('option:selected').html();
            var app_platform = $('.app_platform').find('option:selected').html();
            var shareImage = splash_shareimg.val();
            if (image2x && image3x && a_url && s_time && e_time) {
                var data = {
                    id: s_id, // 若源ID存在则更新, 若不存在源ID则是新增数据
                    act_url: a_url,
                    active: parseInt(active), // 0 Inactive; 1 Active
                    shareImage: shareImage,
                    image2x: image2x,
                    image3x: image3x,
                    showtimes: parseInt(showtimes), // 1 everytime; 2 once a day; 3 once; 4 stop after skip
                    skip: parseInt(skip), // 0 no skip; 1 skip
                    skip_duration: parseInt(skipDuration), // For second
                    validity_end: e_time,
                    validity_start: s_time,
                    platform: platform,
                    app_platform: app_platform
                }
                console.log(data);
                $.ajax({
                    url: '/api/v1/splash/update',
                    type: 'POST',
                    data: JSON.stringify(data),
                    contentType: 'application/json',
                    dataType: 'json',
                    success: function(res) {
                        $('.share_success').show();
                        setTimeout(function() {
                            getSplash();
                            $('.share_success').hide();
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
            reply_comment.show();
        }
        // bindEvent 修改闪屏
        table_splash_tbody.on('click', '.modify_splash', function() {
            var info = JSON.parse($(this).attr('data-info'));
            splash_id.val(info.id);
            splash_image2x.val(info.image2x);
            splash_image3x.val(info.image3x);
            acticity_url.val(info.act_url);
            splash_shareimg.val(info.shareImage);
            // console.log(getTime(info.validityStart));
            start_time.val(new Date(Date.parse(info.validity_start) - (8 * 60 * 60 * 1000)).Format("yyyy-MM-ddThh:mm:ss"));
            end_time.val(new Date(Date.parse(info.validity_end) - (8 * 60 * 60 * 1000)).Format("yyyy-MM-ddThh:mm:ss"));
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
            splash_time.val(info.skip_duration);

            // 默认选中平台，app
            if (info.platform == 'ios') {
                $('.j-ios').prop('selected', 'true')
            } else if (info.platform == 'android') {
                $('.j-android').prop('selected', 'true')
            }
            var select = '.j-' + info.appPlatform;
            console.log(select);
            console.log($(select));
            $(select).prop('selected', 'true')

            reply_comment.show();
        });

        // 删除闪屏
        table_splash_tbody.on('click', '.del_splash', function() {
            $.ajax({
                url: '/del_splash?id=' + $(this).attr('data-id'),
                success: function(res) {
                    console.log(res);
                    $('.del_success').show();
                    setTimeout(function() {
                        getSplash();
                        $('.del_success').hide();
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
    }

    // module.exports = textSea;
    exports.switchActivitySplash = switchActivitySplash;
});

//
