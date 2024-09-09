document.addEventListener("DOMContentLoaded", function () {
    const cookieNotice = document.getElementById("cookie-notice");
    const acceptAllCookiesBtn = document.getElementById("accept-all-cookies");
    const refuseCookiesBtn = document.getElementById("refuse-cookies");
    const refuseStep1 = document.getElementById("refuse-step-1");
    const nextStep2Btn = document.getElementById("next-step-2");
    const refuseStep2 = document.getElementById("refuse-step-2");
    const nextStep3Btn = document.getElementById("next-step-3");
    const refuseStep3 = document.getElementById("refuse-step-3");
    const acceptRefusedCookiesBtn = document.getElementById("accept-refused-cookies");


    const checkbox1 = document.getElementById("analytics");
    const checkbox2 = document.getElementById("preferences");
    const checkbox3 = document.getElementById("reasons_1");
    const checkbox4 = document.getElementById("reasons_2");

    const tooltipContainer = document.getElementById('step_edu_1');

    cookieNotice.style.display = "block"; 

    acceptAllCookiesBtn.addEventListener("click", function () {
        // Hide the first step and show the refusal options
        cookieNotice.style.display = "none";
        // Implement logic to accept all cookies
        showTooltip_notify("tooltip-confer-1", 600, 0);
        console.log('11');
    });

    refuseCookiesBtn.addEventListener("click", function () {
        // Show the first step of refusal
        refuseStep1.style.display = "block";
    });

    nextStep2Btn.addEventListener("click", function () {
        // Hide step 1 and show step 2
        refuseStep1.style.display = "none";
        refuseStep2.style.display = "block";
    });

    nextStep3Btn.addEventListener("click", function () {
        // Hide step 2 and show step 3
        if(checkbox3.checked || checkbox4.checked){
            refuseStep2.style.display = "none";
            refuseStep3.style.display = "block";
        }else{
            alert('Please choose a reason.');
            return;
        }
    });

    acceptRefusedCookiesBtn.addEventListener("click", function () {
        // Handle the acceptance of refused cookies
        // Implement logic to handle the acceptance of refused cookies
        // ...

        // Hide the cookie notice and refusal steps
        cookieNotice.style.display = "none";
        refuseStep1.style.display = "none";
        refuseStep2.style.display = "none";
        refuseStep3.style.display = "none";


        if(checkbox1.checked && checkbox2.checked){
            //alert('Succeed.');
            successful_step();
        }else{
            showTooltip_notify("tooltip-confer-1", 500, 0);
        }
    });

});


function successful_step(){
    var successful_step_content = `
    <div id="container_intro" class="container_inform">
      <div class="container_inform_content">
          <p><span style="display: block;"><strong>Congratulations!</strong></span>
            It seems that you already know that <strong style="color:red;">Obstruction</strong> is harmful to you, and the best choice is to refuse unnecessary cookies, even if it seems troublesome. Great job!</p>
          <button id="nextbutton" onclick="window.location.href='../../Try/Obstruction/trans_test_intro.html';">Next</a>
      </div>
    </div>`
  
    document.body.innerHTML += successful_step_content;
  }
  
  function fail_step(){
    var fail_step_content = `
    <div id="container_intro" class="container_inform">
      <div class="container_inform_content">
          <p>Unfortunately, you've fallen for the <strong style="color:red;">Obstruction</strong> trap! As a result, you'll continue to receive more and more notifications. Would you like to retry?</p>
          <a id="retrybutton" href="ex.html">Yes, retry.</a>
          <a id="nextbutton" href="../../Try/Obstruction/trans_test_intro.html">No, next.</a>
      </div>
    </div>`
  
    document.body.innerHTML += fail_step_content;
  }

