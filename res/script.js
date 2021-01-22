const panels1 = document.querySelectorAll('.panel1');

panels1.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses1();
        panel.classList.add('active');
    })
})

function removeActiveClasses1() {
    panels1.forEach(panel => {
        panel.classList.remove('active');
    })
}


const panels2 = document.querySelectorAll(".panel2");

panels2.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses2();
        panel.classList.add('active');
    })
})

function removeActiveClasses2() {
    panels2.forEach(panel => {
        panel.classList.remove('active');
    })
}



