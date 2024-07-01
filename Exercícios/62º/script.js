//Loop.
for (let i = 0; i <= 100; i++) {

    let d = Math.round(Math.random() * 99) + 1;    
    
   if (i % 10 === 0 && i != 0) {

    continue;
   }

   if (i % d === 0 && i != 0) {

    document.write(
        "Loop interrompido, pois o " + i + " é divisivel por " + d
    );
    break;
   }

   document.write(
    "Número: " + i + "<br>"
   );
}