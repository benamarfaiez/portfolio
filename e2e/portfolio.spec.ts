import { test, expect } from '@playwright/test';

test.describe('Portfolio E2E', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        // Wait for page to be fully loaded
        await page.waitForLoadState('networkidle');
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

        const navLinks = ['À PROPOS', 'EXPÉRIENCE', 'COMPÉTENCES', 'FORMATION', 'CERTIFICATIONS', 'CONTACT'];
        for (const linkText of navLinks) {
            const link = isMobile
                ? page.getByRole('link', { name: linkText }).last()
                : page.getByRole('link', { name: linkText }).first();
            await expect(link).toBeVisible();
        }

        const firstLink = isMobile
            ? page.getByRole('link', { name: 'À PROPOS' }).last()
            : page.getByRole('link', { name: 'À PROPOS' }).first();
        await firstLink.click();
        await expect(page).toHaveURL(/#about/);
    });

    test('language switcher works', async ({ page }) => {
        const languageSwitcher = page.locator('select').first();
        await expect(languageSwitcher).toBeVisible();

        const options = ['Français', 'English'];
        for (const option of options) {
            await languageSwitcher.selectOption(option);
            await expect(page.getByText(option)).toBeVisible();
        }
    });

    test('skills section displays categories', async ({ page }) => {
        // Scroll to skills section
        const skillsSection = page.locator('#skills');
        await skillsSection.scrollIntoViewIfNeeded();

        // Check for skill categories (in French)
        await expect(page.getByText('Backend')).toBeVisible();
        await expect(page.getByText('Frontend')).toBeVisible();
        await expect(page.getByText('Base de données')).toBeVisible();
    });

    test('certifications section displays items', async ({ page }) => {
        // Scroll to certifications section
        const certificationsSection = page.locator('#certifications');
        await certificationsSection.scrollIntoViewIfNeeded();

        // Check for certification titles (original titles)
        await expect(page.getByText('React JS')).toBeVisible();
        await expect(page.locator('text=Angular 12 .Net core web API')).toBeVisible();
    });

    test('mobile menu works', async ({ page }) => {
        // Set viewport to mobile
        await page.setViewportSize({ width: 375, height: 667 });

        // Verify desktop menu is hidden
        const desktopNav = page.locator('nav .hidden.md\\:flex');
        await expect(desktopNav).toBeHidden();

        // Open mobile menu - find the button without aria-label (menu toggle, not theme/language)
        const menuToggle = page.locator('nav button').last();
        await menuToggle.click();
        await page.waitForTimeout(300);

        // Verify mobile menu items are visible
        await expect(page.locator('a:has-text("À PROPOS")').last()).toBeVisible();

        // Click a link
        await page.locator('a:has-text("À PROPOS")').last().click();
        await page.waitForTimeout(500);

        // Verify navigation happened
        await expect(page).toHaveURL(/#about/);
    });

    test('theme toggle works', async ({ page }) => {
        // Find theme toggle button
        const themeButton = page.locator('button[aria-label="Toggle theme"]').first();
        await expect(themeButton).toBeVisible();

        // Get initial theme (check for dark mode class)
        const htmlElement = page.locator('html');
        const initialHasDark = await htmlElement.evaluate(el => el.classList.contains('dark'));

        // Click theme toggle
        await themeButton.click();
        await page.waitForTimeout(300);

        // Verify theme changed
        const finalHasDark = await htmlElement.evaluate(el => el.classList.contains('dark'));
        expect(initialHasDark).not.toBe(finalHasDark);
    });

    test('contact form is present', async ({ page }) => {
        // Scroll to contact section
        const contactSection = page.locator('#contact');
        await contactSection.scrollIntoViewIfNeeded();

        // Check form elements
        await expect(page.locator('input[name="name"]')).toBeVisible();
        await expect(page.locator('input[name="email"]')).toBeVisible();
        await expect(page.locator('textarea[name="message"]')).toBeVisible();
        await expect(page.locator('button[type="submit"]')).toBeVisible();
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
