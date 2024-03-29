import {AddAdminService} from "../../../domain/services/admin/addAdmin.service";
import {AddCourseService} from "../../../domain/services/course/addCourse.service";
import {Admin} from "../../../domain/models/admin.model";


export class AddAdminController {

    private addAdminService: AddAdminService;


    constructor(addAdminService: AddAdminService) {
        this.addAdminService = addAdminService;
    }

    async addAdmin(user: string, password: string, role: string): Promise<Admin>{
        return await this.addAdminService.register(new Admin(user,password,role));
    }
}