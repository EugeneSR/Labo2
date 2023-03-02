import { test, expect } from '@playwright/test';

test.skip('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByPlaceholder('Search docs').fill('exampl');
  await page.getByRole('link', { name: 'Example​ Experimental: components' }).click();
  await page.getByRole('link', { name: 'Installation' }).click();
  await page.getByRole('link', { name: 'Writing Tests', exact: true }).click();
  await page.getByRole('listitem').filter({ hasText: 'Getting StartedInstallationWriting TestsRunning TestsTest GeneratorTrace ViewerC' }).getByRole('link', { name: 'Test Generator' }).click();
  await page.getByRole('link', { name: 'API', exact: true }).click();
});