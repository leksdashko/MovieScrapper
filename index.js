import cherio from 'cherio';
import chalk from 'chalk';

import {arrayFromLength} from './helpers/common';
import {getPageContent} from './helpers/puppeteer'

const SITE = 'https://nzbgeek.com';

(async function main(){
    try{
        const pageContent = await getPageContent(url);
        console.log(pageContent);
    }catch(err){
        console.log(chalk.red('An error has occured \n'))
        console.log(err);
    }
})();
