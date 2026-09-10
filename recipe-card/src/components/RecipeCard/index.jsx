// A named export needs the exact name and curly braces.
import {RECIPE} from './recipe-data'
// These are all default exports, so we can name them whatever we like.
import Card from './Card'
import RecipeImg from './RecipeImg'
import RecipeInfo from './RecipeInfo'
import IngredientsList from './IngredientsList'
import InstructionsList from './InstructionsList'
import './styles.css'

export default function RecipeCard() {
  return (
    <Card>
      <div className="card_text">
        <div className="recipe_header">
          <RecipeInfo title={RECIPE.title} description={RECIPE.description} />
          <RecipeImg imgSrc={RECIPE.imgSrc} />
        </div>
        
        <div className="card_lists">
          <IngredientsList ingredients={RECIPE.ingredients} />
          <InstructionsList instructions={RECIPE.instructions} />
        </div>
      </div>
    </Card>
  )
}