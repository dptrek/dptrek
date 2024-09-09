document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll(".menu-item");
    window.appSettings = { 
        limitadTrackingChecked: true
    };
    menuItems.forEach(item => {
        item.addEventListener("click", function() {
            handleMenuItemClick(item.textContent);
        });
    });
});

function handleMenuItemClick(menuItem) {
    switch (menuItem) {
        case "> General":
            displayGeneralSettings();
            break;
        case "> Privacy":
            displayPrivacySettings();
            break;
        default:
            break;
    }
}

function displayGeneralSettings() {
    const content = document.querySelector(".content");
    content.innerHTML = `
        <h2>General Settings</h2>
        <p>Welcome to General Settings.</p>
        <button id="About" onclick="displayAbout()">About</button>
    `;
    recordAction(1,"General");
}

function displayAbout() {
    const content = document.querySelector(".content");
    content.innerHTML = `
        <h2>About Settings</h2>
        <p>Welcome to About Settings.</p>
        <button id="Advertising" onclick="displayAdvertising()">Advertising</button>
    `;
    recordAction(1,"About");
}

function displayAdvertising() {
    const content = document.querySelector(".content");
    content.innerHTML = `
        <h2>Advertising Settings</h2>
        <p>Welcome to Advertising Settings.</p>
        <label>
        <input type="checkbox" id="limitadTracking" ${window.appSettings.limitadTrackingChecked ? "checked" : ""}>
            Personal Ad Tracking
        </label>
        <button id="yesBtn" onclick="yesBtnfun()">Confirm</button>
    `;
    recordAction(1,"Adversting");
    const limitadTracking = document.getElementById("limitadTracking");
    limitadTracking.addEventListener("change", function(){
        window.appSettings.limitadTrackingChecked = this.checked;
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
}

function yesBtnfun(){
    const limitadTracking = document.getElementById("limitadTracking");
    if(limitadTracking.checked){
        code_score_control(1);
        localStorage.setItem("obstruction_record", 1);
        window.open("../../Training_home.html","_self");
    }else{
        code_score_control(2);
        localStorage.setItem("obstruction_record", 1);
        window.open("../../Training_home.html","_self");
    }
    recordAction(1,"confirm");
}

function displayPrivacySettings() {
    const content = document.querySelector(".content");
    content.innerHTML = `
        <h2>Privacy Settings</h2>
        <p>Welcome to Privacy Settings. Manage your privacy preferences here.</p>
        <p>We would like to collect your personal data for targeted ads</p>
        <button onclick="agreenext()">I agree</button>
    `;
    recordAction(1,"Privacy");
    //code_score_control(2);
}

function agreenext() {
    recordAction(1,"Privacyagree");
    code_score_control(2);
    localStorage.setItem("obstruction_record", 1);
    window.open("../../Training_home.html","_self");
}
    
