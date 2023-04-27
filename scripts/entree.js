//Appetizers recipe script page

// referencing element by id on the HTML page
let recepies_container = document.getElementById('entree_recipies');

//Adding Entree recipes to the JS app
let en_recipes = [{
    //Adding the recipe name
    name: "Alaskan Cod and Shrimp with Fresh Tomato",
    //Adding the recipes image
    img: '../Recipe Images/Alaskan Cod and Shrimp with Fresh Tomato.webp',
    //Adding the ingredients
    ingredients: [
        "2 tablespoons olive oil",
        "6 cloves garlic, minced",
        "5 large tomatoes, chopped",
        "1 teaspoon dried oregano",
        "1 pound Alaskan cod",
        "&#189; pound large shrimp, peeled and deveined",
        "salt to taste",
        "1 tablespoon dried oregano, or to taste"
    ],
    //Adding the directions to the page
    directions: [
        "Heat the olive oil in a skillet over medium-high heat; cook and stir the garlic in the oil until golden brown, taking care not to burn the garlic. Add the tomatoes and mix well until they release their juices. Stir in 1 teaspoon oregano.",
        "Place the cod and shrimp on the tomato mixture; season with salt. Cover skillet and simmer 3 minutes. Flip the cod and season again with salt and 1 tablespoon oregano; re-cover and cook another 3 minutes. Remove the cover and allow to cook until the juice evaporates slightly, 2 to 3 minutes.",
    ]
},
{
    //Adding the other recipes to the page
    name: "Salmon Stuffed with Crab and Lobster",
    img: '../Recipe Images/Salmon Stuffed with Crab and Lobster.webp',
    ingredients: [
        "cooking spray",
        "2 small lemons",
        "1 tablespoon salted butter",
        "&#189; medium onion, diced",
        "2 cloves garlic, diced",
        "&#189; pound crabmeat, coarsely chopped",
        "&#189; pound lobster meat, chopped•	6 ounces goat cheese, crumbled",
        "2 (8 ounce) salmon fillets",
        "2 tablespoons barbecue sauce, or to taste",
        "salt and ground black pepper to taste"

    ],
    directions: [
        "Preheat the oven to 350 degrees F (175 degrees C). Spray a baking dish with cooking spray. Slice one lemon and juice the second lemon; set aside.",
        "Melt butter in a medium skillet over medium heat. Add onion and garlic; saute until golden brown 7 to 8 minutes. Remove from the heat.",
        "Chop crab and lobster in a food processor. Transfer into a bowl and mix in onion mixture, goat cheese, and lemon juice.",
        "Cut each salmon piece in half. Fold crab and lobster stuffing into each piece and tie closed with kitchen string. Place in the prepared baking dish. Place lemon slices on top of salmon and cover with barbecue sauce.",
        "Cover the baking dish and bake in the preheated oven for 45 minutes. Uncover and bake until fish flakes easily with a fork, about 15 more minutes.",
    ]
},
{
    name: "Seafood Pot Pie",
    img: '../Recipe Images/Seafood Pot Pie.webp',
    ingredients: [
        "&#189; cup unsalted butter",
        "1 &#189; cups thinly sliced yellow onion",
        "1 cup thinly sliced fennel",
        "1 cup thinly sliced celery",
        "1 cup thinly sliced carrots",
        "&#189; cup all-purpose flour",
        "&#189; cup dry white wine",
        "3 cups fish stock",
        "&#188; cup heavy cream, divided",
        "1 tablespoon kosher salt",
        "&#189; teaspoon ground black pepper",
        "1 (8 ounce) fillet halibut, skin removed, cut into 1-inch pieces",
        "&#189; pound sea scallops, halved horizontally",
        "&#189; pound peeled and deveined medium shrimp",
        "pound jumbo lump crabmeat, picked over",
        "1 cup frozen green peas",
        "2 tablespoons chopped fresh parsley, plus more for garnish",
        "1 large egg, lightly beaten",
        "1 (17.3 ounce) package frozen puff pastry sheets, thawed"

    ],
    directions: [
        "Melt butter in a large saucepan over medium-high heat. Add onion, fennel, celery, and carrots; cook, stirring often, until vegetables are softened, and onion is translucent, about 8 minutes. Add flour and stir to coat vegetables well, stirring for 1 minute. Add wine and stir until wine has evaporated and mixture creates a slurry, about 15 seconds. Add fish stock and 3 tablespoons cream, stirring until mixture thickens into a creamy sauce, about 5 minutes. Season with salt and pepper, then gently fold in seafood, green peas and py.",
        "Reduce heat to medium-low, and, gently stirring often, bring mixture to a low simmer until sauce is warm again but the seafood will not be completely cooked through, about 6-8 minutes. Ladle 2 cups mixture into each of 5 (18- to 20-ounce) ungreased ramekins or ovenproof bowls. Place bowls on a foil-lined rimmed baking sheet.",
        "Preheat oven to 375 degrees F (190 degrees C). Place an oven rack in the middle position.",
        "Whisk egg and remaining 1 tablespoon heavy cream in a small bowl. Place defrosted puff pastry sheets on a lightly floured work surface. Roll each sheet into a 13 x 13 square and cut each square into quarters. Discard any extra pastry. Place a square of pastry over each bowl, decoratively folding corners in to fit the bowl, and brush the top with egg wash. Use the tip of a knife to create 3 small slits in the center of the pastry to allow steam to vent during cooking. You may place chopped fennel fronds or parsley leaves on the top of the pastry, lightly pressing leaves onto the pastry in the egg wash to adhere.",
        "Place baking sheet with individual portions in the preheated oven and bake until pastry is golden browned, and filling is hot and bubbly, about 40 minutes. Let cool 10 minutes before serving.",
    ]
},
{
    name: "Salmon Tacos",
    img: '../Recipe Images/Salmon Tacos.webp',
    ingredients: [
        "Salmon:",
        "4 (3 ounce) fillets salmon fillets, thawed if frozen",
        "2 tablespoons butter, melted",
        "2 tablespoons lemon juice",
        "1 dash Cajun seasoning",
        "Salsa",
        "1 (15.25 ounce) can whole kernel corn, drained",
        "1 (15 ounce) can black beans, drained",
        "1 tomato, diced",
        "&#188; cup diced red onion",
        "&#188; cup chopped fresh cilantro",
        "For Serving:",
        "&#189; cup shredded mild Cheddar cheese",
        "8 corn tortillas, warmed",
        "&#189; cup sour cream (Optional)",
        "&#189; cup guacamole (Optional)"


    ],
    directions: [
        "Preheat the oven to 350 degrees F (175 degrees C).",
        "Make the salmon: Place salmon fillets into a shallow baking dish. Whisk melted butter, lemon juice, and Cajun seasoning together in a small bowl; drizzle over salmon.",
        "Bake salmon in the preheated oven until until fish flakes easily with a fork, about 20 minutes.",
        "While the salmon is baking, make the salsa: Mix corn, black beans, tomato, red onion, and cilantro in a bowl.",
        "Flake cooked salmon into smaller pieces with a fork.",
        "Divide flaked salmon, salsa, and Cheddar cheese among warm tortillas. Wrap tortillas around filling and serve with sour cream and guacamole.",
    ]
}];
// Starting off with the empty container
recepies_container.innerHTML = '';
// Creating a for-Each loop for all recipes on the page
en_recipes.forEach(el => {
    // appending to html
   recepies_container.innerHTML += `<div class="Recipe">
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


