// PricingPlan.ts

const PricingPlan = [
  {
    link: "/payment/basic",
    price: 10,
    priceId: "price_123",
    duration: "month",
    features: [
      "Access to basic features",
      "Email support",
      "1 project limit",
    ],
  },
  {
    link: "/payment/pro",
    price: 20,
    priceId: "price_456",
    duration: "month",
    features: [
      "All basic features",
      "Priority support",
      "Unlimited projects",
    ],
  },
  {
    link: "/payment/enterprise",
    price: 50,
    priceId: "price_789",
    duration: "year",
    features: [
      "Everything in Pro",
      "Dedicated account manager",
      "Custom integrations",
    ],
  },
];

export default PricingPlan;
