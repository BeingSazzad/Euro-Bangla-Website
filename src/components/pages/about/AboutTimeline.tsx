"use client"
import Image from "next/image"
import Link from "next/link"
import { JSX, useRef, useState, MouseEvent, WheelEvent } from "react"
import { Rocket, Globe, Users, Landmark, TrendingUp, ArrowRight, Camera, Sparkles } from "lucide-react"
import { useT } from "@/i18n/LanguageProvider"

interface Milestone {
   year: string;
   icon: JSX.Element;
   title: string;
   desc: string;
}

const milestones: Milestone[] = [
   {
      year: "2012",
      icon: <Rocket size={20} />,
      title: "Started Our Journey in Paris",
      desc: "Euro Bangla Travels was founded at 65 Rue Louis Blanc, 75010 Paris, to deliver trusted, honest diaspora travel support.",
   },
   {
      year: "2015",
      icon: <Globe size={20} />,
      title: "Direct Airline Ticketing",
      desc: "Secured direct global carrier ticketing and expanded international visa consultation for worldwide destinations.",
   },
   {
      year: "2018",
      icon: <Users size={20} />,
      title: "15,000+ Happy Travelers",
      desc: "Surpassed a major milestone of serving over 15,000 satisfied passengers and community pilgrims with distinction.",
   },
   {
      year: "2021",
      icon: <Landmark size={20} />,
      title: "Hajj & Umrah Leadership",
      desc: "Established VIP pilgrimage partnerships with vetted hotels in Makkah & Madinah and dedicated group guides.",
   },
   {
      year: "Today",
      icon: <TrendingUp size={20} />,
      title: "Expanding Horizons",
      desc: "Continuously innovating with digital booking convenience while honoring our physical presence in Paris.",
   },
];

const photoShowcase = [
   { src: "/assets/img/about/about.jpg", tag: "Paris Head Office" },
   { src: "/assets/img/chose/chose-2/thumb-2.jpg", tag: "Makkah Al-Mukarramah" },
   { src: "/assets/img/destination/des.jpg", tag: "Santorini Tour" },
   { src: "/assets/img/destination/des-4.jpg", tag: "Madinah Munawwarah" },
   { src: "/assets/img/destination/des-2.jpg", tag: "Swiss Alps Vacation" },
   { src: "/assets/img/about/about-4.jpg", tag: "12-Year Celebration" },
];

const AboutTimeline = () => {
   const { t } = useT();
   const scrollRef = useRef<HTMLDivElement>(null);
   const [isDragging, setIsDragging] = useState(false);
   const [startX, setStartX] = useState(0);
   const [scrollLeft, setScrollLeft] = useState(0);

   const handleWheel = (e: WheelEvent<HTMLDivElement>) => {
      if (scrollRef.current && Math.abs(e.deltaY) > 0) {
         e.preventDefault();
         scrollRef.current.scrollLeft += e.deltaY;
      }
   };

   const onMouseDown = (e: MouseEvent) => {
      if (!scrollRef.current) return;
      setIsDragging(true);
      setStartX(e.pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
   };

   const onMouseLeave = () => setIsDragging(false);
   const onMouseUp = () => setIsDragging(false);

   const onMouseMove = (e: MouseEvent) => {
      if (!isDragging || !scrollRef.current) return;
      e.preventDefault();
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = (x - startX) * 1.5;
      scrollRef.current.scrollLeft = scrollLeft - walk;
   };

   return (
      <section className="ebt-about-timeline">
         <div className="container">
            {/* Header */}
            <div className="row justify-content-center text-center mb-55">
               <div className="col-xl-8 col-lg-9">
                  <span className="tg-section-subtitle mb-15">CHRONICLES OF GROWTH</span>
                  <h2 className="ebt-timeline-title">
                     Milestones of <span>Trust & Heritage</span>
                  </h2>
                  <p className="ebt-timeline-subtitle">
                     From our foundational steps in 2012 to our standing today as a premier diaspora travel agency, every milestone has been paved with customer trust.
                  </p>
               </div>
            </div>

            {/* Modern Milestone Nodes */}
            <div className="ebt-milestone-track mb-60">
               {milestones.map((m, idx) => (
                  <div key={m.year} className="ebt-milestone-card">
                     <div className="milestone-top-row">
                        <div className="milestone-icon-circle">{m.icon}</div>
                        <span className="milestone-year-pill">{m.year}</span>
                     </div>
                     <h4 className="milestone-card-title">{m.title}</h4>
                     <p className="milestone-card-desc">{m.desc}</p>
                  </div>
               ))}
            </div>

            {/* Travel Moments Photo Carousel */}
            <div className="ebt-photo-carousel-wrap">
               <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-30 px-2">
                  <div>
                     <h4 className="photo-carousel-heading">Snapshots of Moments & Memories</h4>
                     <p className="photo-carousel-sub mb-0">Drag horizontally to view highlights from our tours, pilgrimages, and celebrations.</p>
                  </div>
                  <Link href="/gallery" className="gallery-quick-link">
                     <Camera size={16} />
                     <span>View All Photos</span>
                     <ArrowRight size={14} />
                  </Link>
               </div>

               <div
                  ref={scrollRef}
                  onWheel={handleWheel}
                  onMouseDown={onMouseDown}
                  onMouseLeave={onMouseLeave}
                  onMouseUp={onMouseUp}
                  onMouseMove={onMouseMove}
                  className={`ebt-modern-photos-strip ${isDragging ? "is-dragging" : ""}`}
               >
                  {photoShowcase.map((item, i) => (
                     <div key={i} className="ebt-photo-card">
                        <Image
                           src={item.src}
                           alt={item.tag}
                           width={280}
                           height={200}
                           draggable={false}
                           sizes="(max-width: 768px) 60vw, 22vw"
                           className="ebt-photo-img"
                        />
                        <div className="ebt-photo-tag">
                           <span>{item.tag}</span>
                        </div>
                     </div>
                  ))}
               </div>

               <div className="text-center mt-35">
                  <Link href="/gallery" className="tg-btn tg-btn-switch-animation">
                     Explore Full Photo Gallery <ArrowRight size={18} />
                  </Link>
               </div>
            </div>
         </div>
      </section>
   );
};

export default AboutTimeline;
