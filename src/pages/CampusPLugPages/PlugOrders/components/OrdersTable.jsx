import { TABLE_HEADERS } from "../constants/orders";
import { StatusBadge }   from "./StatusBadge";
import { CampusIcon }    from "./CampusIcon";
import { ActionButtons } from "./ActionButtons";

// ─── Sub-components ───────────────────────────────────────────────────────────

function TableHeader() {
  return (
    <thead>
      <tr>
        {TABLE_HEADERS.map((heading, i) => (
          <th
            key={heading}
            className={`
              text-left text-[11px] font-bold tracking-wide uppercase
              text-primary-navy/70 pb-3 px-2.5
              border-b border-border whitespace-nowrap
              ${i === 3 ? "hidden sm:table-cell" : ""}
            `}
          >
            {heading}
          </th>
        ))}
      </tr>
    </thead>
  );
}

function OrderRow({ order }) {
  return (
    <tr className="group hover:bg-accent/30 transition-colors">
      {/* Order ID */}
      <td className="px-2.5 py-3.5 border-b border-border align-middle">
        <span className="font-bold text-[12px] text-primary-navy/90 font-mono">
          {order.id}
        </span>
        <div className="text-[10px] text-muted/70 mt-0.5">
          {order.time}
        </div>
      </td>

      {/* Product / Service */}
      <td className="px-2.5 py-3.5 border-b border-border align-middle">
        <div className="text-[13px] font-semibold text-primary-navy/90">
          {order.product}
        </div>
        <div className="text-[12px] text-muted/70">
          {order.type}
        </div>
      </td>

      {/* Buyer */}
      <td className="px-2.5 py-3.5 border-b border-border align-middle">
        <div className="text-[13px] font-medium text-primary-navy/90">
          {order.buyer}
        </div>
        <div className="text-[12px] text-muted/70">
          {order.level}
        </div>
      </td>

      {/* Amount (hidden on mobile) */}
      <td className="px-2.5 py-3.5 border-b border-border align-middle hidden sm:table-cell">
        <strong className="text-[13px] text-primary-navy/90">
          {order.amount}
        </strong>
      </td>

      {/* Campus */}
      <td className="px-2.5 py-3.5 border-b border-border align-middle">
        <CampusIcon campus={order.campus} />
      </td>

      {/* Status */}
      <td className="px-2.5 py-3.5 border-b border-border align-middle">
        <StatusBadge status={order.status} />
      </td>

      {/* Actions */}
      <td className="px-2.5 py-3.5 border-b border-border align-middle">
        <ActionButtons status={order.status} />
      </td>
    </tr>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────

/**
 * Full scrollable orders table.
 *
 * @param {{ orders: Array }} props
 */
export function OrdersTable({ orders }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <TableHeader />
        <tbody>
          {orders.map((order) => (
            <OrderRow key={order.id} order={order} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
