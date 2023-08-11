console.log('Project 5');

const insert = document.getElementById('insert') ;

window.addEventListener('keydown', (event) => {
    insert.innerHTML = `
    <div class='color'>
        <table>
            <tr> 
                <th> Key </th>
                <th> Keycode </th>
                <th> Code </th>
            </tr>
            <tr>
                <th> ${event.key === ' ' ? 'Space' : event.key} </th>
                <th> ${event.keyCode} </th>
                <th> ${event.code} </th>
            </tr>
        </table>
    </div>
    `
}) 