
"use client";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import "./globals.css";

const VIDEOS = [
  {
    id: "reel1",
    title: "Instagram Reel 1",
    brand: "",
    campaign: "",
    platform: "Instagram",
    tags: [],
    date: "2025-01-01",
    cover: "https://via.placeholder.com/600x1067?text=Reel+1",
    mp4: "",
    embed: `<iframe src="https://www.instagram.com/reel/Czm3ShVPzeM/embed" frameborder="0" allowfullscreen></iframe>`,
  },
  {
    id: "reel2",
    title: "Instagram Reel 2",
    brand: "",
    campaign: "",
    platform: "Instagram",
    tags: [],
    date: "2025-01-01",
    cover: "https://via.placeholder.com/600x1067?text=Reel+2",
    mp4: "",
    embed: `<iframe src="https://www.instagram.com/reel/CnaTkFXIa0d/embed" frameborder="0" allowfullscreen></iframe>`,
  },
  {
    id: "reel3",
    title: "Instagram Reel 3",
    brand: "",
    campaign: "",
    platform: "Instagram",
    tags: [],
    date: "2025-01-01",
    cover: "https://via.placeholder.com/600x1067?text=Reel+3",
    mp4: "",
    embed: `<iframe src="https://www.instagram.com/reel/DNEi8q1udA5/embed" frameborder="0" allowfullscreen></iframe>`,
  },
  {
    id: "reel4",
    title: "Instagram Reel 4",
    brand: "",
    campaign: "",
    platform: "Instagram",
    tags: [],
    date: "2025-01-01",
    cover: "https://via.placeholder.com/600x1067?text=Reel+4",
    mp4: "",
    embed: `<iframe src="https://www.instagram.com/reel/DM8RljRveKS/embed" frameborder="0" allowfullscreen></iframe>`,
  },
  {
    id: "reel5",
    title: "Instagram Reel 5",
    brand: "",
    campaign: "",
    platform: "Instagram",
    tags: [],
    date: "2025-01-01",
    cover: "https://via.placeholder.com/600x1067?text=Reel+5",
    mp4: "",
    embed: `<iframe src="https://www.instagram.com/reel/DM0zcf_valI/embed" frameborder="0" allowfullscreen></iframe>`,
  },
  {
    id: "reel6",
    title: "Instagram Reel 6",
    brand: "",
    campaign: "",
    platform: "Instagram",
    tags: [],
    date: "2025-01-01",
    cover: "https://via.placeholder.com/600x1067?text=Reel+6",
    mp4: "",
    embed: `<iframe src="https://www.instagram.com/reel/DMyPl4RP1-K/embed" frameborder="0" allowfullscreen></iframe>`,
  },
  {
    id: "reel7",
    title: "Instagram Reel 7",
    brand: "",
    campaign: "",
    platform: "Instagram",
    tags: [],
    date: "2025-01-01",
    cover: "https://via.placeholder.com/600x1067?text=Reel+7",
    mp4: "",
    embed: `<iframe src="https://www.instagram.com/reel/DKqFDCovA0D/embed" frameborder="0" allowfullscreen></iframe>`,
  },
  {
    id: "reel8",
    title: "Instagram Reel 8",
    brand: "",
    campaign: "",
    platform: "Instagram",
    tags: [],
    date: "2025-01-01",
    cover: "https://via.placeholder.com/600x1067?text=Reel+8",
    mp4: "",
    embed: `<iframe src="https://www.instagram.com/reel/DKPtnpNA5Ef/embed" frameborder="0" allowfullscreen></iframe>`,
  },
  {
    id: "reel9",
    title: "Instagram Reel 9",
    brand: "",
    campaign: "",
    platform: "Instagram",
    tags: [],
    date: "2025-01-01",
    cover: "https://via.placeholder.com/600x1067?text=Reel+9",
    mp4: "",
    embed: `<iframe src="https://www.instagram.com/reel/DHbfEDpvU6C/embed" frameborder="0" allowfullscreen></iframe>`,
  },
  {
    id: "reel10",
    title: "Instagram Reel 10",
    brand: "",
    campaign: "",
    platform: "Instagram",
    tags: [],
    date: "2025-01-01",
    cover: "https://via.placeholder.com/600x1067?text=Reel+10",
    mp4: "",
    embed: `<iframe src="https://www.instagram.com/reel/DDnKJ5XvXAK/embed" frameborder="0" allowfullscreen></iframe>`,
  },
  {
    id: "reel11",
    title: "Instagram Reel 11",
    brand: "",
    campaign: "",
    platform: "Instagram",
    tags: [],
    date: "2025-01-01",
    cover: "https://via.placeholder.com/600x1067?text=Reel+11",
    mp4: "",
    embed: `<iframe src="https://www.instagram.com/reel/C_b5ODMvo99/embed" frameborder="0" allowfullscreen></iframe>`,
  },
  {
    id: "reel12",
    title: "Instagram Reel 12",
    brand: "",
    campaign: "",
    platform: "Instagram",
    tags: [],
    date: "2025-01-01",
    cover: "https://via.placeholder.com/600x1067?text=Reel+12",
    mp4: "",
    embed: `<iframe src="https://www.instagram.com/reel/DHMBzWOPzfJ/embed" frameborder="0" allowfullscreen></iframe>`,
  },
];
    id: "bose-soundlink",
    title: "Bose SoundLink+ – Backyard Vibes",
    brand: "Bose",
    campaign: "Summer Moments",
    platform: "YouTube",
    tags: ["tech","speaker","lifestyle"],
    date: "2025-08-07",
    cover: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1200&auto=format&fit=crop",
    mp4: "",
    embed: "",
  },
];

const PLATFORMS = ["All","Instagram","TikTok","YouTube","Shorts","Reels"];

function isVideoUrl(url){ return /\.mp4($|\?)/i.test(url||""); }
function isIFrame(html){ return typeof html === "string" && html.includes("<iframe"); }

export default function Page(){
  const [query,setQuery] = useState("");
  const [platform,setPlatform] = useState("All");
  const [brand,setBrand] = useState("All brands");
  const [year,setYear] = useState("All years");
  const [sort,setSort] = useState("newest");
  const [open,setOpen] = useState(false);
  const [current,setCurrent] = useState(null);
  const [brandMode,setBrandMode] = useState(true);

  const brands = useMemo(()=>["All brands", ...Array.from(new Set(VIDEOS.map(v=>v.brand).filter(Boolean)) )],[]);
  const years = useMemo(()=>{
    const s = new Set(VIDEOS.map(v=>v.date? new Date(v.date).getFullYear().toString(): null).filter(Boolean));
    return ["All years", ...Array.from(s).sort((a,b)=>Number(b)-Number(a))];
  },[]);

  const filtered = useMemo(()=>{
    let list = [...VIDEOS];
    if (platform!=="All") list = list.filter(v=>v.platform===platform);
    if (brand!=="All brands") list = list.filter(v=>v.brand===brand);
    if (year!=="All years") list = list.filter(v=>v.date && new Date(v.date).getFullYear().toString()===year);
    if (query.trim()){
      const q = query.toLowerCase();
      list = list.filter(v=>[v.title,v.brand,v.campaign,v.platform,...(v.tags||[])].join(" ").toLowerCase().includes(q));
    }
    list.sort((a,b)=>{
      if (sort==="newest") return new Date(b.date||0)-new Date(a.date||0);
      if (sort==="brand") return (a.brand||"").localeCompare(b.brand||"");
      return (a.title||"").localeCompare(b.title||"");
    });
    return list;
  },[query,platform,brand,year,sort]);

  function openVideo(v){ setCurrent(v); setOpen(true); }
  function copyLink(v){
    const url = window.location.href.split("#")[0] + "#" + v.id;
    navigator.clipboard.writeText(url);
    alert("Link copied!");
  }

  useEffect(()=>{
    const hash = typeof window !== "undefined" ? window.location.hash.replace("#","") : "";
    if (!hash) return;
    const v = VIDEOS.find(x=>x.id===hash);
    if (v) openVideo(v);
  },[]);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-neutral-900 text-white grid place-items-center font-semibold">MM</div>
            <div>
              <h1 className="text-xl font-semibold leading-none">Mike Mitchell — UGC Reel Wall</h1>
              <p className="text-xs text-neutral-500 mt-1">Short-form portfolio • vertical video showcase</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <a className="btn" href="#contact">Contact</a>
            <a className="btn btn-primary" href="#" onClick={(e)=>{e.preventDefault(); alert("Swap with your Media Kit URL.");}}>Media Kit</a>
          </div>
        </div>
      </header>

      {/* Controls */}
      <section className="border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 py-4 grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
          <div className="md:col-span-4">
            <input className="w-full px-3 py-2 rounded-xl border border-neutral-200" placeholder="Search brand, campaign, tags…" value={query} onChange={(e)=>setQuery(e.target.value)} />
          </div>
          <div className="md:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-2">
            <select className="px-3 py-2 rounded-xl border border-neutral-200" value={platform} onChange={(e)=>setPlatform(e.target.value)}>
              {PLATFORMS.map(p=><option key={p} value={p}>{p}</option>)}
            </select>
            <select className="px-3 py-2 rounded-xl border border-neutral-200" value={brand} onChange={(e)=>setBrand(e.target.value)}>
              {brands.map(b=><option key={b} value={b}>{b}</option>)}
            </select>
            <select className="px-3 py-2 rounded-xl border border-neutral-200" value={year} onChange={(e)=>setYear(e.target.value)}>
              {years.map(y=><option key={y} value={y}>{y}</option>)}
            </select>
            <select className="px-3 py-2 rounded-xl border border-neutral-200" value={sort} onChange={(e)=>setSort(e.target.value)}>
              <option value="newest">Newest</option>
              <option value="title">Title A–Z</option>
              <option value="brand">Brand A–Z</option>
            </select>
          </div>
          <div className="md:col-span-2 flex items-center justify-end gap-3">
            <label className="text-xs text-neutral-600 flex items-center gap-2">
              <input type="checkbox" checked={brandMode} onChange={(e)=>setBrandMode(e.target.checked)} />
              Brand Mode
            </label>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <main className={`max-w-6xl mx-auto px-4 ${brandMode ? 'mt-2' : 'mt-6'}`}>
        {filtered.length===0 ? (
          <div className="py-24 text-center text-neutral-500">No videos match your filters.</div>
        ) : (
          <div className="grid-wall py-4">
            {filtered.map(v => (
              <div key={v.id} id={v.id} className="card">
                <button className="aspect-9-16 w-full" onClick={()=>openVideo(v)} aria-label={`Open ${v.title}`}>
                  {/* Cover */}
                  <Image src={v.cover} alt={v.title} fill className="object-cover absolute-fill" />
                  <div className="absolute-fill bg-gradient-to-b from-black/10 via-black/0 to-black/40" />
                  <div className="absolute left-2 top-2 flex gap-1.5">
                    <span className="badge bg-white">{v.platform}</span>
                    <span className="badge bg-black text-white border-black">{v.brand}</span>
                  </div>
                  <div className="absolute left-2 bottom-2 right-2">
                    <p className="text-white text-sm font-medium drop-shadow-sm line-clamp-2">{v.title}</p>
                  </div>
                </button>
                <div className="p-3 flex items-center justify-between">
                  <div className="flex flex-wrap items-center gap-2">
                    {(v.tags||[]).slice(0,3).map(t=>(<span key={t} className="badge text-xs">{t}</span>))}
                  </div>
                  <a href={"#"+v.id} className="text-xs hover:underline" onClick={(e)=>{e.preventDefault(); copyLink(v);}}>Share</a>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Contact */}
      <section id="contact" className="border-t border-neutral-200 mt-6">
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-2xl font-semibold">Booking & Partnerships</h2>
            <p className="text-neutral-600 mt-2">Open to paid UGC, brand integrations, and long-term partnerships. Get the deck or email me for rates & availability.</p>
            <div className="flex flex-wrap gap-2 mt-4">
              <a className="btn btn-primary" href="#" onClick={(e)=>{e.preventDefault(); alert("Replace with your Media Kit URL.");}}>Download Media Kit</a>
              <a className="btn" href="mailto:mikethecompass@gmail.com">mikethecompass@gmail.com</a>
              <a className="btn" href="tel:+10000000000">+1 (000) 000‑0000</a>
            </div>
          </div>
          <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-4">
            <h3 className="font-medium">How this works</h3>
            <ol className="mt-3 text-sm text-neutral-700 list-decimal list-inside space-y-1.5">
              <li>Swap in real covers (frame grabs) and .mp4/embed links in the data array.</li>
              <li>Deploy with Vercel. Link it in your bio and media emails.</li>
              <li>Use filters to let brands browse by platform, brand, or campaign.</li>
              <li>Click any tile to watch in a 9:16 modal and copy a sharable deep-link.</li>
            </ol>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 pb-10 text-xs text-neutral-500">
          © {new Date().getFullYear()} Mike Mitchell. All rights reserved.
        </div>
      </section>

      {/* Modal */}
      {open && current && (
        <div className="modal" onClick={()=>setOpen(false)}>
          <div className="modal-body" onClick={(e)=>e.stopPropagation()}>
            {isVideoUrl(current.mp4) ? (
              <video src={current.mp4} poster={current.cover} className="w-full h-full" controls playsInline />
            ) : isIFrame(current.embed) ? (
              <div className="aspect-9-16 w-full">
                <div className="absolute-fill" dangerouslySetInnerHTML={{ __html: current.embed }} />
              </div>
            ) : (
              <div className="aspect-9-16 w-full bg-neutral-900 grid place-items-center text-white">
                <p className="text-sm opacity-80 px-6 text-center">Add an .mp4 URL or an embed iframe for this item.</p>
              </div>
            )}
            <div className="p-4 bg-neutral-900 text-white">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-base font-semibold leading-tight">{current.title}</h3>
                  <p className="text-xs opacity-70 mt-1">{current.brand} • {current.campaign} • {current.platform}</p>
                </div>
                <a href={"#"+current.id} className="text-xs px-2 py-1 rounded-full bg-white/10 hover:bg-white/15" onClick={(e)=>{e.preventDefault(); copyLink(current);}}>Copy link</a>
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {(current.tags||[]).map(t=>(<span key={t} className="badge bg-white/10 text-white border-0">{t}</span>))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
