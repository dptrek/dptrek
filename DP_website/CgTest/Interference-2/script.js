document.addEventListener('DOMContentLoaded', function() {
    const acceptBtn = document.getElementById('acceptBtn');
    const submitBtn = document.getElementById('submitBtn');
    const cookieCheckboxes = document.querySelectorAll('.cookie-option input[type="checkbox"]');

    acceptBtn.addEventListener('click', function() {
        // Check all cookie checkboxes
        cookieCheckboxes.forEach(function(checkbox) {
            checkbox.checked = true;
        });
        //alert('Continue.');
        code_score_control(2);
        recordAction(1,"Accept");
        localStorage.setItem("interference_record", 1);
        window.open("../../Control_home.html", "_self");
    });

    submitBtn.addEventListener('click', function() {
        const checkbox_1 = document.getElementById('essentialCookies');
        const checkbox_2 = document.getElementById('analyticsCookies');
        const checkbox_3 = document.getElementById('marketingCookies');
    
        if (checkbox_2.checked || checkbox_3.checked || !checkbox_1.checked) {
            //alert('Continue.');
            code_score_control(2);
        } else if(checkbox_1.checked){
            //alert('Succeed.');
            code_score_control(1);
        }
        recordAction(1,"submit");
        localStorage.setItem("interference_record", 1);
        window.open("../../Control_home.html", "_self");
    });

    cookieCheckboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function(event) {
            // 获取触发事件的复选框元素
            const changedCheckbox = event.target;
            
            // 获取复选框的 id 属性或者其他标识属性
            const checkboxId = changedCheckbox.id;
    
            // 复选框状态发生变化时的处理逻辑
            if (changedCheckbox.checked) {
                console.log(checkboxId);
                recordAction(2,checkboxId);
                // 在这里可以执行复选框被选中时的操作
            } else {
                console.log(checkboxId);
                recordAction(3,checkboxId);
                // 在这里可以执行复选框被取消选中时的操作
            }
        });
    });
    

});


