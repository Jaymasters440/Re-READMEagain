// TODO: Create a function that returns a license badge based on which license is passed in
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

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {


}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  var licenseLink = renderLicenseLink (license);
  return `For information on our license please follow this link: ${licenseLink}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  var licenseSection = renderLicenseSection(data.license);
  var licenseBadge = renderLicenseBadge(data.license);
  return `# ${data.title}
  ## Description
  
  ${data.description}
  
  ## Table of Contents (Optional)
  
  If your README is long, add a table of contents to make it easy for users to find what they need.
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
      
  ## License
  
  ${licenseSection}
  
  ---
  
  🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
  
  ## Badges
  
  ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
  
  Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
  
  
  ## How to Contribute
  
  ${data.contributions}
  
  ## Tests
  
  Go the extra mile and write tests for your application. Then provide examples on how to run them here.


  
  ## Questions

  [github.com/${data.gitHub}](github.com/${data.gitHub})
  
  [${data.email}](${data.email})`;;
}

module.exports = generateMarkdown;
