# Team Profile Generator

## Table of Contents:

- [Description](#description)
- [Technologies-Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Demo](#demo)
- [License](#license)

## Description:

This repository uses node.js and npm inquirer package to generate a 'dream-team' web-page to easily see a complete list of team members, and important details about each. The web-page is generated using responses entered by the team manager/application user, corresponding to a series of command terminal prompts.

This repository makes incorporates TDD, specifically unit testing using npm jest.

## Technologies Used:

- HTML
- CSS
- Bootstrap
- Google Fonts (imported styles)
- Node.js
- NPM Inquirer Package, v. 8.2.4
- NPM Jest

## Installation:

This application requires npm inquirer package, version 8.2.4, and jest.
For installation, in your terminal command line, run:

```
npm install
```

## Usage:

To use: Open an integrated terminal linked to the index.js file. Run node index.js in the terminal command line. Users will be given a series of prompts requesting information about their team.

- The first round of promopts requests team Manager information, including name, employee ID, email, and office number.

- The Manager will be prompted with the option to add an engineer or intern to their team (or to finish building their team).

- If the user chooses to add an additional team member, they will be prompted to enter additional information about that team member.

- The user can add as many team members are desired.

- Once complete, selecting 'Finsih Building Team' will generate a completed HTML file (dreamteam.html).

- Page styles and formats are already applied using bootstrap and css.

## Demo:

- [View a video walk through of this application in use](https://drive.google.com/file/d/1ZckzWxns8FV6ZRvFdOOIi4Rh185JtUoG/view)

## License:

N/A
