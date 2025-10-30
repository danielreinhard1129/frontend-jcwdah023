import Image from "next/image";
import { cache } from "react";

interface RecipeDetailProps {
  params: Promise<{ id: string }>;
}

const getRecipe = cache(async (id: string) => {
  const response = await fetch(`https://dummyjson.com/recipes/${id}`);
  const recipe = await response.json();
  return recipe;
});

export const generateMetadata = async (props: RecipeDetailProps) => {
  const { id } = await props.params;
  const recipe = await getRecipe(id);

  return {
    title: recipe.name,
    description: `ini description recipe : ${recipe.name}`,
    openGraph: {
      images: recipe.image,
    },
  };
};

const RecipeDetail = async (props: RecipeDetailProps) => {
  const { id } = await props.params;
  const recipe = await getRecipe(id);

  return (
    <div>
      <h1>RecipeDetail : {id}</h1>

      <p>
        {recipe.name} - {recipe.cuisine}
      </p>

      <Image src={recipe.image} alt="image recipe" width={400} height={300} />
    </div>
  );
};

export default RecipeDetail;
