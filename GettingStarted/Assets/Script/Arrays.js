#pragma strict

var pigletArray : int[,] = new int[10,3]; //creates a list for
var pigArray : int[,] = new int[10,3];	  //10 animals
var chicksArray : int[,] = new int[10,3]; //and 3 properties
var chickenArray : int[,] = new int[10,3];

function Start () {

	for (var i : int = 0 ; i < 10; i++){

		//piglets
		pigletArray[i, 0] = 1; //visible: 0,no; 1=yes
		pigletArray[i, 1] = 0; //corn
		pigletArray[i, 2] = 0; //water
	
		//print("Piglet " + i + "\t" + pigletArray[i,0] + "\t" + pigletArray[i,1] + "\t" + pigletArray[i,2]);

		//pigs
		pigArray[i, 0] = 1;
		pigArray[i, 1] = 0;
		pigArray[i, 2] = 0;

		//chicks
		chicksArray[i, 0] = 1;
		chicksArray[i, 1] = 0;
		chicksArray[i, 2] = 0;

		//chickens
		chickenArray[i, 0] = 1;
		chickenArray[i, 1] = 0;
		chickenArray[i, 2] = 0;
	}



}

function Update () {

}