import Image from "next/image";
import Link from "next/link";
import ArrowIcon from "./ArrowIcon";
import { AMZ_TECH_MENU } from "../_lib/nav";

const DETAILS = [
  { image: "/images/services/systems.jpg", text: "Find efficient heating, cooling, ventilation and heat recovery equipment for your building’s system requirements.", action: "Explore system types" },
  { image: "/images/services/manufacturers.jpg", text: "Explore our manufacturer partners and the HVAC technologies they bring to commercial and industrial projects.", action: "Meet our manufacturers" },
  { image: "/images/services/installation.jpg", text: "Bring your project from specification to operation with coordinated installation, clear communication and start-up support.", action: "Explore installation services" },
  { image: "/images/services/incentives.jpg", text: "Identify eligible utility incentives and coordinate assessments, applications and documentation alongside your equipment upgrade.", action: "Explore utility incentives" },
];

export default function TechnologyServices({ overview = false }: { overview?: boolean }) {
  return (
    <section className={`amz-services-section${overview ? "" : " amz-services-home"}`} aria-labelledby="services-heading" data-screen-label="Technologies & Services">
      <div className="amz-services-container">
        <div className="amz-services-heading">
          <div><p className="amz-insight-eyebrow">Technologies &amp; Services</p><h2 id="services-heading">{overview ? "Find The Right Support For Your Project." : "Better Systems. Support At Every Step."}</h2></div>
          {overview ? <p>Explore our equipment, manufacturer partners and services to plan your next building upgrade.</p> : <Link href="/technologies-services">Explore All Technologies &amp; Services <ArrowIcon /></Link>}
        </div>
        <div className="amz-services-grid">
          {AMZ_TECH_MENU.map((item, i) => (
            <Link key={item.href} href={item.href} className="amz-service-card">
              <div className="amz-service-image"><Image src={DETAILS[i].image} alt="" fill sizes={overview ? "(max-width: 700px) 100vw, (max-width: 1280px) 50vw, 600px" : "(max-width: 700px) 100vw, (max-width: 1100px) 50vw, (max-width: 1440px) 25vw, 340px"} /></div>
              <div className="amz-service-copy"><h3>{item.label}</h3><p>{DETAILS[i].text}</p><span className="amz-insight-read">{DETAILS[i].action} <ArrowIcon /></span></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
