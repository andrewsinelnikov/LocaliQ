import CategoriesList from '../components/category/Categories';

const CategoriesPage = ({ data }: any) => {
  return <Categories categories={data} />;
};

export default CategoriesPage