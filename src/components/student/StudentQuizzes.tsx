import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Clock, Trophy, PlayCircle } from "lucide-react";
import { QuizAssessment } from "@/components/QuizAssessment";

export const StudentQuizzes = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  const availableQuizzes = [
    { title: "Fire Safety Basics", questions: 15, duration: "10 mins", difficulty: "Beginner", completed: false, score: null },
    { title: "Earthquake Response", questions: 20, duration: "15 mins", difficulty: "Intermediate", completed: true, score: 88 },
    { title: "First Aid Emergency", questions: 25, duration: "20 mins", difficulty: "Advanced", completed: false, score: null },
    { title: "Chemical Safety", questions: 18, duration: "12 mins", difficulty: "Intermediate", completed: true, score: 92 },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-secondary text-secondary-foreground";
      case "Intermediate": return "bg-warning text-warning-foreground";
      case "Advanced": return "bg-danger text-danger-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getScoreColor = (score: number | null) => {
    if (!score) return "text-muted-foreground";
    if (score >= 85) return "text-secondary";
    if (score >= 75) return "text-warning";
    return "text-danger";
  };

  if (showQuiz) {
    return <QuizAssessment onBack={() => setShowQuiz(false)} />;
  }

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <BookOpen className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-bold text-foreground">Safety Quizzes</h2>
      </div>
        
      <div className="space-y-4 mb-6">
        {availableQuizzes.map((quiz, index) => (
          <div key={index} className="p-4 border border-border rounded-lg bg-card">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-semibold text-foreground mb-1">{quiz.title}</h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{quiz.questions} questions</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{quiz.duration}</span>
                  </div>
                </div>
              </div>
              <Badge className={getDifficultyColor(quiz.difficulty)}>{quiz.difficulty}</Badge>
            </div>

            <div className="flex items-center justify-between gap-2">
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90"
                onClick={() => setShowQuiz(true)}
              >
                <PlayCircle className="w-4 h-4 mr-2" />
                Take Quiz
              </Button>

              {quiz.title === "Earthquake Response" && (
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => window.open("https://earthquake-guard-5139d666.base44.app/Game", "_blank")}
                  >
                    Simulation 1
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => window.open("https://shake-safe-kids-70b09786.base44.app", "_blank")}
                  >
                    Simulation 2
                  </Button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 bg-muted rounded-lg">
        <h3 className="font-semibold text-foreground mb-3">Your Progress</h3>
        <div className="grid grid-cols-2 gap-4 mb-3">
          <div className="text-center">
            <div className="text-2xl font-bold text-secondary">2/4</div>
            <div className="text-sm text-muted-foreground">Quizzes Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">90%</div>
            <div className="text-sm text-muted-foreground">Average Score</div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Overall Progress</span>
            <span className="font-medium text-foreground">50%</span>
          </div>
          <Progress value={50} className="h-2" />
        </div>
      </div>
    </Card>
  );
};
