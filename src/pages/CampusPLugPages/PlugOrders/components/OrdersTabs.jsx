import { TABS } from "../constants/orders";

/**
 * Horizontal tab bar for filtering orders by status.
 *
 * @param {{ activeTab: string, onTabChange: (key: string) => void, tabs?: typeof TABS }} props
 */
export function OrdersTabs({ activeTab, onTabChange, tabs = TABS }) {
  return (
    <div className="flex gap-0 border-b-2 border-slate-200 dark:border-slate-700 mb-6 overflow-x-auto scrollbar-none">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onTabChange(tab.key)}
          className={`
            px-5 py-2.5 text-[13.5px] font-medium whitespace-nowrap
            border-none bg-transparent cursor-pointer transition-all
            border-b-2 -mb-[2px]
            ${
              activeTab === tab.key
                ? "text-blue-600 dark:text-blue-400 border-b-blue-600 dark:border-b-blue-400 font-semibold"
                : "text-slate-400 dark:text-slate-500 border-b-transparent hover:text-slate-600 dark:hover:text-slate-300"
            }
          `}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
