import React, { useState, useEffect } from "react";
import "../styles/bookappointments.css";
import { getPhases } from "../utils/axiosConfig";


function BookAppointments() {
  const [selectedPhase, setSelectedPhase] = useState("");
  const [selectedApartment, setSelectedApartment] = useState("");
  const [isPhaseSelected, setIsPhaseSelected] = useState(false);
  const [isApartmentSelected, setIsApartmentSelected] = useState(false);
  const [phases, setPhases] = useState([]); // Store the fetched phases

  useEffect(() => {
    // Fetch phases and populate the dropdown
    getPhases()
      .then(data => {
        console.log('Phases:', data);
        setPhases(data);
      })
      .catch(error => {
        console.error('Error fetching phases:', error);
      });

    // Get a reference to the start date input element
    const startDateInput = document.getElementById("startDate");

    // Get today's date in the format "yyyy-mm-dd"
    const today = new Date().toISOString().split("T")[0];

    // Set the minimum date for the start date input to today
    startDateInput.setAttribute("min", today);
  }, []);

  const handlePhaseChange = (e) => {
    const selectedValue = e.target.value;
    console.log("selectedValue", selectedValue);
    setSelectedPhase(selectedValue);
    setIsPhaseSelected(!!selectedValue); // Enable if a valid selection is made
  };

  const handleApartmentChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedApartment(selectedValue);
    setIsApartmentSelected(!!selectedValue); // Enable if a valid selection is made
  };

  return (
    <div className="main__content">
      <h2 className="main__title">Book Appointments</h2>

      <form className="container">
        <label htmlFor="phase">Select Phase:</label>
        <select id="phase" name="phase" onChange={handlePhaseChange}>
          <option value="">Select Phase</option>
          {phases.map((phase) => (
            <option key={phase.residenceId} value={phase.residenceId}>
              {phase.residenceName}
            </option>
          ))}
        </select>

        <label htmlFor="apartment">Select Apartment:</label>
        <select
          id="apartment"
          name="apartment"
          onChange={handleApartmentChange}
          disabled={!isPhaseSelected}
        >
          <option value="">Select Apartment</option>
          {/* Populate apartment options based on selected phase */}
          {isPhaseSelected &&
  phases
    .find((phase) => phase.residenceId === selectedPhase)
    ?.apartments
    .filter((apartment) => apartment.numberOfHouses === 0) // Filter apartments here
    .map((apartment) => (
      <option key={apartment.apartmentId} value={apartment.apartmentId}>
        {apartment.apartmentName}
      </option>
    ))}

        </select>

        <label htmlFor="startDate">Select Date Range:</label>
        <input
          type="date"
          id="startDate"
          name="start_date"
          placeholder="Start Date"
          disabled={!isApartmentSelected}
        />
        <input
          type="date"
          id="endDate"
          name="end_date"
          placeholder="End Date"
          disabled={!isApartmentSelected}
        />

        <label htmlFor="purpose">Appointment Purpose:</label>
        <textarea
          id="purpose"
          name="purpose"
          placeholder="Enter purpose"
          cols={30}
          rows={10}
          disabled={!isApartmentSelected}
        ></textarea>

        <button type="submit" disabled={!isApartmentSelected}>
          Book Appointment
        </button>
      </form>
    </div>
  );
}

export default BookAppointments;
