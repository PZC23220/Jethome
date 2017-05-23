define(function(require, exports, module) {
    var materialGif = function() {
        var material_gif = $('.material_gif');
        var gif_opa = $('.gif_opa');
        getGif(0);
        function getGif(num,status) {
            console.log(status)
            $.ajax({
                url: '/select_gif',
                data:{start: num,status: status},
                success: function(res) {
                    console.log(res);
                    material_gif.empty();
                    for (var i = 0; i < res.length; i++) {
                        var p = $('<p/>').attr({ 'data-id': res[i].aid, 'value': res[i].status }).addClass('gif_concainer');
                        var img = $('<img/>').attr('src', res[i].url).appendTo(p);
                        var span = $('<span/>');
                        if (res[i].status == 0) {
                            $('<span><input type="radio" value="0" name="' + res[i].aid + '" checked>不通过&nbsp;&nbsp;<input type="radio" value="1" name="' + res[i].aid + '">通过</span>').appendTo(p);
                        } else {
                            $('<span><input type="radio" value="0" name="' + res[i].aid + '">不通过&nbsp;&nbsp;<input type="radio" value="1" name="' + res[i].aid + '" checked>通过</span>').appendTo(p);
                        }
                        p.appendTo(material_gif);
                    }
                }
            });
        }

        gif_opa.change(function() {
            var gif_concainer = $('.gif_concainer');
            if (gif_opa.find('option:selected').html() == '通过') {
                getGif(0,1);
            } else if (gif_opa.find('option:selected').html() == '不通过') {
                getGif(0,0);
            } else {
                getGif(0);
            }
            $('.gif_li').find('li').removeClass('active');
            $('.gif_li').find('li').eq(1).addClass('active');
        });

        material_gif.on("click", 'input', function() {
            var aid = $(this).parents('p').attr('data-id');
            var status = $(this).val();
            $.ajax({
                url: '/update_gif',
                data: { aid: aid, status: status },
                success: function(res) {
                    alert('修改GIF状态成功');
                }
            });
        });

        // 点击分页
        $('.gif_li').on('click', 'li', function() {
            $(this).siblings('li').removeClass('active');
            $(this).addClass('active');
            var num = $(this).find('a').html() - 1;
            var status = gif_opa.find('option:selected').attr('value');
            getGif(num*50,status);
        });

        // 点击查看gif
        material_gif.on('click','img',function(){
            console.log($(this).attr('src'));
            window.open($(this).attr('src')); 
        });
    };
    exports.materialGif = materialGif;
});
