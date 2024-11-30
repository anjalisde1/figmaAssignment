
document.addEventListener('DOMContentLoaded', () => {
    const options = document.querySelectorAll('.option');
    const radioButtons = document.querySelectorAll('.option input');

    radioButtons.forEach((radio, index) => {
        radio.addEventListener('change', () => {
            options.forEach(option => {
                option.classList.remove('selected');
                option.querySelector('.product-options').style.display = 'none';
            });

            options[index].classList.add('selected');
            const productOptions = options[index].querySelector('.product-options');
            if (productOptions) productOptions.style.display = 'block';
        });
    });
});

