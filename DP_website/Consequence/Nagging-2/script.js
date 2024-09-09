// 弹窗提醒函数
function remindUser() {
    // 创建弹窗内容
    var reminderContent = `
        <div class="reminder-container" id="reminderContainer">
            <div class="reminder-content">
                <h2>Subscribe to notifications</h2>
                <p>Get order updates, tips about the latest
                discounts, coupons and more!.</p>

                <button class="remind-later-btn" id="reminderBtn">Not now</button>
              
                <button class="update-btn" id="updateBtn">Ok</button>
      
            </div>
        </div>
    `;
    document.body.innerHTML += reminderContent;


    const updateNowBtn = document.getElementById('updateBtn');
    const reminderBtnlater = document.getElementById('reminderBtn');
    reminderBtnlater.addEventListener('click', remindLater);
    updateNowBtn.addEventListener('click', updateNow);
}

function remindLater() {
    var reminderContainer = document.getElementById("reminderContainer");
    recordAction(1,"later");
    if (reminderContainer) {
        reminderContainer.remove();
    }
    setTimeout(remindUser, 2000);
}



function updateNow() {
    var reminderContainer = document.getElementById("reminderContainer");
    //alert("Turn on notification!");
    reminderContainer.remove();
    //updateBadge(2);
    showTooltip_notify("tooltip-confer", 200, 80);
    showTooltip_notify("tooltip-confer-1", 200,100);
    recordAction(1,"updatenow");
    
}

window.onload = function() {
  remindUser();
};

function successful_step(){
    var successful_step_content = `
    <div id="container_intro" class="container_inform">
      <div class="container_inform_content">
          <p><span style="display: block;"><strong>Congratulations!</strong></span>
            It seems that you already know that <strong style="color: red;">Nagging</strong> is harmful to you, and the best choice is leaving the website or report it. Great job!</p>
          <button id="nextbutton" onclick="window.location.href='../../Try/Nagging/trans_test_intro.html';">Next</a>
      </div>
    </div>`
  
    document.body.innerHTML += successful_step_content;
  }
  
  function fail_step(){
    var fail_step_content = `
    <div id="container_intro" class="container_inform">
      <div class="container_inform_content">
          <p>Unfortunately, you've fallen for the <strong style="color: red;">Nagging</strong> trap! As a result, you'll continue to receive more and more notifications. Would you like to retry?</p>
          <a id="retrybutton" href="ex.html">Yes, retry.</a>
          <a id="nextbutton" href="../../Try/Nagging/trans_test_intro.html">No, next.</a>
      </div>
    </div>`
  
    document.body.innerHTML += fail_step_content;
  }
