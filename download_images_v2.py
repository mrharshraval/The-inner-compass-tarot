import urllib.request
import os
import time

# Directory setup
IMAGE_DIR = os.path.join("public", "images")
if not os.path.exists(IMAGE_DIR):
    os.makedirs(IMAGE_DIR)

# Professional Mystic/Tarot Keywords mapping to filenames
# Format: "filename.jpg": "search_keywords_for_unsplash"
images_to_download = {
    # Services
    "service-clarity.jpg": "clear quartz crystal purple light high quality",
    "service-deep-dive.jpg": "purple nebula galaxy deep space stars", 
    "service-year-ahead.jpg": "moon phases dark aesthetic mystic",
    
    # Blog
    "blog-rituals.jpg": "tarot cards candles altar witchy aesthetic",
    "blog-crystals.jpg": "amethyst crystal cluster purple macro",
    "blog-cleansing.jpg": "sage smudge stick smoke burning aesthetic",
    
    # Background Element (for floating crystals)
    "crystal-floating.jpg": "black background clear quartz crystal isolated", # Will use screen blend mode
}

print(f"Downloading professional images to {IMAGE_DIR}...")

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}

for filename, keywords in images_to_download.items():
    filepath = os.path.join(IMAGE_DIR, filename)
    # Using source.unsplash.com with specific dimensions for high quality
    # 1600x900 is good for headers/cards
    search_query = keywords.replace(" ", ",")
    url = f"https://source.unsplash.com/1600x900/?{search_query}"
    
    print(f"Downloading {filename} (Query: {keywords})...")
    
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as response:
            with open(filepath, 'wb') as out_file:
                out_file.write(response.read())
        print(f"✓ Saved {filename}")
        time.sleep(1) # Be nice to the API
    except Exception as e:
        print(f"✗ Failed to download {filename}: {e}")

print("Download complete.")
