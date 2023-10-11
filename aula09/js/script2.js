let x = 40
const primeiro = new Promise(function(resolve, reject){
    if(x > 20){
        resolve("Esta Funcionando")
    }
    else{
        reject("Deu erro ");
    }
})


const body = document.body;
const btn = document.createElement("button")
btn.innerHTML = "Clique"
btn.onclick = () => {
    primeiro
    .then((rs) => console.log(rs))
    .catch((erro) => console.log(erro));
    
}

body.appendChild(btn)

let user ="";
let pass ="";

function logar(){
    return new Promise((resolve,reject)=>{
        if(user == "admin"&& pass == "123"){
            resolve({
                nome :"Administrador",
                user:"admin",
                email:"admin@administrador.com"                
            })
        }
        else{
            reject({
                erro_numero:"41214",
                erro_msg:"Usuario ou senha invalido"
            })
        }
    }
)}

const btn2 =document.createElement("button")
btn2.innerHTML = "logar no sistema";

btn2.onclick =() =>{
    user = prompt("Digite o nome do usuario")
    pass = prompt("Digite a senha")

    logar()
    .then((rs)=> console.log(rs))
    .catch((err)=>console.log(rs));
}
body.appendChild(btn2)