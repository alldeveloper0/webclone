// Downloads assets for the nexo.com clone (site-key nexo.com-aa72f0e4, page-key root-8a5edab2).
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(process.cwd(), "public/sites/nexo.com-aa72f0e4/root-8a5edab2");
const SHARED = path.resolve(process.cwd(), "public/sites/nexo.com-aa72f0e4/shared");

const FONTS = [
  ["fonts/NexoBold.ttf", "https://nexo.com/_next/static/media/NexoBold-s.p.0jgcj0wv1h0bm.ttf"],
  ["fonts/NexoBoldItalic.ttf", "https://nexo.com/_next/static/media/NexoBoldItalic-s.p.0oixhw83k0j-b.ttf"],
  ["fonts/NexoMedium.ttf", "https://nexo.com/_next/static/media/NexoMedium-s.p.364sn-6pifjz1.ttf"],
  ["fonts/NexoMediumItalic.ttf", "https://nexo.com/_next/static/media/NexoMediumItalic-s.p.3bx39bfex-6mn.ttf"],
  ["fonts/NexoRegular.ttf", "https://nexo.com/_next/static/media/NexoRegular-s.p.448xl97emb38k.ttf"],
  ["fonts/NexoRegularItalic.ttf", "https://nexo.com/_next/static/media/NexoRegularItalic-s.p.2j8fop8wc3s-2.ttf"],
];

const SHARED_ASSETS = [
  ["favicon.ico", "https://nexo.com/favicon.ico"],
  ["icon.svg", "https://nexo.com/icon.svg"],
  ["apple-icon.png", "https://nexo.com/apple-icon.png"],
  ["logos/nexo-logo-small.svg", "https://content.nexo.com/logos/nexo-logo-small.svg"],
  ["currencies/BTC.svg", "https://static.nexo.com/_v2/common/currencies/BTC.svg"],
  ["currencies/ETH.svg", "https://static.nexo.com/_v2/common/currencies/ETH.svg"],
  ["currencies/NEXO.svg", "https://static.nexo.com/_v2/common/currencies/NEXO.svg"],
  ["currencies/USDT.svg", "https://static.nexo.com/_v2/common/currencies/USDT.svg"],
  ["currencies/USDC.svg", "https://static.nexo.com/_v2/common/currencies/USDC.svg"],
  ["currencies/DOT.svg", "https://static.nexo.com/_v2/common/currencies/DOT.svg"],
  ["currencies/XRP.svg", "https://static.nexo.com/_v2/common/currencies/XRP.svg"],
  ["currencies/SOL.svg", "https://static.nexo.com/_v2/common/currencies/SOL.svg"],
  ["currencies/EURC.svg", "https://static.nexo.com/_v2/common/currencies/EURC.svg"],
];

const PAGE_ASSETS = [
  ["images/hero-phone-mockup.jpg", "https://content.nexo.com/media/home-atf_full-mockup-d-us.jpg"],
  ["images/card-interest.jpg", "https://content.nexo.com/media/home-usp_visuals-interest-d-ROW.jpg"],
  ["images/card-exchange.jpg", "https://content.nexo.com/media/home-usp_visuals-exchange-d-ROW.jpg"],
  ["images/card-borrow.jpg", "https://content.nexo.com/media/home-usp_visuals-borrow-d-ROW.jpg"],
  ["images/ai-abstract-row-1.jpg", "https://content.nexo.com/media/home-ai-abstract-row-1.jpg"],
  ["images/apple-pay-mockup.jpg", "https://content.nexo.com/media/apple_pay-banner_visual_contained-mockup-d-row.jpg"],
  ["images/cards-background.jpg", "https://content.nexo.com/media/home-usp_cards-background-d-ROW.jpg"],
  ["images/loyalty-banner-bg.png", "https://content.nexo.com/media/RE-banner_compact-loyalty_program-01.png"],
  ["images/loyalty-token-badge.png", "https://content.nexo.com/media/nexo-token-132x132@2x.png"],
  ["images/testimonials-photo.jpg", "https://content.nexo.com/media/home-testimonials-v02-d-row.jpg"],
  ["images/final-cta-photo.jpg", "https://content.nexo.com/media/global-banner_visual-sign_up-d-us.jpg"],
  ["logos/award-inatba.svg", "https://content.nexo.com/logos/INATBA.svg"],
  ["logos/award-fintech-breakthrough.png", "https://content.nexo.com/logos/fintech-breakthrough-2025.png"],
  ["logos/award-forbes.svg", "https://content.nexo.com/logos/forbes.svg"],
  ["logos/award-stevie.svg", "https://content.nexo.com/logos/stevie_award.svg"],
  ["logos/award-globee.png", "https://content.nexo.com/logos/silver-globee%20(1).png"],
  ["logos/award-digital-banker.png", "https://content.nexo.com/logos/logo-ar-digital-banker-payments.png"],
  ["logos/app-store-badge.svg", "https://content.nexo.com/media/apple-app-store.svg"],
  ["logos/google-play-badge.svg", "https://content.nexo.com/media/google-play-store.svg"],
  ["icons/trust-life-buoy.svg", "https://content.nexo.com/icons/life-buoy-02.svg"],
  ["icons/trust-bank.svg", "https://content.nexo.com/icons/bank.svg"],
  ["icons/trust-shield.svg", "https://content.nexo.com/icons/shield-4.svg"],
];

async function downloadOne(baseDir, [rel, url]) {
  const dest = path.join(baseDir, rel);
  await mkdir(path.dirname(dest), { recursive: true });
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`FAILED ${res.status} ${url}`);
    return;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(dest, buf);
  console.log(`OK ${rel} (${buf.length} bytes)`);
}

async function downloadBatch(baseDir, items, concurrency = 4) {
  for (let i = 0; i < items.length; i += concurrency) {
    const batch = items.slice(i, i + concurrency);
    await Promise.all(batch.map((item) => downloadOne(baseDir, item)));
  }
}

await downloadBatch(SHARED, FONTS);
await downloadBatch(SHARED, SHARED_ASSETS);
await downloadBatch(ROOT, PAGE_ASSETS);

console.log("Done.");
