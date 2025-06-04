document.addEventListener("DOMContentLoaded", function () {
    const naoBtn = document.querySelector('.button-group button:nth-child(2)');
    naoBtn.addEventListener('mouseenter', function () {
        const btnWidth = naoBtn.offsetWidth;
        const btnHeight = naoBtn.offsetHeight;
        const areaWidth = 390;
        const areaHeight = 844;

        // Garante que o botão não saia da área definida
        const maxLeft = areaWidth - btnWidth;
        const maxTop = areaHeight - btnHeight;

        const randomLeft = Math.random() * maxLeft;
        const randomTop = Math.random() * maxTop;

        naoBtn.style.position = 'fixed';
        naoBtn.style.left = `${randomLeft}px`;
        naoBtn.style.top = `${randomTop}px`;
    });
});