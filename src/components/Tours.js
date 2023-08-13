import Title from "./Title";
import { tours } from "../data";
import Tour from "./Tour";

export default function Tours() {
  return (
    <section
      className="section"
      id="tours"
    >
      <Title
        text1={"Featured"}
        text2={"Tours"}
      />

      <div className="section-center featured-center">
        {tours.map((tour) => (
          <Tour
            {...tour}
            key={tour.id}
          />
        ))}
      </div>
    </section>
  );
}
