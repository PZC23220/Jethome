define(function(require, exports, module) {
    var materialGif = function() {
        ;
        ! function() {
            // 初始化GIF
            var material_gif = $('.material_gif');
            var gif_opa = $('.gif_opa');
            $.ajax({
                url: '/api/v1/gif/get',
                success: function(res) {
                    if (res.success) {
                        for (var i = 0; i < res.data.length; i++) {
                            var p = $('<p/>').attr({ 'data-id': list[i].aid, 'value': list[i].status }).addClass('gif_concainer');
                            var img = $('<img/>').attr('src', list[i].url).appendTo(p);
                            var span = $('<span/>');
                            if (list[i].status == 1) {
                                $('<input type="radio" value="0" checked>通过<input type="radio" value="1">不通过').appendTo(span);
                            } else {
                                $('<input type="radio" value="0">通过<input type="radio" value="1" checked>不通过').appendTo(span);
                            }
                            span.appendTo(p);
                            p.appendTo(material_gif);
                        }
                    }
                }
            });

            gif_opa.click(function() {
                var gif_concainer = $('.gif_concainer');
                gif_concainer.hide();
                console.log(gif_opa.val())
                if (gif_opa.val() == '通过') {
                    gif_concainer.each(function(idx, ele) {
                        if ($(this).attr('value') == '1') {
                            $(this).show();
                        }

                    });
                } else if (gif_opa.val() == '不通过') {
                    gif_concainer.each(function(idx, ele) {
                        if ($(this).attr('value') == '0') {
                            $(this).show();
                        }

                    });
                } else {
                    gif_concainer.show();
                }
            });

            $('input').on("click", function(){
                var aid = $(this).parents('p').attr('data-id');
                var status = $(this).val();
                $.ajax({
                    url: '/api/v1/gif/update',
                    data: {aid: aid,status: status},
                    success: function(res){
                        if(res.success){
                            alert('修改GIF状态成功');
                            location.reload();
                        }
                    }
                });
            })
        }();
    }
    exports.materialGif = materialGif;
});

//
