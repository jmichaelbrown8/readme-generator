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

##### Table of Contents
${projDesc ? "* [Description](#description)" : ""}
${prereq ? "* [Prerequisites](#prerequisites)" : ""}
${install ? "* [Installation](#installation)" : ""}
${usage ? "* [Usage](#usage)" : ""}
${tests ? "* [Tests](#tests)" : ""}
${contributing ? "* [Contributing](#contributing)" : ""}
${github || email ? "* [Questions](#questions)" : ""}
${license ? "* [License](#license)" : ""}

${projDesc ? `## Description` : ''}

${ prereq ? `## Prerequisites` : "" }
${ prereq ? prereq.split(",").reduce((x, y) => `${x}* ${y}\n`, '') : "" }

${install ? "## Installation" : ""}
${usage ? "## Usage" : ""}
${tests ? "## Tests" : ""}
${contributing ? "## Contributing" : ""}
${github || email ? "## Questions" : ""}
${license ? "## License" : ""}
`,
};