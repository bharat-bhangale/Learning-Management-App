import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CourseList from "./components/CourseList";
import CourseDetail from "./components/CourseDetail";
import MyEnrollments from "./components/MyEnrollments";
import Player from "./components/Player";
import Loading from "./components/Loading";
import Educator from "./components/Educator";
import Dashboard from "./components/Dashboard";
import AddCourse from "./components/AddCourse";
import MyCourses from "./components/MyCourses";
import StudentEnrolled from "./components/StudentEnrolled";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course-list" element={<CourseList />} />
        <Route path="/course-list/:input" element={<CourseList />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/my-enrollments" element={<MyEnrollments />} />
        <Route path="/player/:courseId" element={<Player />} />
        <Route path="/loading/:path" element={<Loading />} />
        <Route path="/educator" element={<Educator />} />
        <Route path="educator" element={<Dashboard />} />
        <Route path="add-course" element={<AddCourse />} />
        <Route path="my-courses" element={<MyCourses />} />
        <Route path="student-enrolled" element={<StudentEnrolled />} />
      </Routes>
    </div>
  );
};

export default App;
