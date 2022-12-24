const fs = require("fs").promises;
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const contactsPath = path.join(__dirname, "db", "contacts.json");

const listContacts = async () => {
    const result = await fs.readFile(contactsPath, "utf-8");
    return JSON.parse(result);
};

const getContactById = async (id) => {
    const contactId = String(id);
    const contacts = await listContacts();
    return contacts.filter((el) => el.id === contactId)[0] || null;
};

const removeContact = async (id) => {
    const contactId = String(id);
    const contacts = await listContacts();
    const index = contacts.findIndex((el) => el.id === contactId);
    if (index === -1) {
        return null;
    }
    const [result] = contacts.splice(index, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return result;
};

const addContact = async (name, email, phone) => {
    const contacts = await listContacts();
    const newContact = {
        id: uuidv4(),
        name,
        email,
        phone,
    };
    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return newContact;
};

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
};
