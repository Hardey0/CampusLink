import { useState, useMemo } from "react";

/**
 * Manages filter state and derives the filtered orders list.
 *
 * @param {Array} orders - Full list of order objects.
 * @returns {{ search, setSearch, typeFilter, setTypeFilter,
 *             campusFilter, setCampusFilter, filteredOrders }}
 */
export function useOrderFilters(orders) {
  const [search,       setSearch]       = useState("");
  const [typeFilter,   setTypeFilter]   = useState("All Types");
  const [campusFilter, setCampusFilter] = useState("All Campuses");

  const filteredOrders = useMemo(() => {
    const query = search.toLowerCase();

    return orders.filter((order) => {
      const matchSearch =
        !query ||
        order.id.toLowerCase().includes(query) ||
        order.product.toLowerCase().includes(query) ||
        order.buyer.toLowerCase().includes(query);

      const matchType =
        typeFilter === "All Types" ||
        order.type.toLowerCase().includes(typeFilter.toLowerCase());

      const matchCampus =
        campusFilter === "All Campuses" || order.campus === campusFilter;

      return matchSearch && matchType && matchCampus;
    });
  }, [orders, search, typeFilter, campusFilter]);

  return {
    search,       setSearch,
    typeFilter,   setTypeFilter,
    campusFilter, setCampusFilter,
    filteredOrders,
  };
}
