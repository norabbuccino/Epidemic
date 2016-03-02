﻿// the location object to be cloned
var locationPrefab : Location;

var numHomes      = 6;
var numWorks      = 3;
var numSchools    = 1;
var numHospitals  = 1;

private var locationCount;

private var assignedHomes = 0;
private var assignedWorks = 0;

// Awake() is like Start(), but it happens before all start functions. We make 
// all the locations in Awake() so that if a script's Start() function tries to
// find a location, that location will already exist.
function Awake () {
  locationCount = 1;
  // general locations
  makeLocations(numHomes, "Home");
  makeLocations(numWorks, "Work");
  makeLocations(numSchools, "School");
  makeLocations(numHospitals, "Hospital");
  // special locations
  var loc : Location;
  loc = Instantiate(locationPrefab);
  loc.name = "Sleep";
  loc.index = locationCount++;
  loc.transform.parent = this.transform;  
  loc.transform.SetAsFirstSibling();
  // make the prefab the travel location
  locationPrefab.name = "Travel";
  locationPrefab.index = locationCount++;
  locationPrefab.transform.parent = this.transform;
}

function makeLocations(num : int, name : String) {
  var i : int;
  var loc : Location;
  for (i = 1; i <= num; i++) {
    loc = Instantiate(locationPrefab);
    loc.name = name + " " + i;
    loc.index = locationCount++;
    loc.transform.parent = this.transform;
  }
}

function assignHome () : String {
  // there's an empty house
  if (assignedHomes < numHomes) {
    assignedHomes++;
    return "Home " + assignedHomes;
  }
  // no empty houses
  else {
    return "Home " + Random.Range(1,numHomes);
  }
}

function assignWork () : String {
  // there's an empty work
  if (assignedWorks < numWorks) {
    assignedWorks++;
    return "Work " + assignedWorks;
  }
  // no empty work
  else {
    return "Work " + Random.Range(1,numWorks);
  }
}
