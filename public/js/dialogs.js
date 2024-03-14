const $modal = $(".modal");
const $modalBackdrop = $(".modal__backdrop");
const $modalPanel = $(".modal__panel");

const $modalActionShow = $(".modal__action--show");
const $modalActionHide = $(".modal__action--hide");

function toggleDialog() {
  $modal.toggleClass("pointer-events-none");
  $modalBackdrop.toggleClass("opacity-0");
  $modalPanel.toggleClass(
    "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
  );
}

$modalActionShow.on("click", toggleDialog);
$modalActionHide.on("click", toggleDialog);
