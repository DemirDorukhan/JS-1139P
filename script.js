
document.addEventListener('DOMContentLoaded', (event) => {
    const teamAName = document.getElementById('teamA-name');
    const teamAScore = document.getElementById('teamA-score');
    const teamBName = document.getElementById('teamB-name');
    const teamBScore = document.getElementById('teamB-score');

    let scoreA = 0;
    let scoreB = 0;

    window.increaseScore = function(team) {
        if (team === 'A') {
            scoreA++;
            teamAScore.textContent = scoreA;
        } else if (team === 'B') {
            scoreB++;
            teamBScore.textContent = scoreB;
        }
    };

    window.decreaseScore = function(team) {
        if (team === 'A' && scoreA > 0) {
            scoreA--;
            teamAScore.textContent = scoreA;
        } else if (team === 'B' && scoreB > 0) {
            scoreB--;
            teamBScore.textContent = scoreB;
        }
    };

    window.setScore = function(team) {
        let score = prompt("Yeni gol sayısını girin:");
        if (score !== null && !isNaN(score) && score >= 0) {
            score = parseInt(score);
            if (team === 'A') {
                scoreA = score;
                teamAScore.textContent = scoreA;
            } else if (team === 'B') {
                scoreB = score;
                teamBScore.textContent = scoreB;
            }
        } else {
            alert("Geçerli bir sayı girin.");
        }
    };

    window.changeTeamName = function(team) {
        let name = prompt("Yeni takım ismini girin:");
        if (name !== null && name.trim() !== "") {
            if (team === 'A') {
                teamAName.textContent = name;
            } else if (team === 'B') {
                teamBName.textContent = name;
            }
        } else {
            alert("Geçerli bir isim girin.");
        }
    };
});
