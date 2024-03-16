const $modal = $("div#new-process-modal");
const $modalBackdrop = $("div#new-process-modal-backdrop");
const $modalPanel = $("div#new-process-modal-panel");

const $modalActionShow = $("button#new-process-modal-show");
const $modalActionHide = $("button#new-process-modal-hide");

function toggleDialog() {
  $modal.toggleClass("pointer-events-none");
  $modalBackdrop.toggleClass("opacity-0");
  $modalPanel.toggleClass(
    "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
  );
}

$modalActionShow.on("click", toggleDialog);
$modalActionHide.on("click", toggleDialog);
