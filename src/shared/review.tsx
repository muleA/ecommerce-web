import { Avatar, Card } from "antd";
import { customerReviews } from "./utilities/customer-review";

export const CustomerReviews = () => {
    return (
        <div className="grid grid-cols-1 gap-4 mx-auto md:grid-cols-3 lg:grid-cols-4">
        {customerReviews.map((review) => (
          <Card key={review.id} className="rounded-lg shadow-md">
            <Card.Meta
              avatar={<Avatar src={review.photoUrl} className="mx-auto mb-2" />}
              title={<h3 className="text-lg font-medium">{review.name}</h3>}
              description={<p className="text-gray-700">{review.review}</p>}
            />
          </Card>
        ))}
      </div>
    );
  };
  