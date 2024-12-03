import { HiOutlineMail } from "react-icons/hi";
import { RiMessengerLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const data = [
  {
    id: 1,
    icon: <HiOutlineMail />,
    link: "mailto:anishmachamasi2262@gmail.com",
  },
  {
    id: 2,
    icon: <RiMessengerLine />,
    link: "https://www.messenger.com/t/2106720939349261",
  },
  { id: 3, icon: <FaWhatsapp />, link: "https://wa.me/+9779860116983" },
  {
    id: 4,
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/anish-machamasi-224220219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
];

// alternative whatsApp link
// https://wa.me/yournumber
// https://api.whatsapp.com/send/?phone=%2B233557097546

export default data;
