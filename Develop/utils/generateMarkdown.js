// function that returns a license badge based on which license is passed in 5 License minimum only select one license at a time
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var answer = "";
  switch (license) {
    case "Apache 2.0 License":
      answer = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "Boost Software License 1.0":
      answer = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      break;
    case "BSD 3-Clause License":
      answer = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      break;
    case "MIT License":
      answer = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      break;
    case "The Pearl License":
      answer = "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
      break;
  }
  return answer;
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var answer = "";
  switch (license) {
    case "Apache 2.0 License":
      answer = "[Click here to link to License](https://opensource.org/licenses/Apache-2.0)";
      break;

    case "Boost Software License 1.0":
      answer = "[Click here to link to License](https://www.boost.org/LICENSE_1_0.txt)";
      break;
    case "BSD 3-Clause License":
      answer = "[Click here to link to License](https://opensource.org/licenses/BSD-3-Clause)";
      break;
    case "MIT License":
      answer = "[Click here to link to License](https://opensource.org/licenses/BSD-3-Clause)";
      break;
    case "The Pearl License":
      answer = "[Click here to link to License](https://opensource.org/licenses/Artistic-2.0)";
      break;
  }
  return answer;


}

//  function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  var licenseLink = renderLicenseLink (license);
  return `For information on our license please follow this link: ${licenseLink}`;
}

// generate markdown for README 
function generateMarkdown(data) {
  console.log(data);
  var licenseSection = renderLicenseSection(data.license);
  var licenseBadge = renderLicenseBadge(data.license);
  return `# ${data.title} ${licenseBadge}
  ## Description
  
  ${data.description}
  
  
  ## Table of Contents 
  
  - [Badges](#badges)
  - [Credits](#credits)
  - [How to contribute](#how to contribute)
  - [Installation](#installation)
  - [License](#license)
  - [Questions](#questions)
  - [Tests](#tests)
  - [Usage](#usage)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
      
  ## License
  
  ${licenseSection}
  
  ---
  

  ## Badges
  
  ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

  ${licenseBadge}
  
  
  ## How to Contribute
  
  ${data.contributions}
  
  
  ## Questions

  [github.com/${data.gitHub}](github.com/${data.gitHub})
  





  [${data.email}](${data.email})`;
}
//Everything above is inside one set of backticks.
module.exports = {generateMarkdown};
