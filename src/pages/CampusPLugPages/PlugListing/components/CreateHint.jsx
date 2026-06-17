import { AppIcon } from "../../../../components/icons";

/**
 * CreateHint
 * Dashed-border call-to-action that prompts the user to add a new listing.
 *
 * @param {{ onClick?: () => void }} props
 */
export default function CreateHint({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full border-2 border-dashed border-accent/50 dark:border-accent/30 rounded-2xl p-8 text-center cursor-pointer transition-all duration-200 hover:border-accent hover:bg-accent-soft/10 group"
    >
      <div className="w-12 h-12 rounded-2xl bg-accent/50 flex items-center justify-center mx-auto mb-3 group-hover:bg-accent-strong/80 transition-colors">
        <AppIcon
          name="add"
          className="size-5 text-accent-strong-light/80 group-hover:text-accent-strong-light transition-colors"
        />
      </div>
      <div className="text-[15px] font-bold text-primary-navy/90 mb-1">
        Add a new listing
      </div>
      <div className="text-sm text-muted">
        Fill in product details, price, images, and set your campus delivery
        options
      </div>
    </button>
  );
}
