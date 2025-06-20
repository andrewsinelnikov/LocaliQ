import Categories from "../components/category/Categories";

interface CategoriesPageProps {
  categories: any[];
}

const CategoriesPage = ({ categories }: CategoriesPageProps) => {
  return <Categories categories={categories} />;
};

export default CategoriesPage