# Grandma's Cookbook App

## Data layer

### Data

- Collection of recipes

- Recipe:

  - id: string
  - name: string
  - imageUrl: string
  - cookingTime: number
  - difficulty: string ( Easy | Moderate | Advanced )
  - ingredients: string
  - directions: string
  - user: string

- User State
- UI State

## Actions

- getRecipes()
- addRecipe()
- updateRecipe()
- removeRecipe()
- filterRecipes() -> filter by difficulty

- loginUser()
- logoutUser()

- showModal()
- hideModal()
- showLoader()
- hideLoader()

## Custom hooks

- useRecipes -> getRecipes(), getRecipeById(), addRecipe(), updateRecipe(), removeRecipe()
- useUser –> loginUser()
- useToken -> getDataToken()
- useLocalStorage() -> setToken(), getToken(), removeToken(),

## Components

### Header

- Shows the logo
- Shows the navBar

### NavBar

- Shows a home navLink
- Shows a add navLink
- Shows a logOut button
- Create logoutActionOnClick:
  - Call logoutUser() from useUser (custom hook)
  - removeToken() from useToken (custom hook)
- Send the logoutActionOnClick to LogoutButton

### LoginPage

- Renders LoginForm component
- Recieves a dispatch
- Creates the function handleOnSubmit (receives userCredentials)
  - Calls loginUser(receives userCredentials) from useUser() (custom hook)
  - Decode data token with getDataToken() from useToken custom hook,
  - Dispatch loginUserCreator with decoded data
  - Calls setToken() from useLocalstorage
  - Navigates to ListPage

### LoginForm

- Has its own state (useState)
- receives a handleOnSubmit function
- Create a functionOnHandleOnSubmit
  - Calls preventDefault()
  - Calls handleOnSubmit(userCredentials)
  - Reset UserCredentials
- Shows controls forms (label & input) for username and password.
- Show a button with the text "Login"

### AddFormPAge

- Renders a Form component
- Receives a dispatch
- Create a handleOnSubmit(receives a new recipe from form state)
- Calls addRecipe(receives the new recipe) from useRecipes custom hook
- Dispatchs addRecipeActionCreator
- Navigates to ListPage

### UpdateFormPAge

- Renders a Form component
- Receives a recipe data from props
- Receives a dispatch
- Create a handleOnSubmit(receives an updated recipe from form state)
  - Calls updateRecipe(receives the new recipe) from useRecipes custom hook
  - Dispatchs updateRecipeActionCreator
  - Navigates to ListPage

### Form

- Has its own state (useState)
- Recieves from props:
  - The text for the button
  - Optional recipe data
  - ActionOnSubmit
- If receives a Recipe item from props, set own state properties from Recipe prop
- Shows control forms (label & input) of:
  - Name
  - Image url
  - Difficulty
  - Cooking time (minutes)
  - Ingredients
  - Directions
- Shows button component

### RecipesListPage // Homepage

- Recevies a dispatch
- Call getRecipes() from useRecipes custom hook
- Dispatchs loadRecipesActionCreator
- Receives a collection of Recipes from store with useAppSelector
- Renders RecipesList

### RecipesList

- Receives a collection of recipes from props.
- Renders as many RecipeCard as many recipes are in the collection recived.
- Create removeActionOnClick(receives an id) function
  - Calls removeRecipe(receives an id) from useRecipes custom hook, and removeRecipeActionCreator(id)
- Create a detailsActionOnSubmit(id) who navigates to DetailsPage

### RecipeCard

- Receives a Recipe data from props
- Receives a removeActionOnSubmit to delete
- Receives a detailsActionOnSubmit(id)
- Shows:
  - Image
  - Name
  - Difficulty
  - Cooking time
- Shows the delete button.

### RecipeDetailPage

- Call getRecipeById() from useRecipes custom hook
- Create editActionOnClick() who navigates to UpdateFormPage(recipe)
- Shows all the Recipe data :
  - Image
  - Name
  - Difficulty
  - Cooking time
  - Ingredients
  - Directions
- Shows the update button.

### Button

- Receives a text / icon
- Receives an action on click
- Shows a button with the received text / icon
- Calls the received action when the button is clicked

### Pagination
