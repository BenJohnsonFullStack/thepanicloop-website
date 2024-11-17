export default function PhotoSubtitle({ description, credit }) {
    return (
      <div className="my-4">
        <p className="text-sm text-gray-400">
          {description}
          {credit && <span className="italic text-gray-500"> {credit}</span>}
        </p>
        <div className="border-b-2 border-indigo-500 w-24 mt-3 mb-10"></div>
      </div>
    );
  }