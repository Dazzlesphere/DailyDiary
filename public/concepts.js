const load_data_btn = document.getElementById('load-data-btn');
const rootEl = document.getElementById('root');

function addUserToPage(userObj) {
    const divEl = document.createElement('div');
    divEl.classList.add('user');
    
    const nameEl = document.createElement('p');
    const ageEl = document.createElement('p');
    const emailEl = document.createElement('p');
    const isAdminEl = document.createElement('p');

    nameEl.innerText = userObj.name;
    ageEl.innerText = userObj.age;
    emailEl.innerText = userObj.email;
    isAdminEl.innerText = userObj.isAdmin;

    divEl.appendChild(nameEl);
    divEl.appendChild(ageEl);
    divEl.appendChild(emailEl);
    divEl.appendChild(isAdminEl);

    rootEl.appendChild(divEl);
}

async function loadData(evt) {
    const response = await fetch('user_list.json');
    const data = await response.json();
    
    data.users.forEach(obj => addUserToPage(obj));


}

load_data_btn.addEventListener('click', loadData)