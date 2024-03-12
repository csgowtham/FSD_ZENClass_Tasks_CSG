const resume = {
    "name": "Gowtham C S",
    "address": "Coimbatore - 641 020",
    "phone": "(+91) 96009 69122",
    "email": "csgowtham73@gmail.com",
    "profile": "An Enthusiastic 3rd-year Computer Science student with strong programming skills. Actively pursuing a Bachelor's, eager to contribute in dynamic projects.",
    "education": [
      {
        "institution": "University College of Engineering BIT Campus Anna University, Tiruchirappalli",
        "degree": "Bachelor of Engineering in Computer Science",
        "dates": "August 2021 - Present",
        "details": "Intensive curriculum encompassing programming, algorithms, and software engineering. This program equips me with a strong theoretical foundation and practical skills to navigate the dynamic landscape of computer science.",
        "cgpa": "7.868 CGPA"
      },
      {
        "institution": "GKD Matriculation Higher Secondary School, Coimbatore",
        "degree": "HSC",
        "dates": "July 2019 - May 2021",
        "details": "Reflecting a dedication to academic excellence and a strong foundation in key subjects. Secured 93% in the High School Certificate."
      },
      {
        "institution": "AVB Matriculation Higher Secondary School, Coimbatore",
        "degree": "SSLC",
        "dates": "March 2019",
        "details": "Highlighting a commitment to academic excellence and mastery of foundational subjects. Secured 92.9% in the Secondary School Leaving Certificate."
      }
    ],
    "skills": {
      "programming": ["Java", "C"],
      "webDevelopment": "Intermediate",
      "tools": ["MS Word", "Excel"]
    },
    "coursesCertifications": [
      {
        "name": "Computer Networks and Internet Protocol",
        "provider": "IIT Kharagpur through NPTEL",
        "dates": "January 2023 - April 2023"
      },
      {
        "name": "Software Testing",
        "provider": "IIIT Banglore through NPTEL",
        "dates": "July 2023 - October 2023"
      }
    ],
    "internship": {
      "title": "30-days Internship on IoT",
      "company": "Pantech Solution",
      "dates": "July 2023 - August 2023"
    },
    "testimonials": ["\"Arise, awake, and stop not until the goal is achieved.\" - Swami Vivekananda"],
    "languages": ["English", "Tamil"]
  };
  
  // Using regular for loop
  console.log("Using regular for loop:");
  for (let i = 0; i < Object.keys(resume).length; i++) {
    const key = Object.keys(resume)[i];
    console.log(`${key}: ${resume[key]}`);
  }
  
  // Using for...in loop
  console.log("\nUsing for...in loop:");
  for (const key in resume) {
    console.log(`${key}: ${resume[key]}`);
  }
  
  // Using for...of loop
  console.log("\nUsing for...of loop:");
  for (const key of Object.keys(resume)) {
    console.log(`${key}: ${resume[key]}`);
  }
  
  // Using forEach for arrays
  console.log("\nUsing forEach loop for arrays:");
  resume.education.forEach((edu) => {
    console.log(`Institution: ${edu.institution}, Degree: ${edu.degree}, Dates: ${edu.dates}, CGPA: ${edu.cgpa || "N/A"}`);
  });
  
  // Note: forEach cannot be directly used for objects
