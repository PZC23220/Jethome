define(function(require, exports, module) {
    var matchList = function() {
        var related_news = $('.related_news');
        var table_matchList_tbody = $('.table_matchList').find('tbody');
        var close_news = $('.close_news');
        var race_date = $('.race_date');
        var match_id = $('.match_id');
        var table_relatedNews_tbody = $('.table_relatedNews').find('tbody');
        var current_selection_match = $('.current_selection_match');
        var table_user_answer = $('.table_user_answer').find('tbody');
        var add_related_news = $('.add_related_news');
        var submit_wbc_comment = $('.submit_wbc_comment');
        var wbc_user_id = $('.wbc_user_id');
        var wbc_comment_content = $('.wbc_comment_content');
        var wbc_comment_likes = $('.wbc_comment_likes');
        var submit_wbc_comment = $('.submit_wbc_comment');
        var wbc_player = $('.wbc_player');
        var wbc_comment_id = $('.wbc_comment_id');
        var reply_comment = $('.reply_comment');
        var reply_comment2 = $('.reply_comment2');
        var reply_comment3 = $('.reply_comment3');
        var reply_comment4 = $('.reply_comment4');
        var reply_comment5 = $('.reply_comment5');
        var reply_comment6 = $('.reply_comment6');
        var loading = $('.loading');
        var push_sure = $('.push_sure');
        baseball_matchlist();
        // 获取比赛列表
        function baseball_matchlist() {
            // var option1 = appbtmbar_active.find('option');
            for (var k = 6; k < 24; k++) {
                var option = $('<option/>').attr('data-time', '2017/3/' + k).html('3月' + k + "日");
                option.appendTo(race_date)
            }
            $.ajax({
                url: 'http://api2.newsjet.io:8080/baseball/matchlist',
                success: function(res) {
                    console.log(res);
                    var list = res.data;
                    for (var i = 0; i < list.length; i++) {
                        createMatchlist(list[i]);
                    }
                }
            });

        }

        // 筛选比赛日期
        race_date.change(function() {
            if (race_date.val()) {
                var date = race_date.find('option:selected').attr('data-time');
                table_matchList_tbody.find('tr').hide().filter(":contains(" + date + ")").show();
            } else {
                table_matchList_tbody.find('tr').show();
            }
        });
        // 搜索比赛ID
        match_id.blur(function() {
            if (match_id.val()) {
                table_matchList_tbody.find('tr').hide();
                table_matchList_tbody.find('.m_id').filter(":contains(" + match_id.val() + ")").parents('tr').show();
            } else {
                table_matchList_tbody.find('tr').show();
            }
        });

        // 筛选答对数
        $('.correct_num').change(function() {
            if ($('.correct_num').val()) {
                table_user_answer.find('tr').hide();
                var date = $('.correct_num').find('option:selected').html();
                table_user_answer.find('.c_num').filter(":contains(" + $('.correct_num').val() + ")").parents('tr').show();
            } else {
                table_user_answer.find('tr').show();
            }
        });
        // 搜索用户ID
        $('.b_user_id').blur(function() {
            if ($('.b_user_id').val()) {
                table_user_answer.find('tr').hide();
                table_user_answer.find('.user_id').filter(":contains(" + $('.b_user_id').val() + ")").parents('tr').show();
            } else {
                table_user_answer.find('tr').show();
            }
        });

        function createMatchlist(list) {
            var tr = $('<tr/>');
            var td1 = $('<td/>').html('<a href="#">' + list.id + '</a>').addClass('m_id').attr('data-id', list.id).appendTo(tr);
            var td2 = $('<td/>').html(getTime(list.starttime + 60 * 60 * 1000)).appendTo(tr);
            var td3 = $('<td/>').html(list.detaildesc).appendTo(tr);
            var td4 = $('<td/>').html('<a href="#">' + list.teamonedesc + '</a>').addClass('team_one').attr({ 'data-info': JSON.stringify(list.teamOnePlayers), 'data-id': list.teamoneid }).appendTo(tr);
            var td5 = $('<td/>').html('<a href="#">' + list.teamtwodesc + '</a>').addClass('team_two').attr({ 'data-info': JSON.stringify(list.teamTwoPlayers), 'data-id': list.teamoneid }).appendTo(tr);
            if (list.status == 0) {
                var td11 = $('<td/>').html('未开始').appendTo(tr);
            } else if (list.status == 1) {
                var td11 = $('<td/>').html('进行中').appendTo(tr);
            } else {
                var td11 = $('<td/>').html('已结束').appendTo(tr);
            }

            var td7 = $('<td/>').html('<a href="#">查看</a>').addClass('a_question').attr('data-info', JSON.stringify(list)).appendTo(tr);
            var td8 = $('<td/>').html('<a href="#">筛选</a>').addClass('r_news').attr('data-info', JSON.stringify(list)).appendTo(tr);
            var td9 = $('<td/>').html('<a href="#">编辑</a>').addClass('t_answer').attr('data-info', JSON.stringify(list)).appendTo(tr);
            var td10 = $('<td/>').html('<a href="#">查看</a>').addClass('u_answer').attr('data-info', JSON.stringify(list)).appendTo(tr);
            var td11 = $('<td/>').html('<a href="#">推送</a>').addClass('baseball_push').attr('data-id', list.id).appendTo(tr);
            tr.appendTo(table_matchList_tbody);
        }
        close7.click(function() {
            reply_comment4.hide();
            $('.content').empty();
            $('.choice1').empty();
            $('.choice2').empty();
            $('.choice3').empty();
        });
        
        close_news.click(function() {
            reply_comment.hide();
        });

        // 推送棒球比赛
        table_matchList_tbody.on('click', '.baseball_push', function() {
            $('.match_push_id').html($(this).attr('data-id'));
            push_sure.show();
        });

        // 确认推送
        $('.sure_push_baseball').click(function() {
            if (c) {
                c = false;
                if ($('.push_match_title').val() && !$('.push_match_desc').val()) {
                    pushBaseball(5, $('.match_push_id').html(), $('.push_match_title').val());
                } else if ($('.push_match_title').val() && $('.push_match_desc').val()) {
                    pushBaseball(6, $('.match_push_id').html(), $('.push_match_title').val(), $('.push_match_desc').val());
                }
            }


        });

        function pushBaseball(pushContentType, pushTargetId, title, desc) {
            var url_ = server_host + '/notification_baseball?pushContentType=' + pushContentType + '&pushTargetId=' + pushTargetId + '&title=' + title;
            if (desc) {
                url_ += '&body=' + desc;
            }
            console.log(url_)
            $.ajax({
                url: url_,
                beforeSend: function() {
                    loading.show();
                },
                success: function(res) {
                    console.log(res);
                    loading.hide();
                    $('.success_push').show();
                    os.removeAttr("checked");
                    setTimeout(function() {
                        $('.success_push').hide();
                        push_sure.hide();
                        window.location.reload();
                    }, 2000);
                    c = true;
                }
            });
        }

        // 查看比赛相关新闻
        table_matchList_tbody.on('click', '.r_news', function() {
            reply_comment.show();
            var info = JSON.parse($(this).attr('data-info'));
            add_related_news.attr('data-info', $(this).attr('data-info'));
            console.log(info);
            current_selection_match.val(getTime(info.starttime + 60 * 60 * 1000) + '  ' + info.teamonedesc + '-' + info.teamtwodesc);
            if (info.newsids) {
                table_relatedNews_tbody.empty();
                var newsid = JSON.parse(info.newsids);
                console.log(newsid);
                if (newsid.newsid) {
                    get_news(newsid.newsid, $(this).attr('data-info'), newsid.top, newsid.hidden);
                }
                if (newsid.videoid) {
                    get_videos(newsid.videoid, $(this).attr('data-info'), newsid.top, newsid.hidden);
                }
            }

        });
        table_matchList_tbody.on('click', '.a_prize', function() {
            reply_comment2.show();
        });
        // 获取已有问题
        table_matchList_tbody.on('click', '.a_question', function() {
            var matchJson = JSON.parse($(this).attr('data-info'));
            $(reply_comment3).attr("matchID", matchJson.id);
            $(reply_comment3).find('.addQuestionsButton').attr('data-info', JSON.stringify(matchJson));
            console.log("match id = " + matchJson.id);
            reply_comment3.show();
            $.ajax({
                url: 'http://api2.newsjet.io:8080/baseball/lottery?targettype=1&targetid=' + matchJson.id,
                // async: false,
                success: function(res) {
                    console.log(res);
                    if (res.status == 200 && res.data) {
                        $(".offline").attr("data-info", JSON.stringify(res.data));
                        console.log("question = " + res.data.question);
                        $(reply_comment3).attr('data-info', JSON.parse(res.data.id));
                        $(reply_comment3).attr('lottery-id', JSON.parse(res.data.id));
                        var questions = JSON.parse(res.data.question);
                        for (var i = 0; i < 5; i++) {
                            if (!questions[i]) {
                                break;
                            }
                            console.log(questions[i].question);
                            console.log((questions[i].option[0].split(":"))[1]);
                            $(reply_comment3).find('.question').eq(i).find('.content').val(questions[i].question);
                            if (questions[i].option[0]) {
                                $(reply_comment3).find('.question').eq(i).find('.choice1').val((questions[i].option[0].split(":"))[1]);
                            }
                            if (questions[i].option[1]) {
                                $(reply_comment3).find('.question').eq(i).find('.choice2').val((questions[i].option[1].split(":"))[1]);
                            }
                            if (questions[i].option[2]) {
                                $(reply_comment3).find('.question').eq(i).find('.choice3').val((questions[i].option[2].split(":"))[1]);
                            }
                        }
                        var jsonarr = eval('(' + res.data.award + ')');
                        console.log(jsonarr);
                        $(reply_comment3).find('div#awardContainer .award1').val(jsonarr[0].award);
                        $(reply_comment3).find('div#awardContainer .award2').val(jsonarr[1].award);
                        $(reply_comment3).find('div#awardContainer .award3').val(jsonarr[2].award);
                    } else {
                        $(reply_comment3).removeAttr('lottery-id');
                        $(reply_comment3).find('.question').find('.content').val("");
                        $(reply_comment3).find('.question').find('.choice1').val("");
                        $(reply_comment3).find('.question').find('.choice2').val("");
                        $(reply_comment3).find('.question').find('.choice3').val("");
                    }
                }
            });
        });
        // 设置正确选项
        table_matchList_tbody.on('click', '.t_answer', function() {
            $.ajax({
                url: 'http://api2.newsjet.io:8080/baseball/lottery?targettype=1&targetid=' + JSON.parse($(this).attr("data-info")).id,
                async: false,
                success: function(res) {
                    console.log("res = " + JSON.stringify(res));
                    if (res.status == 200) {
                        $(".submitAnswer").attr("data-info", JSON.stringify(res.data));
                        console.log("question = " + res.data.question);
                        $(reply_comment3).attr('data-info', JSON.parse(res.data.id));
                        $(reply_comment3).attr('lottery-id', JSON.parse(res.data.id));
                        var questions = JSON.parse(res.data.question);
                        for (var i = 0; i < 5; i++) {
                            if (!questions[i]) {
                                break;
                            }
                            console.log(questions[i].question);
                            $(reply_comment4).find('.q_content').eq(i).find('.content').val(questions[i].question);
                            $(reply_comment4).find('.q_content').eq(i).find('.choice1').val(questions[i].option[0]);
                            $(reply_comment4).find('.q_content').eq(i).find('.choice2').val(questions[i].option[1]);
                            $(reply_comment4).find('.q_content').eq(i).find('.choice3').val(questions[i].option[2]);
                        }
                        var jsonarr = eval('(' + res.data.award + ')');
                        console.log(jsonarr);
                        $(reply_comment4).find('div#awardContainer .award1').val(jsonarr[0].award);
                        $(reply_comment4).find('div#awardContainer .award2').val(jsonarr[1].award);
                        $(reply_comment4).find('div#awardContainer .award3').val(jsonarr[2].award);
                        console.log(res.data.answer);
                        var answerArr = res.data.answer.split(",");
                        for (var i = 0; i < answerArr.length; i++) {
                            $("input[name='q" + (answerArr[i].split(':')[0]) + "']").eq(answerArr[i].split(':')[1] - 1).attr("checked", true);
                        }
                    } else {
                        $(reply_comment4).removeAttr('lottery-id');
                        $(reply_comment4).find('.q_content').find('.content').val("");
                        $(reply_comment4).find('.q_content').find('.choice1').val("");
                        $(reply_comment4).find('.q_content').find('.choice2').val("");
                        $(reply_comment4).find('.q_content').find('.choice3').val("");
                    }
                }
            });
            reply_comment4.show();
        });


        function createUserAnswers(item) {
            var tr = $('<tr/>');
            var td1 = $('<td/>').html(item.id).addClass('n_id').appendTo(tr);
            var td2 = $('<td/>').html(getTime(item.updatetime)).appendTo(tr);
            var td3 = $('<td/>').html(item.uid).addClass('user_id').appendTo(tr);
            var td4 = $('<td/>').html(item.answer).appendTo(tr);
            var td5 = $('<td/>').html(item.correctnum).addClass('c_num').appendTo(tr);
            var td6 = $('<td/>').html(item.wrongnum).appendTo(tr);
            var td7 = $('<td/>').addClass('set_arward').attr('data-info', JSON.stringify(item))
            if (item.award) {
                if (item.award == 1) {
                    td7.html('<span>一等奖</span>    <a href="#" class="two_prize">二等奖</a>    <a href="#" class="three_prize">三等奖</a>');
                } else if (item.award == 2) {
                    td7.html('<a href="#" class="first_prize">一等奖</a>    <span>二等奖</span>    <a href="#" class="three_prize">三等奖</a>');
                } else {
                    td7.html('<a href="#" class="first_prize">一等奖</a>    <a href="#" class="two_prize">二等奖</a>    <span>三等奖</span>');
                }
            } else {
                td7.html('<a href="#" class="first_prize">一等奖</a>    <a href="#" class="two_prize">二等奖</a>    <a href="#" class="three_prize">三等奖</a>');
            }
            td7.appendTo(tr);
            tr.appendTo(table_user_answer);
        }

        // 设置奖项
        table_user_answer.on('click', '.first_prize', function() {
            lotterycommitaward($(this).parents('td').attr('data-info'), 1);
        });
        table_user_answer.on('click', '.two_prize', function() {
            lotterycommitaward($(this).parents('td').attr('data-info'), 2);
        });
        table_user_answer.on('click', '.three_prize', function() {
            lotterycommitaward($(this).parents('td').attr('data-info'), 3);
        });
        // 添加获奖用户
        $('.set_award_user').click(function() {
            var info = JSON.parse($(this).attr('data-info'));
            console.log(info);
            var data = {
                "uid": $('.set_award_user_id').find('option:selected').attr('data-userinfo'), //必填项
                "did": "abc-abc", //必填项
                "lotteryid": info.lotteryid, //必填项
                "targetid": info.targetid, //必填项
                "targettype": 1, //必填项
                "answer": "1:1", //必填项
            }
            console.log(data);
            $.ajax({
                url: 'http://api2.newsjet.io:8080/baseball/lotterycommit',
                type: 'POST',
                data: JSON.stringify(data),
                success: function(res) {
                    console.log(res);
                    $('.modify_success').show();
                    getuseranswerlist(info.targetid)
                    setTimeout(function() {
                        $('.modify_success').hide();
                    }, 2000);
                }
            });

        });

        function lotterycommitaward(info, num) {
            var data = JSON.parse(info);
            $.ajax({
                url: 'http://api2.newsjet.io:8080/baseball/lotterycommitaward?uid=' + data.uid + '&targettype=1&targetid=' + data.targetid + '&lotteryid=' + data.lotteryid + '&award=' + num,
                success: function(res) {
                    console.log(res);
                    $('.share_success').show();
                    getuseranswerlist(data.targetid)
                    setTimeout(function() {
                        $('.share_success').hide();
                    }, 2000);
                }
            });
        }

        // 获取用户答案列表
        table_matchList_tbody.on('click', '.u_answer', function() {
            var info = JSON.parse($(this).attr('data-info'));
            console.log(info);
            current_selection_match.val(getTime(info.starttime + 60 * 60 * 1000) + '  ' + info.teamonedesc + '-' + info.teamtwodesc);
            reply_comment5.show();
            getuseranswerlist(JSON.parse($(this).attr("data-info")).id);
        });

        function getuseranswerlist(id) {
            table_user_answer.empty();
            $.ajax({
                url: "http://api2.newsjet.io:8080/baseball/lotteryanswer?targettype=1&targetid=" + id,
                success: function(res) {
                    console.log(res);
                    $('.set_award_user').attr('data-info', JSON.stringify((res.data)[0]));
                    for (var j = 0; j < arr10.length; j++) {
                        $('<option/>').val(arr10[j].nickname).html(arr10[j].nickname).attr('data-userinfo', arr10[j].id).appendTo($('.set_award_user_id'));
                    }
                    if (res.status == 200) {
                        for (var i = 0; i < res.data.length; i++) {
                            // console.log((res.data)[i]);
                            createUserAnswers((res.data)[i]);
                        }
                    }
                }
            });
        }
        // 获取新闻及视频
        function get_news(ids, info, top, hidden) {
            $.ajax({
                url: 'http://api2.newsjet.io:8080/news/gets?ids=' + ids,
                success: function(res) {
                    var list = res.data;

                    for (var i in list) {
                        createnewslist(list[i], 'news', info, top, hidden);
                    }
                }
            });

        }

        function get_videos(ids, info, top, hidden) {
            $.ajax({
                url: 'http://api2.newsjet.io:8080/video/gets?ids=' + ids,
                success: function(res) {
                    var list = res.data;
                    console.log(list);
                    add_related_news.attr('data-info', info);
                    for (var i in list) {
                        createnewslist(list[i], 'video', info, top, hidden);
                    }
                }
            });

        }

        function createnewslist(list, type, info, top, hidden) {
            var tr = $('<tr/>');
            var td1 = $('<td/>').html(list.id).addClass('n_id').appendTo(tr);
            if (type == "news") {
                var td2 = $('<td/>').html('新闻').appendTo(tr);
            } else {
                var td2 = $('<td/>').html('视频').appendTo(tr);
            }
            var td3 = $('<td/>').html(list.title).appendTo(tr);
            // var td6 = $('<td/>').html('<a href="#" data-id="' + list.id + '">置顶</a>').addClass('news_top').attr('data-info', info).appendTo(tr);
            if (list.id == top) {
                var td6 = $('<td/>').html('<span>置顶</span>').appendTo(tr);
            } else {
                var td6 = $('<td/>').html('<a href="#" data-id="' + list.id + '">置顶</a>').addClass('news_top').attr('data-info', info).appendTo(tr);
            }
            if (list.id == hidden) {
                var td7 = $('<td/>').html('<span>隐藏</span>').appendTo(tr);
            } else {
                var td7 = $('<td/>').html('<a href="#" data-id="' + list.id + '">隐藏</a>').addClass('news_hidden').attr('data-info', info).appendTo(tr);
            }
            tr.appendTo(table_relatedNews_tbody);

        }

        // 添加新闻
        add_related_news.click(function() {
            var related_news_id = $('.related_news_id').val();
            var related_video_id = $('.related_video_id').val();
            var data = JSON.parse($(this).attr('data-info'));
            var newsids = JSON.parse(data.newsids);
            if (related_news_id) {
                newsids.newsid.push(related_news_id);
            }
            if (related_video_id) {
                newsids.videoid.push(related_video_id);
            }
            if ($('.set_top').is(':checked')) {
                var arr = [];
                if (related_news_id) {
                    arr.push(related_news_id);
                } else if (related_video_id) {
                    arr.push(related_video_id);
                }
                newsids.top = arr;
            }
            data.newsids = JSON.stringify(newsids);
            console.log(data);
            $.ajax({
                url: 'http://api2.newsjet.io:8080/baseball/matchUpdateDetail',
                type: 'POST',
                data: JSON.stringify(data),
                success: function(res) {
                    console.log(res);
                    add_related_news.attr('data-info', JSON.stringify(data));
                    $('.related_news_id').val('');
                    $('.related_video_id').val('');
                    $('.set_top').attr('checked', false);
                    $('.share_success').show();
                    table_relatedNews_tbody.empty();
                    if (newsids.newsid) {
                        get_news(newsids.newsid, JSON.stringify(data), arr);
                    }
                    if (newsids.videoid) {
                        get_videos(newsid.videoid, JSON.stringify(data), arr);
                    }
                    setTimeout(function() {
                        $('.share_success').hide();
                    }, 2000);

                }
            });
        });
        // 置顶新闻
        table_relatedNews_tbody.on('click', '.news_top', function() {
            var data = JSON.parse($(this).attr('data-info'));
            var newsids = JSON.parse(data.newsids);
            var arr = [];
            arr.push($(this).find('a').attr('data-id'));
            newsids.top = arr;
            data.newsids = JSON.stringify(newsids);
            console.log(data);
            $.ajax({
                url: 'http://api2.newsjet.io:8080/baseball/matchUpdateDetail',
                type: 'POST',
                data: JSON.stringify(data),
                success: function(res) {
                    console.log(res);
                    $('.modify_success').show();
                    table_relatedNews_tbody.empty();
                    if (newsids.newsid) {
                        get_news(newsids.newsid, JSON.stringify(data), arr, newsids.hidden);
                    }
                    if (newsids.videoid) {
                        get_videos(newsid.videoid, JSON.stringify(data), arr, newsids.hidden);
                    }
                    setTimeout(function() {
                        $('.modify_success').hide();
                    }, 2000);
                }
            });

        });

        // 隐藏新闻
        table_relatedNews_tbody.on('click', '.news_hidden', function() {
            var data = JSON.parse($(this).attr('data-info'));
            var newsids = JSON.parse(data.newsids);
            var arr = [];
            arr.push($(this).find('a').attr('data-id'));
            newsids.hidden = arr;
            data.newsids = JSON.stringify(newsids);
            console.log(data);
            $.ajax({
                url: 'http://api2.newsjet.io:8080/baseball/matchUpdateDetail',
                type: 'POST',
                data: JSON.stringify(data),
                success: function(res) {
                    console.log(res);
                    $('.del_success').show();
                    table_relatedNews_tbody.empty();
                    if (newsids.newsid) {
                        get_news(newsids.newsid, JSON.stringify(data), newsids.top, hidden);
                    }
                    if (newsids.videoid) {
                        get_videos(newsid.videoid, JSON.stringify(data), newsids.top, hidden);
                    }
                    setTimeout(function() {
                        $('.del_success').hide();
                    }, 2000);
                }
            });

        });
        // 提交正确答案
        $('.submitAnswer').click(function() {
            var postData = JSON.parse($(this).attr("data-info"));
            var answers = [];
            for (var i = 1; i <= 5; i++) {
                $("input[name='q" + i + "']").each(function(index) {
                    console.log(index);
                    console.log(this.checked);
                    if (this.checked == true) {
                        answers.push(i + ":" + (index + 1));
                        console.log(answers);
                    }
                });
            }
            postData.answer = answers.toString();
            console.log("post data = " + JSON.stringify(postData));
            $.ajax({
                url: 'http://api2.newsjet.io:8080/baseball/lotteryupdate?targettype=1&targetid=' + postData.targetid,
                type: 'POST',
                data: JSON.stringify(postData),
                success: function(res) {
                    console.log(res);
                    $.ajax({
                        url: "http://api2.newsjet.io:8080/baseball/lotteryanswercheck?targettype=1&targetid=" + postData.targetid,
                        success: function(res) {
                            console.log(res);
                            $('.del_success').show();
                            setTimeout(function() {
                                $('.del_success').hide();
                            }, 2000);
                        }
                    });
                }
            });
        });
        // 添加竞猜题目
        $('.addQuestionsButton').click(function() {
            var questionsJson = [];
            var questions = $("#lotteryContainer .question");
            console.log("questions#length = " + questions.length);
            var matchID = JSON.parse($(this).attr("data-info")).id;
            console.log("match id = " + matchID);
            questions.each(function(index) {
                var content = $(this).find(".content").val();
                if (content) {

                    var choice1 = $(this).find(".choice1").val();
                    var choice2 = $(this).find(".choice2").val();
                    var choice3 = $(this).find(".choice3").val();
                    var options = ["1:" + choice1];
                    if (choice2 != "") {
                        options.push("2:" + choice2);
                    }
                    if (choice3 != "") {
                        options.push("3:" + choice3);
                    }
                    questionsJson.push({
                        "id": index + 1,
                        "question": content,
                        "option": options
                    });
                }
            });
            console.log("question json = " + JSON.stringify(questionsJson));

            var award = [];
            var str = '<br>・';
            award.push({
                "id": 1,
                "award": $("#lotteryContainer .award1").val()
            });
            award.push({
                "id": 2,
                "award": $("#lotteryContainer .award2").val()
            });
            award.push({
                "id": 3,
                "award": $("#lotteryContainer .award3").val()
            });
            str += $("#lotteryContainer .award1").val() + '(1人様)<br>・' + $("#lotteryContainer .award2").val() + '(2人様)<br>・' + $("#lotteryContainer .award3").val() + '(3人様)';
            console.log("award = " + JSON.stringify(award));

            var postData = {};
            postData.targettype = 1;
            postData.targetid = matchID;
            postData.question = questionsJson;
            postData.active = 1;
            postData.award = award;
            postData.answer = "";
            postData.detaildesc = str;

            if (reply_comment3.attr("lottery-id")) {
                postData.id = reply_comment3.attr("lottery-id");
            }
            console.log("post data = " + JSON.stringify(postData));

            $.ajax({
                url: 'http://api2.newsjet.io:8080/baseball/lotteryupdate',
                type: 'POST',
                data: JSON.stringify(postData),
                success: function(res) {
                    console.log(res);
                    $('.share_success').show();
                    setTimeout(function() {
                        $('.share_success').hide();
                    }, 2000);
                }
            });
        });

        // 竞猜下线
        $(".offline").click(function() {
            var postData = JSON.parse($(".offline").attr("data-info"));
            postData.active = 0;
            console.log(postData);
            $.ajax({
                url: 'http://api2.newsjet.io:8080/baseball/lotteryupdate',
                type: 'POST',
                data: JSON.stringify(postData),
                success: function(res) {
                    console.log(res);
                    $('.modify_success').show();
                    setTimeout(function() {
                        // alert(1111);
                        $('.modify_success').hide();
                    }, 2000);
                }
            });
        });

        // 比赛评论
        table_matchList_tbody.on('click', '.m_id', function() {
            wbc_comment_id.html('  ' + $(this).siblings('.team_one').html() + '--' + $(this).siblings('.team_two').html());
            reply_comment6.show();
            wbc_player.attr('disabled', 'disabled');
            submit_wbc_comment.attr({ 'data-id': $(this).attr('data-id'), 'data-type': 1 });
        });

        // 球队球员评论
        table_matchList_tbody.on('click', '.team_one,.team_two', function() {
            wbc_comment_id.html('   ' + $(this).html());
            reply_comment6.show();
            wbc_player.removeAttr('disabled');
            wbc_player.empty();
            $('<option/>').html('').appendTo(wbc_player);
            var players = JSON.parse($(this).attr('data-info'));
            for (var i in players) {
                $('<option/>').html(players[i].name).attr('data-id', players[i].id).appendTo(wbc_player);
            }
            // baseball_team($(this).attr('data-id'));
            submit_wbc_comment.attr({ 'data-id': $(this).attr('data-id'), 'data-type': 2 });
        });

        // function baseball_team(id) {
        //     $.ajax({
        //         url: 'http://api2.newsjet.io:8080/baseball/team?id=' + id,
        //         success: function(res) {
        //             console.log(res);
        //             for(var i=0;i<)
        //         }
        //     });

        // }

        // 提交评论
        submit_wbc_comment.click(function() {
            if (wbc_comment_content.val()) {
                if (wbc_player.find('option:selected').html() != '') {
                    baseball_postsave(wbc_user_id.find('option:selected').attr('data-userinfo'), 3, wbc_player.find('option:selected').attr('data-id'), wbc_comment_content.val());
                } else {

                    baseball_postsave(wbc_user_id.find('option:selected').attr('data-userinfo'), $(this).attr('data-type'), $(this).attr('data-id'), wbc_comment_content.val());
                }
                // console.log(wbc_comment_likes.val());
            } else {
                $('.tips_success').show();
                setTimeout(function() {
                    $('.tips_success').hide();
                }, 2000);
            }

        });

        function baseball_postsave(userInfo, targettype, targetid, content) {
            var data = {
                "uid": JSON.parse(userInfo).id, // 必填项.
                "did": "abcd", // 必填项.
                "nickname": JSON.parse(userInfo).nickname, // 必填项.
                "portrait": JSON.parse(userInfo).portrait, // 必填项. user portrait
                "targettype": targettype, // 必填项. 1:match;2:team;3:player
                "targetid": targetid, // 必填项. match id/team id/player id
                "content": content, // 必填项. post content
                "floor": 0, // 必填项. 当前版本填写0
                "reference": 0, // 必填项. 当前版本填写0
                // "likes": likes,
                "updatetime": new Date(), // 必填项. 当前创建的时间戳
                "active": 1 // 必填项. 1:active;
            }
            console.log(data);
            $.ajax({
                url: 'http://api2.newsjet.io:8080/baseball/postsave',
                type: 'POST',
                data: JSON.stringify(data),
                success: function(res) {
                    console.log(res);
                    $('.del_success').show();
                    setTimeout(function() {
                        wbc_user_id.val('');
                        wbc_comment_content.val('');
                        $('.del_success').hide();
                        reply_comment6.hide();
                    }, 2000);
                }
            });

        }
    }

    // module.exports = textSea;
    exports.matchList = matchList;
});

//
