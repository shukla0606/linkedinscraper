

// const axios = require('axios');
// const fs = require('fs');
// const ObjectsToCsv = require('objects-to-csv');

// const apiEndpoint = 'https://nubela.co/proxycurl/api/v2/linkedin';
// const PROXYCURL_API_KEY = 'EQi2c31ceyvowfdTI23b-g';

// const headers = {
//   Authorization: 'Bearer ' + PROXYCURL_API_KEY,
// };

// // List of companies to search for on LinkedIn
// const companiesToSearch = [
//   'AGNISYS TECHNOLOGY (P) LTD.',
//   'AGNITIO SYSTEMS',
//   'AGNITY COMMUNICATIONS PVT. LTD.',
//   'AGNITY INDIA TECHNOLOGIES PVT LTD',
//   'AGNITY TECHNOLOGIES PRIVATE LIMITED',
//   'AGREETA SOLUTIONS PRIVATE LIMITED',
//   'AGS HEALTH PVT. LTD',
//   'AGT ELECTRONICS LTD',
//   'AGTECHPRO PRIVATE LIMITED',
//   'AHANA RAY TECHNOLOGIES INDIA PRIVATE LIMITED',
//   'AI COGITO INDIA PRIVATE LIMITED',
//   'AI SQUARE GLOBAL SOLUTIONS LLP',
//   'AIDASTECH INDIA PRIVATE LIMITED',
//   'AIE FIBER RESOURCE AND TRADING (INDIA) PRIVATE LIMITED',
//   'AIGENEDGE PRIVATE LIMITED',
//   'AIGILX HEALTH TECHNOLOGIES PVT LTD',
//   'AIMBEYOND INFOTECH PRIVATE LIMITED',
//   'AIML SQUARE PRIVATE LIMITED',
//   'AIMTRONICS SEMICONDUCTOR INDIA PVT LTD',
//   'AINS INDIA PVT LTD',
//   'AINSURTECH PVT LTD',
//   'AIOPSGROUP COMMERCE INDIA PRIVATE LIMITED',
//   // ... Add more companies as needed
// ];

// // Function to convert company names to LinkedIn profile URLs
// function generateProfileUrls(companies) {
//   return companies.map(company => `https://www.linkedin.com/in/${company.replace(/ /g, '').toLowerCase()}/`);
// }

// // List of LinkedIn profile URLs to scrape
// const linkedinProfileUrls = generateProfileUrls(companiesToSearch);

// async function scrapeProfiles() {
//   const scrapedDataList = [];

//   for (const profileUrl of linkedinProfileUrls) {
//     try {
//       const response = await axios.get(apiEndpoint, {
//         params: {
//           url: profileUrl,
//           skills: 'include',
//           education: 'include',
//           experience: 'include',
//           recommendations: 'include',
//           recommendationsReceived: 'include',
//           recommendationsGiven: 'include',
//           volunteerExperience: 'include',
//           honorsAndAwards: 'include',
//         },
//         headers: headers,
//       });

//       if (response.status === 403) {
//         console.error(`Forbidden: Access to ${profileUrl} is restricted.`);
//         continue;  // Skip to the next profile
//       }

//       const profileData = response.data;

//       const scrapedData = {
//         Name: profileData.name,
//         Headline: profileData.headline,
//         Location: profileData.location,
//         Connections: profileData.connections,
//         // ... (other fields as needed)
//       };

//       scrapedDataList.push(scrapedData);
//     } catch (error) {
//       console.error(`Error while processing ${profileUrl}: ${error.message}`);
//     }
//   }

//   const csv = new ObjectsToCsv(scrapedDataList);
//   const csvFilePath = 'output_profiles.csv';
//   await csv.toDisk(csvFilePath);

//   console.log(`Scraping complete. Check ${csvFilePath} for results.`);
// }

// // Execute the scraping function
// scrapeProfiles();






// puppester not wokring


// const puppeteer = require('puppeteer');
// const fs = require('fs');
// const ObjectsToCsv = require('objects-to-csv');

// const companiesToSearch = [
//   'AGNISYS TECHNOLOGY (P) LTD.',
//   'AGNITIO SYSTEMS',
//   'AGNITY COMMUNICATIONS PVT. LTD.',
//   'AGNITY INDIA TECHNOLOGIES PVT LTD',
//   'AGNITY TECHNOLOGIES PRIVATE LIMITED',
//   'AGREETA SOLUTIONS PRIVATE LIMITED',
//   'AGS HEALTH PVT. LTD',
//   'AGT ELECTRONICS LTD',
//   'AGTECHPRO PRIVATE LIMITED',
//   'AHANA RAY TECHNOLOGIES INDIA PRIVATE LIMITED',
//   'AI COGITO INDIA PRIVATE LIMITED',
//   'AI SQUARE GLOBAL SOLUTIONS LLP',
//   'AIDASTECH INDIA PRIVATE LIMITED',
//   'AIE FIBER RESOURCE AND TRADING (INDIA) PRIVATE LIMITED',
//   'AIGENEDGE PRIVATE LIMITED',
//   'AIGILX HEALTH TECHNOLOGIES PVT LTD',
//   'AIMBEYOND INFOTECH PRIVATE LIMITED',
//   'AIML SQUARE PRIVATE LIMITED',
//   'AIMTRONICS SEMICONDUCTOR INDIA PVT LTD',
//   'AINS INDIA PVT LTD',
//   'AINSURTECH PVT LTD',
//   'AIOPSGROUP COMMERCE INDIA PRIVATE LIMITED',
//   // ... Add more companies as needed
// ];

// // Function to convert company names to LinkedIn profile URLs
// function generateProfileUrls(companies) {
//   return companies.map(company => `https://www.linkedin.com/in/${company.replace(/ /g, '').toLowerCase()}/`);
// }

// // List of LinkedIn profile URLs to scrape
// const linkedinProfileUrls = generateProfileUrls(companiesToSearch);

// async function scrapeProfiles() {
//   const browser = await puppeteer.launch({ headless: true });
//   const page = await browser.newPage();
//   const scrapedDataList = [];

//   for (const profileUrl of linkedinProfileUrls) {
//     try {
//       await page.goto(profileUrl, { waitUntil: 'domcontentloaded' });

//       // Add your scraping logic here
//       const profileData = await page.evaluate(() => {
//         // Customize this part to extract data from the LinkedIn profile page
//         return {
//           Name: document.querySelector('.pv-top-card-section__name').textContent.trim(),
//           Headline: document.querySelector('.pv-top-card-section__headline').textContent.trim(),
//           Location: document.querySelector('.pv-top-card-section__location').textContent.trim(),
//           // ... (other fields as needed)
//         };
//       });

//       scrapedDataList.push(profileData);
//     } catch (error) {
//       console.error(`Error while processing ${profileUrl}: ${error.message}`);
//     }
//   }

//   await browser.close();

//   const csv = new ObjectsToCsv(scrapedDataList);
//   const csvFilePath = 'output_profiles.csv';
//   await csv.toDisk(csvFilePath);

//   console.log(`Scraping complete. Check ${csvFilePath} for results.`);
// }

// // Execute the scraping function
// scrapeProfiles();








// pupester uploding code 


// const puppeteer = require('puppeteer');
// const fs = require('fs');
// const ObjectsToCsv = require('objects-to-csv');

// const companiesToSearch = [
//   'AGNISYS TECHNOLOGY (P) LTD.',
//   'AGNITIO SYSTEMS',
//   'AGNITY COMMUNICATIONS PVT. LTD.',
//   // Add more companies as needed
// ];

// async function searchGoogleForCompany(companyName) {
//   const browser = await puppeteer.launch({ headless: true });
//   const page = await browser.newPage();

//   try {
//     // Navigate to Google and perform a search
//     await page.goto('https://www.google.com/');
//     await page.type('input[name="q"]', `${companyName} LinkedIn`);
//     await Promise.all([
//       page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
//       page.keyboard.press('Enter'),
//     ]);

//     // Extract LinkedIn URLs from the search results
//     const linkedInUrls = await page.evaluate(() => {
//       const links = Array.from(document.querySelectorAll('.tF2Cxc'));
//       return links.map(link => link.textContent);
//     });

//     // You can also extract other information from the search results as needed

//     return { companyName, linkedInUrls };
//   } catch (error) {
//     console.error(`Error while searching for ${companyName}: ${error.message}`);
//     return null;
//   } finally {
//     await browser.close();
//   }
// }

// async function scrapeCompanies() {
//   const scrapedDataList = [];

//   for (const company of companiesToSearch) {
//     const searchResult = await searchGoogleForCompany(company);

//     if (searchResult) {
//       console.log(`Search results for ${company}:`, searchResult);

//       // Add your logic to further process the search results if needed

//       scrapedDataList.push(searchResult);
//     } else {
//       console.log(`No search results found for ${company}`);
//     }
//   }

//   const csv = new ObjectsToCsv(scrapedDataList);
//   const csvFilePath = 'output_search_results.csv';
//   await csv.toDisk(csvFilePath);

//   console.log(`Scraping complete. Check ${csvFilePath} for results.`);
// }

// // Execute the scraping function
// scrapeCompanies();











  // 100 % working code 



// const puppeteer = require('puppeteer');
// const ObjectsToCsv = require('objects-to-csv');

// const companiesToSearch = [
//   'AGNISYS TECHNOLOGY (P) LTD.',
//   'AGNITIO SYSTEMS',
//   'AGNITY COMMUNICATIONS PVT. LTD.',
//   // Add more companies as needed
// ];

// async function searchGoogleForCompany(companyName) {
//   const browser = await puppeteer.launch({ headless: true });
//   const page = await browser.newPage();

//   try {
//     const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(`${companyName} LinkedIn`)}`;
//     await page.goto(searchUrl, { waitUntil: 'domcontentloaded' });

//     // Extract LinkedIn URLs from the search results
//     const linkedInUrls = await page.evaluate(() => {
//       const links = Array.from(document.querySelectorAll('.tF2Cxc'));
//       return links.map(link => link.textContent);
//     });

//     return { companyName, linkedInUrls };
//   } catch (error) {
//     console.error(`Error while searching for ${companyName}: ${error.message}`);
//     return null;
//   } finally {
//     await browser.close();
//   }
// }

// async function scrapeCompanies() {
//   const scrapedDataList = [];

//   for (const company of companiesToSearch) {
//     const searchResult = await searchGoogleForCompany(company);

//     if (searchResult) {
//       console.log(`Search results for ${company}:`, searchResult);
//       scrapedDataList.push(searchResult);
//     } else {
//       console.log(`No search results found for ${company}`);
//     }
//   }

//   const csv = new ObjectsToCsv(scrapedDataList);
//   const csvFilePath = 'output_search_results.csv';
//   await csv.toDisk(csvFilePath);

//   console.log(`Scraping complete. Check ${csvFilePath} for results.`);
// }

// // Execute the scraping function
// scrapeCompanies();










// 200% percent workign code 


const puppeteer = require('puppeteer');
const ObjectsToCsv = require('objects-to-csv');

const companiesToSearch = [
    'AGNISYS TECHNOLOGY (P) LTD.',
  'AGNITIO SYSTEMS',
  'AGNITY COMMUNICATIONS PVT. LTD.',
  'AGNITY INDIA TECHNOLOGIES PVT LTD',
  'AGNITY TECHNOLOGIES PRIVATE LIMITED',
  'AGREETA SOLUTIONS PRIVATE LIMITED',
  'AGS HEALTH PVT. LTD',
  'AGT ELECTRONICS LTD',
  'AGTECHPRO PRIVATE LIMITED',
  'AHANA RAY TECHNOLOGIES INDIA PRIVATE LIMITED',
  'AI COGITO INDIA PRIVATE LIMITED',
  'AI SQUARE GLOBAL SOLUTIONS LLP',
  'AIDASTECH INDIA PRIVATE LIMITED',
  'AIE FIBER RESOURCE AND TRADING (INDIA) PRIVATE LIMITED',
  'AIGENEDGE PRIVATE LIMITED',
  'AIGILX HEALTH TECHNOLOGIES PVT LTD',
  'AIMBEYOND INFOTECH PRIVATE LIMITED',
  'AIML SQUARE PRIVATE LIMITED',
  'AIMTRONICS SEMICONDUCTOR INDIA PVT LTD',
  'AINS INDIA PVT LTD',
  'AINSURTECH PVT LTD',
  'AIOPSGROUP COMMERCE INDIA PRIVATE LIMITED',
  'AIRAMATRIX PRIVATE LIMITED',
    
  ];
  

async function searchGoogleForCompany(companyName) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  try {
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(`${companyName} LinkedIn`)}`;
    await page.goto(searchUrl, { waitUntil: 'domcontentloaded' });

    // Extract LinkedIn URLs from the search results
    const linkedInUrls = await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('.tF2Cxc'));
      return links.map(link => link.textContent);
    });

    // Extract website link and contact information here (modify as needed)
    const websiteLink = await page.evaluate(() => {
      const linkElement = document.querySelector('.BVG0Nb');
      return linkElement ? linkElement.textContent : null;
    });

    // Attempt to gather contact information (modify as needed)
    const contactInformation = await page.evaluate(() => {
      // Example: Extracting the email and phone numbers
      const emailElement = document.querySelector('a[href^="mailto:"]');
      const phoneElement = document.querySelector('a[href^="tel:"]');
      return {
        email: emailElement ? emailElement.textContent : null,
        phone: phoneElement ? phoneElement.textContent : null,
      };
    });

    return { companyName, linkedInUrls, websiteLink, ...contactInformation };
  } catch (error) {
    console.error(`Error while searching for ${companyName}: ${error.message}`);
    return null;
  } finally {
    await browser.close();
  }
}

async function scrapeCompanies() {
  const scrapedDataList = [];

  for (const company of companiesToSearch) {
    const searchResult = await searchGoogleForCompany(company);

    if (searchResult) {
      console.log(`Search results for ${company}:`, searchResult);
      scrapedDataList.push(searchResult);
    } else {
      console.log(`No search results found for ${company}`);
    }
  }

  const csv = new ObjectsToCsv(scrapedDataList);
  const csvFilePath = 'output_search_results.csv';
  await csv.toDisk(csvFilePath);

  console.log(`Scraping complete. Check ${csvFilePath} for results.`);
}

// Execute the scraping function
scrapeCompanies();






