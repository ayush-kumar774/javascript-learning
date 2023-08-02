const buttons = document.querySelectorAll('.button');
// console.log(buttons);
const body = document.querySelector("body");

buttons.forEach( (button) => {
    // console.log(button);
    button.addEventListener
    ('click', (event) => {
            // console.log(event);
            // console.log(event.target);
            const colorID = event.target.id;
            body.style.backgroundColor = colorID;

            // switch (colorID) {
            //     case 'grey':
            //         body.style.backgroundColor = 'grey';
            //         break;

            //     case 'white':
            //         body.style.backgroundColor = 'white';
            //         break;

            //     case 'blue':
            //         body.style.backgroundColor = 'blue';
            //         break;

            //     case 'yellow':
            //         body.style.backgroundColor = 'yellow';
            //         break;
        
            //     default:
            //         body.style.backgroundColor = 'black';
            //         break;
            // }
        }
    )
} )