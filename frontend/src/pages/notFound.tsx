import NotFound from '../components/common/NotFound';
import CategoryNav from '../components/layout/CategoryNav';
import Awning from '../components/layout/Awning';

const NotFoundPage = () => {
  return (
    <>
      <CategoryNav />
      <Awning />
      <NotFound />
    </>
  );
};

export default NotFoundPage;