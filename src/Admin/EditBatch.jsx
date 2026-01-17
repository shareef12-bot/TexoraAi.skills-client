import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBatchById, updateBatch } from "../services/batchService";

const EditBatch = () => {
  const { batchId } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    batchName: "",
    branchId: "",
    courseId: "",
    trainerId: "",
    startDate: "",
    endDate: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBatchById(batchId)
      .then((res) => {
        const b = res.data;
        setForm({
          batchName: b.name || "",
          branchId: b.branchId || "",
          courseId: b.courseId || "",
          trainerId: b.trainerId || "",
          startDate: b.startDate || "",
          endDate: b.endDate || "",
        });
      })
      .finally(() => setLoading(false));
  }, [batchId]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateBatch(batchId, form);
    navigate("/admin/batches");
  };

  if (loading) {
    return <p className="text-slate-400">Loading batch...</p>;
  }

  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-slate-100">Edit Batch</h1>
        <p className="text-sm text-slate-400">Update batch configuration.</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="rounded-xl border border-slate-800 bg-slate-900 p-6 space-y-4"
      >
        <input
          name="batchName"
          value={form.batchName}
          onChange={handleChange}
          placeholder="Batch name"
          className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100"
        />

        <input
          name="branchId"
          value={form.branchId}
          onChange={handleChange}
          placeholder="Branch ID"
          className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100"
        />

        <input
          name="courseId"
          value={form.courseId}
          onChange={handleChange}
          placeholder="Course ID"
          className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100"
        />

        <input
          name="trainerId"
          value={form.trainerId}
          onChange={handleChange}
          placeholder="Trainer ID"
          className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100"
        />

        <div className="flex gap-4">
          <input
            type="date"
            name="startDate"
            value={form.startDate}
            onChange={handleChange}
            className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100"
          />

          <input
            type="date"
            name="endDate"
            value={form.endDate}
            onChange={handleChange}
            className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm text-slate-100"
          />
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <button
            type="button"
            onClick={() => navigate("/admin/batches")}
            className="px-4 py-2 text-sm rounded-md border border-slate-700 text-slate-300 hover:bg-slate-800"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="px-4 py-2 text-sm rounded-md bg-indigo-600 text-white hover:bg-indigo-700"
          >
            Update Batch
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBatch;
