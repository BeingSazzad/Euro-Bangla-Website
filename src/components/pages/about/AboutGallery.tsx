"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react"

type Category = "all" | "tours" | "events" | "team";

const galleryItems = [
   { id: 1, src: "/assets/img/gallery/gallery-1.webp", cat: "tours" },
   { id: 2, src: "/assets/img/gallery/gallery-2.webp", cat: "events" },
   { id: 3, src: "/assets/img/gallery/gallery-3.webp", cat: "tours" },
   { id: 4, src: "/assets/img/gallery/gallery-4.webp", cat: "team" },
   { id: 5, src: "/assets/img/gallery/gallery-5.webp", cat: "events" },
   { id: 6, src: "/assets/img/gallery/gallery-6.webp", cat: "events" },
   { id: 7, src: "/assets/img/gallery/gallery-7.webp", cat: "tours" },
   { id: 8, src: "/assets/img/gallery/gallery-8.webp", cat: "tours" },
   { id: 9, src: "/assets/img/gallery/gallery-9.webp", cat: "events" },
   { id: 10, src: "/assets/img/gallery/gallery-10.webp", cat: "tours" },
   { id: 11, src: "/assets/img/gallery/gallery-11.webp", cat: "events" },
   { id: 12, src: "/assets/img/gallery/gallery-12.webp", cat: "team" },
   { id: 13, src: "/assets/img/gallery/gallery-13.webp", cat: "events" },
   { id: 14, src: "/assets/img/gallery/gallery-14.webp", cat: "tours" },
   { id: 15, src: "/assets/img/gallery/gallery-15.webp", cat: "events" },
   { id: 16, src: "/assets/img/gallery/gallery-16.webp", cat: "events" },
   { id: 17, src: "/assets/img/gallery/gallery-17.webp", cat: "team" },
] as const;

const categories = [
   { key: "all", label: "All Moments" },
   { key: "tours", label: "Group Tours" },
   { key: "events", label: "Picnics & Events" },
   { key: "team", label: "Team & Office" },
] as const;

const AboutGallery = () => {
   const [activeCat, setActiveCat] = useState<Category>("all");
   const [index, setIndex] = useState<number | null>(null);

   const items = activeCat === "all" ? galleryItems : galleryItems.filter((i) => i.cat === activeCat);

   useEffect(() => {
      if (index === null) return;
      const onKey = (e: KeyboardEvent) => {
         if (e.key === "Escape") setIndex(null);
         if (e.key === "ArrowLeft") setIndex((i) => (i! > 0 ? i! - 1 : items.length - 1));
         if (e.key === "ArrowRight") setIndex((i) => (i! < items.length - 1 ? i! + 1 : 0));
      };
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
   }, [index, items.length]);

   const activeSrc = index !== null ? items[index]?.src : null;

   return (
      <section className="ebt-gallery-section ebt-section" id="gallery">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-8 col-lg-9 text-center">
                  <div className="ebt-gallery-head mb-40">
                     <h2 className="ebt-gallery-title">
                        Moments That Tell <span>Our Story</span>
                     </h2>
                     <p className="ebt-gallery-lead">
                        From European seaside tours and grand annual picnics to Paris office moments — real glimpses of our travelers, community, and team.
                     </p>
                  </div>

                  <div className="ebt-gallery-filters mb-45">
                     {categories.map((c) => (
                        <button
                           key={c.key}
                           type="button"
                           className={`ebt-gallery-filter-btn ${activeCat === c.key ? "is-active" : ""}`}
                           onClick={() => {
                              setActiveCat(c.key);
                              setIndex(null);
                           }}
                        >
                           {c.label}
                        </button>
                     ))}
                  </div>
               </div>
            </div>

            <div className="row g-4 ebt-gallery-grid">
               {items.map((item, i) => (
                  <div key={item.id} className="col-lg-4 col-md-6 col-sm-6">
                     <div
                        className="ebt-gallery-card"
                        onClick={() => setIndex(i)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setIndex(i)}
                     >
                        <div className="ebt-gallery-media">
                           <Image
                              src={item.src}
                              alt="Euro Bangla Travels Photo"
                              width={600}
                              height={450}
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              className="ebt-gallery-img"
                           />
                           <div className="ebt-gallery-hover-icon">
                              <Maximize2 size={22} />
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>

         {activeSrc && index !== null && (
            <div className="ebt-lightbox-backdrop" onClick={() => setIndex(null)} role="dialog" aria-modal="true">
               <div className="ebt-lightbox-container" onClick={(e) => e.stopPropagation()}>
                  <button className="ebt-lightbox-close" type="button" onClick={() => setIndex(null)} aria-label="Close">
                     <X size={22} />
                  </button>

                  <div className="ebt-lightbox-counter">
                     {index + 1} / {items.length}
                  </div>

                  <button
                     className="ebt-lightbox-nav-btn ebt-lightbox-prev"
                     type="button"
                     onClick={() => setIndex((i) => (i! > 0 ? i! - 1 : items.length - 1))}
                     aria-label="Previous"
                  >
                     <ChevronLeft size={24} />
                  </button>

                  <button
                     className="ebt-lightbox-nav-btn ebt-lightbox-next"
                     type="button"
                     onClick={() => setIndex((i) => (i! < items.length - 1 ? i! + 1 : 0))}
                     aria-label="Next"
                  >
                     <ChevronRight size={24} />
                  </button>

                  <div className="ebt-lightbox-img-box">
                     <Image src={activeSrc} alt="Euro Bangla Travels Photo" width={1200} height={900} priority />
                  </div>
               </div>
            </div>
         )}
      </section>
   );
};

export default AboutGallery;
