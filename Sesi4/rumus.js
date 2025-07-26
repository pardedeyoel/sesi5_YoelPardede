export function kalkulator(angka1, angka2, operator) {
    switch (operator) {
    
    case "+":
     return angka1 + angka2; //pertambahan
     
    case "-":
        return angka1 - angka2; //pengurangan
        
    case "/":
        return angka1 / angka2; //pembagian
        
    case "*":
        return angka1 * angka2; //perkalian
    
    default:
    return "Operator tidak valid!";
    
    }
}
