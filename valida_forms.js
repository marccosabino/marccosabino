function validarCampos(){
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const telefone = document.getElementById("telefone").value;
    const termoAdesao = document.getElementById("termoAdesao").value;
    const confirmaSenha = document.getElementById("confirmarSenha").value;

    if (nome === " ") {
        alert("Por favor, preencha o campo Nome.");
        event.preventDefault();
        return;
    }
    if (email === "") {
        alert("Por favor, preencha o campo Email.");
        event.preventDefault();
        return;  
    }
    if (telefone === "") {
        alert("Por favor, preencha o campo Telefone.");
        event.preventDefault();
        return;
    }


    if (senha.lenght < 8) {
        alert("A senha deve conter pelo menos 8 caracteres.");
        event.preventDefault();
        return;
    }


    const letrasMaiusculas = /[A - Z]/;
    const letrasMinusculas = /[a - z]/;
    const numeros = /[0 - 9]/
    constcaracteresEspeciais = /[!@#$^&*()_+{}[\]:;<>,.?-]/;

    if (
        !letrasMaiusculas.test(senha) ||
        !letrasMinusculas.test(senha) ||
        !numeros.test(senha) ||
        !constcaracteresEspeciais.test(senha) 
    )  {
        alert ("Sua senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caracter especial.");
        event.preventDefault();
        return;
    }

    if(senha !== confirmaSenha) {
        alert("As senhas devem ser iguais.");
        event.preventDefault();
        return;
    }

    if (!termoAdesao.checked) {
        alert("Você deve aceitar os termos de adesão para continuar.");
        event.preventDefault();
        return;
    }
}