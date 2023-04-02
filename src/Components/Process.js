import React from "react";
const process = [
  {
    logo: <i className="fas fa-magic    "></i>,
    id: "1",
    h1: "Message Us On WhatsApp Number",
    p: "All you need to do is to the link given above and frop a message stating 'Hi Partner' to get in touch with us.",
  },
  {
    logo: <i className="fas fa-box    "></i>,
    id: "2",
    h1: "Satisfy Your Self and collect all the information",
    p: "Having dropped a message on whatsapp, talk to our executive to get in-depth details of the work.",
  },
  {
    logo: <i className="fa fa-dollar" aria-hidden="true"></i>,
    id: "3",
    h1: "Start Depositing & Withdrawl",
    p: "Having been convinced, you can start depositing the money without worryiing and even withdraw as per the policies.",
  },
  {
    logo: <i className="fa fa-mars-stroke-h" aria-hidden="true"></i>,
    id: "4",
    h1: "Earn From Your Betting Skills",
    p: "Now the time comes to exhibit to betting skills and convert them to money in a short span of time.",
  },
];

// eslint-disable-next-line array-callback-return
const Process = () => {
  const processDisplay = process.map((display) => (
    <div className="col-lg-6" key={Math.random() * 100}>
      {/* <h1>
            {display.logo}
        </h1> */}
      <h3>
        {display.id} {display.h1}
      </h3>
      <p>{display.p}</p>
    </div>
  ));

  return (
    <section id="process">
      <div className="container-fluid py-5" style={{ backgroundColor: "#000" }}>
        <div className="container ">
          <div className="row text-center">
            <div className="col-12">
              <h1>How Does It Work</h1>
              <p>
                You need to Just Go Through These 4 Easy Steps before being a Partner With Diamondexchange
              </p>
            </div>
            {processDisplay}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
