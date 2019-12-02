import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import CategoryCard from "./CategoryCard";

require("dotenv").config();
const PORT = process.env.SERVER_PORT;
const SERVER = process.env.SERVER_ADDRESS;

const CategoryCardContainer = ({ id }) => {
  const [category, setCategory] = useState(null);

  useEffect(() => {
    fetch(`http://${SERVER}:${PORT}/categoryInfo/${id}`)
      .then(response => response.json())
      .then(response => {
        if (response.type === "Success") {
          setCategory(response.data);
        } else {
          alert("Упс, сломалось :(");
        }
      });
  }, []);

  return <CategoryCard category={category} />;
};

export default connect()(CategoryCardContainer);
