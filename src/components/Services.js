import Title from "./Title";
import { services } from "./../data";
import Service from "./Service";

export default function Services() {
  return (
    <section
      className="section services"
      id="services"
    >
      <Title
        text1={"Our"}
        text2={"Services"}
      />

      <div className="section-center services-center">
        {services.map((service) => (
          <Service {...service} />
        ))}
      </div>
    </section>
  );
}
