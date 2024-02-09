Company Information Scraper
This script uses Puppeteer to search Google for specified company names, extract LinkedIn URLs, website links, and contact information, and then stores the results in a CSV file.

Requirements
Node.js
Puppeteer
ObjectsToCsv
Installation
Clone the repository:

bash
Copy code
git clone <repository-url>
Install dependencies:

bash
Copy code
npm install
Usage
Edit the companiesToSearch array in the script to include the names of the companies you want to search for.

javascript
Copy code
const companiesToSearch = [
  'AGNISYS TECHNOLOGY (P) LTD.',
  // Add more company names as needed
];
Run the script:

bash
Copy code
node script.js
Configuration
headless: Set to true if you want to run Puppeteer in headless mode (no browser UI), or false if you want to see the browser UI.
javascript
Copy code
const browser = await puppeteer.launch({ headless: true });
Results
The script will log the search results for each company to the console and save them in a CSV file named output_search_results.csv. The CSV file will contain columns for company name, LinkedIn URLs, website link, email, and phone.

Troubleshooting
If there are issues with the script, check the console logs for error messages. Make sure Puppeteer and other dependencies are installed correctly.

Note
Ensure that you have the necessary permissions to scrape data from websites.
Use responsibly and be aware of the legal and ethical implications of web scraping.
