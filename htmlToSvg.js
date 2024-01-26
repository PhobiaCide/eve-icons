const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

// Read the HTML file
const htmlFilePath = 'index.html'; // Update with your HTML file path
const htmlContent = fs.readFileSync(htmlFilePath, 'utf8');

// Parse HTML content using Cheerio
const $ = cheerio.load(htmlContent);

// Create the 'icons' directory if it doesn't exist
const iconsDirectory = path.join(path.dirname(htmlFilePath), 'icons');
if (!fs.existsSync(iconsDirectory)) {
  fs.mkdirSync(iconsDirectory);
}

// Extract and save each symbol as a separate SVG file
$('#svg-icon-defs symbol').each((index, element) => {
  const symbolId = $(element).attr('id');
  const symbolContent = $.xml(element);

  const iconFilePath = path.join(iconsDirectory, `${symbolId}.svg`);
  fs.writeFileSync(iconFilePath, symbolContent, 'utf8');

  console.log(`Saved ${symbolId} to ${iconFilePath}`);
});

console.log('Extraction complete.');
