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
    // 创建相关新闻
    function getRelatedNews() {
        $.ajax({
            url: '',
            success: function(res) {
                console.log(res);
                var list = res.data;
                for (var k = 0; k < list.length; k++) {
                    var imgs = list[k].imgs;
                    // 多图
                    if (imgs.length >= 3) {
                        var div = $('<div/>').addClass('news_summary');
                        var a = $('<a/>');
                        if (obje.share && obje.share != 'undefined') {
                            a.addClass('toastshow');
                        } else {
                            a.attr('href', "newsjetjsbridge://{'method':'pushNews','id':'" + list[k].id + "','cid' : '" + list[k].category_id + "'}");
                        }
                        var p1 = $('<p/>').html(list[k].title).appendTo(a);
                        var p2 = $('<p/>').addClass('news_imgs');
                        for (var i = 0; i < imgs.length; i++) {
                            var img = $('<img/>').attr({ 'src': imgs[i].url, 'onerror': 'javascript:this.src="img/pic.png"' }).appendTo(p2);
                            if (i == 2) {
                                break;
                            }
                        }
                        p2.appendTo(a);
                    }
                    // 无图
                    else if (imgs.length <= 0) {
                        var div = $('<div/>').addClass('news_summary');
                        var a = $('<a/>').attr('href', "newsjetjsbridge://{'method':'pushNews','id':'" + list[k].id + "','cid' : '" + list[k].category_id + "'}");
                        var p1 = $('<p/>').html(list[k].title).appendTo(a);
                    }
                    // 一张图
                    else {
                        var div = $('<div/>').addClass('news_summary one_img');
                        var a = $('<a/>').attr('href', "newsjetjsbridge://{'method':'pushNews','id':'" + list[k].id + "','cid' : '" + list[k].category_id + "'}");
                        var p1 = $('<p/>').html(list[k].title).appendTo(a);
                        var p2 = $('<p/>').addClass('news_imgs');
                        var img = $('<img/>').attr({ 'src': imgs[0].url, 'onerror': 'javascript:this.src="img/pic.png"' }).appendTo(p2);
                        p2.appendTo(a);
                    }

                    if (list[k].commentCount > 0) {
                        var p3 = $('<p><span><img src="img/icon_news.png" alt="">' + list[k].short_des + '</span><span>' + list[k].commentCount + '<img src="img/icon_comment.png" alt=""></span></p>').appendTo(a);
                    } else {
                    	var p3 = $('<p><span><img src="img/icon_news.png" alt="">' + list[k].short_des + '</span></p>').appendTo(a);
                    }
                    a.appendTo(div);
                    div.appendTo(news_list);
                }
            }
        });

    }


    // < div class = "news_summary one_img" >
    //     < a href = "#" >
    //     < p > 日本の高齢化が80歳の老人は依然として仕事。 出か依然として仕事。 < /p> < p class = "news_imgs" > < span class = "play_time" > 05: 20 < /span> < img src = "https:/ / nordot - res.cloudinary.com / ch / images / 216718564066344964 / origin_1.jpg "
    // alt = "" >
    //     < img src = "img/icon_play_2@2x.png"
    // alt = ""
    // class = "play" >
    //     < /p> < p > < span > < img src = "img/icon_hot.png "
    // alt = "" > 上传者昵称 < /span><span>点赞数<img src="img/icon_comment.png " alt="
    // "></span></p> < /a> < /div>

    function video() {
        var div = $('<div/>').addClass('news_summary one_img');
        var a = $('<a/>').attr('href', "newsjetjsbridge://{'method':'pushNews','id':'" + list[k].id + "','cid' : '" + list[k].category_id + "'}");
        var p1 = $('<p/>').html(list[k].title).appendTo(a);
        var p2 = $('<p/>').addClass('news_imgs');
        var span = $('<span/>').addClass('play_time').html('time').appendTo(p2);
        var img = $('<img/>').attr({ 'src': imgs[0].url, 'onerror': 'javascript:this.src="img/pic.png"' }).appendTo(p2);
        $('<img src="img/icon_play_2@2x.png" alt="" class="play">').appendTo(p2);
        p2.appendTo(a);
        var p3 = $('<p/>');
        $('<span/>').html(list[k].nickName).appendTo(p3);

        if (list[k].commentCount > 0) {
            $('<span>' + list[k].commentCount + '<img src="img/icon_comment.png" alt=""></span>').appendTo(p3);
        }
        p3.appendTo(a);
        a.appendTo(div);
        div.appendTo(news_list);
    }
}
