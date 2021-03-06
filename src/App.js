import React, {useEffect, useState} from 'react';
import './App.css';

import {Input, Layout, Menu, Row, Col} from 'antd';
import Recipe from "./Components/Recipe";
import FormHolder from "./Components/FormHolder";

const { Search } = Input;
const {Header, Footer, Content} = Layout;

const App = () => {
  const APP_ID = "35ed8fd1";
  const APP_KEYS = "c7be5504926319de5c5d1f22cf400f55";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect( () => {
      getRecipes();
   }, [query]); // having a query array tells React to call this effect upon changes in the array variable

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEYS}`);
    const data = await response.json();
    setRecipes(data.hits)
  };

  return (
      <div className="App">
          <Layout className="layout">
              <Header>
                  <Search placeholder="input search text"
                          style={{padding: "1em"}}
                          span={8}
                          value={search}
                          onChange={e => setSearch(e.target.value)} // Sets search bar value to be what was found in search bar
                          onSearch={e => {
                              // e.preventDefault(); // Prevent page refresh
                              setQuery(search); // Set the query to search value when user submitted }
                          }}
                          enterButton />
              </Header>
              <Content>
                  <div style={{background: '#fff', padding: "1em"}}>
                      <Row gutter={[24, 24]}>
                          {recipes.map(recipe => (
                              <Recipe key={recipe.recipe.label}
                                      label={recipe.recipe.label}
                                      image={recipe.recipe.image}
                                      calories={recipe.recipe.calories}
                                      ingredients={recipe.recipe.ingredients} // Array of ingredients - text, weight
                                      steps={recipe.recipe.ingredientLines} // Array of steps
                                      time={recipe.recipe.totalTime}
                                      serves={recipe.recipe.yield}
                                      percentDaily={recipe.recipe.totalDaily}
                                      totalDaily={recipe.recipe.totalNutrients}
                                      dietLabels={recipe.recipe.dietLabels} // Array of Keto/Low-Carb, etc.
                                      healthLabels={recipe.recipe.healthLabels} // Array of allergy concerns
                              />
                          ))}
                      </Row>
                  </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>React Recipe ©2020 Created by George Teo</Footer>
          </Layout>



          {/*<div>*/}
          {/*    <form className="search-form"*/}
          {/*          onSubmit={ e => {*/}
          {/*              e.preventDefault(); // Prevent page refresh*/}
          {/*              setQuery(search); // Set the query to search value when user submitted }*/}
          {/*          }}>*/}
          {/*        <input className="search-bar"*/}
          {/*               type="text"*/}
          {/*               value={search}*/}
          {/*               onChange={e => setSearch(e.target.value)}/>*/}
          {/*        <button  className="search-button" type="submit">*/}
          {/*            Search*/}
          {/*        </button>*/}
          {/*    </form>*/}
          {/*</div>*/}
      </div>
  )
};

export default App;
