const express = require("express");
const Razorpay = require("razorpay");
const crypto = require("crypto");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

const razorpay = new Razorpay({
  key_id: "rzp_test_SClIWfk4neJjHH",
  key_secret: "U6a0IsyfIPp2p4KoN8oJjD4p"
});

app.post("/create-order", async (req, res) => {
  const { productId } = req.body;

  const order = await razorpay.orders.create({
    amount: 900, // ₹9
    currency: "INR",
    receipt: productId
  });

  res.json(order);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on", PORT));
