let sides = document.getElementById('side_recipies');

let side_recipes = [{
    name: " Mexican-Style Shrimp Cocktail",
    img: '../Recipe Images/Mexican-Style Shrimp Cocktail.webp',
    ingredients: [
        "1 cup clam juice",
        "¼ teaspoon dried oregano",
        "1 pound large shrimp, peeled and deveined",
        "1 ¼ cups peeled, seeded, diced ripe tomatoes",
        "1 cup diced English cucumber",
        "½ cup diced celery",
        "½ cup finely diced red onion",
        "2 tablespoons seeded and diced jalapeno peppers",
        "½ cup ketchup",
        "2 medium limes, juiced",
        "2 tablespoons freshly chopped cilantro, plus more for garnish",
        "1 dash Mexican-style hot sauce",
        "1 large Hass avocado, cubed"
    ],
    directions: [
        "Bring clam juice and oregano to a boil in a saucepan over medium-high heat. Add shrimp; cook and stir just until shrimp turn pink, about 2 minutes. (They will not be cooked through.) Transfer shrimp to a bowl with a slotted spoon; let cool to room temperature. Reserve liquid.",
        "While the shrimp are cooling, combine tomatoes, cucumbers, celery, onion, and jalape&ntilde;os in a mixing bowl. Gently mix in reserved cooking liquid, ketchup, lime juice, 2 tablespoons cilantro, and hot sauce until well combined.",
        "Place four whole shrimp in a small bowl; cover with plastic wrap. Chop remaining shrimp into bite-sized pieces; add to vegetable mixture and stir to combine. Cover with plastic wrap. Refrigerate both bowls until thoroughly chilled, 2 to 3 hours.",
        "When ready to serve, stir avocado into the shrimp cocktail. Divide into four glass bowls; top each with a chilled whole shrimp and garnish with cilantro.",

    ]
},
{
    name: "Shrimp Cheesecake",
    img: '../Recipe Images/Shrimp Cheesecake.webp',
    ingredients: [
        "1 tablespoon olive oil",
        "1 onion",
        "6 teaspoons minced garlic",
        "1 pound fresh shrimp, peeled and deveined",
        "12 shells puff pastry, baked",
        "4 tablespoons butter or margarine",
        "3 (8 ounce) packages cream cheese, softened",
        "4 eggs",
        "½ cup heavy cream",
        "16 ounces smoked Gouda, grated",
        "2 teaspoons salt"

        
    ],
    directions: [
        "Preheat oven to 350 degrees F (175 degrees C).",
        "In a large skillet over medium-low heat, warm oil and saute onions and garlic until onions are translucent; set aside to cool. When cool, pour off liquid reserving garlic.",
        "Cut shrimp into 1/2 inch pieces, reserving 12 uncut for garnish. In a large skillet over medium-low heat, melt butter and add reserved garlic and all shrimp; cook shrimp for 2 to 4 minutes or until done.",
        "Remove center circle and a small portion of inside of cooled puff pastry shells.",
        "In a medium bowl, beat cream cheese until creamy; add one egg at a time and beat until well mixed. Add cream, Gouda, onions, shrimp and salt.",
        "Spoon filling into puff pastry shells.",
        "Bake in preheated oven for 20 to 25 minutes or until filling is browned on top. Garnish with whole shrimp and chopped chives; serve."
    ]
},
{
    name: "Swai Fish Tacos",
    img: '../Recipe Images/Swai Fish Tacos.webp',
    ingredients: [
        "2 tablespoons olive oil, divided",
        "1 onion, thinly sliced",
        "1 red bell pepper, sliced into thin strips",
        "1 jalapeno pepper, sliced into thin strips",
        "2 cloves garlic, minced",
        "4 (4 ounce) fillets swai fish, cut into 1-inch cubes",
        "2 tablespoons chili powder",
        "½ teaspoon sea salt",
        "½ teaspoon ground cumin",
        "¼ teaspoon coarsely ground black pepper",
        "12 corn tortillas, warmed",
        "1 cup shredded Monterey Jack cheese"
        
        
    ],
    directions: [
        "Heat 1 tablespoon olive oil in a saut&eacute; pan over medium-high heat. Cook and stir onion, red bell pepper, jalape&ntilde;o, and garlic in hot oil until slightly softened, about 4 minutes. Transfer vegetables to a plate and set aside.",
        "Heat the remaining 1 tablespoon olive oil in the same pan. Cook swai in hot oil, stirring occasionally, for 2 minutes. Add chili powder, salt, cumin, and black pepper; cook and stir until fish is opaque in the center, 1 to 2 minutes. Return vegetables to the pan and cook until heated through.",
        "Divide fish and vegetables between tortillas. Sprinkle with Monterey Jack cheese."
    ]
},
{
    name: "Maille Dijon Shrimp",
    img: '../Recipe Images/Maille Dijon Shrimp.webp',
    ingredients: [
        "2 tablespoons Maille Old Style Mustard",
        "12 fresh shrimp",
        "1 onion, sliced",
        "1 green pepper, finely chopped",
        "1 clove garlic, crushed",
        "1 tablespoon sunflower oil"
        
    ],
    directions: [
        "Place sunflower oil in a skillet. Add the onion, green pepper and garlic and cook for 5 minutes. Add the Maille Old Style Mustard and cook for another 2 minutes. Add the shrimp and cook 5 minutes more. Season to taste. Serve with a salad of fine herbs (chives, chervil, parsley, basil)."
    ]

    
}];
sides.innerHTML = '';
 side_recipes.forEach(el => {
    sides.innerHTML += `<div class="Recipe">
    <p class="RecipeTitle"> <strong> ${el.name} </strong> </p>
    <img class="seafoodIMG" src="${el.img}">
    <p class="Ingredients"> <strong> Ingredients </strong> </p>
    <ul>
    ${el.ingredients.map(ing => {
        return `<li>${ing}</li>`;
    }).join('')}
    </ul>
    <p class="Directions"> <strong> Directions </strong> </p>
    <ol>
    ${el.directions.map(dir => {
        return `<li>${dir}</li>`;
    }).join('')}
    </ol>
</div>`;
});