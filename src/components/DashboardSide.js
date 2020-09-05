import React from 'react';

function DashboardSide({ user }) {
  return (
    <ul className="d-flex flex-column list-unstyled text-light h-100">
      <ul className="list-unstyled my-3 px-3">
        <li className="text-secondary text-uppercase mb-1">Core</li>
        <li className="pl-1">Dashboard</li>
        <li className="pl-1">Blogs</li>
      </ul>
      <ul className="list-unstyled my-3 px-3">
        <li className="text-secondary text-uppercase mb-1">Create</li>
        <li className="pl-1">Blog</li>
      </ul>
      <ul className="list-unstyled my-3 px-3">
        <li className="text-secondary text-uppercase mb-1">Edit</li>
        <li className="pl-1">Blog</li>
        <li className="pl-1">Comment</li>
      </ul>
      <li className="bg-secondary text-light mt-auto px-3 py-2">
        <small>Logged in as:</small>
        <p className="text-capitalize m-0">{user.name}</p>
      </li>
    </ul>
  );
}

export default DashboardSide;
