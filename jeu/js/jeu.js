 //les variables
var r=15;						//Variable surtout utilisé dans la taille des images
var pas=10;                     // vitesse du coeur en pixels
var x=1030;            		    // Abscisse du coeur
var y=410;            		    // Ordonnée du coeur
var a=0;						//Abscisse d'une flamme
var b=-350;						//Ordonnée des flammes
var c=0;						//Abscisse d'une flamme
var d=0;						//Abscisse d'une flamme
var e=0;						//Abscisse d'une flamme
var f=0;						//Abscisse d'une flamme
var g=640;						//Abscisse de l'attaque du tour 6
var h=0;						//Ordonnée de l'attaque du tour 6
var i=0;						//Abscisse de l'attaque du tour 6
var j=240;						//Ordonnée de l'attaque du tour 6
var k=660;						//Abscisse de la barre lors de l'attaque du joueur 
var l=0;						//Vitesse de la barre lors de l'attaque du joueur
var m=900;						//Abscisse du dragon pour pouvoir montrer qu'il prend un coup
var tour='T1'; 					//Séléctionner le tour
var A=0;	              		 //variable qui permet d'attaquer lors du tour du joueur
var vie=100;                   //Vie du joueur
var pv=5000;                   //Vie de l'ennemi
var soin=2;						//Nombre de fois que le joueur peut se soigner 
var heal='vrai';				//Abscisse de l'attaque du tour 6
var timerx=0;					//Abscisse des timers
var timery=0;					//Ordonnée du 1er timer
var timery2=0;					//Ordonnée du 2eme timer
var timery3=0;					//Ordonnée du 3eme timer
var cote=0;						//Variable qui choisi le coté de l'attaque lors du tour 4 et qui choisi la direction de la barre lors de l'attaque du joueur
var score=0;					//variable qui compte le ,ombre de dégats subis

// La fonction preload() est appelée une fois avant l'appel à setup() : elle permet de charger des images
function preload() {
  img_coeur = loadImage("../jeu/images/heart.png");
  img_dragon = loadImage("../jeu/images/dragon.png");
  img_flamme = loadImage("../jeu/images/1.png");
  img_griffe = loadImage("../jeu/images/griffure.png");
  img_casse = loadImage("../jeu/images/heart broken.png");
}

// La fonction setup() est appelée une fois, au début de l'exécution de script.js
function setup(){
  createCanvas(windowWidth,windowHeight);    	// Taille de la fenêtre du jeu
  noStroke();									// Pas de contour pour les figures
  frameRate(30);     							// Nombre d'images par seconde (Hertz)	
  a=floor(random(660,1450));					// Tirage au hasard de l'abscisse d'une flamme
  c=floor(random(660,1450));					// Tirage au hasard de l'abscisse d'une flamme
  d=floor(random(660,1450));					// Tirage au hasard de l'abscisse d'une flamme
  e=floor(random(660,1450));					// Tirage au hasard de l'abscisse d'une flamme
  f=floor(random(660,1450));					// Tirage au hasard de l'abscisse d'une flamme

  
}

//La fonction windowRezised
function windowResized() {
	resizeCanvas(windowWidth,windowHeight);		//Met la fenêtre sur toute la page
}

// La fonction draw() est répétée indéfiniment, à la vitesse indiquée par la fonction frameRate()
function draw(){
  background(0);           			// Couleur de l'arrière fond (noir)
  fill(0,90,0);						//Couleur verte
  rect(270,0,5,2000);				//Un des traits qui décorent l'arriere fond
  rect(1800,0,5,2000);				//Un des traits qui décorent l'arriere fond
  rect(470,0,5,250);				//Un des traits qui décorent l'arriere fond
  rect(1600,0,5,250);				//Un des traits qui décorent l'arriere fond
  rect(0,250,475,5);				//Un des traits qui décorent l'arriere fond
  rect(1600,250,1000,5);			//Un des traits qui décorent l'arriere fond
  fill (255)                    		//Couleur blanche
  rect (650,250,800,350)         	   // Zone de jeu
  fill (0)                      		//Couleur noire
  rect (660,260,780,330)             	 //Donner l'impression que la zone de jeu est noire à l'interieur
  image (img_flamme,a,b,2*r,3*r);        //Création d'une flamme
  image (img_flamme,c,b,2*r,3*r);        //Création d'une flamme
  image (img_flamme,d,b,2*r,3*r);        //Création d'une flamme
  image (img_flamme,e,b,2*r,3*r);        //Création d'une flamme
  image (img_flamme,f,b,2*r,3*r);        //Création d'une flamme
  image (img_dragon,m,-45,350,350);      //Création du dragon
  fill (0);								//couleur noire
  rect (timerx,timery,20,20);			//Création du 1er timer
  rect (timerx,timery2,20,20);			//Création du 2eme timer
  rect (timerx,timery3,20,20);			//Création du 3eme timer
  
  if (soin>0 && vie<100) {				//On détécte si il reste du soin et si le joueur n'a pas toute sa vie
	  heal='vrai';						//Dans ce cas le joeur peut se soigner
	  } else {							//Si ca n'est pas le cas
		  heal='faux';					//Le joeur ne peut pas se soigner

  }
  
  if (soin<=0) {						//Si le soin est a 0 ou moins
	soin=0;								//On empeche le soins d'etre négatif
	  }
	  
	    
  	if(m<900){							//Detecter si le dragon s'est déplacer
		m=900;							//Le remettre a ca place
}
  
  // Faire avancer le coeur à droite :
  if (keyIsDown(RIGHT_ARROW)) {		// Il y a eu un appui sur la fleche droite
    x+=pas;							// On déplace le coeur vers la droite
    if (x+r > 1420){            		// On teste pour savoir si le coeur sort par la droite de la fenêtre de tracé
		x=1420-r;					// si le coeur sort par la droite, on le fige sur le bord droit de la fenêtre
    }
  }
  
  // Faire avancer le coeur à gauche :
  if (keyIsDown(LEFT_ARROW)) {		// Il y a eu un appui sur la flèche gauche
    x-=pas;							// On déplace le coeur vers la gauche
    if (x-r < 650){            		// On teste pour savoir si le coeur sort de la fenêtre, par la gauche
		x=650+r;						// si le coeur sort par la gauche, on le fige sur le bord gauche de la fenêtre
    }
  }
  
  // Faire avancer le coeur en haut :
  if (keyIsDown(UP_ARROW)) {		// Il y a eu un appui sur la fleche du haut
    y-=pas;							// On déplace le coeur vers le haut
    if (y-r < 250){            		// On teste pour savoir si le coeur sort de la fenêtre, par le haut
		y=250+r;						// si le coeur sort par le bas, on le fige sur le bord haut de la fenêtre
    }
  }
  
  // Faire avancer le coeur en bas :
  if (keyIsDown(DOWN_ARROW)) {		// Il y a eu un appui sur la fleche bas
    y+=pas;							// On déplace le coeur vers le bas
    if (y+r > 570){            		// On teste pour savoir si le coeur sort de la fenêtre, par la gauche
		y=570-r;						// si le coeur sort par le bas, on le fige sur le bord bas de la fenêtre
    }
  }
  
  //gestion de la vie//			
  
	fill(255,0,0);					//Couleur rouge
	rect(975,625,150,30);			//Rectangle rouge qui montre clairement la perte de vie
 	fill(255,200,0);				//Couleur jaune
	rect(975,625,vie*1.5,30);		//Rectangle proportionel a la vie du joueur
 	textSize(15);            	  // Taille du texte, en pixels
	textStyle(BOLD);		 		//Texte en gras
	fill(100,0,200);					 //Couleur violette
	text(vie+'/100', 1020, 645);  	 // Affichage de la vie du joueur

	fill(255,0,0);					//Couleur rouge
	rect(975,155,200,20);			//Rectangle rouge qui montre clairement la perte de vie
	fill(255,200,0);				//Couleur jaune
	rect(975,155,pv*0.04,20);		//Rectangle proportionel a la vie du dragon
	textSize(15);              // Taille du texte, en pixels
	textStyle(BOLD);		 	//Texte en gras
	fill(100,0,200);					 // Couleur violette
	text(pv+'/5000', 1030, 171);   // Affichage de la vie du dragon
	
 
//les interfaces quand c'est le tour des joueur//

  if (tour=='T1') {                     //detecter que cest le tour 1
	fill(255);				 			// Couleur blanche
	rect(640,640,320,120);				//Limite du fight 
	if(650 < mouseX && mouseX < 950 && 650 < mouseY && mouseY < 750){	//Detecter la souris sur le fight
		fill(0);						//Si c'est le cas alors couleur noire
	}
	rect(650,650,300,100);	    // Fenêtre pour attaquer
	textSize(35);              // Taille du texte, en pixels
	textStyle(BOLD);		 	//Texte en gras
	fill(0);					//Couleur noire
	if(650 < mouseX && mouseX < 950 && 650 < mouseY && mouseY < 750){	//Detecter la souris sur le fight
		fill(255);				//Si c'est le cas alors couleur blanche
	}					
	text('FIGHT', 740, 710);   // Affichage du message "FIGHT" en bas à gauche
	
	fill(255);				 // Couleur blanche
	rect(1140,640,320,120);		//Limite du heal
	if (1150 < mouseX && mouseX < 1450 && 650 < mouseY && mouseY < 750){	//Detecter la souris sur le heal
		fill(0);				//Si c'est le cas alors couleur noire
	}	
	rect(1150,650,300,100);	    // Fenêtre pour se soigner
	textSize(35);              // Taille du texte, en pixels
	textStyle(BOLD);		 	// Texte en gras
	fill(0);					 // Couleur noire
	if (1150 < mouseX && mouseX < 1450 && 650 < mouseY && mouseY < 750){ //Detecter la souris sur le heal
		fill(255);				//Si c'est le cas alors couleur blanche
	}
	text('HEAL x'+soin, 1220, 710);   // Affichage du message "HEAL" en bas à droite
  }
  
  if (tour=='T3') {                     //detecter que cest le tour du joueur
	fill(255);				 			// Couleur blanche
	rect(640,640,320,120);				//Limite du fight 
	if(650 < mouseX && mouseX < 950 && 650 < mouseY && mouseY < 750){	//Detecter la souris sur le fight
		fill(0);						//Si c'est le cas alors couleur noire
	}
	rect(650,650,300,100);	    // Fenêtre pour attaquer
	textSize(35);              // Taille du texte, en pixels
	textStyle(BOLD);		 	//Texte en gras
	fill(0);					//Couleur noire
	if(650 < mouseX && mouseX < 950 && 650 < mouseY && mouseY < 750){	//Detecter la souris sur le fight
		fill(255);				//Si c'est le cas alors couleur blanche
	}					
	text('FIGHT', 740, 710);   // Affichage du message "FIGHT" en bas à gauche
	
	fill(255);				 // Couleur blanche
	rect(1140,640,320,120);		//Limite du heal
	if (1150 < mouseX && mouseX < 1450 && 650 < mouseY && mouseY < 750){	//Detecter la souris sur le heal
		fill(0);				//Si c'est le cas alors couleur noire
	}	
	rect(1150,650,300,100);	    // Fenêtre pour se soigner
	textSize(35);              // Taille du texte, en pixels
	textStyle(BOLD);		 	// Texte en gras
	fill(0);					 // Couleur noire
	if (1150 < mouseX && mouseX < 1450 && 650 < mouseY && mouseY < 750){ //Detecter la souris sur le heal
		fill(255);				//Si c'est le cas alors couleur blanche
	}
	text('HEAL x'+soin, 1220, 710);   // Affichage du message "HEAL" en bas à droite
  }
  
  if (tour=='T5') {                     //detecter que cest le tour du joueur
	fill(255);				 			// Couleur blanche
	rect(640,640,320,120);				//Limite du fight 
	if(650 < mouseX && mouseX < 950 && 650 < mouseY && mouseY < 750){	//Detecter la souris sur le fight
		fill(0);						//Si c'est le cas alors couleur noire
	}
	rect(650,650,300,100);	    // Fenêtre pour attaquer
	textSize(35);              // Taille du texte, en pixels
	textStyle(BOLD);		 	//Texte en gras
	fill(0);					//Couleur noire
	if(650 < mouseX && mouseX < 950 && 650 < mouseY && mouseY < 750){	//Detecter la souris sur le fight
		fill(255);				//Si c'est le cas alors couleur blanche
	}					
	text('FIGHT', 740, 710);   // Affichage du message "FIGHT" en bas à gauche
	
	fill(255);				 // Couleur blanche
	rect(1140,640,320,120);		//Limite du heal
	if (1150 < mouseX && mouseX < 1450 && 650 < mouseY && mouseY < 750){	//Detecter la souris sur le heal
		fill(0);				//Si c'est le cas alors couleur noire
	}	
	rect(1150,650,300,100);	    // Fenêtre pour se soigner
	textSize(35);              // Taille du texte, en pixels
	textStyle(BOLD);		 	// Texte en gras
	fill(0);					 // Couleur noire
	if (1150 < mouseX && mouseX < 1450 && 650 < mouseY && mouseY < 750){ //Detecter la souris sur le heal
		fill(255);				//Si c'est le cas alors couleur blanche
	}
	text('HEAL x'+soin, 1220, 710);   // Affichage du message "HEAL" en bas à droite  }
  }
  
  if (tour=='T7') {                     //detecter que cest le tour du joueur
	fill(255);				 			// Couleur blanche
	rect(640,640,320,120);				//Limite du fight 
	if(650 < mouseX && mouseX < 950 && 650 < mouseY && mouseY < 750){	//Detecter la souris sur le fight
		fill(0);						//Si c'est le cas alors couleur noire
	}
	rect(650,650,300,100);	    // Fenêtre pour attaquer
	textSize(35);              // Taille du texte, en pixels
	textStyle(BOLD);		 	//Texte en gras
	fill(0);					//Couleur noire
	if(650 < mouseX && mouseX < 950 && 650 < mouseY && mouseY < 750){	//Detecter la souris sur le fight
		fill(255);				//Si c'est le cas alors couleur blanche
	}					
	text('FIGHT', 740, 710);   // Affichage du message "FIGHT" en bas à gauche
	
	fill(255);				 // Couleur blanche
	rect(1140,640,320,120);		//Limite du heal
	if (1150 < mouseX && mouseX < 1450 && 650 < mouseY && mouseY < 750){	//Detecter la souris sur le heal
		fill(0);				//Si c'est le cas alors couleur noire
	}	
	rect(1150,650,300,100);	    // Fenêtre pour se soigner
	textSize(35);              // Taille du texte, en pixels
	textStyle(BOLD);		 	// Texte en gras
	fill(0);					 // Couleur noire
	if (1150 < mouseX && mouseX < 1450 && 650 < mouseY && mouseY < 750){ //Detecter la souris sur le heal
		fill(255);				//Si c'est le cas alors couleur blanche
	}
	text('HEAL x'+soin, 1220, 710);   // Affichage du message "HEAL" en bas à droite
  }


  
  if (tour=='T2') {                     //detecter que cest le tour du dragon	
    b+=27;								//Faire descendre les flammes
    if (b>799) {							//Si les flammes dépassent 799 pixels
	   a=floor(random(660,1450));					// Tirage au hasard de l'abscisse du prochain obsacle
	   c=floor(random(660,1450));					// Tirage au hasard de l'abscisse du prochain obsacle
	   d=floor(random(660,1450));					// Tirage au hasard de l'abscisse du prochain obsacle
	   e=floor(random(660,1450));					// Tirage au hasard de l'abscisse du prochain obsacle
	   f=floor(random(660,1450));					// Tirage au hasard de l'abscisse du prochain obsacle
       b=0											// Les flammes sont remisent en haut de la page
       timery+=80;									//Le 1er timer descend
       
   }
   
  if (abs(x-a) < 2*r && abs(y-b) < 3*r) {			//Détécter si le coeur et la flamme se touchent
	vie-=3;											//Faire perdre de la vie au joueur		
	score+=3;										//Augmenter le score
   }
   if (abs(x-c) < 2*r && abs(y-b) < 3*r) {			//Détécter si le coeur et la flamme se touchent
	vie-=3;											//Faire perdre de la vie au joueur	
	score+=3;										//Augmenter le score
   }
   if (abs(x-d) < 2*r && abs(y-b) < 3*r) {			//Détécter si le coeur et la flamme se touchent
	vie-=3;											//Faire perdre de la vie au joueur	
	score+=3;										//Augmenter le score
   }
   if (abs(x-e) < 2*r && abs(y-b) < 3*r) {			//Détécter si le coeur et la flamme se touchent
	vie-=3;											//Faire perdre de la vie au joueur	
	score+=3;										//Augmenter le score
   }
   if (abs(x-f) < 2*r && abs(y-b) < 3*r) {			//Détécter si le coeur et la flamme se touchent
	vie-=3;											//Faire perdre de la vie au joueur	
	score+=3;										//Augmenter le score
   }
   if (timery>799) {								//Détécter si le timer dépasse 799
	tour='T3';										//Passer au tour du joueur
	b=-350;											//Remettre Les flammes hors de l'écran pour les cacher
	timery=0;										//Remettre le timer a 0
   }
 }
 

 if (tour=='T4') {                     //detecter que cest le tour du dragon
	 timery3+=4;						//Lancer le timer3
	 if (timery3>999){					//Détécter si le timer3 dépasse 999 pixels
		 tour='T5';						//Passer au tour du joueur
		 timery=0;						//Remettre le timer1 a 0
		 timery2=0;						//Remettre le timer2 a 0
		 timery3=0;						//Remettre le timer3 a 0
	 }
	 if (cote==0){						//Detecter si cote=0
		 timery+=50;					//Lancer le 1er timer
		 if (timery>799){				//Si le timer dépasse 799
	 cote=round(random(1,2));			//On choisi au hasard entre 1 et 2
	 timery=0;							//On remet le timer a 0
	 }
 }
	 if (cote==1){								//Si le cote=1
		fill (50,150,150);						//Couleur bleue
		rect (1050,260,10,330);					//Trait qui sépare la zone de jeu en 2
		triangle (850,300,750,500,950,500);	 	//Creer un triangle
		fill (0);								//Couleur noire
		triangle (850,320,770,490,930,490);		//rendre le triangle vide
		textSize(100);              			//Taille du texte
		textStyle(BOLD);						//Texte en gras
		fill (50,150,150);		 				//Couleur bleue
		text('!', 825, 460);					//Afficher un point d'exclamation
		timery+=45;								//Lancher le 1er timer
		if (timery>799){						//Quand il dépasse 799
			timery=800;							//Le bloquer a 800
			image(img_griffe, 645, 225, 25*r, 25*r);	//Faire apparaitre la griffe
			timery2+=40;						// Lancer le timer 2
			if (x < 1050) {						//Si le coeur est a droite
				vie-=3;							//Il pert de la vie
				score+=3;						//Le score augmente
				}
			if (timery2>799){					//Si le 2eme timer est superieur a 799
				timery2=0;						//Il revient a 0
				cote=0;							//Cote revoent a 0 aussi
			}
		}
	} else {									//Si le cote vaut 2
		fill (50,150,150);						//Couleur bleue
		rect (1050,260,10,330);					//Trait qui sépare la zone de jeu en 2
		triangle (1250,300,1150,500,1350,500);	 //Creer un triangle	 
		fill (0);								//Couleur noire
		triangle (1250,320,1170,490,1330,490);	//rendre le triangle vide
		textSize(100);              			//Taille du texte              
		textStyle(BOLD);						//Texte en gras
		fill (50,150,150);		 				//Couleur bleue		 
		text('!', 1225, 460);					//Afficher un point d'exclamation
		timery+=45;								//Lancher le 1er timer
		if (timery>799){						//Quand il dépasse 799
			timery=800;							//Le bloquer a 800
			image(img_griffe, 1045, 225, 25*r, 25*r);	//Faire apparaitre la griffe
			timery2+=40;						// Lancer le timer 2
			 if (x > 1030) {						//Si le coeur est a gauche
				vie-=3;							//Il pert de la vie
				score+=3;						//Le score augmente
				}
		if (timery2>799){					   //Si le 2eme timer est superieur a 799
			timery2=0;						   //Il revient a 0
			cote=0;						       //Cote revoent a 0 aussi
			}
		}
	}
 }

	if (tour=='T6'){						//Détécter tour du dragon 
		timery+=3;							//Lancer le 1er timer
		if (timery>999){					//Si le timer depasse 999
			timery=0;						//Il est remis a 0
			cote=0;							//Le cote est a 0
			tour='T1';						//Le tour passe au tour du joueur
		}
		if (cote==0){						//Si le cote vaut 0
			h=round(random(285,565));		//On choisi h au hasard entre 285 et 656
			i=round(random(685,1415));		//On choisi i au hasard entre 685 et 1415
			cote=1;							//Cote vaut 1
		}
		if (cote==1){						//Comme cote vaut 1
			fill (255,80,0);				//Couleur orange
			triangle (g-30,h-15,g-30,h+15,g,h);	//Créer un triangle aléatoire en ordonnée
			triangle (i-15,j-25,i,j,i+15,j-25);	//Créer un triangle aléatoire en abscisse
			timery2+=40;						//Faire partir le 2eme timer
			if (timery2>1099){					//Lorsque le timer2 depasse 1099
				fill(200,20,0);					//Couleur rouge
				rect (g+20,h-25,780,50);		//Rectangle rouge au niveau du triangle en ordonnée
				rect (i-25,j+20,50,330);		//Rectangle rouge au niveau du triangle en abscisse
				fill(200,150,0);				//Couleur orange
				rect (g+20,h-20,780,40);		//Rectangle orange au niveau du triangle en ordonnée
				rect (i-20,j+20,40,330);		//Rectangle orange au niveau du triangle en abscisse
				fill(200,250,0);				//Couleur jaune
				rect (g+20,h-15,780,30);		//Rectangle jaune au niveau du triangle en ordonnée
				rect (i-15,j+20,30,330);		//Rectangle jaune au niveau du triangle en abscisse
				fill(255,255,150);				//Couleur blanche
				rect (g+20,h-10,780,20);		//Rectangle blanche au niveau du triangle en ordonnée
				rect (i-10,j+20,20,330);		//Rectangle blanche au niveau du triangle en abscisse
				
				if (y+2*r>h-30 && y+2*r<h+55) {	//Détécter si le coeur est dans le rayon en ordonnée
					vie-=3;						//Faire perdre de la vie au joueur
					score+=3;					//Augmenter le score
				}
				if (x+2*r>i-30 && x+2*r<i+55) {	//Détécter si le coeur est dans le rayon en abscisse
					vie-=3;						//Faire perdre de la vie au joueur
					score+=3;					//Augmenter le score
				}
				timery3+=70;					//Lancer le 3eme timer
				if (timery3>999){				//Quand il atteint plus de 999
					timery2=0;					//Le 2eme timer est remis a 0
					timery3=0;					//Le 3eme timer est remis a 0
					cote=0;						//La cote est remise a 0
				}
			}
		}
	}

//Affichage du coeur//	
 image(img_coeur, x, y, 2*r, 2*r);		// On affiche le coeur
 
 //Quand le joueur clique sur fight//
 if (tour=='A1'){						//Quand le joeur clique sur fight
	 fill(150);							//Couleur grise claire
	 rect (660,260,250,330);			//Rectangle sur le coté gauche
	 fill(90);							//Couleur grise plus foncée
	 rect (900,260,130,330);			//Rectangle milieu droit
	 fill(50);							//Couleur grise noire
	 rect (1025,260,50,330);			//Rectangle du milieu
	 fill(90);							//Couleur grise plus foncée
	 rect (1075,260,130,330);			//Rectangle milieu gauche
	 fill(150);							//Couleur grise claire
	 rect (1200,260,240,330);			//Rectangle cote gauche
	 fill (255);						//Couleur blanche
	 rect (900,260,10,330);				//Affichage d'un des traits qui séparent les parties
	 rect (1025,260,10,330);				//Affichage d'un des traits qui séparent les parties
	 rect (1075,260,10,330);				//Affichage d'un des traits qui séparent les parties
	 rect (1200,260,10,330);				//Affichage d'un des traits qui séparent les parties
	 rect (k,260,10,330);				//Affichage du trait qui se déplace
	 rect(290,290,220,120);				//Affichage de la zone du STOP
	 if (300 < mouseX && mouseX < 500 && 300 < mouseY && mouseY < 400){	//Si la souris est sur le STOP
		fill(0);						//Couleur noire
	}	
	rect(300,300,200,100);	    // Fenêtre pour stopper
	textSize(35);              // Taille du texte, en pixels
	textStyle(BOLD);		 	// Texte en gras
	fill(0);					 // Couleur noire
	if (300 < mouseX && mouseX < 500 && 300 < mouseY && mouseY < 400){	//Si la souris est sur le STOP
		fill(255);						//couleur blache
	}
	text('STOP', 350, 360);				//Affiche le STOP
	
	fill(255);                          //Couleur blanche
	rect(350,timery+450,20,200-timery);	//Création de la barre du timer
	timery+=1;							//Augmenter le timer
	text('Temps', 400, 650);			//Afficher "temps" a coté de la barre du timer
	if(timery==200){					//Si le temps pour attaquer atteint 0
		timery=0;						//Timer remis a 0
		tour='T2';						//Au tour du dragon
	}
	
	 if (cote==0){						//Si le coté=0
	 l=floor(random(15,40));			//choisir la vitesse de la barre entre 15 et 40 pixel/sec
	 cote=1;							//Cote vaut 1
	 A=1;								//A vaut 1
	}
	if(cote==1){						//Si cote vaut 1
	k+=l;								//La barre va vers la doite
	}
	
	if (cote==2){						//Si cote vaut 2
	k-=l;								//La barre va a gauche
}
	if (k>=1425){						//Si la barre dépasse la zone de jeu a droite
		cote=2;							//Cote vaut 2
	}
	if(k<=660){						//Si la barre dépasse la zone de jeu a gauche
		cote=1;							//Cote vaut 1
	}
}

if (tour=='A2'){						//Quand le joeur clique sur fight
	 fill(150);							//Couleur grise claire
	 rect (660,260,250,330);			//Rectangle sur le coté gauche
	 fill(90);							//Couleur grise plus foncée
	 rect (900,260,130,330);			//Rectangle milieu droit
	 fill(50);							//Couleur grise noire
	 rect (1025,260,50,330);			//Rectangle du milieu
	 fill(90);							//Couleur grise plus foncée
	 rect (1075,260,130,330);			//Rectangle milieu gauche
	 fill(150);							//Couleur grise claire
	 rect (1200,260,240,330);			//Rectangle cote gauche
	 fill (255);						//Couleur blanche
	 rect (900,260,10,330);				//Affichage d'un des traits qui séparent les parties
	 rect (1025,260,10,330);				//Affichage d'un des traits qui séparent les parties
	 rect (1075,260,10,330);				//Affichage d'un des traits qui séparent les parties
	 rect (1200,260,10,330);				//Affichage d'un des traits qui séparent les parties
	 rect (k,260,10,330);				//Affichage du trait qui se déplace
	 rect(290,290,220,120);				//Affichage de la zone du STOP
	 if (300 < mouseX && mouseX < 500 && 300 < mouseY && mouseY < 400){	//Si la souris est sur le STOP
		fill(0);						//Couleur noire
	}	
	rect(300,300,200,100);	    // Fenêtre pour stopper
	textSize(35);              // Taille du texte, en pixels
	textStyle(BOLD);		 	// Texte en gras
	fill(0);					 // Couleur noire
	if (300 < mouseX && mouseX < 500 && 300 < mouseY && mouseY < 400){	//Si la souris est sur le STOP
		fill(255);						//couleur blache
	}
	text('STOP', 350, 360);				//Affiche le STOP
	
	fill(255);                          //Couleur blanche
	rect(350,timery+450,20,200-timery);	//Création de la barre du timer
	timery+=1;							//Augmenter le timer
	text('Temps', 400, 650);			//Afficher "temps" a coté de la barre du timer
	if(timery==200){					//Si le temps pour attaquer atteint 0
		timery=0;						//Timer remis a 0
		tour='T2';						//Au tour du dragon
	}
	
	 if (cote==0){						//Si le coté=0
	 l=floor(random(15,40));			//choisir la vitesse de la barre entre 15 et 40 pixel/sec
	 cote=1;							//Cote vaut 1
	 A=1;								//A vaut 1
	}
	if(cote==1){						//Si cote vaut 1
	k+=l;								//La barre va vers la doite
	}
	
	if (cote==2){						//Si cote vaut 2
	k-=l;								//La barre va a gauche
}
	if (k>=1425){						//Si la barre dépasse la zone de jeu a droite
		cote=2;							//Cote vaut 2
	}
	if(k<=660){						//Si la barre dépasse la zone de jeu a gauche
		cote=1;							//Cote vaut 1
	}
}
 
 if (tour=='A3'){						//Quand le joeur clique sur fight
	 fill(150);							//Couleur grise claire
	 rect (660,260,250,330);			//Rectangle sur le coté gauche
	 fill(90);							//Couleur grise plus foncée
	 rect (900,260,130,330);			//Rectangle milieu droit
	 fill(50);							//Couleur grise noire
	 rect (1025,260,50,330);			//Rectangle du milieu
	 fill(90);							//Couleur grise plus foncée
	 rect (1075,260,130,330);			//Rectangle milieu gauche
	 fill(150);							//Couleur grise claire
	 rect (1200,260,240,330);			//Rectangle cote gauche
	 fill (255);						//Couleur blanche
	 rect (900,260,10,330);				//Affichage d'un des traits qui séparent les parties
	 rect (1025,260,10,330);				//Affichage d'un des traits qui séparent les parties
	 rect (1075,260,10,330);				//Affichage d'un des traits qui séparent les parties
	 rect (1200,260,10,330);				//Affichage d'un des traits qui séparent les parties
	 rect (k,260,10,330);				//Affichage du trait qui se déplace
	 rect(290,290,220,120);				//Affichage de la zone du STOP
	 if (300 < mouseX && mouseX < 500 && 300 < mouseY && mouseY < 400){	//Si la souris est sur le STOP
		fill(0);						//Couleur noire
	}	
	rect(300,300,200,100);	    // Fenêtre pour stopper
	textSize(35);              // Taille du texte, en pixels
	textStyle(BOLD);		 	// Texte en gras
	fill(0);					 // Couleur noire
	if (300 < mouseX && mouseX < 500 && 300 < mouseY && mouseY < 400){	//Si la souris est sur le STOP
		fill(255);						//couleur blache
	}
	text('STOP', 350, 360);				//Affiche le STOP
	
	fill(255);                          //Couleur blanche
	rect(350,timery+450,20,200-timery);	//Création de la barre du timer
	timery+=1;							//Augmenter le timer
	text('Temps', 400, 650);			//Afficher "temps" a coté de la barre du timer
	if(timery==200){					//Si le temps pour attaquer atteint 0
		timery=0;						//Timer remis a 0
		tour='T2';						//Au tour du dragon
	}
	
	 if (cote==0){						//Si le coté=0
	 l=floor(random(15,40));			//choisir la vitesse de la barre entre 15 et 40 pixel/sec
	 cote=1;							//Cote vaut 1
	 A=1;								//A vaut 1
	}
	if(cote==1){						//Si cote vaut 1
	k+=l;								//La barre va vers la doite
	}
	
	if (cote==2){						//Si cote vaut 2
	k-=l;								//La barre va a gauche
}
	if (k>=1425){						//Si la barre dépasse la zone de jeu a droite
		cote=2;							//Cote vaut 2
	}
	if(k<=660){						//Si la barre dépasse la zone de jeu a gauche
		cote=1;							//Cote vaut 1
	}
}
 
 //gestion de la victoire et de la défaite//
  	if(pv<=0){							//Si le dragon n'a plu de vie
		pv=0;							//On empeche la vie d'etre négative
		fill(0);						//Couleur noire
		rect(0,0,3000,2000);			//On remet toute la page en noir
		fill (255)                    //Couleur blanche
		rect (650,250,800,350)            // Remettre la zone de jeu
		fill (0)                      //Couleur noire
		rect (660,260,780,330)			//Remettre la zone de jeu
		textSize(70);              // Taille du texte, en pixels
		textStyle(BOLD);		 	//Texte en gras
		fill(50,150,200);					 // Couleur bleue
		text('VICTOIRE!', 850,200);   // Affichage de la victoire
		
		textSize(40);              // Taille du texte, en pixels
		fill(50,150,200);					 // Couleur bleue
		text('Score de départ: 300', 1450,300);	//Afficher le score de départ de 300
		text('Dégats subis: '+score, 1450,350);	//Afficher le score
		text('Bonus victoire: +100', 1450,400);	//Afficher un bonus de victoire de 100
		score=400-score;						//Calculer le score final du joueur
		text('Total: '+score, 1450,500);		//L'afficher
		rect (1450,430,1000,10);				//Faire un rectangle bleu pour délimiter le score final
		image(img_coeur,x,y,2*r,2*r);			//Remettre le coeur où il etait
		noLoop();								//Figer la page
	}
 
 	if(vie<=0){							//Si le joueur n'a plu de vie
		vie=0;							//On empeche la vie d'etre négative
		fill(0);						//Couleur noire
		rect(0,0,3000,2000);			//On remet toute la page en noir
		fill (255)                    //Couleur blanche
		rect (650,250,800,350)            // Remettre la zone de jeu
		fill (0)                      //Couleur noire
		rect (660,260,780,330)            // Remettre la zone de jeu
		textSize(70);              // Taille du texte, en pixels
		textStyle(BOLD);		 	//Texte en gras
		fill(255,50,50);					 // Couleur rouge
		text('GAME OVER', 800,200);   // Affichage du game over
		
		textSize(40);              // Taille du texte, en pixels
		fill(255,50,50);					 // Couleur rouge
		text('Score de départ: 300', 1450,300);	//Afficher le score de départ de 300
		text('Dégats subis: '+score, 1450,350);	//Afficher le score
		text('Bonus victoire: 0', 1450,400);	//Afficher un bonus de victoire de 0
		score=300-score;						//Calculer le score final du joueur
		text('Total: '+score, 1450,500);		//L'afficher
		rect (1450,430,1000,10);				//Faire un rectangle rouge pour délimiter le score final
		image(img_casse,x,y,2*r,2*r);			//Mettre le coeur casse où le coeur etait de base
		noLoop();								//Figer la page
	}
}

	
  // Cette fonction est appelé une seule fois, à chaque clique sur la souris
function mousePressed() {
	if (650 < mouseX && mouseX < 950 && 650 < mouseY && mouseY < 750 && tour=='T1') {		// Détecter un clic souris sur le menu "FIGHT" en tour 1
	tour='A1';																				//Lancer l'animation pour attaquer
	timery=0;																				//timer1 a 0
	timery2=0;																				//timer2 a 0
	timery3=0;																				//timer3 a 0
	cote=0;																				    //cote a 0
  }
  
  if (1150 < mouseX && mouseX < 1450 && 650 < mouseY && mouseY < 750 && tour=='T1' && heal=='vrai') {		// Détecter un clic souris sur le menu "HEAL" en tour 1 et quand le joeur peut se soigner
	vie=100;																				//Soigne le joueur
	tour='T2';																				//Tour du dragon
	timery=0;																				//timer1 a 0
	timery2=0;																				//timer2 a 0
	timery3=0;																				//timer3 a 0
	cote=0;																				    //cote a 0
	soin-=1;																				//Retirer 1 soin
  }
  
  if (650 < mouseX && mouseX < 950 && 650 < mouseY && mouseY < 750 && tour=='T3') {		// Détecter un clic souris sur le menu "FIGHT" en tour 3
	tour='A2';																				//Lancer l'animation pour attaquer
	timery=0;																				//timer1 a 0
	timery2=0;																				//timer2 a 0
	timery3=0;																				//timer3 a 0
	cote=0;																				    //cote a 0
  }
  
  if (1150 < mouseX && mouseX < 1450 && 650 < mouseY && mouseY < 750 && tour=='T3' && heal=='vrai') {		// Détecter un clic souris sur le menu "HEAL" en tour 3 et quand le joeur peut se soigner
	vie=100;																				//Soigne le joueur
	tour='T4';																				//Tour du dragon
	timery=0;																				//timer1 a 0
	timery2=0;																				//timer2 a 0
	timery3=0;																				//timer3 a 0
	cote=0;																				    //cote a 0
	soin-=1;																				//Retirer 1 soin
  }
  
  if (650 < mouseX && mouseX < 950 && 650 < mouseY && mouseY < 750 && tour=='T5') {		// Détecter un clic souris sur le menu "FIGHT" en tour 5
	tour='A3';																				//Lancer l'animation pour attaquer
	timery=0;																				//timer1 a 0
	timery2=0;																				//timer2 a 0
	timery3=0;																				//timer3 a 0
	cote=0;																				    //cote a 0
  }
  
  if (1150 < mouseX && mouseX < 1450 && 650 < mouseY && mouseY < 750 && tour=='T5' && heal=='vrai') {		// Détecter un clic souris sur le menu "HEAL" en tour 5 et quand le joeur peut se soigner
	vie=100;																				//Soigne le joueur
	tour='T6';																				//Tour du dragon
	timery=0;																				//timer1 a 0
	timery2=0;																				//timer2 a 0
	timery3=0;																				//timer3 a 0
	cote=0;																				    //cote a 0
	soin-=1;																				//Retirer 1 soin
  }
  
  if (300 < mouseX && mouseX < 500 && 300 < mouseY && mouseY < 400 && A==1) {				//Détecter un clic souris sur le "STOP" quand A=1
	l=0;																					//Mettre l a 0
	cote=0;																				    //Cote a 0
	A=0;																					//Mettre A a 0
	if (tour=='A2'){																		//Si le tour etait a A2
		tour='T4';																			//Alors le tour passe a T4
	}
	if (tour=='A3'){																		//Si le tour etait a A3
		tour='T6';																			//Alors le tour passe a T6
	}		
	if (tour=='A1'){																		//Si le tour etait a A1
		tour='T2';																			//Alors le tour passe a T2
	}
	if (660 < k && k <= 900){																//Si la barre etait a gauche
		pv-=floor(random(1000,1100));														//Le dragon perd entre 1000 et 1100 pv
		m-=25;																				//Le dragon se déplace pour montrerqu'il a pris un coup
	}
	if (900 < k && k <= 1025){																//Si la barre etait au milieu gauche
		pv-=floor(random(1250,1350));														//Le dragon perd entre 1250 et 1350 pv
		m-=25;																				//Le dragon se déplace pour montrerqu'il a pris un coup
	}
	if (1025 < k && k <= 1075){																//Si la barre etait au centre
		pv-=floor(random(1670,1870));														//Le dragon perd entre 1670 et 1870 pv
		m-=25;																				//Le dragon se déplace pour montrerqu'il a pris un coup
	}
	if (1075 < k && k <= 1200){																//Si la barre etait au milieu droite
		pv-=floor(random(1250,1350));														//Le dragon perd entre 1250 et 1350 pv
		m-=25;																				//Le dragon se déplace pour montrerqu'il a pris un coup
	}
	if (1200 < k && k < 1450){																//Si la barre etait a droite
		pv-=floor(random(1000,1100));														//Le dragon perd entre 1000 et 1100 pv
		m-=25;																				//Le dragon se déplace pour montrerqu'il a pris un coup
	}
 }
}

