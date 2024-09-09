document.addEventListener('DOMContentLoaded', function() {
    const gratuityBtns = document.querySelectorAll('.gratuity-btn');


    gratuityBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const customPercent = btn.dataset.percent; // Get the data-percent attribute value
            if (customPercent === 'x') {
                let enteredPercent;
                do {
                    enteredPercent = prompt("Please enter the gratuity percentage:");
                } while (isNaN(enteredPercent) || enteredPercent.trim() === '' || enteredPercent.trim() < 0); // Keep prompting until a valid number is entered

                const parsedPercent = parseFloat(enteredPercent); // Convert the input to a number

                if (!isNaN(parsedPercent) && parsedPercent !== 0) {
                    let ab = Number(parsedPercent) + 20;
                    alert('Total gratuity: ' + ab + '%');
                    code_score_control(2);
                }
                else if(!isNaN(parsedPercent) && parsedPercent === 0){
                    //alert('Succeed.');
                    code_score_control(1);
                    recordAction(1,"confirm: 0");
                } 
                else {
                    code_score_control(2);
                    alert('Please enter a valid number.');
                }
            } else {
                let ab = Number(customPercent) + 20;
                alert('Total gratuity: ' + ab + '%');
                code_score_control(2);
            }
            recordAction(1,"confirm: "+customPercent);
            window.open("../../Control/Sneaking/trans_test_2.html", "_self");
        });
    });
});
