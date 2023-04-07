export default function Project() {
    return (
      <div>
        {/* Container */}
        <div  className="px-4 py-16 sm:px-6">
          {/* Project Container */}
          <div className="lg:grid grid-cols-2">
          <div className="h-64 sm:h-80 lg:h-screen py-16">
            <img
              alt="House"
              src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              className=" inset-0 h-full w-full object-cover "
            />
          </div>
          <div className="p-8 bg-gray-100 sm:p-16 lg:p-24 lg:relative">
            <span className="lg:h-screen bg-red-100 lg:absolute"></span>
            <h2 className="text-2xl pb-4 font-bold sm:text-3xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
              debitis.
            </h2>
            <p className="pb-8 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
              molestiae! Quidem est esse numquam odio deleniti, beatae, magni
              dolores provident quaerat totam eos, aperiam architecto eius quis
              quibusdam fugiat dicta.
            </p>
            <button className="bg-indigo-600 px-12 py-3 cursor-pointer text-sm text-white font-medium rounded hover:text-indigo-600 hover:bg-transparent hover:border-solid border border-indigo-600 ">
              Get in Touch
            </button>
          </div>
        </div>
        </div>
      </div>
    );
  }
  