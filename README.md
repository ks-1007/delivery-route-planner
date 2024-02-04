# Delivery Optimizer

This is a React application designed to optimize the delivery route for a delivery executive named Aman. The primary objective is to deliver a batch of orders from different locations in the shortest possible time.

## Overview

### Approach

1. **Coordinates and Distances:**
   - Define coordinates for Aman, Consumers (C1, C2), and Restaurants (R1, R2).
   - Utilize the Haversine formula to calculate distances between these locations.
   - **Assumed data:
   - 1. { name: "Aman", lat: 12.91455, lng: 77.62545 }
     2. { name: "C1", lat: 12.92045, lng: 77.63154 }
     3. { name: "C2", lat: 12.915465, lng: 77.625955 }
     4. { name: "R1", lat: 12.91854, lng: 77.6295, pt: 20 }
     5. { name: "R2", lat: 12.91256, lng: 77.62354, pt: 15 }

2. **Time Estimation:**
   - Assume Aman, R1, and R2 commence preparing and delivering orders simultaneously.
   - Consider the average time (pt1, pt2) it takes for each restaurant to prepare a meal.

3. **Travel Time:**
   - Calculate travel time based on an average speed of 20 km/hr using the Haversine distance.

4. **Optimization:**
   - Implement an optimization algorithm to determine the most efficient route for Aman to deliver the orders promptly.
   - Greedy algorithms or genetic algorithms could be considered based on the complexity of the problem.

### Assumptions

1. **Simultaneous Start:**
   - Assume Aman, R1, and R2 start preparing and delivering orders at the exact same time.

2. **Immediate Confirmation:**
   - Assume immediate confirmation from Aman, R1, and R2 without any delays or coordination issues.

3. **Constant Speed:**
   - Utilize an average speed of 20 km/hr for simplicity. Real-world travel time may vary.

4. **No Road Constraints:**
   - Ignore actual road distance and confirmation delays for simplicity.

5. **Simplistic Time Estimation:**
   - Assume a constant average time for preparing meals at R1 and R2.

6. **Single Batch:**
   - Consider all orders as part of a single batch for optimization.

7. **Ideal Conditions:**
   - Contemplate an ideal scenario without external factors like traffic, weather, or unexpected delays.

These assumptions simplify the problem to focus on the core aspects of route optimization. In a real-world scenario, additional factors and a more sophisticated algorithm may be necessary for accurate and practical results.

## Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/delivery-optimizer.git
