const puppeteer = require('puppeteer');

(async() => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto("https://www.elconfidencial.com/");

    console.log('NOTICIA PORTADA PERIÓDICO "EL CONFIDENCIAL" \n\n');

    
    // Sacar imagen

    // const imagen = await page.evaluate(() => {
    //     const element = document.querySelector('[class=news-container] header h3 a').textContent;
    //     return element;
    // });


    //Sacar título

    const titulo = await page.evaluate(() => {
        const element = document.querySelector('[class=m-principal__titleSide] a h1').textContent;
        return element;
    });
    console.log(titulo+"\n");

    // Sacar descripcion

    const descripcion = await page.evaluate(() => {
        const element = document.querySelector('[class=m-principal__titleSide] p').textContent;
        return element;
    });
    console.log(descripcion +"\n");

    // Sacar fuente

    const fuente = await page.evaluate(() => {
        const element = document.querySelector('[class=m-principal__titleSide] span').textContent;
        return element;
    });

    console.log(fuente);

    await browser.close();

})();