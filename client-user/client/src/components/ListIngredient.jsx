export default function ListIngredient({ ingredients }) {
  return (
    <>
      <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
        Password requirements:
      </h2>
      <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
        <li>{ingredients.name}</li>
      </ul>
    </>
  );
}
