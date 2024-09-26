let suaidade;
let vegetariano;
let carnivoro;
let vegano;
let título;
let corpo;
let comidas ={
  menor10:{
    vegano: "amendoim",
    carnivoro: "churrasco",
    vegano: "maça"
  },
  entre10e14:{
  vegetariano:"frango",
  carnivoro:"porco assado",
  vegano:"feijâo"
},
 entre14e16:{
  vegetariano:"uva",
  carnivoro:"carne muida",
  vegano:"peixes"
},
entre16e18:{
  vegetariano:"ovos",
  carnivoro:"contra filé",
  vegano:"crepioca"
},
 maior18:{
  vegetariano:"queijo",
  carnivoro:"frango assado",
  vegano:"bolinho de milho"
}
};

let button;


function setup() {
  createCanvas(850, 400).position(100,100);
  createSpan("Qual sua idade?").position(600,530).addClass("hidden");
  suaidade = createInput("").position(600,585).addClass("hidden");
  vegetariano = createCheckbox( "você gosta de maça?").position(100,600).addClass("hidden");
  carnivoro = createCheckbox(" você Gosta de frango assado?").position(100,650).addClass("hidden");
  vegano = createCheckbox(" você Gosta de peixe ao molho? 🐟").position(100,700).addClass("hidden");
  título="Pacifico"
  corpo =  "Raleway";
 button = createButton  ("APERTE AQUI").position(width/2,585).id("botao");
  button.mousePressed(bota);
  button.addClass("botao")
}

function bota(){
  selectAll(".hidden").forEach((el) => el.removeClass("hidden"));
    button.hide();
}
function draw() {
  background("rgb(255,255,255)");
 
  
  
  
  let idade = parseInt(suaidade.value());
  let checkvegetariano = vegetariano.checked();
  let checkcarnivoro = carnivoro.checked();
  let checkvegano = vegano.checked();
  let comida = "Insira suas preferências";
  if (suaidade.value()!== ""){
    comida = mostracomida(idade,checkvegetariano, checkcarnivoro, checkvegano );
  }
  fill("black");
  textAlign(CENTER,CENTER);
  textSize(40);
  text(comida, width/2, height/2);
  textFont(título);
  
   fill("black");
  textAlign(CENTER,CENTER);
  textSize(40);
  text("MELHORES TIPOS DE COMIDAS",width/2, 30);
  textFont(corpo);
}

  function mostracomida(idade,checkvegetariano, checkvegano, checkcarnivoro ){
    if (isNaN(idade)){
      return "Idade inválida";
    }else
      if (idade < 5){
    return "Sai daqui seu menor"
          }else
      if (idade >120){
    return "Sai seu difunto"
        
    }
    if (idade >= 5 && idade < 10){
      if (checkvegetariano){
     return comidas["menor10"]["vegetariano"];
      }
       if (checkcarnivoro){
     return comidas["menor10"]["carnivoro"];
    }
          if (checkvegano){
     return comidas["menor10"]["vegano"];
  }
    }
      if (idade >= 10 && idade < 14){
      if (checkvegetariano){
     return comidas["entre10e14"]["vegetariano"];
      }
       if (checkcarnivoro){
     return comidas["entre10e14"]["carnivoro"];
    }
          if (checkvegano){
     return comidas["entre10e14"]["vegano"];
  }
    }
       if (idade >= 14 && idade < 18){
      if (checkvegetariano){
     return comidas["entre14e16"]["vegetariano"];
      }
       if (checkcarnivoro){
     return comidas["entre14e16"]["carnivoro"];
    }
          if (checkvegano){
     return comidas["entre14e16"]["vegano"];
  }
    }
       if (idade >= 16 && idade < 18){
      if (checkvegetariano){
     return comidas["entre16e18"]["vegetariano"];
      }
       if (checkcarnivoro){
     return comidas["entre16e18"]["carnivoro"];
    }
          if (checkvegano){
     return comidas["entre16e18"]["vegano"];
  }
    }
       if (idade > 18){
      if (checkvegetariano){
     return comidas["maior18"]["vegetariano"];
      }
       if (checkvegano){
     return comidas["maior18"]["vegano"];
    }
          if (checkcarnivoro){
     return comidas["maior18"]["carnivoro"];
  }
    }
  }