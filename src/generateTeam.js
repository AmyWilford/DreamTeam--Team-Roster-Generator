
function generateTeam() {
    `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>Your Team</title>
</head>
<body>
    <div class="jumbotron bg-warning text-center display-3 text-uppercase font-weight-bold">The Team</div>
    <div class="d-flex flex-wrap">
        <div class="card bg-light m-4" style="width: 300px">
            <div class="card-body p-0">
                <div class="card-title bg-info p-3 text-white">
                    <h5>staff name</h5>
                    <h5>position</h5>
                </div>
                <ul class="list-group list-group-flush border border-grey m-4">
                    <li class="list-group-item">ID:</li>
                    <li class="list-group-item">Email:</li>
                    <li class="list-group-item">GitHub:</li>
                  </ul>
            </div>
        </div>
    </div>
</body>
</html>`
};

module.exports = generateTeam;