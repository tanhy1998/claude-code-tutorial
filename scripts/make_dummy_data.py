"""Generate a small, deterministic retail star schema for the PBIP lab.

Usage: python -I scripts/make_dummy_data.py lab/data
"""
import csv
import random
import sys
from datetime import date, timedelta
from pathlib import Path

out = Path(sys.argv[1] if len(sys.argv) > 1 else "lab/data")
out.mkdir(parents=True, exist_ok=True)
rng = random.Random(42)

categories = {
    "Bikes": ["Road Bike", "Mountain Bike", "Touring Bike", "Kids Bike", "E-Bike"],
    "Components": ["Chain", "Brake Set", "Pedals", "Saddle", "Wheel Set", "Handlebar"],
    "Clothing": ["Jersey", "Gloves", "Cap", "Socks", "Shorts", "Jacket"],
    "Accessories": ["Helmet", "Lock", "Bottle", "Pump", "Light Set", "Bike Rack"],
}
price_band = {"Bikes": (450, 3200), "Components": (20, 380), "Clothing": (9, 140), "Accessories": (8, 220)}

products = []
pid = 1
for cat, names in categories.items():
    for name in names:
        lo, hi = price_band[cat]
        base = rng.uniform(lo, hi)
        for variant in ("Standard", "Pro"):
            price = round(base * (1.35 if variant == "Pro" else 1), 2)
            cost = round(price * rng.uniform(0.45, 0.7), 2)
            products.append([pid, f"{name} {variant}", cat, variant, price, cost])
            pid += 1

regions = {"North": ["Penang", "Kedah"], "Central": ["Kuala Lumpur", "Selangor"],
           "South": ["Johor", "Melaka"], "East": ["Sabah", "Sarawak"]}
stores = []
sid = 1
for region, states in regions.items():
    for state in states:
        stores.append([sid, f"{state} Store", state, region, rng.choice(["Mall", "Street", "Outlet"])])
        sid += 1

segments = ["Consumer", "Corporate", "Club"]
customers = [[cid, f"Customer {cid:04d}", rng.choice(segments), rng.choice(stores)[3],
              date(2023, 1, 1) + timedelta(days=rng.randint(0, 900))] for cid in range(1, 601)]

sales = []
start, days = date(2024, 1, 1), 731
for oid in range(1, 20001):
    d = start + timedelta(days=rng.randint(0, days - 1))
    p = rng.choice(products)
    qty = rng.choices([1, 2, 3, 4, 5], weights=[50, 25, 12, 8, 5])[0]
    disc = rng.choices([0, 0.05, 0.1, 0.2], weights=[70, 15, 10, 5])[0]
    sales.append([oid, d.isoformat(), rng.randint(1, 600), p[0], rng.randint(1, len(stores)), qty, p[4], disc])

def write(name, header, rows):
    with open(out / name, "w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        w.writerow(header)
        w.writerows(rows)

write("Products.csv", ["ProductID", "ProductName", "Category", "Tier", "ListPrice", "UnitCost"], products)
write("Stores.csv", ["StoreID", "StoreName", "State", "Region", "StoreType"], stores)
write("Customers.csv", ["CustomerID", "CustomerName", "Segment", "HomeRegion", "FirstPurchaseDate"],
      [[c[0], c[1], c[2], c[3], c[4].isoformat()] for c in customers])
write("Sales.csv", ["OrderID", "OrderDate", "CustomerID", "ProductID", "StoreID", "Quantity", "UnitPrice", "DiscountPct"], sales)
print(f"Wrote {len(products)} products, {len(stores)} stores, {len(customers)} customers, {len(sales)} sales rows to {out}")
