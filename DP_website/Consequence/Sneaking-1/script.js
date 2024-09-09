// Function to toggle cart interface visibility
function openCart() {
    const cartInterface = document.getElementById('cart-interface');
    cartInterface.classList.toggle('hidden');
}

i = 0;

// Function to add protection plan to cart
function addProtectionPlan() {
    const cartItems = document.querySelector('.cart-items');
    const protectionPlanItem = document.createElement('div');
    protectionPlanItem.classList.add('item');
    protectionPlanItem.innerHTML = `
    <div class="protection-plan-content">
        <p>Water cup holder</p>
        <p>Price: $9.99</p>
        <button class="close-btn">Delete</button>
</div>
    `;
    cartItems.appendChild(protectionPlanItem);

  

    // Show the plan indicator
    const planIndicator = document.querySelector('.plan-indicator');
    planIndicator.classList.remove('hidden');

    // 点击事件监听器，删除内容并将变量 i 的值设置为 1
  const closeBtn = protectionPlanItem.querySelector('.close-btn');
  closeBtn.addEventListener('click', function() {
      // 删除内容
      protectionPlanItem.remove();
      // 将变量 i 的值设置为 1
      i = 1;
  });
}

function closebag(){
  var bagitemC = document.getElementById('bagitem');
  bagitemC.style.display = 'none';
}

// Simulate automatic addition of protection plan to cart when page loads
    addProtectionPlan();



  

const checkoutBtn = document.querySelector('.checkout-btn');

checkoutBtn.addEventListener('click', function() {
    if(i === 0){
        //fail
        showTooltip_notify("tooltip-confer-1",10, -400); 
    }
    else{
        successful_step();
    }
});

function successful_step(){
    var successful_step_content = `
    <div id="container_intro" class="container_inform">
      <div class="container_inform_content">
          <p><span style="display: block;"><strong>Congratulations!</strong></span>
            It seems that you already know that <strong style="color:red;">Sneaking</strong> is harmful to you, and the best choice is removing the extra items. Great job!</p>
          <button id="nextbutton" onclick="window.location.href='../../Try/Sneaking/trans_test_intro.html';">Next</a>
      </div>
    </div>`
  
    document.body.innerHTML += successful_step_content;
  }
  
  function fail_step(){
    var fail_step_content = `
    <div id="container_intro" class="container_inform">
      <div class="container_inform_content">
          <p>Unfortunately, you've fallen for the <strong style="color:red;">Sneaking</strong> trap! As a result, you end up paying more than you intended to. Would you like to retry?</p>
          <a id="retrybutton" href="ex.html">Yes, retry.</a>
          <a id="nextbutton" href="../../Try/Sneaking/trans_test_intro.html">No, next.</a>
      </div>
    </div>`
  
    document.body.innerHTML += fail_step_content;
  }







