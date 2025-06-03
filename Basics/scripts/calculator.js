let calculation = 
(localStorage.getItem('displayScore')) || '';

function updateCalculation(clicked){

    displayCalculation();
    
    calculation += clicked;

    console.log(`${calculation}`);

    localStorage.setItem('displayScore', (calculation));

    displayCalculation();

}

function displayCalculation() {
    document.querySelector('.showCalculation').innerHTML =`${calculation}`;
}