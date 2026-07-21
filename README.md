# Pinnacle Accountancy

Hand-coded professional services website for **Pinnacle Accountancy** — a fictional UK accountancy firm (Takween Centre UK Ltd — Developer Demo Programme, Brief 11).

**Tagline:** Clear Numbers. Confident Decisions.

## Pages

| Route | Page |
|-------|------|
| `/` | Home — services overview, who we serve, why Pinnacle, testimonials, free consultation CTA |
| `/services` | Services — full descriptions + fixed-fee note |
| `/about` | About — firm story, accreditations, team |
| `/resources` | Resources — tax deadlines, sole trader expenses, sole trader vs limited company |
| `/contact` | Contact — enquiry form + business details |

## Tech stack

- **Next.js** (App Router) + React + TypeScript
- **Tailwind CSS** + shadcn/ui
- **Framer Motion** for subtle motion
- **Nodemailer** for contact & consultation form emails (no database)

## Getting started

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Development server |
| `pnpm build` | Production build |
| `pnpm start` | Run production build |
| `pnpm lint` | ESLint |

## Environment variables

Copy `.env.example` to `.env.local` and fill in:

| Variable | Required | Description |
|----------|----------|-------------|
| `EMAIL_USER` | Yes | Gmail / Google Workspace address used to send mail via SMTP |
| `EMAIL_PASS` | Yes | [Gmail App Password](https://myaccount.google.com/apppasswords) (not your normal password) |
| `EMAIL_TO` | No | Where submissions are delivered (defaults to `EMAIL_USER`) |

Example:

```env
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-gmail-app-password
EMAIL_TO=hello@pinnacleaccountancy.co.uk
```

## Forms (email only)

There is **no database**. Submissions are handled by the backend API and sent by email.

| Form | Endpoint | Behaviour |
|------|----------|-----------|
| Contact form (`/contact`) | `POST /api/submit` | Emails the firm + confirmation to the visitor |
| Free 30-minute consultation (dialog) | `POST /api/submit` | Same, labelled as a consultation booking |

After a successful submit, the UI shows a confirmation message that an email has been sent.

Body shape:

```json
{
  "formType": "contact" | "consultation",
  "fullName": "string",
  "email": "string",
  "phone": "string",
  "enquiryType": "string",
  "message": "string",
  "hearAboutUs": "string (optional, contact form only)"
}
```

## Business details (fictional)

- **Address:** 22 Cannon Street, London, EC4M 5XD  
- **Phone:** 020 7123 4567  
- **Email:** hello@pinnacleaccountancy.co.uk  
- **Hours:** Monday–Friday 9am–5:30pm  
- **Accreditations:** ICAEW Member, AAT Qualified  
- **Founded:** 2008  

## Deploy

Deploy to [Vercel](https://vercel.com) (or any Next.js host). Set the same `EMAIL_USER`, `EMAIL_PASS`, and `EMAIL_TO` environment variables in the hosting dashboard.

Document the live URL in your demo submission once deployed.
