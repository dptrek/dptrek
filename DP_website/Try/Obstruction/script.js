var originalCookieStates = {
  analytics: true,
  personalization: true,
  advertising: true
};
var Cookies_contain = document.getElementById('cookieContainer');
function toggleConfirmButton() {
  var currentCookieStates = {
    analytics: document.getElementById('analyticsCheckbox').checked,
    personalization: document.getElementById('personalizationCheckbox').checked,
    advertising: document.getElementById('advertisingCheckbox').checked
  };

  var isStateChanged = Object.keys(currentCookieStates).some(function (key) {
    return currentCookieStates[key] !== originalCookieStates[key];
  });

  var confirmButton = document.querySelector('.confirm-btn');
  confirmButton.style.display = isStateChanged ? 'block' : 'none';
}

var checkbox_1 = document.getElementById('analyticsCheckbox');
var checkbox_2 = document.getElementById('personalizationCheckbox');
var checkbox_3 = document.getElementById('advertisingCheckbox');
  checkbox_1.addEventListener('change', function(){
     if (checkbox_1.checked) {
              console.log('checked');
              recordAction(2,'checkBox1');
              // 在这里可以执行复选框被选中时的操作
          } else {
              console.log('uncheck');
              recordAction(3,'checkBox1');
              // 在这里可以执行复选框被取消选中时的操作
          } 
  });
  checkbox_2.addEventListener('change', function(){
     if (checkbox_2.checked) {
              console.log('checked');
              recordAction(2,'checkBox2');
              // 在这里可以执行复选框被选中时的操作
          } else {
              console.log('uncheck');
              recordAction(3,'checkBox2');
              // 在这里可以执行复选框被取消选中时的操作
          } 
  });
checkbox_3.addEventListener('change', function(){
     if (checkbox_3.checked) {
              console.log('checked');
              recordAction(2,'checkBox3');
              // 在这里可以执行复选框被选中时的操作
          } else {
              console.log('uncheck');
              recordAction(3,'checkBox3');
              // 在这里可以执行复选框被取消选中时的操作
          } 
  });

function confirmChoices() {
  recordAction(1, 'confirm');
  originalCookieStates = {
    analytics: document.getElementById('analyticsCheckbox').checked,
    personalization: document.getElementById('personalizationCheckbox').checked,
    advertising: document.getElementById('advertisingCheckbox').checked
  };
  Cookies_contain.style.display = "none";
  if(checkbox_1.checked || checkbox_2.checked || checkbox_3.checked){
      showTooltip_notify("tooltip-confer", 50 ,50);
  }else{
    continue_next();
  }
  document.querySelector('.confirm-btn').style.display = 'none';    
}

function allowAll() {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(function (checkbox) {
    checkbox.checked = true;
  });
  Cookies_contain.style.display = "none";
  continue_next();
  showTooltip_notify("tooltip-confer", 50 ,50);
  recordAction(1, 'allowall');
}

function showCookieSettings() {
  document.querySelector('.cookie-settings').style.display = 'flex';
  recordAction(1,'reject');
}
