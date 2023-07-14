import { Button } from 'antd';
import CollapsibleCard from '../../shared/card';
import RestaurantForm from './restaurant-form';
import { useNavigate } from 'react-router-dom';

function NewRestaurant() {
const navigate=useNavigate()
  return (
    <>
    <div className='mt-4 mx-auto mx-48'>
      <div><Button className='bg-primary text-white' onClick={()=>navigate("/selector-page")}>Back to selector</Button></div>
    <CollapsibleCard title={"Add New Restaurant"} dropped>
      <RestaurantForm mode={"new"}  />

    </CollapsibleCard>
    </div>
    
  
      </>

  );
}

export default NewRestaurant;
