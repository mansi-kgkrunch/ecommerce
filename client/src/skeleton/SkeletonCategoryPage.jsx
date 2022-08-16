//import SkeletonElement from "./SkeletonElement";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function SkeletonCategoryPage() {
  const categories = [1, 2, 3, 4, 5, 6]

  return (
    <>
      <Skeleton height={287} baseColor="#efedee" borderRadius={0} />
      <div className="shop-main-area  shop-fullwidth">
        <div className="container container-default custom-area">
          <div className="row flex-row-reverse">
            <div className="col-12 col-custom widget-mt">
              <div className="row shop_wrapper grid_4">
                { 
                  categories.map((item, i) => (
                    <div
                      key={i}
                      className="col-md-6 col-sm-6 col-lg-4 col-custom product-area"
                    >
                      <div className="single-product position-relative">
                        <Skeleton height={400} />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
