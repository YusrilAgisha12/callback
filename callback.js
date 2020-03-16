/* Cara Ke satu
// setTimeout ( function () { 
//     console.log ( "Yusril Agisha Hendrawan" );
//  }, 3000 );
 
//  function  write () {
    
//     console.log ( "XI RPL 1" );
//  }
//  setTimeout (write, 3000 );

*/

// Cara Kedua
//fungsi aksi
 function main (callback)
 {
     setTimeout(callback, 3000)
 }

 //fungsi output
 function exTimeOut(obj){
     console.log(obj)
 }

 //fungsi menggunakan aksi dan output
 function realExecution(obj){
     main(function () {
        exTimeOut(obj)
     });
 }

 //jalankan
 function exTimeOut(){
     console.log ({
         nama: "Yusril Agisha Hendrawan",
         kelas: "XI RPL 1"
   })
 }

 main(exTimeOut);
