import React from "react";

const sessions = [
  { id: 1, title: "React Sidebar Debug", category: "Coding help", time: "Today · 10:15 AM" },
  { id: 2, title: "Internship Certificate Text", category: "Content", time: "Yesterday · 8:42 PM" },
  { id: 3, title: "LMS Dashboard Copy", category: "UI text", time: "Last week · 11:07 PM" },
];

const UsageRow = ({ label, value, color }) => (
  <div className="space-y-1">
    <div className="flex justify-between text-xs text-slate-600 dark:text-slate-300">
      <span>{label}</span>
      <span>{value}%</span>
    </div>
    <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-700">
      <div
        className={`h-2 rounded-full ${color}`}
        style={{ width: `${value}%` }}
      />
    </div>
  </div>
);

const AiUsage = () => {
  return (
    <main className="flex-1 px-6 md:px-10 py-6 space-y-6">
      {/* Header */}
      <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-semibold tracking-wide text-indigo-600 dark:text-brand uppercase">
            Student
          </p>
          <h1 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white">
            My AI Usage
          </h1>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
            Dekho tumne LMS ke andar AI assistant ko kaise use kiya – prompts,
            time saved, aur sabse zyada use hone wale tools.
          </p>
        </div>

        <div className="w-full max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-900 placeholder:text-slate-400
                       focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30
                       dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-brand dark:focus:ring-brand/40"
          />
        </div>
      </header>

      {/* Stats cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total AI prompts", value: 48 },
          { label: "Hours saved", value: "3.5" },
          { label: "Code snippets generated", value: 19 },
          { label: "Content drafts created", value: 7 },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-xl border bg-white p-4 shadow-sm flex flex-col gap-2
                       border-slate-200 text-slate-900
                       dark:bg-slate-900 dark:border-slate-700 dark:text-slate-100"
          >
            <p className="text-xs font-medium tracking-wide text-slate-500 dark:text-slate-400 uppercase">
              {item.label}
            </p>
            <p className="text-3xl font-semibold text-slate-900 dark:text-white">
              {item.value}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-500">Last 30 days</p>
          </div>
        ))}
      </section>

      {/* Usage breakdown */}
      <section
        className="rounded-xl border bg-white p-4 shadow-sm space-y-4
                   border-slate-200 text-slate-900
                   dark:bg-slate-900 dark:border-slate-700 dark:text-slate-100"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-slate-900 dark:text-white">
            Usage breakdown
          </h2>
          <span className="text-xs text-slate-500 dark:text-slate-500">Last 7 days</span>
        </div>

        <div className="space-y-3">
          <UsageRow label="Code explanations" value={45} color="bg-indigo-500" />
          <UsageRow label="Bug fixing" value={30} color="bg-sky-400" />
          <UsageRow label="Content writing" value={15} color="bg-emerald-500" />
          <UsageRow label="Docs / Q&A" value={10} color="bg-fuchsia-500" />
        </div>
      </section>

      {/* Recent AI sessions */}
      <section
        className="rounded-xl border bg-white p-4 shadow-sm
                   border-slate-200 text-slate-900
                   dark:bg-slate-900 dark:border-slate-700 dark:text-slate-100"
      >
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold text-slate-900 dark:text-white">
            Recent AI sessions
          </h2>
          <button className="text-xs text-indigo-600 hover:text-indigo-700 dark:text-brand dark:hover:text-brand-soft">
            View all
          </button>
        </div>

        <div className="space-y-2">
          {sessions.map((session) => (
            <div
              key={session.id}
              className="rounded-lg px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1
                         bg-slate-50 text-slate-900
                         dark:bg-slate-800 dark:text-slate-100"
            >
              <div>
                <p className="text-sm font-medium">{session.title}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {session.category}
                </p>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {session.time}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default AiUsage;
