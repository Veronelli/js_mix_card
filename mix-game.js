var game = document.querySelector('#game')
var reboott
var cardString = ""

var i_aux = 0
var selecti = 0

let options = []
var register = [-1,-1]

var Select = [2, 0]

function creating(){

    cardString = "<button class='a-reboot' onclick='rebootFun()'>Mix card</button><div id = 'nav'><p id='points'>Score:0</p><p id = 'lives'>Lives: 2</p><div id='conclusion'></div></div><div class = 'container-game'>"

    for(let a = 0; a < 12; a++){

        cardString = cardString + "<div id='card'></div>"    

    }

    cardString = cardString + "</div>"

    game.innerHTML = cardString

}

function ran(){

    return Math.floor(Math.random() * (11-0)) + 0

}

function desition(){
    
    let i = 1;
    let aux;
    while(i <= 6){

        options.push(
            {
                ubication : "url('./img/" + i + ".svg')",
                checked : false
            },
            {
                ubication : "url('./img/" + i + ".svg')",
                checked : false
            })        
        i++
    }

    console.log(Object.values(options))
    i = 0

    while(i <= 11){

        getRandom = ran()
        aux = options[getRandom].ubication

        options.splice(getRandom, 1, {

            ubication: options[i].ubication,
            checked : false

        })
        options.splice(i, 1, {

            ubication: aux,
            checked : false

        })

        i++
    }

    console.log(Object.values(options))
}
function action(){
    
    var card = document.querySelectorAll("#card")

    for(let i_aux = 0; i_aux < card.length; i_aux++){

        var points = document.querySelector("#points")
        var lives = document.querySelector("#lives")
        var nav = document.querySelector('#nav')
        var conclusion = document.querySelector("#conclusion")
    
        let aux_register = register[0]
        let aux_register1 = register[1]
        card[i_aux].style.backgroundImage = options[i_aux].ubication


        
        setTimeout(() => {
            card[i_aux].style.transform = "rotateY(0deg)"
            card[i_aux].style.backgroundImage = "url('./img/0.svg')"
            card[i_aux].style.transform = "rotateY(180deg)"

        }, 1500);

        card[i_aux].onclick = ()=>{
    
            if(card[i_aux].style.transform == "rotateY(180deg)" && options[i_aux].checked == false){
                card[i_aux].style.transform = "rotateY(270deg)"
                card[i_aux].style.backgroundImage = "url('./img/0.svg')"
                card[i_aux].style.transform = "rotateY(180deg)"
    
            }
    
            if(options[i_aux].checked == false){
    

                card[i_aux].style.transform = "rotateY(90deg)"
                card[i_aux].style.backgroundImage = options[i_aux].ubication
                card[i_aux].style.transform = "rotateY(0deg)"
    
            }
    
            if(register[0] != -1){
    
                register[1] = i_aux
    
                let aux_register = register[0]
                let aux_register1 = register[1]
    
                register[0] = -1
                register[1] = -1
    
                if(card[aux_register].style.backgroundImage == card[aux_register1].style.backgroundImage && aux_register != aux_register1 && (options[aux_register].checked == false || options[aux_register].checked == false)){
    
                    console.log("Ganaste")
                    Select[1] = Select[1] + 10
                    points.innerHTML = "Score: " + Select[1]
                    console.log(Select[1] + "  " + points.innerHTML)
                    options[aux_register].checked = true
                    options[aux_register1].checked = true
        
                }
                else{
    
                    if(options[aux_register].checked == false || options[aux_register].checked == false ){
    
                        
                        Select[0] = Select[0] - 1
                        lives.innerHTML = "Lives: " + Select[0]
                        setTimeout(() => {
    
                            card[aux_register].style.transform = "rotateY(90deg)"
                            card[aux_register].style.backgroundImage = "url('./img/0.svg')"
                            card[aux_register].style.transform = "rotateY(0deg)"
        
                            card[aux_register1].style.transform = "rotateY(90deg)"
                            card[aux_register1].style.backgroundImage = "url('./img/0.svg')"
                            card[aux_register1].style.transform = "rotateY(0deg)"
    
        
                        }, 1000);
    
                    }
    
    
                }
    
            }
            else{
    
                register[0] = i_aux
    
            }
    
    
            if(Select[1] >= 60){
    
                for(let a_aux = 0; a_aux < options.length; a_aux++){

                    options[a_aux].checked = true

                }
                nav.style.height = "400px"
                nav.style.borderRadius = "0px 0px 20px 20px"
                nav.style.backgroundColor = "Green"
                conclusion.innerHTML = "<p class='text-c'>¡¡You win!!</p>"
                console.log("Fin")
    
            }
            if(Select[0] == 0){
                for(let a_aux = 0; a_aux < options.length; a_aux++){

                    options[a_aux].checked = true

                }
                nav.style.height = "400px"
                nav.style.borderRadius = "0px 0px 20px 20px"
                conclusion.innerHTML = "<p class='text-c'>You fail</p>"
                console.log("Fin")
                btn_reboot = true
    
            }
            console.log(register)
            
        }
    
    }
    
}

desition()
creating()
action()

reboott = document.querySelector('.a-reboot')  

function rebootFun(){
    
    console.log("Hola")
    
    cardString = ""

    i_aux = 0
    selecti = 0
    
    options.splice(0, options.length)
    register = [-1,-1]
    
    Select = [2, 0]
    btn_reboot = false
    nav.style.height = "50px"
    
    creating()
    desition()
    action()
    
} 
 
