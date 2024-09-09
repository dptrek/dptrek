//关于分数控制
var code_dp = localStorage.getItem("code_dp") || 0;
localStorage.setItem("code_dp", code_dp);

function code_score_control(x){
    if(x===1){
        code_dp++;
        localStorage.setItem("code_dp", code_dp);
        localStorage.setItem('congratsImageVisible', '1');
    }
    else{
        code_dp--;
        localStorage.setItem("code_dp", code_dp);
    }
};



// 记录操作的数组
//var actions = JSON.parse(localStorage.getItem('actions')) || [];

var actionsString = localStorage.getItem('actions');
if (actionsString) {
    var actions = JSON.parse(actionsString);
} else {
    var actions = [];
}

// 记录操作的函数
function recordAction(x, elementId) {
    //获取时间
    var timestamp = new Date().toLocaleString();
    var pageUrl = window.location.href;

    var action;
    if(x===1){
        console.log('按钮被点击！');
        action = "Page: " + pageUrl + ", Time: " + timestamp + ", Type: " + "Click" + ", Id: " + elementId;
    }
    else if(x===2){
        console.log('复选框已被勾选！');
        action = "Page: " + pageUrl + ", Time: " + timestamp + ", Type: " + "checkbox is checked" + ", Id: " + elementId;
    }
    else if(x===3){
        console.log('复选框未被勾选！');
        action = "Page: " + pageUrl + ", Time: " + timestamp + ", Type: " + "checkbox is not checked" + ", Id: " + elementId;
    }else {
        action = "Failed to record action";
    }

    actions.push(action);
    // 返回最后一个记录的 action
    // 将操作记录保存到本地存储中
    localStorage.setItem('actions', JSON.stringify(actions));
    return action;
}




// 记录用户进入页面的时间
var startTime = new Date().getTime();


// 页面卸载时记录用户停留时间并保存数据到本地存储
window.addEventListener('beforeunload', function() {
    var stayTime = new Date().getTime() - startTime;
    recordStayTime(startTime, stayTime);
});



// 记录用户停留时间的数组
var stayTimes = JSON.parse(localStorage.getItem('stayTimes')) || [];;

// 记录用户停留时间的函数
function recordStayTime(startTime, stayTime) {
    
    var pageUrl = window.location.href;
    var startDate = new Date(startTime);
    var timestamp = startDate.toLocaleString();
    // 构建停留时间记录
    var stayTimeRecord = "Page: " + pageUrl + ", StartTime: " + timestamp + ", Stay Time: " + stayTime/1000 + " seconds";
    
    // 将停留时间记录添加到数组中
    stayTimes.push(stayTimeRecord);
    // 将操作记录保存到本地存储中
    localStorage.setItem('stayTimes', JSON.stringify(stayTimes));
    // 返回最后一个记录的停留时间
    return stayTimeRecord;
}

//清空函数
function renew_array(){
    localStorage.removeItem('actions');
    localStorage.removeItem('stayTimes');
    code_dp = 0;
    localStorage.setItem("code_dp", code_dp);
    actions = [];
    stayTimes = [];
    console.log(stayTimes);
}

// 显示报告模态框
function reportBtnfun() {
    var modal = document.getElementById("reportModal");
    modal.style.display = "block";
  }
  
  // 关闭模态框
  function closeModal() {
    var modal = document.getElementById("reportModal");
    modal.style.display = "none";
  }

  // 将评论保存到本地存储
  function saveComment(comment) {
    // 检查本地存储中是否已存在评论数据
    let comments = localStorage.getItem('report-comments');
    comments = comments ? JSON.parse(comments) : [];

    // 将新评论添加到数组中
    comments.push(comment);

    // 将更新后的评论数组保存回本地存储
    localStorage.setItem('report-comments', JSON.stringify(comments));

}


function closenoti() {
    var tooltipContainer = document.getElementById('tooltip-confer');
    tooltipContainer.style.display = 'none';
}

function closenoti_else(elementId) {
    var tooltipContainer = document.getElementById(elementId);
    if (tooltipContainer) {
        tooltipContainer.style.display = 'none';
    } else {
        console.error('Element with ID ' + elementId + ' not found.');
    }
}

function showTooltip_notify(elementId, rightOffset, topOffset){
    // 显示浮窗
    var tooltipConfer = document.getElementById(elementId);
    tooltipConfer.style.display = "block";
  
    // 设置浮窗位置为界面右侧
    var windowWidth = window.innerWidth; // 获取可见视口的宽度
    var tooltipWidth = tooltipConfer.offsetWidth;
    tooltipConfer.style.left = (windowWidth - tooltipWidth - rightOffset) + "px";

    // 设置浮窗垂直位置
    tooltipConfer.style.top = topOffset + "px";
}


function showTooltip_notify_contain(containerId, tooltipId, horizontalDistance, verticalDistance){
        // 显示浮窗
        var tooltipConfer = document.getElementById(tooltipId);
        tooltipConfer.style.display = "block";
      
        // 计算浮窗的位置，使其显示在 "icon-notification" 旁边
        var notificationIcon = document.getElementById(containerId);
        var iconRect = notificationIcon.getBoundingClientRect();
        var tooltipRect = tooltipConfer.getBoundingClientRect();
      
        // 设置浮窗位置
        tooltipConfer.style.left = (iconRect.left + horizontalDistance) + "px"; // 图标右侧偏移 10px

        tooltipConfer.style.top = (iconRect.top + verticalDistance)+ "px"; // 与图标顶部对齐
}


function reportBtnfun() {
    var modal = document.getElementById("reportModal");
    modal.style.display = "block";
  }

// 关闭模态框
function closeModal() {
    var modal = document.getElementById("reportModal");
    modal.style.display = "none";
}

// 将评论保存到本地存储
function saveComment(comment) {
    // 检查本地存储中是否已存在评论数据
    let comments = localStorage.getItem('report-comments');
    comments = comments ? JSON.parse(comments) : [];

    // 将新评论添加到数组中
    comments.push(comment);

    // 将更新后的评论数组保存回本地存储
    localStorage.setItem('report-comments', JSON.stringify(comments));
}

function continue_next(){
    const continueContent = document.getElementById('continue_btn_next');
    continueContent.style.display = 'block';
}

function continueBtn(){
    //window.confirm("sometext");
    window.open("trans_reflection.html","_self")
}
