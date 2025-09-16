import { Users, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const LoginSelector = () => {
  return (
    <section className="py-20 bg-gradient-hero min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 inline-block mb-6">
            <span className="text-white font-semibold">CAMPUS SAFETY PLATFORM</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            HOME PAGE AND LOGIN
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12">
            Choose your role to access disaster preparedness training and management tools
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Admin Path */}
          <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all group cursor-pointer">
            <div className="text-center">
              <div className="bg-gradient-warning p-4 rounded-full w-20 h-20 mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-12 h-12 text-white mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Admin</h3>
              <p className="text-white/80 mb-6">
                Access admin dashboard with student details, drill management, and analytics
              </p>
              <div className="space-y-3 mb-6">
                <div className="text-sm text-white/70 bg-white/10 rounded px-3 py-2">
                  📊 Student Progress Tracking
                </div>
                <div className="text-sm text-white/70 bg-white/10 rounded px-3 py-2">
                  🎯 Drill Scheduling & Management
                </div>
                <div className="text-sm text-white/70 bg-white/10 rounded px-3 py-2">
                  📈 Performance Analytics
                </div>
              </div>
              <Button className="w-full bg-white text-primary hover:bg-white/90">
                Admin Dashboard
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </Card>

          {/* Student Path */}
          <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all group cursor-pointer">
            <div className="text-center">
              <div className="bg-gradient-safety p-4 rounded-full w-20 h-20 mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-12 h-12 text-white mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Student</h3>
              <p className="text-white/80 mb-6">
                Access interactive simulations, quizzes, and virtual drills for disaster preparedness
              </p>
              <div className="space-y-3 mb-6">
                <div className="text-sm text-white/70 bg-white/10 rounded px-3 py-2">
                  🎮 Interactive Simulations
                </div>
                <div className="text-sm text-white/70 bg-white/10 rounded px-3 py-2">
                  📝 Quiz & Virtual Drills
                </div>
                <div className="text-sm text-white/70 bg-white/10 rounded px-3 py-2">
                  🏆 Progress Tracking
                </div>
              </div>
              <Button className="w-full bg-white text-primary hover:bg-white/90">
                Student Portal
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </Card>
        </div>

        {/* General Instructions */}
        <div className="mt-16 text-center">
          <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">General Instructions</h3>
            <div className="text-white/80 space-y-2">
              <p>• Complete all assigned modules for certification</p>
              <p>• Score above 75% to pass assessments</p>
              <p>• Practice drills regularly for better preparedness</p>
              <p>• Report emergency situations immediately</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};