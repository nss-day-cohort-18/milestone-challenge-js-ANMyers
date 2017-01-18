


function treeFunction() {

  var treeValue = document.getElementById("tree-height").value;
  var treeHeight = Number(treeValue)

  var treeCharacter = document.getElementById("tree-character").value;

  var pineTree = [];
  pineTree[treeValue] = "the array needs a length value";

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

  for (var k = 0; k < pineTree.length; k++) {
    pineTree[k] = " ";
  }

  for (var l = 0; l < treeHeight; l++) {

     pineTree[treeHeight + l] = treeCharacter;
     pineTree[treeHeight - l] = treeCharacter;

    var wholeTree = pineTree.join("");
    console.log(wholeTree);
  }


};
// clicking event listener
var clicker = document.getElementById("submit-button");
clicker.addEventListener('click', treeFunction)

// enter event listener
document.addEventListener('keyup', function (potato) {
  if (potato.which === 13) {
    treeFunction();
  }
});
//tests done below


  


