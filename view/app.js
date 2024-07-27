document.addEventListener('DOMContentLoaded', () => {
    console.log('script is running');


    

    const buttons = document.querySelectorAll('button');

    if (buttons) {
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                console.log(`${button.id} selected`);
            });
        });
    }

     else {
        console.error('Button not found');
    }}










);
