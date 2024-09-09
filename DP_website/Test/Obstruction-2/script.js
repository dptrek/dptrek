document.addEventListener('DOMContentLoaded', function() {
    const accountBtn = document.getElementById('accountBtn');//go to your account
    const changeBtn = document.getElementById('changeBtn');//change
    const manageBtn = document.getElementById('manageBtn');//manage

    const cancelpopup = document.getElementById('cancelpopup');//cancel popup
    const cancelSubscriptionBtn = document.getElementById('cancelpopup');//ok key
    const closeBtn = document.createElement('close-sub');
    const cancelnoBtn = document.getElementById('cancelno');

    // 获取按钮和弹出窗口
    const closePopupBtn = document.getElementById("closeSubPopupBtn");
    const Subpopup = document.getElementById("subscriptionpopup");
    const closeSettingsPopupBtn = document.getElementById("closeSettingsPopupBtn");
    const settingsPopup = document.getElementById("settingsPopup");

    // Add event listener to accountBtn
    accountBtn.addEventListener('click', function() {
        recordAction(1, "cancel-home");
        cancelpopup.style.display = "block";       
    });

    changeBtn.addEventListener('click',function() {
        recordAction(1, "change");
        code_score_control(2);
        Subpopup.style.display = "block";
    });
   
    manageBtn.addEventListener('click',function() {
        recordAction(1, "manage");
        code_score_control(2);
        settingsPopup.style.display = "block";
    });

    cancelSubscriptionBtn.addEventListener('click', function() {
        recordAction(1, "unsubscribe");
        code_score_control(1);
        window.open("../../Try/Obstruction/trans_test_2.html","_self");
    });

    closeBtn.addEventListener('click', function() {
        recordAction(1, "closesub");
        cancelpopup.style.display = "block";
    });

    cancelnoBtn.addEventListener
    ('click', function() {
        recordAction(1, "closesubno");
        cancelpopup.style.display = "block";
    });

    closePopupBtn.addEventListener("click", function() {
        recordAction(1, "upgrade-close");
        Subpopup.style.display = "none";
    });

    closeSettingsPopupBtn.addEventListener("click", function() {
        recordAction(1, "manage-close");
        settingsPopup.style.display = "none";
    });
});






