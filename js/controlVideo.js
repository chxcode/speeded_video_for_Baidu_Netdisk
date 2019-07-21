
chrome.runtime.onMessage.addListener(//监听扩展程序进程或内容脚本发送请求的请求
    function (request, sender, sendResponse) {
        if (request.action == "send") {
            //console.log("开始执行")
            var speedNum = request.keyword;
            var isExixtScript = document.getElementById('speed-video-js');
            if (isExixtScript != null) {
            	$("#speed-video-js").remove();
            }
            var data = document.createAttribute("data");
			var script = document.createElement('script');
			var id = document.createAttribute("id");
			id.value = "speed-video-js";
			data.value = parseFloat(speedNum).toFixed(2);
			script.innerHTML = "videojs.getPlayers(\"video-player\").html5player.tech_.setPlaybackRate("+speedNum+");";
			script.setAttributeNode(id);
			script.setAttributeNode(data);
			document.body.appendChild(script);
			sendResponse({state:'变速成功'})
        }
        if (request.action == "getSpeed") {
        	//console.log("获取播放速度");
        	var speed = 1;
        	var isExixtScript = document.getElementById('speed-video-js');
            if (isExixtScript != null) {
            	speed = isExixtScript.getAttribute('data');
            }
            sendResponse({state:speed})
        }
    }
);
