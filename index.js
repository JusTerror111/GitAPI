const nameInput = document.querySelector("#nameInput")
const userInfoDiv = document.querySelector("#userInfoDiv")
const form = document.querySelector("#userInfoform")
const userTemplate = document.querySelector("#contactTemplate").innerHTML

form.addEventListener("submit", onFormSubmit)

function onFormSubmit(event){
    event.preventDefault()

    const name = nameInput.value

    if(!name){
        alert("Can't Find")
        return
    }

    fetch(`https://api.github.com/users/${name}`)
    .then((res)=>{
        if(res.ok){
            return res.json()
        }
        throw new Error('User dinied');
    })
    .then((user) => renderUSer(user))
    .catch((error) => {
      console.log('1')
      alert(error.message)
    })
    .then((res) => renderUSer(res))
}


function renderUSer(res){
    const html = generateTemplate(res)

userInfoDiv.innerHTML = html



}
    function generateTemplate(res){
        return userTemplate
        .replace("{{avatar_url}}",res.avatar_url)
        .replace("{{repos_url}}",res.repos_url)
        .replace("{{followers}}",res.followers)
        .replace("{{following}}",res.following)
    
}