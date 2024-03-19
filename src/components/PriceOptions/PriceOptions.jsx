import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

    
        const price_options = [
          {
            "id": 1,
            "name": "Basic Membership",
            "features": [
              "Access to cardio area",
              "Access to weightlifting area",
              "Locker room access",
              "Basic gym equipment usage"
            ],
            "price": "$29.99"
          },
          {
            "id": 2,
            "name": "Standard Membership",
            "features": [
              "Access to all basic features",
              "Access to group fitness classes",
              "Personalized workout plans",
              "Nutritional guidance"
            ],
            "price": "$49.99"
          },
          {
            "id": 3,
            "name": "Premium Membership",
            "features": [
              "Access to all standard features",
              "Access to sauna and steam room",
              "Priority scheduling for personal trainers",
              "Discounts on supplements and merchandise"
            ],
            "price": "$79.99"
          }
        ]
      
      
    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices</h2>
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
           {
                price_options.map(option => <PriceOption option={option} key={option.id}></PriceOption>)
            }
           </div>
        </div>
    );
};

export default PriceOptions;