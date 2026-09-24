import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FaCheckCircle,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaGraduationCap,
} from "react-icons/fa";

export default function Register() {
  const [submittedData, setSubmittedData] = useState(null);
  console.log(submittedData);

  // React Hook Form Hooks Setup
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      track: "Web Development",
      gender: "Male",
      password: "",
      confirmPassword: "",
      agreeTerms: false,
    },
  });

  const onSubmit = (data) => {
    setSubmittedData(data);
  };

  const handleReset = () => {
    reset();
    setSubmittedData(null);
  };

  return (
    <div className="min-h-screen bg-slate-100 py-12 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-10 border border-slate-200">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-slate-800">
            Club Membership Registration
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Fill up the form below to join SEU Computer Club
          </p>
        </div>

        {/* Success Message & Summary */}
        {submittedData ? (
          <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl text-emerald-900 animate-in fade-in">
            <div className="flex items-center gap-3 mb-4">
              <FaCheckCircle className="w-8 h-8 text-emerald-600" />
              <div>
                <h3 className="text-xl font-bold">Registration Successful!</h3>
                <p className="text-xs text-emerald-700">
                  Welcome to SEU Computer Club family.
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-emerald-100 space-y-2 text-sm shadow-sm">
              <p>
                <strong>Full Name:</strong> {submittedData.fullName}
              </p>
              <p>
                <strong>University Email:</strong> {submittedData.email}
              </p>
              <p>
                <strong>Phone:</strong> {submittedData.phone}
              </p>
              <p>
                <strong>Track:</strong> {submittedData.track}
              </p>
              <p>
                <strong>Gender:</strong> {submittedData.gender}
              </p>
            </div>

            <button
              onClick={handleReset}
              className="mt-6 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-xl transition shadow-md"
            >
              Register Another Member
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Field 1: Text Input (Full Name) */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">
                Full Name *
              </label>
              <div className="relative">
                <input
                  type="text"
                  {...register("fullName", {
                    required: "Full name is required.",
                  })}
                  placeholder="John Doe"
                  className={`w-full border p-3 pl-10 rounded-xl focus:ring-2 outline-none transition ${
                    errors.fullName
                      ? "border-red-500 focus:ring-red-200"
                      : "border-slate-300 focus:ring-indigo-500"
                  }`}
                />
                <FaUser className="absolute left-3.5 top-3.5 text-slate-400" />
              </div>
              {errors.fullName && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Field 2: Email Input */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">
                University Email *
              </label>
              <div className="relative">
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required.",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Please enter a valid email address.",
                    },
                  })}
                  placeholder="student@seu.edu.bd"
                  className={`w-full border p-3 pl-10 rounded-xl focus:ring-2 outline-none transition ${
                    errors.email
                      ? "border-red-500 focus:ring-red-200"
                      : "border-slate-300 focus:ring-indigo-500"
                  }`}
                />
                <FaEnvelope className="absolute left-3.5 top-3.5 text-slate-400" />
              </div>
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Field 3: Tel / Pattern Input (Phone) */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">
                Phone Number (11 Digits) *
              </label>
              <div className="relative">
                <input
                  type="tel"
                  {...register("phone", {
                    required: "Phone number is required.",
                    pattern: {
                      value: /^01\d{9}$/,
                      message:
                        "Must be 11 digits starting with 01 (e.g. 01700000000).",
                    },
                  })}
                  placeholder="01700000000"
                  className={`w-full border p-3 pl-10 rounded-xl focus:ring-2 outline-none transition ${
                    errors.phone
                      ? "border-red-500 focus:ring-red-200"
                      : "border-slate-300 focus:ring-indigo-500"
                  }`}
                />
                <FaPhone className="absolute left-3.5 top-3.5 text-slate-400" />
              </div>
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Field 4: Select Dropdown */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">
                Preferred Track
              </label>
              <div className="relative">
                <select
                  {...register("track")}
                  className="w-full border border-slate-300 p-3 pl-10 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none bg-white transition appearance-none"
                >
                  <option value="Web Development">Web Development</option>
                  <option value="Competitive Programming">
                    Competitive Programming
                  </option>
                  <option value="App Development">App Development</option>
                  <option value="Cyber Security">Cyber Security</option>
                </select>
                <FaGraduationCap className="absolute left-3.5 top-3.5 text-slate-400" />
              </div>
            </div>

            {/* Field 5: Radio Buttons (Gender) */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Gender *
              </label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                  <input
                    type="radio"
                    value="Male"
                    {...register("gender")}
                    className="accent-indigo-600 w-4 h-4"
                  />{" "}
                  Male
                </label>
                <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                  <input
                    type="radio"
                    value="Female"
                    {...register("gender")}
                    className="accent-indigo-600 w-4 h-4"
                  />{" "}
                  Female
                </label>
              </div>
            </div>

            {/* Field 6 & Cross-field: Password & Confirm Password Input */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">
                  Password *
                </label>
                <div className="relative">
                  <input
                    type="password"
                    {...register("password", {
                      required: "Password is required.",
                      minLength: {
                        value: 6,
                        message: "Must be at least 6 characters.",
                      },
                    })}
                    placeholder="••••••••"
                    className={`w-full border p-3 pl-10 rounded-xl focus:ring-2 outline-none transition ${
                      errors.password
                        ? "border-red-500 focus:ring-red-200"
                        : "border-slate-300 focus:ring-indigo-500"
                    }`}
                  />
                  <FaLock className="absolute left-3.5 top-3.5 text-slate-400" />
                </div>
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">
                  Confirm Password *
                </label>
                <div className="relative">
                  <input
                    type="password"
                    {...register("confirmPassword", {
                      required: "Please confirm your password.",
                      validate: (value) =>
                        value === getValues("password") ||
                        "Passwords do not match.",
                    })}
                    placeholder="••••••••"
                    className={`w-full border p-3 pl-10 rounded-xl focus:ring-2 outline-none transition ${
                      errors.confirmPassword
                        ? "border-red-500 focus:ring-red-200"
                        : "border-slate-300 focus:ring-indigo-500"
                    }`}
                  />
                  <FaLock className="absolute left-3.5 top-3.5 text-slate-400" />
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
            </div>

            {/* Field 7: Checkbox (Terms) */}
            <div>
              <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  {...register("agreeTerms", {
                    required: "You must accept the terms.",
                  })}
                  className="rounded accent-indigo-600 w-4 h-4"
                />
                I agree to the club rules and conditions.
              </label>
              {errors.agreeTerms && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.agreeTerms.message}
                </p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-indigo-600/20 transition"
              >
                Submit Registration
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold px-6 py-3.5 rounded-xl transition"
              >
                Reset
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
