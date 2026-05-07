const calculateDistance = require("./distance");

function clusterOrders(orders, maxDistance) {
  let clusters = [];

  for (let order of orders) {
    let added = false;

    for (let cluster of clusters) {
      const distance = calculateDistance(
        order.deliveryLocation.lat,
        order.deliveryLocation.lng,
        cluster[0].deliveryLocation.lat,
        cluster[0].deliveryLocation.lng
      );

      if (distance < maxDistance) {
        cluster.push(order);
        added = true;
        break;
      }
    }

    if (!added) {
      clusters.push([order]);
    }
  }

  return clusters;
}

module.exports = clusterOrders;