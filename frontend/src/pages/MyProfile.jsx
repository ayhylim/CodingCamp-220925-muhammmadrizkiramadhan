import React from "react";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";

const MyProfile = () => {
  const profileData = {
    name: "Harfi Novian",
    birthDate: "01/11/1995",
    gender: "Laki-Laki",
    email: "harfi.novian@email.com",
    phone: "+62 812-3456-7890",
    location: "Jakarta, Indonesia",
    joinDate: "January 2024",
    bio: "Passionate software engineer and web developer with expertise in modern web technologies. Love creating innovative solutions and learning new technologies."
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-6">
      <div className="max-w-4xl mx-auto">
        <Card className="p-8">
          <div className="text-center mb-8">
            <div className="w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-black font-bold text-4xl">RvU</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">{profileData.name}</h1>
            <p className="text-gray-600 mt-2">{profileData.bio}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
                Personal Information
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Birth Date</p>
                    <p className="font-medium">{profileData.birthDate}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <Badge variant="outline" className="text-xs">
                      {profileData.gender === "Laki-Laki" ? "M" : "F"}
                    </Badge>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Gender</p>
                    <p className="font-medium">{profileData.gender}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium">{profileData.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
                Contact Information
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">{profileData.email}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium">{profileData.phone}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Member Since</p>
                    <p className="font-medium">{profileData.joinDate}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">About</h2>
            <p className="text-gray-600 leading-relaxed">
              Welcome to my profile! I'm {profileData.name}, a dedicated professional 
              who loves technology and innovation. I have been part of this platform since 
              {profileData.joinDate} and enjoy connecting with like-minded individuals 
              and exploring new opportunities for growth and collaboration.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MyProfile;