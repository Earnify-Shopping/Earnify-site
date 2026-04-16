export default function App() {
  const products = [
    {
      id: 1,
      category: "Audio",
      title: "JBL Tune 520BT Wireless On-Ear Headphones",
      price: "$39",
      rating: "4.6/5",
      reviews: "20,000+ reviews",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
      badge: "Best Seller",
      description:
        "Affordable wireless headphones with strong everyday sound, long battery life, and a clean modern look.",
      features: ["Long battery life", "Wireless", "Great value"],
      link: "https://amzn.to/your-jbl-link",
    },
    {
      id: 2,
      category: "Room Setup",
      title: "RGB LED Strip Lights with Remote",
      price: "$19",
      rating: "4.5/5",
      reviews: "12,000+ reviews",
      image:
        "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=900&q=80",
      badge: "Trending",
      description:
        "Color-changing LED strip lights that instantly upgrade bedrooms, gaming setups, and desk spaces.",
      features: ["Remote control", "Multiple colors", "Easy setup"],
      link: "https://amzn.to/your-led-link",
    },
    {
      id: 3,
      category: "Desk Setup",
      title: "Adjustable Foldable Phone Stand",
      price: "$14",
      rating: "4.7/5",
      reviews: "8,000+ reviews",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",
      badge: "Must-Have",
      description:
        "A simple adjustable stand that keeps your phone upright for videos, calls, studying, and daily use.",
      features: ["Foldable", "Adjustable", "Compact"],
      link: "https://amzn.to/your-stand-link",
    },
    {
      id: 4,
      category: "Tech Accessory",
      title: "Portable Bluetooth Speaker",
      price: "$29",
      rating: "4.4/5",
      reviews: "9,500+ reviews",
      image:
        "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=900&q=80",
      badge: "Hot Pick",
      description:
        "Compact speaker with solid everyday sound for your room, travel, outdoor use, and casual listening.",
      features: ["Portable", "Bluetooth", "Travel-friendly"],
      link: "https://amzn.to/your-speaker-link",
    },
    {
      id: 5,
      category: "Workspace",
      title: "Wireless Silent Mouse",
      price: "$17",
      rating: "4.5/5",
      reviews: "15,000+ reviews",
      image:
        "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=80",
      badge: "Everyday Pick",
      description:
        "A comfortable affordable wireless mouse for school, office work, browsing, and daily productivity.",
      features: ["Wireless", "Comfort grip", "Affordable"],
      link: "https://amzn.to/your-mouse-link",
    },
    {
      id: 6,
      category: "Charging",
      title: "Fast Charging Cable Multi-Pack",
      price: "$12",
      rating: "4.6/5",
      reviews: "18,000+ reviews",
      image:
        "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=900&q=80",
      badge: "Budget Pick",
      description:
        "A value-packed set of fast charging cables for home, work, travel, and backup charging everywhere.",
      features: ["Fast charge", "Multi-pack", "Great value"],
      link: "https://amzn.to/your-cable-link",
    },
  ];

  const categories = ["All", "Audio", "Room Setup", "Desk Setup", "Tech Accessory", "Workspace", "Charging"];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <div className="text-2xl font-black tracking-tight">Dealora</div>
            <div className="text-xs text-slate-500">Smart picks. Better deals. Simple choices.</div>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#products" className="text-sm text-slate-600 hover:text-slate-950">Products</a>
            <a href="#how-it-works" className="text-sm text-slate-600 hover:text-slate-950">How It Works</a>
            <a href="#faq" className="text-sm text-slate-600 hover:text-slate-950">FAQ</a>
          </nav>
          <a href="#products" className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5">
            Shop Top Picks
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-100">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
            <div className="flex flex-col justify-center">
              <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
                🔥 Curated Amazon finds for everyday buyers
              </div>
              <h1 className="max-w-2xl text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-6xl">
                Discover the best budget gadgets in one place.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Dealora helps people find affordable products worth buying. Browse trending gadgets, compare simple benefits, and click through to Amazon when you are ready.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#products" className="rounded-2xl bg-slate-900 px-6 py-4 text-center text-sm font-semibold text-white shadow-lg shadow-slate-300 transition hover:-translate-y-0.5">
                  Browse Products
                </a>
                <a href="#how-it-works" className="rounded-2xl border border-slate-300 bg-white px-6 py-4 text-center text-sm font-semibold text-slate-800 transition hover:bg-slate-50">
                  How It Works
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-500">
                <div>✔ Budget-friendly</div>
                <div>✔ Easy comparisons</div>
                <div>✔ Fast Amazon checkout</div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {products.slice(0, 4).map((product) => (
                <div key={product.id} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
                  <img src={product.image} alt={product.title} className="h-48 w-full object-cover" />
                  <div className="p-5">
                    <div className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                      {product.badge}
                    </div>
                    <h3 className="mt-3 text-lg font-bold text-slate-950">{product.title}</h3>
                    <p className="mt-2 text-sm text-slate-500">{product.price} • {product.reviews}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="products" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Top picks</div>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
                Products customers can browse in one clean website.
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                Add your best Amazon finds here. Each card shows the product, quick highlights, and one clear button to check it on Amazon.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <div key={product.id} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="relative">
                  <img src={product.image} alt={product.title} className="h-60 w-full object-cover" />
                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-800 shadow-sm">
                    {product.badge}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{product.category}</div>
                  <h3 className="mt-2 text-xl font-bold text-slate-950">{product.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{product.description}</p>

                  <div className="mt-5 flex items-center justify-between text-sm">
                    <div className="font-semibold text-slate-950">{product.price}</div>
                    <div className="text-slate-500">{product.rating}</div>
                  </div>
                  <div className="mt-1 text-sm text-slate-500">{product.reviews}</div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {product.features.map((feature) => (
                      <span key={feature} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <a
                    href={product.link}
                    className="mt-6 block rounded-2xl bg-slate-900 px-5 py-4 text-center text-sm font-semibold text-white transition hover:-translate-y-0.5"
                  >
                    Check on Amazon
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="how-it-works" className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-2xl">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">How it works</div>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
                Simple for visitors. Easy for you to manage.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-[2rem] bg-white p-8 shadow-sm">
                <div className="text-3xl font-black">1</div>
                <h3 className="mt-4 text-xl font-bold text-slate-950">Show the product</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Add a clean image, quick price, review count, and short benefits so people understand the item fast.
                </p>
              </div>
              <div className="rounded-[2rem] bg-white p-8 shadow-sm">
                <div className="text-3xl font-black">2</div>
                <h3 className="mt-4 text-xl font-bold text-slate-950">Build interest</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Use TikTok or social content to send people to your site, where they can see several products at once.
                </p>
              </div>
              <div className="rounded-[2rem] bg-white p-8 shadow-sm">
                <div className="text-3xl font-black">3</div>
                <h3 className="mt-4 text-xl font-bold text-slate-950">Send them to Amazon</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Each button leads to your Amazon affiliate link so customers can buy there while you earn commission.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <div className="text-center">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">FAQ</div>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
              Questions visitors may ask.
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-950">Do I buy products on Dealora?</h3>
              <p className="mt-3 leading-7 text-slate-600">
                No. Dealora helps you discover good products, then sends you to Amazon to complete the purchase.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-950">Can more products be added?</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Yes. This page is built so you can duplicate product cards and keep expanding your store over time.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-950">Where do I add my affiliate links?</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Replace each placeholder link like amzn.to/your-link with your real Amazon Associates link for that product.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] bg-gradient-to-r from-slate-900 to-slate-700 px-8 py-12 text-white shadow-2xl">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Ready to grow?</div>
                <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
                  Turn one TikTok account into a product discovery website.
                </h2>
                <p className="mt-4 text-lg leading-8 text-slate-200">
                  Add your best finds, post short videos, and send people here so they can browse everything in one place.
                </p>
              </div>
              <a href="#products" className="rounded-2xl bg-white px-6 py-4 text-center text-sm font-bold text-slate-950 transition hover:-translate-y-0.5">
                View Products
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>© 2026 Dealora. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-slate-900">TikTok</a>
            <a href="#" className="hover:text-slate-900">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
