const flights = [
    { flightNo: "AI101", from: "Delhi", to: "New York", time: "10:00 AM" },
    { flightNo: "BA202", from: "London", to: "New York", time: "12:30 PM" },
    { flightNo: "QR303", from: "Doha", to: "Paris", time: "2:45 PM" },
    { flightNo: "EK404", from: "Dubai", to: "New York", time: "5:00 PM" },
    { flightNo: "LH505", from: "Frankfurt", to: "Mumbai", time: "9:15 AM" }
];

function searchFlights() {
    const searchValue = document.getElementById("searchInput").value.toLowerCase();
    const resultsDiv = document.getElementById("results");
    
    const filteredFlights = flights.filter(flight => 
        flight.to.toLowerCase().includes(searchValue) || 
        flight.from.toLowerCase().includes(searchValue)
    );

    resultsDiv.innerHTML = ""; // Clear previous results

    if (filteredFlights.length === 0) {
        resultsDiv.innerHTML = "<p>No flights found.</p>";
        return;
    }

    const list = document.createElement("ul");
    filteredFlights.forEach(flight => {
        const item = document.createElement("li");
        item.textContent = `${flight.flightNo}: ${flight.from} → ${flight.to} at ${flight.time}`;
        list.appendChild(item);
    });

    resultsDiv.appendChild(list);
}
