import React from "react";
import Navbar from "./Navbar";
import "../index.css";
const Letter = () => {
  return (
    <div>
      <Navbar />
      <div className="p-5 bg-gray-200">
        <h1 className="">Membership Application </h1>
      </div>
      <h1 className="flex justify-center text-2xl my-5">
        (Application Letter Head)
      </h1>
      <div className="ml-10">
        <p>
          To,
          <br />
          The President <br />
          The Indian Chamber of Commerce and Industry
          <br />
          Coimbatore.
          <br />
          <div className="my-4">Dear Sir,</div>
          <div className="my-4">
            Sub:Application for Chamber Membership
            <br />
          </div>
          <div className=" space-y-1">
            I / We are desire to apply for membership of The Indian Chamber of
            Commerce
            <br /> and Industry, Coimbatore and hereby submitting the
            application along with <br />
            required enclosures.
            <div className=" space-y-1">
              I / We also enclose the DD/ Cheque No{" "}
              <input
                className="border-2 mx-2 rounded-lg"
                type="number"
                min={5}
                max={6}
                name=""
                id=""
              />
              Drawn
            </div>
            on
            <input
              className="border-2 mx-2 rounded-lg"
              type="date"
              name="date"
              id="date"
            />{" "}
            for Rs towards
            <input
              className="border-2 mx-2 rounded-lg"
              type="number"
              name=""
              id=""
            />
            <br />
            ANNUAL SUBSCRIPTION Rs
            <br /> LIFE MEMBERSHIP
            <br /> CO CHAMBER JOURNAL <br />
            CHAMBER DAY CELEBRATION
            <br /> OTHER FEE IF ANY
            <br /> TOTAL
            <br /> Kindly accept our application and admit me/us as member.
            <br />
            <div className="flex-col">
              <div>
                Rs{" "}
                <input
                  className="border-2 my-2 mx-2 rounded-lg"
                  type="number"
                  name=""
                  id=""
                />{" "}
              </div>
              <div>
                Rs{" "}
                <input
                  className="border-2 my-2 mx-2 rounded-lg"
                  type="number"
                  name=""
                  id=""
                />{" "}
              </div>
              <div>
                Rs{" "}
                <input
                  className="border-2 my-2 mx-2 rounded-lg"
                  type="number"
                  name=""
                  id=""
                />{" "}
              </div>
              <div>
                Rs{" "}
                <input
                  className="border-2 my-2 mx-2 rounded-lg"
                  type="number"
                  name=""
                  id=""
                />{" "}
              </div>
              <div>
                Rs{" "}
                <input
                  className="border-2 my-2 mx-2 rounded-lg"
                  type="number"
                  name=""
                  id=""
                />{" "}
              </div>
              <div>
                Rs{" "}
                <input
                  className="border-2 my-2 mx-2 rounded-lg"
                  type="number"
                  name=""
                  id=""
                />{" "}
              </div>
            </div>
            <span className="font-bold">NOTE</span>: To be taken printout on
            Applicant’s Letter Head
            <br />
            (Applicant Letter Head) <br />
            <div>
              Proposed by Name:
              <input type="text" name="" id="" />
            </div>
            <div>
              Membership No:
              <input type="text" name="" id="" />
            </div>
            <div>
              Signature:
              <input type="text" name="" id="" />
            </div>
            <div>
              Seconded by Name:
              <input type="text" name="" id="" />
            </div>
            <div>
              Membership No:
              <input type="text" name="" id="" />
            </div>
            <div>
              Signature:
              <input type="text" name="" id="" />
            </div>
          </div>
        </p>
        <div className="flex items-center justify-between mr-24">
          <div className="my-10 ">
            <p className="space-y-2">Yours Sincerely,</p>
            <p className="font-bold my-3 mb-4">Authorized Signatory</p>
            <label
              for="income"
              class="relative mt-2 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
            >
              <span>Upload Image</span>
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
            <h6 className="font-bold mb-5">Photo of Authorized Person</h6>
            <label
              for="income"
              class="relative mt-2 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
            >
              <span>Upload Image</span>
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
          <pre>
              
          </pre>
    </div>
  );
};

export default Letter;
