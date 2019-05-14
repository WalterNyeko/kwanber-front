export const testTitle = [
  "Name",
  "Email",
  "Address",
  "Contacts",
  "Age",
  "Gender",
  "Actions"
];

export const schoolsTitle = [
  "#",
  "Category",
  "Name",
  "Address",
  "Boarding",
  "Mixed",
  "District",
  "Actions"
];
export const viewTableSchools = [
  {
    name: "id",
    label: "#",
    options: {
      filter: false,
      sort: true
    }
  },
  {
    name: "boarding",
    label: "Boarding",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "category_id",
    label: "Category",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "address",
    label: "Address",
    options: {
      filter: false,
      sort: false
    }
  },
  {
    name: "mixed",
    label: "Mixed",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "name",
    label: "Name",
    options: {
      filter: false,
      sort: false
    }
  },
  {
    name: "district",
    label: "District",
    options: {
      filter: true,
      sort: false
    }
  }
];

export const defaultTitles = [
  {
    name: "name",
    label: "Name",
    options: {
      filter: false,
      sort: true
    }
  },
  {
    name: "email",
    label: "Email",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "address",
    label: "Address",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "contact",
    label: "Contacts",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "age",
    label: "Age",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "gender",
    label: "Gender",
    options: {
      filter: true,
      sort: false
    }
  }
];
