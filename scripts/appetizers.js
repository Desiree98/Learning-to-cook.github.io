let app = document.getElementById('appetizers_recipies');

let app_recipes = [{
    name: "New England Clam Chowder",
    img: '../Recipe Images/New England clam chowder.webp',
    ingredients: [
        "4 slices bacon",
        "½ cup chopped onion",
        "4 potatoes, peeled and cubed",
        "1 tablespoon all-purpose flour",
        "1 cup bottled clam juice",
        "1 cup half-and-half",
        "2 (6 ounce) cans minced clams",
        "salt and pepper to taste",
        "½ cup heavy cream (Optional)",
        "2 tablespoons chopped fresh parsley"
        
    ],
    directions: [
        "In a large saucepan over medium high heat, fry the bacon until crisp, about 10 minutes. Drain on paper towels, reserving the bacon fat in the pan, crumble and set aside.",
        "In the same saucepan with the bacon fat, saute the onion and potatoes for 3 to 5 minutes. Sprinkle with the flour and stir well to coat.",
        "Pour in the clam juice, bring to a boil, reduce heat to low and simmer for about 15 minutes, or until potatoes are tender.",
        "Add the half-and-half and minced clams and season with salt and pepper to taste. Finally, whisk in the heavy cream, if desired. Allow to heat through, about 5 minutes. Garnish with the parsley and crumbled bacon. (Note: Do not boil if adding cream.)",
    ]
},
{
    name: "Chef John's Crab-Stuffed Sole",
    img: '../Recipe Images/chef johns crab stuffed sole.webp',
    ingredients: [
        "cooking spray",
        "4 ounces fresh Dungeness crabmeat",
        "1 tablespoon finely diced poblano pepper",
        "1 tablespoon panko breadcrumbs",
        "2 teaspoons minced green onion",
        "½ teaspoon lemon juice",
        "salt and ground black pepper to taste",
        "⅓ cup mayonnaise",
        "2 teaspoons lemon zest",
        "1 pinch cayenne pepper",
        "6 (2 ounce) sole fillets",
        "salt to taste",
        "⅛ teaspoon paprika, or to taste"
        
        
    ],
    directions: [
        "Preheat the oven to 400 degrees F (200 degrees C). Lightly grease a baking dish with cooking spray.",
        "Mix crabmeat, poblano pepper, panko, green onion, lemon juice, salt, and black pepper together in a bowl until well combined. Stir mayonnaise, lemon zest, and cayenne pepper together in a second bowl.",
        "Place sole fillets onto a work surface with the flat sides facing up. Season with salt. Divide crab mixture between fillets. Roll fillets around filling and place into the prepared baking dish, seam-side down.",
        "Spread 1/2 of the mayonnaise mixture over the sides and tops of each fillet. Spoon remaining mayonnaise mixture into a piping bag, then pipe it in a zigzag over fillets. Sprinkle paprika over top.",
        "Bake in the preheated oven until fish flakes easily with a fork and topping is browned, 15 to 20 minutes."
    ]
},
{
    name: "Smoked Oyster Dip",
    img: '../Recipe Images/Smoked oyster Dip.webp',
    ingredients: [

        "1 (8 ounce) package cream cheese, softened",
        "1 (3.75 ounce) can smoked oysters",
        "2 tablespoons sour cream",
        "1 teaspoon liquid smoke flavoring",
        "1 teaspoon Worcestershire sauce",
        "¼ teaspoon hot sauce (such as Tabasco)"
        
    ],
    directions: [
        "Combine cream cheese, oysters, sour cream, liquid smoke, Worcestershire sauce, and hot sauce in a blender. Blend until well mixed and oysters are chopped to desired consistency.",   
        "Melt butter in a medium skillet over medium heat. Add onion and garlic; saute until golden brown 7 to 8 minutes. Remove from the heat.",
       
    ]
},
{
        name: "Mussele Vinaigrette",
        img: '../Recipe Images/Mussle Vinaigrette.webp',
        ingredients: [

            "24 fresh mussels, scrubbed and debearded",
            "1 small green bell pepper, seeded and diced",
            "1 small red bell pepper, seeded and diced",
            "1 small yellow bell peppers, seeded and diced",
            "½ cup olive oil",
            "¼ cup red wine vinegar",
            "2 tablespoons chopped fresh parsley",
            "1 hard-cooked egg, chopped",
            "½ teaspoon salt",
            "1 pinch ground black pepper"
            
        ],
        directions: [
            "1.	Bring one inch of water to a boil in a large pot. Add mussels, cover, and steam for 3 to 5 minutes, until they are all open. Drain. Remove one side of each shell, and arrange the open shelled mussels on a serving platter. Discard any mussels that do not open.",
            "2.	In a medium bowl, mix together the red, yellow, and green bell peppers, olive oil, wine vinegar, parsley, egg, salt, and pepper. Spoon over the mussels on the shells. Refrigerate until serving."
        ]
}];
app.innerHTML = '';
app_recipes.forEach(el => {
    app.innerHTML += `<div class="Recipe">
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