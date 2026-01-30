const players = [
    { name: "Alice", score: 150 },
    { name: "Bob", score: 200 },
    { name: "Charlie", score: 100 }
];

function populateLeaderboard(data) {
    const table = document.getElementById('leaderboard'); // Access the table
    data.forEach(player => {
        const row = document.createElement('tr'); // Create a new row
        row.innerHTML = `
            <td>${player.name}</td>
            <td>${player.score}</td>
        `;
        table.appendChild(row); // Add the row to the table
    });
}

populateLeaderboard(players); // Populate the leaderboard on page load

