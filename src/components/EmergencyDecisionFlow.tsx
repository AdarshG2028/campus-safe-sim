import { AlertTriangle, Phone, Users, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";

export const EmergencyDecisionFlow = () => {
  const [currentStep, setCurrentStep] = useState('emergency');

  const steps = {
    emergency: {
      title: "Emergency?",
      description: "Are you currently experiencing an emergency situation?",
      options: [
        { label: "Yes", value: "yes", variant: "destructive" as const },
        { label: "No", value: "no", variant: "outline" as const }
      ]
    },
    help: {
      title: "Scope of External Help",
      description: "Do you need external emergency services?",
      options: [
        { label: "Yes - Call for Help", value: "call", variant: "destructive" as const },
        { label: "No - Handle Internally", value: "internal", variant: "secondary" as const }
      ]
    }
  };

  const handleStepChange = (value: string) => {
    if (currentStep === 'emergency') {
      if (value === 'yes') {
        setCurrentStep('help');
      } else {
        setCurrentStep('training');
      }
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Emergency Decision Flow
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Quick decision tree to guide you through emergency situations and appropriate responses
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Decision Flow */}
            <div className="space-y-6">
              {currentStep === 'emergency' && (
                <Card className="p-8 border-2 border-warning">
                  <div className="text-center">
                    <AlertTriangle className="w-16 h-16 text-warning mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-4">{steps.emergency.title}</h3>
                    <p className="text-muted-foreground mb-6">{steps.emergency.description}</p>
                    <div className="flex gap-4 justify-center">
                      {steps.emergency.options.map((option) => (
                        <Button
                          key={option.value}
                          variant={option.variant}
                          size="lg"
                          onClick={() => handleStepChange(option.value)}
                          className="px-8"
                        >
                          {option.label}
                        </Button>
                      ))}
                    </div>
                  </div>
                </Card>
              )}

              {currentStep === 'help' && (
                <Card className="p-8 border-2 border-danger">
                  <div className="text-center">
                    <Phone className="w-16 h-16 text-danger mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-4">{steps.help.title}</h3>
                    <p className="text-muted-foreground mb-6">{steps.help.description}</p>
                    <div className="space-y-4">
                      <Button variant="destructive" size="lg" className="w-full">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Emergency Services (112)
                      </Button>
                      <Button variant="secondary" size="lg" className="w-full">
                        Next Best Action (NBA)
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </Card>
              )}

              {currentStep === 'training' && (
                <Card className="p-8 border-2 border-secondary">
                  <div className="text-center">
                    <Users className="w-16 h-16 text-secondary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-4">Practice Mode</h3>
                    <p className="text-muted-foreground mb-6">
                      Perfect time to practice your emergency preparedness skills
                    </p>
                    <Button variant="secondary" size="lg" className="w-full">
                      Start Training Module
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </Card>
              )}

              <Button 
                variant="outline" 
                onClick={() => setCurrentStep('emergency')}
                className="w-full"
              >
                Reset Decision Flow
              </Button>
            </div>

            {/* Information Panel */}
            <div className="space-y-6">
              <Card className="p-6 bg-secondary/10 border-secondary/20">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-8 h-8 text-secondary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Past Drill Details</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• Last drill: Fire evacuation (March 15, 2024)</p>
                      <p>• Participation: 87% (435/500 students)</p>
                      <p>• Average response time: 3.2 minutes</p>
                      <p>• Success rate: 94%</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-primary/10 border-primary/20">
                <div className="flex items-start space-x-4">
                  <AlertTriangle className="w-8 h-8 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Upcoming Drills</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• Earthquake drill - April 5, 2024 at 10:30 AM</p>
                      <p>• Flood evacuation - April 20, 2024 at 2:00 PM</p>
                      <p>• Fire safety - May 10, 2024 at 11:00 AM</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-warning/10 border-warning/20">
                <div className="flex items-start space-x-4">
                  <Users className="w-8 h-8 text-warning mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Important Information</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• Emergency assembly point: Main playground</p>
                      <p>• Emergency contact: +91-9876543210</p>
                      <p>• Medical team: Available 24/7 in medical room</p>
                      <p>• Fire extinguishers: Located on every floor</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};