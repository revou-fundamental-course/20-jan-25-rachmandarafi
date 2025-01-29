//ini javascript
console.log('Hello World');

function calculateBmi() {
    let resultBmi = document.getElementById('result-bmi');
    let weight = document.getElementById('input-berat-badan').value;
    let height = document.getElementById('input-tinggi-badan').value;
    let age = document.getElementById('input-usia').value;

    console.log(weight);
    console.log(height);
    console.log(age);

    if (weight != '' && height != '' && age != '') {
        let bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        resultBmi.textContent = bmi;
    } else {
        alert('Please fill in all fields');
    }
}