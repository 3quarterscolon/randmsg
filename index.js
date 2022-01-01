const LENGTH = 6;

var wordList = [
	"Banana", "Apple", "Cat", "Tree", "Acorn", "Batch", "Use", "Write", "In",
    "Vue", "Svelte", "C", "Program", "Write", "Microsoft", "Windows", "Mac", "Computer", "Hello",
    "Git", "GitHub", "Meow!", "Who", "What", "Where", "When", "Why", "Then", "Bit", "Bit",
    "Byte", "Kite", "Bottom", "Top", "Padding", "HTML", "CSS", "SCSS", "Sometimes", "Someday",
    "Art", "Math", "Dog", "Visual", "Studio", "Code", "World", "Did", "Know", "Random", "Generation",
    "Fruit", "That", "Generic", "Material", "Battle", "Crown", "Turn", "Around", "Safe", "Sound",
    "Pound", "Found", "Camera", "Delightful", "Frightful", "Orb", "Cube", "Zoom", "Boom", "Cake", "Icecream",
    "Scream", "Team", "Can", "You", "Meat", "Meet", "Discrete", "Heat", "Dictionary", "Pictionary", "Array",
    "Day", "Say", "May", "June", "August", "Red", "Green", "Blue", "Yellow", "Software", "Hardware", "Tail", "Wind",
    "Vanilla", "Chocolate", "Coffee", "Randomization", "RNG", "Length", "Floor", "Door", "More",
    "Document", "Get", "Element", "By", "ID", "Span", "innerHTML", "Though", "Although", "Almighty",
    "Rust", "Rusty", "Rusted", "Water", "Hydrogen", "Nanoparticle", "Chemical", "Reaction"
]

function randMSG() {
	let result = [];
    for (let i = 0; i < LENGTH; i++) {
        result[i] = wordList[Math.floor(Math.random() * wordList.length)];
    }
    
    document.getElementById("a").innertext = result.join(" ") + ".";
}
