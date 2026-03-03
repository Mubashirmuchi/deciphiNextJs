import { getCategories } from "@/data/loaders";
import CategoryButton from "@/components/Common/category-button";

export async function CategorySelect() {
  const data = await getCategories();
  const categories = data;
  if (!categories) return null;

  return (
    <div className="w-full flex gap-2 justify-center items-center">
      <CategoryButton value="">all</CategoryButton>
      {categories.map((category: { id: number; name: string }) => (
        <CategoryButton key={category.id} value={category.name}>
          {category.name}
        </CategoryButton>
      ))}
    </div>
  );
}
