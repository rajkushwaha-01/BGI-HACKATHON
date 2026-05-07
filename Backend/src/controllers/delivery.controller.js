const Order = require("../models/order.model");
const User = require("../models/user.model");

const clusterOrders = require("../utils/clustering");
const findNearestAgent = require("../utils/nearestAgent");

const assignDeliveries = async (req, res) => {
  try {
    const pendingOrders = await Order.find({
      status: "packed",
      deliveryBoyId: null,
    });

    const deliveryAgents = await User.find({
      role: "delivery",
      isActive: true,
    });

    if (pendingOrders.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No packed orders found",
      });
    }

    if (deliveryAgents.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No delivery agents available",
      });
    }

    const clusters = clusterOrders(pendingOrders, 5);

    let assignments = [];

    for (let cluster of clusters) {
      const location = cluster[0].deliveryLocation;

      const nearestAgent = findNearestAgent(
        deliveryAgents,
        location
      );

      for (let order of cluster) {
        order.deliveryBoyId = nearestAgent._id;
        order.status = "picked";

        await order.save();
      }

      assignments.push({
        deliveryAgent: nearestAgent.name,
        orders: cluster.map((order) => order._id),
      });
    }

    return res.status(200).json({
      success: true,
      message: "Deliveries assigned successfully",
      assignments,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  assignDeliveries,
};