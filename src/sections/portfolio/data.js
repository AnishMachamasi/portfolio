import Image1 from "../../assets/ai_doc_companion.png";
import Image2 from "../../assets/generative_ai_chatbot.avif";
import Image3 from "../../assets/text_to_SQL.png";
import Image4 from "../../assets/t2i.webp";
import Image5 from "../../assets/extracttext.png";
import Image6 from "../../assets/numberplate.png";
import Image7 from "../../assets/prediction.webp";
import Image8 from "../../assets/plantdisease.jpg";
import Image9 from "../../assets/caraccident.png";
import Image10 from "../../assets/end-to-end-big-data-apps-architecture.webp";
import Image11 from "../../assets/twitterdatapipeline.png";
import Image12 from "../../assets/webscrappingaws.png";

const data = [
  {
    id: 1,
    category: "Generative AI",
    image: Image1,
    title: "AI Doc Companion",
    desc: "AI Doc Companion uses Amazon Bedrock's LLM and RAG for efficient text retrieval. Users can upload PDFs, perform natural language searches, and retrieve relevant information stored in Opensearch.",
    demo: "https://github.com/AnishMachamasi/AI-Doc-Companion",
    github: "https://github.com/AnishMachamasi/AI-Doc-Companion",
  },
  {
    id: 2,
    category: "Generative AI",
    image: Image2,
    title: "Generative AI ChatBot",
    desc: "Generative AI ChatBot uses natural language processing to query PDF documents. Users can upload PDFs, ask questions, and retrieve relevant information visualized in an interactive tool for analysis.",
    demo: "https://github.com/AnishMachamasi/Building-a-Generative-AI-chatbot-using-Amazon-Bedrock",
    github:
      "https://github.com/AnishMachamasi/Building-a-Generative-AI-chatbot-using-Amazon-Bedrock",
  },
  {
    id: 3,
    category: "Generative AI",
    image: Image3,
    title: "Text to SQL using AWS",
    desc: "Search Your AWS Glue Data Catalog Tables with Text enables natural language queries for Glue Data Catalog. Users input text queries, which are processed by Bedrock LLM to generate SQL queries and retrieve results via Athena.",
    demo: "https://github.com/AnishMachamasi/Text-to-SQL-using-AWS",
    github: "https://github.com/AnishMachamasi/Text-to-SQL-using-AWS",
  },
  {
    id: 4,
    category: "Machine Learning",
    image: Image4,
    title: "Text to Image Generation using AttnGAN",
    desc: "AttnGAN uses Pytorch to generate images from text descriptions with fine-grained attention. The Streamlit app allows users to input text and view generated images. Custom datasets like Thanka and Animal are also supported.",
    demo: "https://github.com/AnishMachamasi/Text-to-Image-Generation-using-AttnGAN",
    github:
      "https://github.com/AnishMachamasi/Text-to-Image-Generation-using-AttnGANr",
  },
  {
    id: 5,
    category: "Machine Learning",
    image: Image5,
    title: "Document Text Extractor",
    desc: "Document Text Extractor uses machine learning to extract text from various document formats. Users can upload documents, and the system processes them to extract and display the text for further analysis.",
    demo: "https://github.com/AnishMachamasi/Extract-text-from-Business-card-or-any-other-documents",
    github:
      "https://github.com/AnishMachamasi/Extract-text-from-Business-card-or-any-other-documents",
  },
  {
    id: 6,
    category: "Machine Learning",
    image: Image6,
    title: "Vehicle Number Plate Detection",
    desc: "Vehicle Number Plate Recognition uses deep learning and YOLO for detecting vehicle number plates. The system identifies and extracts plate numbers from images for further processing and analysis.",
    demo: "https://github.com/AnishMachamasi/Number-Plate-Detection-using-Deep-Learning-and-Yolo",
    github:
      "https://github.com/AnishMachamasi/Number-Plate-Detection-using-Deep-Learning-and-Yolo",
  },
  {
    id: 7,
    category: "Machine Learning",
    image: Image7,
    title: "Hotel Booking Prediction",
    desc: "Hotel Booking Prediction uses machine learning to predict booking outcomes. The system analyzes various factors to forecast booking trends, helping hotels optimize their operations and improve customer service.",
    demo: "https://github.com/AnishMachamasi/Hotel-Booking-Prediction-ML",
    github: "https://github.com/AnishMachamasi/Hotel-Booking-Prediction-ML",
  },
  {
    id: 8,
    category: "Machine Learning",
    image: Image8,
    title: "Plant Disease Detection",
    desc: "Tomato Leaf Disease Detection uses CNN and transfer learning to identify 10 different tomato plant diseases. The system processes images, predicts the disease, and provides accurate results for improved crop management.",
    demo: "https://github.com/AnishMachamasi/Plant-Disease-Detection-System?tab=readme-ov-file",
    github:
      "https://github.com/AnishMachamasi/Plant-Disease-Detection-System?tab=readme-ov-file",
  },
  {
    id: 9,
    category: "Machine Learning",
    image: Image9,
    title: "Accident Severity Level Prediction",
    desc: "Accident Severity Level Prediction uses XGBoost to predict the severity of accidents based on various factors. The system analyzes data like weather, location, and time, forecasting the severity to assist in decision-making and resource allocation.",
    demo: "https://github.com/AnishMachamasi/US-Accident-Severity-Level-Prediction",
    github:
      "https://github.com/AnishMachamasi/US-Accident-Severity-Level-Prediction",
  },
  {
    id: 10,
    category: "Data Engineering",
    image: Image10,
    title: "End-to-End Big Data Applications",
    desc: "End-to-End Big Data Applications enables the creation of a big data pipeline using Docker Compose. It supports tools like Airflow, Spark, and Kafka, allowing users to set up and run big data workflows with ease.",
    demo: "https://github.com/AnishMachamasi/Big-Data",
    github: "https://github.com/AnishMachamasi/Big-Data",
  },
  {
    id: 11,
    category: "Data Engineering",
    image: Image11,
    title: "Twitter Data Pipeline",
    desc: "Twitter Data Pipeline uses Apache Airflow to automate the ETL process for Twitter data. It collects and processes data daily, enabling efficient extraction, transformation, and loading of Twitter data for analysis.",
    demo: "https://github.com/AnishMachamasi/Twitter-Data-Analytics?tab=readme-ov-file",
    github:
      "https://github.com/AnishMachamasi/Twitter-Data-Analytics?tab=readme-ov-file",
  },
  {
    id: 12,
    category: "Data Engineering",
    image: Image12,
    title: "Web Scrapping Pipeline using AWS",
    desc: "This project automates web scraping and data analysis using AWS services like Selenium, Lambda, S3, and API Gateway, with automation via Step Functions and scheduling through CloudWatch Events.",
    demo: "https://github.com/AnishMachamasi/Web-Scrapping-using-AWS-Services?tab=readme-ov-file",
    github:
      "https://github.com/AnishMachamasi/Web-Scrapping-using-AWS-Services?tab=readme-ov-file",
  },
];

export default data;
