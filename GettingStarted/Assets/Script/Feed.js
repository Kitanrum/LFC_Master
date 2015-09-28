#pragma strict
//var stomach  = new GameData();


public var pig : GameObject;

var corn : int = 0;
var water : int = 0;
function Start () {


}

function OnTriggerStay (colt : Collider) {

	if (water > 10){

		colt.GetComponent(bucket.Water) -= 1;

		water++;

		print(water);
	}

	if (corn > 10){

		colt.bucket.Corn = colt.bucket.Corn - 1;

		 corn++;

		 print(corn);
	}

}

function Update () {

	if(corn == 10 || water == 10){

			Instantiate(pig, transform.position, transform.rotation);

	}

}