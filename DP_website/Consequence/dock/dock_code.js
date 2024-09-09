var reminderContainer;

// 函数：根据点击的图标跳转到不同的页面
function showPage(num) {
    // 这里假设根据不同的 num 跳转到不同的页面
    if (num === 1) {
        window.location.href = "page1.html"; // 跳转到 page1.html 页面
    } else if (num === 2) {
        window.location.href = "page2.html"; // 跳转到 page2.html 页面
    } else if (num === 3) {
        window.location.href = "page3.html"; // 跳转到 page3.html 页面
    }
}



// // 从本地存储中获取分数
// var email_score = parseInt(localStorage.getItem("email_score")) || 0;
// var notification_score = parseInt(localStorage.getItem("notification_score")) || 0;
// var card_score = parseInt(localStorage.getItem("card_score")) || 0;

// badge_1 = document.getElementById('badge_1');
// badge_2 = document.getElementById('badge_2');
// badge_3 = document.getElementById('badge_3');

// badge_1.innerText = email_score;
// badge_2.innerText = notification_score;
// badge_3.innerText = card_score;

// function renew() {
//     // 这里添加处理 Report 按钮点击的逻辑
//     localStorage.setItem("email_score", 0);
//     localStorage.setItem("notification_score", 0);
//     localStorage.setItem("card_score", 0); 

//     badge_1.innerText = 0;
//     badge_2.innerText = 0;
//     badge_3.innerText = 0;

//     showTooltip_notify();

// }

// 函数：更新图标上的数字
function updateBadge(num) {
    if(num === 1){
        value = email_score + 1;
        badge_1.innerText = value;
        localStorage.setItem("email_score", value); 
        
    }
    else if(num === 2){
        value = notification_score + 1;
        badge_2.innerText = value;
        localStorage.setItem("notification_score", value);  
    }
    else{
        value = card_score + 1;
        badge_3.innerText = value;
        localStorage.setItem("card_score", value);  
    }
     
}


// 显示报告模态框
function reportBtn() {
    var modal = document.getElementById("reportModal");
    modal.style.display = "block";
  }
  
  // 关闭模态框
  function closeModal() {
    var modal = document.getElementById("reportModal");
    modal.style.display = "none";
  }
  
  // 提交报告
  function submitReport() {
    var reason = document.getElementById("reportReason").value;
    // 在此处执行提交报告的操作，比如将原因发送给服务器等
    console.log("Report submitted with reason: " + reason);
    // 关闭模态框
    closeModal();
  }

  

function showTooltip_notify(){
        // 显示浮窗
        var tooltipConfer = document.getElementById("tooltip-confer");
        tooltipConfer.style.display = "block";
      
        // 计算浮窗的位置，使其显示在 "icon-notification" 旁边
        var notificationIcon = document.getElementById("icon-notification");
        var iconRect = notificationIcon.getBoundingClientRect();
        var tooltipRect = tooltipConfer.getBoundingClientRect();
      
        // 设置浮窗位置
        tooltipConfer.style.left = (iconRect.right + 10) + "px"; // 图标右侧偏移 10px
        tooltipConfer.style.top = iconRect.top + "px"; // 与图标顶部对齐
}

function showTooltip_email(){
    // 显示浮窗
    var tooltipConfer = document.getElementById("tooltip-confer");
    tooltipConfer.style.display = "block";
  
    // 计算浮窗的位置，使其显示在 "icon-notification" 旁边
    var notificationIcon = document.getElementById("icon-email");
    var iconRect = notificationIcon.getBoundingClientRect();
    var tooltipRect = tooltipConfer.getBoundingClientRect();
  
    // 设置浮窗位置
    tooltipConfer.style.left = (iconRect.right + 10) + "px"; // 图标右侧偏移 10px
    tooltipConfer.style.top = iconRect.top + "px"; // 与图标顶部对齐
}

function showTooltip_card(){
    // 显示浮窗
    var tooltipConfer = document.getElementById("tooltip-confer");
    tooltipConfer.style.display = "block";
  
    // 计算浮窗的位置，使其显示在 "icon-notification" 旁边
    var notificationIcon = document.getElementById("icon-card");
    var iconRect = notificationIcon.getBoundingClientRect();
    var tooltipRect = tooltipConfer.getBoundingClientRect();
  
    // 设置浮窗位置
    tooltipConfer.style.left = (iconRect.right + 10) + "px"; // 图标右侧偏移 10px
    tooltipConfer.style.top = iconRect.top + "px"; // 与图标顶部对齐
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
