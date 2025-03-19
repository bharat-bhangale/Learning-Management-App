import React, { useEffect } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { setIsEducator } from "../../redux/features/AllCourseSlice";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
    const isCourseListPage = location.pathname.includes("/course-list");

    const dispatch = useDispatch();
    const { openSignIn } = useClerk();
    const { user } = useUser();
    const navigate = useNavigate();

    const { isEducator } = useSelector((state) => state.allCourse);

    useEffect(() => {
        dispatch(setIsEducator(true));
    }, [dispatch]);

    return (
        <div
            className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-3 ${isCourseListPage ? "bg-white" : "bg-cyan-100/70"
                } `}
        >
            <img
                src={assets.logo}
                alt="Logo"
                className="w-28 lg:w-32  cursor-pointer"
                onClick={() => navigate("/")}
            />
            <div className="hidden md:flex items-center gap-5 text-gray-500">
                <div className="flex items-center gap-5">
                    {user && (
                        <>
                            <button onClick={() => navigate("/educator")}>
                                {isEducator ? "Educator Dashboard" : "Become Educator"}
                            </button>{" "}
                            | <Link to="/my-enrollments">My Enrollments</Link>
                        </>
                    )}
                </div>

                {user ? (
                    <UserButton />
                ) : (
                    <button
                        className="bg-blue-600 text-white px-5 py-2 rounded-full cursor-pointer"
                        onClick={() => openSignIn()}
                    >
                        Create Account
                    </button>
                )}
            </div>

            {/* For Phone Screens */}
            <div className="md:hidden flex items-center gap-2 sm:gap-5 text-gray-500">
                <div className="flex items-center gap-1 sm:gap-2 max:sm:text-xs cursor-pointer">
                    {user && (
                        <>
                            <button onClick={() => navigate("/educator")}>
                                {isEducator ? "Educator Dashboard" : "Become Educator"}
                            </button>{" "}
                            |<Link to="/my-enrollments">My Enrollments</Link>
                        </>
                    )}
                </div>
                {user ? (
                    <UserButton />
                ) : (
                    <button onClick={() => openSignIn()} className="cursor-pointer">
                        <img src={assets.user_icon} alt="" />
                    </button>
                )}
            </div>
        </div>
    );
};

export default Navbar;
