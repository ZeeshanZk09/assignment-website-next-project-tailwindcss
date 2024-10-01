import React from "react";
import Link from "next/link";
import { ceoData } from "../mockData/ceoData"; // Data import kar rahe hain
import './CEOSection.css'

const CEOSection: React.FC = () => {
  const { name, position, bio, achievements, contact } = ceoData;

  return (
    <section className="bg-gray-900 text-white py-16 px-8 sm:px-16 lg:px-32">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="flex flex-col-reverse lg:flex-row my-10  justify-center items-center  lg:justify-between">
          <div className="intro-section">

          <h2 className="text-3xl lg:text-left text-center font-bold sm:text-5xl ">{name}</h2>
          <p className="text-lg lg:text-left text-center mt-2 text-indigo-400 ">{position}</p>
          </div>
          <div className="img-section w-64 h-64 border rounded-[50%]">
              
          </div>
        </div>

        {/* CEO Bio */}
        <div className="text-lg leading-8 mb-10">
          <p>{bio}</p>
        </div>

        {/* CEO Achievements */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Key Achievements</h3>
          <ul className="list-disc pl-6 space-y-3">
            {achievements.map((achievement, index) => (
              <li key={index} className="text-md leading-7">
                {achievement}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
          <p>
            Email:{" "}
            <a
              href={`mailto:${contact.email}`}
              className="text-indigo-300 underline"
            >
              {contact.email}
            </a>
          </p>
          <p className="mt-2">
            Github:{" "}
            <Link href={contact.github}>
              <span className="text-indigo-300 underline">View Github Profile</span>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CEOSection;
