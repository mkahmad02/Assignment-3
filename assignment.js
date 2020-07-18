function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}
var result = feetToMile(15840);
console.log(result);

function woodCalculator(chair, table, khat){
    var chairCount = chair * 2;
    var tableCount = table * 3;
    var khatCount = khat * 1;
    var totalWood = chairCount + tableCount + khatCount;
    return totalWood;
}

function brickCalculator()

function tinyFriend(name){
    var largest = name[0];
    for (var i = 0; i < name.length; i++) {
        var currentName = name[i];
        if ( currentName > largest){ 
        largest = currentName;
       } 

    }
    return largest;

}
