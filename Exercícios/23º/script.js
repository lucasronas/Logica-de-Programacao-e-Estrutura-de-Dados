//Variável com valor.
let v = NaN;

//Checagem.
switch (typeof v) {

    case "string":
        console.log("é uma String!");
        break;

    case "number":
        console.log("É um Number!");
        break;

    case "boolean":
        console.log("É um Boolean!");
        break;
    
    case "undefined":
        console.log("É um Undefined!");
        break;
    
    default:
        console.log("Tipo da variável é desconhecida!");
}