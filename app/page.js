import Header from '../components/Header';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-4"> {/* Reduced padding */}
        
        {/* Header */}
        <h1 className="text-xl text-black font-semibold mb-4">Select any one</h1> {/* Reduced bottom margin */}

        {/* Selection Options */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6"> {/* Reduced bottom margin */}
          {/* Select Location */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="location">
              Select Location
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              type="text"
              id="location"
              placeholder="Location"
            />
          </div>
          
          {/* Select Traveler */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="traveler">
              Select Traveler
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              type="text"
              id="traveler"
              placeholder="Traveler"
            />
          </div>

          {/* Select Date */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="date">
              Select Date
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              type="date"
              id="date"
            />
          </div>
        </div>

        {/* Main Content */}
        <MainContent />

      </div>

      <Footer />
    </div>
  );
};

export default Home;
