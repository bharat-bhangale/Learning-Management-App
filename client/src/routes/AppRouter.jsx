import React from "react";
import Home from "../pages/student/Home";
import CourseList from "../pages/student/CoursesList";
import CourseDetails from "../pages/student/CourseDetails";
import MyEnrollments from "../pages/student/MyEnrollments";
import Player from "../pages/student/Player";
import Loading from "../components/student/Loading";
import Educator from "../pages/educator/Educator";
import Dashboard from "../pages/educator/Dashboard";
import AddCourse from "../pages/educator/AddCourse";
import MyCourses from "../pages/educator/MyCourses";
import StudentEnrolled from "../pages/educator/StudentEnrolled";

export const routes = [
    {
        label: "Home Page",
        name: "home",
        path: "/",
        element: <Home />,
    },
    {
        label: "Course List",
        name: "courseList",
        path: "/course-list",
        element: <CourseList />,
    },
    {
        label: "Course List With Input",
        name: "courseListWithInput",
        path: "/course-list/:input",
        element: <CourseList />,
    },
    {
        label: "Course Details",
        name: "courseDetails",
        path: "/course/:id",
        element: <CourseDetails />,
    },
    {
        label: "My Enrollments",
        name: "myEnrollments",
        path: "/my-enrollments",
        element: <MyEnrollments />,
    },
    {
        label: "Player",
        name: "player",
        path: "/player/:courseId",
        element: <Player />,
    },
    {
        label: "Loading",
        name: "loading",
        path: "/loading/:path",
        element: <Loading />,
    },
    {
        label: "Educator Home",
        name: "educator",
        path: "/educator",
        element: <Educator />,
    },
    {
        label: "Educator Dashboard",
        name: "dashboard",
        path: "/educator/dashboard",
        element: <Dashboard />,
    },
    {
        label: "Add Course",
        name: "addCourse",
        path: "/educator/add-course",
        element: <AddCourse />,
    },
    {
        label: "My Courses",
        name: "myCourses",
        path: "/educator/my-courses",
        element: <MyCourses />,
    },
    {
        label: "Student Enrolled",
        name: "studentEnrolled",
        path: "/educator/student-enrolled",
        element: <StudentEnrolled />,
    },
];
