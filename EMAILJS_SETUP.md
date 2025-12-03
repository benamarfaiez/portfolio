# EmailJS Setup Guide

## 📧 Complete Setup Instructions

### 1. Create EmailJS Account

1. Visit [EmailJS.com](https://www.emailjs.com)
2. Click **Sign Up** (free plan available)
3. Verify your email address

### 2. Add Email Service

1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider:
   - **Gmail** (recommended for testing)
   - **Outlook**
   - Or use **EmailJS** service
4. Click **Connect Account** and follow the OAuth flow
5. **Copy the Service ID** (e.g., `service_abc123`)

### 3. Create Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Configure the template:

**Template Settings:**
- **Template Name**: Contact Form Submission
- **Subject**: `New Contact from {{from_name}}`

**Template Body:**
```
Hello,

You have received a new message from your portfolio contact form.

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. **Important**: Use these exact variable names:
   - `{{from_name}}` - sender's name
   - `{{from_email}}` - sender's email
   - `{{message}}` - message content

5. Click **Save**
6. **Copy the Template ID** (e.g., `template_xyz789`)

### 4. Get Your Public Key

1. Go to **Account** → **General**
2. Find **API Keys** section
3. **Copy the Public Key** (e.g., `abcDEF123_xyz`)

### 5. Configure Environment Variables

#### Local Development

1. Create `.env.local` file in your project root:

```bash
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=abcDEF123_xyz
```

2. Replace with your actual values from EmailJS dashboard

3. Add `.env.local` to `.gitignore`:
```
.env.local
```

#### Vercel Deployment

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add each variable:

| Name | Value |
|------|-------|
| `VITE_EMAILJS_SERVICE_ID` | Your service ID |
| `VITE_EMAILJS_TEMPLATE_ID` | Your template ID |
| `VITE_EMAILJS_PUBLIC_KEY` | Your public key |

4. Click **Save**
5. **Redeploy** your application for changes to take effect

### 6. Test the Form

1. Start your dev server:
```bash
npm run dev
```

2. Navigate to the Contact section
3. Fill out the form and click **Send**
4. Check your email inbox (the one configured in EmailJS service)

### 🔒 Security Notes

- ✅ Public Key is safe to expose in frontend code
- ✅ Never commit `.env.local` to Git
- ✅ Use environment variables for all credentials
- ❌ Never hardcode credentials in source code

### 🐛 Troubleshooting

**"Configuration EmailJS manquante"**
- Check that all environment variables are set
- Restart your dev server after adding `.env.local`

**Email not received**
- Check EmailJS dashboard logs (Email Services → Logs)
- Verify your email service is connected
- Check spam folder
- Ensure template variable names match (from_name, from_email, message)

**CORS errors**
- EmailJS handles CORS automatically
- Ensure you're using the latest @emailjs/browser package

### 📚 Additional Resources

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [React Integration Guide](https://www.emailjs.com/docs/examples/reactjs/)
