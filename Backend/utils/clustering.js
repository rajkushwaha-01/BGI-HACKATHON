const calculateDistance = require("./distance");
//orders = list of orders (with location)
// maxDistance = how close they should be to group
function clusterOrders(orders, maxDistance) {
    let clusters = [];
    for (let order of orders) {
        let added = false;
        for (let cluster of clusters) {
            let distance = calculateDistance(
                order.lat,
                order.lon,
                cluster[0].lat,
                cluster[0].lon)
        if(distance<maxDistance){
            cluster.push(order);
                  added=true;
                  break;
        }
        }
        if(!added){
         clusters.push([order]);
        }
      

    }
    return clusters;
    
}
module.exports = clusterOrders;