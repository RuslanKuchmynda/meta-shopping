import React from "react";
import { Product } from "@/types/type";

type ProductFromJson = Omit<Product, "image">;

export const filterProducts = (
  products: ProductFromJson[],
  searchTerm: string
): ProductFromJson[] => {
  if (!searchTerm.trim()) {
    return products;
  }

  const searchLower = searchTerm.toLowerCase();
  return products.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchLower) ||
      product.company.toLowerCase().includes(searchLower) ||
      product.description.toLowerCase().includes(searchLower) ||
      product.material.toLowerCase().includes(searchLower)
    );
  });
};

export const highlightText = (
  text: string,
  searchTerm: string
): React.ReactNode => {
  if (!searchTerm.trim()) {
    return text;
  }

  const regex = new RegExp(`(${searchTerm})`, "gi");
  const parts = text.split(regex);

  return parts.map((part, index) =>
    regex.test(part) ? (
      <span
        key={index}
        className="bg-yellow-400 text-black font-semibold px-1 rounded"
      >
        {part}
      </span>
    ) : (
      part
    )
  );
};

export const addHighlightedText = (
  product: ProductFromJson,
  searchTerm: string
) => {
  return {
    ...product,
    highlightedName: highlightText(product.name, searchTerm),
    highlightedCompany: highlightText(product.company, searchTerm),
  };
};
