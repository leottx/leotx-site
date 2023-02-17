import React from "react";

export default function SectionTitle({ itemNumber, itemText }) {
  return (
    <h2 className="flex whitespace-nowrap items-baseline text-2xl mb-4 after:content-[''] after:relative after:h-[1px] after:w-full after:bg-zinc-200 after:block after:ml-3 after:self-center">
      <span className="font-mono text-base text-zinc-500 mr-[2px]">
        {itemNumber}
      </span>
      <span className="font-bold text-zinc-900">{itemText}</span>
    </h2>
  );
}
