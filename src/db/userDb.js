class UserDb {
  isTargetContains = (search, target) => {
    return target.toLowerCase().includes(search.toLowerCase());
  };

  getUsers = ({ search, order, limit, page }) => {
    const employeeDBStorage = localStorage.getItem("data");

    let result = [];
    let count = 0;
    let pages = 0;
    if (employeeDBStorage) {
      let employeeDB = JSON.parse(employeeDBStorage);

      employeeDB = employeeDB.data.map((item, idx) => {
        return {
          NameSurname: item[0],
          Company: item[1],
          Email: item[2],
          Date: item[3],
          Country: item[4],
          City: item[5],
        };
      });

      result = employeeDB;
      if (search !== undefined) {
        result = result.filter((employee) =>
          this.isTargetContains(search, employee.NameSurname)
        );
      }
      count = result.length;
      if (order !== undefined) {
        result = result.filter((employee) =>
          this.isTargetContains(search, employee.NameSurname)
        );
        this.orderBy(result, order);
      }

      if (limit !== undefined && page !== undefined) {
        pages = Math.ceil(count / limit);
        result = result.slice((page - 1) * limit, (page - 1) * limit + limit);
      }
    }

    return { data: result, count, pages };
  };
  orderBy = (data, order) => {
    switch (order) {
      case "name-asc":
        return data.sort((a, b) =>
          a.NameSurname > b.NameSurname
            ? 1
            : b.NameSurname > a.NameSurname
            ? -1
            : 0
        );
      case "name-desc":
        return data
          .sort((a, b) =>
            a.NameSurname > b.NameSurname
              ? 1
              : b.NameSurname > a.NameSurname
              ? -1
              : 0
          )
          .reverse();
      case "year-asc":
        return data.sort((a, b) =>
          a.Date.split("/")[a.Date.split("/").length - 1] >
          b.Date.split("/")[b.Date.split("/").length - 1]
            ? 1
            : b.Date.split("/")[b.Date.split("/").length - 1] >
              a.Date.split("/")[a.Date.split("/").length - 1]
            ? -1
            : 0
        );
      case "year-desc":
        return data
          .sort((a, b) =>
            a.Date.split("/")[a.Date.split("/").length - 1] >
            b.Date.split("/")[b.Date.split("/").length - 1]
              ? 1
              : b.Date.split("/")[b.Date.split("/").length - 1] >
                a.Date.split("/")[a.Date.split("/").length - 1]
              ? -1
              : 0
          )
          .reverse();
    }
  };
  addUser = (values) => {
    const employeeDBStorage = localStorage.getItem("data");
    let employeeDB = JSON.parse(employeeDBStorage);

    employeeDB.data.push([
      values.NameSurname,
      values.Company,
      values.Email,
      values.Date,
      values.Country,
      values.City,
    ]);
    localStorage.setItem("data", JSON.stringify(employeeDB));
  };
}

const apiService = new UserDb();

export default apiService;
