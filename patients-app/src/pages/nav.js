import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav>
        <p> Приложение для пациентов </p>
        <ul>
          <li>
            <Link to="/">Доктора</Link>
          </li>
          <li>
            <Link to="/clinics">Клиники</Link>
          </li>
          <li>
            <Link to="/contacts">Контакты</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
