import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Box, Typography } from '@mui/material';

import { getDishChefOwn } from '@/api/chef/getDishChefOwn';
import DishCard from '@/components/DishCard/DishCard';
import { selectUser } from '@/redux/auth/selectors';
import { Main } from '@/shared/Main/Main';

const ChefDishesPage = () => {
  const user = useSelector(selectUser);
  const chefId = user.roles.find((role) => role.name === 'chef').id;
  const [dishes, setDishes] = useState();

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const response = await getDishChefOwn();

        setDishes(response);
        console.log('response: ', response);
      } catch (error) {
        console.error(`Error fetching chef's dishes:`, error);
        console.log('ttt1');
      }
    };
    fetchDishes();
  }, [chefId]);
  return (
    <Main style={{ display: 'flex', justifyContent: 'center' }}>
      <Box
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          marginTop="10px"
          marginBottom="10px"
          fontSize="28px"
          fontWeight="600"
        >
          Dishes
        </Typography>
      </Box>
      <Box
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '10px',
          justifyContent: 'center',
          margin: '10px 50px',
        }}
      >
        {dishes &&
          dishes.map((i) => (
            <Box key={i.id}>
              <DishCard dishInfo={i} isChef={true} />
            </Box>
          ))}
      </Box>
    </Main>
  );
};

export default ChefDishesPage;
