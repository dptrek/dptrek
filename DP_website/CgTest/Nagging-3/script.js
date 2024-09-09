const reminderCheckbox = document.getElementById("reminder");
const updateButton = document.querySelector(".update-btn");
const reminderLaterButton = document.querySelector(".remind-later-btn");
var reminderContainer = document.getElementById("reminderContainer");

function remindUser() {
    updateButton.disabled = false;
    reminderContainer.style.display = "block";
    reminderCheckbox.addEventListener("change", function() {
        if (this.checked) {
            recordAction(2, 'remindercheckbox');
            console.log('disabled button');
            reminderLaterButton.disabled = true;
        } else {
            recordAction(3, 'remindercheckbox');
            console.log('enabled button');
            reminderLaterButton.disabled = false;
        }
    });
}

updateButton.addEventListener('click', function(){
    recordAction(1,"updatenow");
    if (reminderCheckbox.checked) {
        //alert("Permission agreed! The popup will not appear.");
        code_score_control(2);
        localStorage.setItem("nagging_record", 1);
        window.open("../../Control_home.html","_self");

    } else {
        // Re reminder
        setTimeout(remindUser, 10000); // 10s reminder user
        //alert("Permission agreed!");
        
        localStorage.setItem("nagging_record", 1);
        code_score_control(2);
        window.open("../../Control_home.html","_self");
    }
});

reminderLaterButton.addEventListener('click', function(){
    recordAction(1,"reminderlater");
    reminderContainer.style.display="none";
    setTimeout(remindUser, 3000); // 3s reminder user
});

window.onload = function() {
    remindUser();
};
