import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <div className="border-b border-neutral pb-10">
      <h2 className="my-16 text-center text-4xl font-bold text-purple-500">Get In Touch</h2>
      <div className="text-center tracking-tight text-lg font-medium text-gray-700">
        <p className="my-4">{CONTACT.address}</p>
        {/* Uncomment the line below if you want to display the phone number */}
        {/* <p className="my-4">{CONTACT.phoneNo}</p> */}
        <a
          href={`mailto:${CONTACT.email}`}
          className="my-4 inline-block border-b-2 border-purple-300 text-purple-500 hover:border-purple-500 transition-colors duration-300"
        >
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
