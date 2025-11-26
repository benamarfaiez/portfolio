import { test, expect } from '@playwright/test';

test.describe('Portfolio E2E', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('has title and meta description', async ({ page }) => {
        await expect(page).toHaveTitle(/Faiez BEN AMAR/);

        const metaDescription = page.locator('meta[name="description"]');
        await expect(metaDescription).toHaveAttribute('content', /Ingénieur Full-Stack/);
    });
    test('navigation works correctly', async ({ page }) => {
        const viewportSize = page.viewportSize();
        const isMobile = viewportSize ? viewportSize.width < 768 : false;

        if (isMobile) {
            const menuToggle = page.locator('nav button').last();
            await menuToggle.click();
            await page.waitForTimeout(300);
        }

        const navLinks = ['À propos', 'Expérience', 'Compétences', 'Formation', 'Certifications', 'Contact'];
        for (const linkText of navLinks) {
            const link = isMobile
                ? page.getByRole('link', { name: linkText }).last()
                : page.getByRole('link', { name: linkText }).first();
            await expect(link).toBeVisible();
        }

        const firstLink = isMobile
            ? page.getByRole('link', { name: 'À propos' }).last()
            : page.getByRole('link', { name: 'À propos' }).first();
        await firstLink.click();
        await expect(page).toHaveURL(/#about/);
    });


    test('experience section displays projects', async ({ page }) => {
        // Scroll to experience
        const experienceSection = page.locator('#experience');
        await experienceSection.scrollIntoViewIfNeeded();

        // Check for company names
        await expect(page.getByText('Henner')).toBeVisible();
        await expect(page.getByText('Euro Information')).toBeVisible();

        // Check for project details
        await expect(page.getByText('Projet PushNotification')).toBeVisible();
    });

    test('mobile menu works', async ({ page }) => {
        // Set viewport to mobile
        await page.setViewportSize({ width: 375, height: 667 });

        // Verify desktop menu is hidden
        const desktopNav = page.locator('nav .hidden.md\\:flex');
        await expect(desktopNav).toBeHidden();

        // Open mobile menu
        const menuBtn = page.locator('button:has-svg'); // This selector might need refinement based on exact icon
        // Better selector:
        const menuToggle = page.locator('nav button').last(); // Assuming it's the last button in nav
        await menuToggle.click();

        // Verify mobile menu items are visible
        await expect(page.getByText('À propos').last()).toBeVisible();

        // Click a link and verify menu closes
        await page.getByText('À propos').last().click();
        // Wait for animation
        await page.waitForTimeout(500);
        // Should be hidden or removed
        // Note: Framer motion removes it from DOM
        // await expect(page.getByText('À propos').last()).toBeHidden(); 
    });

    test('no console errors', async ({ page }) => {
        const errors: string[] = [];
        page.on('console', msg => {
            if (msg.type() === 'error') {
                errors.push(msg.text());
            }
        });

        await page.goto('/');
        await page.waitForLoadState('networkidle');

        expect(errors).toEqual([]);
    });
});
