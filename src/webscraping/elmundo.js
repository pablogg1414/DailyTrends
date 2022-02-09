const puppeteer = require('puppeteer');

(async() => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto("https://www.elmundo.es/");

    console.log('NOTICIA PORTADA PERIÓDICO "EL MUNDO" \n\n');

    // Sacar imagen

    // const imagen = await page.evaluate(() => {
    //     const element = document.querySelector('[class=news-container] header h3 a').textContent;
    //     return element;
    // });
    // console.log(imagen);

    //Sacar título

    const titulo = await page.evaluate(() => {
        const element = document.querySelector('[class=ue-c-cover-content__body] header a h2').textContent;
        return element;
    });
    console.log(titulo+"\n");

    // Sacar descripcion (No tiene)

    // const descripcion = await page.evaluate(() => {
    //     const element = document.querySelector('[class=ue-c-cover-content__body] p').textContent;
    //     return element;
    // });
    // console.log(descripcion+"\n");

    // Sacar fuente

    const fuente = await page.evaluate(() => {
        const element = document.querySelector('[class=ue-c-cover-content__body] div ul li span').textContent;
        return element;
    });

    console.log(fuente);

    await browser.close();

})();