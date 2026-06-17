import { STATUS_STYLES } from "../constants/orders";

/**
 * Pill badge reflecting an order's lifecycle status.
 *
 * @param {{ status: "pending"|"processing"|"completed"|"cancelled" }} props
 */
export function StatusBadge({ status }) {
  return (
    <span
      className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold capitalize ${
        STATUS_STYLES[status] ?? ""
      }`}
    >
      {status}
    </span>
  );
}
