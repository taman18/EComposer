import { BRACELET_DESIGN } from "../../../../utils/mockData";
import DesignContent from "./components/DesignContent";


const CustomBraceletDesigns: React.FC = () => {
  return (
    <section className="flex flex-col md:p-20 p-10">
      {BRACELET_DESIGN.map((design, index) => (
        <DesignContent
          key={index}
          imageSrc={design.imageSrc}
          title={design.title}
          description={design.description}
          reverse={design.reverse}
        />
      ))}
    </section>
  );
};

export default CustomBraceletDesigns;
