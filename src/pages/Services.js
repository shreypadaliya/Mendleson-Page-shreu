import Communications from "./services/Communications";
import ConsultationAndResearch from "./services/ConsultationAndResearch";
import Engagement from "./services/Engagement";
import Facilitation from "./services/Facilitation";
import TraningAndMentoring from "./services/TraningAndMentoring";

const Services = () => {
  return (
    <div id="Services">
      <Engagement />
      <Communications />
      <Facilitation />
      <ConsultationAndResearch />
      <TraningAndMentoring />
    </div>
  );
};

export default Services;
