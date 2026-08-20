"use client"
import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { useT } from "@/i18n/LanguageProvider"

type Category = "all" | "hajj" | "tours" | "visa" | "team";

interface GalleryItem {
   id: number;
   src: string;
   category: Category;
   title: string;
   subtitle: string;
   location: string;
   year: string;
}

const galleryItems: GalleryItem[] = [
   {
      id: 1,
      src: "/assets/img/chose/chose-2/thumb-2.jpg",
      category: "hajj",
      title: "Makkah Holy Pilgrimage",
      subtitle: "Dedicated VIP Umrah & Hajj group guidance",
      location: "Makkah, Saudi Arabia",
      year: "2024",
   },
   {
      id: 2,
      src: "/assets/img/destination/des.jpg",
      category: "tours",
      title: "Santorini Island Getaway",
      subtitle: "Exclusive Greek Mediterranean holiday tour",
      location: "Santorini, Greece",
      year: "2023",
   },
   {
      id: 3,
      src: "/assets/img/destination/des-4.jpg",
      category: "hajj",
      title: "Madinah Al Munawwarah",
      subtitle: "Comfortable hotel stay near Prophet's Mosque",
      location: "Madinah, Saudi Arabia",
      year: "2024",
   },
   {
      id: 4,
      src: "/assets/img/destination/des-2.jpg",
      category: "tours",
      title: "Swiss Alps Scenic Tour",
      subtitle: "Memorable group vacation across Switzerland",
      location: "Interlaken, Switzerland",
      year: "2023",
   },
   {
      id: 5,
      src: "/assets/img/about/details/thumb-3.jpg",
      category: "visa",
      title: "National Travel Expo",
      subtitle: "Euro Bangla Travels pavilion and client desk",
      location: "BICC, Dhaka",
      year: "2022",
   },
   {
      id: 6,
      src: "/assets/img/about/about-3.jpg",
      category: "team",
      title: "Dedicated Client Service Team",
      subtitle: "Visa processing and personalized travel consultation",
      location: "Dhanmondi Office, Dhaka",
      year: "2024",
   },
   {
      id: 7,
      src: "/assets/img/destination/des-3.jpg",
      category: "tours",
      title: "Tropical Coastal Escapes",
      subtitle: "Customized family and honeymoon beach packages",
      location: "Phuket & Bali",
      year: "2023",
   },
   {
      id: 8,
      src: "/assets/img/about/about-4.jpg",
      category: "team",
      title: "12 Years Celebration & Awards",
      subtitle: "Honoring customer trust and agency milestones",
      location: "Dhaka, Bangladesh",
      year: "2024",
   },
];

const categories: { key: Category; labelKey: string; defaultLabel: string }[] = [
   { key: "all", labelKey: "gallery.filterAll", defaultLabel: "All Photos" },
   { key: "hajj", labelKey: "gallery.filterHajj", defaultLabel: "Hajj & Umrah" },
   { key: "tours", labelKey: "gallery.filterTours", defaultLabel: "Tours & Holidays" },
   { key: "visa", labelKey: "gallery.filterVisa", defaultLabel: "Visa & Events" },
   { key: "team", labelKey: "gallery.filterTeam", defaultLabel: "Our Team" },
];

const AboutGallery = () => {
   const { t } = useT();
   const [activeTab, setActiveTab] = useState<Category>("all");
   const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

   const filteredItems =
      activeTab === "all"
         ? galleryItems
         : galleryItems.filter((item) => item.category === activeTab);

   return (
      <section className="ebt-gallery-section ebt-section">
         <div className="container">
            {/* Section Heading */}
            <div className="row justify-content-center">
               <div className="col-xl-8 col-lg-9 text-center">
                  <div className="ebt-gallery-head mb-40">
                     <h5 className="tg-section-subtitle mb-15">Our Moments & Memories</h5>
                     <h2 className="ebt-gallery-title">
                        Moments That Tell <span>Our Story</span>
                     </h2>
                     <p className="ebt-gallery-lead">
                        From spiritual pilgrimages to world explorations and client milestones — glimpses of journeys crafted with trust since 2012.
                     </p>
                  </div>

                  {/* Filter Pills */}
                  <div className="ebt-gallery-filters mb-45">
                     {categories.map((cat) => (
                        <button
                           key={cat.key}
                           type="button"
                           className={`ebt-gallery-filter-btn ${activeTab === cat.key ? "is-active" : ""}`}
                           onClick={() => setActiveTab(cat.key)}
                        >
                           {cat.defaultLabel}
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
                        onClick={() => setSelectedImage(item)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                           if (e.key === "Enter" || e.key === " ") {
                              setSelectedImage(item);
                           }
                        }}
                     >
                        <div className="ebt-gallery-media">
                           <Image
                              src={item.src}
                              alt={item.title}
                              width={500}
                              height={360}
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              className="ebt-gallery-img"
                           />
                           <div className="ebt-gallery-overlay">
                              <div className="ebt-gallery-overlay-content">
                                 <h4 className="ebt-gallery-item-title">{item.title}</h4>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>

         {/* Lightbox / Modal */}
         {selectedImage && (
            <div
               className="ebt-lightbox-backdrop"
               onClick={() => setSelectedImage(null)}
               role="dialog"
               aria-modal="true"
            >
               <div className="ebt-lightbox-container" onClick={(e) => e.stopPropagation()}>
                  <button
                     className="ebt-lightbox-close"
                     type="button"
                     onClick={() => setSelectedImage(null)}
                     aria-label="Close image preview"
                  >
                     <X size={24} />
                  </button>
                  <div className="ebt-lightbox-img-box">
                     <Image
                        src={selectedImage.src}
                        alt={selectedImage.title}
                        width={900}
                        height={600}
                        style={{ width: "100%", height: "auto", maxHeight: "70vh", objectFit: "contain" }}
                     />
                  </div>
                  <div className="ebt-lightbox-meta">
                     <h3 className="ebt-lightbox-title mb-0">{selectedImage.title}</h3>
                  </div>
               </div>
            </div>
         )}
      </section>
   );
};

export default AboutGallery;
