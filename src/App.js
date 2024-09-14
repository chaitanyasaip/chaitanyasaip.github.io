import React from 'react';
import { Mail, Linkedin, Github, Award, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  return (
    <div className="bg-black text-gray-300 min-h-screen font-sans p-8">
      <div className="max-w-3xl mx-auto">
        <header className="mb-12">
          <h1 className="text-3xl font-bold text-white mb-2">Sai Chaitanya Pachipulusu</h1>
          <p className="text-xl text-gray-500">Machine Learning Engineer</p>
          <div className="flex space-x-4 mt-4">
            <a href="mailto:siai.chaitanyap@gmail.com" className="text-blue-400 hover:underline flex items-center">
              <Mail size={16} className="mr-2" /> Email
            </a>
            <a href="https://www.linkedin.com/in/your-linkedin" className="text-blue-400 hover:underline flex items-center">
              <Linkedin size={16} className="mr-2" /> LinkedIn
            </a>
            <a href="https://github.com/your-github" className="text-blue-400 hover:underline flex items-center">
              <Github size={16} className="mr-2" /> GitHub
            </a>
          </div>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">About</h2>
          <p className="mb-4">
            Results-driven graduate with 4+ years of experience in data analysis, visualizations, machine learning, statistics, data science,
            building ETL pipelines and advanced NLP techniques (DNN, LLMS, RAG). Seeking Machine Learning Engineer role.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Education</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-white">Master of Science in Machine Learning</h3>
            <p>Stevens Institute of Technology, Hoboken, NJ</p>
            <p>Sep. 2022 - May 2024 | CGPA: 3.9</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Bachelor of Technology in Information Technology</h3>
            <p>Sreenidhi Institute of Science and Technology, Hyderabad, India</p>
            <p>Aug. 2016 - May 2020</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Skills</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Machine Learning, Deep Learning, NLP, Data Visualization, Data Analysis</li>
            <li>Python, C++, CUDA, R, SQL, Linux/UNIX</li>
            <li>PyTorch, TensorFlow, Keras, Scikit-learn, XGBoost, NumPy, Pandas, spaCy, NLTK</li>
            <li>LLMs, Prompt Engineering, Amazon Bedrock, Vector Databases (Weaviate, Pinecone), RAG Pipelines</li>
            <li>AWS, SageMaker, Databricks, Tableau, PowerBI, Docker, Git</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Experience</h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white">Associate Software Engineer (Data Engineer)</h3>
            <p className="text-gray-400">CGI Information Systems and Management Consultants Pvt. Ltd, Bengaluru, India</p>
            <p className="text-gray-500">Sep 2020 - Jun 2022</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Developed intuitive dashboards, reducing manual data retrieval efforts by 80%</li>
              <li>Managed server deployment projects, achieving a 23% reduction in operational costs</li>
              <li>Awarded 'Best Employee' for Q4 2021</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Machine Learning Engineer</h3>
            <p className="text-gray-400">Imbuedesk Pvt. Ltd, Hyderabad, India</p>
            <p className="text-gray-500">May 2018 - Aug 2020</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Developed a deep learning model with 97% accuracy in facial expression detection</li>
              <li>Implemented image processing pipeline for vehicle ID recognition, serving 50,000 daily active users</li>
              <li>Created interactive dashboards, improving data accessibility by 85%</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Projects</h2>
          <ul className="space-y-4">
            <li>
              <h3 className="text-xl font-semibold text-white">Career Roadmap Generator</h3>
              <p>Generative AI Chatbot using GPT models, Langchain, and ChromaDB</p>
            </li>
            <li>
              <h3 className="text-xl font-semibold text-white">SaaS Chatbot</h3>
              <p>End-to-end chatbot using Mixtral 8x7b MoE model and Weaviate vector database</p>
            </li>
            <li>
              <h3 className="text-xl font-semibold text-white">AI vs Human: Exploring the limits of Machine Intelligence</h3>
              <p>Model to distinguish between human and ChatGPT answers with 90% accuracy</p>
            </li>
            <li>
              <h3 className="text-xl font-semibold text-white">Toxic Spans Detection</h3>
              <p>BERT classifier for identifying toxic spans, achieving 84% F1 score</p>
            </li>
          </ul>
        </section>

        <footer>
          <h2 className="text-2xl font-semibold text-white mb-4">Achievements</h2>
          <div className="flex items-center text-blue-400">
            <Award size={16} className="mr-2" />
            <span>Best Employee Award, Q4 2021 at CGI</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;
