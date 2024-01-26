// Função para carregar o conteúdo do header e footer usando AJAX
function loadHeaderFooter() {
    var headerContainer = document.getElementById('headerContainer');
    var footerContainer = document.getElementById('footerContainer');

    // Carrega o header
    var xhrHeader = new XMLHttpRequest();
    xhrHeader.open('GET', '../components/header.html', true);
    xhrHeader.onreadystatechange = function () {
        if (xhrHeader.readyState == 4 && xhrHeader.status == 200) {
            headerContainer.innerHTML = xhrHeader.responseText;
        }
    };
    xhrHeader.send();

    // Carrega o footer
    var xhrFooter = new XMLHttpRequest();
    xhrFooter.open('GET', '../components/footer.html', true);
    xhrFooter.onreadystatechange = function () {
        if (xhrFooter.readyState == 4 && xhrFooter.status == 200) {
            footerContainer.innerHTML = xhrFooter.responseText;
        }
    };
    xhrFooter.send();
}

// Chama a função ao carregar a página
window.onload = loadHeaderFooter;