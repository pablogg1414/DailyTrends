const puppeteer = require('puppeteer');

(async() => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto("https://www.lavanguardia.com/");


    console.log('NOTICIA PORTADA PERIÓDICO "LA VANGUARDIA" \n\n');


    // Sacar imagen

    // const imagen = await page.evaluate(() => {
    //     const element = document.querySelector('[class=article-module] img').textContent;
    //     return element;
    // });
    // console.log(imagen);


    

    //Sacar título

    const titulo = await page.evaluate(() => {
        const element = document.querySelector('[class=article-module] h2 a');
        if (element!=null){
            return element.textContent;
        }
    });
    if(titulo!=null){
        console.log(titulo +"\n");
    }

    // Sacar descripcion

    const descripcion = await page.evaluate(() => {
        const element = document.querySelector('[class=epigraph] p');
        if (element!=null){
            return element.textContent;
        }
    });
    if(descripcion!=null){
        console.log(descripcion +"\n");
    }

    // Sacar fuente

    const fuente = await page.evaluate(() => {
        const element = document.querySelector('[class=article-module] div span p');
        if (element!=null){
            return element.textContent;
        }
    });

    if(fuente!=null){
        console.log(fuente +"\n");
    }


    await browser.close();

})();