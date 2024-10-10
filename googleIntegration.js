function handleCredentialResponse(response){
    const id_token = 623076374844-a6k7ab1fbqq3gpe5olfdits2aaku8s44.apps.googleusercontent.com
    fetch()
}
export const myData = {
    id_token: id_token,
}
fetch('/google-login', {
    method:POST,
    headers: {
        'Content-Type':'application/json'
    },
    body: JSON.stringify({ id})
})