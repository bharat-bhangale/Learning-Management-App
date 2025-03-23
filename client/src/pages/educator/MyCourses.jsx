import React, { useEffect } from "react";
import { assets } from "../../assets/assets";
import { useSelector, useDispatch } from "react-redux";
import { setAllCourse } from "../../redux/features/AllCourseSlice";

const MyCourses = () => {
  const currency = import.meta.env.VITE_CURRENCY;
  const dispatch = useDispatch();

  const { allCourse } = useSelector((state) => state.allCourse);

  useEffect(() => {
    dispatch(setAllCourse());
  }, [dispatch]);

  return allCourse ? (
    <div className="h-full mb-10 flex flex-col items-start justify-between md:p-8 md:pb-0 p-4 pt-8 pb-0">
      <div className="w-full">
        <h2 className=" pb-4 text-lg font-medium">My Courses</h2>
        <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
          <table className="md:table-auto table-fixed w-full overflow-hidden">
            <thead className="text-gray-900 border-b border-gray-500/20 text-sm text-left">
              <tr>
                <th className="px-4 py-3 font-semibold truncate">
                  All Courses
                </th>
                <th className="px-4 py-3 font-semibold truncate">Earnings</th>
                <th className="px-4 py-3 font-semibold truncate">Students</th>
                <th className="px-4 py-3 font-semibold truncate">
                  Published On
                </th>
              </tr>
            </thead>

            <tbody className="text-sm text-gray-500">
              {allCourse.map((course) => (
                <tr key={course._id} className="border-b border-gray-500/20 ">
                  <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 truncate">
                    <img
                      src={course.courseThumbnail}
                      alt="CoureImage"
                      className="w-16"
                    />
                    <span className="truncate hidden md:block">
                      {course.courseTitle}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    {currency}{" "}
                    {Math.floor(
                      course.enrolledStudents.length *
                      (course.coursePrice -
                        (course.discount * course.coursePrice) / 100)
                    )}
                  </td>

                  <td className="px-4 py-3">
                    {course.enrolledStudents?.length}
                  </td>
                  <td className="px-4 py-3">
                    {new Date(course.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center h-screen">
      <p className="text-lg text-gray-500">Loading...</p>
    </div>
  );
};

export default MyCourses;
