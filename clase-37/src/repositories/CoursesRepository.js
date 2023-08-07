

export default class CoursesRepository {
    constructor(dao){
        this.dao = dao;
    }

    getAllCourses = async () =>{
        return await this.dao.getAll();
    }

    createCourse = async (course) =>{
        return await this.dao.saveCourse(course);
    }

    update = async (id,course) =>{
        return await this.dao.updateCourse(id,course);
    }

    getCourseById = async (id) =>{
        return await this.dao.getById(id);
    }
}