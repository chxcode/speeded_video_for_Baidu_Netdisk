$(function(){
    //var state = $('#state');
    $('#keyword').on('input propertychange',function() {//给对象绑定事件
        chrome.tabs.query({active:true, currentWindow:true}, function (tab) {//获取当前tab
            //向tab发送请求
            chrome.tabs.sendMessage(tab[0].id, { 
                action: "send",
                keyword: $('#keyword').val()
            }, function (response) {
                //console.log(response);
                //state.html(response.state)
            });
        });
    });
    
    chrome.tabs.query({active:true, currentWindow:true}, function (tab) {//获取当前tab
        //向tab发送请求
        chrome.tabs.sendMessage(tab[0].id, { 
            action: "getSpeed",
        }, function (response) {
            //console.log(response.state);
            var range = document.getElementById('keyword');
            range.value = response.state;
        });
    });
       
    
})