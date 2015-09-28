#pragma strict

public class GameData {
	var _corn : int = 0;
	var _water : int = 0;

	public function get Water() : int {

		return _water;
	
	}

	public function set Water(value : int) {

		_water = value;

	}

	public function get Corn() : int {

		return _corn;
	
	}

	public function set Corn(value : int){

		_corn = value;
	
	}
}

