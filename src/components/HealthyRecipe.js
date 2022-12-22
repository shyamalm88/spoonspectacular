import { ProgressSpinner } from "primereact/progressspinner";
import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { fetchHealthyRecipeData } from "../services/actions/healthyRecipeData.action";
// import Fat from "./fat.png";

const HealthyRecipe = ({ healthyRecipeData }) => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const obj = {
      maxFat: 100,
      maxCalories: 100,
      number: 6,
    };
    dispatch(fetchHealthyRecipeData(obj));
  }, []);
  useEffect(() => {
    console.log(healthyRecipeData);
    setProducts(healthyRecipeData);
    return () => {
      setProducts([]);
    };
  }, [healthyRecipeData]);

  return products.length ? (
    products.map((x) => {
      return (
        <div
          className="col-md-4"
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
          key={x.id}
        >
          <div className="profile-card-4 text-center">
            <img src={x.image} className="img img-responsive full-width" />
            <div className="profile-content">
              <div className="profile-name">{x.title}</div>
              <div className="profile-description">
                <ul className="healthyNutrients">
                  <li>
                    <img src="./rice.png" width="30px" />
                    <strong>Carbs: {x.carbs}</strong>
                  </li>
                  <li>
                    <img src="./fat.png" width="30px" />
                    <strong>Fat: {x.fat}</strong>
                  </li>
                  <li>
                    <img src="./meat.png" width="30px" />
                    <strong>Protein: {x.protein}</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    })
  ) : (
    <ProgressSpinner />
  );
};

const mapStateToProps = (state) => {
  return {
    healthyRecipeData: state.healthyRecipeData.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadData: () => dispatch(fetchHealthyRecipeData()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HealthyRecipe);
