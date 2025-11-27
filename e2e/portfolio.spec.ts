import { test, expect } from '@playwright/test';

test.describe('Portfolio E2E', () => {
    // Force French locale for consistent testing
    test.use({ locale: 'fr-FR' });

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        await page.waitForLoadState('domcontentloaded');
        // Wait for the app to be hydrated by checking for the main heading
        await expect(page.locator('h1').first()).toBeVisible({ timeout: 10000 });
    });

    test.afterEach(async ({ page }) => {
        await page.evaluate(() => window.localStorage.clear());
        await page.context().clearCookies();
    });

    test.describe('General & Navigation', () => {
        test('has correct title and meta description', async ({ page }) => {
            await expect(page).toHaveTitle(/Faiez BEN AMAR/);
            const metaDescription = page.locator('meta[name="description"]');
            await expect(metaDescription).toHaveAttribute('content', /Ingénieur Full-Stack/);
        });

        test('desktop navigation works correctly', async ({ page }) => {
            // Ensure we are on desktop
            await page.setViewportSize({ width: 1280, height: 720 });
            // Wait for layout to adjust
            await page.waitForTimeout(500);

            const navLinks = [
                { text: 'À PROPOS', href: '#about' },
                { text: 'EXPÉRIENCES PROFESSIONNELLES', href: '#experience' },
                { text: 'COMPÉTENCES TECHNIQUES', href: '#skills' },
                { text: 'FORMATION', href: '#education' },
                { text: 'CERTIFICATIONS', href: '#certifications' },
                { text: 'CONTACT', href: '#contact' }
            ];

            // Scope to desktop nav container specifically
            const desktopNav = page.locator('nav').first();
            await expect(desktopNav).toBeVisible();

            for (const link of navLinks) {
                const navItem = desktopNav.getByRole('link', { name: link.text, exact: true });
                await expect(navItem).toBeVisible();
                await expect(navItem).toHaveAttribute('href', link.href);
            }

            // Test clicking a link
            await desktopNav.getByRole('link', { name: 'À PROPOS', exact: true }).click();
            await expect(page).toHaveURL(/#about/);
        });

        test('mobile navigation works', async ({ page }) => {
            // Set to mobile viewport
            await page.setViewportSize({ width: 375, height: 667 });
            await page.waitForTimeout(500);

            // Desktop nav should be hidden
            // Use .first() to target the nav links container specifically
            await expect(page.locator('nav .hidden.md\\:flex').first()).toBeHidden();

            // Open menu
            const menuButton = page.locator('nav button').last(); // Assuming last button is the toggle
            await menuButton.click();

            // Wait for mobile menu container to appear - target the one with links (avoiding language switcher container)
            // The menu usually has the links, so we can filter by text of a known link
            const mobileMenu = page.locator('nav .md\\:hidden').filter({ hasText: 'À PROPOS' });
            await expect(mobileMenu).toBeVisible();

            // Check link visibility
            const mobileLink = mobileMenu.getByRole('link', { name: 'À PROPOS', exact: true });
            await expect(mobileLink).toBeVisible();

            // Click link
            await mobileLink.click();
            await page.waitForTimeout(500);

            // Menu should close (optional check) and URL update
            await expect(page).toHaveURL(/#about/);
        });

        test('scroll to top button works', async ({ page }) => {
            // Scroll down to make button appear
            await page.evaluate(() => window.scrollTo(0, 2000));
            await page.waitForTimeout(1000);

            const scrollBtn = page.locator('button[aria-label="Retour en haut de page"]');
            await expect(scrollBtn).toBeVisible();

            await scrollBtn.click();
            // Verify we are back at top
            await page.waitForFunction(() => window.scrollY === 0);
        });
    });

    test.describe('Internationalization', () => {
        test('language switcher changes content', async ({ page }) => {
            // Use visible=true to handle mobile/desktop switchers
            const languageSwitcher = page.locator('select').locator('visible=true').first();

            // Initial state (French)
            await expect(languageSwitcher).toHaveValue('fr');
            // Use heading to ensure visibility on mobile (nav links are hidden)
            await expect(page.getByRole('heading', { name: 'À PROPOS' })).toBeVisible();

            // Switch to English
            await languageSwitcher.selectOption('en');
            await expect(languageSwitcher).toHaveValue('en');

            // Verify content change
            await expect(page.getByRole('heading', { name: 'ABOUT', exact: true })).toBeVisible();
        });
    });

    test.describe('Theme System', () => {
        test('theme toggle switches dark/light mode', async ({ page }) => {
            const html = page.locator('html');
            // Find the visible toggle button (handles both mobile and desktop)
            const toggleBtn = page.locator('button[aria-label="Toggle theme"]').locator('visible=true').first();

            // Check initial state
            const initialClass = await html.getAttribute('class');

            await toggleBtn.click();
            await page.waitForTimeout(500);

            const newClass = await html.getAttribute('class');
            expect(newClass).not.toBe(initialClass);

            // Toggle back
            await toggleBtn.click();
            await page.waitForTimeout(500);
            expect(await html.getAttribute('class')).toBe(initialClass);
        });
    });

    test.describe('Sections Content', () => {
        test('Hero section has key elements', async ({ page }) => {
            const hero = page.locator('#hero');
            await expect(hero.getByRole('heading', { name: 'Faiez BEN AMAR' })).toBeVisible();
            await expect(hero.getByRole('heading', { name: 'Ingénieur Full-Stack' })).toBeVisible();
            await expect(hero.getByRole('link', { name: 'Contactez-moi' })).toBeVisible();
            await expect(hero.getByRole('link', { name: 'Télécharger CV' })).toBeVisible();
        });

        test('Experience section displays timeline', async ({ page }) => {
            const experience = page.locator('#experience');
            await experience.scrollIntoViewIfNeeded();

            // Use getByText for section titles to be safer
            await expect(experience.getByText('EXPÉRIENCES PROFESSIONNELLES')).toBeVisible();
            // Check for a specific company or role - FIX: .first() inside expect
            await expect(experience.getByText('Ingénieur Backend').first()).toBeVisible();
        });

        test('Skills section displays categories', async ({ page }) => {
            const skills = page.locator('#skills');
            await skills.scrollIntoViewIfNeeded();

            await expect(skills.getByText('COMPÉTENCES TECHNIQUES')).toBeVisible();
            // Check categories
            await expect(skills.getByText('Backend', { exact: true })).toBeVisible();
            await expect(skills.getByText('Frontend', { exact: true })).toBeVisible();
        });

        test('Education section is present', async ({ page }) => {
            const education = page.locator('#education');
            await education.scrollIntoViewIfNeeded();
            await expect(education.getByText('FORMATION')).toBeVisible();
            await expect(education.getByText('Diplôme d’Ingénieur en Informatique')).toBeVisible();
        });

        test('Certifications section is present', async ({ page }) => {
            const certs = page.locator('#certifications');
            await certs.scrollIntoViewIfNeeded();
            await expect(certs.getByText('CERTIFICATIONS')).toBeVisible();
            await expect(certs.getByText('React JS')).toBeVisible();
        });

        test('Contact section has form', async ({ page }) => {
            const contact = page.locator('#contact');
            await contact.scrollIntoViewIfNeeded();

            await expect(contact.getByText('CONTACT', { exact: true })).toBeVisible();
            await expect(contact.locator('input[name="name"]')).toBeVisible();
            await expect(contact.locator('input[name="email"]')).toBeVisible();
            await expect(contact.locator('textarea[name="message"]')).toBeVisible();
            // Use CSS selector for button type submit to be most specific
            await expect(contact.locator('button[type="submit"]')).toBeVisible();
        });
    });
});
