import { useState } from 'react';
import { useRouter } from 'next/router';

const BookingDetails = ({ tripData }) => {
  const router = useRouter();
  const [startingPoint, setStartingPoint] = useState('');
  const [travellers, setTravellers] = useState(1);
  const [travellersData, setTravellersData] = useState([{ name: '', age: '', contact: '', email: '' }]);

  const handleStartingPointChange = (e) => setStartingPoint(e.target.value);

  const handleTravellersChange = (e) => {
    const count = parseInt(e.target.value);
    setTravellers(count);
    setTravellersData(Array(count).fill().map(() => ({ name: '', age: '', contact: '', email: '' })));
  };

  const handleTravellerDataChange = (index, field, value) => {
    const newData = [...travellersData];
    newData[index][field] = value;
    setTravellersData(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/payment-confirmation');
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">{tripData.title}</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startingPoint">
            Choose Starting Point
          </label>
          <select
            id="startingPoint"
            value={startingPoint}
            onChange={handleStartingPointChange}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select a starting point</option>
            <option value="Goa">Goa</option>
            <option value="Pune">Pune</option>
            <option value="Delhi">Delhi</option>
            <option value="Jaipur">Jaipur</option>
            <option value="Chennai">Chennai</option>
            <option value="Lucknow">Lucknow</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="travellers">
            Number of Travellers
          </label>
          <input
            type="number"
            id="travellers"
            value={travellers}
            onChange={handleTravellersChange}
            min="1"
            max="10"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {travellersData.map((traveller, index) => (
          <div key={index} className="mb-4 p-4 border rounded">
            <h3 className="font-bold mb-2">Traveller {index + 1}</h3>
            <input
              type="text"
              placeholder="Name"
              value={traveller.name}
              onChange={(e) => handleTravellerDataChange(index, 'name', e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
            />
            <input
              type="number"
              placeholder="Age"
              value={traveller.age}
              onChange={(e) => handleTravellerDataChange(index, 'age', e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
            />
            <input
              type="tel"
              placeholder="Contact"
              value={traveller.contact}
              onChange={(e) => handleTravellerDataChange(index, 'contact', e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
            />
            <input
              type="email"
              placeholder="Email"
              value={traveller.email}
              onChange={(e) => handleTravellerDataChange(index, 'email', e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
            />
          </div>
        ))}

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Proceed to Payment
        </button>
      </form>
    </div>
  );
};

export default BookingDetails;