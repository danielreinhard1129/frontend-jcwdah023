interface RecipeDetailProps {
  params: Promise<{ id: string }>;
}

const RecipeDetail = async (props: RecipeDetailProps) => {
  const { id } = await props.params;

  return <div>RecipeDetail : {id}</div>;
};

export default RecipeDetail;
