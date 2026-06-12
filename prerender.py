import os
import re

DIST_DIR = 'dist'
TEMPLATE_PATH = os.path.join(DIST_DIR, 'index.html')

if not os.path.exists(TEMPLATE_PATH):
    print(f"Error: build template not found at {TEMPLATE_PATH}. Please run npm run build first.")
    exit(1)

with open(TEMPLATE_PATH, 'r', encoding='utf-8') as f:
    template = f.read()

# 1. Parse Locations from site.ts
site_content = open("src/lib/site.ts", "r", encoding="utf-8").read()
locations = []
seo_locations_match = re.search(r'export const SEO_LOCATIONS = \[\s*([\s\S]*?)\s*\] as const;', site_content)
if seo_locations_match:
    seo_locations_block = seo_locations_match.group(1)
    for match in re.finditer(r'\{\s*id:\s*["\']([^"\']+)["\'],\s*name:\s*["\']([^"\']+)["\']\s*\}', seo_locations_block):
        locations.append({
            'id': match.group(1),
            'name': match.group(2)
        })

print(f"Parsed {len(locations)} locations from site.ts.")

# 2. Parse Services from services.ts
services_content = open("src/lib/services.ts", "r", encoding="utf-8").read()
services = []
for match in re.finditer(r'id:\s*["\']([^"\']+)["\']', services_content):
    service_id = match.group(1)
    start_pos = match.end()
    
    meta_title_match = re.search(r'metaTitle:\s*["\']([^"\']+)["\']', services_content[start_pos:start_pos+1000])
    meta_desc_match = re.search(r'metaDescription:\s*["\']([\s\S]*?)["\']', services_content[start_pos:start_pos+1000])
    keywords_match = re.search(r'keywords:\s*["\']([\s\S]*?)["\']', services_content[start_pos:start_pos+1000])
    
    meta_title = meta_title_match.group(1) if meta_title_match else ""
    meta_desc = meta_desc_match.group(1).strip().replace('\n', ' ').replace('      ', ' ') if meta_desc_match else ""
    keywords = keywords_match.group(1).strip().replace('\n', ' ').replace('      ', ' ') if keywords_match else ""
    
    # Simple deduplication just in case
    if not any(s['id'] == service_id for s in services):
        services.append({
            'id': service_id,
            'metaTitle': meta_title,
            'metaDescription': meta_desc,
            'keywords': keywords
        })

print(f"Parsed {len(services)} services from services.ts.")

# 3. Parse Products from catalog.ts
catalog_content = open("src/lib/catalog.ts", "r", encoding="utf-8").read()
products = []
for match in re.finditer(r'slug:\s*["\']([^"\']+)["\']', catalog_content):
    slug = match.group(1)
    start_pos = match.end()
    
    meta_title_match = re.search(r'metaTitle:\s*["\']([^"\']+)["\']', catalog_content[start_pos:start_pos+1000])
    meta_desc_match = re.search(r'metaDescription:\s*["\']([\s\S]*?)["\']', catalog_content[start_pos:start_pos+1000])
    keywords_match = re.search(r'keywords:\s*["\']([\s\S]*?)["\']', catalog_content[start_pos:start_pos+1000])
    
    meta_title = meta_title_match.group(1) if meta_title_match else ""
    meta_desc = meta_desc_match.group(1).strip().replace('\n', ' ').replace('      ', ' ') if meta_desc_match else ""
    keywords = keywords_match.group(1).strip().replace('\n', ' ').replace('      ', ' ') if keywords_match else ""
    
    if not any(p['slug'] == slug for p in products):
        products.append({
            'slug': slug,
            'metaTitle': meta_title,
            'metaDescription': meta_desc,
            'keywords': keywords
        })

print(f"Parsed {len(products)} products from catalog.ts.")

def ensure_dir(dir_path):
    if not os.path.exists(dir_path):
        os.makedirs(dir_path, exist_ok=True)

def generate_static_page(route_path, title, description, keywords, canonical_url):
    target_dir = os.path.join(DIST_DIR, route_path)
    ensure_dir(target_dir)

    html = template

    # Replace Title
    html = re.sub(r'<title>.*?</title>', f'<title>{title}</title>', html)

    # Replace Description
    html = re.sub(r'<meta name="description" content=".*?"\s*/?>', f'<meta name="description" content="{description}" />', html)

    # Replace og:description
    html = re.sub(r'<meta property="og:description" content=".*?"\s*/?>', f'<meta property="og:description" content="{description}" />', html)

    # Replace og:title
    html = re.sub(r'<meta property="og:title" content=".*?"\s*/?>', f'<meta property="og:title" content="{title}" />', html)

    # Replace Keywords
    html = re.sub(r'<meta name="keywords" content=".*?"\s*/?>', f'<meta name="keywords" content="{keywords}" />', html)

    # Replace Canonical Link
    html = re.sub(r'<link rel="canonical" href=".*?"\s*/?>', f'<link rel="canonical" href="{canonical_url}" />', html)

    output_path = os.path.join(target_dir, 'index.html')
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(html)

print("Pre-rendering pages...")

# Pre-render Locations
for loc in locations:
    route_path = f"locations/{loc['id']}"
    title = f"best Hydraulics in {loc['name']} | RVS Hydraulics"
    description = f"Looking for the best hydraulics in {loc['name']}? RVS Hydraulics specializes in high-pressure cylinder repair, pump diagnostics, and custom power packs for {loc['name']} businesses."
    keywords = f"best hydraulics in {loc['name']}, nearest hydraulic repair {loc['name']}, hydraulic cylinder repair near me {loc['name']}, hydraulic pump repair near me {loc['name']}, hydraulic repair {loc['name']}, hydraulic hose near me {loc['name']}, local hydraulic service {loc['name']}, Bengaluru hydraulic engineers"
    canonical_url = f"https://rvshydraulics.com/locations/{loc['id']}"
    generate_static_page(route_path, title, description, keywords, canonical_url)

# Pre-render Services
for s in services:
    route_path = f"services/{s['id']}"
    canonical_url = f"https://rvshydraulics.com/services/{s['id']}"
    generate_static_page(route_path, s['metaTitle'], s['metaDescription'], s['keywords'], canonical_url)

# Pre-render Products
for p in products:
    route_path = f"products/{p['slug']}"
    canonical_url = f"https://rvshydraulics.com/products/{p['slug']}"
    generate_static_page(route_path, p['metaTitle'], p['metaDescription'], p['keywords'], canonical_url)

print("Pages pre-rendered successfully.")

# 4. Generate sitemap.xml dynamically to guarantee 100% correctness
sitemap_urls = [
    ("https://rvshydraulics.com/", "1.0"),
    ("https://rvshydraulics.com/about", "0.8"),
    ("https://rvshydraulics.com/services", "0.8"),
    ("https://rvshydraulics.com/products", "0.8"),
    ("https://rvshydraulics.com/contact", "0.8"),
    ("https://rvshydraulics.com/gallery", "0.8")
]

for s in services:
    sitemap_urls.append((f"https://rvshydraulics.com/services/{s['id']}", "0.8"))

for p in products:
    sitemap_urls.append((f"https://rvshydraulics.com/products/{p['slug']}", "0.8"))

for loc in locations:
    sitemap_urls.append((f"https://rvshydraulics.com/locations/{loc['id']}", "0.8"))

sitemap_content = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
for url, priority in sitemap_urls:
    sitemap_content += f'  <url>\n    <loc>{url}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>{priority}</priority>\n  </url>\n'
sitemap_content += '</urlset>\n'

with open('public/sitemap.xml', 'w', encoding='utf-8') as f:
    f.write(sitemap_content)
with open('dist/sitemap.xml', 'w', encoding='utf-8') as f:
    f.write(sitemap_content)

print(f"Generated sitemap.xml with {len(sitemap_urls)} URLs.")
