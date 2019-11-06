let login = "laisa";
let senha = "12345";
let aLogin = prompt ("Digite seu login");
let aSenha = prompt ("Digite sua senha");
if (aLogin == login) {
    if (aSenha == senha) {
        alert ("Login realizado!");

    }
    else{
        alert ("Senha incorreta!");

    }

}
else{
    alert ("Login incorreto!");

}
