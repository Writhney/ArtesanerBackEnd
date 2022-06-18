import { roles } from "../models";

class RolesController {
    constructor(){
        this.model = roles;
    }
    async getAll(request,response){
        try {
            const records = await this.model.findAll({
                //include : roles
            }   
            );
            return response.status(200).json(records);
            
        } catch (error) {
            return response.status(500).json({
                message: error.message
            });
        }
    }
}

module.exports = RolesController;