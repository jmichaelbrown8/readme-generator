module.exports = {
    generateReadme: ({
            github,
            email,
            projName,
            projDesc,
            prereq,
            install,
            usage,
            contributing,
            tests,
            license,
        }) =>
        
`# ${projName}
${license === 'Apache' ? '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)' : ''}
${license === 'GNU' ? '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)' : ''}
${license === 'MIT' ? '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)' : ''}
${license === 'Creative Commons' ? '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)' : ''}
${license === 'The Unlicense' ? '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)' : ''}

##### Table of Contents
${projDesc ? "* [Description](#description)" : ""}
${prereq ? "* [Prerequisites](#prerequisites)" : ""}
${install ? "* [Installation](#installation)" : ""}
${usage ? "* [Usage](#usage)" : ""}
${tests ? "* [Tests](#tests)" : ""}
${contributing ? "* [Contributing](#contributing)" : ""}
${github || email ? "* [Questions](#questions)" : ""}
${license !== 'No License' ? "* [License](#license)" : ""}

${projDesc ? `## Description` : ''}
${projDesc}

${ prereq ? `## Prerequisites` : "" }
${ prereq ? prereq.split(",").reduce((x, y) => `${x}* ${y}\n`, '') : "" }

${install && "## Installation"}
${install}

${usage ? "## Usage" : ""}
${usage}

${tests ? "## Tests" : ""}
${tests}

${contributing ? "## Contributing" : ""}
${contributing}

${github || email ? "## Questions" : ""}
${github ? `Github: https://github.com/${github}\n` : ""}
${email ? `Reach out to ${email} with any additional questions.` : ""}

${license !== 'No License' ? "## License" : ""}
${license !== 'No License' ? `This application is covered by [${license}](./LICENSE)` : ''}
`,
};