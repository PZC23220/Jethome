define(function(require, exports) {
    var main_content = $('.main_content');
    var content_text;
    var page1 = function() {
        content_text = require('../html/commentContainer.html');
        content_text2 = require('../html/videoContainer.html');
        main_content.html(content_text + content_text2);
        $('#commentContainer').show();
        $('#videoContainer').hide();
        var newsAndVideo = require('./newsAndvideo.js');
        newsAndVideo.newsAndVideo();
    }
    var page2 = function() {
        content_text = require('../html/commentContainer.html');
        content_text2 = require('../html/videoContainer.html');
        main_content.html(content_text + content_text2);
        $('#commentContainer').hide();
        $('#videoContainer').show();
        var newsAndVideo = require('./newsAndvideo.js');
        newsAndVideo.newsAndVideo();
    }
    var page3 = function() {
        content_text = require('../html/pushLog.html');
        main_content.html(content_text);
        var pushLog = require('./pushLog.js');
        pushLog.pushLog();
    }
    var page4 = function() {
        content_text = require('../html/activetyComment.html');
        main_content.html(content_text);
        var activetyComment = require('./activetyComment.js');
        activetyComment.activetyComment();
    }
    var page5 = function() {
        content_text = require('../html/switchActivitySplash.html');
        main_content.html(content_text);
        var switchActivitySplash = require('./switchActivitySplash.js');
        switchActivitySplash.switchActivitySplash();
    }
    var page6 = function() {
        content_text = require('../html/switchActivityAppbottombar.html');
        main_content.html(content_text);
        var switchActivityAppbottombar = require('./switchActivityAppbottombar.js');
        switchActivityAppbottombar.switchActivityAppbottombar();
    }
    var page7 = function() {
        content_text = require('../html/newsUpload.html');
        main_content.html(content_text);
        var newsUpload = require('./newsUpload.js');
        newsUpload.newsUpload();
    }
    var page8 = function() {
        content_text = require('../html/commentAutomation.html');
        main_content.html(content_text);
        var commentAutomation = require('./commentAutomation.js');
        commentAutomation.commentAutomation();
    }
    var page9 = function() {
        content_text = require('../html/headlineOptimize.html');
        main_content.html(content_text);
        var headlineOptimize = require('./headlineOptimize.js');
        headlineOptimize.headlineOptimize();
    }
    var page10 = function() {
        content_text = require('../html/matchList.html');
        main_content.html(content_text);
        var matchList = require('./matchList.js');
        matchList.matchList();
    }
    var page11 = function() {
        content_text = require('../html/specialConfiguration.html');
        main_content.html(content_text);
        var specialConfiguration = require('./specialConfiguration.js');
        specialConfiguration.specialConfiguration();
    }
    var page12 = function() {
        content_text = require('../html/tabConfiguration.html');
        main_content.html(content_text);
        var tabConfiguration = require('./tabConfiguration.js');
        tabConfiguration.tabConfiguration();
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
