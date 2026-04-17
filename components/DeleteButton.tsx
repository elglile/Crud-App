"use client";

export default function DeleteButton() {
  return (
    <button
      type="submit"
      onClick={(e) => {
        const confirmed = window.confirm("Are you sure you want to delete?");
        if (!confirmed) {
          e.preventDefault();
        }
      }}
      className="bg-red-500 text-white px-4 py-2 rounded"
    >
      Delete
    </button>
  );
}