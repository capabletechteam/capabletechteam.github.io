class Moai extends HTMLElement {
    connectedCallback() {
        var size = this.innerHTML;
        this.innerHTML = `<img src="assets/moai.png" height="${size}" onClick="effect('moai')">`;
    }
}
customElements.define("emoji-moai", Moai);

class Skull extends HTMLElement {
    connectedCallback() {
        var size = this.innerHTML;
        this.innerHTML = `<img src="assets/skull.png" height="${size}" onClick="effect('skull')">`;
    }
}
customElements.define("emoji-skull", Skull);

function effect(type) {
    var snd = new Audio(`assets/${type}.wav`);
    snd.play();
}