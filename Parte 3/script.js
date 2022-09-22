const num1 = 9;
const num2 = Number(prompt('Digite um número de 1 a 10'));

if(num1 === num2){
    console.log(`Seu número que é ${num2}, é igual a ${num1}`);
}else if(num2 > num1){
    console.log(`Seu número que é ${num2}, é maior que ${num1}`);
}else if(num2 < num1){
    console.log(`Seu número que é ${num2}, é menor que ${num1}`);
}