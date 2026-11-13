//alert("Testing the js load")

const url = "https://www.themealdb.com/api/json/v1/1/random.php"

fetch(url)
.then ((response) => response.json())
.then ((data) => {   

    console.log(data)
   
    
    const meal = data.meals[0];
    
    console.log(data.meals[0])
    getRecipe(meal)
    
})



function getRecipe(meal)
{

    console.log("Recipe data received  ")
    console.log(meal)


    let myListofIngredients = ""



    for(i = 1; i<=20; i++)        
    {
        if( meal[`strIngredient${i}`])
        {

            myListofIngredients += "<li>" + meal[`strIngredient${i}`] + " --- " + meal[`strMeasure${i}`] + "</li>"
        }
        else
        {
            break;
        }
    }



    myHTML = `<div class="container">
                <h1>Your Today's Meal V2</h1>
                
                <div id="meal" class="row meal"><div class="row">
            <div class="columns five">
                <h2>${meal.strMeal}</h2>
                <img src="${meal.strMealThumb}" alt="Meal Image">
                <p><strong>Category:</strong> ${meal.strCategory}</p>
                <p><strong>Area:</strong> ${meal.strArea}</p>
                <p><strong>Tags:</strong>${meal.strTags} </p>
                <h5>Ingredients:</h5>
                
                <ul>
                
                ${myListofIngredients}
                
                    
                </ul>
                
            </div>
            <div class="columns seven">
                <h4>${meal.strMeal}</h4>
                <p>${meal.strInstructions}</p>
            </div>
        </div>
        
        <div class="row">
            <h5>Video Recipe</h5>
            <div class="videoWrapper">
                <iframe width="380" height="250" src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}">
                
                </iframe>
            </div>
        </div></div>
            </div>`;


document.getElementById('meal').innerHTML = myHTML


}










