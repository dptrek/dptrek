// Function to submit consent
 function submitConsent() {
    var optedOut = document.getElementById("optOutCheckbox").checked;

    // If the checkbox is checked, display "You're in a trap", else display "Succeed"
    var resultMessage = optedOut ? "You agree company use your data for services." : "You do not agree company use your data for services.";

    // Display the result message
    //document.getElementById("consentResult").innerText = resultMessage;
    //alert(resultMessage);
    if(resultMessage === "You do not agree company use your data for services."){
        code_score_control(1);
    }
    else{
        code_score_control(2);
    }
    
    recordAction(1, 'submit');
    window.open("../../Control/Interference/trans_test_2.html", "_self");

};

// 获取复选框元素
var checkbox_opt = document.getElementById('optOutCheckbox');

// 监听复选框的变化
checkbox_opt.addEventListener('change', function() {
// 检查复选框的勾选状态
    if (this.checked) {
        recordAction(2, 'checkbox_opt');
    } else {
        recordAction(3, 'checkbox_opt');
    }
});


    