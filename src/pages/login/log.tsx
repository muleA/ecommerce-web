import { Button, Input } from "antd";
import { LoginSVG } from "./login-svg";

export const Login = () => {
  return (
    <div className="flex min-h-screen justify-center p-2 lg:p-8">
      <div className="h-5/12 relative z-20 mb-20 flex w-full bg-primary-50 lg:w-7/12">
        {/* <div className="sans-serif absolute top-4 left-4 hidden font-bold text-primary md:block">
          Eservice Ethiopia
        </div> */}
        <div className="flex w-full flex-col space-y-5 self-center p-4 lg:w-1/2">
          <div className="mt-4 flex w-full items-center justify-center text-2xl font-medium text-sky-700">
            Welcome to Liyu Restaurants Management System
          </div>
          <div>
            <form>
              <div className="flex flex-col space-y-2 p-4">
                <div className="flex items-center space-x-4">
                  <Input type="text" placeholder="Username" required className="w-full" />
                </div>
                <div className="flex items-center space-x-4">
                  <Input.Password placeholder="Password" required className="w-full" />
                </div>
              </div>
              <div className="p-4">
                <Button type="primary" className="w-full bg-primary text-white hover:bg-primary">
                  Login
                </Button>
              </div>
        
            </form>
          </div>
        </div>
        <div className="hidden h-full w-1/2 bg-primary-50 p-4 md:block">
          <LoginSVG />
        </div>
      </div>
    </div>
  );
};
