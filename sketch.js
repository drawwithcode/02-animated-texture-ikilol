function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB);
  noStroke();
  background (230, 230, 230);
}

function draw() {

  //Colore
  var colorebase1 = 50;
  var coloreok1 = colorebase1 + random()*100;

  var colorebase2 = 50;
  var coloreok2 = colorebase2 + random()*100;

  fill (coloreok1, 0, coloreok2);


 
  //Trigger mouse + Modifica dimensione
  var spostamento1 = 100;
  var spostamento2 = 200;
  var spostamento3 = 300;

  for(var x = 0; 
    x < ((width/100)*100)+500; x+=spostamento1) {
      for(var y = 0; 
        y < ((height/100)*100)+500; y+=spostamento1){

      var dimensione0 = 25;
      var dimensione1 = 25;
      var dimensione2 = 25;
      var dimensione3 = 25;

      if(mouseX > x - 80 
        && mouseX < x + 20 
        && mouseY > y - 80 
        && mouseY < y + 20){

        dimensione0 = dimensione0*4;
        dimensione1 = dimensione1*3;
        dimensione2 = dimensione2*2;
        dimensione3 = dimensione3*1.5;
      }


      circle(x, y, dimensione0, dimensione0);

      circle(x+spostamento1, y+spostamento1, dimensione1, dimensione1);
      circle(x+spostamento1, y-spostamento1, dimensione1, dimensione1);
      circle(x-spostamento1, y-spostamento1, dimensione1, dimensione1);
      circle(x-spostamento1, y+spostamento1, dimensione1, dimensione1);

      circle(x+spostamento1, y, dimensione1, dimensione1);
      circle(x-spostamento1, y, dimensione1, dimensione1);
      circle(x, y+spostamento1, dimensione1, dimensione1);
      circle(x, y-spostamento1, dimensione1, dimensione1);

      circle(x+spostamento2, y+spostamento2, dimensione2, dimensione2);
      circle(x+spostamento2, y-spostamento2, dimensione2, dimensione2);
      circle(x-spostamento2, y-spostamento2, dimensione2, dimensione2);
      circle(x-spostamento2, y+spostamento2, dimensione2, dimensione2);

      circle(x+spostamento2, y, dimensione2, dimensione2);
      circle(x-spostamento2, y, dimensione2, dimensione2);
      circle(x, y+spostamento2, dimensione2, dimensione2);
      circle(x, y-spostamento2, dimensione2, dimensione2);

      circle(x+spostamento1, y+spostamento2, dimensione2, dimensione2);
      circle(x+spostamento1, y-spostamento2, dimensione2, dimensione2);
      circle(x-spostamento2, y-spostamento1, dimensione2, dimensione2);
      circle(x-spostamento2, y+spostamento1, dimensione2, dimensione2);

      circle(x+spostamento2, y-spostamento1, dimensione2, dimensione2);
      circle(x+spostamento2, y+spostamento1, dimensione2, dimensione2);
      circle(x-spostamento1, y+spostamento2, dimensione2, dimensione2);
      circle(x-spostamento1, y-spostamento2, dimensione2, dimensione2);

      circle(x-spostamento2, y-spostamento3, dimensione3, dimensione3);
      circle(x, y-spostamento3, dimensione3, dimensione3);
      circle(x+spostamento2, y-spostamento3, dimensione3, dimensione3);

      circle(x-spostamento3, y-spostamento2, dimensione3, dimensione3);
      circle(x+spostamento3, y-spostamento2, dimensione3, dimensione3);

      circle(x-spostamento3, y, dimensione3, dimensione3);
      circle(x+spostamento3, y, dimensione3, dimensione3);

      circle(x-spostamento3, y+spostamento2, dimensione3, dimensione3);
      circle(x+spostamento3, y+spostamento2, dimensione3, dimensione3);

      circle(x-spostamento2, y+spostamento3, dimensione3, dimensione3);
      circle(x, y+spostamento3, dimensione3, dimensione3);
      circle(x+spostamento2, y+spostamento3, dimensione3, dimensione3);
    }
  }
}
