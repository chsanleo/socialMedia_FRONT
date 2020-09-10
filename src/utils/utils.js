export const utils = {
    isNullOrEmpty, EMPTY, cleanHTML
};

function isNullOrEmpty(variable) {
    return (variable == null || variable === '' || variable === ' ');
};

function EMPTY() { return ''; };

function cleanHTML(html) {
    let newHtml = html;

    let bePolite = ['suck', 'shit', 'asshole', 'cock', 'idiot', 'bitch'];

    if (newHtml.includes('&lt;?php')) { newHtml = newHtml.replace(/&lt;.*?&gt;/, '**forbiddenCode**'); }
    if (newHtml.includes('&lt;a href') || newHtml.includes('&lt; a')) { newHtml = newHtml.replace(/&lt.*&gt;/, '**forbiddenLink** '); }
    if (newHtml.includes('&lt;script')) {
        newHtml = newHtml.replace(/&gt;.*&gt;/, '');
        newHtml = newHtml.replace('&lt;script', '**forbiddenCode**');
    }
    for (let item of bePolite) {
        newHtml = newHtml.replace(item, 'have a nice day');
    }

    return newHtml;
};