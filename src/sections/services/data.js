import { FaTools } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";
import { GiCardboardBox } from "react-icons/gi";
import { FaAws } from "react-icons/fa6";
import { TbApi } from "react-icons/tb";

const data = [
  {
    id: 1,
    icon: <FaDatabase />, // Database Icon for Data Engineering
    title: "Data Engineering",
    desc: "I specialize in designing and optimizing data pipelines, leveraging tools such as Apache Airflow, Apache Spark, and AWS services. I focus on ensuring data quality, performance, and cost-efficiency across complex systems, creating scalable and reliable solutions.",
  },
  {
    id: 2,
    icon: <FaAws />, // AWS Icon for Cloud & Infrastructure
    title: "Cloud & Infrastructure",
    desc: "With certifications in AWS Cloud Practitioner and Solutions Architect Associate, I design and implement cloud-based data solutions. I am proficient in using AWS and Azure services, utilizing Infrastructure as Code with Terraform and ensuring seamless cloud deployments.",
  },
  {
    id: 3,
    icon: <FaTools />, // Tools Icon for ETL Development
    title: "ETL Development",
    desc: "I excel in building and maintaining robust ETL pipelines using Python, SQL, and Apache Spark. My expertise includes extracting, transforming, and loading large datasets to facilitate efficient data storage and analysis across multiple platforms.",
  },
  {
    id: 4,
    icon: <TbApi />, // API Icon for Backend Development
    title: "Backend Development",
    desc: "I have hands-on experience in developing APIs and backend systems with FastAPI and Django, ensuring seamless integration of data storage and processing systems. I focus on building scalable, secure, and efficient backend architectures for data-driven applications.",
  },
];

export default data;
