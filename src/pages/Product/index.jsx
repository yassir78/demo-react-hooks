import React from "react";
import ProductCard from "../../components/products/ProductCard";
import ProductSkeletion from "../../components/products/ProductSkeletion";
import Skeleton from "../../components/shared/Skeleton";
import PageContainer from "../../containers/PageContainer";
import useFetch from "../../helpers/hooks/useFetch";

const Product = () => {
  const { data, isLoading } = useFetch({
    url: "/products",
  });
  console.log(data);
  console.log(isLoading);
  return (
    <PageContainer>
      <h1>Product dzadza</h1>
      <div className="flex flex-wrap">
        {isLoading && <ProductSkeletion></ProductSkeletion>}
        {!isLoading && data.map((product) => <ProductCard></ProductCard>)}
      </div>
    </PageContainer>
  );
};

export default Product;
