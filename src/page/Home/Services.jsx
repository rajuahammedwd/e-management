import { useEffect, useState } from "react";
import Service from "../../components/Service";

const Services = () => {
    const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("fake.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
    
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-3 gap-5 mt-20">
      {services.map((service) => (
        <Service key={service.id} service={service} />
      ))}
    </div>
  );
};

export default Services;
