import urllib.request

keywords = [
    "crystal,purple,light",
    "nebula,purple,space",
    "moon,phases,dark",
    "tarot,candles,altar",
    "amethyst,crystal,cluster",
    "sage,smoke,burning"
]

print("Resolving images...")
for kw in keywords:
    try:
        url = f"https://source.unsplash.com/1600x900/?{kw}"
        req = urllib.request.Request(url, method="HEAD")
        with urllib.request.urlopen(req) as response:
            print(f"Keyword: {kw}")
            print(f"Final URL: {response.url}")
    except Exception as e:
        print(f"Error resolving {kw}: {e}")
