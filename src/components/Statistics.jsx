import { useEffect } from 'react';

const Statistics = () => {

    useEffect(() => {
        document.title = 'Statistics | Gadget Heaven';
    }, []);

    return (
        <div>
            <h2 className="text-center font-semibold text-4xl pt-10 text-purple-600">Not Data To Show Statistics</h2>
        </div>
    )
}

export default Statistics;