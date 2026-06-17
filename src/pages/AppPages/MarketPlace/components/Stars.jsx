import { Star } from "lucide-react";
import { AppIcon } from "../../../../components/icons";

/**
 * Renders a row of 1–5 filled/empty stars based on a numeric rating.
 * Filled stars use amber; empty stars use a muted zinc tone.
 */
export default function Stars({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <AppIcon
          name={"star"}
          key={i}
          size={10}
          className={`size-3 ${
            i <= Math.round(rating)
              ? "fill-rating text-rating"
              : "fill-zinc-200 text-zinc-200 dark:fill-zinc-700 dark:text-zinc-700"}`
          }
        />
      ))}
    </div>
  );
}
