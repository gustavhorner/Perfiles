const users = ['Carlos'];

const memberDiv = document.querySelector('.memberDiv');
const addIcon = document.querySelector('.addIcon');

const userIcons = () => {
    users.reverse();
    users.map((curElem) => {
        memberDiv.insertAdjacentHTML('afterbegin', `
        <button class="btn"><span>${curElem}</span></button>
        `);
    })
    // establecemos los ususarios disponibles
};

addIcon.addEventListener('click', () => {
    // mostramos un prompt para ingresar el nuevo usuario
    let userName = prompt('please enter your name');
    // aqui verificamos que el user name no sea nulo y que no exista ---  tambien no debe haber mas de 3 usuarios
    const btns = document.querySelectorAll('btn');
    if(userName != null && !users.includes(userName) &&  btns.length < 4){ 
        users.push(userName); // Agregamos el nombre de ususario ingresado
        console.log(users); // lo mostramos en consola
        memberDiv.insertAdjacentHTML('afterbegin', `
        <button class="btn"><span>${userName}</span></button>
        `); // agregamos a ladao del que ya teniamos vease en el inspector
    }else{
        alert('El usuario ya existe, no es valido o ya se tiene suficientes perfiles');
    }
})


userIcons();
