define(function(require, exports, module) {
    var commentAutomation = function() {
        var table_automation_tbody = $('.table_automation').find('tbody');
        var mould_content = $('.mould_content');
        var update_mould = $('.update_mould');
        var add_mould = $('.add_mould');
        var mould_add = $('.mould_add');
        var comment_li = $('.comment_li li');
        var comment_category = $('.comment_category');
        var mould_keywords = $('.mould_keywords');
        var reply_comment = $('.reply_comment');
        var category = $('.category');
        getCategorys();
        function getCategorys() {
            category.empty();
            $('<option/>').html('all').attr('data-id','all').appendTo(category);
            for(var i=0;i<arrCategory.length;i++) {
                $('<option/>').html(arrCategory[i].channel).attr('data-id',arrCategory[i].cid).appendTo(category);
            }
        }
        // 评论自动化
        automation(0);

        function automation(from) {
            $.ajax({
                url: '/commentTemplate_read?size=30&from=' + from,
                success: function(res) {
                    table_automation_tbody.empty();
                    console.log(res);
                    var list = res.data.data;
                    for (var i = 0; i < list.length; i++) {
                        createAutomation(list[i]);
                    }
                }
            });

        }

        function createAutomation(list) {
            var tr = $('<tr/>');
            var td1 = $('<td/>').html(list.id).appendTo(tr);
            transCategory(list.cid, list.id, tr);

            var td3 = $('<td/>').html(list.keywords).appendTo(tr);
            var td4 = $('<td/>').html(list.content).appendTo(tr);
            var td5 = $('<td/>').html('<a href="#">更改</a>').addClass('modify_automation').attr({ 'data-id': list.id, 'data-content': list.content }).appendTo(tr);
            var td6 = $('<td/>').html('<a href="#">删除</a>').addClass('del_automation').attr('data-id', list.id).appendTo(tr);
            tr.appendTo(table_automation_tbody);

        }

        // 删除评论模板
        table_automation_tbody.on('click', '.del_automation', function() {
            $.ajax({
                url: '/commentTemplate_delete?id=' + $(this).attr('data-id'),
                success: function(res) {
                    $('.del_success').show();
                    setTimeout(function() {
                        comment_li.removeClass('active');
                        comment_li[1].className = 'active';
                        automation();
                        $('.del_success').hide();
                    }, 2000);
                }
            });

        });

        // 修改评论模板
        table_automation_tbody.on('click', '.modify_automation', function() {
            mould_content.val($(this).attr('data-content'));
            mould_content.attr('data-id', $(this).attr('data-id'));
            update_mould.show();
            add_mould.hide();
            reply_comment.show();

        });

        update_mould.click(function() {
            if (mould_content.val()) {
                var data = {
                    cid: comment_category.find('option:selected').attr('data-id'),
                    keywords: mould_keywords.val(),
                    content: mould_content.val(),
                    id: mould_content.attr('data-id')
                }
                $.ajax({
                    url: '/commentTemplate_update',
                    type: 'POST',
                    data: JSON.stringify(data),
                    success: function(res) {
                        $('.modify_success').show();
                        setTimeout(function() {
                            comment_li.removeClass('active');
                            comment_li[1].className = 'active';
                            automation();
                            $('.modify_success').hide();
                            reply_comment.hide();
                        }, 2000);
                    }
                });
            }
        });
        // 添加评论模板
        add_mould.click(function() {
            if (mould_content.val()) {
                var data = {
                    cid: comment_category.find('option:selected').attr('data-id'),
                    keywords: mould_keywords.val(),
                    content: mould_content.val()
                }
                console.log(data);
                $.ajax({
                    url: 'commentTemplate_create',
                    type: 'POST',
                    data: JSON.stringify(data),
                    success: function(res) {
                        console.log(res);
                        $('.share_success').show();
                        setTimeout(function() {
                            comment_li.removeClass('active');
                            comment_li[1].className = 'active';
                            automation();
                            $('.share_success').hide();
                            reply_comment.hide();
                        }, 2000);
                    }
                });
            }
        });

        mould_add.click(function() {
            mould_content.val('');
            update_mould.hide();
            add_mould.show();
            reply_comment.show();
        });
        // 搜索
        $('.comment_category_sel').click(function() {
            table_automation_tbody.find('tr').hide().filter(":contains(" + $('.comment_category_sel').find('option:selected').html() + ")").show();
        });

        $('.search_comments').click(function() {
            if ($('.comment_keywords').val()) {
                table_automation_tbody.find('tr').hide().filter(":contains(" + $('.comment_keywords').val() + ")").show();
            } else {
                table_automation_tbody.find('tr').show()
            }

        });

        // 点击模板分页
        comment_li.on('click', function() {
            if ($(this).index() > 0 && $(this).index() < comment_li.length - 1) {
                $(this).siblings('li').removeClass('active');
                $(this).addClass('active');
                // var number = news_opa.val();
                // var idx = ($(this).index() - 1) * number;
                var idx = ($(this).index() - 1) * 30;
                console.log(idx);
                automation(idx);
            }
        });
    }

    // module.exports = textSea;
    exports.commentAutomation = commentAutomation;
});

//
