import React from "react";
import { NavLink } from "react-router-dom";

const linkBase =
  "flex items-center px-4 py-2 text-sm rounded-md mb-1 transition-colors";
const inactive =
  "text-slate-300 hover:text-white hover:bg-slate-800";
const active =
  "bg-indigo-600/20 text-indigo-200 border-l-4 border-indigo-400";

const TrainerSidebar = () => {
  return (
    <nav className="flex-1 py-4 text-slate-200 text-sm">
      <div className="px-4 mb-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
        Trainer
      </div>

      <NavLink
        to="/trainer"
        end
        className={({ isActive }) =>
          `${linkBase} ${isActive ? active : inactive}`
        }
      >
        Dashboard
      </NavLink>

      <div className="px-4 mt-4 mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
        Batch Management
      </div>
      <NavLink
        to="/trainer/batches"
        className={({ isActive }) =>
          `${linkBase} ${isActive ? active : inactive}`
        }
      >
        Batches
      </NavLink>

      <div className="px-4 mt-4 mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
        Content Management
      </div>
      <NavLink
        to="/trainer/upload-videos"
        className={({ isActive }) =>
          `${linkBase} ${isActive ? active : inactive}`
        }
      >
        Upload Videos
      </NavLink>
      <NavLink
        to="/trainer/upload-documents"
        className={({ isActive }) =>
          `${linkBase} ${isActive ? active : inactive}`
        }
      >
        Upload Documents
      </NavLink>
      <NavLink
        to="/trainer/create-quiz"
        className={({ isActive }) =>
          `${linkBase} ${isActive ? active : inactive}`
        }
      >
        Create Quiz
      </NavLink>
      <NavLink
        to="/trainer/create-assignments"
        className={({ isActive }) =>
          `${linkBase} ${isActive ? active : inactive}`
        }
      >
        Create Assignments
      </NavLink>

      <div className="px-4 mt-4 mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
        Reports & Analytics
      </div>
      <NavLink
        to="/trainer/student-reports"
        className={({ isActive }) =>
          `${linkBase} ${isActive ? active : inactive}`
        }
      >
        Student Reports
      </NavLink>
      <NavLink
        to="/trainer/batch-reports"
        className={({ isActive }) =>
          `${linkBase} ${isActive ? active : inactive}`
        }
      >
        Batch Reports
      </NavLink>
      <NavLink
        to="/trainer/performance"
        className={({ isActive }) =>
          `${linkBase} ${isActive ? active : inactive}`
        }
      >
        Performance Analysis
      </NavLink>

      <div className="px-4 mt-4 mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
        AI & Settings
      </div>
      <NavLink
        to="/trainer/ai-usage"
        className={({ isActive }) =>
          `${linkBase} ${isActive ? active : inactive}`
        }
      >
        My AI Usage
      </NavLink>
      <NavLink
        to="/trainer/settings"
        className={({ isActive }) =>
          `${linkBase} ${isActive ? active : inactive}`
        }
      >
        Settings
      </NavLink>
    </nav>
  );
};

export default TrainerSidebar;
