// menu.js
import { kalkulator } from './rumus.js';
import readline from 'readline'; //Fungsi readline di JavaScript biasanya digunakan untuk membaca input dari user lewat terminal/console, terutama saat menjalankan program Node.js.
// Membuat interface untuk input dari terminal
const inputUser = readline.createInterface({
input: process.stdin,
output: process.stdout
});


// Minta input dari pengguna
inputUser.question('Masukkan angka pertama: ', angka1 => {
inputUser.question('Masukkan angka kedua: ', angka2 => {  // tambahkan input untuk angka kedua
inputUser.question('Masukkan angka operator (+, -, *, /) : ', operator => {  // tambahkan input untuk memasukkan operator(+, -, *, /)

    console.log(

        `Hasil: ${kalkulator(
    parseFloat(angka1), //Fungsi parseFloat() di JavaScript digunakan untuk mengubah (parse) string menjadi angka desimal (bilangan pecahan/floating point).
    parseFloat(angka2),
    operator
    )}`
    );1
 inputUser.close();
    });
    });
});

//expected
// 1. Minta input angka pertama
// 2. Minta input angka kedua
// 3. Minta input operator (+, -, *,/)
// 4. Hasilnya

