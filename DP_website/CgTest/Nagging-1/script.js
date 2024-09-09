var notification = document.getElementById('container_noti');

document.getElementById('updateBtn').addEventListener('click', function() {
    // Add logic to handle the update process
    //alert('Updating the app...');
    code_score_control(2);
    window.open("../../Control/Nagging/trans_test_2.html", "_self");
});

document.getElementById('notNowBtn').addEventListener('click', function(){
    notification.style.display = 'none';
});

function notNowClicked(){
    //code_score_control(2);
}

window.onload = function() {
    notification.style.display = 'block';
    setInterval(function() {
        notification.style.display = 'block';
    }, 3000);   
};
