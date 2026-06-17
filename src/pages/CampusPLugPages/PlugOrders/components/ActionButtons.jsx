import { AppIcon } from "../../../../components/icons";
import { Button } from "../../../../components/UI";

const BASE_BTN =
  "inline-flex items-center gap-1 rounded-md font-semibold transition-colors";

/**
 * Row-level action buttons. Which actions are shown depends on the order status.
 *
 * @param {{ status: "pending"|"processing"|"completed"|"cancelled" }} props
 */
export function ActionButtons({ status }) {
  return (
    <div className="flex gap-1">
      {/* Always visible */}
      <Button
        variant="card"
        size="sm"
        className={`${BASE_BTN}`}
      >
        <AppIcon name="preview" className="size-4" />
        View
      </Button>

      {/* Pending → Confirm */}
      {status === "pending" && (
        <Button
          variant="primaryLight"
          size="sm"
          className={`${BASE_BTN} border-none`}
        >
          <AppIcon name="checkCircle" className="size-4" />
          Confirm
        </Button>
      )}

      {/* Processing → Ship */}
      {status === "processing" && (
        <Button
        variant="accentLight"
        size="sm"
          className={`${BASE_BTN} border-none`}
        >
          <AppIcon name="truck" className="size-4" />
          Ship
        </Button>
      )}
    </div>
  );
}
