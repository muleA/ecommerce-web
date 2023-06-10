import { Button, Form, Input, Typography } from 'antd';
import React from 'react';
import DiscoverRestaurant from '../shared/utilities/discover';

function HowItWorks() {
  
  return (
    <div className="bg-primary-50 p-5 rounded-2xl shadow-lg m-8">
    <Form
        layout="vertical"
        size="middle"
        id=""
        // onFinish={onFinish}
        style={{ height: '100%' }}
        initialValues={{}}
      >
        <div className="flex flex-col bg-primary-50 p-4 rounded gap-2">
          <div className="text-2xl font-bold text-primary-400">Discover Restaurants</div>
          <div className="flex flex-col gap-4">
             
             
         <DiscoverRestaurant/>
          
             
        
          </div>
         
        </div>
      </Form>
    </div>
  );
}

export default HowItWorks;
