import React from "react";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
const MembershipForm2 = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col">
        <div className="flex justify-center items-center px-16 py-11 w-full font-bold text-black border border-black border-solid bg-zinc-300 bg-opacity-20 max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 justify-between w-full max-w-[1351px] max-md:flex-wrap max-md:max-w-full">
            <div className="flex-auto text-4xl">Membership Application</div>
            <div className="flex gap-5 justify-between my-auto text-sm whitespace-nowrap">
              <a href="/" className="my-auto grow italic">home</a>
              <div className="my-auto py-0 text-xl">&gt;&gt;</div>
              <div className="grow italic my-auto">For Life Membership</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="left w-3/4">
          <h1 className="font-bold text-2xl ml-10 pl-[10%]">Applications Details: </h1>
          <p className="ml-12">you have selected for Lifemembership.</p>
          <p className="ml-12 mb-10">The price of membership is 88,500</p>
          <div className="flex ml-10 items-center">
            <FontAwesomeIcon icon={faAnglesRight} />
            <h4 className="ml-10 font-bold m-2">
              Income and expenditure statement and your assets and liabilites
              statement for the last three financial years
            </h4>
          </div>
          <div class="flex-row ml-24">
            <label for="income" class="text-lg  m-2 mr-3 font-medium">
              1.
            </label>
            <label
              for="income"
              class="relative cursor-pointer bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
            >
              <span class="ml-2">Choose File</span>
            </label>
            <input
              type="file"
              id="income"
              name="income"
              accept="image/*"
              class="hidden"
            />

            <h3 className="text-xl mt-10 font-bold">
              Upload all below documents
            </h3>
            <div className="flex">
              <div>
                <h6 className=" font-semibold my-3">Income tax pan number</h6>
                <label for="income" class="text-lg mr-4 font-medium mb-2">
                  a.
                </label>
                <label
                  for="income"
                  class="relative cursor-pointer bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
                >
                  <span class="ml-2">Choose File</span>
                </label>
                <input
                  type="file"
                  id="income"
                  name="income"
                  accept="image/*"
                  class="hidden"
                />
                <h6 className="font-semibold my-3">
                  Factory registration certificate
                </h6>
                <label for="income" class="text-lg mr-4 font-medium mb-2">
                  b.
                </label>
                <label
                  for="income"
                  class="relative cursor-pointer bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
                >
                  <span class="ml-2">Choose File</span>
                </label>
                <input
                  type="file"
                  id="income"
                  name="income"
                  accept="image/*"
                  class="hidden"
                />
                <h6 className="font-semibold my-3">
                  Memorandum & article of association
                  <br /> (compulsory for private / Limited companies)
                </h6>
                <label for="income" class="text-lg mr-4 font-medium mb-2">
                  c.
                </label>
                <label
                  for="income"
                  class="relative cursor-pointer bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
                >
                  <span class="ml-2">Choose File</span>
                </label>
                <input
                  type="file"
                  id="income"
                  name="income"
                  accept="image/*"
                  class="hidden"
                />
                <h6 className="font-semibold my-3">
                  GSTIN Registration copy (Compulsory)
                </h6>
                <label for="income" class="text-lg mr-4 font-medium mb-2">
                  d.
                </label>
                <label
                  for="income"
                  class="relative cursor-pointer bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
                >
                  <span class="ml-2">Choose File</span>
                </label>
                <input
                  type="file"
                  id="income"
                  name="income"
                  accept="image/*"
                  class="hidden"
                />
              </div>
              <div>
                <div>
                  <h6 className="font-semibold my-3">IE code certification </h6>
                  <label for="income" class="text-lg mr-4 font-medium mb-2">
                    e.
                  </label>
                  <label
                    for="income"
                    class="relative cursor-pointer bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
                  >
                    <span class="ml-2">Choose File</span>
                  </label>
                  <input
                    type="file"
                    id="income"
                    name="income"
                    accept="image/*"
                    class="hidden"
                  />
                  <h6 className="font-semibold my-3">
                    professional certificate
                  </h6>
                  <label for="income" class="text-lg mr-4 font-medium mb-2">
                    f.
                  </label>
                  <label
                    for="income"
                    class="relative cursor-pointer bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
                  >
                    <span class="ml-2">Choose File</span>
                  </label>
                  <input
                    type="file"
                    id="income"
                    name="income"
                    accept="image/*"
                    class="hidden"
                  />
                  <h6 className="font-semibold my-3">copy of land document</h6>
                  <label for="income" class="text-lg mr-4 font-medium mb-2">
                    g.
                  </label>
                  <label
                    for="income"
                    class="relative cursor-pointer bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
                  >
                    <span class="ml-2">Choose File</span>
                  </label>
                  <input
                    type="file"
                    id="income"
                    name="income"
                    accept="image/*"
                    class="hidden"
                  />
                  <h6 className="font-semibold my-3">
                    copy of land holding(Patta)
                  </h6>
                  <label for="income" class="text-lg mr-4 font-medium mb-2">
                    h.
                  </label>
                  <label
                    for="income"
                    class="relative cursor-pointer bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
                  >
                    <span class="ml-2">Choose File</span>
                  </label>
                  <input
                    type="file"
                    id="income"
                    name="income"
                    accept="image/*"
                    class="hidden"
                  />
                </div>
              </div>
            </div>
            <h6 className="font-semibold my-3">
              Two passport size photograph of the authorised reperesentative{" "}
            </h6>
            <label
              for="income"
              class="relative cursor-pointer bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
            >
              <span class="ml-2">Choose File</span>
            </label>
            <input
              type="file"
              id="income"
              name="income"
              accept="image/*"
              class="hidden"
            />
            <h6 className="font-semibold my-3">
              List of directors/partners etc
            </h6>
            <label
              for="income"
              class="relative cursor-pointer bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
            >
              <span class="ml-2">Choose File</span>
            </label>
            <input
              type="file"
              id="income"
              name="income"
              accept="image/*"
              class="hidden"
            />
          </div>
          <button className="bg-violet-300 p-3 rounded-full px-3 ">
            Submit and proceed next
          </button>
        </div>
        <div className="right w-1/3 border-2 border-black rounded-xl p-3 h-1/2 pb-5 mt-10 bg-pink-400">
          <h1>Membership opportunities:</h1>
          <p>
            The membership of the chamber is open to all those who are engaged
            in any business activity in the state of tamilnadu , including trade
            , industry , service and agriculture and related activites .
            Professional , sole propriteorship , LLPs Partnership association
            and companies are eligible to be admitted as members under any one
            of the following categories.
          </p>
          <h1>Membership types </h1>
          <div>
            <h4>For Lifemembership</h4>
          </div>
          <div>For Lifemembership </div>
          <div>For Lifemembership</div>
          <h1>Membership Benefits </h1>
          <div>Latest notifications of state central governments </div>
          <div>
            {" "}
            Trade delegations and foreign delegations related information
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default MembershipForm2;
