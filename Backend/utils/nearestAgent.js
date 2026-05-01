const calculateDistance = require("./distance");
// agents = list of delivery agents
function findNearestAgent(agents, customerLocation) {
    let minDistance = Infinity;
    let nearestAgent = null;
    for (let agent of agents) {
        const distance = calculateDistance(
            agent.lat,
            agent.lon,
            customerLocation.lat,
            customerLocation.lon
        );
        if (distance < minDistance) {
            minDistance = distance;
            nearestAgent = agent;
        }
    }
    return nearestAgent;

}
module.exports=findNearestAgent