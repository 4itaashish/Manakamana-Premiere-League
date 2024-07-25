document.addEventListener('DOMContentLoaded', function() {
    const standingsTable = document.getElementById('standings-table').getElementsByTagName('tbody')[0];
    const standings = Array.from(standingsTable.getElementsByTagName('tr'));

    function getData(row) {
        const cells = row.getElementsByTagName('td');
        return {
            name: cells[0].innerText,
            mp: parseInt(cells[1].innerText) || 0,
            w: parseInt(cells[2].innerText) || 0,
            d: parseInt(cells[3].innerText) || 0,
            l: parseInt(cells[4].innerText) || 0,
            gf: parseInt(cells[5].innerText) || 0,
            ga: parseInt(cells[6].innerText) || 0,
            gd: parseInt(cells[7].innerText) || 0,
            pts: parseInt(cells[8].innerText) || 0
        };
    }

    function setData(row, data) {
        const cells = row.getElementsByTagName('td');
        cells[0].innerText = data.name;
        cells[1].innerText = data.mp;
        cells[2].innerText = data.w;
        cells[3].innerText = data.d;
        cells[4].innerText = data.l;
        cells[5].innerText = data.gf;
        cells[6].innerText = data.ga;
        cells[7].innerText = data.gd;
        cells[8].innerText = data.pts;
    }

    function sortStandings(standings) {
        return standings.sort((a, b) => {
            const dataA = getData(a);
            const dataB = getData(b);

            if (dataA.pts !== dataB.pts) {
                return dataB.pts - dataA.pts;
            }
            if (dataA.gd !== dataB.gd) {
                return dataB.gd - dataA.gd;
            }
            return dataB.gf - dataA.gf;
        });
    }

    function updateStandings() {
        const sortedStandings = sortStandings(standings);
        sortedStandings.forEach((row, index) => {
            standingsTable.appendChild(row);
        });
    }

    updateStandings();
});

document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("W5zaHs8nkQ-UlhwV0");
    console.log("EmailJS initialized");
});

function sendEmail() {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var mobile = document.getElementById('mobile').value.trim();
    var address = document.getElementById('address').value.trim();
    var esewaMobile = document.getElementById('esewa-mobile').value.trim();

    // Additional validation
    if (!name || !email || !mobile || !address || !esewaMobile) {
        alert('All fields are mandatory. Please fill in all the details.');
        return;
    }

    if (!/^\d{10}$/.test(mobile)) {
        alert('Mobile number must be exactly 10 digits.');
        return;
    }

    if (!/^\d{10}$/.test(esewaMobile)) {
        alert('E-Sewa mobile number must be exactly 10 digits.');
        return;
    }

    var templateParams = {
        name: name,
        email: email,
        mobile: mobile,
        address: address,
        entry_fee: '100',
        esewa_mobile: esewaMobile
    };

    console.log("Template Params: ", templateParams);

    emailjs.send('service_1ru1r5k', 'template_urev5o8', templateParams)
        .then(function(response) {
            console.log('Email sent successfully', response.status, response.text);
            alert('SUCCESS! Your registration is done!!!');
        }, function(error) {
            console.error('Failed to send email', error);
            alert('FAILED... Please try again later.');
        });
}


document.getElementById('celebration-button').addEventListener('click', function() {
    const winnerImage = document.getElementById('winner-image');
    winnerImage.classList.toggle('glow');
});






function changeSeason() {
    var season = document.getElementById('season').value;
    window.location.href = season;
}
function changeSeason() {
    var season = document.getElementById('season').value;
    window.location.href = season;
}
function changeSeason() {
    var season = document.getElementById('season').value;
    window.location.href = season;
}











