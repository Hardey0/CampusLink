import { AppIcon } from "../../../../components/icons";
import ListingCard from "./ListingCard";

/**
 * ListingsGrid
 * Renders either the responsive grid of ListingCards or an empty-state message.
 *
 * @param {{ listings: import("../constants/listings").Listing[] }} props
 */
export default function ListingsGrid({ listings }) {
  if (listings.length === 0) {
    return (
      <div className="text-center py-16 text-muted">
        <AppIcon name="products" className="size-10 mx-auto mb-3 opacity-40" />
        <p className="text-sm font-medium">No listings match your search.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mb-6">
      {listings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
}
