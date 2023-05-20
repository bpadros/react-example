// import { useContext, Fragment } from "react";
// import { CategoriesContext } from "../../contexts/categories.context";
// import CategoryPreview from '../../components/category-preview/category-preview.component'
import { Route,Routes } from "react-router-dom";
import "./shop.styles.css";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

const Shop = () => {
//   const { categoriesMap } = useContext(CategoriesContext);
  return (
    // <div className='shop-container'>
    //   {Object.keys(categoriesMap).map((title) => {
    //    const products = categoriesMap[title];
    //    return <CategoryPreview key={title} title={title} products={products} />
    //   })}
    // </div>
    <Routes>
    <Route index element={<CategoriesPreview/>}/>
    <Route path=":category" element={<Category/>}/>
    </Routes>
  );
};

export default Shop;
