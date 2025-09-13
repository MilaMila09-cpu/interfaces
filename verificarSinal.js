function verificarSinal(numero) {
    if (numero > 0) {
        return "Positivo";
    }
    else if (numero < 0) {
        return "Negativo";
    }
    else {
        return "Zero";
    }
}
// Testes
console.log(verificarSinal(10)); // Positivo
console.log(verificarSinal(-5)); // Negativo
console.log(verificarSinal(0)); // Zero
