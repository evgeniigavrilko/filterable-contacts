const contacts = [
  { name: "Anna", surname: "Ivanova", city: "Moscow", phone: "+7 (123) 456-7890" },
  { name: "Alexey", surname: "Petrov", city: "St. Petersburg", phone: "+7 (987) 654-3210" },
  { name: "Alina", surname: "Sidorova", city: "Novosibirsk", phone: "+7 (111) 222-3333" },
  { name: "Benjamin", surname: "Smith", city: "New York", phone: "+1 (555) 123-4567" },
  { name: "Bella", surname: "Johnson", city: "Los Angeles", phone: "+1 (555) 987-6543" },
  { name: "Charlie", surname: "Williams", city: "London", phone: "+44 20 1234 5678" },
  { name: "Chloe", surname: "Brown", city: "Toronto", phone: "+1 (416) 555-7890" },
  { name: "Daniel", surname: "Miller", city: "Berlin", phone: "+49 30 8765 4321" },
  { name: "Emma", surname: "Jones", city: "Sydney", phone: "+61 2 9876 5432" },
  { name: "Ethan", surname: "Davis", city: "Paris", phone: "+33 1 2345 6789" },
  { name: "Freya", surname: "Taylor", city: "Manchester", phone: "+44 161 876 5432" },
  { name: "Finn", surname: "Clark", city: "Dublin", phone: "+353 1 123 4567" },
  { name: "Grace", surname: "Wilson", city: "Melbourne", phone: "+61 3 8765 4321" },
  { name: "George", surname: "Harris", city: "Vancouver", phone: "+1 (604) 555-7890" },
  { name: "Hannah", surname: "Evans", city: "Edinburgh", phone: "+44 131 987 6543" },
  { name: "Henry", surname: "Turner", city: "Madrid", phone: "+34 91 234 5678" },
  { name: "Isabella", surname: "Lee", city: "Seoul", phone: "+82 2 9876 5432" },
  { name: "Isaac", surname: "Moore", city: "Tokyo", phone: "+81 3 8765 4321" },
  { name: "Julia", surname: "White", city: "Cape Town", phone: "+27 21 123 4567" },
  { name: "Jack", surname: "Morgan", city: "Toronto", phone: "+1 (416) 555-7890" },
  { name: "Jacob", surname: "Baker", city: "Berlin", phone: "+49 30 8765 4321" },
  { name: "Katherine", surname: "Scott", city: "Chicago", phone: "+1 (312) 555-6789" },
  { name: "Leo", surname: "Adams", city: "San Francisco", phone: "+1 (415) 555-0123" },
  { name: "Lily", surname: "Martin", city: "Toronto", phone: "+1 (416) 555-2345" },
  { name: "Mason", surname: "Hall", city: "Sydney", phone: "+61 2 8765 4321" },
  { name: "Mia", surname: "Ward", city: "London", phone: "+44 20 5678 9012" },
  { name: "Nathan", surname: "Lewis", city: "Berlin", phone: "+49 30 3456 7890" },
  { name: "Nora", surname: "Fisher", city: "Paris", phone: "+33 1 6789 0123" },
  { name: "Oliver", surname: "Roberts", city: "New York", phone: "+1 (555) 234-5678" },
  { name: "Olivia", surname: "Cooper", city: "Los Angeles", phone: "+1 (555) 345-6789" },
  { name: "Parker", surname: "Reed", city: "Melbourne", phone: "+61 3 9876 5432" },
  { name: "Penelope", surname: "Wright", city: "Vancouver", phone: "+1 (604) 555-7890" },
  { name: "Quinn", surname: "Turner", city: "Toronto", phone: "+1 (416) 555-1234" },
  { name: "Riley", surname: "Lopez", city: "Berlin", phone: "+49 30 8765 4321" },
  { name: "Ryan", surname: "Barnes", city: "Paris", phone: "+33 1 2345 6789" },
  { name: "Sophia", surname: "Hill", city: "Madrid", phone: "+34 91 8765 4321" },
  { name: "Samuel", surname: "Bell", city: "Sydney", phone: "+61 2 9876 5432" },
  { name: "Sofia", surname: "Gray", city: "Toronto", phone: "+1 (416) 555-7890" },
  { name: "Tyler", surname: "Ward", city: "Berlin", phone: "+49 30 8765 4321" },
  { name: "Victoria", surname: "Reyes", city: "London", phone: "+44 20 1234 5678" },
  { name: "William", surname: "Turner", city: "New York", phone: "+1 (555) 678-9012" },
  { name: "Zoe", surname: "Fisher", city: "Los Angeles", phone: "+1 (555) 890-1234" },
];

function displayContacts(filteredContacts = contacts) {
  const tableBody = document.getElementById("contacts-body");
  tableBody.innerHTML = "";

  let currentLetter = "";

  filteredContacts.forEach(contact => {
    const firstLetter = contact.name[0].toUpperCase();

    if (firstLetter !== currentLetter) {
      const separatorRow = tableBody.insertRow();
      const separatorCell = separatorRow.insertCell();
      separatorCell.colSpan = 4;
      separatorCell.className = "alphabet__separator";
      separatorCell.textContent = firstLetter;
      currentLetter = firstLetter;
    }

    const row = tableBody.insertRow();
    row.insertCell().textContent = contact.name;
    row.insertCell().textContent = contact.surname;
    row.insertCell().textContent = contact.city;
    row.insertCell().textContent = contact.phone;
  });
}

function searchContacts() {
  const searchTerm = document.getElementById("search-input").value.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm) ||
    contact.surname.toLowerCase().includes(searchTerm) ||
    contact.city.toLowerCase().includes(searchTerm) ||
    contact.phone.includes(searchTerm)
  );

  displayContacts(filteredContacts);
}

document.getElementById("search-input").addEventListener("input", searchContacts);

function sortTable(columnIndex) {
  const headers = document.getElementsByTagName("th");

  for (let i = 0; i < headers.length; i++) {
    headers[i].classList.remove("active");
  }

  headers[columnIndex].classList.add("active");

  contacts.sort((a, b) => {
    const colA = a[Object.keys(a)[columnIndex]].toLowerCase();
    const colB = b[Object.keys(b)[columnIndex]].toLowerCase();
    return colA.localeCompare(colB);
  });

  displayContacts();
}

document.addEventListener("DOMContentLoaded", () => {
  displayContacts();
});