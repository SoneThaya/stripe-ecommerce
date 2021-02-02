const stripeAPI = require("../stripe");
const getCustomer = require("../helpers/getCustomer");
const { restart } = require("nodemon");

async function setupIntent(req, res) {
  const { currentUser } = req;
  // get stripe customer
  const customer = await getCustomer(currentUser.uid);
  let setupIntent;

  try {
    setupIntent = await stripeAPI.setupIntents.create({
      customer: customer.id,
    });
    res.status(200).json(setupIntent);
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ error: "An error occurred, unable to create setup intent" });
  }
}

module.exports = setupIntent;
