
    // 弹窗提醒函数
    function remindUser() {
      // 创建弹窗内容
      var reminderContent = `
          <div class="reminder-container" id="reminderContainer">
              <div class="reminder-content">
                  <h2>"ABC Shopping Store"
                  Would Like to Send You Notifications</h2>
                  <p> Notifications may include discount and promotional messages and new products available in the Store.</p>

                  <button class="remind-later-btn" onclick="remindLater()" id="reminderBtn">Not now</button>
                
                  <button class="update-btn" onclick="updateNow()" id="updateBtn">Ok</button>
        
              </div>
          </div>
      `;
      document.body.innerHTML += reminderContent;
      i++;
      if(i > 4){
        continue_next();
    }
  }

  function remindLater() {
      var reminderContainer = document.getElementById("reminderContainer");
      recordAction(1, 'later');
      if (reminderContainer) {
          reminderContainer.remove();
      }
      setTimeout(remindUser, 2000);


  }



  function updateNow() {
      //alert("Turn on notification!");
      reminderContainer.remove();
      //remindUser_ok();
     //continue_next();
     i++;
      recordAction(1, 'updateNow');
     showTooltip_notify_contain("reportModal", "tooltip-confer", 900, 0);
     showTooltip_notify_contain("reportModal", "tooltip-confer-1", 900, 30);
     showTooltip_notify_contain("reportModal", "tooltip-confer-2", 900, 60);
     setInterval(function() {
        showTooltip_notify_contain("reportModal", "tooltip-confer", 900, 0);
        if(i > 4){
            continue_next();
        }
    }, 3000); // 设置每隔 3 秒调用一次

}

function scoreiadd(){
    i++;
}

function remindUser_ok(){
    var oldReminderContainer_ok = document.getElementById("reminderContainer_ok");
    if (oldReminderContainer_ok) {
        oldReminderContainer_ok.remove();
    }

    var reminderContent_ok = `
        <div class="reminder-container" id="reminderContainer_ok">
            <div class="reminder-content">
                <span class="close" onclick="closeReminder()">×</span>
                <h2>Exclusive Notification For You</h2>
                <p>Since you opened the notification, let's see what's new!</p>
            </div>
        </div>
    `;
    document.body.innerHTML += reminderContent_ok;
}

function closeReminder() {
    var reminderContainer_ok = document.getElementById("reminderContainer_ok");
    reminderContainer_ok.remove(); 
    recordAction(1, 'closereminder');
}

  window.onload = function() {
    i=0;
    remindUser();
   
  };



