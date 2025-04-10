import { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const data = {
      fname: form.fname.value,
      lname: form.lname.value,
      email: form.email.value,
      mnumber: form.mnumber.value,
      institutionType: form.institutionType.value,
      institutionName: form.institutionName.value,
      educationLevel: form.educationLevel.value,
      games: Array.from(form.games)
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.value),
      password: form.password.value,
      cpassword: form.cpassword.value,
    };

    if (data.password !== data.cpassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Registration successful!");
        form.reset();
      } else {
        alert(result.error || "Registration failed.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <section>
      <div className="mb-20"></div>
      <div className="container px-5  mx-auto">
        <div className="flex flex-col">
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-24 h-full bg-indigo-500"></div>
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-1">
            <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
              Register Now
            </h1>
            <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0"></p>
          </div>
        </div>
      </div>
      <div className="max-w-4xl max-sm:max-w-lg mx-auto p-6 mt-6">
        <form onSubmit={handleSubmit}>
          <div className="grid sm:grid-cols-2 gap-8">
            {/* First Name */}
            <div>
              <label className="text-slate-800 text-sm font-medium mb-2 block">First Name</label>
              <input name="fname" type="text" required className="bg-slate-100 w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter name" />
            </div>

            {/* Last Name */}
            <div>
              <label className="text-slate-800 text-sm font-medium mb-2 block">Last Name</label>
              <input name="lname" type="text" required className="bg-slate-100 w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter last name" />
            </div>

            {/* Email */}
            <div>
              <label className="text-slate-800 text-sm font-medium mb-2 block">Email Address</label>
              <input name="email" type="email" required className="bg-slate-100 w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter email" />
            </div>

            {/* Mobile */}
            <div>
              <label className="text-slate-800 text-sm font-medium mb-2 block">Mobile No.</label>
              <input name="mnumber" type="number" required className="bg-slate-100 w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter mobile number" />
            </div>

            {/* Institution Type */}
            <div>
              <label className="text-slate-800 text-sm font-medium mb-2 block">Institution Type</label>
              <select name="institutionType" required className="bg-slate-100 w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all">
                <option value="">Select an option</option>
                <option value="school">School</option>
                <option value="university">University</option>
              </select>
            </div>

            {/* Institution Name */}
            <div>
              <label className="text-slate-800 text-sm font-medium mb-2 block">Name of the Institution</label>
              <input name="institutionName" type="text" required className="bg-slate-100 w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter institution name" />
            </div>

            {/* Education Level */}
            <div>
              <label className="text-gray-800 text-sm font-medium mb-2 block">Education Level</label>
              <select name="educationLevel" required className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded outline-none">
                <option value="">Select an option</option>
                <option value="schoolStudent">School Student</option>
                <option value="schoolLeaver">School Leaver</option>
                <option value="hndDiploma">HND/Diploma</option>
                <option value="undergraduate">Undergraduate</option>
                <option value="postgraduate">Postgraduate</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Games */}
            <div>
              <label className="text-slate-800 text-sm font-medium mb-2 block">Games</label>
              <div className="bg-slate-100 px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all">
                {["callOfDuty4", "valorant", "rocketLeague", "freeFire", "pubg", "callOfDutyMobile", "mobileLegends", "mortalKombat"].map((game, index) => (
                  <label key={game} className="flex items-center space-x-2 mb-2">
                    <input type="checkbox" name="games" value={game} />
                    <span>{game.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase())}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-slate-800 text-sm font-medium mb-2 block">Password</label>
              <input name="password" type="password" required className="bg-slate-100 w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter password" />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="text-slate-800 text-sm font-medium mb-2 block">Confirm Password</label>
              <input name="cpassword" type="password" required className="bg-slate-100 w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter confirm password" />
            </div>
          </div>

          {/* Submit */}
          <div className="mt-12">
            <button type="submit" className="mx-auto block py-3 px-6 text-sm font-medium tracking-wider rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
              Register
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
