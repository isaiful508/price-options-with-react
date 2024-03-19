import PropTypes from 'prop-types';
import Feature from './Feature/Feature';


const PriceOption = ({option}) => {

        const {name, price, features } = option;
    return (
        <div className='bg-blue-600 flex flex-col text-center text-white rounded-lg p-5'>
            <h2>
                <span className='text-7xl font-bold'> {price}</span>
                <span className='text-2xl'>/Mon</span>
            </h2>
            <h4 className='text-3xl my-5'>{name}</h4>

            <div className='pl-6 flex-grow'>
            {
                features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
            }
            </div>
            <button className='mt-12 bg-green-600 w-full py-2 font-bold rounded-lg hover:bg-green-900'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option:PropTypes.object
} 

export default PriceOption;