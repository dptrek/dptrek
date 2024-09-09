document.addEventListener("DOMContentLoaded", function() {
    var downloadBtn = document.getElementById('downloadBtn');
    var renewBtn = document.getElementById('renewBtn');


    downloadBtn.addEventListener('click', function(){

        var actions = JSON.parse(localStorage.getItem('actions')) || [];
        var stayTimes = JSON.parse(localStorage.getItem('stayTimes')) || [];
        // 获取显示动作的容器
        var actionContainer = document.getElementById('actionscontain');
        // 清空容器内容
        actionContainer.innerHTML = '';

        // 遍历actions数组，并将每个元素作为li元素插入到容器中
        actions.forEach(function(action) {
            var listItem = document.createElement('li');
            listItem.textContent = action;
            actionContainer.appendChild(listItem);
        });

         // 获取显示time的容器
         var stayContainer = document.getElementById('staycontain');
         // 清空容器内容
         stayContainer.innerHTML = '';
        stayTimes.forEach(function(startTime){
            var listItem = document.createElement('li');
            listItem.textContent = startTime;
            stayContainer.appendChild(listItem);
        })
        actionContainer.append('finished');
        stayContainer.append('finished');
    });

    renewBtn.addEventListener('click', function(){
        renew_array();
    });

    const getscoreBtn = document.getElementById('getscoreBtn');
    getscoreBtn.addEventListener('click', function(){

        var code_dp = parseInt(localStorage.getItem("code_dp")) || 0;
        // 获取显示分数的容器
        var scoreContainer = document.getElementById('scorecontain');
        // 清空容器内容
        scoreContainer.innerHTML = '';
        scoreContainer.append(code_dp);
    });


});