import { test, expect } from '@playwright/test';

test.skip('test', async ({ page }) => {
  await page.goto('https://www.jetbrains.com/es-es/idea/');
  await page.locator('[data-test="site-logo"]').click();
  await page.getByRole('button', { name: 'Para equipos: Abrir submenú' }).click();
  await page.locator('[data-test="site-header-cart-action"]').click();
  await page.locator('[data-test="site-logo"]').click();
  /* no usar esto*/
  //await page.waitForTimeout(5000);

});