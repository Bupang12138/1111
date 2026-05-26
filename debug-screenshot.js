const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    args: ['--no-sandbox', '--disable-gpu']
  });
  const page = await browser.newPage();

  page.on('console', msg => {
    if (msg.type() === 'error') console.log('CONSOLE_ERR:', msg.text());
  });
  page.on('pageerror', err => console.log('PAGE_ERR:', err.message));

  await page.goto('http://localhost:5173', { waitUntil: 'networkidle2', timeout: 15000 });
  await page.screenshot({ path: 'C:/Users/28554/Documents/Codex/2026-05-24/new-chat-2/debug-login.png', fullPage: true });
  console.log('Login page screenshot saved');

  const inputs = await page.$$('input');
  console.log('Found inputs:', inputs.length);

  if (inputs.length >= 2) {
    await inputs[0].fill('admin');
    await inputs[1].fill('123456');
    const buttons = await page.$$('button');
    for (const btn of buttons) {
      const text = await btn.evaluate(el => el.textContent);
      if (text.includes('\u767b\u5f55')) {
        await btn.click();
        console.log('Clicked login');
        await page.waitForTimeout(3000);
        break;
      }
    }
  }

  await page.screenshot({ path: 'C:/Users/28554/Documents/Codex/2026-05-24/new-chat-2/debug-after-login.png', fullPage: true });
  console.log('After login screenshot saved, URL:', page.url());

  await browser.close();
})().catch(e => console.error('ERR:', e.message));
