const button = document.getElementById('config')
const close = document.getElementById('close')
const modal = document.querySelector('dialog')

button.onclick = function() {
    modal.show()
}

close.onclick = function() {
    modal.close()
}

const logout = document.getElementById('sair')

logout.addEventListener('click', function(e){
    e.preventDefault();

    window.location.replace('index.html')
})