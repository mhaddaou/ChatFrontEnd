/* eslint-disable @next/next/no-img-element */

const ContactList = () => {
  return (
    <div>
      <h2 className="text-lg font-medium mb-4">Contacts</h2>
      <ul>
        <li className="flex items-center py-2">
          <img
            className="w-8 h-8 rounded-full mr-3"
            src="https://via.placeholder.com/48"
            alt="Avatar"
          />
          <div className="flex-1">
            <h3 className="text-gray-900 font-medium">John Doe</h3>
            <p className="text-gray-600 text-sm">Hi there!</p>
          </div>
        </li>
        <li className="flex items-center py-2">
          <img
            className="w-8 h-8 rounded-full mr-3"
            src="https://via.placeholder.com/48"
            alt="Avatar"
          />
          <div className="flex-1">
            <h3 className="text-gray-900 font-medium">Jane Smith</h3>
            <p className="text-gray-600 text-sm">How are you?</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ContactList;
