// Validação de Campos Obrigatorios do formulario de Contato!
function ValidarCamposFormulario() {
    if (document.form.nome.value == "") {
        alert("Preencher o campo obrigatório NOME!");
        document.form.nome.focus();
        return false;
    }

    if (document.form.email.value == "") {
        alert("Preencher o campo obrigatório E-MAIL!");
        document.form.email.focus();
        return false;
    }

    if (document.form.ass.value == "") {
        alert("Preencher o campo obrigatório ASSUNTO!");
        document.form.ass.focus();
        return false;
    }

    if (document.form.telefone.value == "") {
        alert("Preencher o campo obrigatório Telefone!");
        document.form.telefone.focus();
        return false;
    }

    if (document.form.msg.value == "") {
        alert("Preencher o campo obringatório MENSAGEM!");
        document.form.msg.focus();
        return false;
    }
}