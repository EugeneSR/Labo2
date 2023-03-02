import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.jetbrains.com/es-es/idea/');
  await page.locator('[data-test="site-logo"]').click();
  await page.getByRole('button', { name: 'Para equipos: Abrir submenú' }).click();
  await page.locator('[data-test="site-header-cart-action"]').click();
  await page.locator('[data-test="site-logo"]').click();
  await page.goto('https://www.jetbrains.com/es-es/idea/');
  await page.locator('[data-test="menu-second"]').getByRole('link', { name: 'Descargar' }).click();
 // await page.locator('form svg').click();
 // await page.getByText('Al enviar este formulario, acepto que JetBrains s.r.o. («JetBrains») pueda utili').click();
  //await page.waitForTimeout(5000);
  await page.locator('@class="wt-icon wt-icon_theme_light wt-icon_size_xs wt-privacy-notice__info-icon"').hover();
 // await page.locator('[#overview-content > div > section.wt-section.wt-section_bg_white.wt-section_theme_light.form-section > div > div > div.wt-col-7.wt-col-lg-8.wt-col-md-9.wt-col-sm-12 > form > div.wt-row.wt-row_size_m > div.wt-col-8.wt-col-md-7.wt-col-sm-12 > span > svg > path]').click();

});