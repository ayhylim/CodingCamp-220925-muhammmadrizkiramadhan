import React from "react";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { ExternalLink, Github, MapPin } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Travel Agency Website",
      description: "A modern travel agency website with booking system and destination showcase",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "MongoDB", "TailwindCSS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "Full-featured e-commerce platform with payment integration and inventory management",
      image: "/api/placeholder/400/250", 
      technologies: ["Vue.js", "Express.js", "PostgreSQL", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates and team features",
      image: "/api/placeholder/400/250",
      technologies: ["Angular", "Firebase", "TypeScript", "Material-UI"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const skills = [
    "JavaScript", "TypeScript", "React", "Vue.js", "Angular", "Node.js", 
    "Express.js", "MongoDB", "PostgreSQL", "MySQL", "TailwindCSS", 
    "Bootstrap", "Git", "Docker", "AWS", "Firebase"
  ];

  const destinations = [
    {
      name: "Bali",
      description: "Travel dan wisata di Bali, kunjungi cagar budaya dan kuliner yang menarik",
      specialties: ["Cultural Tours", "Beach Resorts", "Adventure Sports"]
    },
    {
      name: "Japan", 
      description: "Travel dan wisata di Japan, kunjungi cagar budaya dan kuliner yang menarik",
      specialties: ["Cultural Heritage", "Traditional Cuisine", "Modern Cities"]
    },
    {
      name: "Singapore",
      description: "Modern city-state with blend of cultures and amazing attractions",
      specialties: ["Urban Tourism", "Shopping", "Food Paradise"]
    },
    {
      name: "Bandung",
      description: "Cool mountain city famous for fashion outlets and natural beauty",
      specialties: ["Fashion Shopping", "Natural Views", "Culinary Tours"]
    },
    {
      name: "Surabaya",
      description: "Historic city with rich cultural heritage and business opportunities",
      specialties: ["Historical Sites", "Business Hub", "Local Culture"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing my work in web development and travel industry expertise. 
            Each project represents a commitment to quality and innovation.
          </p>
        </div>

        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="w-16 h-16 bg-gray-300 rounded-lg mx-auto mb-2"></div>
                    <p className="text-sm">Project Image</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Travel Destinations Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Travel Destinations Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((destination) => (
              <Card key={destination.name} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-blue-500 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-900">{destination.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <div className="flex flex-wrap gap-2">
                  {destination.specialties.map((specialty) => (
                    <Badge key={specialty} variant="outline" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <Card className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Skills</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <Badge key={skill} variant="default" className="px-4 py-2 text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </section>

        {/* Experience Section */}
        <section>
          <Card className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Experience</h2>
            <div className="space-y-8">
              <div className="border-l-4 border-blue-500 pl-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">Senior Web Developer</h3>
                  <Badge variant="outline">2022 - Present</Badge>
                </div>
                <p className="text-blue-600 font-medium mb-3">Travel Tech Solutions</p>
                <p className="text-gray-600">
                  Leading development of modern web applications for travel industry clients. 
                  Specialized in creating user-friendly booking systems and destination showcase websites.
                </p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">Full-Stack Developer</h3>
                  <Badge variant="outline">2020 - 2022</Badge>
                </div>
                <p className="text-green-600 font-medium mb-3">Digital Agency Bandung</p>
                <p className="text-gray-600">
                  Developed and maintained various web applications for local businesses. 
                  Gained expertise in modern frameworks and database design.
                </p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">Junior Developer</h3>
                  <Badge variant="outline">2019 - 2020</Badge>
                </div>
                <p className="text-purple-600 font-medium mb-3">StartUp Jakarta</p>
                <p className="text-gray-600">
                  Started my professional journey learning web development fundamentals 
                  and working on small to medium-scale projects.
                </p>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;