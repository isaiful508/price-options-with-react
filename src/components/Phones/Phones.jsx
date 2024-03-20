import axios from "axios";
import { useEffect, useState } from "react";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TailSpin} from 'react-loader-spinner'



const Phones = () => {
    const [fon, setFon] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
        // .then(res => res.json())
        // .then(data => setFon(data.data))
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneData = data.data.data;
                const phoneWithFakeData = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj;
                })
                console.log(phoneWithFakeData);
                setFon(phoneWithFakeData);
                setLoading(false);
            })
    }, [])


    return (
        <div>
            {loading && <div>

                render(<TailSpin
                    visible={true}
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass=""
                />)
            </div>
            }

            <h2 className="text-5xl">Phones:{fon.length} </h2>

            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={fon}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="price" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>

        </div>
    );
};

export default Phones;