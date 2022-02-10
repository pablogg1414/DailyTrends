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
        const element = document.querySelector('[class=news-container] header h3 a');
        if (element!=null){
            return element.textContent;
        }
    });
    if(titulo!=null){
        console.log(titulo +"\n");
    }

    //Sacar descripcion (No tiene)

    // const descripcion = await page.evaluate(() => {
    //     const element = document.querySelector('[class=news-container] p').textContent;
    //     return element;
    // });
    // if(descripcion!=null){
    //     console.log(descripcion +"\n");
    // }

    //Sacar fuente

    const fuente = await page.evaluate(() => {
        const element = document.querySelector('[class=news-container] footer address span');
        if (element!=null){
            return element.textContent;
        }
    });

    if(fuente!=null){
        console.log(fuente +"\n");
    }


    await browser.close();

})();