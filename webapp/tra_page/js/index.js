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
			window.location.href="newsjetjsbridge://{'method':'clickImage','images':[" + images + "],'index':'" + this.getAttribute('index') + "'}";
		};
	}
	document.addEventListener('DOMSubtreeModified',function(){
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
		

	},false);
}
