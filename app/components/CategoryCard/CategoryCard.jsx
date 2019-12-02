import React, { useEffect, useState } from "react";

require("dotenv").config();
const PORT = process.env.SERVER_PORT;
const SERVER = process.env.SERVER_ADDRESS;

const CategoryCard = ({ id }) => {
  const [category, setCategory] = useState({
      id: "",
      name: "",
  });

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

  return (
    <li key={category.id} className="border category-card">
      <h5>{category.name}</h5>
    </li>
  );
};

export default CategoryCard;
