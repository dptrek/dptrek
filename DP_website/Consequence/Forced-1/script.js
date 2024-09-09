document.addEventListener("DOMContentLoaded", function() {
    const subscribeCheckbox = document.getElementById("subscribe");
    const signUpButton = document.getElementById("signup-btn");
    signUpButton.disabled = false;
    signUpButton.addEventListener('click', function(){
        event.preventDefault(); // 阻止默认提交行为
        if (subscribeCheckbox.checked) {
            showTooltip_notify("tooltip-confer-1", 0, -500);
            showTooltip_notify("tooltip-confer-2", 0, -450);
            recordAction(1,"submit_succ");

        } else {
            addRedStar();
            console.log('222');
            recordAction(1,"submit_false");
            
        }
        
    });

});

function addRedStar() {
    var noticeSpan = document.getElementById('noticeclick');
    var redStarSpan = document.createElement('span');
    redStarSpan.style.color = 'red'; // 设置红色
    redStarSpan.textContent = '*'; // 设置星号
    redStarSpan.style.fontSize = '20px'; // 设置字体大小
    noticeSpan.appendChild(redStarSpan);
}

function successful_step(){
    var successful_step_content = `
    <div id="container_intro" class="container_inform">
      <div class="container_inform_content">
          <p><span style="display: block;"><strong>Congratulations!</strong></span>
            It seems that you already know that <strong style="color:red;">Forced action</strong> is harmful to you, and the best choice is leaving the website or report it. Great job!</p>
          <button id="nextbutton" onclick="window.location.href='../../Try/Forced/trans_test_intro.html';">Next</a>
      </div>
    </div>`
  
    document.body.innerHTML += successful_step_content;
  }
  
  function fail_step(){
    var fail_step_content = `
    <div id="container_intro" class="container_inform">
      <div class="container_inform_content">
          <p>Unfortunately, you've fallen for the <strong style="color:red;">Forced action</strong> trap! As a result, you'll continue to receive more and more newsletters. Would you like to retry?</p>
          <a id="retrybutton" href="ex.html">Yes, retry.</a>
          <a id="nextbutton" href="../../Try/Forced/trans_test_intro.html">No, next.</a>
      </div>
    </div>`
  
    document.body.innerHTML += fail_step_content;
  }

// 提交报告
function submitReport() {
    var reason = document.getElementById("reportReason").value;
    saveComment(reason);
    // 在这里可以添加提交报告的逻辑
    console.log("Reason for report: ", reason);
    closeModal(); // 提交后关闭模态框
}      

function submitReportAndAnotherFunction() {
  successful_step();
  submitReport();
}

function show_Page() {
    successful_step();
}
