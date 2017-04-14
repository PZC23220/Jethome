var c = true;
var share_success = $('.share_success');
var comment_success = $('.comment_success');
var likes_success = $('.likes_success');
var table_container = $('.table_container');
var reply_comment = $('.reply_comment');
var del_success = $('.del_success');
var modify_success = $('.modify_success');
var close4 = $('.close4');
var tips_success = $('.tips_success');
var close5 = $('.close5');
var close6 = $('.close6');
var category = $('.category');
var reply_comment2 = $('.reply_comment2');
var reply_comment3 = $('.reply_comment3');
var reply_comment4 = $('.reply_comment4');
var reply_comment5 = $('.reply_comment5');
var close7 = $('.close7');
var close8 = $('.close8');
var reply_comment6 = $('.reply_comment6');
var close9 = $('.close9');
var close2 = $('.close2');
var nav_left_list = $('.nav_left_list li');
var loading = $('.loading');
var main_content = $('.main_content');
var server_host = "http://jethome.newsjet.io:9000";
// var server_host = '';

// var server_host = "http://localhost:9000";

var commonFn = {
    //获取栏目
    getCategory: function() {
        var arr;
        $.ajax({
            url: server_host + '/get_news_category',
            async: false,
            success: function(res) {
                arr = res;
            }
        });
        return arr;
    },
    // 获取机器人账户
    getUserimg: function() {
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
}
console.log(commonFn)
var arr10 = commonFn.getUserimg();
var arrCategory = commonFn.getCategory();

seajs.use('app', function(app) {
    app.page1();
});
// 左侧列表点击
nav_left_list.click(function() {
    nav_left_list.removeClass('active');
    $(this).addClass('active');
    var hash_ = $(this).find('a').attr('href').substring(1);
    table_container.hide();
    table_container.each(function() {
        if ($(this).attr('id') == hash_) {
            console.log($(this).attr('id'), hash_)
            $(this).show();
        }
    });
    switch ($(this).index()) {
        case 0:
            seajs.use('app', function(app) {
                app.page1();
            });
            break;
        case 1:
            seajs.use('app', function(app) {
                app.page2();
            });
            break;
        case 2:
            seajs.use('app', function(app) {
                app.page3();
            });
            break;
        case 3:
            seajs.use('app', function(app) {
                app.page4();
            });
            break;
        case 4:
            seajs.use('app', function(app) {
                app.page5();
            });
            break;
        case 5:
            seajs.use('app', function(app) {
                app.page6();
            });
            break;
        case 6:
            seajs.use('app', function(app) {
                app.page7();
            });
            break;
        case 7:
            seajs.use('app', function(app) {
                app.page8();
            });
            break;
        case 8:
            seajs.use('app', function(app) {
                app.page9();
            });
            break;
        case 9:
            seajs.use('app', function(app) {
                app.page10();
            });
            break;
        case 10:
            seajs.use('app', function(app) {
                app.page11();
            });
            break;
        case 11:
            seajs.use('app', function(app) {
                app.page12();
            });
            break;
        default:
            break;
    }
});
// 判断用户有没有登录
var obj = sessionStorage.getItem('username');
if (!obj) {
    window.open('./login.html', '_self');
}
// 取消推送
main_content.on('click', '.close4', function() {
    $(this).parents('.reply_comment').hide();
});
// 取消推送
        main_content.on('click', '.close2', function() {
            $('.push_sure').hide();
            $('.os').removeAttr("checked");
        });
// 关闭页面
main_content.on('click','.close5',function(){
    $(this).parents('.reply_comment2').hide();
});
main_content.on('click','.close6',function(){
    $(this).parents('.reply_comment3').hide();
    $('.content').empty();
    $('.choice1').empty();
    $('.choice2').empty();
    $('.choice3').empty();
});
main_content.on('click','.close9',function(){
    $(this).parents('.reply_comment6').hide();
});

main_content.on('click','.close8',function(){
    $(this).parents('.reply_comment5').hide();
});

function getTime(time) {
    var d = new Date(time);
    var hours = d.getHours() >= 10 ? d.getHours() : '0' + d.getHours();
    var minutes = d.getMinutes() >= 10 ? d.getMinutes() : '0' + d.getMinutes();
    var seconds = d.getSeconds() >= 10 ? d.getSeconds() : '0' + d.getSeconds();
    var str = d.getUTCFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate() + '  ' + hours + ':' + minutes + ':' + seconds;
    return str;
}

function transCategory(c_id, id,tr) {
    switch (c_id) {
        case 'all':
            $('<td class="c_id"><a href="#">' + c_id + '</a></td>').attr({ 'data-id': id, 'data-cid': c_id }).appendTo(tr);
            break;
        case 'top':
            $('<td class="c_id"><a href="#">トップ</a></td>').attr({ 'data-id': id, 'data-cid': c_id }).appendTo(tr);
            break;
        case 'ent':
            $('<td class="c_id"><a href="#">エンタメ</a></td>').attr({ 'data-id': id, 'data-cid': c_id }).appendTo(tr);
            break;
        case 'spo':
            $('<td class="c_id"><a href="#">スポーツ</a></td>').attr({ 'data-id': id, 'data-cid': c_id }).appendTo(tr);
            break;
        case 'cn':
            $('<td class="c_id"><a href="#">中国</a></td>').attr({ 'data-id': id, 'data-cid': c_id }).appendTo(tr);
            break;
        case 'kr':
            $('<td class="c_id"><a href="#">韓国</a></td>').attr({ 'data-id': id, 'data-cid': c_id }).appendTo(tr);
            break;
        case 'base':
            $('<td class="c_id"><a href="#">野球</a></td>').attr({ 'data-id': id, 'data-cid': c_id }).appendTo(tr);
            break;
        case 'int':
            $('<td class="c_id"><a href="#">国際</a></td>').attr({ 'data-id': id, 'data-cid': c_id }).appendTo(tr);
            break;
        case 'pol':
            $('<td class="c_id"><a href="#">政治</a></td>').attr({ 'data-id': id, 'data-cid': c_id }).appendTo(tr);
            break;
        case 'bus':
            $('<td class="c_id"><a href="#">経済</a></td>').attr({ 'data-id': id, 'data-cid': c_id }).appendTo(tr);
            break;
        case 'tech':
            $('<td class="c_id"><a href="#">テクノロジー</a></td>').attr({ 'data-id': id, 'data-cid': c_id }).appendTo(tr);
            break;
        case 'socc':
            $('<td class="c_id"><a href="#">サッカー</a></td>').attr({ 'data-id': id, 'data-cid': c_id }).appendTo(tr);
            break;
        case 'soci':
            $('<td class="c_id"><a href="#">社会</a></td>').attr({ 'data-id': id, 'data-cid': c_id }).appendTo(tr);
            break;
        case 'girl':
            $('<td class="c_id"><a href="#">女性</a></td>').attr({ 'data-id': id, 'data-cid': c_id }).appendTo(tr);
            break;
        case 'tra':
            $('<td class="c_id"><a href="#">旅行</a></td>').attr({ 'data-id': id, 'data-cid': c_id }).appendTo(tr);
            break;
        case 'cnet':
            $('<td class="c_id"><a href="#">チャイナネット</a></td>').attr({ 'data-id': id, 'data-cid': c_id }).appendTo(tr);
            break;
        case 'video':
            $('<td class="c_id"><a href="#">動画</a></td>').attr({ 'data-id': id, 'data-cid': c_id }).appendTo(tr);
            break;
        case 'pic':
            $('<td class="c_id"><a href="#">写真</a></td>').attr({ 'data-id': id, 'data-cid': c_id }).appendTo(tr);
            break;
        case 'anime':
            $('<td class="c_id"><a href="#">アニメ</a></td>').attr({ 'data-id': id, 'data-cid': c_id }).appendTo(tr);
            break;
        case 'game':
            $('<td class="c_id"><a href="#">ゲーム</a></td>').attr({ 'data-id': id, 'data-cid': c_id }).appendTo(tr);
            break;
        case 'food':
            $('<td class="c_id"><a href="#">グルメ</a></td>').attr({ 'data-id': id, 'data-cid': c_id }).appendTo(tr);
            break;
        case 'cul':
            $('<td class="c_id"><a href="#">文化</a></td>').attr({ 'data-id': id, 'data-cid': c_id }).appendTo(tr);
            break;
        case 'wea':
            $('<td class="c_id"><a href="#">災害</a></td>').attr({ 'data-id': id, 'data-cid': c_id }).appendTo(tr);
            break;
        default:
            $('<td class="c_id"><a href="#">' + c_id + '</a></td>').attr({ 'data-id': id, 'data-cid': c_id }).appendTo(tr);
            break;

    }
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
