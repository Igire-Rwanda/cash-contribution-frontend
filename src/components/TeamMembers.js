import React from "react";

const TeamMembers = () => {
  return (
    <div className="flex flex-col justify-center h-full">
      <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
        <header className="flex px-5 py-4 border-b border-gray-100">
          <h2 className="font-semibold text-gray-800">Team Members</h2>
          {/* <div className="flex text-center mx-auto">
                <button
                type="button"
                 className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-200 focus:outline-none focus:shadow-outline">Add member</button>
                
                <button
                type="button"
                 className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-200 focus:outline-none focus:shadow-outline">Dlete member</button>
                </div> */}
        </header>
        <div className="p-3">
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                <tr>
                  <th className="flex space-x  p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Profile</div>
                    <div className="px-12 font-semibold text-left">
                      Names
                    </div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Member Id</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Amount</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">Phone</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">Action</div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-100">
                <tr>
                  <td className="p-2 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                        <img
                          className="rounded-full"
                          src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                          width="40"
                          height="40"
                          alt="Alex Shatov"
                        />
                      </div>
                      <div className="text-lg font-medium text-gray-800">
                        Alex mutabaruka
                      </div>
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-left">1199567899</div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-left font-medium text-gray-800">
                      25000rfw
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className=" text-center">0785555893</div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="flex text-center mx-auto">
                      <button
                        type="button"
                        class="border border-teal-500 bg-emerald-900 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:border-teal-500 hover:bg-white hover:text-teal-600 focus:outline-none focus:shadow-outline"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        class="border bg-red-600 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:border-red-600 hover:text-red-600 hover:bg-white focus:outline-none focus:shadow-outline"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                        <img
                          className="rounded-full"
                          src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-06.jpg"
                          width="40"
                          height="40"
                          alt="Philip Harbach"
                        />
                      </div>
                      <div className="text-lg font-medium text-gray-800">
                        Philip Mukundwa
                      </div>
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-left">1195678356</div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-left font-medium text-gray-800">
                      25000rfw
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className=" text-center">0789999654</div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="flex text-center mx-auto">
                      <button
                        type="button"
                        class="border border-teal-500 bg-emerald-900 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:border-teal-500 hover:bg-white hover:text-teal-600 focus:outline-none focus:shadow-outline"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        class="border bg-red-600 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:border-red-600 hover:text-red-600 hover:bg-white focus:outline-none focus:shadow-outline"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                        <img
                          className="rounded-full"
                          src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-07.jpg"
                          width="40"
                          height="40"
                          alt="Mirko Fisuk"
                        />
                      </div>
                      <div className="text-lg font-medium text-gray-800">
                        Mirko Gashumba
                      </div>
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-left">1178905644</div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-left font-medium text-gray-800">
                      25000rfw
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-center">0781006762</div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="flex text-center mx-auto">
                      <button
                        type="button"
                        class="border border-teal-500 bg-emerald-900 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:border-teal-500 hover:bg-white hover:text-teal-600 focus:outline-none focus:shadow-outline"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        class="border  bg-red-600 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:border-red-600 hover:text-red-600 hover:bg-white focus:outline-none focus:shadow-outline"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                        <img
                          className="rounded-full"
                          src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-08.jpg"
                          width="40"
                          height="40"
                          alt="Olga Semklo"
                        />
                      </div>
                      <div className="text-lg font-medium text-gray-800">
                        Olga kabatesi
                      </div>
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-left">1199567809</div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-left font-medium text-gray-800">
                      25000rfw
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-center">0783046579</div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="flex text-center mx-auto">
                      <button
                        type="button"
                        class="border border-teal-500 bg-emerald-900 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:border-teal-500 hover:bg-white hover:text-teal-600 focus:outline-none focus:shadow-outline"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        class="border bg-red-600 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:border-red-600 hover:text-red-600 hover:bg-white focus:outline-none focus:shadow-outline"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                        <img
                          className="rounded-full"
                          src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-09.jpg"
                          width="40"
                          height="40"
                          alt="Burak Long"
                        />
                      </div>
                      <div className="text-lg font-medium text-gray-800">
                        Burakari charles
                      </div>
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-left">1199456787</div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-left font-medium text-gray-800">
                      25000rfw
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-center">0786464326</div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="flex text-center mx-auto">
                      <button
                        type="button"
                        class="border border-teal-500 bg-emerald-900 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:border-teal-500 hover:bg-white hover:text-teal-600 focus:outline-none focus:shadow-outline"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        class="border bg-red-600 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:border-red-600 hover:text-red-600 hover:bg-white focus:outline-none focus:shadow-outline"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
