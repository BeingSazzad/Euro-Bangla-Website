"use client"
import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react"

type Category = "all" | "tours" | "events" | "team";

interface GalleryItem {
   id: number;
   src: string;
   category: "tours" | "events" | "team";
   categoryLabel: string;
   title: string;
   subtitle: string;
   location: string;
   year: string;
}

const galleryItems: GalleryItem[] = [
   {
      id: 1,
      src: "/assets/img/gallery/gallery-1.webp",
      category: "tours",
      categoryLabel: "Group Tour",
      title: "Summer Beach Outing & Splash",
      subtitle: "Euro Bangla community travelers taking a refreshing summer sea dip together.",
      location: "Plage de Deauville, France",
      year: "2024",
   },
   {
      id: 2,
      src: "/assets/img/gallery/gallery-2.webp",
      category: "events",
      categoryLabel: "Picnic & Events",
      title: "Annual Picnic Prize Giving Ceremony",
      subtitle: "Honoring picnic competition winners with special gifts and rewards.",
      location: "Deauville Park, France",
      year: "2024",
   },
   {
      id: 3,
      src: "/assets/img/gallery/gallery-3.webp",
      category: "tours",
      categoryLabel: "Group Tour",
      title: "Seaside Travelers in Orange Jerseys",
      subtitle: "Tour group members posing by the beautiful English Channel beach.",
      location: "Normandy Coast, France",
      year: "2024",
   },
   {
      id: 4,
      src: "/assets/img/gallery/gallery-4.webp",
      category: "team",
      categoryLabel: "Team & Office",
      title: "Office Match Cheer & Team Celebration",
      subtitle: "Euro Bangla office members in national colors cheering together during work breaks.",
      location: "Paris Office, France",
      year: "2024",
   },
   {
      id: 5,
      src: "/assets/img/gallery/gallery-5.webp",
      category: "events",
      categoryLabel: "Picnic & Events",
      title: "Annual Community Picnic Gathering",
      subtitle: "Community members, guests, and families uniting under the summer trees.",
      location: "Deauville, France",
      year: "2024",
   },
   {
      id: 6,
      src: "/assets/img/gallery/gallery-6.webp",
      category: "events",
      categoryLabel: "Picnic & Events",
      title: "Outdoor Evening Dinner Gathering",
      subtitle: "Warm dinner conversations and homemade delicacies after a joyful beach day.",
      location: "Normandy, France",
      year: "2024",
   },
   {
      id: 7,
      src: "/assets/img/gallery/gallery-7.webp",
      category: "tours",
      categoryLabel: "Group Tour",
      title: "Seaside Community Group Portrait",
      subtitle: "Smiles, camaraderie, and team bonding on the sunny sands of Deauville.",
      location: "Deauville Beach, France",
      year: "2024",
   },
   {
      id: 8,
      src: "/assets/img/gallery/gallery-8.webp",
      category: "tours",
      categoryLabel: "Group Tour",
      title: "Young Travelers & Families by the Sea",
      subtitle: "Engaging youth and families in exploring France's coastal wonders.",
      location: "Plage de Deauville, France",
      year: "2024",
   },
   {
      id: 9,
      src: "/assets/img/gallery/gallery-9.webp",
      category: "events",
      categoryLabel: "Picnic & Events",
      title: "Picnic Awards & Appreciation Ceremony",
      subtitle: "Distributing official Euro Bangla appreciation gift packages to active participants.",
      location: "Deauville, France",
      year: "2024",
   },
   {
      id: 10,
      src: "/assets/img/gallery/gallery-10.webp",
      category: "tours",
      categoryLabel: "Group Tour",
      title: "Executive Luxury Coach Departure",
      subtitle: "Travelers gathered beside our modern touring bus before heading to Normandy.",
      location: "Paris Departure Point, France",
      year: "2024",
   },
   {
      id: 11,
      src: "/assets/img/gallery/gallery-11.webp",
      category: "events",
      categoryLabel: "Picnic & Events",
      title: "Night Garden Feast & Celebration",
      subtitle: "Sharing delicious dinner in the garden under ambient lights.",
      location: "Normandy Garden Villa, France",
      year: "2024",
   },
   {
      id: 12,
      src: "/assets/img/gallery/gallery-12.webp",
      category: "team",
      categoryLabel: "Team & Office",
      title: "Euro Bangla Travels Service Desk Team",
      subtitle: "Our client consultants, ticketing agents, and visa experts at Paris HQ.",
      location: "Paris Head Office, France",
      year: "2024",
   },
   {
      id: 13,
      src: "/assets/img/gallery/gallery-13.webp",
      category: "events",
      categoryLabel: "Picnic & Events",
      title: "Pique-Nique 2024 Plage de Deauville Banner",
      subtitle: "Official banner group moment commemorating the grand annual tour outing.",
      location: "Plage de Deauville, France",
      year: "2024",
   },
   {
      id: 14,
      src: "/assets/img/gallery/gallery-14.webp",
      category: "tours",
      categoryLabel: "Group Tour",
      title: "Highway Scenic Tour Coach Stop",
      subtitle: "Group photo with our luxury coach during the travel transit pause.",
      location: "Normandy Highway Stop, France",
      year: "2024",
   },
   {
      id: 15,
      src: "/assets/img/gallery/gallery-15.webp",
      category: "events",
      categoryLabel: "Picnic & Events",
      title: "Pique-Nique 2025 Seaside Promenade",
      subtitle: "Euro Bangla Travels & Multiservices community celebration along the Deauville boardwalk.",
      location: "Plage de Deauville, France",
      year: "2025",
   },
   {
      id: 16,
      src: "/assets/img/gallery/gallery-16.webp",
      category: "events",
      categoryLabel: "Picnic & Events",
      title: "Picnic Tournament Winner Award",
      subtitle: "Presenting tournament winner prize to proud participant.",
      location: "Deauville Park, France",
      year: "2024",
   },
   {
      id: 17,
      src: "/assets/img/gallery/gallery-17.webp",
      category: "team",
      categoryLabel: "Team & Office",
      title: "Office Celebration & Pizza Gathering",
      subtitle: "Team bonding and celebrating another successful travel season at our Paris branch.",
      location: "Paris Office, France",
      year: "2024",
   },
];

const categories: { key: Category; label: string }[] = [
   { key: "all", label: "All Moments" },
   { key: "tours", label: "Group Tours" },
   { key: "events", label: "Picnics & Events" },
   { key: "team", label: "Team & Office" },
];

const AboutGallery = () => {
   const [activeCategory, setActiveCategory] = useState<Category>("all");
   const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

   const filteredItems = galleryItems.filter(
      (item) => activeCategory === "all" || item.category === activeCategory
   );

   const openLightbox = (item: GalleryItem) => {
      const idx = filteredItems.findIndex((it) => it.id === item.id);
      setSelectedIndex(idx >= 0 ? idx : 0);
   };

   const closeLightbox = () => {
      setSelectedIndex(null);
   };

   const showPrev = useCallback(() => {
      if (selectedIndex === null) return;
      setSelectedIndex((prev) => (prev! > 0 ? prev! - 1 : filteredItems.length - 1));
   }, [selectedIndex, filteredItems.length]);

   const showNext = useCallback(() => {
      if (selectedIndex === null) return;
      setSelectedIndex((prev) => (prev! < filteredItems.length - 1 ? prev! + 1 : 0));
   }, [selectedIndex, filteredItems.length]);

   useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
         if (selectedIndex === null) return;
         if (e.key === "Escape") closeLightbox();
         if (e.key === "ArrowLeft") showPrev();
         if (e.key === "ArrowRight") showNext();
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
   }, [selectedIndex, showPrev, showNext]);

   const activeItem = selectedIndex !== null ? filteredItems[selectedIndex] : null;

   return (
      <section className="ebt-gallery-section ebt-section" id="gallery">
         <div className="container">
            {/* Section Heading */}
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

                  {/* Filter Tabs */}
                  <div className="ebt-gallery-filters mb-45">
                     {categories.map((cat) => (
                        <button
                           key={cat.key}
                           type="button"
                           className={`ebt-gallery-filter-btn ${
                              activeCategory === cat.key ? "is-active" : ""
                           }`}
                           onClick={() => {
                              setActiveCategory(cat.key);
                              setSelectedIndex(null);
                           }}
                        >
                           {cat.label}
                        </button>
                     ))}
                  </div>
               </div>
            </div>

            {/* Gallery Grid */}
            <div className="row g-4 ebt-gallery-grid">
               {filteredItems.map((item) => (
                  <div key={item.id} className="col-lg-4 col-md-6 col-sm-6">
                     <div
                        className="ebt-gallery-card"
                        onClick={() => openLightbox(item)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                           if (e.key === "Enter" || e.key === " ") {
                              openLightbox(item);
                           }
                        }}
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

         {/* Lightbox / Modal */}
         {activeItem && selectedIndex !== null && (
            <div
               className="ebt-lightbox-backdrop"
               onClick={closeLightbox}
               role="dialog"
               aria-modal="true"
            >
               <div className="ebt-lightbox-container" onClick={(e) => e.stopPropagation()}>
                  {/* Close button */}
                  <button
                     className="ebt-lightbox-close"
                     type="button"
                     onClick={closeLightbox}
                     aria-label="Close image preview"
                  >
                     <X size={22} />
                  </button>

                  {/* Counter Badge */}
                  <div className="ebt-lightbox-counter">
                     {selectedIndex + 1} / {filteredItems.length}
                  </div>

                  {/* Previous Button */}
                  <button
                     className="ebt-lightbox-nav-btn ebt-lightbox-prev"
                     type="button"
                     onClick={showPrev}
                     aria-label="Previous photo"
                  >
                     <ChevronLeft size={24} />
                  </button>

                  {/* Next Button */}
                  <button
                     className="ebt-lightbox-nav-btn ebt-lightbox-next"
                     type="button"
                     onClick={showNext}
                     aria-label="Next photo"
                  >
                     <ChevronRight size={24} />
                  </button>

                  {/* Image Display */}
                  <div className="ebt-lightbox-img-box">
                     <Image
                        src={activeItem.src}
                        alt={activeItem.title}
                        width={1200}
                        height={900}
                        priority
                     />
                  </div>
               </div>
            </div>
         )}
      </section>
   );
};

export default AboutGallery;
