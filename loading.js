function showLoading(){
    const div = document.createElement("div");
    div.classList.add('loading');

    const label = document.createElement("label");
    label.classList.add('label');
    label.innerText = "Carregando...";

    div.appendChild(label);

    document.body.appendChild(div);
} 

function hideLoading(){
    const loadings = document.getElementsByClassName("loading", "label");

    if (loadings.length){
        loadings[0].remove();
    }
}