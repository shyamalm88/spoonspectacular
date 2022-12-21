import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { ProgressSpinner } from "primereact/progressspinner";
import { Carousel } from "primereact/carousel";
import { fetchRandomData } from "../services/actions/randomData.action";

const Random = ({ randomRecipes }) => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const obj = {
      number: 5,
    };
    dispatch(fetchRandomData(obj));
  }, []);
  useEffect(() => {
    setProducts(randomRecipes);
    return () => {
      setProducts([]);
    };
  }, [randomRecipes]);
  return products.length > 0 ? (
    <Carousel
      value={randomRecipes}
      itemTemplate={itemTemplate}
      numVisible={1}
      numScroll={1}
      circular={true}
      showIndicators={false}
    ></Carousel>
  ) : (
    <ProgressSpinner />
  );
};

const itemTemplate = (product) => {
  return (
    <article className="postcard dark red">
      <a className="postcard__img_link" href="#">
        <img
          className="postcard__img"
          src={product.image}
          alt={product.title}
        />
      </a>
      <div className="postcard__text">
        <h1 className="postcard__title blue">
          <a href="#">{product.title}</a>
        </h1>
        <div className="postcard__subtitle small">
          <time>
            <i className="fas fa-calendar-alt mr-2"></i>
            Preparation Time: {product.readyInMinutes} Minutes
          </time>
        </div>
        <div className="postcard__bar"></div>
        <div
          className="postcard__preview-txt"
          dangerouslySetInnerHTML={{ __html: product.summary }}
        ></div>
        <ul className="postcard__tagbox">
          {product.dishTypes.map((x) => {
            return (
              <li className="tag__item" key={x}>
                <i className="fas fa-tag mr-2"></i>
                {x}
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
};

const mapStateToProps = (state) => {
  return {
    randomRecipes: state.randomData.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadData: () => dispatch(fetchRandomData()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Random);
