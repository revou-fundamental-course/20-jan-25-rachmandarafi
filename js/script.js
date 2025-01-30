//fungsi kalkulasi BMI
function calculateBmi() {
    let weight = document.getElementById('input-berat-badan').value;
    let height = document.getElementById('input-tinggi-badan').value;
    let age = document.getElementById('input-usia').value;
    let gender = document.querySelector('input[name="jenis-kelamin"]:checked');
    let resultBmi = document.getElementById('result-bmi');
    let bmiCategory = document.getElementById('bmi-category');
    let bmiDescription = document.getElementById('bmi-description');
    let bmiAdvice = document.getElementById('bmi-advice');
    let additionalInfo = document.querySelector('.additional-info');  // Bagian penyakit dan konsultasi

    //Validasi input
    if (!gender) {
        alert("Silakan pilih jenis kelamin.");
        return;
    }

    if (weight !== '' && height !== '' && age !== '') {
        let bmi = (weight / ((height / 100) ** 2)).toFixed(1);
        resultBmi.textContent = bmi;

        if (bmi < 18.5) {
            bmiCategory.textContent = "Kekurangan Berat Badan";
            bmiDescription.textContent = "Anda memiliki berat badan di bawah normal.";
            bmiAdvice.textContent = "Cobalah untuk meningkatkan asupan nutrisi dan konsultasikan dengan ahli gizi.";
            additionalInfo.style.display = "none"; // Sembunyikan bagian penyakit

        } else if (bmi >= 18.5 && bmi <= 24.9) {
            bmiCategory.textContent = "Berat Badan Ideal";
            bmiDescription.textContent = "Berat badan Anda dalam kategori normal.";
            bmiAdvice.textContent = "Pertahankan gaya hidup sehat dan pola makan yang baik.";
            additionalInfo.style.display = "none";

        } else if (bmi >= 25 && bmi <= 29.9) {
            bmiCategory.textContent = "Berat Badan Lebih";
            bmiDescription.textContent = "Berat badan Anda dalam kategori overweight atau berat berlebih.";
            bmiAdvice.textContent = "Cara terbaik untuk menurunkan berat badan adalah dengan mengatur asupan makanan dan rutin berolahraga.";
            additionalInfo.style.display = "block"; // Tampilkan bagian penyakit
        } else {
            bmiCategory.textContent = "Obesitas";
            bmiDescription.textContent = "Anda dalam kategori obesitas.";
            bmiAdvice.textContent = "Segera konsultasikan dengan dokter untuk pengelolaan berat badan.";
            additionalInfo.style.display = "block";
        }
    } else {
        alert("Silakan isi semua kolom yang diperlukan.");
    }
}

// Fungsi untuk reset form
function resetForm() {
    document.getElementById('input-berat-badan').value = '';
    document.getElementById('input-tinggi-badan').value = '';
    document.getElementById('input-usia').value = '';
    document.querySelectorAll('input[name="jenis-kelamin"]').forEach(radio => radio.checked = false);
    document.getElementById('result-bmi').textContent = '0';
    document.getElementById('bmi-category').textContent = 'Berat Badan';
    document.getElementById('bmi-description').textContent = 'Hasil BMI Anda akan muncul di sini.';
    document.getElementById('bmi-advice').textContent = '';

    // Sembunyikan elemen tambahan setelah reset
    document.querySelector('.additional-info').style.display = "none";
}

// Event listener untuk tombol reset
document.querySelector('.bg-reset').addEventListener('click', function (event) {
    event.preventDefault();
    resetForm();
});
