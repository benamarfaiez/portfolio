import { test, expect } from '@playwright/test';

test.describe('Skills & SkillsCategory E2E', () => {
    // Force French locale for consistent testing
    test.use({ locale: 'fr-FR' });

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        await page.waitForLoadState('domcontentloaded');
        // Wait for the app to be hydrated by checking for the main heading
        await expect(page.locator('h1').first()).toBeVisible({ timeout: 6000 });
    });

    test.afterEach(async ({ page }) => {
        await page.evaluate(() => window.localStorage.clear());
        await page.context().clearCookies();
    });

    test('Skills section displays all categories on Home Page', async ({ page }) => {
        const skillsSection = page.locator('#skills');
        await skillsSection.scrollIntoViewIfNeeded();
        await expect(skillsSection).toBeVisible();

        // Check for category titles
        const categories = ['Backend', 'Frontend', 'Tests', 'Database', 'DevOps', 'Architecture'];
        for (const category of categories) {
            await expect(skillsSection.getByText(category, { exact: true })).toBeVisible();
        }
    });

    test('Navigation to Skills Category page works', async ({ page }) => {
        const skillsSection = page.locator('#skills');
        await skillsSection.scrollIntoViewIfNeeded();

        // Click on "Backend" category
        // The card is a link, so we can click the link containing "Backend"
        const backendLink = skillsSection.getByRole('link', { name: /Backend/i }).first();
        await backendLink.click();

        // Verify URL
        await expect(page).toHaveURL(/\/skills\/backend/);

        // Verify Page Title (from SkillsCategory.tsx config)
        await expect(page.getByRole('heading', { name: 'Backend' })).toBeVisible();

        // Verify Chart is present
        await expect(page.locator('canvas')).toBeVisible();
    });

    test('Back button navigates back to Home Page', async ({ page }) => {
        // Go directly to a category page
        await page.goto('/skills/frontend');

        // Verify we are on the page
        await expect(page.getByRole('heading', { name: 'Frontend' })).toBeVisible();

        // Click Back button - use exact match to avoid matching "Retour en haut de page"
        const backButton = page.getByRole('button', { name: 'Retour', exact: true });
        await expect(backButton).toBeVisible();
        await backButton.click();
    });

    test('Full navigation flow: Home -> Category -> Back', async ({ page }) => {
        // 1. Start at Home
        await expect(page).toHaveURL('/');

        // 2. Navigate to Frontend category
        const skillsSection = page.locator('#skills');
        await skillsSection.scrollIntoViewIfNeeded();
        await skillsSection.getByRole('link', { name: /Frontend/i }).first().click();

        // 3. Verify Category Page
        await expect(page).toHaveURL(/\/skills\/frontend/);
        await expect(page.getByRole('heading', { name: 'Frontend' })).toBeVisible();

        // 4. Click Back - use exact match
        const backButton = page.getByRole('button', { name: 'Retour', exact: true });
        await backButton.click();

        // 5. Verify back at Home
        await expect(page).toHaveURL('/');
        await expect(page.locator('#skills')).toBeVisible();
    });
});
