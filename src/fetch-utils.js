export const URL = 'https://serene-depths-49645.herokuapp.com';

export async function getToken(loginInfo, type) {
    const authURL = `${URL}/auth/${type}`;
    const resp = await fetch(authURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginInfo),
    });
    const data = await resp.json();
    localStorage.setItem('TOKEN', data.token)
    return data.token;
}

export async function getToDos() {
    const apiURL = `${URL}/api/todos`;
    const token = localStorage.getItem('TOKEN')
    const resp = await fetch(apiURL, {
        method: 'GET',
        headers: {
            'Authorization': token,
        }
    })
    const data = await resp.json();
    return data;
}

export async function createToDo(todo) {
    const apiURL = `${URL}/api/todos`;
    const token = localStorage.getItem('TOKEN')
    const resp = await fetch(apiURL, {
        method: 'POST',
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            todo: todo,
            completed: false,
        })
    });
    const data = await resp.json();
    return data;
}

export async function updateToDo(id, todo){
    const apiURL = `${URL}/api/todos/${id}`;
    const token = localStorage.getItem('TOKEN')
    const resp = await fetch(apiURL, {
        method: 'PUT',
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            todo: todo,
            completed: true,
        })
    });
    const data = await resp.json();
    return data;
}



//TODO
// //getToDos function GET to /api/todos
// //createToDo function POST to /api/todos
//updateToDo(id) function PUT to /api/todos/${id}