const puppeteer = require('puppeteer');

(async() => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto("https://www.elespanol.com/");

    console.log('NOTICIA PORTADA PERIÓDICO "EL ESPAÑOL" \n\n');

    //Sacar imagen
    // const imagen = await page.evaluate(() => {
    //     const element = document.querySelector('[class=news-container] img').textContent;
    //     return element;
    // });
    // console.log(imagen);

    //Sacar título

    const titulo = await page.evaluate(() => {
        const element = document.querySelector('[class=news-container] header h3 a').textContent;
        return element;
    });
    console.log(titulo+ "\n");

    //Sacar descripcion (No tiene)

    // const descripcion = await page.evaluate(() => {
    //     const element = document.querySelector('[class=news-container] p').textContent;
    //     return element;
    // });
    // console.log(descripcion);

    //Sacar fuente

    const fuente = await page.evaluate(() => {
        const element = document.querySelector('[class=news-container] footer address span').textContent;
        return element;
    });

    console.log(fuente);


    await browser.close();

})();