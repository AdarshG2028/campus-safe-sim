import { Shield, Menu, Users, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export const Header = () => {
  const navigate = useNavigate()

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-hero p-2 rounded-xl shadow-emergency">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">CampusSafe</h1>
              <p className="text-sm text-muted-foreground">Disaster Preparedness Platform</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a href="#simulations" className="text-foreground hover:text-primary transition-colors">
              Simulations
            </a>
            <a href="#resources" className="text-foreground hover:text-primary transition-colors">
              Resources
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
          </nav>

          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              className="hidden sm:flex"
              onClick={() => navigate("/login")}
            >
              <Users className="w-4 h-4 mr-2" />
              Login
            </Button>
            <Button className="bg-gradient-hero hover:opacity-90 transition-all shadow-emergency">
              <BarChart3 className="w-4 h-4 mr-2" />
              Admin Dashboard
            </Button>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
