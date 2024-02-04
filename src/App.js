import DeliveryRoutePlanner from "./DeliveryRoutePlanner";
import "./App.css";

export default function App() {
  const locations = [
    { name: "Aman", lat: 12.91455, lng: 77.62545 },
    { name: "C1", lat: 12.92045, lng: 77.63154 },
    { name: "C2", lat: 12.915465, lng: 77.625955 },
    { name: "R1", lat: 12.91854, lng: 77.6295, pt: 20 },
    { name: "R2", lat: 12.91256, lng: 77.62354, pt: 15 },
  ];

  return <DeliveryRoutePlanner locations={locations} />;
}
