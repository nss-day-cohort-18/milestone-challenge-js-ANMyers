function treeFunction() {

  var treeValue = document.getElementById("tree-height").value;
  var treeHeight = Number(treeValue)
  var treeCharacter = document.getElementById("tree-character").value;

        //test to stop execution if field is blank
        if (treeValue === "") {
          alert("!!  You forgot to give your pine tree a height 0.0!!  ");
          return;
        }
        if (treeCharacter === "") {
          alert("!!  You forgot to give your pine tree a character 0.0  !!");
          return;
        }
        //test to stop for more than 1 character in character field
        if (treeCharacter.length > 1) {
          alert("!!  Only 1 character for your pine tree plz 0.0  !!");
          return;
        }

// Object to store height and character values
    var pineTreeObj = {
      heightValue: treeHeight,
      characterValue: treeCharacter
    }

  var pineTree = [];
    pineTree[pineTreeObj.heightValue] = "the array needs a length";


// Populates the spaces needed to build the tree

  for (var k = 0; k < pineTreeObj.heightValue; k++) {
    pineTree[k] = " ";
  }

// As the loop iterates it replaces a space around the original character
// with another character then joins the array into a string
// and prints the string to the console

  for (var l = 0; l < treeHeight; l++) {

     pineTree[treeHeight + l] = pineTreeObj.characterValue;
     pineTree[treeHeight - l] = pineTreeObj.characterValue;

    var wholeTree = pineTree.join("");
    console.log(wholeTree);
  }


};
// clicking event listener
var clicker = document.getElementById("submit-button");
clicker.addEventListener('click', treeFunction)

// enter event listener
var heightBox = document.getElementById("tree-height");
var characterBox = document.getElementById("tree-character");
heightBox.addEventListener('keyup', function (potato) {
  if (potato.which === 13) {
    treeFunction();
  }
});
characterBox.addEventListener('keyup', function (potato) {
  if (potato.which === 13) {
    treeFunction();
  }
});