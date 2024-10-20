const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="m-6">
        <h1 className="text-4xl font-bold text-blue-600">
          Loan Management System
        </h1>
      </div>
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-700">need loan Mangement? visit us us</h2>
        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-200">Click Here</button>
        <p className="mt-3 text-gray-600">
          A loan management system is a technological solution that helps banks
          manage their loans efficiently. Automation of loan servicing ensures
          that banks are able to manage your loans and avoid any problems that
          may arise. Loan automation brings the entire team on the same page
          with regard to the status of the loan. Who needs loan management
          software? What are the features to look for? We will go over all these
          details and the benefits of a loan management system
        </p>
      </div>
      <div>
        <img className="w-full max-w-md shadow-lg"
          src="https://bsmedia.business-standard.com/_media/bs/img/article/2024-03/18/full/1710746175-2222.jpg?im=FeatureCrop,size=(826,465)"
          alt="Loan shark"
        ></img>
      </div>
    </div>
  );
};

export default HomePage;
