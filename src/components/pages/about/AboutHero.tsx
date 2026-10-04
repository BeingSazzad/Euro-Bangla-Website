"use client"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MapPin, Award, CheckCircle2, ShieldCheck, PhoneCall, Sparkles } from "lucide-react"
import { COMPANY } from "@/data/company"

const AboutHero = () => {
   return (
      <section className="ebt-about-hero">
         {/* Background Cinematic Media */}
         <div className="ebt-about-hero-bg">
            <Image
               src="/assets/img/about/about-hero-banner.jpg"
               alt="Euro Bangla Travels Paris Luxury Travel Experience"
               fill
               priority
               sizes="100vw"
               className="ebt-about-hero-img"
            />
            <div className="ebt-about-hero-overlay" />
            <div className="ebt-about-hero-glow" />
         </div>

         <div className="container position-relative z-index-2">
            <div className="row justify-content-center text-center">
               <div className="col-xl-10 col-lg-11">
                  {/* Eyebrow Pill */}
                  <div className="ebt-hero-pill-badge mb-25">
                     <span className="pill-dot" />
                     <span className="pill-text">PARISIAN HERITAGE · GLOBAL EXCELLENCE · EST. 2012</span>
                  </div>

                  {/* Main Title */}
                  <h1 className="ebt-about-hero-title mb-25">
                     Crafting Sacred Pilgrimages & <span>Unforgettable Journeys</span> Across Continents
                  </h1>

                  {/* Subtitle */}
                  <p className="ebt-about-hero-desc mb-35">
                     Headquartered at 65 Rue Louis Blanc in Paris, Euro Bangla Travels is the trusted companion for thousands of families, pilgrims, and explorers seeking honest counsel, confirmed bookings, and peace of mind.
                  </p>

                  {/* CTA Buttons */}
                  <div className="d-flex align-items-center justify-content-center flex-wrap gap-3 mb-50">
                     <a href="#heritage" className="tg-btn tg-btn-switch-animation">
                        Explore Our Heritage <ArrowRight size={18} />
                     </a>
                     <Link href="/contact" className="tg-btn tg-btn-transparent tg-btn-switch-animation">
                        Visit Paris Office
                     </Link>
                  </div>
               </div>
            </div>

            {/* Floating Glassmorphic Trust Metric Strip */}
            <div className="ebt-about-hero-metrics">
               <div className="row g-3 g-md-4 align-items-center">
                  <div className="col-6 col-lg-3">
                     <div className="metric-item">
                        <div className="metric-icon">
                           <Award size={22} />
                        </div>
                        <div>
                           <span className="metric-value">12+ Years</span>
                           <span className="metric-label">Licensed in Paris</span>
                        </div>
                     </div>
                  </div>
                  <div className="col-6 col-lg-3">
                     <div className="metric-item">
                        <div className="metric-icon metric-icon--gold">
                           <Sparkles size={22} />
                        </div>
                        <div>
                           <span className="metric-value">15,000+</span>
                           <span className="metric-label">Happy Travelers</span>
                        </div>
                     </div>
                  </div>
                  <div className="col-6 col-lg-3">
                     <div className="metric-item">
                        <div className="metric-icon metric-icon--blue">
                           <MapPin size={22} />
                        </div>
                        <div>
                           <span className="metric-value">50+ Routes</span>
                           <span className="metric-label">Global Destinations</span>
                        </div>
                     </div>
                  </div>
                  <div className="col-6 col-lg-3">
                     <div className="metric-item">
                        <div className="metric-icon metric-icon--green">
                           <ShieldCheck size={22} />
                        </div>
                        <div>
                           <span className="metric-value">100% Safe</span>
                           <span className="metric-label">Verified Bookings</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default AboutHero;
