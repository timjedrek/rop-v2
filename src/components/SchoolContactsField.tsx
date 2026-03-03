"use client";

import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";

type Contact = {
  name: string;
  title: string;
  phone: string;
  email: string;
};

const emptyContact = (): Contact => ({ name: "", title: "", phone: "", email: "" });

const inputClass =
  "w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600";

export function SchoolContactsField() {
  const [contacts, setContacts] = useState<Contact[]>([emptyContact()]);

  const update = (index: number, field: keyof Contact, value: string) =>
    setContacts((prev) =>
      prev.map((c, i) => (i === index ? { ...c, [field]: value } : c))
    );

  const addContact = () => setContacts((prev) => [...prev, emptyContact()]);

  const removeContact = (index: number) =>
    setContacts((prev) => prev.filter((_, i) => i !== index));

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">
          Contacts
        </h2>
        <button
          type="button"
          onClick={addContact}
          className="flex items-center gap-1 text-sm font-semibold text-blue-700 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition"
        >
          <Plus className="w-4 h-4" />
          Add Contact
        </button>
      </div>

      {contacts.map((contact, index) => (
        <div
          key={index}
          className="border border-slate-200 dark:border-slate-700 rounded-lg p-4 space-y-4"
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">
              Contact {index + 1}
            </span>
            {contacts.length > 1 && (
              <button
                type="button"
                onClick={() => removeContact(index)}
                className="text-rose-600 hover:text-rose-700 transition"
                aria-label="Remove contact"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Name
              </label>
              <input
                type="text"
                name={`contacts[${index}][name]`}
                value={contact.name}
                onChange={(e) => update(index, "name", e.target.value)}
                placeholder="Jane Smith"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Title / Role
              </label>
              <input
                type="text"
                name={`contacts[${index}][title]`}
                value={contact.title}
                onChange={(e) => update(index, "title", e.target.value)}
                placeholder="Chief Flight Instructor"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Phone
              </label>
              <input
                type="tel"
                name={`contacts[${index}][phone]`}
                value={contact.phone}
                onChange={(e) => update(index, "phone", e.target.value)}
                placeholder="(555) 000-0000"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Email
              </label>
              <input
                type="email"
                name={`contacts[${index}][email]`}
                value={contact.email}
                onChange={(e) => update(index, "email", e.target.value)}
                placeholder="jane@yourschool.com"
                className={inputClass}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
