var playerOne=[{num:0,type:0},{num:0,type:0},{num:0,type:0}];
var playerTwo=[{num:0,type:0},{num:0,type:0},{num:0,type:0}];
var i,j;


function changeCards(cards){
  for (i = 0; i < cards.length; i++) {
    cards[i].num=Math.floor(Math.random()*11)+1;
    while(cards[i].num==8 || cards[i].num==9)
      cards[i].num=Math.floor(Math.random()*11)+1;
    cards[i].type=Math.floor(Math.random()*3)+1;
    switch(cards[i].type){
      case 1:
        cards[i].type="Espada";
        break;
      case 2:
        cards[i].type="Basto";
        break;
      case 3:
        cards[i].type="Oro";
        break;
      case 4:
        cards[i].type="Copa";
        break;
    }
    for(j=0;j<i;j++){
      while (cards[i].numb==cards[j].numb && cards[i].type==cards[j].type) {
        cards[i].num=Math.floor(Math.random()*11)+1;
        while(cards[i].num==8 || cards[i].num==9)
          cards[i].num=Math.floor(Math.random()*11)+1;
        cards[i].type=Math.floor(Math.random()*3)+1;
        switch(cards[i].type){
          case 1:
            cards[i].type="Espada";
            break;
          case 2:
            cards[i].type="Basto";
            break;
          case 3:
            cards[i].type="Oro";
            break;
          case 4:
            cards[i].type="Copa";
            break;
        }
      }

    }
    document.write(cards[i].num+" "+cards[i].type+" ");
  }
}

changeCards(playerOne);
document.write("</br></br>");
changeCards(playerTwo);
