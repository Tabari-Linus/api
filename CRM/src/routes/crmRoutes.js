import { addNewContact, getContacts , getContactsWithId, updateContact, deleteContact} from "../controllers/crmController"

const routes = (app)=>{
    app.route('/contact')

    //gets alll contacts
    .get((req, res, next)=>{
        //middleware
        console.log(`Request from ${req.originalUrl}`)
        console.log(`What is the request type: ${req.method}`)
        next();
    }, getContacts)
    // creates a contact 
    .post(addNewContact)
    app.route('/contact/:contactId')
    //get specifi contact 
    .get(getContactsWithId)

    // update a contact by id param
    .put(updateContact) 

    // delete contact by id
    .delete(deleteContact)
    .patch((req, res)=>{
        res.send('PATCH request successfful!')
    })
}

export default routes