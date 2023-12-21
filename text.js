function addRecipe() {
    // Get form values
    const recipeName = document.getElementById('recipe-name').value;
    const ingredients = document.getElementById('ingredients').value;
    const instructions = document.getElementById('instructions').value;

    // Create recipe card
    const recipeCard = document.createElement('div');
    recipeCard.className = 'recipe-card';
    recipeCard.innerHTML = `
        <h3>${recipeName}</h3>
        <p><strong>Ingredients:</strong> ${ingredients}</p>
        <p><strong>Instructions:</strong> ${instructions}</p>
        <button onclick="deleteRecipe(this)">Delete</button>
    `;

    // Append recipe card to the list
    const recipeList = document.getElementById('recipe-list');
    recipeList.appendChild(recipeCard);

    // Clear form inputs
    document.getElementById('recipe-name').value = '';
    document.getElementById('ingredients').value = '';
    document.getElementById('instructions').value = '';
}

function deleteRecipe(button) {
    // Delete the parent recipe card
    const recipeCard = button.parentNode;
    recipeCard.parentNode.removeChild(recipeCard);
}