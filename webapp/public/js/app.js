define(function(require, exports, module) {
    var main_content = $('.main_content');
    var content_text;
    var page1 = function() {
        console.log('执行2');
        content_text = require('../html/commentContainer.html');
        content_text2 = require('../html/videoContainer.html');
        main_content.html(content_text + content_text2);
        $('#commentContainer').show();
        $('#videoContainer').hide();
        var newsAndVideo = require('./newsAndvideo.js');
        newsAndVideo.newsAndVideo();
    }
    var page2 = function() {
        require.async(['../html/commentContainer.html', '../html/videoContainer.html', 'newsAndvideo.js'], function(m_html1, m_html2, newsAndVideo){
            main_content.html(m_html1 + m_html2);
            $('#commentContainer').hide();
            $('#videoContainer').show();
            newsAndVideo.newsAndVideo();
        });
    }
    var page3 = function() {
        require.async(['../html/pushLog.html', 'pushLog.js'], function(m_html, m_js){
            main_content.html(m_html);
            m_js.pushLog();
        });
    }
    var page4 = function() {
        require.async(['../html/activetyComment.html', 'activetyComment.js'], function(m_html, activetyComment){
            main_content.html(m_html);
            activetyComment.activetyComment();
        });
    }
    var page5 = function() {
        require.async(['../html/switchActivitySplash.html', 'switchActivitySplash.js'], function(m_html, switchActivitySplash){
            main_content.html(m_html);
            switchActivitySplash.switchActivitySplash();
        });
    }
    var page6 = function() {
        require.async(['../html/switchActivityAppbottombar.html', 'switchActivityAppbottombar.js'], function(m_html, switchActivityAppbottombar){
            main_content.html(m_html);
            switchActivityAppbottombar.switchActivityAppbottombar();
        });
    }
    var page7 = function() {
        require.async(['../html/newsUpload.html', 'newsUpload.js'], function(m_html, newsUpload){
            main_content.html(m_html);
            newsUpload.newsUpload();
        });
    }
    var page8 = function() {
        require.async(['../html/commentAutomation.html', 'commentAutomation.js'], function(m_html, commentAutomation){
            main_content.html(m_html);
            commentAutomation.commentAutomation();
        });
    }
    var page9 = function() {
        require.async(['../html/headlineOptimize.html', 'headlineOptimize.js'], function(m_html, headlineOptimize){
            main_content.html(m_html);
            headlineOptimize.headlineOptimize();
        });
    }
    var page10 = function() {
        require.async(['../html/matchList.html', 'matchList.js'], function(m_html, matchList){
            main_content.html(m_html);
            matchList.matchList();
        });
    }
    var page11 = function() {
        require.async(['../html/specialConfiguration.html', 'specialConfiguration.js'], function(m_html, specialConfiguration){
            main_content.html(m_html);
            specialConfiguration.specialConfiguration();
        });
    }
    var page12 = function() {
        require.async(['../html/tabConfiguration.html', 'tabConfiguration.js'], function(m_html, tabConfiguration){
            main_content.html(m_html);
            tabConfiguration.tabConfiguration();
        });
    }

    exports.page1 = page1;
    exports.page2 = page2;
    exports.page3 = page3;
    exports.page4 = page4;
    exports.page5 = page5;
    exports.page6 = page6;
    exports.page7 = page7;
    exports.page8 = page8;
    exports.page9 = page9;
    exports.page10 = page10;
    exports.page11 = page11;
    exports.page12 = page12;
});
