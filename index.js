let nickHeroi = "SuperJacob"
let leveis = [ "Ferro" , " Bronze" , "Prata" , " Ouro" , "Platina" , "Ascendente" , "Imortal" , "Radiante"]
for(xpHeroi = 1; xpHeroi < 11000 ;xpHeroi += 200 )

if (xpHeroi <= 1000){
    console.log(leveis[0])
}else if(xpHeroi <= 2000){
    console.log(leveis[1])
}else if(xpHeroi <= 5000){
    console.log(leveis[2])
}else if(xpHeroi <= 7000){
    console.log(leveis[3])
}else if(xpHeroi <= 8000){
    console.log(leveis[4])
}else if(xpHeroi <= 9000){
    console.log(leveis[5])
}else if(xpHeroi <= 10000){
    console.log(leveis[6])
}else{
    console.log(leveis[7])
}

console.log("O Heroi " + nickHeroi + " está no nível " + (leveis[7]) + " com " + xpHeroi + " de XP") 
