
document.addEventListener('DOMContentLoaded', (event) => {

    let whiteSquare = document.getElementsByTagName('footer');
    let mainDiv = whiteSquare[0].firstElementChild;

    class Hero{

        constructor(name,category,points,strength){

            if(category === "mage"){
                this.type = "wizard";
            }else{
                this.type = "Warrior";
            }

            this.name = name.charAt(0).toUpperCase() + name.slice(1);
            this.points = points;
            this.strength = strength;
            let introduction = [];
            introduction.push(`I am ${this.name} the ${this.type}`);
            introduction.push(` I have ${this.points} points in Magic and ${this.strength} in strength !`);
            return introduction;
        }
    }
         
    var mage = new Hero("amadeus", "mage", 10, 3);
          var guerrier = new Hero("pontius", "guerrier", 3, 10);
    mainDiv.innerText = `"${mage.toString()}" "${guerrier.toString()}"`;

});