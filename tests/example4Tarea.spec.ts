import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.jetbrains.com/es-es/idea/');
  await page.locator('[data-test="site-logo"]').click();
  await page.getByRole('button', { name: 'Para equipos: Abrir submenú' }).click();
  await page.locator('[data-test="site-header-cart-action"]').click();
  await page.locator('[data-test="site-logo"]').click();
  await page.goto('https://www.jetbrains.com/es-es/idea/');
  await page.locator('[data-test="menu-second"]').getByRole('link', { name: 'Descargar' }).click();
  await page.locator('form svg').click();
  await page.waitForTimeout(5000);
  await page.getByText('Al enviar este formulario, acepto que JetBrains s.r.o. («JetBrains») pueda utili').click();
  
 

});