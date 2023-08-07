import Users from "../dao/dbManagers/users.js";
import Courses from "../dao/dbManagers/courses.js";

import UsersRepository from "./UserRepository.js";
import CoursesRepository from "./CoursesRepository.js";

const userDao = new Users();
const coursesDao = new Courses();

export const userService = new UsersRepository(userDao);
export const coursesService = new CoursesRepository(coursesDao);
