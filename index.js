const contacts = require("./contacts");
const argv = require("yargs").argv;

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case "list":
            const contactsList = await contacts.listContacts();
            console.log(contactsList);
            break;
        case "getById":
            const contact = await contacts.getContactById(id);
            console.log(contact);
            break;
        case "addContact":
            const newContact = await contacts.addContact(name, email, phone);
            console.log(newContact);
            break;
        case "removeContact":
            const removeContact = await contacts.removeContact(id);
            console.log(removeContact);
            break;

        default:
            console.warn("\x1B[31m Unknown action type!");
    }
};

invokeAction(argv);
