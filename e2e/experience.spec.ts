import { test, expect } from '@playwright/test';

test.describe('Experience detail navigation', () => {
    test.use({ locale: 'fr-FR' });

    test.afterEach(async ({ page }) => {
        await page.evaluate(() => window.localStorage.clear());
        await page.context().clearCookies();
    });

    test('navigates between experiences from detail page', async ({ page }) => {
        await page.goto('/experiences/euro-information-fullstack');
        await page.waitForLoadState('domcontentloaded');

        const heading = page.getByRole('heading', { level: 1 });
        await expect(heading).toBeVisible({ timeout: 7000 });

        const nextButton = page.getByRole('button', { name: /Expérience suivante/i });
        const prevButton = page.getByRole('button', { name: /Expérience précédente/i });

        await expect(nextButton).toBeVisible();
        await expect(prevButton).toBeVisible();

        await nextButton.click();
        await expect(page).toHaveURL(/\/experiences\/canaccord-genuity-developer/);
        await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

        const prevAfterNext = page.getByRole('button', { name: /Expérience précédente/i });
        await prevAfterNext.click();
        await expect(page).toHaveURL(/\/experiences\/euro-information-fullstack/);
    });
});

