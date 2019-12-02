import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchThings } from '../../store/actions/catalogActions';

require('dotenv').config();

const PORT = process.env.SERVER_PORT;
const SERVER = process.env.SERVER_ADDRESS;

const CategoryCard = ({ categoryId, fetchThings }) => {
  const [category, setCategory] = useState({
    id: '',
    name: '',
  });

  useEffect(() => {
    fetch(`http://${SERVER}:${PORT}/categoryInfo/${categoryId}`)
      .then((response) => response.json())
      .then((response) => {
        if (response.type === 'Success') {
          setCategory(response.data);
        } else {
          // alert('Упс, сломалось :(');
        }
      });
  }, []);

  return (
    <li
      key={category.id}
      className="border category-card"
      onClick={() => fetchThings(categoryId)}
    >
      <h4>{category.name}</h4>
    </li>
  );
};

const mapDispatchToProps = {
  fetchThings,
};

export default connect(null, mapDispatchToProps)(CategoryCard);
