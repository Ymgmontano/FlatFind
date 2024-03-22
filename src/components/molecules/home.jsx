import { Link } from 'react-router-dom';
import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img3.jpg';
import img4 from '../../assets/images/img4.jpg';
import img5 from '../../assets/images/img5.jpg';
import img6 from "../../assets/images/img6.jpg";
import img7 from "../../assets/images/img7.jpg";
import img8 from "../../assets/images/img8.jpg";
import img9 from "../../assets/images/img9.jpg";

const hotelData = [
  { id: 1, name: "Hotel Luxe", price: "$120/noche", rating: 5, image: img1 },
  { id: 2, name: "Hotel Relax", price: "$80/noche", rating: 4, image: img2 },
  { id: 3, name: "Boutique Beds", price: "$150/noche", rating: 5, image: img3 },
  { id: 4, name: "DreamStay", price: "$90/noche", rating: 4, image: img4 },
  { id: 5, name: "SunnySide Resort", price: "$110/noche", rating: 3, image: img5 },
  { id: 6, name: "NightInn", price: "$95/noche", rating: 4, image: img6 },
  { id: 7, name: "EcoLodge", price: "$100/noche", rating: 5, image: img7 },
  { id: 8, name: "Cityscape Hotel", price: "$130/noche", rating: 4, image: img8 },
  { id: 9, name: "MountainView Retreat", price: "$140/noche", rating: 5, image: img9 },
];

function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      <Link to="/departamentos">
        <div className="grid grid-cols-3 gap-6">
          {hotelData.map((hotel) => (
            <div key={hotel.id} className="border rounded-lg overflow-hidden shadow-lg">
              <img src={hotel.image} alt={hotel.name} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-lg">{hotel.name}</h3>
                <p className="text-sm text-gray-600">{hotel.price}</p>
                <div className="flex">
                  {'⭐'.repeat(hotel.rating).split('').map((star, index) => (
                    <span key={index} className="text-yellow-500">{star}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}

        </div>
      </Link>
    </div>
  );
}

export default Home;
