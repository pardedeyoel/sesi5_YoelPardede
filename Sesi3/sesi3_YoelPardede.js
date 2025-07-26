//Pakai for loop

for (let i=1; i <=4; i++){
    let lineBaris = ' ';      //mencetak baris
    for (let j=1; j <=i; j++){        //selama jumlah bintang belum sebanyak nomor baris
    lineBaris += '*';            //baris = baris ditambah bintang atau tambahin satu bintang
    }
    console.log(lineBaris);
} 


//Pakai while loop

// let i = 1;
// while (i <= 4){
//     let j = 1;
//     let lineBaris = '';
//     while (j <=i){
//         lineBaris += '*';
//         j++;   
//     }
//     console.log (lineBaris);
//     i++;
// }


//pakai do while loop

// let i = 1;  //nomor baris
// do {
//     let j = 1;    //jumlah bintang
//     let lineBaris ='';  // untuk mencetak baris
//     do{
//         if (j <= i){            //selama jumlah bintang belum sebanyak nomor baris
//             lineBaris += '*';   //baris = baris ditambah bintang atau tambahin satu bintang
//         }
//         j++;   // jumlah bintang bertambah 1
//     } while (j <= 4);  // ulangi sampai max 4 kali 
//     console.log(lineBaris)  // cetak hasil bintang dari yg diatas
//     i++;  //jumlah baris bertambah 1
// }while (i <=4)  //ulangi sampai 4 baris




// //Pakai for each
// let tandaBintang = ["*", "**", "***", "****"]

// tandaBintang.forEach(function (tanda){
//     console.log(tanda)
// })


//Modifikasi element array

// let tandaBintang = ["*", "**", "***"]

// tandaBintang.push("****")
// tandaBintang.forEach(function (tanda){
//     console.log(tanda)
// })

