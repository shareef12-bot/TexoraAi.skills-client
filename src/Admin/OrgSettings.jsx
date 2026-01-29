// src/Admin/OrgSettings.jsx
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const OrgSettings = () => {
//   const navigate = useNavigate();

//   // Form state
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     timezone: "IST",
//     logo: null,
//     primaryColor: "#4F46E5",
//   });

//   // Handle input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // Handle logo upload
//   const handleLogoUpload = (e) => {
//     const file = e.target.files[0];
//     setFormData((prev) => ({ ...prev, logo: file }));
//   };

//   // Handle save/update
//   const handleSave = (e) => {
//     e.preventDefault();
//     // TODO: API call to save data
//     console.log("Saving organization settings:", formData);
//     alert("Settings saved successfully!"); // Temporary feedback
//     // Stay on page or navigate back
//   };

//   // Navigate to create new org (if multi-org support)
//   const handleCreate = () => {
//     navigate("/admin/orgs/create");
//   };

//   // Navigate to edit org page
//   const handleEdit = () => {
//     navigate("/admin/orgs/edit");
//   };

//   // Handle delete
//   const handleDelete = () => {
//     if (window.confirm("Are you sure you want to delete this organization?")) {
//       // TODO: API call to delete
//       console.log("Deleting organization");
//       alert("Organization deleted!");
//       navigate("/admin/orgs"); // Navigate to orgs list
//     }
//   };

//   return (
//     <div className="space-y-6">
//       {/* Page header */}
//       <div>
//         <h1 className="text-xl font-semibold text-slate-100">
//           Organisation settings
//         </h1>
//         <p className="mt-1 text-sm text-slate-400">
//           Manage institute name, branding, contact details and global
//           configuration for your LMS.
//         </p>
//       </div>

//       {/* Action buttons */}
//       <div className="flex gap-3 justify-end">
//         <button
//           onClick={handleCreate}
//           className="px-4 py-2 rounded-md bg-green-600 text-sm font-medium text-white hover:bg-green-500"
//         >
//           Create New Org
//         </button>
//         <button
//           onClick={handleEdit}
//           className="px-4 py-2 rounded-md bg-blue-600 text-sm font-medium text-white hover:bg-blue-500"
//         >
//           Edit Org
//         </button>
//         <button
//           onClick={handleDelete}
//           className="px-4 py-2 rounded-md bg-red-600 text-sm font-medium text-white hover:bg-red-500"
//         >
//           Delete Org
//         </button>
//       </div>

//       {/* Basic info card */}
//       <form onSubmit={handleSave}>
//         <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 space-y-4">
//           <h2 className="text-sm font-semibold text-slate-100">Basic info</h2>
//           <div className="grid gap-4 md:grid-cols-2 text-sm">
//             <div className="space-y-1">
//               <label className="text-xs text-slate-400">
//                 Organisation name
//               </label>
//               <input
//                 name="name"
//                 type="text"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 placeholder="Your institute / company name"
//                 className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
//                 required
//               />
//             </div>
//             <div className="space-y-1">
//               <label className="text-xs text-slate-400">Support email</label>
//               <input
//                 name="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 placeholder="support@example.com"
//                 className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
//                 required
//               />
//             </div>
//             <div className="space-y-1">
//               <label className="text-xs text-slate-400">Contact number</label>
//               <input
//                 name="phone"
//                 type="text"
//                 value={formData.phone}
//                 onChange={handleInputChange}
//                 placeholder="+91-98765 43210"
//                 className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
//               />
//             </div>
//             <div className="space-y-1">
//               <label className="text-xs text-slate-400">Default timezone</label>
//               <select
//                 name="timezone"
//                 value={formData.timezone}
//                 onChange={handleInputChange}
//                 className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-1 focus:ring-violet-500"
//               >
//                 <option value="IST">IST (UTC+5:30)</option>
//                 <option value="UTC">UTC</option>
//                 <option value="EST">EST (UTC-5)</option>
//                 <option value="CET">CET (UTC+1)</option>
//               </select>
//             </div>
//           </div>
//         </div>

//         {/* Branding card */}
//         <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 space-y-4">
//           <h2 className="text-sm font-semibold text-slate-100">Branding</h2>
//           <p className="text-xs text-slate-400">
//             Control how your LMS looks for all users.
//           </p>

//           <div className="grid gap-4 md:grid-cols-2 text-sm">
//             <div className="space-y-2">
//               <p className="text-xs text-slate-400">Logo</p>
//               <div className="flex items-center gap-3">
//                 <div className="h-12 w-12 rounded-lg bg-slate-800 flex items-center justify-center text-slate-500 text-xs">
//                   {formData.logo ? "Logo" : "Logo"}
//                 </div>
//                 <input
//                   type="file"
//                   onChange={handleLogoUpload}
//                   className="hidden"
//                   id="logo-upload"
//                   accept="image/*"
//                 />
//                 <label
//                   htmlFor="logo-upload"
//                   className="px-3 py-1.5 rounded-md bg-slate-800 text-xs text-slate-100 hover:bg-slate-700 cursor-pointer"
//                 >
//                   Upload logo
//                 </label>
//               </div>
//             </div>

//             <div className="space-y-2">
//               <p className="text-xs text-slate-400">Primary color</p>
//               <div className="flex items-center gap-3">
//                 <div
//                   className="h-8 w-8 rounded-full"
//                   style={{ backgroundColor: formData.primaryColor }}
//                 />
//                 <input
//                   name="primaryColor"
//                   type="text"
//                   value={formData.primaryColor}
//                   onChange={handleInputChange}
//                   placeholder="#4F46E5"
//                   className="flex-1 rounded-md bg-slate-950 border border-slate-700 px-3 py-1.5 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Save button */}
//         <div className="flex justify-end pt-4">
//           <button
//             type="submit"
//             className="px-8 py-2.5 rounded-lg bg-violet-600 text-sm font-semibold text-white hover:bg-violet-500 transition-colors"
//           >
//             Save changes
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default OrgSettings;

// src/Admin/OrgSettings.jsx
import React, { useState } from "react";

const OrgSettings = () => {
  // Mode state (view | create | edit)
  const [mode, setMode] = useState("view");

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    timezone: "IST",
    logo: null,
    primaryColor: "#4F46E5",
  });

  const isReadOnly = mode === "view";

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle logo upload
  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, logo: file }));
  };

  // Handle save/update
  const handleSave = (e) => {
    e.preventDefault();

    if (mode === "create") {
      // TODO: API call to create org
      console.log("Creating organization:", formData);
      alert("Organisation created successfully!");
    } else if (mode === "edit") {
      // TODO: API call to update org
      console.log("Updating organization:", formData);
      alert("Settings updated successfully!");
    } else {
      // view mode (do nothing)
      return;
    }

    setMode("view");
  };

  // Create new org (same page)
  const handleCreate = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      timezone: "IST",
      logo: null,
      primaryColor: "#4F46E5",
    });
    setMode("create");
  };

  // Edit org (same page)
  const handleEdit = () => {
    setMode("edit");
  };

  // Cancel create/edit
  const handleCancel = () => {
    setMode("view");
  };

  // Handle delete
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this organization?")) {
      // TODO: API call to delete
      console.log("Deleting organization");
      alert("Organization deleted!");
      setMode("view");
    }
  };

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div>
        <h1 className="text-xl font-semibold text-slate-100">
          Organisation settings
        </h1>
        <p className="mt-1 text-sm text-slate-400">
          Manage institute name, branding, contact details and global
          configuration for your LMS.
        </p>
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 justify-end">
        {mode !== "view" && (
          <button
            onClick={handleCancel}
            className="px-4 py-2 rounded-md bg-slate-700 text-sm font-medium text-white hover:bg-slate-600"
          >
            Cancel
          </button>
        )}

        <button
          onClick={handleCreate}
          className="px-4 py-2 rounded-md bg-green-600 text-sm font-medium text-white hover:bg-green-500"
        >
          Create New Org
        </button>

        <button
          onClick={handleEdit}
          className="px-4 py-2 rounded-md bg-blue-600 text-sm font-medium text-white hover:bg-blue-500"
        >
          Edit Org
        </button>

        <button
          onClick={handleDelete}
          className="px-4 py-2 rounded-md bg-red-600 text-sm font-medium text-white hover:bg-red-500"
        >
          Delete Org
        </button>
      </div>

      {/* Basic info card */}
      <form onSubmit={handleSave}>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 space-y-4">
          <h2 className="text-sm font-semibold text-slate-100">Basic info</h2>
          <div className="grid gap-4 md:grid-cols-2 text-sm">
            <div className="space-y-1">
              <label className="text-xs text-slate-400">
                Organisation name
              </label>
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your institute / company name"
                disabled={isReadOnly}
                className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-violet-500 disabled:opacity-60"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs text-slate-400">Support email</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="support@example.com"
                disabled={isReadOnly}
                className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-violet-500 disabled:opacity-60"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs text-slate-400">Contact number</label>
              <input
                name="phone"
                type="text"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+91-98765 43210"
                disabled={isReadOnly}
                className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-violet-500 disabled:opacity-60"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs text-slate-400">Default timezone</label>
              <select
                name="timezone"
                value={formData.timezone}
                onChange={handleInputChange}
                disabled={isReadOnly}
                className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-1 focus:ring-violet-500 disabled:opacity-60"
              >
                <option value="IST">IST (UTC+5:30)</option>
                <option value="UTC">UTC</option>
                <option value="EST">EST (UTC-5)</option>
                <option value="CET">CET (UTC+1)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Branding card */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 space-y-4">
          <h2 className="text-sm font-semibold text-slate-100">Branding</h2>
          <p className="text-xs text-slate-400">
            Control how your LMS looks for all users.
          </p>

          <div className="grid gap-4 md:grid-cols-2 text-sm">
            <div className="space-y-2">
              <p className="text-xs text-slate-400">Logo</p>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-lg bg-slate-800 flex items-center justify-center text-slate-500 text-xs">
                  {formData.logo ? "Logo" : "Logo"}
                </div>

                <input
                  type="file"
                  onChange={handleLogoUpload}
                  className="hidden"
                  id="logo-upload"
                  accept="image/*"
                  disabled={isReadOnly}
                />

                <label
                  htmlFor="logo-upload"
                  className={`px-3 py-1.5 rounded-md bg-slate-800 text-xs text-slate-100 hover:bg-slate-700 cursor-pointer ${
                    isReadOnly ? "opacity-60 pointer-events-none" : ""
                  }`}
                >
                  Upload logo
                </label>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-xs text-slate-400">Primary color</p>
              <div className="flex items-center gap-3">
                <div
                  className="h-8 w-8 rounded-full"
                  style={{ backgroundColor: formData.primaryColor }}
                />
                <input
                  name="primaryColor"
                  type="text"
                  value={formData.primaryColor}
                  onChange={handleInputChange}
                  placeholder="#4F46E5"
                  disabled={isReadOnly}
                  className="flex-1 rounded-md bg-slate-950 border border-slate-700 px-3 py-1.5 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-violet-500 disabled:opacity-60"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Save button */}
        {mode !== "view" && (
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              className="px-8 py-2.5 rounded-lg bg-violet-600 text-sm font-semibold text-white hover:bg-violet-500 transition-colors"
            >
              Save changes
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default OrgSettings;
