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

export async function getToDos(token) {
    const apiURL = `${URL}/api/todos`;
    const resp = await fetch(apiURL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
        },
    });
    const data = await resp.json();
    return data;
}

export async function createToDo(token, todo) {
    const apiURL = `${URL}/api/todos`;
    const resp = await fetch(apiURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
        },
        body: JSON.stringify(todo)
    });
    const data = await resp.json();
    return data;
}

export async function updateToDo(token, todo){
    const apiURL = `${URL}/api/todos/${todo.id}`;
    const resp = await fetch(apiURL, {
        method: 'PUT',
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo)
    });
    const data = await resp.json();
    return data;
}

