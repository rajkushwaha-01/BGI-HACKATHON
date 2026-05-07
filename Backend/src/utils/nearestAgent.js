const calculateDistance = require("./distance");

function findNearestAgent(agents, customerLocation) {
  let minDistance = Infinity;
  let nearestAgent = null;

  for (let agent of agents) {
    const distance = calculateDistance(
      agent.location.lat,
      agent.location.lng,
      customerLocation.lat,
      customerLocation.lng
    );

    if (distance < minDistance) {
      minDistance = distance;
      nearestAgent = agent;
    }
  }

  return nearestAgent;
}

module.exports = findNearestAgent;