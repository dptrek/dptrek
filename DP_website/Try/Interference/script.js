document.addEventListener("DOMContentLoaded", function() {
    var confirmButton = document.querySelector('.confirm-ad-btn');
    var checkBox = document.querySelector('.personal-ad-checkbox');

    confirmButton.addEventListener('click', function() {
        if (checkBox.checked) {
            showTooltip_notify("tooltip-confer", 50 ,-200);
        } else {
            //alert("Your personalized ads have been disabled.");
        }
        recordAction(1, 'confirm');
        continue_next();
    });

    checkBox.addEventListener('change', function(){
       if (checkBox.checked) {
                console.log('checked');
                recordAction(2,'checkBox');
                // 在这里可以执行复选框被选中时的操作
            } else {
                console.log('uncheck');
                recordAction(3,'checkBox');
                // 在这里可以执行复选框被取消选中时的操作
            } 
    });
    
});
