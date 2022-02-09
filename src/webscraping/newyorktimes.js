const puppeteer = require('puppeteer');

(async() => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto("https://www.nytimes.com/es/");


    console.log('NOTICIA PORTADA PERIÓDICO "NEW YORK TIMES" \n\n');


    //Sacar imagen (No hay)
    
    // const imagen = await page.evaluate(() => {
    //     const element = document.querySelector('[class=article-module] ../figure a img' ).textContent;
    //     return element;
    // });
    // console.log(imagen);


    

    //Sacar título

    // const imagen = await page.evaluate(() => {
    //     const element = document.querySelector('[class=photo] a img');
    //     return imagen;
    // });
    // console.log(imagen+ "\n");

    // Sacar descripcion

    const descripcion = await page.evaluate(() => {
        const element = document.querySelector('[class=css-7l6h4f] p').textContent;
        return element;
    });
    console.log(descripcion+ "\n");

    // Sacar fuente

    const fuente = await page.evaluate(() => {
        const element = document.querySelector('[class=css-9voj2j]').textContent;
        return element;
    });

    console.log(fuente);


    await browser.close();

})();