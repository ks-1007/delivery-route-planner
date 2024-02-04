import React, { useState, useEffect } from "react";

const DeliveryRoutePlanner = ({ locations }) => {
  const [optimalRoute, setOptimalRoute] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const toRadians = (degrees) => (degrees * Math.PI) / 180;
  useEffect(() => {
    const findOptimalRoute = () => {
      const calculateTravelTime = (loc1, loc2) => {
        const R = 6371; // Earth radius in kilometers
        const lat1 = toRadians(loc1.lat);
        const lon1 = toRadians(loc1.lng);
        const lat2 = toRadians(loc2.lat);
        const lon2 = toRadians(loc2.lng);

        const dLat = lat2 - lat1;
        const dLon = lon2 - lon1;

        const a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(lat1) *
            Math.cos(lat2) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c;

        return (distance / 20) * 60; // Time in minutes (assuming 20 km/h speed)
      };

      const findRoute = (currentLoc, route, totalTime, remaining) => {
        if (remaining.length === 0) {
          // Base case: all deliveries completed
          if (!bestRoute || totalTime < bestTime) {
            bestRoute = [...route];
            bestTime = totalTime;
          }
          return;
        }

        // Explore possible next steps
        for (let i = 0; i < remaining.length; i++) {
          const nextLoc = remaining[i];

          const travelTime = calculateTravelTime(currentLoc, nextLoc);
          const newRoute = [...route, `${currentLoc.name} -> ${nextLoc.name}`];
          let newTime = totalTime + travelTime;

          // If going to a restaurant, add preparation time
          if (nextLoc.pt) {
            newTime += nextLoc.pt;
          }

          const newRemaining = remaining.filter((loc) => loc !== nextLoc);
          findRoute(nextLoc, newRoute, newTime, newRemaining);
        }
      };

      let bestRoute = [];
      let bestTime = Infinity;

      findRoute(locations[0], [], 0, [...locations.slice(1)]); // Start from Aman's location

      setOptimalRoute(bestRoute);
      setTotalTime(bestTime);
    };

    findOptimalRoute();
  }, []);

  return (
    <div>
      <h1>Optimal Delivery Route:</h1>
      <ul>
        {optimalRoute.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>
      <p>Total Delivery Time: {totalTime.toFixed(2)} minutes</p>
    </div>
  );
};

export default DeliveryRoutePlanner;
