import { FaList, FaUsersLine } from "react-icons/fa6";

const navLinks = [
  {
    path: "/book-appointment",
    icon: <FaUsersLine  size={20}/>,
    display: "Book Appointment",
    role: "ROLE_USER"

  },

  {
    path: "/dashboard",
    icon: <FaList  size={20}/>,
    display: "My Appointments",
    role: "ROLE_USER"

  },
  {
    path: "/bookings",
    icon: "ri-taxi-line",
    display: "Booking",
  },
  {
    path: "/sell-car",
    icon: "ri-shopping-bag-line",
    display: "Sell Cars",
  },
  {
    path: "/settings",
    icon: "ri-settings-2-line",
    display: "Settings",
  },
];

export default navLinks;
