const modal = document.querySelector('dialog')

function openModal(){
    modal.show()
}

function closeModal(){
    modal.close()
}

function login(){
    showLoading();
    firebase.auth().signInWithEmailAndPassword(document.getElementById('email').value, document.getElementById('password').value).then(response => {
        hideLoading();
        window.location.href = "menu.html";
        }).catch(error => {
            hideLoading();
            alert(getErrorMessage(error));});
}

function getErrorMessage(error){
    if (error.code == "auth/user-not-found"){
        return "Nenhum usuário encontrado. Verifique o seu e-mail e senha, ou selecione a opção Registrar.";
    }
    return error.message;
}

function register(){
    window.location.href = "register.html"
}

function logout(){
    var r=confirm("Deseja sair da conta?");
    if (r==true)
    {
        window.location.href = "index.html";
    }
}