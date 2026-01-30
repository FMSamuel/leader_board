const players = [
    { name: "Alice", score: 150 },
    { name: "Bob", score: 200 },
    { name: "Charlie", score: 100 }
];

function populateLeaderboard(data) {
    const table = document.getElementById('leaderboard'); // Access the table

    /*table.innerHTML = `
        <tr>
            <th>Player</th>
            <th>Score</th>
        </tr>
    `; // Reset table header*/
    
    data.forEach(player => {
        const row = document.createElement('tr'); // Create a new row
        row.innerHTML = `
            <td>${player.name}</td>
            <td>${player.score}</td>
        `;
        table.appendChild(row); // Add the row to the table
    });
}

function sortLeaderboard() {
    players.sort((a, b) => b.score - a.score); // Sort by score descending
    populateLeaderboard(players); // Refresh the table
}

sortLeaderboard(); // Call to display sorted leaderboard

function addPlayer() {
    const name = document.getElementById('newName').value;
    const score = parseInt(document.getElementById('newScore').value);

    if (name && !isNaN(score)) {
        players.push({ name, score }); // Add player to array
        sortLeaderboard(); // Refresh sorted leaderboard
    } else {
        alert("Please enter a valid name and score.");
    }
}




