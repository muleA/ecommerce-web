import { Alert, Button, Row } from "antd";
import { MyRestaurants } from "../components/restaurant/restaurant-list";
import DashboardGreeting from "../components/dashboard-greeting";
import { useAuth } from "./auth/use-auth";

export default function RestaurantSelectorPage(){
    const {session}=useAuth()
    const { logOut } = useAuth();
    const handleLogOut = (): void => {
      logOut();
    };
    return(<>
     <div className="mx-auto max-w-7xl px-4 py-6">
      <h1 className="text-3xl font-semibold mb-4 flex">Restaurant Selector</h1>
      <div className="flex space-x-24">
      <DashboardGreeting userFullName={session?.userInfo?.firstName}/>
      <div>
      <Button onClick={handleLogOut}>Log Out</Button>
        </div>
      </div>
     
        <div className="w-auto">
        <Alert className="mt-4 w-auto mb-2" type="error" message="NB. to Manage you restaurant first Add Restaurant if You don't register Your Restaurant
         or select one Restaurant and  click manage restaurant "/>
        </div>
      
        
      <Row gutter={[16, 16]}>
      <MyRestaurants/>

      </Row>
    </div>
        </>)
}