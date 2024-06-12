(function() {
    emailjs.init("9EDiQhqhtLwO7nOzi"); // Replace with your EmailJS user ID
})();

function sendEmail() {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var mobile = document.getElementById('mobile').value.trim();
    var address = document.getElementById('address').value.trim();

    // Additional validation
    if (!name || !email || !mobile || !address) {
        alert('All fields are mandatory. Please fill in all the details.');
        return;
    }

    if (!/^\d{10}$/.test(mobile)) {
        alert('Mobile number must be exactly 10 digits.');
        return;
    }

    var templateParams = {
        name: name,
        email: email,
        mobile: mobile,
        address: address
    };

    emailjs.send('service_1ru1r5k', 'template_ehd1hqm', templateParams)
        .then(function(response) {
            alert('SUCCESS! Your registration Is Done!!!', response.status, response.text);
        }, function(error) {
            alert('FAILED... Please try again later.', error);
        });
}

document.addEventListener('DOMContentLoaded', function() {
    const standingsTable = document.getElementById('standings-table').getElementsByTagName('tbody')[0];
    const standings = Array.from(standingsTable.getElementsByTagName('tr'));

    function getData(row) {
        const cells = row.getElementsByTagName('td');
        return {
            name: cells[0].innerText,
            mp: parseInt(cells[1].innerText),
            w: parseInt(cells[2].innerText),
            d: parseInt(cells[3].innerText),
            l: parseInt(cells[4].innerText),
            gf: parseInt(cells[5].innerText),
            ga: parseInt(cells[6].innerText),
            gd: parseInt(cells[7].innerText),
            pts: parseInt(cells[8].innerText),
            form: cells[9].innerText
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
        cells[9].innerText = data.form;
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
