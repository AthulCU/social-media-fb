import { useState } from "react";

import "./App.css";

const AccordionExample = () => {
  // Sample data
  const marklist = [
    { name: "Athul", amount: 85 },
    { name: "Aswin", amount: 90 },
    { name: "Rahul", amount: 88 },
    { name: "Sreeram", amount: 92 },
  ];

  // State to track whether the accordion is open
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the accordion
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      <h1>Markets</h1>
      <h2 onClick={toggleAccordion} style={{ cursor: "pointer" }}>
        Total Points
      </h2>

      {isOpen && (
        <div style={{ paddingLeft: "20px" }}>
          {marklist.map((person) => (
            <div key={person.name} style={{ marginBottom: "10px" }}>
              <strong>{person.name}:</strong> ${person.amount}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AccordionExample;
