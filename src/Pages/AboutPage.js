import React from "react";

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-7">
      <h1 className="text-3xl font-bold text-green-600 mb-4">About loan Management App:</h1>
      <p className="text-lg text-gray-700 mb-4">
        It is an app that allows authenticated users to go through a loan
        application. It doesn’t have to contain too many fields, but at least
        “amount required” and “loan term.” All the loans will be assumed to have
        a “weekly” repayment frequency.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        After the loan is approved, the user must be able to submit the weekly
        loan repayments. It can be a simple repayment functionality, which won’t
        need to check if the dates are correct but will just set the weekly
        amount to be repaid.
      </p>
      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
        Some <span className="text-blue-500 font-bold">KEY</span> features
      </h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>Easy loan application with minimal fields.</li>
        <li>Weekly repayment schedule for all loans.</li>
        <li>Simplified repayment submission process.</li>
        <li>User authentication for secure access.</li>
      </ul>
    </div>
  );
};

export default AboutPage;
