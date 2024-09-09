function reportBtnfun() {
    var modal = document.getElementById("reportModal");
    modal.style.display = "block";
  }

  // 关闭模态框
  function closeModal() {
    var modal = document.getElementById("reportModal");
    modal.style.display = "none";
  }

  // 提交报告
  function submitReport() {
    var reason = document.getElementById("reportReason").value;
    saveComment(reason);
    // 在这里可以添加提交报告的逻辑
    console.log("Reason for report: ", reason);
    closeModal(); // 提交后关闭模态框
    window.open("../test_home.html","_self");
  }

          // 将评论保存到本地存储
          function saveComment(comment) {
            // 检查本地存储中是否已存在评论数据
            let comments = localStorage.getItem('report-comments');
            comments = comments ? JSON.parse(comments) : [];

            // 将新评论添加到数组中
            comments.push(comment);

            // 将更新后的评论数组保存回本地存储
            localStorage.setItem('report-comments', JSON.stringify(comments));

        }

        function show_Page(){
            window.open("../test_home.html", "_self");
        }