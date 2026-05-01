const findNearestAgent = require("../utils/nearestAgent");
const clusterOrders = require("../utils/clustering");
function assignDeliveries(orders, agents) {
    const clusters = clusterOrders(orders, 5);
    let assignments=[];
    for(let cluster of clusters){
        const location=cluster[0];
        const agent=findNearestAgent(agents,location);
        assignments.push({
            agent:agent,
            orders:cluster
        })
    }
    return assignments;
}
module.exports = assignDeliveries;