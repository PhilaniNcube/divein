/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Index = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('student');
  const [field, setField] = useState('');
  const [ageGroup, setAgeGroup] = useState('19 - 30');
  const [province, setProvince] = useState('Freestate');
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('/api/submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          status,
          field,
          ageGroup,
          province,
        }),
      });

      const { message } = await response.json();

      console.log(message);
      setLoading(false);
      router.push('/thankyou');
    } catch (error) {
      console.log(error);
      alert('Form submission failed');
      setLoading(false);
    }
  };

  // console.log("payload", payload);
  // Place your API call here to submit your payload.

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="container mx-auto shadow bg-white  rounded">
          <div className="w-11/12 mx-auto">
            <img
              src="/images/registration.jpg"
              alt=""
              className="w-full lg:w-9/12 object-contain overflow-hidden rounded shadow"
            />
            <div className="xl:w-9/12 mx-auto xl:mx-0">
              <div className="flex justify-between flex-col md:flex-row md:space-x-4 mt-8">
                <div className="flex flex-col xl:w-2/6 lg:w-2/6 w-full">
                  <label
                    htmlFor="firstName"
                    className="pb-2 text-sm font-bold text-gray-800 "
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={firstName}
                    className="border border-gray-300  pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 text-gray-800 bg-transparent "
                    required
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="mt-2 flex flex-col xl:w-2/6 lg:w-2/6 w-full">
                  <label
                    htmlFor="lastName"
                    className="pb-2 text-sm font-bold text-gray-800 "
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="border border-gray-300  pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 text-gray-800 bg-transparent "
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="flex justify-between flex-col md:flex-row md:space-x-4">
                <div className="mt-2 flex flex-col xl:w-2/6 lg:w-2/6 w-full">
                  <label
                    htmlFor="email"
                    className="pb-2 text-sm font-bold text-gray-800 "
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    className="border border-gray-300  pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 text-gray-800 bg-transparent "
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mt-2 flex flex-col xl:w-2/6 lg:w-2/6 w-full">
                  <label
                    htmlFor="status"
                    className="pb-2 text-sm font-bold text-gray-800 "
                  >
                    Are you a student or a professional?
                  </label>
                  <select
                    type="text"
                    id="status"
                    name="status"
                    className="border border-gray-300  pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 text-gray-800 bg-transparent "
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    required
                  >
                    <option value="student">Student</option>
                    <option value="professional">Professional</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-between flex-col md:flex-row md:space-x-4">
                <div className="mt-2 flex flex-col xl:w-2/6 lg:w-2/6 w-full">
                  <label
                    htmlFor="ageGroup"
                    className="pb-2 text-sm font-bold text-gray-800 "
                  >
                    Age Group
                  </label>
                  <select
                    type="text"
                    id="ageGroup"
                    name="ageGroup"
                    className="border border-gray-300  pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 text-gray-800 bg-transparent "
                    value={ageGroup}
                    onChange={(e) => setAgeGroup(e.target.value)}
                    required
                  >
                    <option value="Under 18">Under 18</option>
                    <option value="19 - 30">19 - 30</option>
                    <option value="31 - 40">31 - 40</option>
                    <option value="41 - 50">41 - 50</option>
                    <option value="51 - 60">51 - 60</option>
                    <option value="Over 60">Over 60</option>
                  </select>
                </div>
                <div className="mt-2 flex flex-col xl:w-2/6 lg:w-2/6 w-full">
                  <label
                    htmlFor="province"
                    className="pb-2 text-sm font-bold text-gray-800 "
                  >
                    Location
                  </label>
                  <select
                    type="text"
                    id="province"
                    name="province"
                    className="border border-gray-300  pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 text-gray-800 bg-transparent "
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                    required
                  >
                    <option value="Eastern Cape">Eastern Cape</option>
                    <option value="Freestate">Freestate</option>
                    <option value="Gauteng">Gauteng</option>
                    <option value="KwaZulu-Natal">KwaZulu-Natal</option>
                    <option value="Limpopo">Limpopo</option>
                    <option value="Mpumalanga">Mpumalanga</option>
                    <option value="Northern Cape">Northern Cape</option>
                    <option value="North West">North West</option>
                    <option value="Western Cape">Western Cape</option>
                  </select>
                </div>
              </div>
              <div className="mt-2 flex flex-col xl:w-4/6 lg:w-4/6 w-full">
                <label
                  htmlFor="field"
                  className="pb-2 text-sm font-bold text-gray-800 "
                >
                  Field Of Study/Work
                </label>
                <input
                  type="text"
                  id="field"
                  name="field"
                  value={field}
                  className="border border-gray-300  pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 text-gray-800 bg-transparent "
                  required
                  onChange={(e) => setField(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="w-full py-4 sm:px-12 px-4 mt-6 flex justify-start rounded-bl rounded-br">
            <button
              disabled={loading}
              className="bg-custom transition duration-150 ease-in-out  rounded text-white px-8 py-2 text-sm focus:outline-none"
              type="submit"
            >
              {loading ? 'Loading...' : 'Register'}
            </button>
          </div>
 <div className="w-11/12 lg:w-9/12 pt-2 pb-12 sm:px-12">
            <p className="font-bold text-md">POPIA COMPLIANT</p>
            <p className="text-sm">
              The Protection of Personal Information Act (POPI Act) comes into
              effect on 1 July 2021 and to remain compliant with its provisions
              SAIMI would like to give you, as its stakeholder, the opportunity
              to unsubscribe should you wish to not receive any further
              communication from SAIMI.
            </p>
            <p className="text-sm mt-1">
              SAIMI regularly sends communication to its stakeholders to inform
              them of any upcoming events and other industry related news. Your
              email address forms part of the SAIMI stakeholders’ database and
              is used for the purpose of communicating the abovementioned
              information.
            </p>
          </div>
        </div>
  
      </form>
    </div>
  );
};
export default Index;
