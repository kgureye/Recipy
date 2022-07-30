import { useEffect, useState } from "react";
import styled from "styled-components";
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

function Vegetables() {

  const [vegetables, setVegetables] = useState([]);

        /* We want to fetch recipes on every mount/render so we need to call the getPopular function inside a useEffect Hook. */
        useEffect(() => {
            getVegetables();
        }, []);
    
    const getVegetables = async () => {

      const check = localStorage.getItem('vegetables');
    
      if(check) {
        setVegetables(JSON.parse(check)); // We convert the string back to an array when we get it back, but when we set it line 27, we convert it to a string, as LS only accept strings.
      } else {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`);
        const data = await api.json();
        
        localStorage.setItem('vegetables', JSON.stringify(data.recipes));
        setVegetables(data.recipes);
      }
    }



  return  (
    <div>
          <Wrapper >
              <h3>Vegetable Dishes</h3>
        <Splide options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: 'free',
            gap: '5rem'
        }}>
              {vegetables.map((recipe) => {
                  return (
                    <SplideSlide key={recipe.id}>
                        <Card>
                            <p>{recipe.title}</p>
                            <img src={recipe.image} alt={recipe.title} />    
                            <Gradient />               
                        </Card>
                      </SplideSlide>
                    );
                })}
        </Splide>
        </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
  h3 {
    margin-bottom: 1rem;
  }
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img{
      border-radius: 2rem;
      position: absolute;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
  }

  p{
    position: absolute;
    z-index: 10;
    bottom: 0%;
    left: 50%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

  }
`;

const Gradient = styled.div`
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`;


export default Vegetables