import { useNavigate, useParams } from "react-router-dom";
import CollapsibleCard from "../../shared/card";
import { useGetRestaurantByIdQuery } from "../../querys/ecommerce-query";
import RestaurantForm from "./restaurant-form";
import { Button } from "antd";

function DetailRestaurant() {
  const { id } = useParams();
  console.log("id", id);
  const { data: restaurant, isLoading } = useGetRestaurantByIdQuery(
    id?.toString() ?? ""
  );

  const navigate = useNavigate();
    localStorage.setItem('selectedRestaurant',id?.toString() as string)
  
  return (
    <>
      <div className="mt-4 mx-auto mx-48">
        <div className="flex space-x-8">
          <Button
            className="bg-primary text-white"
            onClick={() => navigate("/selector-page")}
          >
            Back to selector
          </Button>
          <Button
            className="bg-primary text-white"
            onClick={() => navigate("/dashboard")}
          >
            Manage this Restaurant
          </Button>
        </div>
        <CollapsibleCard title={"Restaurant Details"} loading={isLoading}>
          <RestaurantForm mode={"update"} id={id} data={restaurant} />
        </CollapsibleCard>
      </div>
    </>
  );
}

export default DetailRestaurant;
