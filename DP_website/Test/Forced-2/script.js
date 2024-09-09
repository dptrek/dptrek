const checkbox = document.getElementById('agree-checkbox');
const agreebutton = document.getElementById('continue-button-1');

checkbox.addEventListener('change', function() {
    recordAction(2, "checkbox");
    agreebutton.disabled = !this.checked;
});

agreebutton.addEventListener('click',function(){
    recordAction(1, "continue and agree");
    code_score_control(2);
    window.open("../../Try/Forced/trans_test_2.html","_self");
});


