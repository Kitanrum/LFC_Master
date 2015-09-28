#pragma strict

var anim : Animator;
var takeHash : int = Animator.StringToHash ("Take");
var bucket  = new GameData();
var touching : boolean = false;

function Start () {

	anim = GetComponent("Animator");

}

/*function OnTriggerEnter (water : Collider) {

	if (Input.GetKeyDown (KeyCode.T) || bucket.Water < 11) {

		anim.SetTrigger (takeHash);
		bucket.Water = bucket.Water + 1;
		Debug.Log (bucket.Water);

	}

	if (bucket.Water == 10){

		Debug.Log("No More Space");

	}

}
*/
function OnTriggerEnter (corn : Collider) {

	touching = true;

}

function OnTriggerStay (corn : Collider) {

	if (Input.GetKeyDown(KeyCode.T) && bucket.Corn < 10){

		anim.Play(takeHash);
		bucket.Corn = bucket.Corn + 1;
		Debug.Log("Pressed it");
	}

	if (bucket.Corn == 10){

		Debug.Log("No More Space");
	}
}

function OnTriggerExit (corn : Collider) {

	touching = false;
}
