define(function(require, exports, module) {
    var pushLog = function() {
        var table_pushLog_tbody = $('.table_pushLog').find('tbody');
        var pushLog_opa = $('.pushLog_opa');
        var news_id_push = $('.news_id_push');
        var search_push = $('.search_push');
        pushLog();
        // 查看已推送的新闻
        function pushLog() {
            $.ajax({
                url: server_host + '/push_log',
                success: function(res) {
                    console.log('推送日志');
                    createPushLog(res);
                }
            });
        }

        // 创建已推送新闻表格
        function createPushLog(res) {
            var list = res;
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

                var td5 = $('<td/>').html(list[i].platform).appendTo(tr);
                var td6 = $('<td/>').html(list[i].pushtitle).appendTo(tr);
                var td7 = $('<td/>').html(list[i].pushbody).appendTo(tr);

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
            } else {
                pushLog();
            }

        });
        // 搜索新闻
        function getPushNews(newsid) {
            $.ajax({
                url: server_host + '/push_log_news?aid=' + newsid,
                success: function(res) {
                    var list = res;
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
    }
    exports.pushLog = pushLog;
});

//
