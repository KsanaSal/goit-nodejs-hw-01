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
// invokeAction({ action: "list" });
// invokeAction({ action: "getById", id: "1" });
// invokeAction({
//     action: "addContact",
//     name: "Ksana Salivon",
//     email: "oksana@mail.com",
//     phone: "(933) 914-3792",
// });
// invokeAction({
//     action: "removeContact",
//     id: "7adc0e42-0f51-477f-947b-7b6d2c051601",
// });
