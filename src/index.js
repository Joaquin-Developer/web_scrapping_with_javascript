/**
 * Mi primer Web_Scrapping básico con JavaScript :)
 * Voy a obtener datos del covid de la página del gobierno.
 * 5 de enero de 2021.-
 */

const puppeteer = require("puppeteer");

(async () => {
    try {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        await page.setDefaultNavigationTimeout(0); 
    
        await page.goto("https://www.gub.uy/ministerio-salud-publica/tematica/coronavirus");
        await page.screenshot({ path: "foto.jpg" });
    
        await browser.close();  // al final, cerramos el navegador
    } catch(error) {
        console.log(error);
    }
    
})();