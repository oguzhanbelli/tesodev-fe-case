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

      employeeDB = employeeDB.data.map((item) => {
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
    }
  };
}

const apiService = new UserDb();

export default apiService;