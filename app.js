const lienzo = document.querySelector('#lienzo');
const inputPx = document.querySelector('#cantidadPx');
const mostrarPx = document.querySelector('#valor');
const inputColor = document.querySelector('#color');
const btns = document.querySelectorAll('button');
mostrarPx.textContent = 16;
let color = inputColor.value;
function crearGrilla(n) {
    let areaG = n * n;
    for (let i = 0; i < areaG; i++) {
        let px = document.createElement('div');
        px.id = i;
        lienzo.style = [`grid-template-columns: repeat(${n}, 1fr);
                        grid-template-rows: repeat(${n}, 1fr);`];
        lienzo.insertAdjacentElement('beforeend', px);
    };
    const pixels = lienzo.querySelectorAll('div');
    pixels.forEach(px => px.addEventListener('mouseenter', cambiarColor));
};
function cambiarColor() {
    this.style.backgroundColor = color;
};
btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn.id == 'borrador') {
            color = '#fff';
        } else if (btn.id =='randon') {
            color = '#'+ Math.floor(Math.random()*16777215).toString(16);
        } else if (btn.id == 'limpiar') {
            limpiar()
        }
        return color;
    });
});
function limpiar() {
    const pxs = lienzo.querySelectorAll('div');
    pxs.forEach(px => px.style.backgroundColor='white');
};
inputColor.addEventListener('input', (e) => {color=e.target.value});
inputPx.addEventListener('input', (e) => {
    lienzo.innerHTML = '';
    crearGrilla(e.target.value);
    mostrarPx.textContent = e.target.value;
});
crearGrilla(16);

