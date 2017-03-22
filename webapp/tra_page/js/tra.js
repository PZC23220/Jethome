window.onload = function() {
    // alert("KK");
    var main = document.getElementsByTagName('main')[0];
    var img = main.getElementsByTagName('img');
    var container = document.getElementsByClassName('.container')[0];

    var images = [];
    for (var j = 0; j < img.length; j++) {
        images.push("'" + img[j].src + "'");
    }

    for (var i = 0; i < img.length; i++) {
        img[i].setAttribute('index', i);
        img[i].onclick = function() {
            window.location.href = "newsjetjsbridge://{'method':'clickImage','images':[" + images + "],'index':'" + this.getAttribute('index') + "'}";
        };
    }
    document.addEventListener('DOMSubtreeModified', function() {
        var all_img = document.querySelectorAll('img');
        if (!all_img) {
            return;
        }
        var pat = /^http.*/;
        for (var k = 0; k < all_img.length; k++) {
            if (!(pat.test(all_img[k].src))) {
                all_img[k].src = all_img[k].src.replace(/^file:/, "");
                all_img[k].src = "http:" + all_img[k].src;
            }
        }


    }, false);

    var news_list = $('.news_list');
    var news_ad = $('.news_ad');
    getRelatedNews();
    // 创建相关新闻
    function getRelatedNews() {
        $.ajax({
            url: 'http://api3.newsjet.io:8088/news/relevantnews?rows=5&platform=h5&id='+ '211250',
            success: function(res) {
                // console.log(res);
                var list = res.data;
                for (var k in list) {
                    console.log(list[k]);
                    var imgs = list[k].data1.thumbnail;
                    // 多图
                    if (imgs.length >= 3) {
                        var div = $('<div/>').addClass('news_summary');
                        var a = $('<a/>');
                        a.attr('href', "newsjetjsbridge://{'method':'pushNews','id':'" + list[k].data1.id + "','cid' : '" + list[k].data1.category_id + "'}");
                        var p1 = $('<p/>').html(list[k].data1.title).appendTo(a);
                        var p2 = $('<p/>').addClass('news_imgs');
                        for (var i = 0; i < imgs.length; i++) {
                            var img = $('<img/>').attr({ 'src': imgs[i], 'onerror': 'javascript:this.src="img/pic.png"' }).appendTo(p2);
                            if (i == 2) {
                                break;
                            }
                        }
                        p2.appendTo(a);
                    }
                    // 无图
                    else if (imgs.length <= 0) {
                        var div = $('<div/>').addClass('news_summary');
                        var a = $('<a/>').attr('href', "newsjetjsbridge://{'method':'pushNews','id':'" + list[k].data1.id + "','cid' : '" + list[k].data1.category_id + "'}");
                        var p1 = $('<p/>').html(list[k].data1.title).appendTo(a);
                    }
                    // 一张图
                    else {
                        var div = $('<div/>').addClass('news_summary one_img');
                        var a = $('<a/>').attr('href', "newsjetjsbridge://{'method':'pushNews','id':'" + list[k].data1.id + "','cid' : '" + list[k].data1.category_id + "'}");
                        var p1 = $('<p/>').html(list[k].data1.title).appendTo(a);
                        var p2 = $('<p/>').addClass('news_imgs');
                        var img = $('<img/>').attr({ 'src': imgs[0], 'onerror': 'javascript:this.src="img/pic.png"' }).appendTo(p2);
                        p2.appendTo(a);
                    }

                    if (list[k].data1.commentCount > 0) {
                        var p3 = $('<p><span class="news_shore"><img src="img/icon_news.png" alt="">' + list[k].data1.shore_desc + '</span><span>' + list[k].data1.commentCount + '<img src="img/icon_comment.png" alt=""></span></p>').appendTo(a);
                    } else {
                    	var p3 = $('<p><span class="news_shore"><img src="img/icon_news.png" alt="">' + list[k].data1.site + '</span></p>').appendTo(a);
                    }
                    a.appendTo(div);
                    if(k < 3) {
                        news_ad.before(div);
                    }else {
                        div.appendTo(news_list);

                    }
                }
            }
        });

    }
}
