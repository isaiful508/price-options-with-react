import { LineChart as LC, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {


    const students = [
        { "id": 1, "name": "Alice", "math_marks": 85, "physics_marks": 78, "chemistry_marks": 90 },
        { "id": 2, "name": "Bob", "math_marks": 78, "physics_marks": 85, "chemistry_marks": 88 },
        { "id": 3, "name": "Charlie", "math_marks": 92, "physics_marks": 88, "chemistry_marks": 95 },
        { "id": 4, "name": "David", "math_marks": 80, "physics_marks": 75, "chemistry_marks": 82 },
        { "id": 5, "name": "Emily", "math_marks": 88, "physics_marks": 90, "chemistry_marks": 85 },
        { "id": 6, "name": "Frank", "math_marks": 75, "physics_marks": 72, "chemistry_marks": 78 },
        { "id": 7, "name": "Grace", "math_marks": 90, "physics_marks": 85, "chemistry_marks": 92 },
        { "id": 8, "name": "Hannah", "math_marks": 82, "physics_marks": 78, "chemistry_marks": 86 },
        { "id": 9, "name": "Isaac", "math_marks": 87, "physics_marks": 92, "chemistry_marks": 88 },
        { "id": 10, "name": "Jack", "math_marks": 79, "physics_marks": 84, "chemistry_marks": 80 }
    ];



    return (
        <div className='flex justify-center items-center'>
            <LC width={700} height={500} data={students}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>

                <Line dataKey="math_marks" stroke='red'></Line>
                <Line dataKey="physics_marks" stroke='yellow'> </Line>
            </LC>
        </div>
    );
};

export default LineChart;