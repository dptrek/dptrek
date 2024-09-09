function continuebrowse(){
    validate = localStorage.getItem("validate_score") || 0;
    if(validate === 1){
        //alert("Succeed");
        code_score_control(1);
    }else{
        code_score_control(2);
    }
    recordAction(1,"continue");
    localStorage.setItem("sneaking_record", 1);
    window.open("../../Control_home.html", "_self");
}

       
function submitReport() {
    var reason = document.getElementById("reportReason").value;
    saveComment(reason);
    recordAction(1,"report");
    // 在这里可以添加提交报告的逻辑
    console.log("Reason for report: ", reason);
    closeModal(); // 提交后关闭模态框
    code_score_control(1);
    localStorage.setItem("sneaking_record", 1);
    window.open("../../Control_home.html","_self");
}
    
    
function show_Page(){
    recordAction(1,"back");
    code_score_control(2);
    localStorage.setItem("sneaking_record", 1);
    window.open("../../Control_home.html", "_self");
}