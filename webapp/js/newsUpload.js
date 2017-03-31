define(function(require, exports, module) {
    var newsUpload = function() {
        var upload_news = $('.upload_news');
        var upload_news_title = $('.upload_news_title');
        var upload_news_source = $('.upload_news_source');
        var upload_news_site = $('.upload_news_site');
        var upload_news_publishtime = $('.upload_news_publishtime');
        var table_newsupload_tbody = $('.table_newsupload').find('tbody');
        var add_imgs = $('.add_imgs');
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
        var category = $('.category');
        getCategorys();
        function getCategorys() {
            category.empty();
            for(var i=0;i<arrCategory.length;i++) {
                $('<option/>').html(arrCategory[i].channel).attr('data-id',arrCategory[i].cid).appendTo(category);
            }
        }
        getNewsupload();
        // 新闻上传
        function getNewsupload() {
            $.ajax({
                url: server_host + '/get_newsupload',
                success: function(res) {
                    var list = res;
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
    }

    // module.exports = textSea;
    exports.newsUpload = newsUpload;
});

//
