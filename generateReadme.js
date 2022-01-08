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
        license
    }) => 
`# ${projName}

${projDesc}

##### Table of Contents
${prereq ? '* [Prerequisites](#prerequisites)' : ''}
${install ? '* [Installation](#installation)' : ''}

${prereq ? '## Prerequisites' : ''}
${prereq ? prereq.split(',').reduce((x, y) => `${x}* ${y}\n`, '') : ''}

${install ? '## Installation' : ''}



`
};