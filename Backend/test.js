// const calculateDistance=require("./utils/distance.js");
// const distance = calculateDistance(28.7041, 77.1025, 19.0760, 72.8777);
// console.log("Distance:", distance);
const agents = [
  { id: 1, lat: 28.6, lon: 77.2 },
  { id: 2, lat: 19.0, lon: 72.8 },
  { id: 3, lat: 28.7, lon: 77.1 }
];
// const customer = { lat: 28.7041, lon: 77.1025 };
// const findNearestAgent = require("./utils/nearestAgent");
// console.log(findNearestAgent(agents, customer));
const orders = [
  { id: 1, lat: 28.7, lon: 77.1 },
  { id: 2, lat: 28.71, lon: 77.11 },
  { id: 3, lat: 19.0, lon: 72.8 }
];
//console.log(clusterOrders(orders, 5));
const assignDeliveries = require("./controllers/delivery.controller");
console.dir(assignDeliveries(orders, agents), { depth: null });