import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

type Page = "dashboard" | "drills" | "users" | "analytics";

const studentData = [
  { id: 1, name: "John Doe", email: "john@example.com", status: "Verified" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Pending" },
  { id: 3, name: "Ravi Kumar", email: "ravi@example.com", status: "Verified" },
  { id: 4, name: "Ananya Gupta", email: "ananya@example.com", status: "Verified" },
  { id: 5, name: "Carlos Mendez", email: "carlos@example.com", status: "Pending" },
  { id: 6, name: "Fatima Noor", email: "fatima@example.com", status: "Verified" },
  { id: 7, name: "Liam Johnson", email: "liam@example.com", status: "Pending" },
];

const drillData = [
  { id: 1, title: "Fire Drill", description: "Fire evacuation practice.", date: "2025-09-22" },
  { id: 2, title: "Earthquake Drill", description: "Earthquake safety protocol.", date: "2025-09-28" },
  { id: 3, title: "Flood Drill", description: "Flood emergency evacuation.", date: "2025-10-05" },
  { id: 4, title: "Lockdown Drill", description: "School security lockdown.", date: "2025-10-12" },
];

const usersData = [
  { id: 1, name: "Admin User", email: "admin@example.com", role: "Admin" },
  { id: 2, name: "Student One", email: "student1@example.com", role: "Student" },
  { id: 3, name: "Teacher One", email: "teacher1@example.com", role: "Teacher" },
  { id: 4, name: "Principal", email: "principal@example.com", role: "Admin" },
  { id: 5, name: "Student Two", email: "student2@example.com", role: "Student" },
];

const quizScores = [
  { name: "John", score: 3 },
  { name: "Jane", score: 4 },
  { name: "Ravi", score: 2 },
  { name: "Ananya", score: 1 },
  { name: "Carlos", score: 5 },
  { name: "Fatima", score: 4 },
  { name: "Liam", score: 3 },
];

const drillParticipation = [
  { name: "Fire Drill", value: 40 },
  { name: "Earthquake Drill", value: 30 },
  { name: "Flood Drill", value: 20 },
  { name: "Lockdown Drill", value: 15 },
  { name: "Other", value: 10 },
];

const COLORS = ["#3b82f6", "#22c55e", "#f59e0b", "#ef4444", "#8b5cf6"];

const AdminDashboard: React.FC = () => {
  const [page, setPage] = useState<Page>("dashboard");

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <aside className="bg-gradient-to-b from-blue-500 to-indigo-600 text-white shadow-md p-6">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
        <nav className="space-y-4">
          <button onClick={() => setPage("dashboard")} className="block hover:underline">
            Dashboard
          </button>
          <button onClick={() => setPage("drills")} className="block hover:underline">
            Drills
          </button>
          <button onClick={() => setPage("users")} className="block hover:underline">
            Users
          </button>
          <button onClick={() => setPage("analytics")} className="block hover:underline">
            Analytics
          </button>
        </nav>
      </aside>

      <div className="flex flex-col bg-gray-50">
        <main className="flex flex-1 flex-col gap-6 p-6">
          {page === "dashboard" && (
            <>
              <h1 className="text-3xl font-bold mb-4 text-blue-700">Admin Dashboard</h1>
              <Card className="border-l-4 border-blue-500 shadow">
                <CardHeader>
                  <CardTitle>Student Details</CardTitle>
                  <CardDescription>A list of all the students.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {studentData.map((student) => (
                        <TableRow key={student.id}>
                          <TableCell>{student.name}</TableCell>
                          <TableCell>{student.email}</TableCell>
                          <TableCell>
                            <Badge
                              className={
                                student.status === "Verified"
                                  ? "bg-green-500 text-white"
                                  : "bg-yellow-500 text-white"
                              }
                            >
                              {student.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button size="icon" variant="ghost">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                <DropdownMenuItem>Delete</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-indigo-500 shadow">
                <CardHeader>
                  <CardTitle>Add New Drill</CardTitle>
                  <CardDescription>Create a new emergency drill.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="grid gap-4">
                    <Input placeholder="Drill Name" className="border-blue-400" />
                    <Textarea placeholder="Drill Description" className="border-blue-400" />
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      Create Drill
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </>
          )}

          {page === "drills" && (
            <>
              <h1 className="text-3xl font-bold mb-4 text-indigo-700">Upcoming Drills</h1>
              {drillData.map((drill, idx) => (
                <Card key={drill.id} className={`mb-4 border-l-4 ${COLORS[idx % COLORS.length]} shadow`}>
                  <CardHeader>
                    <CardTitle>{drill.title}</CardTitle>
                    <CardDescription>{drill.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{drill.description}</p>
                  </CardContent>
                </Card>
              ))}
            </>
          )}

          {page === "users" && (
            <>
              <h1 className="text-3xl font-bold mb-4 text-green-700">Users</h1>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {usersData.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>
                        <Badge
                          className={
                            user.role === "Admin"
                              ? "bg-red-500 text-white"
                              : user.role === "Teacher"
                              ? "bg-blue-500 text-white"
                              : "bg-green-500 text-white"
                          }
                        >
                          {user.role}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </>
          )}

          {page === "analytics" && (
            <>
              <h1 className="text-3xl font-bold mb-6 text-purple-700">Analytics</h1>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="border-l-4 border-blue-500 shadow">
                  <CardHeader>
                    <CardTitle>Quiz Scores</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={quizScores}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="score" fill="#3b82f6" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-pink-500 shadow">
                  <CardHeader>
                    <CardTitle>Drill Participation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={drillParticipation}
                          cx="50%"
                          cy="50%"
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="value"
                          label
                        >
                          {drillParticipation.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
