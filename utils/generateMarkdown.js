// function to generate markdown for README
function generateMarkdown(data) {

  // return markdown with user answers included
    return `# ${data.title}

![Static Badge](https://img.shields.io/badge/license-${data.license}-brightgreen)

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

<a id="description"></a>
## Description
${data.description}

<a id="installation"></a>
## Installation instructions
${data.installation}

<a id="usage"></a>
## Usage information
${data.usage}

<a id="license"></a>
## License
This project is created under the ${data.license} license.

<a id="contributing"></a>
## Contribution guidelines
${data.contributing}

<a id="tests"></a>
## Test instructions
${data.tests}

<a id="questions"></a>
## Any questions?
Please contact me at GitHub [@${data.github}](https://github.com/${data.github}/)
or ${data.email}.

`;
  };
  
  // export for use in index.js
  module.exports = generateMarkdown;
  