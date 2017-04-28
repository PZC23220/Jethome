;
(function() {

    // 获取标签
    var tips = document.querySelectorAll('.tips');
    var inputs = document.querySelectorAll('input');
    var login = document.getElementById('login');
    var remember = document.querySelector('.remember');
    var save_img = document.querySelector('.save_img');
    var download = document.querySelector('.download');

    //读取本地存储
    var obj = localStorage.getItem('username');
    if (obj) {
        obj = JSON.parse(obj);
        inputs[0].value = 'newsJet';
        inputs[1].value = 'newsJet2016';
    }

    var c = true;
    remember.onclick = function() {
            if (this.checked) {
                save_img.classList.remove('nochecked');
                c = false;

            } else {
                save_img.classList.add('nochecked');
                c = true;
            }
        }
        // 验证登录
    login.onclick = function() {
    	submit();
    }

    document.onkeydown = function(event) {　　
        if (event.keyCode == 13) //回车键的键值为13
        　　　　 submit();　　
	};

	function submit() {

        if (a & b) {
            window.open('./index.html', '_self');
            sessionStorage.setItem('username', 'newsJet');
            if (c) {
                var obj = {
                    'username': 'newsJet',
                    'password': 'newsJet2016'
                }
                localStorage.setItem('username', JSON.stringify(obj));
            }
        } else {
            alert('登录失败！请确认您的帐号密码是否正确');
        }
	}

    var a = b = true;

    if (window.innerHeight <= 750) {
        download.classList.add('min');
    } else {
        download.classList.remove('min');
    }

    // 验证用户名、密码、验证码是否为空
    inputs[0].onblur = function() {
        if (this.value == '') {
            tips[0].style.display = 'block';
            a = false;
        }
    }

    inputs[0].onfocus = function() {
        tips[0].style.display = 'none';
        tips[1].style.display = 'none';
    }

    inputs[1].onblur = function() {
        if (this.value == '') {
            tips[2].style.display = 'block';
            b = false;
        }
    }

    inputs[1].onfocus = function() {
            tips[2].style.display = 'none';
            tips[3].style.display = 'none';
        }
        // 验证用户名、密码、验证码是否正确
    inputs[0].onblur = function() {
        if (this.value == 'newsJet') {
            a = true;
            tips[1].style.display = 'none';
        } else {
            tips[1].style.display = 'block';
        }
    }

    inputs[1].onblur = function() {
        if (this.value == 'newsJet2016') {
            b = true;
            tips[3].style.display = 'none';
        } else {
            tips[3].style.display = 'block';
        }
    }

})();
