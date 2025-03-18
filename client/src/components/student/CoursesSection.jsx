import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CourseCard from "./CourseCard";
import { setAllCourse } from "../../redux/features/allCourseSlice";
import { useEffect } from "react";

const CoursesSection = () => {
  const dispatch = useDispatch();
  const { allCourse } = useSelector((state) => state.allCourse);

  useEffect(() => {
    dispatch(setAllCourse());
  }, [dispatch, allCourse]);

  return (
    <div className="py-16 md:px-40 px-8">
      <h2 className="text-3xl font-medium text-gray-800">
        Learn from the best
      </h2>
      <p className="text-sm md:text-base text-gray-500 mt-3">
        {" "}
        Discover our top-rated courses across various categories. From coding
        and design to <br /> business and wellness, our courses are crafted to
        deliver results.
      </p>

      {/* Courses Card */}
      <div className="grid grid-cols-auto px-4 md:px-0 md:my-16 my-10 gap-4">
        {allCourse.slice(0, 4).map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>

      <Link
        to={"/course-list"}
        onClick={() => scrollTo(0, 0)}
        className="text-gray-500 border border-gray-500/30 px-10 py-3 rounded"
      >
        Show all courses
      </Link>
    </div>
  );
};

export default CoursesSection;
