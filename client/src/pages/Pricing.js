import React from "react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "₹4,999 /month",
      features: [
        "1 Website Hosting",
        "Basic Support",
        "Shared Server",
        "Weekly Backup",
      ],
    },
    {
      name: "Business",
      price: "₹9,999 /month",
      features: [
        "3 Websites Hosting",
        "Priority Support",
        "Dedicated Server",
        "Daily Backup",
      ],
    },
    {
      name: "Enterprise",
      price: "₹19,999 /month",
      features: [
        "Unlimited Projects",
        "24/7 DevOps Support",
        "Cloud Scaling (AWS/GCP)",
        "Uptime SLA 99.9%",
      ],
    },
    {
      name: "Custom Plan",
      price: "Contact Us",
      features: [
        "Fully Customized Services",
        "Flexible Infrastructure",
        "On-Demand DevOps Support",
        "Pay Only for What You Use",
      ],
    },
  ];

  return (
    <section className="pricing section">
      <div className="container">
        <div className="section-title text-center">
          <h2>Pricing</h2>
          <p>Flexible plans for every business size</p>
        </div>

        <div className="row gy-4 justify-content-center">
          {plans.map((plan, i) => (
            <div className="col-lg-3 col-md-6" key={i}>
              <div className="pricing-item text-center">
                <h3>{plan.name}</h3>
                <h4>{plan.price}</h4>
                <ul className="list-unstyled">
                  {plan.features.map((f, index) => (
                    <li key={index}>
                      <i className="bi bi-check-circle"></i> {f}
                    </li>
                  ))}
                </ul>
                <button className="btn btn-primary mt-3">Choose Plan</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
