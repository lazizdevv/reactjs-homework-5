export const Home = () => {
  return (
    <div className="container bg-gray-100  flex items-center justify-center  ">
      <div className=" bg-white p-8 rounded-lg shadow-xl">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Welcome to My Website
        </h1>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget
          justo nec nisi fermentum ultricies.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 ">
          <div>
            <h2 className="text-2xl font-bold mb-4">About Us</h2>
            <p className="text-lg text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod auctor arcu, vel interdum neque dignissim ac. Nullam
              convallis leo vitae varius tempor. Phasellus pharetra, risus sed
              finibus interdum, lorem turpis pretium lorem, vel sollicitudin
              nulla lectus nec est.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Services</h2>
            <ul className="text-lg text-gray-700">
              <li>Service 1</li>
              <li>Service 2</li>
              <li>Service 3</li>
              <li>Service 4</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-md shadow-md">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
