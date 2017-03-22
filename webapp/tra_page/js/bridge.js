// 与客户端交互
var JSBridge = {
    nativeLogin: function(uid,did) {
        // alert(11111);
        // alert(uid);
        submitlottery(uid,did);
    },
    nativeComment: function() {
        // alert(targetid);
       getComment();
    }
};
