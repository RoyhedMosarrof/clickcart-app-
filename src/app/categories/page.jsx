"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    document.title = "Categories | ClickCart";
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <ul className="max-w-6xl mx-auto px-6 py-10 space-y-4 text-lg font-medium">
        {categories.map((category) => (
          <li
            key={category.slug}
            className="hover:text-primary cursor-pointer transition-colors"
            onClick={() => router.push(`/categories/${category.slug}`)}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
