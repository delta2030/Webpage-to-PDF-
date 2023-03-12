const puppeteer = require('puppeteer');
document.getElementById('convert-button').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, async (tabs) => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto(tabs[0].url);
      await page.pdf({path: 'webpage.pdf', format: 'A4'});
      await browser.close();
    });
  });
  
  
  

