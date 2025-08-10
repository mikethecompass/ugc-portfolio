# MikeTheCompass — UGC Reel Wall

A lightweight Next.js + Tailwind portfolio to showcase vertical UGC with search, filters, and a 9:16 modal player.

## Quick Start

1) Install Node.js (LTS). Then in this folder:
```bash
npm install
npm run dev
```
Open http://localhost:3000

2) Edit `app/page.jsx`:
- Replace items in `VIDEOS` with your real content (.mp4 URLs or iframe `embed` code).
- Update your email/phone and media kit link.

3) Deploy to Vercel (recommended):
- Push this folder to a new GitHub repo.
- Go to https://vercel.com → New Project → Import your repo → Deploy.
- Set your custom domain (mikethecompass.com) in Vercel → Project Settings → Domains.

## Custom Domain (mikethecompass.com)
- In your domain registrar (where you bought the domain), point the domain to Vercel:
  - Add a CNAME for `www` → `cname.vercel-dns.com`
  - Add an A or CNAME for the root `@` following Vercel's DNS instructions (Vercel provides step-by-step).
- In Vercel, add `mikethecompass.com` and `www.mikethecompass.com` under Domains.
- Set one as the primary. Enable “Redirect www to root” or vice versa.

## Notes
- Images in the sample use Unsplash URLs; swap for your video frame grabs.
- If you're embedding TikTok/IG/YouTube, paste the full `<iframe ...></iframe>` string into `embed`.

Enjoy!
