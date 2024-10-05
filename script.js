function predictUsage() {
    // Get values from the form
    const temperature = document.getElementById('temperature').value;
    const humidity = document.getElementById('humidity').value;
    const dayOfWeek = document.getElementById('dayOfWeek').value;
    const time = document.getElementById('time').value;

    // Simple calculation for prediction (placeholder for real model)
    const predictedUsage = (temperature * 0.5) + (humidity * 0.3) + (dayOfWeek * 10);

    // Display result
    document.getElementById('result').innerHTML = `Predicted bike usage: ${Math.floor(predictedUsage)} bikes.`;
}

// Example of visualizing historical data (bike usage trends)
const ctx = document.getElementById('usageChart').getContext('2d');
const usageChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
            label: 'Bike Usage',
            data: [120, 150, 180, 200, 240, 300, 280],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
